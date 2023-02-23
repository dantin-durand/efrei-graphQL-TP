const MatiereType = `
    type Matiere {
        id: ID!
        name: String!
        parcours: Parcours
        cours: [Cours]
        notes: [Note]
    }
`;

export default MatiereType;