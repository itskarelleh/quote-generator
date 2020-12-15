import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export default function Modal({ lights, modal, setModal, author,
toggleOpen, isOpen }) {

    const [ quotes, setQuotes ] = useState([]);
    const [ didMount, setDidMount ] = useState(false);
    const [ limit, setLimit ] = useState(10);
    /* Styed Components */
    const ModalHeading = styled.div`
        text-align: center;
    `;

    const QuoteContainer = styled.div`
        margin: 0px 25px 20px;
        padding: 15px;
    `;

    const List = styled.div `
        padding-top: 35px;
    `;

    const GenreLabel = styled.div `
        width: 100%;
        text-align: right;
        text-decoration: underline;
    `;

    const CloseModal = styled.div `
        cursor: pointer;
    `;

    const handleClick = e => {
        if(isOpen) {
            setModal({ display: 'none' });
        }
    }

    function getQuotesByAuthor() {
        var url = `https://quote-garden.herokuapp.com/api/v3/quotes/random?author=${author}&count=${limit}`;
        
        axios.get(url).then((res) => {
            setQuotes(res.data.data);
        }).catch((err) => console.log(err));
    }

    useEffect(() => {
        setDidMount(true);

        return () => { 
            getQuotesByAuthor();
            setDidMount(false);
        }

    }, [didMount]);

    if(!didMount) {
        console.log('didMount: ' + didMount);
        return null;
    }

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
        <div 
        style={modal}
        initial={false}
        variants={backdrop_open}
        onClick={handleClick}
        className="modal-wrapper backdrop">
            <CloseModal style={{ marginRight: '20px', marginTop: '25px'}} 
            onClick={() => 
                {
                    toggleOpen(); 
                // setModal({ display: 'none'}); 
            }}
            className="exit-modal">
                <i class="fas fa-arrow-left dark-text"></i>
            </CloseModal>
            <motion.div initial={false} variants={modal_open}
            animate={isOpen ? 'open' : 'closed'}
            className={`modal ${!lights ? "light-bg" : "dark-bg" }`}>
                <div className="content">
                    <ModalHeading className={`${!lights ? "light-text light-border-bottom" : "dark-text dark-border-bottom" }`}>
                        <h5>Full list of quotes by</h5>
                        <h1>{author}</h1>
                    </ModalHeading>
                    <List className={`list ${!lights ? "light-dim-bg" : "dark-dim-bg"}`}>
                        {quotes && quotes.map((quote) => (
                            <>
                                
                                <QuoteContainer key={quote.id} className={` quote-container ${!lights ? "light-subtext light-bg" : "dark-subtext dark-bg" }`}>
                                    {quote.quoteText}
                                    <GenreLabel>
                                        {quote.quoteGenre}                                    
                                    </GenreLabel>
                                </QuoteContainer>
                            </>
                        ))}
                    </List>
                    <button onClick={() => {
                        setLimit(prevLimit => prevLimit + 10)
                        console.log(limit);
                        }}>Load more</button>
                </div>
            </motion.div>
        </div>
    )
}