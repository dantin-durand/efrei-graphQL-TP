const EleveType = `
    type Eleve {
        id: ID!
        firstname: String!
        lastname: String!
        classe: Classe!
        notes: [Note]
        createdAt: String!
        updatedAt: String!
    }
`;

export default EleveType;