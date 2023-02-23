import { PrismaClient } from "@prisma/client";
import checkEntryById from "../../helpers/checkEntryById.js";
import formatStringToDate from "../../helpers/formatStringToDate.js";

const prisma = new PrismaClient();

const include = {
    include: {
        matiere: {
            include: {
                parcours: true
            }
        },
        formateur: true
    }
}

const coursController = {
    getCours: async () => {
        return await prisma.cours.findMany({
            ...include
        });
    },
    getCoursById: async ({ id }) => {
        return await checkEntryById("cours", id, include);
    },
    addCours: async ({ start, end, room, matiereId, formateurId }) => {

        // check and format dates
        const dateStart = formatStringToDate(start);
        const dateEnd = formatStringToDate(end);

        // check if the matiere and formateur exist
        await checkEntryById("matiere", matiereId);
        await checkEntryById("formateur", formateurId);

        const result = await prisma.cours.create({
            data: {
                start: dateStart,
                end: dateEnd,
                room,
                matiere: {
                    connect: {
                        id: parseInt(matiereId)
                    }
                },
                formateur: {
                    connect: {
                        id: parseInt(formateurId)
                    }
                }
            },
            ...include
        });
        console.log("result -> ", result);
        return result;
    },
    updateCours: async ({ id, start, end, room, matiereId, formateurId }) => {
        // check and format dates
        const dateStart = formatStringToDate(start);
        const dateEnd = formatStringToDate(end);

        // check if the matiere and formateur exist
        await checkEntryById("matiere", matiereId);
        await checkEntryById("formateur", formateurId);

        return await prisma.cours.update({
            where: {
                id: parseInt(id)
            },
            data: {
                start: dateStart,
                end: dateEnd,
                room,
                matiere: {
                    connect: {
                        id: parseInt(matiereId)
                    }
                },
                formateur: {
                    connect: {
                        id: parseInt(formateurId)
                    }
                }
            },
            ...include
        });
    },
    deleteCours: async ({ id }) => {
        // check if the cours exist
        await checkEntryById("cours", id);

        return await prisma.cours.delete({
            where: {
                id: parseInt(id)
            },
            ...include
        });
    }
}

export default coursController;