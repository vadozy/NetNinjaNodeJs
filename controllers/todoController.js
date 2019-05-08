const express = require('express'); // body-parser is now inside express

let data = [
  {item: 'get milk'},
  {item: 'walk dog'},
  {item: 'kick some coding'},
];

module.exports = app => {

  app.get('/todo', (req, res) => {
    res.render('todo', {todos: data});
  });

  app.post('/todo', express.urlencoded({ extended: true }), (req, res) => {
    data.push(req.body);
    res.json(data);
  });

  app.delete('/todo/:item', (req, res) => {
    data = data.filter(el => (el.item.replace(/ /g, "-") !== req.params.item));
    res.json(data);
  });

};