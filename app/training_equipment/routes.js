import controller from './controllers';
///api/training_equipment
const routes = (app, name) => {
    app.get(`${name}/home`, controller.findShowDataInHome);
    app.get(`${name}/home/sumMachine`, controller.findShowDataInHome_SumMachine);
    app.get(`${name}/home/findStatus`, controller.findStatusMachineAvailable)
    app.get(`${name}/:id`, controller.findShowDataForCategoryMachine);
    app.get(`${name}/alldataMachine/:id`, controller.findShowDataFullMachine);
    app.post(`${name}/`, controller.createDataMachine);
    app.get(`${name}/statusMachine/:id`, controller.findStatusMachine);
    app.put(`${name}/statusMachine/:id`, controller.updateStatusMachine)

};

export default routes;
