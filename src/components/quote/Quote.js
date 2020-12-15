import React from 'react';
import styled from 'styled-components';

export default function Quote (props) {

    const QuoteText = styled.h2 `
        font-size: 2.2em;
    `;
    
    return(
        <div className="quote" id="quote">
            <div className="quote-block">
                <div className={`strip ${ !props.lights ? 'accent-light' : 'accent-dark' }`}></div>
                <span>
                    <QuoteText className={`quote-text ${!props.lights ? 'light-subtext' : 'dark-subtext'}`}>{props.text}</QuoteText> 
                </span>
            </div>
        </div>
    )
}
