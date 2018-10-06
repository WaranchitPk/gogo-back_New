import Model from './models';

const ExerciseDiaryController = {
  find(req, res) {
    const { id } = req.params;
    Model.find(req, res, id)
  },
  findDiaryStatus(req, res) {
    const { id } = req.params;
    Model.findDiaryStatus(req, res, id)
  },
  findAllDataBeforeUpdate(req, res) {
    const { id } = req.params;
    Model.findAllDataBeforeUpdate(req, res, id)
  },
  create(req, res) {
    const { body } = req;
    let bodyData = {};
    if (body.userType === 2) {

      bodyData = {
        exDiary_date: body.date,
        exDiary_details: body.details,
        exDiary_status: body.status,
        exDiary_recomend: body.recomend,
        created_by: body.created_by,
        user_id: body.userId,
        created_by_name: body.by_name
      };
    } else if (body.userType === 3) {
      bodyData = {
        exDiary_date: body.date,
        exDiary_details: body.details,
        exDiary_status: body.status,
        created_by_user: body.created_by,
        user_id: body.userId,
        created_by_name: body.by_name
      };
    }
    Model.createData(req, res, bodyData)

  },
  updateStatus(req, res) {
    const { body } = req;
    const { id } = req.params;
    const bodyStatus = {
      exDiary_status: body.status,
    };
    Model.updateData(req, res, bodyStatus, id)
  }
  ,
  updateAllData(req, res) {
    const { id } = req.params;
    const { body } = req;
    let bodyData = {};
    if (body.userType === 2) {
      bodyData = {
        exDiary_date: body.date,
        exDiary_details: body.details,
        exDiary_recomend: body.recomend
      };
    } else if (body.userType === 3) {
      bodyData = {
        exDiary_date: body.date,
        exDiary_details: body.details,
      };
    }
    Model.updateAllData(req, res, bodyData, id)
  }
};

export default ExerciseDiaryController;