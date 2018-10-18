const PricingPromotionModel = {
  find(req, res) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query('SELECT pricing_PerDay,pricing_PerMonth,pricing_PerYear FROM pricing', (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        })
      })
    })
  },
  update(req,res,body,id){
    req.getConnection((err,connection) =>{
      if (err) return err;
      connection.query('UPDATE pricing SET ? WHERE pricing_id = ?',[body,id],(err,result) =>{
        if (err) return err;
        res.status(201).json({
          result
        })
      })
    })
  },
  findPromotion(req,res){
    req.getConnection((err,connection) =>{
      if (err) return err;
      connection.query('SELECT promotion_Date, promotion_Desc FROM promotion',(err,result) =>{
        if (err) return err;
        res.status(200).json({
          result
        })
      })
    })
  },
  updatePromotion(req,res,body,id){
    req.getConnection((err,connection) =>{
      if (err) return err;
      connection.query('UPDATE promotion SET ? WHERE promotion_id = ?',[body,id],(err,result) =>{
        if (err) return err;
        res.status(201).json({
          result
        })
      })
    })
  },
};
export default PricingPromotionModel;
