var Product = require('../Models/productsModels');
module.exports.index=function(req, res){
    var page=req.query.page||1;
    var perPage=8;
    var start=(page-1)*perPage;
    var end=(page)*perPage;
    Product.find().then((pro)=>{
        res.send(pro)
    })
}
module.exports.postCreate=function(req,res){
    req.body.image='http://localhost:8080/'+req.file.path.substring(7);
    Product.create(req.body);
    res.redirect('http://localhost:3000/products');
}
module.exports.putUpdateByID=function(req,res){
    //res.send(req.body);
    res.redirect('http://localhost:3000/products');
}