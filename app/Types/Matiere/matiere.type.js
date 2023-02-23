const MatiereType = `
    type Matiere {
        id: ID!
        name: String!
        parcours: Parcours
        cours: [Cours]
        notes: [Note]
        createdAt: String!
        updatedAt: String!
    }
`;

export default MatiereType;