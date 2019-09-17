let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=>{
	res.send("文章后端首页")
})

module.exports = router;