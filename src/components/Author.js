import React from 'react';

export default function Author(props) {
    return(
        <>
            <div className="author-header">
                <h3>{props.author}</h3>
            </div>

            <div className="quote-list">
            </div>
        </>
    )
}