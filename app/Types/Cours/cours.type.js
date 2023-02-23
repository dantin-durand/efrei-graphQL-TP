const CoursType = `
    type Cours {
        id: ID!
        start: String!
        end: String!
        room: String!
        matiere: Matiere!
        formateur: Formateur!
    }
`;

export default CoursType;