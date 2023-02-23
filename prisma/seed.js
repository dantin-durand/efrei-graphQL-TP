import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedParcours() {
  await prisma.parcours.createMany({
    data: [
      {
        id: 1,
        name: "Parcours 1",
      },
      {
        id: 2,
        name: "Parcours 2",
      },
    ],
  });
}

async function seedMatieres() {
  await prisma.matiere.createMany({
    data: [
      {
        id: 1,
        name: "Matiere 1",
        parcoursId: 1,
      },
      {
        id: 2,
        name: "Matiere 2",
        parcoursId: 1,
      },
      {
        id: 3,
        name: "Matiere 3",
        parcoursId: 2,
      },
    ],
  });
}

async function seedFormateurs() {
  await prisma.formateur.createMany({
    data: [
      {
        id: 1,
        firstname: "John",
        lastname: "Doe",
      },
      {
        id: 2,
        firstname: "Jane",
        lastname: "Doe",
      },
    ],
  });
}

async function seedCours() {
  await prisma.cours.createMany({
    data: [
      {
        id: 1,
        start: new Date("2023-01-01T09:00:00.000Z"),
        end: new Date("2023-01-01T10:00:00.000Z"),
        room: "Room 1",
        matiereId: 1,
        formateurId: 1,
      },
      {
        id: 2,
        start: new Date("2023-01-01T10:00:00.000Z"),
        end: new Date("2023-01-01T11:00:00.000Z"),
        room: "Room 2",
        matiereId: 2,
        formateurId: 2,
      },
      {
        id: 3,
        start: new Date("2023-01-01T11:00:00.000Z"),
        end: new Date("2023-01-01T12:00:00.000Z"),
        room: "Room 1",
        matiereId: 3,
        formateurId: 1,
      },
      {
        id: 4,
        start: new Date("2023-01-01T12:00:00.000Z"),
        end: new Date("2023-01-01T13:00:00.000Z"),
        room: "Room 2",
        matiereId: 1,
        formateurId: 2,
      },
    ],
  });
}

async function seedClasses() {
  await prisma.classe.createMany({
    data: [
      {
        id: 1,
        name: "Classe 1",
        parcoursId: 1,
      },
      {
        id: 2,
        name: "Classe 2",
        parcoursId: 2,
      },
    ],
  });
}

async function seedEleves() {
  await prisma.eleve.createMany({
    data: [
      {
        id: 1,
        firstname: "John",
        lastname: "Doe",
        classeId: 1,
      },
      {
        id: 2,
        firstname: "Jane",
        lastname: "Doe",
        classeId: 1,
      },
      {
        id: 3,
        firstname: "Dantin",
        lastname: "Durand",
        classeId: 2,
      },
    ],
  });
}

async function seedNotes() {
  await prisma.note.createMany({
    data: [
      {
        id: 1,
        note: 10,
        eleveId: 1,
        matiereId: 1,
      },
      {
        id: 2,
        note: 12,
        eleveId: 1,
        matiereId: 2,
      },
      {
        id: 3,
        note: 14,
        eleveId: 1,
        matiereId: 2,
      },
      {
        id: 4,
        note: 16,
        eleveId: 2,
        matiereId: 1,
      },
      {
        id: 5,
        note: 18,
        eleveId: 2,
        matiereId: 2,
      },
    ],
  });
}


async function seed() {
  await seedParcours();
  await seedMatieres();
  await seedFormateurs();
  await seedCours();
  await seedClasses();
  await seedEleves();
  await seedNotes();
}

seed();

