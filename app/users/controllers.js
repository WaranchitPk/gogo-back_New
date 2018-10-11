import model from './models';
import bcrypt from 'bcrypt';
import moment from 'moment';

const UsersController = {
    findUser(req, res) {
        const {id} = req.params;
        model.findUser(req, res, id)
    },
    findNameUser(req, res) {
        const {id, type} = req.params;
        model.findNameUser(req, res, id, type);
    },
    findStatusUser(req, res) {
        const {params: {id}} = req;
        model.findStatusUser(req, res, id)
    },
    findMaxId(req,res) {
        model.findMaxId(req,res)
    },
    create(req, res, next) {
        const saltRounds = 12;
        const myPlaintextPassword = req.body.password;
        const hashPass = bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {
                const body = {
                    user_id: req.body.userId,
                    user_username: req.body.username,
                    user_password: hash,
                    user_fName: req.body.fName,
                    user_lName: req.body.lName,
                    user_tel: req.body.tel,
                    user_gender: req.body.gender,
                    user_type: req.body.type,
                    user_age: req.body.age,
                    user_idCard: req.body.userIdCard,
                    created_date: moment().format("YYYY-MM-DD"),
                    user_start: moment().format("YYYY-MM-DD"),
                    user_expire: moment().add(req.body.month, 'months').format("YYYY-MM-DD")
                };
                // res.send({
                //     body
                // })
                model.create(req, res, body)
            })
        });
        // const dateNow =  new Date().getTime();
        // console.log(moment().format("YYYY-MM-DD"));
        // console.log(moment().add(1, 'months').format("YYYY-MM-DD"));
    },
    update(req, res) {
        const {body, params: {id}} = req;
        if (body.pic) {
            console.log('มีการส่ง pic มา')
            const bodyData = {
                user_fName: body.fName,
                user_lName: body.lName,
                user_age: body.age,
                user_gender: body.gender,
                user_email: body.email,
                user_pic: body.pic,
                updated_date: moment().format("YYYY-MM-DD")
            };
            model.update(req, res, bodyData, id)
        } else {
            console.log('ไม่มีการส่ง pic มา')
            const bodyData = {
                user_fName: body.fName,
                user_lName: body.lName,
                user_age: body.age,
                user_gender: body.gender,
                user_email: body.email,
                updated_date: moment().format("YYYY-MM-DD")
            };
            model.update(req, res, bodyData, id)
        }


    }
};

export default UsersController;
