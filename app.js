const express = require('express');
const todoController = require('./controllers/todoController');

const app = express();

// set template engine
app.set('view engine', 'ejs');

// static files (mapped to all routes)
app.use(express.static('./public'));

// fire controllers
todoController(app);

// listen
app.listen(3000);
console.log('Listening to port 3000');
