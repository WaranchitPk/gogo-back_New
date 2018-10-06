import {
  UserRoutes,
  NamesApi,
  AuthenticateRoute,
  HistoryRoute,
  NutrianRoute,
  EmployeeRoute,
  IncomeRoute,
  HomesRoute,
  ExerciseDiaryRoute,
  TrainingEquipment,
  PricingPromotionRoute
} from './';

const MainRoute = (app) => {
  AuthenticateRoute(app, NamesApi.signin);
  UserRoutes(app, NamesApi.users);
  HistoryRoute(app, NamesApi.history);
  NutrianRoute(app, NamesApi.nutrian);
  EmployeeRoute(app, NamesApi.employees);
  IncomeRoute(app, NamesApi.incomes);
  HomesRoute(app,NamesApi.homes);
  ExerciseDiaryRoute(app,NamesApi.exerciseDiary);
  TrainingEquipment(app,NamesApi.trainingEquipment);
  PricingPromotionRoute(app,NamesApi.pricePromotion)
};

export default MainRoute;