// Controllers index
import parcoursController from "./ParcoursController.js";
import matiereController from "./MatiereController.js";
import coursController from "./CoursController.js";
import classeController from "./ClasseController.js";
import eleveController from "./EleveController.js";
import noteController from "./NoteController.js";
import formateurController from "./FormateurController.js";


// merge all controllers
const root = {
    ...parcoursController,
    ...matiereController,
    ...coursController,
    ...classeController,
    ...eleveController,
    ...noteController,
    ...formateurController
};

export default root;