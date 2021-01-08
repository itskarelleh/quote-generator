import React from 'react';
import { SiteFooter } from './Styles';

export default function Footer({ lights }) {

    return(
        <SiteFooter className={`site-footer ${lights === 'on' ? 'light-text grey-bg' : 
        'dark-text black-bg'}`}>
            <div className="container">
                <p>&copy;2021. Karelle Hofler.</p>
            </div>
        </SiteFooter>
    )
}