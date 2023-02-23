const FormateurMutation = `
    addFormateur(firstname: String!, lastname: String!): Formateur!
    updateFormateur(id: ID!, firstname: String!, lastname: String!): Formateur!
    deleteFormateur(id: ID!): Formateur!
`;

export default FormateurMutation;