const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3007;

app.use(cors());

app.get('/api/images', async (req, res) => {
    console.log("Received request for /api/images");
    try {
        const response = await axios.get('https://api.europeana.eu/record/v2/search.json', {
            params: {
                query: 'Ireland battle',
                media: true,
                type: 'IMAGE',
                date: '[1900 TO 2000]',
                wskey: 'ntrageryl'
            }
        });
        console.log("API response received:", response.data);
        if (response.data.items && response.data.items.length > 0) {
            const imageUrl = response.data.items[0].edmIsShownAt;
            res.json({
                imageUrl
            });
        } else {
            res.status(404).json({
                message: "No images found"
            });
        }
    } catch (error) {
        console.error("Error fetching data:", error.message);
        res.status(500).json({
            message: "Error fetching data",
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});