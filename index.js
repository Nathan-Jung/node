var express = require('express')
var app = express()
var fs = require('fs');
var bodyParser = require('body-parser');
var compression = require('compression');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var qs = require('querystring');

var templateMain = require('./lib/templateMain.js');
var templateFeeding = require('./lib/templateFeeding.js');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

var mysql = require('mysql');

var db = mysql.createConnection({
  host : "175.121.249.37",
  port : 8138,
  user : "root",  
  password : "kangnam",
  database : "fish_db"
});

db.connect();

app.get('/', function(request, response){
  fs.readFile(`data/Main.html`, 'utf8', function(err, file){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(file)
  });
});



    app.get('/page/Feeding', function(request, response){
      db.query(`SELECT * FROM ID`, function(error,tables){
        db.query(`SELECT * FROM Feed_pls WHERE ID=?`,[1], function(error2, Feed_pls){
          var mountfeed = Feed_pls[0].Feed_p;
          var datetime = Feed_pls[0].Feed_p_time;
          var FeedTables= templateFeeding.FeedTable(mountfeed,datetime,
            `
            <p>
            <a href="/Feeding_update" style="padding-left:35em; padding-top:2em;">
                <input type="submit" value="수정">
                </a>
              </p>
            `
             );
             response.writeHead(200);
             response.end(FeedTables);
        });
      });
    });

    app.get('/Feeding_update', function(request, response){
      db.query(`SELECT * FROM Feed_pls`, function(error,tables){
        db.query(`SELECT * FROM Feed_pls WHERE ID=?`,['1'], function(error2, Feed_pls){
          console.log(Feed_pls[0].ID);
          var mountfeed = Feed_pls[0].Feed_p;
          var datetime = Feed_pls[0].Feed_p_time;
          var FeedTable = templateFeeding.FeedTable(
        `
        <form action="http://localhost:3000/update_process" method="post">
          <input type="hidden" name="id" value="${mountfeed}">
          <input type="text" name="feed" placeholder="먹이량" value="${mountfeed}" style="text-align:center;">`
          , datetime,`
      <p style="padding-left:35em; padding-top:2em;">
        <input type="submit"  value="확인"">
      </p>
      </form>
        `
      );
      response.send(FeedTable);
      
    });
    });
  });
  
    app.post('/update_process', function(request, response){
      var post = request.body;
      var feed = post.feed;
          db.query(`UPDATE Feed_pls SET Feed_p=?`,[feed], function(error, result){
          response.redirect('/page/Feeding');
        });
        });
     

    app.get('/page/CCTV', function(request, response){
      fs.readFile(`data/CCTV.html`, 'utf8', function(err,file){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(file)
      });
    });

    app.get('/page/Oxyzen', function(request, response){
      fs.readFile(`data/Oxyzen.html`, 'utf8', function(err,file){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(file)
      });
    });

    app.get('/page/Login', function(request, response){
      fs.readFile(`data/Login.html`, 'utf8', function(err,file){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(file)
      });
    });
/*
  app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

*/
app.listen(3000, function(){
    console.log(`Example app listening on 3000`)
});