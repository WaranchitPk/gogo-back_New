import Controller from './controllers';

const routes = (app, name) => {
  app.get(`${name}/`, Controller.find);
  app.get(`${name}/findCountUserTrainingEmp`,Controller.findAllEmployeeCountUserTraining)
  app.get(`${name}/ShowUserActive`, Controller.showAllUser);
  app.get(`${name}/ShowAllUser`,Controller.showAllUserActiveAndActive)
  app.get(`${name}/maxId`,Controller.findMaxId)
  app.post(`${name}/`, Controller.createEmp);
  app.get(`${name}/:id`, Controller.findAll);
  app.patch(`${name}/:id`, Controller.update);
  app.delete(`${name}/:id`, Controller.delete);

  app.post(`${name}/addUser`, Controller.InsertUser);
  app.put(`${name}/UpdateStatusTraining`,Controller.UpdateStatusUser);
  app.get(`${name}/findUserTraining/:id`,Controller.findDataUserTraningForEmployee);
  app.get(`${name}/findChooseDataEmployee/:id`,Controller.findChooseUserExerciseDiary)




};
export default routes;
