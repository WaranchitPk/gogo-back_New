import Model from './models';
import moment from 'moment';
const NutrianController = {
  find(req, res) {
    Model.find(req, res)
  },
  findAllFoods(req, res) {
    const { id } = req.params;
    Model.findAllFoods(req, res, id);
  },
  findMenuFromCate(req, res) {
    const { cate } = req.params;
    Model.findMenuFromCate(req, res, cate)
  },
  findFoodFromMenuID(req, res) {
    const { id } = req.params;
    Model.findFoodFromMenuID(req, res, id);
  },
  findSelectFood(req, res) {
    const { selected } = req.params;
    Model.findSelectFoods(req, res, selected);
  },
  createFood(req, res) {
    const { body } = req;
    const bodyFood = {
      foods_name: body.foodName,
      food_cal:body.foodCal,
      food_protien: body.foodProtein,
      food_fat: body.foodFat,
      food_carb: body.foodCarb,
      food_perUnit: body.foodPerUnit,
      cate_id: body.valueCate,
      menu_id: body.valueMenu,
      created_Date: moment().format("YYYY-MM-DD"),
      created_by: 10000
    };
    console.log(bodyFood)
    Model.createFood(req,res,bodyFood)
  }
};
export default NutrianController;