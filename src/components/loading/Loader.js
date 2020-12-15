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
    return (
        <LoaderContainer>
            <div className="loader">Loading</div>
            <h4>{props.message}</h4>
        </LoaderContainer>
    )
}