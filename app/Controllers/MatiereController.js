import { PrismaClient } from "@prisma/client";
import checkEntryById from "../../helpers/checkEntryById.js";

const prisma = new PrismaClient();

const include = {
    include: {
        cours: true,
        parcours: true,
        notes: true
    }
}

const matiereController = {
    getMatieres: async () => {
        return await prisma.matiere.findMany({
            ...include
        });
    },
    getMatiereById: async ({ id }) => {
        return checkEntryById("matiere", id, include);
    },
    addMatiere: async ({ name, parcoursId }) => {
        // check if the parcours exist
        await checkEntryById("parcours", parcoursId);

        return await prisma.matiere.create({
            data: {
                name,
                parcoursId: parseInt(parcoursId)
            },
            ...include
        });
    },
    updateMatiere: async ({ id, name, parcoursId }) => {
        // check if the parcours and matiere exist
        await checkEntryById("matiere", id);
        await checkEntryById("parcours", parcoursId);

        return await prisma.matiere.update({
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
    deleteMatiere: async ({ id }) => {
        // check if the matiere exist
        await checkEntryById("matiere", id);

        return await prisma.matiere.delete({
            where: {
                id: parseInt(id)
            },
            ...include
        });
    }
}

export default matiereController;