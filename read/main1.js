var express = require('express')
var app = express()
var fs = require('fs');
var bodyParser = require('body-parser');
var compression = require('compression');
var template = require('./lib/template2.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var qs = require('querystring');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.get('*', function(request, response, next){
  fs.readdir('./data', function(error, filelist){
  request.list = filelist;
  next();
  });
});

//route, routing
//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function(request, response){
  var title = 'Welcome';
  var description = 'Hello, nodejs';
  var list = template.list(request.list);
  var HTML = template.HTML(title, list,
    `<h2>${title}</h2>${description}
    <img src="/images/hellow.jpg" style="width:300px; display:block; margin-top:10px;" >
    <link rel="stylesheet" href="mainstyle.css">
    `,
    `<a href="/create">creat</a>`
);
  response.send(HTML);
});

app.get('/page/:pageId', function(request, response, next){
    var filterdId = path.parse(request.params.pageId).base;
      fs.readFile(`data/${filterdId}`, 'utf8', function(err, description){
          if(err){
            next(err)
          } else {
            var title = request.params.pageId;
            var sanitizedTitle = sanitizeHtml(title);
            var sanitizedDescription = sanitizeHtml(description, {
              allowedTags:['h1']
            });
            var list = template.list(request.list);
            var HTML = template.HTML(sanitizedTitle, list,
              `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
              `<a href="/create">creat</a>
              <a href="/update/${sanitizedTitle}">update</a>
              <form action="/delete_process" method="post" onsubmit="what?">
                <input type="hidden" name="id" value="${sanitizedTitle}">
                <input type="submit" value="delete">
              </form>`
            );
            response.send(HTML);
          
          };
         
    });
    });
    app.get('/create', function(request, response){
        var title = 'WEB - create';
        var list = template.list(request.list);
        var HTML = template.HTML(title, list, `
          <form action="/create_process" method="post">
            <p><input type="text" name="title" placeholder="title"></p>
            <p>
              <textarea name="description" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>
          `, '');
        response.send(HTML);
      });

    app.post('/create_process', function(request, response){
        console.log(request.list);
        var post = request.body;
        var title = post.title;
        var description = post.description;
        fs.writeFile(`data/${title}`, description, 'utf8', function(err){
          response.writeHead(302, {Location: `/?id=${title}`});
          response.end();
        });
    });

    app.post('/delete_process', function(request,response){
      var post = request.body;
      var id = post.id;
      var filterdId = path.parse(id).base;
      fs.unlink(`data/${filterdId}`, function(){
        response.redirect('/');
      });
  });  
    app.get('/update/:pageId', function(request, response){
    var filterdId = path.parse(request.params.pageId).base;
    fs.readFile(`data/${filterdId}`, 'utf8', function(error, description){
    var title = request.params.pageId;
    var list = template.list(request.list);
    var HTML = template.HTML(title, list,
      `
      <form action="/update_process" method="post">
        <input type="hidden" name="id" value="${title}">
        <p><input type="text" name="title" placeholder="title" value="${title}"></p>
        <p>
          <textarea name="description" placeholder="description">${description}</textarea>
        </p>
        <p>
          <input type="submit">
        </p>
      </form>
      `,
    `<a href="/create">creat</a> <a href="/update?id=${title}">update</a>`
    );
    response.send(HTML);
  });
  });
    app.post('/update_process', function(request, response){
    var post = request.body;
    var id = post.id;
    var title = post.title;
    var description = post.description;
    console.log(post);
    fs.rename(`data/${id}`, `data/${title}`, function(error){
      fs.writeFile(`data/${title}`, description, 'utf8', function(err){
        response.redirect(`/?id=${title}`);
    });
    });
    });

    
    app.use(function(req, res, next) {
      res.status(404).send('Sorry cant find that!');
    });
    
    app.use(function (err, req, res, next) {
      console.error(err.stack)
      res.status(500).send('Something broke!')
    });

    app.listen(3000, function(){
    console.log(`Example app listening on port 3000`)
    });
    


/*
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var sanitizeHtml = require('sanitize-html');

var template = require('./lib/template.js');
var path = require('path');

var app = http.createServer(function(request, response){
  var _url = request.url
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;//nodejs url parse(분석하다) query 검색
  console.log(pathname);
  if(pathname === '/'){                         //main screen
    if (queryData.id === undefined) {
    } else {                                          //WEB을 제외한 나머지 페이지 제어
}
} else if(pathname === '/create'){
     
}else if(pathname === '/create_process'){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    var title = post.title;
    var description = post.description;
    fs.writeFile(`data/${title}`, description, 'utf8', function(err){
      response.writeHead(302, {Location: `/?id=${title}`});
      response.end();
      })
    });
  } else if(pathname === '/update'){
    fs.readdir('./data', function(error, filelist){
        var filterdId = path.parse(queryData.id).base;
    fs.readFile(`data/${filterdId}`, 'utf8', function(err, description){
    var title = queryData.id;
    var list = template.list(filelist);
    var HTML = template.HTML(title, list,
      `
      <form action="/update_process" method="post">
        <input type="hidden" name="id" value="${title}">
        <p><input type="text" name="title" placeholder="title" value="${title}"></p>
        <p>
          <textarea name="description" placeholder="description">${description}</textarea>
        </p>
        <p>
          <input type="submit">
        </p>
      </form>
      `,
    `<a href="/create">creat</a> <a href="/update?id=${title}">update</a>`
    );
    response.writeHead(200);
    response.end(HTML);
  });
  });
}else if(pathname === '/update_process'){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    var id = post.id;
    var title = post.title;
    var description = post.description;
    console.log(post);
    fs.rename(`data/${id}`, `data/${title}`, function(error){
      fs.writeFile(`data/${title}`, description, 'utf8', function(err){
        response.writeHead(302, {Location: `/?id=${title}`});
        response.end();
        })
    })
    });
} else if(pathname === '/delete_process'){
  var body = '';
  request.on('data', function(data){
    body = body + data;
  });
  request.on('end', function(){
    var post = qs.parse(body);
    var id = post.id;
    var filterdId = path.parse(id).base;
    fs.unlink(`data/${filterdId}`, function(){
      response.writeHead(302, {Location: `/`});
      response.end();
    })
    });
} else {
      response.writeHead(404);
      response.end('Not found');
    }
  });
  app.listen(3000);
*/