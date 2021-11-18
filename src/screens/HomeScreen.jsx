import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

function HomeScreen(props) {
    return (
        <StyledDiv>
            I'm the homescreen
            <Link to="/HIA">HIA</Link>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    height: 100vh;
`;

export default HomeScreen;
