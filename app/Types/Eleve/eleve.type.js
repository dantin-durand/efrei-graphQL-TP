const EleveType = `
    type Eleve {
        id: ID!
        firstname: String!
        lastname: String!
        classe: Classe!
        notes: [Note]
    }
`;

export default EleveType;