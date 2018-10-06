import moment from "moment";

const UserModel = {
  findUser(req, res, id) {
    req.getConnection((err, connection) => {
      if (err) return err;
      const findUser = `SELECT user_fName,user_lName,user_age,user_gender,user_email,user_pic 
                              FROM users 
                              WHERE user_id = ${id}`;
      connection.query(findUser, (err, result) => {
        if (err) return err;
        res.status(201).json({
          data: result
        });
      });
    });
  },
  // const findUser = `SELECT user_fName,user_lName,user_age,user_gender,user_email
  //                           FROM users
  //                           WHERE user_id = ${id}`;
  findNameUser(req, res, id, type) {
    if (+type === 2) {
      this.NameEmployee(req, res, id)
    }
    else if (+type === 3) {
      this.NameMember(req, res, id)
    }
  },
  //ย้ายไปอยู่ในตอน login Authen Model
  findStatusUser(req, res, id) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query('select user_expire from users where user_id = ?', id, (err, result) => {
          // console.log(result[0].user_expire)
          if (err) return err;
          let expireDate = result[0].timeExpire;
          let nowDate = moment(new Date()).format("YYYY-MM-DD");
          if ("2018-08-02" >= "2019-08-02") {
            res.status(200).json({ status: "หมดอายุ" });
          } else {
            res.status(200).json({ status: "ยังไม่หมดอายุ" })
          }
        }
      );
    });
  },
  create(req, res, body) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query("insert into users set ?", body, (err, result) => {
        if (err) return err;
        res.status(201).json({
          data: result
        });
      });
    });
  },
  //update data
  update(req, res, body, id) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query('UPDATE users SET ? WHERE user_id = ?', [body, id], (err, result) => {
        if (err) return err;
        console.log(result.length);
        res.status(201).json({
          msg: 'success'
        })
      })
    })
  },
  NameMember(req, res, id) {
    req.getConnection((err, connection) => {
      if (err) return err;
      const findName = `SELECT user_username FROM users WHERE user_id = ${id}`;
      connection.query(findName, (err, result) => {
        if (err) return err;
        const firstCharName = result[0].user_username[0].toUpperCase();
        const secondCharName = result[0].user_username[1].toUpperCase();
        const name = `${firstCharName}${secondCharName}`;
        const fullName = result[0].user_username;
        res.status(200).json({
          name,
          fullName
        })
      })
    })
  },
  NameEmployee(req, res, id) {
    req.getConnection((err, connection) => {
      if (err) return err;
      const findName = `SELECT employee_Username FROM employee WHERE employee_id = ${id}`;
      connection.query(findName, (err, result) => {
        if (err) return err;
        const firstCharName = result[0].employee_Username[0].toUpperCase();
        const secondCharName = result[0].employee_Username[1].toUpperCase();
        const name = `${firstCharName}${secondCharName}`;
        const fullName = result[0].employee_Username;
        res.status(200).json({
          name,
          fullName
        })
      })
    })
  }
};
export default UserModel;
