
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('Id').primary();
        tbl.text('Name', 255).notNullable();
        tbl.text('Date', 25);
        tbl.text('Instructions', 255);
    })
    .createTable('ingredients', tbl => {
        tbl.increments('Id').primary();
        tbl.integer('Receipe_id')
        .references("Id")
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
        tbl.text('Name', 255).notNullable();
        tbl.integer('Quantity').notNullable();
    })


};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
};
