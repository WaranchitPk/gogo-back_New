import Controller from './controllers';

const routes = (app, name) => {
    app.get(`${name}/incomes/`, Controller.findDataIncome);
    app.get(`${name}/incomes/categories`, Controller.findDataIncomesCategories)
    app.get(`${name}/incomes/categories/:cateId`, Controller.findDataIncomeCateChange)
    app.post(`${name}/incomes/`, Controller.createDataIncome);
    app.get(`${name}/incomes/trends/:year`,Controller.findDataIncomeTrends)
    app.get(`${name}/expenses`, Controller.findDataExpenses);
    app.get(`${name}/expenses/categories`, Controller.loadDataExpensesCate)

    app.get(`${name}/expenses/categories/:cateId`, Controller.findDataExpensesCateChange)
    app.post(`${name}/expenses`, Controller.createDataExpenses);
    app.get(`${name}/expenses/SelectYear`, Controller.loadYearExpenses);
    app.get(`${name}/expenses/SelectMonth/:year`, Controller.loadMonthExpenses)
    app.get(`${name}/expenses/trends/:year`,Controller.loadDataExpensesTrends)
};
export default routes;
