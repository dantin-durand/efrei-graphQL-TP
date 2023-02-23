import { buildSchema } from "graphql";

// Root types
import MutationType from "./_mutation.type.js";
import QueryType from "./_query.type.js";

// Types
// import ...

// Helpers
import joinText from "../../helpers/joinText.js";
import ParcoursType from "./Parcours/parcours.type.js";
import MatiereType from "./Matiere/matiere.type.js";
import CoursType from "./Cours/cours.type.js";
import ClasseType from "./Classe/classe.type.js";
import EleveType from "./Eleve/eleve.type.js";
import NoteType from "./Note/note.type.js";
import FormateurType from "./Formateur/formateur.type.js";


const schema = buildSchema(joinText(
    ParcoursType,
    MatiereType,
    CoursType,
    ClasseType,
    EleveType,
    NoteType,
    FormateurType,

    // root types
    QueryType,
    MutationType
));

export default schema;
