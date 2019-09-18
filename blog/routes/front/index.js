const express = require('express');
const router = express.Router();

const indexController = require("../../controller/front/indexController.js");

/* GET home page. */
router.get('/', (req, res, next)=>{
  // res.render('front/index');
  indexController.home(req,res);
})

module.exports = router;
