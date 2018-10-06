import { resolve } from "upath";
import {
  findAllFoods,
  findMenuFromCate,
  findFoodFromMenuId,
  findSelectFood
} from './queryString';

const NutrianModel = {
  find(req, res) {
    req.getConnection((err, connection) => {
      if (err) return err;
      const id = [1, 2, 3]
      const arr2 = [{
        food_id: 1,
        amount: 1
      }, {
        food_id: 2,
        amount: 2
      }, {
        food_id: 3,
        amount: 3
      }];
      connection.query(`SELECT food_id,foods_name,food_cal,food_protien,food_fat,food_carb FROM foods WHERE food_id IN (${1},${2},${3})`, (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        })
      })
    })
  },
  findAllFoods(req, res, id) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(findAllFoods(id), (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        });
      })
    })
  },
  //find Cate
  // findCateFood(req,res){
  //   req.getConnection((err,connection)=>{
  //     if (err) return err;
  //     connection.query()
  //   })
  // },
  //find menu from Cate
  findMenuFromCate(req, res, cate) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(findMenuFromCate(cate), (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        })
      })
    })
  },
  findFoodFromMenuID(req, res, id) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(findFoodFromMenuId(id), (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        })
      })
    })
  },
  findSelectFoods(req, res, selectedFood) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(findSelectFood(selectedFood), (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        })
      })
    })
  },
  createFood(req, res,body) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query('INSERT INTO foods SET ?', body, (err, result) => {
        if (err) return err;
        res.status(201).json({
          result
        })
      })
    })
  }
};

export default NutrianModel;