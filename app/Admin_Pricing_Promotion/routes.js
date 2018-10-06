import controller from './controllers';

const PricingPromotionRoute = (app, name) => {
  app.get(`${name}/`, controller.find);
  app.put(`${name}/:id`, controller.update);
  app.get(`${name}/promotion`, controller.findPromotion);
  app.put(`${name}/promotion/:id`,controller.updatePromotion)
};
export default PricingPromotionRoute;