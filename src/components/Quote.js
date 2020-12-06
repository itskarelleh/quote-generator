import React from 'react';

export default function Quote (props) {

    return(
        <div className="quote">
            <span>{props.genre}</span>
            <div className="quote-block">
                <div className="strip"></div>
                <h1 className="quote-text">{props.text}</h1> 
            </div>
            <div className="author">
                <h3>{props.author}</h3>
            </div>
        </div>
    )
}
