import AuthenModel from './models';

const AuthenController = {
    login(req,res){
        const {username,password,userType} = req.body;

        // res.send({
        //     user: username,
        //     pass: password
        // })
        // console.log(username,password)
        AuthenModel.login(req,res,username,password,userType)
        // console.log(req.body.msg);
    }
};
export default AuthenController;
