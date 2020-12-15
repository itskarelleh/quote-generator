import React from 'react';

export default function QuoteSummary(props) {
    return(
        <div className="quote-summary">
            <h4>{props.text}</h4>
        </div>
    )
}