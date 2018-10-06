export const findAllFoods = (id) => {
    return `SELECT food_id,foods_name,food_cal,food_protien,food_fat,food_carb,food_perUnit 
            FROM foods 
            WHERE cate_id=${id}`;
};

export const findMenuFromCate = (id) => {
    return `SELECT menu_id,menu_name,cate_id 
            FROM food_cate_menu
            WHERE cate_id = ${id}`
};

export const findFoodFromMenuId = (id) => {
    return `SELECT food_id,foods_name,food_cal,food_protien,food_fat,food_carb,food_perUnit 
            FROM foods 
            WHERE menu_id=${id}`
};

export const findSelectFood = selected => {
    return `SELECT food_id,foods_name,food_cal,food_protien,food_fat,food_carb 
            FROM foods
            WHERE food_id IN (${selected})`
};
