var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleone = {
    title: 'article-one i saleem',
    heading: 'article one',
    date: sep5,
    content:`
    
    <p>this is cntent for my first article this is content for my first article this is contnt for my first article
        this is content for my first article
    
        </p>
        <p>
            this is content for my first article this is contnt for my first article
        this is content for my first article
    
        </p>
        <p>
            this is content for my first article this is contnt for my first article
        this is content for my first article
    
        </p>`


};
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content =data.content;
 var htmlTemplate =`
<html>
    <head>
        <title>
            s{title}
        </title>
        <meta name="viewport" content="width-device-width, initial-sale-1"/>
        <style>
.container {
    max-width: 800px;
    margin: 0 auto;
    color: #d82121;
    font-family: san-serif;
    padding-top: 60px;
    padding-left: 20px;
    padding-right: 20px;
}
</style>
    </head>
    <body>
        <div class="container">
            
        <div>
        <a href="/">home</a>
        </div>
        <hr/>
        <h3>
        s{heading}
        </h3>
        <div>
            s{date}
        </div>
        <div>
        s{content}
            </div>
         
            </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/article-one', function (req, res){
     res.send(createTemplate(article-one.html));
});
app.get('/article-three', function (req, res){
     res.sendFile(path.join(__dirname, 'article-three.html'));
});

app.get('/article-two', function (req, res){
    res.send('article two requested and will be served here');
});
app.get('/article-three', function (req, res){
    res.send('article three requested and will be served here');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
