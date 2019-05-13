const express = require('express'); // body-parser is now inside express
const mongoose = require('mongoose');

// Connect to Mongo
mongoose.connect("mongodb://localhost:27017/todo", { useNewUrlParser: true });
// Create a schema
const todoSchema = new mongoose.Schema({
  item: String
});
// Model
const Todo = mongoose.model('Todo', todoSchema);

/*
const item1 = Todo({item: "buy flowers"}).save(err => {
  if (err) throw err;
  console.log("item saved");
});
*/

/*
let data = [
  {item: 'get milk'},
  {item: 'walk dog'},
  {item: 'kick some coding'},
];
*/

module.exports = app => {

  app.get('/todo', (req, res) => {
    Todo.find({}, (err, data) => {
      if (err) throw err;
      res.render('todo', {todos: data});
    });
  });

  app.post('/todo', express.urlencoded({ extended: true }), (req, res) => {
    //Get data from the view and add it to Mongo
    const newTodo = Todo(req.body).save((err, data) => {
      if (err) throw err;
      res.json(data)
    });
    //data.push(req.body);
    //res.json(data);
  });

  app.delete('/todo/:item', (req, res) => {
    //Delete the item from Mongo
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove((err, data) => {
      if (err) throw err;
      res.json(data);
    });
    //data = data.filter(el => (el.item.replace(/ /g, "-") !== req.params.item));
    //res.json(data);
  });

};