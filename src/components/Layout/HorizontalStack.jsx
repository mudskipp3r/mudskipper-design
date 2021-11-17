import React from 'react';

function HorizontalStack(props) {
    const { gap, children } = props;
    return <div style={{ display: 'flex', gap: `${gap}px` }}>{children}</div>;
}

export default HorizontalStack;
