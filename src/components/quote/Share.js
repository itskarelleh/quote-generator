import React from 'react';
import styled from 'styled-components';
import Quote from './Quote';

export default function Share({ quote, author, genre }) {

    const SharingContainer = styled.div `
        width: 640px;
        height: 640px;
    `;

    const captureQuote = () => {
        var captureDiv = document.getElementById('capture-div');
        var context = captureDiv.getContext('2d');

        window.open('', captureDiv.toDataURL)
    }
    return(
        <div className="sharing">
            <div className="container" id="capture-div">
                <Quote />
            </div>
        </div>
    )
}