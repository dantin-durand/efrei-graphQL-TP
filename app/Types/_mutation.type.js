import ClasseMutation from "./Classe/classe.mutation.js";
import CoursMutation from "./Cours/cours.mutation.js";
import MatiereMutation from "./Matiere/matiere.mutation.js";
import EleveMutation from "./Eleve/eleve.mutation.js";
import NoteMutation from "./Note/note.mutation.js";
import ParcoursMutation from "./Parcours/parcours.mutation.js";
import FormateurMutation from "./Formateur/formateur.mutation.js";
import joinText from "../../helpers/joinText.js";

const MutationType = `
type Mutation {${joinText(
    ParcoursMutation,
    MatiereMutation,
    CoursMutation,
    ClasseMutation,
    EleveMutation,
    NoteMutation,
    // FormateurMutation
)}}`;

export default MutationType;