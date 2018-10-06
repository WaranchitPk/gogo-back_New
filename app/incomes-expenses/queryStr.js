export const loadDataDateDayExpenses = (year, month) => {
    return `
  SELECT
	  day(expenses_date) as dayExpenses,
    count(expenses_date) as countDay
  FROM expenses    
  WHERE year(expenses_date) = ${year} && month(expenses_date) = ${month}
  GROUP BY dayExpenses
  `
};

export const loadDataIncomes = `
SELECT 
  i.incomes_id,i.incomes_name,i.incomes_details,i.incomes_amount,i.incomes_date,i_cate.incomes_cateName,i.created_by  
FROM incomes as i
INNER JOIN incomes_categories as i_cate ON i.incomes_cateId = i_cate.incomes_cateId
ORDER BY i.incomes_id DESC`;

export const loadDataIncomesCategories = 'SELECT * FROM incomes_categories';
export const loadDataIncomeCateChange = (cate) => {
    if (+cate === 0){
        return `SELECT 
  i.incomes_id,i.incomes_name,i.incomes_details,i.incomes_amount,i.incomes_date,i_cate.incomes_cateName,i.created_by  
FROM incomes as i
INNER JOIN incomes_categories as i_cate ON i.incomes_cateId = i_cate.incomes_cateId
ORDER BY i.incomes_id DESC;`
    } else{
        return `SELECT 
 i.incomes_id,i.incomes_name,i.incomes_details,i.incomes_amount,i.incomes_date,i_cate.incomes_cateName,i.created_by  
FROM incomes as i
INNER JOIN incomes_categories as i_cate ON i.incomes_cateId = i_cate.incomes_cateId
WHERE i.incomes_cateId = ${cate}`
    }
}
export const loadDataExpenses = `
SELECT 
 e.expenses_id,e.expenses_names,e.expenses_details,e.expenses_amount,e.expenses_date,e_cate.expenses_cateName,e.created_by  
FROM expenses as e
INNER JOIN expenses_categories as e_cate ON e.expenses_cate = e_cate.expenses_cateId
ORDER BY e.expenses_id DESC`;
export const loadDataExpensesCateChange = (cate) => {
    if (+cate === 0){
        return `
SELECT 
 e.expenses_id,e.expenses_names,e.expenses_details,e.expenses_amount,e.expenses_date,e_cate.expenses_cateName,e.created_by  
FROM expenses as e
INNER JOIN expenses_categories as e_cate ON e.expenses_cate = e_cate.expenses_cateId
ORDER BY e.expenses_id DESC`
    } else{
        return `SELECT 
 e.expenses_id,e.expenses_names,e.expenses_details,e.expenses_amount,e.expenses_date,e_cate.expenses_cateName,e.created_by  
FROM expenses as e
INNER JOIN expenses_categories as e_cate ON e.expenses_cate = e_cate.expenses_cateId
WHERE e.expenses_cate = ${cate}`
    }
}
export const loadSelectYear = `
  SELECT 
    DISTINCT year(expenses_date) as year
  FROM expenses
  `;
export const loadSelectMonth = (year) => {
    return `
  SELECT 
    DISTINCT month(expenses_date) as month
  FROM expenses
  WHERE year(expenses_date) = ${year}
  ORDER BY month ASC
`
};

export const loadDataExpensesCategories = 'SELECT * FROM expenses_categories';


//trends income
export const loadDataIncomeTrends = (year) =>{
    return `
    SELECT
        MONTH(incomes_date) as incomeMonth,
        SUM(incomes_amount) as sumMoney
    FROM incomes
    WHERE YEAR(incomes_date) = ${year}
    GROUP BY incomeMonth`
}
//trends expenses
export const loadDataExpensesTrends = (year) =>{
    return `
    SELECT
        MONTH(expenses_date) as expensesMonth,
        SUM(expenses_amount) as sumMoney
    FROM expenses
    WHERE YEAR(expenses_date) = ${year}
    GROUP BY expensesMonth`
}
