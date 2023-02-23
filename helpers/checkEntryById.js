import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const checkEntryById = async (model, id, include = {}) => {
    const value = await prisma[model].findUnique({
        where: {
            id: parseInt(id)
        },
        ...include
    });

    if (!value) {
        throw new Error(`${model} n'existe pas`);
    }

    return value;
}

export default checkEntryById;
