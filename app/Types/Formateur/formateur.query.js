const FormateurQuery = `
    getFormateurs: [Formateur]
    getFormateurById(id: ID!): Formateur
    getFormateursByMatiereId(id: ID!): [Formateur]
    getFormateursByCoursId(id: ID!): [Formateur]
`;

export default FormateurQuery;