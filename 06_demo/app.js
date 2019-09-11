const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multer = require("multer");
const cookieSession = require("cookie-session");
const artTemplate = require("express-art-template");

const {fileDir,uploadDir,port,renderDir,keys} = require("./config.js");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(fileDir));
app.use(express.static(uploadDir));
app.engine('html', artTemplate);
// 设置render 方法中默认的渲染文件夹
app.set("views",renderDir);
app.set('view engine', 'html');//使得模板引擎渲染时，指定html后缀的文件
app.use(multer({dest:uploadDir}).any());
app.use(cookieSession({
  name: 'session',
  keys: keys,
  maxAge: 24*60*60*1000
}));

// 对于路由的处理
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
