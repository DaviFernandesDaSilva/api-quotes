const express = require ('express');
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

var fs = require("fs");
var jsonData;

fs.readFile("frases.json" , "utf8", function(err, data){
  if(err){
    return console.log("Erro ao ler arquivo");
  }

  jsonData = JSON.parse(data); // faz o parse para json

})

app.get('/', (req, res, next) => {
    res.json(jsonData);
    res.on('data', function (chunk) {
        var parsedResponse = JSON.parse(JSON.stringify(chunk));
        console.log(parsedResponse);
    });

    res.end();

    });

app.get('/api/v1/allFrases', (req, res) =>
    res.json(
    jsonData
    ));


  // Setting the server to listen at port 3000
  app.listen(3000, function(req, res) {
    console.log("Server is running at port 3000");
  });