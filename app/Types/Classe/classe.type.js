const ClasseType = `
    type Classe {
        id: ID!
        name: String!
        parcours: Parcours!
        eleves: [Eleve]
        createdAt: String!
        updatedAt: String!
    }
`;

export default ClasseType;