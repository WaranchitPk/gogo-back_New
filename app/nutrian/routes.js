import controller from './controllers';

const NutrianRoute = (app, name) => {
  //create Food
  app.post(`${name}/`,controller.createFood);
  app.get(`${name}/`, controller.find);
  //findAll
  app.get(`${name}/showAll/foods/:id`, controller.findAllFoods);

  //find menu from Cate
  app.get(`${name}/show/:cate`, controller.findMenuFromCate);

  //findFoodFromMenuId
  //http://localhost:9999/api/nutrian/show/foods/14
  app.get(`${name}/show/foods/:id`, controller.findFoodFromMenuID);

  app.get(`${name}/show/selectFood/:selected`, controller.findSelectFood)
};
export default NutrianRoute