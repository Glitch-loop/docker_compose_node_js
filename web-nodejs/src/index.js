const express = require('express')
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
var passport = require('passport');
const MySQLStore = require('express-mysql-session');


// Initializations
const app = express();

//Set handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}))
app.set('view engine', '.hbs');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore({
        host: process.env.MYSQL_HOST || '127.0.0.1',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_ROOT_PASSWORD || 'itesm',
        database: process.env.MYSQL_DATABASE || 'test_databas'
    })
}));
app.use(passport.initialize());
app.use(passport.authenticate('session'));

// Routes
app.use(require('./routes'))
app.use(require('./routes/authentication'))


// Starting the server

app.listen(process.env.PORT, () => {console.log("Server on port: ", process.env.PORT)})