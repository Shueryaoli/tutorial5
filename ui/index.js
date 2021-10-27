const express = require('express');

const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static(path.join(__dirname, "public")));


app.get('/', function(req, res, next) {
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('./public/index.html','utf-8',function(err,data){
        if(err){
			throw err ;
        }
        res.end(data);
    });
});



app.listen(3000, function () {
  console.log('UI started on port 3000');
});
