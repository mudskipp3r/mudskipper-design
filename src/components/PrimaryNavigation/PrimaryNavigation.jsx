import React from 'react';
import Button from '../Button/Button';
import HorizontalStack from '../Layout/HorizontalStack';

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
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '60vw',
                    height: '100%',
                    minHeight: '48px',
                    padding: '8px 0',
                }}
            >
                <brand>
                    <strong>Mudskipper.</strong>design
                </brand>
                <HorizontalStack gap="24">
                    <div>Projects</div>
                    <Button class="button">Say hello!</Button>
                </HorizontalStack>
            </div>
        </nav>
    );
}

export default PrimaryNavigation;
