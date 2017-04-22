var express = require('express');
var app = express();
var request = require('request');
// var bodyParser = require('body-parser');
var apiAdress = 'http://v3.wufazhuce.com:8000/api/';

// app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  var data = req.query, type = data.type;
  var api = apiAdress;
  switch (type) {
  	case 'getVolById':
  		api = api + 'hp/detail/' + data.id;
  		break;
  	case 'getVolIdList':
  		api = api + 'hp/idlist/0';
  		break;
  	case 'getVolsByMonth':
  		api = api + 'hp/bymonth/' + data.month;
  		break;
  	case 'getCarousel':
  		api = api + 'reading/carousel';
  		break;
  	case 'getLastArticles':
  		api = api + 'reading/index';
  		break;
  	case 'getEssayById':
  		api = api + 'essay/' + data.id;
  		break;
  	case 'getSerialById':
  		api = api + 'serialcontent/' + data.id;
  		break;
  	case 'getQuestionById':
  		api = api + 'question/' + data.id;
  		break;
  	case 'getArticlesByMonth':
  		api = api + data.type + '/bymonth/' + data.month;
  		break;
  	case 'getArticleById':
  		api = api + data.type + '/' + data.id;
  		break;
  	case 'getMusicIdList':
  		api = api + 'music/idlist/0';
  		break;
  	case 'getMusicsByMonth':
  		api = api + 'music/bymonth/' + data.month;
  		break;
  	case 'getMusicDetailById':
  		api = api + 'music/detail/' + data.id;
  		break;
  	case 'getMovieListById':
  		api = api + 'movie/list' + data.id;
  		break;
  	case 'getMovieDetailById':
  		api = api + 'movie/detail/' + data.id;
  		break;
  	case 'getMovieStoryById':
  		api = api + 'movie/' + data.id + '/story/1/0';
  		break;
  }
  request(api, function(err, res1, body) {
  	if (err) {
  		res.send('err');
  	} else {
  		res.send(body);
  	}
  });
});

var server = app.listen(3000);