const ClasseMutation = `
    addClasse(name: String!, parcoursId: ID!): Classe
    updateClasse(id: ID!, name: String!, parcoursId: ID!): Classe
    deleteClasse(id: ID!): Classe
`;

export default ClasseMutation;