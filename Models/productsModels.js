var mongoose = require('mongoose');
var productSchema = new mongoose.Schema({
    name:String,
    image:String,
    description:String,
});

var product=mongoose.model('Product',productSchema,'Product');
module.exports=product;