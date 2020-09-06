const express = require('express');

const { resolve } = require("path");
// This is your real test secret API key.
const stripe = require("stripe")("sk_test_51HH2r9JsblpImHftoGmN5bUwtize3mcokSGDQYBuxjhf0NtkI39B1gKaFm24n94gdjnPCM8dErsG5DlYlSEFPP4w000py435my");

const app = express();

const port = 8000;

app.set('port', port);

app.use(express.static(__dirname + '/src'));

app.use(express.json());

app.get('*', (req, res)  => {
    res.sendFile(__dirname + '/src/index.html');
});

app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        //amount: calculateOrderAmount(items),
        amount: 100,
        currency: "usd"
    });
    res.send({
        clientSecret: paymentIntent.client_secret
    });
});

const http = require('http');

http.createServer(app).listen(port);
