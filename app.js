var port = process.env.PORT || 3000,
	express = require("express");
	app = express();
	app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Mobile First is going to be Amazing!');
});

app.get('/test', function(request, response) {
  response.send('Hello TEST!');
});

app.listen(port, function() {
  console.log("http://localhost:" + port);
});