const db = require('./dbConfig.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes () {
    return db('recipes')
};

function getShoppingList(recipe_id){
    return db('recipes')
    .join('ingredients', 'recipes.Id','ingredients.Recipe_id')
    .select('Name', 'Quantity')
    .where('ingredients.Recipe_id', recipe_id)  
};

function getInstructions(recipe_id) {
    return db('recipes')
    .select('recipes.Instructions')
    .where('recipes.Id', recipe_id )
}
