import React, {
    useState,
    useEffect
} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const HistoricalImage = () => {
    const [imageData, setImageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchNewImage = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.europeana.eu/record/v2/search.json', {
                params: {
                    query: 'Ireland battle',
                    media: true,
                    type: 'IMAGE',
                    wskey: 'ntrageryl',
                },
            });

            console.log('Full JSON response:', response.data);

            if (response.data && response.data.items && response.data.items.length > 0) {
                const validItems = await Promise.all(
                    response.data.items.map(item => {
                        return new Promise(resolve => {
                            if (item.edmIsShownBy && item.edmIsShownBy[0]) {
                                const img = new Image();
                                img.src = item.edmIsShownBy[0];
                                img.onload = () => {
                                    if (img.width >= 500 && img.height >= 500) {
                                        resolve(item);
                                    } else {
                                        resolve(null);
                                    }
                                };
                                img.onerror = () => resolve(null);
                            } else {
                                resolve(null);
                            }
                        });
                    })
                );

                const filteredItems = validItems.filter(item => item !== null);

                if (filteredItems.length > 0) {
                    const randomIndex = Math.floor(Math.random() * filteredItems.length);
                    const item = filteredItems[randomIndex];
                    const imageUrl = item.edmIsShownBy[0];
                    const title = item.title && item.title[0] ? item.title[0] : 'No title available';
                    const description = item.dcDescription && item.dcDescription[0] ? item.dcDescription[0] : 'No description available';
                    const provider = item.dataProvider && item.dataProvider[0] ? item.dataProvider[0] : 'Unknown provider';

                    setImageData({
                        imageUrl,
                        title,
                        description,
                        provider
                    });
                } else {
                    throw new Error('No valid items found with specified dimensions.');
                }
            } else {
                throw new Error('No items found in response.');
            }
        } catch (err) {
            setError(`Error fetching data: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNewImage();
    }, []);

    if (loading) {
        return <CircularProgress / > ;
    }

    if (error) {
        return <Box > Error: {
            error
        } < /Box>;
    }

    return ( <
        Box > {
            imageData && ( <
                >
                <
                div style = {
                    {
                        width: '100%',
                        maxWidth: '800px',
                        height: '600px',
                        overflow: 'hidden',
                        margin: '0 auto'
                    }
                } >
                <
                img src = {
                    imageData.imageUrl
                }
                alt = {
                    imageData.title
                }
                style = {
                    {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }
                }
                /> <
                /div> <
                Box >
                <
                h3 > {
                    imageData.title
                } < /h3> <
                p > {
                    imageData.description
                } < /p> <
                p > Provided by: {
                    imageData.provider
                } < /p> <
                /Box> <
                />
            )
        } <
        /Box>
    );
};

export default HistoricalImage;