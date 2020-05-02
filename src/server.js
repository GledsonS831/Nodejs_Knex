const express = require('express');
const routes = require('./routes');

const app = express();

//configurar para que o express utilize o json
app.use(express.json());

app.use(routes);

//not found
app.use((req, res, next) =>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

//cactch all
app.use( (error, req, res, next) =>{
    res.status(error.status || 500)
    res.json({
        error: error.message
    })
})

app.listen(3333, () =>{
    console.log("running");
});