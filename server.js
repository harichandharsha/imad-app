var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
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
    },
    'article-two' : {
        title:'Article two | Harichand Mudakkayil',
      heading:'Article Two',
      date:'Aug 14,2017',
      content:` 
                    <p>
                    Mahatma Gandhi is an amazing example of leadership, personified with qualities which were unimaginable at that time. Among them, Patience, is the greatest lesson which an entrepreneur can extract from Bapu’s extraordinary story of freedom struggle. It is this patience which helped him overcome monstrous problems with an ease which is hard to even imagine. It was patience which actually made the mighty Britishers helpless against a person who was clad in a cotton cloth and mostly semi-naked. The very foundations of the British kingdom shook every time Mahatma Gandhi announced a new fast or a new rally, all without violence and without hurry
                </p>
                <p>
                    To shape your talents and inborn abilities into real achievements, you must have patience.
    To master any art or to enhance your talent, you need to make continuous effort for a long time.
    To achieve your dreams, you must have the zeal to overcome challenges and the power to overcome roadblocks comes only from patience.
    While desiring to achieve your dream, you might get intimidated by the huge tasks ahead to achieve it. Divide your task into smaller steps and set a schedule to achieve those steps. It will help you develop patience and achieve your dream in an organized way.
               </p>
                <p>
                     Sometimes, in our relationships, we become defensive, irritated, and say something to hurt others. We do not realize the importance of patience and end up making hasty decisions. Whenever you feel defensive against the person, try to be patient enough to take time to think over another person’s positive qualities.
                </p>`
    },
    'article-three' : {
        title:'Article three | Harichand Mudakkayil',
      heading:'Article Three',
      date:'Aug 14,2017',
      content:` 
                     <p>
                Building empathy towards others is very important if you want to live a hassle-free life. If you get irritated by a crying baby or a loud child playing in front of you, you must think about developing your patience. Patience helps you build empathy towards others.
                     Patience helps us accept other people as they are and makes us tolerant. By being impatient, you suffer more than other people
                </p>
                <p>
                If things are not going the way you want them to, instead of getting frustrated,  you must learn to be patient. You need to see things and situations in a positive light to make your life happier. And to get that positivity, you need to be patient.
                 If you find any life situation challenging, or find it difficult to bear, try to re-frame that situation and try to see its positive side.
                </p>
                <p>
                Anger and stress are two things that are enough to ruin a person’s health. And patience is the antidote to both these illnesses. Being patient, you can overcome any challenging situation with more flexibility and in a better way. Being stress-free and happy helps you stay healthier.
                 You can be patient if you have clear knowledge about your goal and if you are putting the desired effort in the right direction. There are many ways to achieve anything. The trick is to stick to your own plan when others around you seem to be getting ahead much faster than you. Yes, they may be enjoying more success than you, but you know nothing about where they are ultimately headed.
                    Patience is an important tool in overcoming frustration. Patience allows us to suspend judgment long enough to make informed decisions, thus paving the path to a happy and peaceful life.
                     Benjamin Franklin once said: “He that have patience can have what he will.” Having the ability to remain patient, will help you achieve big or better things in life. Patience is bitter, but its fruit is sweet. No one said life is going to be easy because all things are difficult before they become easy, but it will be your level of patience that will determine your fate.
             </p>`
        
    },
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

var counter = 0;
app.get('/counter',function(req,res){
   counter=counter +1;
   res.send(counter.toString());
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/:articleName',function (req,res){
    //articleName == Article one
    //articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
    });
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names=[];
app.get('/submit-name/:name',function(req,res){
   //get the name from the request
   var name=req.params.name;
   names.push(name);
   //JSON:JavaScript Object Notation
   res.send(JSON.stringify(names));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
