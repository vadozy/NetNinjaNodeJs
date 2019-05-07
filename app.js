const express = require('express');

const app = express();
//app.disable('etag');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.send('this is the contact page');
});

app.get('/profile/:id', (req, res) => {
    const data = {
        age: 29,
        job: 'ninja',
        hobbies: ['eating', 'fighting']
    }
    res.render('profile', { id: req.params.id, ...data });
});

app.listen(3000);