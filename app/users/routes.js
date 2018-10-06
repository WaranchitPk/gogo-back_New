import controller from './controllers';
const routes = (app,name) =>{
    app.get(`${name}/:id`,controller.findUser);
    app.get(`${name}/name/:id/:type`,controller.findNameUser);
    app.get(`${name}/status/:id`,controller.findStatusUser);
    app.post(`${name}/`,controller.create);
    app.patch(`${name}/:id`,controller.update);
    app.delete(`${name}/:id`);
};
export default routes;