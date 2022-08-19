const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const enforce = require('express-sslify')


if (process.env.NODE_ENV !== 'production') require ('dotenv').config()
// if we are not in production mode, means we are in development mode, we will load in dotenv
// to use our secret key

const stripe = require('stripe')('sk_test_51KksksENpvpK9J8p3eVZueBYPRahr0cpYEXkg21eBY0Tg6LXCV9OMMXtMeZknrF0vzovJlTwIURMJzS7xxe7Es4d00bdMgpHZ2')
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000;
const corsOptions ={
    origin:'*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // enable cross origin requests, for example, we can allow localhost:3000 to access
// localhost:5000

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true})) // this is heping us to get rid of any symbols
// and spaces in the url we are getting or passing
// app.use(enforce.HTTPS({trustProtoHeader: true}))
// // this will enforce all the http request from heroku to https request


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


app.post('/create-checkout-session', cors(corsOptions), async (req, res) => {
    const line_items = req.body.cartItems.map(item => {
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                  name: item.name,
                  images:[item.imageUrl],
                metadata: {
                    id: item.id,
                }
                },
                unit_amount: item.price * 100,
              },
            quantity: item.quantity,
        }
    })
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_address_collection: {
        allowed_countries: ['US', 'GB'],
        },
        shipping_options: [
        {
            shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
                amount: 0,
                currency: 'usd',
            },
            display_name: 'Free shipping',
            // Delivers between 5-7 business days
            delivery_estimate: {
                minimum: {
                unit: 'business_day',
                value: 5,
                },
                maximum: {
                unit: 'business_day',
                value: 7,
                },
            }
            }
        },
        {
            shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
                amount: 1500,
                currency: 'usd',
            },
            display_name: 'Next day air',
            // Delivers in exactly 1 business day
            delivery_estimate: {
                minimum: {
                unit: 'business_day',
                value: 1,
                },
                maximum: {
                unit: 'business_day',
                value: 1,
                },
            }
            }
        },
        ],
      line_items,
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/checkout`,
    });
  
    res.send({url: session.url});
  });
