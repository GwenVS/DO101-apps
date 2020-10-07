var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

//task1
//feature1
//task2
//feature2
//feature3
//feature4
//task3
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

