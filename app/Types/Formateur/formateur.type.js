const FormateurType = `
    type Formateur {
        id: ID!
        firstname: String!
        lastname: String!
        cours: [Cours]
        createdAt: String!
        updatedAt: String!
    }
`;

export default FormateurType;