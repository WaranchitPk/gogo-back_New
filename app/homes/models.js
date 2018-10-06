import {
  findPromotion,
  findPricingToUseGtm
} from './queryStr';

const HomesModel = {
  //find Pricing
  find(req, res) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(findPromotion, (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        })
      })
    })
  },
  //find Pricing to use gym
  findPricingUseGym(req, res) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(findPricingToUseGtm, (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        })
      })
    })
  },
};
export default HomesModel;