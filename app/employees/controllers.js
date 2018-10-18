import Model from './models';
import bcrypt from 'bcrypt';
import {findChooseUserExerciseDiary} from "./queryStr";

const EmployeeController = {
    //find fName lName Status
    find(req, res) {
        Model.find(req, res)
    },
    //create data employee
    createEmp(req, res) {
        const {body} = req;
        bcrypt.hash(body.pass, 12, (err, resultHashPass) => {
            const dataEmp = {
                employee_id: body.id,
                employee_Username: body.user,
                employee_Password: resultHashPass,
                employee_Fname: body.fName,
                employee_Lname: body.lName,
                employee_Birthdate: body.birthDate,
                employee_Age: body.age,
                employee_idCard: body.idCard,
                employee_Address: body.address,
                employee_Tel: body.tel,
                employee_Salary: body.salary,
                employee_Start: body.startDate,
                employee_Status: body.status,
                user_Type: body.userType
            }
            Model.createEmp(req, res, dataEmp)
        })
    },
    //find All Data Employee
    findAll(req, res) {
        const {id} = req.params;
        Model.findAll(req, res, id)
    },
    findMaxId(req, res) {
        Model.findMaxId(req, res)
    },
    update(req, res) {
        const {body, params: {id}} = req;
        const dataEmp = {
            employee_Fname: body.fName,
            employee_Lname: body.lName,
            employee_Birthdate: body.birthDate,
            employee_Age: body.age,
            employee_Address: body.address,
            employee_Tel: body.tel,
            employee_Salary: body.salary,
            employee_Start: body.startDate,
        };
        Model.updateEmp(req, res, id, dataEmp)
    },
    delete(req, res) {
        const {id} = req.params;
        Model.deleteEmp(req, res, id);
    },
    showAllUser(req, res) {
        Model.showUser(req, res)
    },
    showAllUserActiveAndActive(req,res){
        Model.showUserAll(req,res)
    },
    InsertUser(req, res) {
        const {body} = req;

        const arrUserId = body.userId;
        const empId = body.empId;
        const arr = ''
        console.log(arrUserId)
        // arrUserId.map(result =>{
        //   console.log(result)
        // })
        const result = arrUserId.map(value => {
            // const arr = [
            //   empId,value
            // ];
            const arr = [];
            const arrre = arr.concat(empId, value);
            // const arrResult = '';
            // const val = [
            //   arr,value
            // ]

            // arrResult.concat();

            return arrre
        })
        console.log(result)
        // res.send({
        //   result
        // });
        Model.InsertUser(req, res, result)

    },
    UpdateStatusUser(req, res) {
        const {body} = req;
        const userId = body.userId;

        Model.UpdateStatus(req, res, userId)
    },
    findDataUserTraningForEmployee(req, res) {
        const {id} = req.params;
        Model.findDataUserTraningForEmployee(req, res, id)
    },
    findChooseUserExerciseDiary(req, res) {
        const {id} = req.params;
        Model.findChooseDataEmployee(req, res, id)
    },
    findAllEmployeeCountUserTraining(req, res) {
        console.log('aaa');
        Model.findAllEmployee(req, res)
    }
};
export default EmployeeController
