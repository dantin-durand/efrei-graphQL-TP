const NoteQuery = `
    getNotes: [Note]
    getNoteById(id: ID!): Note
    getNotesByEleveId(id: ID!): [Note]
`;

export default NoteQuery;