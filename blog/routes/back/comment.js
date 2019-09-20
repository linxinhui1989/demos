let express = require('express');
let router = express.Router();
const commentController = require("../../controller/back/commentController.js");
/* GET home page. */
router.get('/', (req, res, next)=>{
	commentController.home(req,res);
})
.get('/del', (req, res, next)=>{
	commentController.del(req,res);
})
.get('/pass',(req, res, next)=>{
	commentController.pass(req,res);
})


module.exports = router;