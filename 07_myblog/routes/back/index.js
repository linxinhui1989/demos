const express = require('express');
const router = express.Router();

const userRouter = require("./user.js");
const artRouter = require("./art.js");

router.use("/",userRouter);
router.use("/art",artRouter);

module.exports = router;
