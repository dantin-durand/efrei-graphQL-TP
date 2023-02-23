const ClasseType = `
    type Classe {
        id: ID!
        name: String!
        parcours: Parcours!
        eleves: [Eleve]
    }
`;

export default ClasseType;