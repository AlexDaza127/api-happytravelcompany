var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');


//Inclusión de rutas/servicios/controladores//////////////////////////////////////
const encuestaApiRouter = require('./routes/api/consultarEncuestas');
const rolesApiRouter = require('./routes/api/consultarRoles');
const inmueblesApiRouter = require('./routes/api/consultarInmuebles');
const consultarLoginUsuario = require('./routes/api/login');
const consultaCliente = require('./routes/api/consultaCliente');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//////////////////////////////////////////////////////////////////////////////////

var app = express();
app.use(bodyParser.json()); //permite la conversion de las peticiones en objetos JSON

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Rutas de las API////////////////////////////////////
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/rol', rolesApiRouter);
app.use('/api/inmueble', inmueblesApiRouter);
app.use('/api/consultarEncuestas', encuestaApiRouter);
app.use('/api/login', consultarLoginUsuario);
app.use('/api/cliente', consultaCliente);
//////////////////////////////////////////////////////

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
