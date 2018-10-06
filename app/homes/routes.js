import Controller from './controllers';

const routes = (app, name) => {
  app.get(`${name}/pricing`, Controller.findPricingUseGym);
  app.get(`${name}/pricing/promotion`, Controller.findPromotion);

};
export default routes;