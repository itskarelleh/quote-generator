import styled from "styled-components";
import { motion } from 'framer-motion';
import { device, size } from './device';

/* Stlyed Components */
export const CloseModal = styled.div `
    cursor: pointer;
    margin-right: 20px;
    margin-top: 25px;
    width: 25%;
    text-align: right;
`;

export const DarkModeDiv = styled.div`
    display: flex;
    width: 100px;
    justify-content: space-evenly;
    align-items: center;
    align-self: center;
    margin: 0 auto;
`;

export const GenreLabel = styled.div `
    width: 100%;
    text-align: right;
    text-decoration: underline;
`;

export const LightSwitch = styled(motion.button)`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: relative;
    margin-top: -5px;
    top: 17px;
`;

export const List = styled.div `
    padding-top: 35px;
`;

export const Menu = styled.div`
    align-items: center;
    margin-right: 35px;
    @media (min-width: ${size.watch}) and (max-width: ${size.tablet}) {
        height: 100vh;
        ${props => props.display}
        background: rgba(0,0,0,0.5);
        width: 100%;
        position: absolute;
        justify-content: center;
        top: 0;
        align-items: flex-start;
    }
`;

export const MenuContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    height: auto;
    @media (min-width: ${size.watch}) and (max-width: ${size.tablet}) {
        justify-content: space-evenly;
        flex-flow: column;
        min-height: 100px;
        display: block;
        top: 0px;
    }
`;

export const MenuHeading = styled.h3`
    display: none;
    width: auto;
    @media (min-width: ${size.watch}) and (max-width: ${size.tablet}) {
        display: block;
        width: 100%;
        text-align: center;
    }
`;

export const MenuCloseBtn = styled.button`
    display: none;

    @media (min-width: ${size.watch}) and (max-width: ${size.tablet}) {
        display: inline-block;
        background: none;
        font-size: 2em;
        position: absolute;
        color: var(--mid-grey);
        border: none;
        height: 20px;
        right: 10px;
        top: 10px;
    } 
`;


export const ModalContainer = styled(motion.div)`
    
`;

export const ModalHeading = styled.div`
    text-align: center;
`;

export const OptionsContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: flex-end;

    @media ${device.watch} {
        height: 10px;
    }
`;

export const QuoteContainer = styled.div`
    margin: 0px 25px 20px;
    padding: 15px;
`;

export const RandomButton = styled.button`
    background: none;
    border: none;
    display: flex;
    width: 100px;
    justify-content: space-evenly;
    &:focus {
        outline: none;
    }
    &:hover {
        cursor: pointer;
    }
`;

export const SiteFooter = styled.footer`
    width: 100%;
    @media ${device.watch} {
        position: relative;
    }
`;

export const ToggleButton = styled.i`
    display: none;

    @media (min-width: ${size.watch}) and (max-width: ${size.tablet}) {
        display: inline;
        align-self: center;
        margin-right: 25px;
        font-size: 2em;
        cursor: pointer;
    }    
`;

export const backgroundLights = (lights, classnames) => `${classnames}` + `${lights === 'on' ? "light-bg" : "dark-bg" }`;
export const dimBackground = (lights, classnames) => `${classnames} ` + `${lights === 'on' ? "light-dim" : "dark-dim" }`;
export const fillLights = (lights) => `${lights === 'on' ? "var(--darkest)" : "var(--lightest)"}`;
export const subTextLights = (lights, classnames) => `${classnames} ` + `${lights === 'on' ? 'light-subtext' : 'dark-subtext'}`;
export const textLights = (lights, classnames) => `${classnames} ` + `${lights === 'on' ? "light-text" : "dark-text" }`;