const FormateurQuery = `
    getFormateurs: [Formateur]
    getFormateurById(id: ID!): Formateur
    getForateurByMatiereId(id: ID!): [Formateur]
    getFormateurByCoursId(id: ID!): [Formateur]
`;

export default FormateurQuery;