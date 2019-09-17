let express = require('express');
let router = express.Router();

const blogController = require('../../controller/back/blogController.js');

/* GET home page. */
router.get('/', (req, res, next)=>{
	blogController.home(req,res);
})
.get('/add',(req,res,next)=>{
	blogController.add(req,res);
})
.post('/add',(req,res,next)=>{
	blogController.doAdd(req,res);
})

module.exports = router;