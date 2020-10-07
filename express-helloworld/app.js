var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});
//addfeature1
//task1
//addfeature1
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

