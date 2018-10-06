import controller from './controllers';

const HistoryRoute = (app,name) =>{
    app.get(`${name}/:id`,controller.findById)
    app.post(`${name}`,controller.create)
}

export default HistoryRoute;