const express = require('express');
var multer  = require('multer');

var controller=require('../Controllers/ProductCon.js');
var router=express.Router();

var upload = multer({ dest: './public/uploads/' });

router.get('/',controller.index);
router.post('/create',upload.single('image'),controller.postCreate);
router.put('/updateByID',upload.single('image'),controller.putUpdateByID);
module.exports=router;