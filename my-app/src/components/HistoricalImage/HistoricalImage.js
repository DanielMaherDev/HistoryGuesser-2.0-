import React, {
    useState,
    useEffect
} from 'react';
import './HistoricalImage.css';

const HistoricalImage = ({
    setImageYear,
    setHints,
    fetching,
    setFetching
}) => {
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');

    const fetchNewImage = async () => {
        try {
            console.log('Fetching new image...');
            const proxyUrl = 'https://cors-anywhere.herokuapp.com';
            const apiUrl = `${proxyUrl}/https://api.europeana.eu/record/v2/search.json?query=Ireland%20battle&media=true&type=IMAGE&wskey=ishoormu`;

            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Data received:', data);
            const images = data.items;

            if (images && images.length > 0) {
                const validImages = images.filter(image =>
                    image.dcDescription && image.dcDescription.length > 0 &&
                    image.year && image.year.length > 0 &&
                    image.edmIsShownBy && image.edmIsShownBy[0]
                );

                if (validImages.length > 0) {
                    const randomIndex = Math.floor(Math.random() * validImages.length);
                    const validImage = validImages[randomIndex];

                    setImageUrl(validImage.edmIsShownBy[0]);
                    setImageYear(validImage.year[0]);
                    setHints(validImage.dcDescription[0]);
                    console.log('New image URL:', validImage.edmIsShownBy[0]);
                } else {
                    setError('No valid images found.');
                }
            } else {
                setError('No images found.');
            }
        } catch (error) {
            console.error('Error fetching data: ', error);
            setError('Error fetching data.');
        } finally {
            setFetching(false);
        }
    };

    useEffect(() => {
        if (fetching) {
            fetchNewImage();
        }
    }, [fetching]);

    if (error) {
        return ( <
            div >
            <
            div > Error: {
                error
            } < /div> <
            /div>
        );
    }

    return ( <
        div className = "historical-image-container" > {
            imageUrl ? < img src = {
                imageUrl
            }
            alt = "Historical"
            className = "historical-image" / > : 'Loading...'
        } <
        /div>
    );
};

export default HistoricalImage;