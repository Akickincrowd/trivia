var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
approot     = __dirname;
var app = express();
var session = require('express-session');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded());

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.use(session({
  secret:'somesecrettokenhere',
  resave: false,
  saveUninitialized: true,
  maxAge: 5000000
}));



// set an environment variable called APPROOT to keep track of the root folder of your app
process.env['APPROOT'] = __dirname;

// require(path.join(approot, 'test.js'));
console.log(approot);
// console.log(process.env['APPROOT']);

app.use( express.static( path.join( approot, 'client' )));
app.use( express.static( path.join( approot, 'bower_components' )));

require(path.join(approot, 'server/config/mongoose.js'));
//require routes configuration, get a function from the module.exports, that gets invoked while passing it the app
require(path.join(approot, 'server/config/routes.js'))(app);

var server = app.listen(8000, function(){
  console.log('Server is running');
});

var io = require('socket.io').listen(server)

io.sockets.on('connection', function (socket) {
  // console.log("WE ARE USING SOCKETS!");
  // console.log(socket.id);
  //all the socket code goes in here!
  socket.on("form_submitted", function (data){

    console.log(data);
    io.emit('server_response', {response: data.name});
})

})