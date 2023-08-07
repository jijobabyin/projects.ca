//create an express server that makes a request for stock data from alpha vantage based on the user's input 
//and returns the data to the user

// q: create an express server that makes a request for stock data from alpha vantage based on the user's input
// and returns the data to the user
// a:
const express = require('express');
const app = express();
const axios = require('axios');
const { response } = require('express');
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/stockdata', (request, response) => {

    const { symbol } = request.query;
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=1H8LJX6V7X9X7X2G`;

    axios.get(url)
        .then((result) => {
            const data = result.data;
            const timeSeries = data['Time Series (Daily)'];
            const dates = Object.keys(timeSeries);
            const latestDate = dates[0];
            const latestData = timeSeries[latestDate];
            const latestClose = latestData['4. close'];
            response.json({ latestClose });
        })
        .catch((error) => {
            console.log(error);
            response.json({ error });
        });
}   
);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}
);

// what is codespacea and how to use it?
// q: what is codespacea and how to use it?
// a: codespaces is a feature of github that allows you to develop in the cloud.
// you can use codespaces to develop in the cloud by going to github.com and clicking on the code button
// and then clicking on open with codespaces. you can also use codespaces to develop in the cloud by going to
// github.com and clicking on the code button and then clicking on open with codespaces and then clicking on
