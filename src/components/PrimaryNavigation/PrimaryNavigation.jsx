import React from 'react';
import HorizontalStack from '../Layout/HorizontalStack';

function PrimaryNavigation() {
    return (
        <nav
            style={{
                display: 'flex',
                backgroundColor: 'whitesmoke',
                justifyContent: 'space-between',
                alignItems: 'center',
                minHeight: '48px',
                height: '100%',
                padding: '0px 5vh',
            }}
        >
            <brand>
                <strong>Mudskipper.</strong>design
            </brand>
            <HorizontalStack gap="24">
                <div>Projects</div>
                <button class="button">Say hello!</button>
            </HorizontalStack>
        </nav>
    );
}

export default PrimaryNavigation;
