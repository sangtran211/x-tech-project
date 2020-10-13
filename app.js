var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const port = 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '1512346_1712471_1712722')));
// app.use('/static', express.static(path.join(__dirname, '1512346_1712471_1712722')))
app.use('/', express.static(path.join(__dirname, '1512346_1712471_1712722')))

app.engine('html', require('ejs').renderFile);
app.set('views', './1512346_1712471_1712722');
app.set('view engine', 'html');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/1512346', (req,res )=>{
    res.render('./members/1512346/1512346');
});
app.get('/1712471', (req,res )=>{
    res.render('./members/1712471/1712471');
});
app.get('/1712722', (req,res )=>{
    res.render('./members/1712722/1712722');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

module.exports = app;
