import {
  findData,
  findStatus,
  findAllDataBeforeUpdate
} from './queryString';

const ExerciseDiaryModel = {
  find(req, res, id) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(findData(id), (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        })
      })
    })
  },
  findDiaryStatus(req, res, DiaryId) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(findStatus(DiaryId), (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        })
      })
    })
  },
  findAllDataBeforeUpdate(req,res,DiaryId){
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(findAllDataBeforeUpdate(DiaryId), (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        })
      })
    })
  },
  createData(req, res, body) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query('INSERT INTO exercisediary SET ?', body, (err, result) => {
        if (err) return err;
        res.status(201).json({
          result
        })
      })
    })
  },
  //update status
  updateData(req, res, body, id) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query('UPDATE exercisediary SET ? WHERE exDiary_id = ?', [body, id], (err, result) => {
        if (err) return err;
        res.status(201).json({
          result
        })
      })
    })
  },
  //updateAllData
  updateAllData(req, res, body, id) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query('UPDATE exercisediary SET ? WHERE exDiary_id = ?', [body, id], (err, result) => {
        if (err) return err;
        res.status(201).json({
          result
        })
      })
    })
  }
};
export default ExerciseDiaryModel;
