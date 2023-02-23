// Controllers index
import parcoursController from "./ParcoursController.js";
import matiereController from "./MatiereController.js";
import coursController from "./CoursController.js";


// merge all controllers
const root = {
    ...parcoursController,
    ...matiereController,
    ...coursController,
};

export default root;