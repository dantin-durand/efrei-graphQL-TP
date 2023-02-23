import { PrismaClient } from "@prisma/client";
import checkEntryById from "../../helpers/checkEntryById.js";
import checkFieldLength from "../../helpers/checkFieldLength.js";

const prisma = new PrismaClient();

const include = {
    include: {
        eleve: true,
        matiere: {
            include: {
                cours: true,
                parcours: true
            }
        }
    }
}

const noteController = {
    getNotes: async () => {
        return await prisma.note.findMany({
            ...include
        });
    },
    getNoteById: async ({ id }) => {
        return checkEntryById("note", id, include);
    },
    getNotesByEleveId: async ({ id }) => {
        await checkEntryById("eleve", id);

        return await prisma.note.findMany({
            where: {
                eleveId: parseInt(id)
            },
            ...include
        });
    },
    addNote: async ({ note, eleveId, matiereId }) => {
        if (note < 0 || note > 20) throw new Error("La note doit être comprise entre 0 et 20");
        await checkEntryById("eleve", eleveId);
        await checkEntryById("matiere", matiereId);

        return await prisma.note.create({
            data: {
                note,
                eleve: {
                    connect: { id: parseInt(eleveId) }
                },
                matiere: {
                    connect: { id: parseInt(matiereId) }
                }
            },
            ...include
        });
    },
    updateNote: async ({ id, note, eleveId, matiereId }) => {
        if (note < 0 || note > 20) throw new Error("La note doit être comprise entre 0 et 20");
        await checkEntryById("note", id);
        await checkEntryById("eleve", eleveId);
        await checkEntryById("matiere", matiereId);

        return await prisma.note.update({
            where: {
                id: parseInt(id)
            },
            data: {
                note,
                eleve: {
                    connect: { id: parseInt(eleveId) }
                },
                matiere: {
                    connect: { id: parseInt(matiereId) }
                }
            },
            ...include
        });
    },
    deleteNote: async ({ id }) => {
        await checkEntryById("note", id);

        return await prisma.note.delete({
            where: {
                id: parseInt(id)
            },
            ...include
        });
    }
}

export default noteController;