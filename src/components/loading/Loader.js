import styled from 'styled-components';

export default function Loader(props) {

    const LoaderContainer = styled.div `
        text-align: center;
        height: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    `;

    const LoaderDiv = styled.div`
        ${props.lights === 'on' ? "color: var(--almost-black)" : "color: var(--lightest)"}
    `;
    return (
        <LoaderContainer>
            <LoaderDiv className="loader">Loading</LoaderDiv>
            <h4 className={props.lights === 'on' ?"light-text" : "dark-text"}>{props.message}</h4>
        </LoaderContainer>
    )
}