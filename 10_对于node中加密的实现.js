const crypto = require("crypto");
const md5 = crypto.createHash("md5");
const str = "lxh1999@123!lin"; // 所要加密的内容 (明文)
md5.update(str);
let s = md5.digest('hex');
console.log("s = " + s)

