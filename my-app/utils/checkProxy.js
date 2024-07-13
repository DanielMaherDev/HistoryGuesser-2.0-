// utils/checkProxy.js
export const checkLocalProxy = async () => {
    try {
        const response = await fetch('http://localhost:8080/health'); // Assuming your proxy has a health check endpoint
        if (response.ok) {
            return true;
        }
    } catch (error) {
        console.error('Local proxy is not available:', error);
    }
    return false;
};