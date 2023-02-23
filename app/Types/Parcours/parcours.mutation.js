const ParcoursMutation = `
    addParcours(name: String!) : Parcours
    updateParcours(id: ID!, name: String!) : Parcours
    deleteParcours(id: ID!) : Parcours
`;

export default ParcoursMutation;