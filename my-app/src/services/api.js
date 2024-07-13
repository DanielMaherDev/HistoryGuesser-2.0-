import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com';

export const getHistoricalData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/historical-data`);
        return response.data;
    } catch (error) {
        console.error('Error fetching historical data', error);
        throw error;
    }
};