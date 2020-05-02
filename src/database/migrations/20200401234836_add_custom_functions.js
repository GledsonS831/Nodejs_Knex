const Custom_functions = `
    CREATE OR REPLACE FUNCTION on_update_timestamp()
    RETURNS trigger AS $$

    BEGIN
        NEW.update_at = now();
        RETURN NEW; 
    END;

    $$ language 'plpgsql';
`

const DROP_CUSTOM_FUNCTIONS = `
DROP FUNCTION on_update_timestamp()
`

exports.up = async function(knex){
    return knex.raw(Custom_functions);
}

exports.down = async function(knex){
    return knex.raw(Custom_functions);
}