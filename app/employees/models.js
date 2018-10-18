import {
    find,
    findAll,
    deleteEmp,
    ShowUser,
    findDekNaiSangkud,
    findChooseUserExerciseDiary,
    findNameEmployee,
    maxId,
    ShowAllUser
} from './queryStr';

const EmployeeModel = {
    //find fName lName Status
    find(req, res) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query(find, (err, result) => {
                if (err) return err;
                res.status(200).json({
                    result
                })
            })
        })
    },
    findAll(req, res, id) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query(findAll(id), (err, result) => {
                if (err) return err;
                res.status(200).json({
                    result
                })
            })
        })
    },
    findMaxId(req, res) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query(maxId, (err, result) => {
                if (err) return err;
                res.status(200).json({
                    result
                })
            })
        })
    },
    createEmp(req, res, body) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query('INSERT INTO employee SET ?', body, (err, result) => {
                if (err) return err;
                res.status(201).json({
                    result
                })
            })
        })
    },
    updateEmp(req, res, id, body) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query('UPDATE employee SET ? WHERE employee_id = ?', [body, id], (err, result) => {
                if (err) return err;
                res.status(201).json({
                    result
                })
            })
        })
    },
    deleteEmp(req, res, id) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query(deleteEmp(id), (err, result) => {
                if (err) return err;
                res.status(204).json({
                    result
                })
            })
        })
    },
    showUser(req, res) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query(ShowUser, (err, result) => {
                if (err) return err;
                res.status(200).json({
                    result
                })
            })
        })
    },
    showUserAll(req,res){
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query(ShowAllUser, (err, result) => {
                if (err) return err;
                res.status(200).json({
                    result
                })
            })
        })
    },
    UpdateStatus(req, res, selected) {
        req.getConnection((err, connection) => {
            if (err) return err;
            let body = {
                training_status: '1'
            }
            connection.query(`UPDATE users SET ? WHERE user_id IN(${selected})`, body, (err, result) => {
                if (err) return err;
                res.status(200).json({
                    result
                })
            })
        })
    },

    InsertUser(req, res, result) {
        req.getConnection((err, connection) => {
            if (err) return err;
            let sql = "INSERT training_user(emp_id,user_id) VALUES ?";

            connection.query(sql, [result], (err, result) => {
                if (err) return err;
                res.send({
                    result
                })
            })
        })
    },
    findDataUserTraningForEmployee(req, res, id) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query(findDekNaiSangkud(id), (err, result) => {
                if (err) return err;
                res.status(200).json({
                    result
                })
            })
        })
    },
    findChooseDataEmployee(req, res, id) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query(findChooseUserExerciseDiary(id), (err, result) => {
                if (err) return err;
                res.status(200).json({
                    result
                })
            })
        })
    },
    findAllEmployee(req, res) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query(findNameEmployee(), (err, result) => {
                if (err) return err;
                res.status(200).json({
                    result
                })
            })
        })
    }
};
export default EmployeeModel;
