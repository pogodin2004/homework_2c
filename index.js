var express = require('express');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/',(req,res)=>{
	res.end(getUser(req.query.username))
});

function getUser(str){
	if(!str) return 'Invalid username';
	var reg = /([\w\d\.\-]\/@?([\w\d\.]+))|(^(@)?([\w\d]+)$)/;
	if(reg.test(str)) return `@${(str.match(reg)[2])? str.match(reg)[2] : str.match(reg)[5]}`;
	return 'Invalid username';
};

app.listen(3000, () =>{
	console.log('Ready? Go!!!');
});

