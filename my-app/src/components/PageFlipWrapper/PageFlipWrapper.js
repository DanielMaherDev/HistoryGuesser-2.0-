// src/components/PageFlipWrapper.js
import React from 'react';
import HTMLFlipBook from 'react-pageflip';

const PageFlipWrapper = ({
    children
}) => {
    return ( <
        HTMLFlipBook width = {
            800
        }
        height = {
            600
        } > {
            children.map((child, index) => ( <
                div key = {
                    index
                }
                className = "page" > {
                    child
                } <
                /div>
            ))
        } <
        /HTMLFlipBook>
    );
};

export default PageFlipWrapper;