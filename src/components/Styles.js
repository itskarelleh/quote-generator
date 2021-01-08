import styled from "styled-components";
import { motion } from 'framer-motion';
import { device, size } from './device';

/* Styed Components */
export const ModalHeading = styled.div`
    text-align: center;
`;

export const QuoteContainer = styled.div`
    margin: 0px 25px 20px;
    padding: 15px;
`;

export const List = styled.div `
    padding-top: 35px;
`;

export const GenreLabel = styled.div `
    width: 100%;
    text-align: right;
    text-decoration: underline;
`;

export const CloseModal = styled.div `
    cursor: pointer;
    margin-right: 20px;
    margin-top: 25px;
    width: 25%;
    text-align: right;
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

export const LightSwitch = styled(motion.button)`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: relative;
    border: none;
    margin-top: -5px;
    top: 17px;
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

export const ModalContainer = styled(motion.div)`
    background: var(--almost-black);
`;

export const SiteFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    @media ${device.watch} {
        position: relative;
    }
`;

//Tenary
export const fillLights = (lights) => `${lights === 'on' ? "var(--darkest)" : "var(--lightest)"}`
export const textLights = (lights, classnames) => `${classnames} + ${lights === 'on' ? "light-text" : "dark-text" }`
export const dimBackground = (lights, classnames) => `${classnames} + ${lights === 'on' ? "light-dim" : "dark-dim" }`;
export const backgroundLights = (lights, classnames) => `${classnames} + ${lights === 'on' ? "light-bg" : "dark-bg" }`;
export const subTextLights = (lights, classnames) => `${classnames} + ${lights === 'on' ? 'light-subtext' : 'dark-subtext'}`;
// export const backgroundLights = (lights) => `${lights === 'on' ?}`