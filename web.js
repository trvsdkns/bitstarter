c!var express = require('express');

var app = express.createServer(express.logger());

fs = require('fs')
fs.readFile('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var buf = Buffer(data, "utf-8");
});

app.get('/', function(request, response) {
  response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
