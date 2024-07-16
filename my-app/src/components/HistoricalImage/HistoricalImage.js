import React, {
    useState,
    useEffect,
    useCallback
} from 'react';
import './HistoricalImage.css';

const HistoricalImage = ({
    setImageYear,
    setHints,
    fetching,
    setFetching,
    selectedPack,
    onImageLoad
}) => {
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');

    const fetchNewImage = useCallback(async () => {
        try {
            const response = await fetch(`/packs/${selectedPack}.json`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const images = data.images;

            if (images && images.length > 0) {
                const randomIndex = Math.floor(Math.random() * images.length);
                const validImage = images[randomIndex];

                setImageUrl(validImage.url);
                setImageYear(validImage.year ? validImage.year : 'Unknown Year');
                setHints({
                    hintImage: validImage.hintImage ? validImage.hintImage : 'No image hint available',
                    hintYear: validImage.hintYear ? validImage.hintYear : 'No year hint available',
                    hintLocation: validImage.hintLocation ? validImage.hintLocation : 'No location hint available',
                });
            } else {
                setError('No images found.');
            }
        } catch (error) {
            console.error('Error fetching data: ', error);
            setError('Error fetching data.');
        } finally {
            setFetching(false);
        }
    }, [selectedPack, setFetching, setHints, setImageYear]);

    useEffect(() => {
        if (fetching) {
            fetchNewImage();
        }
    }, [fetching, fetchNewImage]);

    if (error) {
        return ( <
            div >
            <
            div > Error: {
                error
            } < /div> < /
            div >
        );
    }

    return ( <
        div className = "historical-image-container" > {
            imageUrl ? ( <
                img src = {
                    imageUrl
                }
                alt = "Historical"
                className = "historical-image"
                onLoad = {
                    onImageLoad
                }
                />
            ) : (
                'Loading...'
            )
        } <
        /div>
    );
};

export default HistoricalImage;