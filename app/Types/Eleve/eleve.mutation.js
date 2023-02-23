const EleveMutation = `
    addEleve(firstname: String!, lastname: String!,classeId: ID!) : Eleve
    updateEleve(id: ID!, firstname: String!, lastname: String!, classeId: ID!) : Eleve
    deleteEleve(id: ID!) : Eleve
`;

export default EleveMutation;