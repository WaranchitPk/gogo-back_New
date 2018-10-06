import controller from './controllers';

const ExerciseDiaryRoute = (app, name) => {
  // /api/exercise_Diary
  //find all data
  app.get(`${name}/:id`, controller.find);
  app.get(`${name}/findStatus/:id`,controller.findDiaryStatus);
  app.get(`${name}/findAllData/:id`,controller.findAllDataBeforeUpdate);
  app.post(`${name}/`, controller.create);
  app.put(`${name}/:id`, controller.updateStatus);
  app.put(`${name}/updateAllData/:id`,controller.updateAllData)
};
export default ExerciseDiaryRoute