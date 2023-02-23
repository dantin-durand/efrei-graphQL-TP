const MatiereMutation = `
    addMatiere(name: String!, parcoursId: ID!): Matiere
    updateMatiere(id: ID!, name: String!, parcoursId: ID!): Matiere
    deleteMatiere(id: ID!): Matiere
`;

export default MatiereMutation;