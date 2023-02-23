const CoursMutation = `
    addCours(start: String!, end: String!, room: String!, matiereId: ID!, formateurId: ID!): Cours
    updateCours(id: ID!, start: String!, end: String!, room: String!, matiereId: ID!, formateurId: ID!): Cours
    deleteCours(id: ID!): Cours
`;

export default CoursMutation;