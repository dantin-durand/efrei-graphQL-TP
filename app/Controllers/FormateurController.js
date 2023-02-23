import { PrismaClient } from "@prisma/client";
import checkEntryById from "../../helpers/checkEntryById.js";
import checkFieldLength from "../../helpers/checkFieldLength.js";

const prisma = new PrismaClient();

const include = {
    include: {
        cours: {
            include: {
                matiere: true,
            }
        }
    }
}

const formateurController = {
    getFormateurs: async () => {
        return await prisma.formateur.findMany({
            ...include
        });
    },
    getFormateurById: async ({ id }) => {
        return checkEntryById("formateur", id, include);
    },
    getForateurByMatiereId: async ({ id }) => {
        await checkEntryById("matiere", id);

        return await prisma.formateur.findMany({
            where: {
                cours: {
                    some: {
                        matiere: {
                            id: parseInt(id)
                        }
                    }
                }
            },
            ...include
        });
    },
    getFormateurByCoursId: async ({ id }) => {
        await checkEntryById("cours", id);

        return await prisma.formateur.findMany({
            where: {
                cours: {
                    some: {
                        id: parseInt(id)
                    }
                }
            },
            ...include
        });
    },
    addFormateur: async ({ firstname, lastname }) => {
        checkFieldLength("firstname", firstname, 3);
        checkFieldLength("lastname", lastname, 3);

        return await prisma.formateur.create({
            data: {
                firstname,
                lastname,
            },
            ...include
        });
    },
    updateFormateur: async ({ id, firstname, lastname }) => {
        checkFieldLength("firstname", firstname, 3);
        checkFieldLength("lastname", lastname, 3);
        await checkEntryById("formateur", id);

        return await prisma.formateur.update({
            where: {
                id: parseInt(id),
            },
            data: {
                firstname,
                lastname,
            },
            ...include
        });
    },
    deleteFormateur: async ({ id }) => {
        await checkEntryById("formateur", id);

        return await prisma.formateur.delete({
            where: {
                id: parseInt(id),
            },
            ...include
        });
    }
}

export default formateurController;