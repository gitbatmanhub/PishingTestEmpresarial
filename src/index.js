const express = require('express');
const path = require('path')
const exphbs= require('express-handlebars');
const methodOverride= require('method-override');
const session = require('express-session');

//Inicialización
const app= express();
require('./database');

//Settings

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

//Middlewars

app.use(express.urlencoded({extended: false}));

app.use(methodOverride('_method'));

app.use(session({
    secret: 'Holaquehace2.0',
    resave: true,
    saveUninitialized: true
}))


//Global Variables

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

//Static Files

app.use(express.static(path.join(__dirname, 'public')));

//Server is listening
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});