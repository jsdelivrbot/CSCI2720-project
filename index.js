const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();

app.get('/',function(req,res){
	res.send('Hello Wold!');
})

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))