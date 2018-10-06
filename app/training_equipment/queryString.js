export const showDataHome = `SELECT t.trainingEquipment_id,t.trainingEquipment_name,t.trainingEquipment_status,c.category_name,t.trainingEquipment_dateForBuy,t.trainingEquipment_price,created_by_name 
FROM training_equipmemnt AS t 
INNER JOIN trainingEquipment_Categories AS c
ON t.trainingEquipment_category = c.category_id`;

export const showDataHome_SumMachine =
  `SELECT
	  c.category_name,
    Count(t.trainingEquipment_id) AS countMachine
  FROM training_equipmemnt AS t
  INNER JOIN trainingEquipment_Categories AS c
  ON t.trainingEquipment_category = c.category_id
  GROUP BY trainingEquipment_category`;

export const countStatusMachine =
    `
    SELECT 
trainingEquipment_status,
COUNT(trainingEquipment_status) as countStatus
FROM training_equipmemnt
GROUP BY trainingEquipment_status
    `

export const showDataEachMachine = (cate_id) => {
  return `
  SELECT 
	  trainingEquipment_id,trainingEquipment_name,trainingEquipment_status,trainingEquipment_dateForBuy,created_by_name
  FROM training_equipmemnt
  WHERE trainingEquipment_category = ${cate_id}`
};

export const showDataFullMachine = (id) => {
  return `
  SELECT 
    trainingEquipment_id,
    trainingEquipment_name,
    trainingEquipment_dateForBuy,
    trainingEquipment_price,
    trainingEquipment_status,
    trainingEquipment_pic
  FROM training_equipmemnt
  WHERE trainingEquipment_id = ${id}
  `
};

export const showStatusMachine = (id) =>{
  return `
  SELECT 
	  trainingEquipment_status 
  FROM training_equipmemnt
  WHERE trainingEquipment_id = ${id}
  `
};
