import React, { useState } from 'react';
import Modal from '../Modal';
import { useCycle } from 'framer-motion';
import { subTextLights } from '../Styles';

export default function AuthorSummary(props) {

    const [ modal, setModal ] = useState({ display: 'none' });
    const [ isOpen, toggleOpen ] = useCycle( false, true );

    const toggleModal = () => {
        if(!isOpen) {
            setModal({ display: 'flex' });
            toggleOpen();
        }
    }

    return(
        <div className={`author-summary ${props.lights === 'on' ? 'light-dim-bg' : 'dark-dim-bg'}`}>
            <div className="container">
                <div className="text">
                    <h4 className={`${props.lights === 'on' ? 'light-text' : 'dark-text'}`}>{props.fullname}</h4>
                    <p className={`${props.lights === 'on' ? 'light-subtext' : 'dark-subtext'}`}>{props.genre}</p>    
                </div>
                <i onClick={toggleModal} className={subTextLights(props.lights, 'fas fa-arrow-right')}></i>
                <Modal 
                modal={modal} setModal={setModal}
                animate={ isOpen ? 'open' : 'closed' } lights={props.lights} 
                author={props.fullname} isOpen={isOpen} toggleOpen={toggleOpen} />
                </div>
        </div>
    )
}