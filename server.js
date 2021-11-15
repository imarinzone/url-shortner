var express = require("express");
var http = require("http");
var api = require("./api.js")
var app = express();

var server = http.createServer(app);

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ extended: true }))

// gets all the url in the table
app.get('/all', api.getallURL)
// redirects to the original url
app.get('/shortUrls/:url', api.getURL)
// adds the original url and sends the shorten url
app.post('/addUrl', api.addURL)
// the home page
app.get('/home', async (req, res) => {
    res.render('index')
  })

server.listen(3000, function(){
	console.log("Server listening on port: 3000");
});