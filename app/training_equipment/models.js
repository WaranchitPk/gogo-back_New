import {
  showDataHome,
  showDataHome_SumMachine,
  showDataEachMachine,
  showDataFullMachine,
  showStatusMachine
} from './queryString';

const TrainingEquipmentModel = {
  //show Data In Home
  findShowDataInHome(req, res) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(showDataHome, (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        })
      })
    })
  },
  //Show Sum Machine In Home
  findShowDataInHome_SumMachine(req, res) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(showDataHome_SumMachine, (err, result) => {
        if (err) return err;
        const allSumMachine = [
          {
            category_name: 'จำนวนรวมทั้งหมด',
            countMachine: this.funcFindSumMachineHome(result)
          }
        ];
        let arrResult = [];
        arrResult = arrResult.concat(result, allSumMachine);
        res.status(200).json({
          result: arrResult
        })
      })
    })
  },
  funcFindSumMachineHome(result) {
    const sumValue = result.reduce((a, b) => {
      return a + b.countMachine
    }, 0);
    return sumValue
  },
  //show Data for category machine
  findShowDataForCategoryMachine(req, res, id) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(showDataEachMachine(id), (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        })
      })
    })
  },
  //findAllDataMachine
  findShowDataFullMachine(req, res, id) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(showDataFullMachine(id), (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        })
      })
    })
  },
  createDataMachine(req, res, body) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query('INSERT INTO training_equipmemnt SET ? ', body, (err, result) => {
        if (err) return err;
        res.status(201).json({
          result
        })
      })
    })
  },
  findStatusMachine(req, res, id) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(showStatusMachine(id), (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        })
      })
    })
  },
  updateStatusMachine(req, res,body,id) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query('UPDATE training_equipmemnt SET ? WHERE trainingEquipment_id = ?', [body, id], (err, result) => {
        if (err) return err;
        res.status(201).json({
          result
        })
      })
    })
  }
};
export default TrainingEquipmentModel