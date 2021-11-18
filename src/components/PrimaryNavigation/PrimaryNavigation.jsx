import React from 'react';
import Button from '../Button/Button';
import HorizontalStack from '../Layout/HorizontalStack';
import styled from '@emotion/styled';
import { DarkModeToggle } from 'react-dark-mode-toggle-2';

function PrimaryNavigation(props) {
    return (
        <StyledNav>
            <StyledNavContainer>
                <brand>
                    <strong>Mudskipper.</strong>design
                </brand>
                <HorizontalStack gap="24">
                    <div>Projects</div>
                    <Button class="button">Say hello!</Button>
                </HorizontalStack>
                <DarkModeToggle
                    onChange={props.onThemeToggle}
                    isDarkMode={props.theme === 'dark' ? true : false}
                    size={48}
                    speed={3}
                />
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
    width: 60vw;
    height: 100%;
    min-height: 48px;
    padding: 8px 0;

    @media (max-width: 480px) {
        width: 95vw;
    }
`;

export default PrimaryNavigation;
