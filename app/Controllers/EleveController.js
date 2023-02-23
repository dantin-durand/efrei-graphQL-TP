import { PrismaClient } from "@prisma/client";
import checkEntryById from "../../helpers/checkEntryById.js";
import checkFieldLength from "../../helpers/checkFieldLength.js";

const prisma = new PrismaClient();

const include = {
    include: {
        classe: true,
        notes: {
            include: {
                matiere: true
            }
        }
    }
}

const eleveController = {
    getEleves: async () => {
        return await prisma.eleve.findMany({
            ...include
        });
    },
    getEleveById: async ({ id }) => {
        return checkEntryById("eleve", id, include);
    },
    getElevesByClasseId: async ({ id }) => {
        await checkEntryById("classe", id);

        return await prisma.eleve.findMany({
            where: {
                classeId: parseInt(id)
            },
            ...include
        });
    },
    addEleve: async ({ firstname, lastname, classeId }) => {
        checkFieldLength("firstname", firstname, 3);
        checkFieldLength("lastname", lastname, 3);
        await checkEntryById("classe", classeId);

        return await prisma.eleve.create({
            data: {
                firstname,
                lastname,
                classe: {
                    connect: { id: parseInt(classeId) }
                }
            },
            ...include
        });
    },
    updateEleve: async ({ id, firstname, lastname, classeId }) => {
        checkFieldLength("firstname", firstname, 3);
        checkFieldLength("lastname", lastname, 3);
        await checkEntryById("eleve", id);
        await checkEntryById("classe", classeId);

        return await prisma.eleve.update({
            where: {
                id: parseInt(id)
            },
            data: {
                firstname,
                lastname,
                classe: {
                    connect: {
                        id: parseInt(classeId)
                    }
                }
            },
            ...include
        });
    },
    deleteEleve: async ({ id }) => {
        await checkEntryById("eleve", id);

        return await prisma.eleve.delete({
            where: {
                id: parseInt(id)
            },
            ...include
        });
    }
}

export default eleveController;