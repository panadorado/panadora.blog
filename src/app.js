//Server generated
const express = require('express');
const httpListen = require('http');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.send('<h2>Welcome to Express App<h2>');
})

httpListen.createServer(app).listen(3000, () => {
    console.log(`Server started on 3000`);
});