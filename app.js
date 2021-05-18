const { resolveSoa } = require("dns");
const express = require("express")
const app = express();
const fs = require('fs')
const mongoose = require('mongoose')
const path = require('path')
mongoose.connect('mongodb://localhost/ecommercecontact', {useNewUrlParser: true, useUnifiedTopology: true});
const port = 80;



//Define mongoose schema
const EContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
  });

  const EContact = mongoose.model('EContact', EContactSchema);



// for serving static files
app.use('/static', express.static('static'))
app.use(express.urlencoded())

// set the template engine for pug
app.set('view engine', 'pug')

// set the view directory
app.set('views', path.join(__dirname, 'views'))

// End points
app.get('/', (req, res) => {
    res.status(200).render('index.pug');
});

app.get('/Product', (req, res) => {
    res.status(200).render('Product.pug');
});

app.get('/Product_detail', (req, res) => {
    res.status(200).render('Product_detail.pug');
});

app.get('/cart', (req, res) => {
    res.status(200).render('cart.pug');
});

app.get('/Account', (req, res) => {
    res.status(200).render('Account.pug');
});

app.get('/About', (req, res) => {
    res.status(200).render('About.pug');
});

app.get('/Contact', (req, res) => {
    res.status(200).render('Contact.pug');
});


app.post('/Contact', (req, res) => {
    var myData = new EContact(req.body);
    myData.save().then(()=>{
        res.send("This item is saved successfully in the database")
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    })
});


// start the server
app.listen(port, () => {
    console.log(`this application started succesfully on port ${port}`)
});