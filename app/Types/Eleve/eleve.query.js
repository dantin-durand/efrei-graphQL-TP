const EleveQuery = `
    getEleves: [Eleve]
    getEleve(id: ID!): Eleve
    getElevesByClasseId(id: ID!): [Eleve]
`;

export default EleveQuery;