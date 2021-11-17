import React from 'react';
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
                }}
            >
                <brand>
                    <strong>Mudskipper.</strong>design
                </brand>
                <HorizontalStack gap="24">
                    <div>Projects</div>
                    <button class="button">Say hello!</button>
                </HorizontalStack>
            </div>
        </nav>
    );
}

export default PrimaryNavigation;
