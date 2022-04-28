const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

if (process.env.NODE_ENV !== 'production') require ('dotenv').config()
// if we are not in production mode, means we are in development mode, we will load in dotenv
// to use our secret key

const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true})) // this is heping us to get rid of any symbols
// and spaces in the url we are getting or passing

app.use(cors()) // enable cross origin requests, for example, we can allow localhost:3000 to access
// localhost:5000

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html')) // if user sends get request from any urls, we want to send our static files
        // (HTML, CSS, JS files)
    })
} // serve all the static files in the client/build

app.listen(port, error => {
    if (error) throw error
    console.log('Server running on port ' + port)
})

app.post('/payment', async (req, res) => { // set up the /payment url
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    }

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({error: stripeErr}) // if there is a stripe error, then we 
            // set the response status to 500 and send the error message to the client
        } else {
            res.status(200).send({success : stripeRes})
        }
    })
  });