import { PrismaClient } from "@prisma/client";
import checkFieldLength from "../../helpers/checkFieldLength.js";
import checkEntryById from "../../helpers/checkEntryById.js";

const prisma = new PrismaClient();

const include = {
    include: {
        matieres: true,
        classes: true,
    }
}



const parcoursController = {
    getParcours: async () => {
        return await prisma.parcours.findMany({
            ...include
        });
    },
    getParcoursById: async ({ id }) => {
        return checkEntryById("parcours", id, include)
    },
    addParcours: async ({ name }) => {
        checkFieldLength("name", name, 3)

        return await prisma.parcours.create({
            data: {
                name,
            },
            ...include
        });
    },
    updateParcours: async ({ id, name }) => {
        await checkEntryById("parcours", id);
        checkFieldLength("name", name, 3)

        return await prisma.parcours.update({
            where: {
                id: parseInt(id),
            },
            data: {
                name,
            },
            ...include
        });
    },
    deleteParcours: async ({ id }) => {
        await checkEntryById("parcours", id);

        return await prisma.parcours.delete({
            where: {
                id: parseInt(id),
            },
            ...include
        });
    }
}

export default parcoursController;