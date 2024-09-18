import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Binding the routes with appropriate handler in the
 * Express application..
 * @param {Express} app The Express application.
 * @author Isaac Kumatse <https://github.com/qwertyriks>
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
