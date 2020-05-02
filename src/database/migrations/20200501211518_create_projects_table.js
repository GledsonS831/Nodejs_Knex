
exports.up = function(knex) {
    return knex.schema.createTable('projects', function(table){
        
      table.increments('id');
      table.text('title');
        
      //relationship
      // 1 - n
      table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE');

      table.timestamps(true, true);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('projects');
  };
  