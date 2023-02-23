import { PrismaClient } from "@prisma/client";
import checkEntryById from "../../helpers/checkEntryById.js";
import checkFieldLength from "../../helpers/checkFieldLength.js";

const prisma = new PrismaClient();

const include = {
    include: {
        parcours: true,
        eleves: true,
    }
}

const classeController = {
    getClasses: async () => {
        return await prisma.classe.findMany({
            ...include
        });
    },
    getClasseById: async ({ id }) => {
        return checkEntryById("classe", id, include);
    },
    addClasse: async ({ name, parcoursId }) => {
        checkFieldLength("name", name, 5);
        await checkEntryById("parcours", parcoursId);

        return await prisma.classe.create({
            data: {
                name,
                parcours: {
                    connect: { id: parseInt(parcoursId) }
                }
            },
            ...include
        });
    },
    updateClasse: async ({ id, name, parcoursId }) => {
        checkFieldLength("name", name, 5);
        await checkEntryById("classe", id);
        await checkEntryById("parcours", parcoursId);

        return await prisma.classe.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name,
                parcours: {
                    connect: {
                        id: parseInt(parcoursId)
                    }
                }
            },
            ...include
        });
    },
    deleteClasse: async ({ id }) => {
        await checkEntryById("classe", id);

        return await prisma.classe.delete({
            where: {
                id: parseInt(id)
            },
            ...include
        });
    }
}

export default classeController;