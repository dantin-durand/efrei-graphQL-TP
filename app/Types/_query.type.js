import joinText from "../../helpers/joinText.js";
import ClasseQuery from "./Classe/classe.query.js";
import CoursQuery from "./Cours/cours.query.js";
import EleveQuery from "./Eleve/eleve.query.js";
import FormateurQuery from "./Formateur/formateur.query.js";
import MatiereQuery from "./Matiere/matiere.query.js";
import NoteQuery from "./Note/note.query.js";
import ParcoursQuery from "./Parcours/parcours.query.js";

const QueryType = `
type Query {${joinText(
    ParcoursQuery,
    MatiereQuery,
    CoursQuery,
    ClasseQuery,
    EleveQuery,
    NoteQuery,
    FormateurQuery
)}}`;

export default QueryType;