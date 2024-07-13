const express = require('express');
const request = require('request');
const app = express();

const PORT = process.env.PORT || 8080;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api/*', (req, res) => {
    const url = req.url.replace('/api/', '');
    const fullUrl = decodeURIComponent(url);

    if (!fullUrl.startsWith('https://api.europeana.eu/')) {
        return res.status(400).send('Invalid URL');
    }

    request(fullUrl).pipe(res);
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});