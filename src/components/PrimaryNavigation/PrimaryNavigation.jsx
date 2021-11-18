import React from 'react';
import styled from '@emotion/styled';

function PrimaryNavigation(props) {
    return (
        <StyledNav>
            <StyledNavContainer>
                <brand>
                    <strong>Mudskipper.</strong>design
                </brand>
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
    justify-content: center;
    align-items: center;
    min-height: 48px;
    padding: 8px 0;
    box-sizing: border-box;
`;

export default PrimaryNavigation;
