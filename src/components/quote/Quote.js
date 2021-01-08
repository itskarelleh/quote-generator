import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { device, size } from '../device';
import AuthorSummary from './AuthorSummary';
import QuoteOptions from './QuoteOptions';

export default function Quote (props) {
    const quoteText = document.getElementsByClassName("quote-text");
    const [ characterCount, setCharacterCount ] = useState(null);

    

    useEffect(() => {
        var quoteLength = function() {
            var count = quoteText[0].innerText.length;
            return count;
        }

        setCharacterCount(quoteLength);
    }, [quoteText])

    const QuoteText = styled.h2 `
        font-size: 2.2em;
        margin: 0px;
        @media ${device.phoneS} and (max-width: ${size.phoneL}) {
            max-height: 55vh;
            margin: 0;
            ${characterCount >= 150 ? 'font-size: 1.8em;' : 'font-size: 2.2em;' }
        }

        @media ${device.watch} {
            font-size: 1em;
            font-weight: 900;
        }


    `;

    return(
        <>
        <div className="quote" id="quote">
            <QuoteOptions setRandomized={props.setRandom} lights={props.lights} />
            <div className="quote-block">
                <div className={`strip ${props.lights === 'on' ? 'accent-light' : 'accent-dark' }`}></div>
                <span>
                    <QuoteText className={`quote-text ${props.lights === 'on' ? 'light-subtext' : 'dark-subtext'}`}>
                        {props.text}
                    </QuoteText> 
                </span>
            </div>
        </div>
        <AuthorSummary fullname={props.author} genre={props.genre} lights={props.lights} />
        </>
    )
}