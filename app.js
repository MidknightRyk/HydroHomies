var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var session = require('cookie-session')
var flash = require('express-flash')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static(path.join(__dirname, 'front-end/build')))
app.use(session({
  secret: 'hydrohomes',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secureProxy: true,
    httpOnly: true
  }
}))

// Database setup
require('./models/db.js')
require('./config/passport.js')

// Passport setup
var passport = require('passport')
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

const cors = require('cors');
app.use(cors());

var routes = require('./routes/routes.js')

app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', routes)

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/front-end/build/index.html'));
});
// Using port 9000 to avoid conflict with front-end
const PORT = process.env.PORT || 9000
// Start the server
app.listen(PORT, function () {
  console.log(`Express listening on port ${PORT}`)
})
