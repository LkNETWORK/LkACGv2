const http = require('http')

const express = require('express')
const express_app = express()

express_app.get('/', function(req,res){
	res.send('Homepage test')
})



//404 module
express_app.get('*',function(req,res){
	var current_url = req.protocol + '://' + req.get('host') + req.originalUrl;
	res.send(`"${current_url}" Not found, <a href="/">Return to home</a>` );
})


express_app.listen(8080) //test
//http.createServer(express_app).listen(80)
