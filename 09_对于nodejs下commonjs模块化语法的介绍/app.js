let cart = require("./cart.js");
// 同样支持解构赋值的写法
let {name} = require("./cart.js");
// console.log(cart);
// console.log(name);

let user = require("./user");
// console.log(user);

let {name : newName} = require("./good.js")
console.log(newName);

// 引入自己编写好的数据库操作工具库
let tool = require("./dbTool.js");
tool.find();
