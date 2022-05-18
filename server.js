const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const enforce = require('express-sslify')


if (process.env.NODE_ENV !== 'production') require ('dotenv').config()
// if we are not in production mode, means we are in development mode, we will load in dotenv
// to use our secret key

const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true})) // this is heping us to get rid of any symbols
// and spaces in the url we are getting or passing
app.use(enforce.HTTPS({trustProtoHeader: true}))
// this will enforce all the http request from heroku to https request
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

app.get('/service-worker.js', (req,res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'))
}) // for PWA

app.post('/payment', cors(), async (req, res) => { // set up the /payment url
    let {amount, id} = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "CRWN Clothing",
            payment_method: id,
            confirm: true
        })
        console.log("Payment", payment)
        res.json({
            message: "Payment successful",
            success: true
        })
    } catch(error) {
        console.log("Error", error)
        res.json({
            message: "Payment failed",
            success: false
        })
    }

  });