import Model from './models';

const HomesController = {
  findPromotion(req, res) {
    Model.find(req, res);
  },
  findPricingUseGym(req,res){
    Model.findPricingUseGym(req,res);
  }
};
export default HomesController