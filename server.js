var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
  title:'Article one | Harichand Mudakkayil',
  heading:'Article One',
  date:'Aug 14,2017',
  content:` 
                <p>
                    Patience is a virtue. The dictionary defines patience as the capacity to accept or tolerate delay, trouble or suffering without getting angry or upset. This is one way to put it, but it also has a deeper meaning. The word patience means the willingness to stay in the present and live the situation out to the full in the belief that something special will manifest itself to us at the right time. It goes with my favorite phrase, everything happens for a reason.
                </p>
                <p>
                    The importance of patience should be realized by every individual. Patience in life can make them reach out for the stars. With patience you can avoid making hasty decisions. Life is not about living in the future or in the past. Life is about accepting the present moment.
                </p>
                <p>
                    Whenever you are in any sort of trouble, people often advise you to have patience. Why, instead of advising you about the solution, do they ask you to stay calm and composed and be patient?
                 In this modern age, most of us have forgotten to be patient and get irritated very quickly over minor things like a traffic jam, stock market ups and downs, a baby crying and such things. In fact, patience is a virtue that everybody must posses. Patience makes us better people.
                </p>`
};
function createTemplate(data) 
        {
            var title = data.title;
            var heading = data.heading;
            var date = data.date;
            var content = data.content;
            var htmlTemplate= `
            <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/> 
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
                </div>
            </body>
            </html> `;
            return htmlTemplate;
            }
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-one',function (req,res){
    res.send(createTemplate(articleone));
    });
app.get('/article-two',function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
    });
app.get('/article-three',function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
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
