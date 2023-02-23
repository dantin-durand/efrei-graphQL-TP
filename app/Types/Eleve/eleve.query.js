const EleveQuery = `
    getEleves: [Eleve]
    getEleveById(id: ID!): Eleve
    getElevesByClasseId(id: ID!): [Eleve]
`;

export default EleveQuery;