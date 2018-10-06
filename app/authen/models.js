import jwt from 'jwt-simple';
import bcrypt from 'bcrypt';

const AuthenModel = {
  login(req, res, username, password, type) {
    if (+type === 1) {
      this.typeAdmin(req,res,username,password,type)
    } else if (+type === 2) {
      this.typeEmployee(req,res,username,password,type)
    }
    else if (+type === 3) {
      this.typeUser(req,res,username,password,type)
    }
  },
  typeAdmin(req,res,username,password,type){
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query('SELECT admin_id,admin_username,admin_password  from admin WHERE admin_username= ? ', username, (err, result) => {
        if (err) return err;
        // res.status(200).json({
        //   result
        // })
        if (result.length === 0) {
          res.json({
            isLogin: false
          })
      }else{
          const chk_pass = bcrypt.compareSync(password, result[0].admin_password);
          if (chk_pass) {
            res.status(201).json({
              isLogin: true,
              token: this.authenticate(result[0].admin_id, +type)
            });
          } else {
            res.json({
              isLogin: false
            })
          }
        
      }
        // } else {
        //   const chk_pass = bcrypt.compareSync(password, result[0].admin_password);
        //   if (chk_pass) {
        //     res.status(201).json({
        //       isLogin: true,
        //       token: this.authenticate(result[0].admin_id, +type)
        //     });
        //   } else {
        //     res.json({
        //       isLogin: false
        //     })
        //   }
        // }
      })
    })
  },
  typeEmployee(req, res, username, password,type) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query('SELECT employee_id,employee_Username,employee_Password  from employee WHERE employee_Username= ? ', username, (err, result) => {
        if (err) return err;
        if (result.length === 0) {
          res.json({
            isLogin: false
          })
        } else {
          const chk_pass = bcrypt.compareSync(password, result[0].employee_Password)
          if (chk_pass) {
            res.status(201).json({
              isLogin: true,
              token: this.authenticate(result[0].employee_id, +type)
            });
          } else {
            res.json({
              isLogin: false
            })
          }
        }
      })
    })
  },
  typeUser(req, res, username, password,type) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query('SELECT user_id,user_username,user_password  from users WHERE user_username= ? ', username, (err, result) => {
        if (err) return err;
        if (result.length === 0) {
          res.json({
            isLogin: false
          })
        } else {
          const chk_pass = bcrypt.compareSync(password, result[0].user_password)
          if (chk_pass) {
            res.status(201).json({
              isLogin: true,
              token: this.authenticate(result[0].user_id, +type)
            });
          } else {
            res.json({
              isLogin: false
            })
          }
        }
      })
    })
  },
  authenticate(id, type) {
    const payload = {
      userId: id,
      userType: type
    };
    return jwt.encode(payload, process.env.secret)
  }
};
export default AuthenModel;