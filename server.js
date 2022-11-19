require('dotenv').config()
// Require Modules
const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const db = require('./models/db')
const app = express()


/* Start Config */
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(cors())
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')
db.once('open', () => {
    console.log('Connected to MongoDB Atlas')
})

app.use(
    session({
        secret: process.env.SECRET,
        store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
        saveUninitialized: true,
        resave: false,
    })
)
/* End Config */

/* Start Middleware */
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/poster', require('./controllers/routeController'))
app.use('/user', require('./controllers/authController'))
/* END Middleware */

// Tell the app to listen on a port
app.listen(3000, () => {
  console.log('Listening on Port 3000')
})