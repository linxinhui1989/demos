const path = require("path");
let c = path.join("a","b","c");
console.log(c);
let p = "./images/a.png"; // 相对路径
let newP = path.resolve(p);
console.log(newP);
console.log(__filename)
console.log(__dirname);
let newP2 = path.join(__dirname,p);
console.log(newP2);