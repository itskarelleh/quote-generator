import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ModalHeading, CloseModal, ModalContainer, List, QuoteContainer, GenreLabel, backgroundLights } from './Styles';

export default function Modal({ lights, modal, setModal, author,
toggleOpen, isOpen }) {

    const [ quotes, setQuotes ] = useState([]);
    const [ didMount, setDidMount ] = useState(false);
    const [ limit, setLimit ] = useState(5);

    const handleClick = e => {
        if(isOpen) {
            setModal({ display: 'none' });
            toggleOpen();
        }
    }

    function getQuotesByAuthor(l) {
        var url = `https://quote-garden.herokuapp.com/api/v3/quotes/random?author=${author}&count=${l}`;
        
        axios.get(url).then((res) => {
            setQuotes(res.data.data);
        }).catch((err) => console.log(err));

        console.log('Quotes loaded');
    }

    // function increaseLimit(lim) {
    //     var prevLimit = lim
    //     setLimit(prevLimit += 10);
    //     getQuotesByAuthor(prevLimit);
    //     console.log(prevLimit);
    //     setModal({ display: 'block'})
    //     toggleOpen();
    // }

    useEffect(() => {
        setDidMount(true);
        getQuotesByAuthor(limit);
        return () => {
            setDidMount(false);
        }
    }, [didMount]);

    /* variants */
    const modal_open = {
        open: { 
            opacity: 1, 
            x: 0,
            display: 'block',
            transition: {
                type: "spring",
                stiffness: 75,
                restDelta: 2,
                duration: 0.5,
                delay: 0.5
            },
        },
        closed: { 
            opacity: 0, 
            x: '75vw',
            transition : {
                type: "spring",
                duration: 0.5
            }
        }
    }

    const backdrop_open = {
        open: {
            opacity: 1,
            transition: {
                type: "spring"
            }
        },
        closed: { 
            opacity: 0,
            transition : {
                type: "spring",
                duration: 0.5,
                delay: 0.6
            }

        }
    }

    return (
        <div style={modal} variants={backdrop_open}
        onClick={handleClick} className="modal-wrapper backdrop">
            <CloseModal style={{ marginRight: '20px', marginTop: '25px'}} 
            onClick={toggleOpen} className="exit-modal">
                <i className="fas fa-arrow-left dark-text"></i>
            </CloseModal>
            <ModalContainer variants={modal_open}
            animate={isOpen ? 'open' : 'closed'}
            className={backgroundLights}>
                <div className="content">
                    <ModalHeading className={`${lights === 'on' ? "light-text light-border-bottom" : "dark-text dark-border-bottom" }`}>
                        <h5>Full list of quotes by</h5>
                        <h1>{author}</h1>
                    </ModalHeading>
                    <List className={`list ${lights === 'on' ? "light-dim-bg" : "dark-dim-bg"}`}>
                        {quotes && quotes.map((quote) => (
                            <>
                                <QuoteContainer key={quote.id} className={`quote-container ${!lights ? "light-subtext light-bg" : "dark-subtext dark-bg" }`}>
                                    {quote.quoteText}
                                    <GenreLabel>
                                        {quote.quoteGenre}                                    
                                    </GenreLabel>
                                </QuoteContainer>
                            </>
                        ))}
                    </List>
                    {/* <button onClick={() => increaseLimit(limit)}>Load more</button> */}
                </div>
            </ModalContainer>
        </div>
    )
}