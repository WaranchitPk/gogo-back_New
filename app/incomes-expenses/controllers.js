import Model from './models';
import moment from 'moment';

const IncomeController = {
    findDataIncome(req, res) {
        Model.findDataIncome(req, res)
    },
    findDataIncomesCategories(req, res) {
        Model.findDataIncomeCate(req, res)
    },
    findDataIncomeCateChange(req, res) {
        const {cateId} = req.params
        Model.findDataIncomeCateChange(req, res, cateId)
    },
    createDataIncome(req, res) {
        const {body} = req;
	if(body.userType === 1){
	     const bodyDataIncome = {
            incomes_name: body.IncomeName,
            incomes_details: body.IncomeDetail,
            incomes_amount: body.IncomeAmount,
            incomes_date: moment(body.IncomeDate).format("YYYY-MM-DD"),
            incomes_cateId: body.IncomeCate,
            created_by: body.userId
        };
		Model.createDataIncome(req, res, bodyDataIncome);	
	}else if(body.userType === 2){
	const bodyDataIncome = {
            incomes_name: body.IncomeName,
            incomes_details: body.IncomeDetail,
            incomes_amount: body.IncomeAmount,
            incomes_date: moment(body.IncomeDate).format("YYYY-MM-DD"),
            incomes_cateId: body.IncomeCate,
            created_by_emp: body.userId
        };
        Model.createDataIncome(req, res, bodyDataIncome);
	}
 
    },
    findDataIncomeTrends(req,res){
        const {year} = req.params;
        Model.findDataIncomeTrends(req,res,year)
    },
    findDataExpenses(req, res) {
        Model.findDataExpenses(req, res)
    },
    findDataExpensesCateChange(req, res) {
        const {cateId} = req.params
        Model.findDataExpensesCateChange(req, res, cateId)
    },
    createDataExpenses(req, res) {
        const {body} = req;
        const bodyDataIncome = {
            expenses_names: body.ExpensesName,
            expenses_details: body.ExpensesDetail,
            expenses_amount: body.ExpensesAmount,
            expenses_date: moment(body.ExpensesDate).format("YYYY-MM-DD"),
            expenses_cate: body.ExpensesCate,
            created_by: 10000
        };
        Model.createDataExpenses(req, res, bodyDataIncome);
    },
    loadYearExpenses(req, res) {
        Model.loadYearExpenses(req, res);
    },
    loadMonthExpenses(req, res) {
        const {year} = req.params
        Model.loadMonthExpenses(req, res, year)
    },
    loadDataExpensesCate(req,res){
        Model.loadDataExpensesCate(req,res)
    },
    loadDataExpensesTrends(req,res){
        const {year} = req.params;
        Model.findDataExpensesTrends(req,res,year)
    }
};
export default IncomeController;
