const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const RESOURCE_PATH ='/user'

const router = express.Router()

// The SignUp Routes 
router.get('/signup', (req, res) => {
    res.render('user/SignUp.jsx')
})

router.post('/signup', async (req, res) => {
    // encrypt password
    req.body.password = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    )
    req.body.username = req.body.username.toLowerCase() 
    // create the New user
    User.create(req.body)
        .then((user) => {
            // redirect to login page
            res.json({output:'signup successful'})
        })
        .catch((error) => {
            // send error as json
            res.json({ output: 'user already exist'})
        })
})

// The login Routes 
router.get('/login', (req, res) => {
    res.render('user/Login.jsx')
})

router.post('/login', async (req, res) => {
    // get the data from the request body
    const { username, password } = req.body
    // search for the user
    User.findOne({ username }) //shortcut?? ask for explanation 
        .then(async (user) => {
            // check if user exists
            if (user) {
                // compare password
                const result = await bcrypt.compare(password, user.password) 
                if (result) {
                    // store some properties in the session object
                    req.session.username = username
                    req.session.loggedIn = true
                    // redirect to fruits page if successful
                    res.json({output:"successfully logged in"})
                } else {
                    // error if password doesn't match
                    res.json({ error: "password doesn't match" })
                }
            } else {
                // send error if user doesn't exist
                res.json({ error: "user doesn't exist" })
            }
        })
        .catch((error) => {
            // send error as json
            console.log(error)
            res.json({ error })
        })
})


//login 
router.get('/logout', (req, res) => {
    // destroy session and redirect to main page
    req.session.destroy((err) => {
        if (err) {
            console.error(err)
            res.status(500).json(err)
        } else {
            res.json({output: 'successfully logout'})
        }
    })
})

module.exports = router

