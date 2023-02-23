const ParcoursType = `
    type Parcours {
        id: ID!
        name: String!
        matieres: [Matiere]
        classes: [Classe]
    }
`;

export default ParcoursType;