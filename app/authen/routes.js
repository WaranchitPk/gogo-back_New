import controller from './controllers';
const authenRoute = (app,name) =>{
    app.post(`${name}`,controller.login)
};
export default authenRoute;