require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

//for RTC ======================================
const http = require("http");
const socket = require("socket.io");


//for authentication- - added dec11 at 11am
const session = require('express-session')
const passport = require('passport')

require ('./configs/passport')
//===============================================

mongoose
  .connect('mongodb://localhost/emeet', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// socket stuff
// const rooms = {};

// io.on("connection", (socket) => {
//   socket.on("join room", (roomID) => {
//     if (rooms[roomID]) {
//       rooms[roomID].push(socket.id);
//     } else {
//       rooms[roomID] = [socket.id];
//     }
//     const otherUser = rooms[roomID].find((id) => id !== socket.id);
//     if (otherUser) {
//       socket.emit("other user", otherUser);
//       socket.to(otherUser).emit("user joined", socket.id);
//     }
//   });

//   socket.on("offer", (payload) => {
//     io.to(payload.target).emit("offer", payload);
//   });

//   socket.on("answer", (payload) => {
//     io.to(payload.target).emit("answer", payload);
//   });

//   socket.on("ice-candidate", (incoming) => {
//     io.to(incoming.target).emit("ice-candidate", incoming.candidate);
//   });
// });
//=========================================================================

//auth express session config - added dec11 at 11am
const MongoStore = require('connect-mongo')(session);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(passport.initialize());
app.use(passport.session());

//===============================================


// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



const index = require('./routes/index');
app.use('/', index);

//auth - added dec11 at 11am
const auth = require('./routes/auth');
app.use('/api/auth', auth);

const user = require('./routes/user');
app.use('/api/user', user);

const events = require('./routes/events');
app.use('/api/events', events);


//=============================================

module.exports = app;