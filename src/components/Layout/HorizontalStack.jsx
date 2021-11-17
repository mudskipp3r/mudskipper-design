import React from 'react';

function HorizontalStack(props) {
    const { gap, children } = props;
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: `${gap}px` }}>
            {children}
        </div>
    );
}

export default HorizontalStack;
