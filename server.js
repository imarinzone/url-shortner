var express = require("express");
var http = require("http");
var api = require("./api.js")
var app = express();

var server = http.createServer(app);
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/all', api.getallURL)

app.get('/shortUrls/:url', api.getURL)

app.post('/addUrl', api.addURL)

// app.get('/', async (req, res) => {
//     res.redirect('/home')
//   })

app.get('/home', async (req, res) => {
    res.render('index')
  })

server.listen(3000, function(){
	console.log("Server listening on port: 3000");
});