import React from 'react';
import styled from 'styled-components';



const SectionContainer = styled.div`

    min-height: 100vh;
    min-width: 320px;
    max-width: 1366px;
    display: flex;
    margin: auto;
    flex: 0 1 auto;
    flex-direction: column;
    justify-content: center;
    padding: 5em 1em;
    scroll-behavior: smooth;
`;



const Container = (props) => (
    
        <>
            <SectionContainer>{props.children}</SectionContainer>
        </>
    

);




export default Container;