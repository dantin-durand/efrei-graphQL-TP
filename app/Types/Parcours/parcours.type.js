const ParcoursType = `
    type Parcours {
        id: ID!
        name: String!
        matieres: [Matiere]
        classes: [Classe]
        createdAt: String!
        updatedAt: String!
    }
`;

export default ParcoursType;