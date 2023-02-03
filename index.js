const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
//const helmet = require('helmet');


// view engine setup
app.use(express.static(__dirname + "/public/"));
app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
//app.use(helmet());
const value = [9, 12, 15];
const valueAddon = [1, 2, 2];
let total = '';
const selectAddon = ['Online service', 'Larger storage', 'Customizable profile'];
app.get('/', (req, res) => {
    res.render("index");
})
app.get('/selectPlan', (req, res) => {

    res.render("selectPlan", { value });
})
app.post('/total', async (req, res) => {
    total = await req.body;

    res.render('total', { total, selectAddon })
})

app.post('/addons', async (req, res) => {
    const { check } = await req.body;


    res.render('addons', { total, check, selectAddon, valueAddon, value })
})
app.get('/addons', async (req, res) => {

    res.render('addons', { total, selectAddon, valueAddon, value })
})
app.get('/total', (req, res) => {
    res.render('total', { total, selectAddon })
})
app.get('/finish', (req, res) => {
    res.render('finish')
})
// app.post('/addons', (req, res) => {
//     const total = req.body;
//     res.redirect('/addons');
// })

app.listen(3000, () => {
    console.log('Server started on port 3000');
})


