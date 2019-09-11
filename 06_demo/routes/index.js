var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=>{
  res.render('index', { title: 'Express' });
})
.get('/list',(req,res)=>{
	let goods = ["aa","bb","cc"];
	res.render('list',{goods})
})

module.exports = router;
