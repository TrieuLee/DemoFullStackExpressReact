const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/WebBanHang', {useNewUrlParser: true, useUnifiedTopology: true});
const bodyParser = require('body-parser')
const ProductRoute = require('./Routes/ProductRou');
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));
const port = 8080
app.get('/', (req, res) => {
  res.send('index');
});
app.use('/products',ProductRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})