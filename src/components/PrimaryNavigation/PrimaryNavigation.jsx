import React from 'react';
import Button from '../Button/Button';
import HorizontalStack from '../Layout/HorizontalStack';
import styled from '@emotion/styled';

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

function PrimaryNavigation() {
    return (
        <nav
            style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'whitesmoke',
                height: '100%',
            }}
        >
            <StyledNavContainer>
                <brand>
                    <strong>Mudskipper.</strong>design
                </brand>
                <HorizontalStack gap="24">
                    <div>Projects</div>
                    <Button class="button">Say hello!</Button>
                </HorizontalStack>
            </StyledNavContainer>
        </nav>
    );
}

export default PrimaryNavigation;
