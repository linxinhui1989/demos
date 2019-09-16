let express = require('express');
let router = express.Router();

let linkController = require('../../controller/back/linkController.js');

/* GET home page. */
router.get('/', (req, res, next)=>{
	linkController.list(req,res);
})
.get('/add',(req, res, next)=>{
	res.render("back/link_add");
})
.post('/add',(req, res, next)=>{
	linkController.add(req,res);
})
.get('/edit',(req, res, next)=>{})
.get('/del',(req, res, next)=>{
	linkController.del(req,res);
})

module.exports = router;