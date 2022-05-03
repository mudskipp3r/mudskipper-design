import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

function PrimaryNavigation(props) {
    return (
        <StyledNav>
            <StyledNavContainer>
                <brand>
                    <Link to="/">
                        <strong>Mudskipper.</strong>design
                    </Link>
                </brand>
                <div>
                    <Link to="/Test">Test</Link>
                </div>
            </StyledNavContainer>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    background-color: ${(props) =>
        props.theme.primaryNavigation.backgroundColor};
    color: ${(props) => props.theme.color};
`;

const StyledNavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
`;

export default PrimaryNavigation;
