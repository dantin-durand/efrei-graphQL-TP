const FormateurMutation = `
    addNote(note: Float!, eleveId: ID!, matiereId: ID!): Note
    updateNote(id: ID!, note: Float!, eleveId: ID!, matiereId: ID!): Note
    deleteNote(id: ID!): Boolean
`;

export default FormateurMutation;