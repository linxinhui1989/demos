let express = require('express');
let router = express.Router();
const adminController = require("../../controller/back/adminController.js");
/* GET home page. */
router.get('/', (req, res, next)=>{
	adminController.home(req,res);
})
.get('/add',(req, res, next)=>{
	adminController.add(req,res);
})
.post('/add',(req, res, next)=>{
	adminController.doAdd(req,res);
})
.get('/edit',(req, res, next)=>{
	adminController.edit(req,res);
})
.get('/del',(req, res, next)=>{
	adminController.del(req,res);
})
module.exports = router;