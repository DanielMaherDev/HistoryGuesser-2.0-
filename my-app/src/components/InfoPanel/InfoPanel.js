import React, {
    useState,
    useEffect
} from 'react';
import './InfoPanel.css';

const InfoPanel = ({
    hints
}) => {
    const [displayedHints, setDisplayedHints] = useState([]);

    useEffect(() => {
        if (hints && hints.length > 0) {
            let index = 0;
            const intervalId = setInterval(() => {
                setDisplayedHints((prevHints) => [...prevHints, hints[index]]);
                index += 1;
                if (index >= hints.length) clearInterval(intervalId);
            }, 2000);
            return () => clearInterval(intervalId);
        }
    }, [hints]);

    return ( <
        div className = "info-panel" > {
            displayedHints.map((hint, index) => ( <
                div key = {
                    index
                }
                className = "hint-message" > {
                    hint
                } <
                /div>
            ))
        } <
        /div>
    );
};

export default InfoPanel;