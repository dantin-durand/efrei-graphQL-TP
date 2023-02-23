// Controllers index
import parcoursController from "./ParcoursController.js";
import matiereController from "./MatiereController.js";
import coursController from "./CoursController.js";
import classeController from "./ClasseController.js";
import eleveController from "./EleveController.js";


// merge all controllers
const root = {
    ...parcoursController,
    ...matiereController,
    ...coursController,
    ...classeController,
    ...eleveController
};

export default root;