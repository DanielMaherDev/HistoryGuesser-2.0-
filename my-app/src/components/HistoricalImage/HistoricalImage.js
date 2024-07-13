import React, {
    useState,
    useEffect
} from 'react';

const HistoricalImages = () => {
    const [image, setImage] = useState(null);
    const apiKey = 'ntrageryl'; // Replace with your actual API key

    const fetchNewImage = () => {
        fetch(`https://api.europeana.eu/record/v2/search.json?query=Ireland&media=true&wskey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                const items = data.items;
                const randomItem = items[Math.floor(Math.random() * items.length)];
                const newImage = {
                    title: randomItem.title ? randomItem.title[0] : 'No title available',
                    year: randomItem.year ? randomItem.year[0] : 'No year available',
                    url: randomItem.edmPreview ? randomItem.edmPreview[0] : 'No image available'
                };
                console.log('New Image:', newImage); // Debug log to check new image
                setImage(newImage);
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    useEffect(() => {
        fetchNewImage();
    }, []);

    return ( <
        div > {
            image === null ? ( <
                p > Loading... < /p>
            ) : ( <
                div > {
                    image.url !== 'No image available' ? ( <
                        img src = {
                            image.url
                        }
                        alt = {
                            image.title
                        }
                        style = {
                            {
                                width: '300px'
                            }
                        }
                        />
                    ) : ( <
                        p > {
                            image.title
                        } - {
                            image.year
                        }(Image not available) < /p>
                    )
                } <
                button onClick = {
                    fetchNewImage
                } > Fetch New Image < /button> < /
                div >
            )
        } <
        /div>
    );
};

export default HistoricalImages;