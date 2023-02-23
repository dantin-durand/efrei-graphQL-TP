const FormateurQuery = `
    getFormateurs: [Formateur]
    getFormateurById(id: ID!): Formateur
    getForateurByMatiere(matiereId: ID!): [Formateur]
`;

export default FormateurQuery;