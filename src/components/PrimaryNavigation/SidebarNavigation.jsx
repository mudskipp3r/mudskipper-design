import styled from '@emotion/styled';
import React from 'react';

function SidebarNavigation() {
    return (
        <StyledNav>
            <ul>
                <li>Projects</li>
                <li>About me</li>
                <li>Contact</li>
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 320px;
`;

export default SidebarNavigation;
