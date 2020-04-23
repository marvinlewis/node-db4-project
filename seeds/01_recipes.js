
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {Name : 'Gumbo', Date : '10-20-20', Instructions : 'STIR FRY!!'},
      ]);
    });
};
