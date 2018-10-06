// export const find = () =>{
//   return 'SELECT employee_Fname,employee_Lname FROM employee';
// };
export const find = 'SELECT employee_id,employee_Fname,employee_Lname,employee_gender FROM employee';
export const findAll = (id) => {
  return `SELECT 
            employee_id,
            employee_Fname,
            employee_Lname,
            employee_Birthdate,
            employee_Age,
            employee_idCard,
            employee_Address,
            employee_Tel,
            employee_Salary,
            employee_Start,
            employee_gender
         FROM employee
         WHERE employee_id = ${id}`
};
export const deleteEmp = (id) => {
  return `DELETE FROM employee WHERE employee_id = ${id}`
};


export const ShowUser =
  `SELECT user_id,user_fName,user_lName,user_gender,user_age,user_tel,training_status 
  FROM users 
  WHERE user_id NOT IN (1) AND training_status = "0"`;

export const findDekNaiSangkud = (id) => {
  return `SELECT users.user_id,users.user_fName,users.user_lName,users.user_gender,users.user_age,users.user_tel 
FROM training_user
INNER JOIN users ON users.user_id = training_user.user_id
WHERE training_user.emp_id = ${id}`
};

export const findChooseUserExerciseDiary = (id) => {
  return `SELECT exDiary_id,exDiary_date,exDiary_details,exDiary_status,exDiary_recomend 
FROM exerciseDiary
WHERE user_id = ${id}`
}
export const findNameEmployee = () => {
  return `
        SELECT 
          e.employee_id,e.employee_Username,e.employee_Fname,COUNT(t.user_id) AS countUser 
        FROM employee AS e 
        LEFT JOIN training_user AS t ON t.emp_id = e.employee_id
        GROUP BY e.employee_id`
};
