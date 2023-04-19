require('dotenv').config()

const express = require('express')
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
var passport = require('passport');
const MySQLStore = require('express-mysql-session');
const helpers = require('../class/src/lib/helpers');

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
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })
}));
app.use(passport.initialize());
app.use(passport.authenticate('session'));

// Routes
app.use(require('./routes'))
app.use(require('./routes/authentication'))

//Helpers
const hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        foo() { return 'FOO!'; },
        bar() { return 'BAR!'; }
    }
})

// app.get('/', (req, res) => {
//     res.render('home', {
//         showTitle: true,
//         data: "hola mundo",
//         person: {
//             firstName: 'Yehuda',
//             lastName: 'Katz'
//         },
//         verbs: ["run", "swim", "jump"],
//         dataComment: "itMustBeCommnet",
//         helpers: {
//             foo() {return 'foo.'},
//             bar() {return 'bar.'}
//         }
//     });

// })

// Public
// app.use(express.static(path.join(__dirname, 'public')));

// Starting the server

app.listen(process.env.PORT, () => {console.log("Server on port: ", process.env.PORT)})