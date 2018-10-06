import {
    loadSelectYear,
    loadSelectMonth,
    loadDataDateDayExpenses,
    loadDataIncomes,
    loadDataIncomesCategories,
    loadDataIncomeCateChange,
    loadDataExpensesCategories,
    loadDataExpenses,
    loadDataExpensesCateChange,
    loadDataIncomeTrends,
    loadDataExpensesTrends
} from './queryStr'

const IncomesModel = {
    findDataIncome(req, res) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query(loadDataIncomes, (err, result) => {
                if (err) return err;
                res.status(200).json({
                    result
                })
            })
        })
    },
    findDataIncomeCate(req, res) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query(loadDataIncomesCategories, (err, result) => {
                if (err) return err;
                res.status(200).json({
                    result
                })
            })
        })
    },
    findDataIncomeCateChange(req, res, cateId) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query(loadDataIncomeCateChange(cateId), (err, result) => {
                if (err) return err;
                res.status(200).json({
                    result
                })
            })
        })
    },
    createDataIncome(req, res, body) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query('INSERT INTO incomes SET ?', body, (err, result) => {
                if (err) return err;
                res.status(201).json({
                    result
                })
            })
        })
    },
    findDataExpenses(req, res) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query(loadDataExpenses, (err, result) => {
                if (err) return err;
                res.status(200).json({
                    result
                })
            })
        })
    },
    findDataExpensesCateChange(req, res, cateId) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query(loadDataExpensesCateChange(cateId), (err, result) => {
                if (err) return err;
                res.status(200).json({
                    result
                })
            })
        })
    },
    findDataIncomeTrends(req, res, year) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query(loadDataIncomeTrends(year), (err, result) => {
                if (err) return err;
                res.status(200).json({
                    result
                })
            })
        })
    },
    createDataExpenses(req, res, body) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query('INSERT INTO expenses SET ?', body, (err, result) => {
                if (err) return err;
                res.status(201).json({
                    result
                })
            })
        })
    },
    loadYearExpenses(req, res) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query(loadSelectYear, (err, result) => {
                if (err) return err;
                res.status(200).json({
                    result
                })
            })
        })
    },
    loadMonthExpenses(req, res, year) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query(loadSelectMonth(year), (err, result) => {
                if (err) return err;
                res.status(200).json({
                    result
                })
            })
        })
    },
    loadDataExpensesCate(req, res) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query(loadDataExpensesCategories, (err, result) => {
                if (err) return err;
                res.status(200).json({
                    result
                })
            })
        })
    },
    findDataExpensesTrends(req, res, year) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query(loadDataExpensesTrends(year), (err, result) => {
                if (err) return err;
                res.status(200).json({
                    result
                })
            })
        })
    },
};
export default IncomesModel;
