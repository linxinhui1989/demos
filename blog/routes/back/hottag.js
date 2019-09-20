let express = require('express');
let router = express.Router();
const hottagController = require("../../controller/back/hottagController.js");
/* GET home page. */
router.get('/', (req, res, next)=>{
	hottagController.home(req,res);
})


module.exports = router;