const FormateurType = `
    type Formateur {
        id: ID!
        firstname: String!
        lastname: String!
        cours: [Cours]
    }
`;

export default FormateurType;