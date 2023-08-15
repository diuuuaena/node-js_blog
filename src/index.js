const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars')
const app = express();
const port = 3002;

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars.engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
//app.set('views', '.src/resources/views');
app.set('views', path.join(__dirname, 'resources/views'));

console.log("Path :"+path.join(__dirname, 'resources/views'))
app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`);
})