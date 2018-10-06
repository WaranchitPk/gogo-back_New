import Model from './models';

const TrainingEquipmentController = {
  findShowDataInHome(req, res) {
    Model.findShowDataInHome(req, res)
  },
  findShowDataInHome_SumMachine(req, res) {
    Model.findShowDataInHome_SumMachine(req, res)
  },
  findShowDataForCategoryMachine(req,res){
    const {id} = req.params;
    Model.findShowDataForCategoryMachine(req,res,id)
  },
  findShowDataFullMachine(req,res){
    const {id} = req.params;
    Model.findShowDataFullMachine(req,res,id)
  },
  createDataMachine(req,res){
    const {body} = req;
    if (body.typeCreated === 1){
      const bodyData = {
        trainingEquipment_name: body.name,
        trainingEquipment_dateForBuy: body.buyDate,
        trainingEquipment_price: body.price,
        trainingEquipment_category: body.category,
        created_by: body.created_by,
        trainingEquipment_pic: body.pic,
        created_by_name: body.by_name
      };
      Model.createDataMachine(req,res,bodyData)
    }else if(body.typeCreated === 2){
      const bodyData = {
        trainingEquipment_name: body.name,
        trainingEquipment_dateForBuy: body.buyDate,
        trainingEquipment_price: body.price,
        trainingEquipment_category: body.category,
        created_by_emp: body.created_by,
        trainingEquipment_pic: body.pic,
        created_by_name: body.by_name
      };
      Model.createDataMachine(req,res,bodyData)
    }
  },
  findStatusMachine(req,res){
    const {id} = req.params;
    Model.findStatusMachine(req,res,id)
  },
  updateStatusMachine(req,res){
    const {id} = req.params;
    const {body} = req;
    const bodyData = {
      trainingEquipment_status: body.status
    };
    Model.updateStatusMachine(req,res,bodyData,id)
  }
};

export default TrainingEquipmentController