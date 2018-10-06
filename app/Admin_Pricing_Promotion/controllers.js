import Model from './models';

const AdminPricingPromotionController = {
  find(req, res) {
    Model.find(req, res)
  },
  update(req, res) {
    const { body } = req;
    const { params: { id } } = req;
    const bodyData = {
      pricing_PerDay: +body.day,
      pricing_PerMonth: +body.month,
      pricing_PerYear: +body.year
    };
    Model.update(req, res, bodyData, id)
  },
  findPromotion(req, res) {
    Model.findPromotion(req, res)
  },
  updatePromotion(req, res) {
    const { body } = req;
    const {params : {id}} = req;
    const bodyData = {
      promotion_Date: body.date,
      promotion_Desc: body.desc
    };
    Model.updatePromotion(req,res,bodyData,id)
  }
};
export default AdminPricingPromotionController