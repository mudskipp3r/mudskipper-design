import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
    border: none;
    max-height: 56px;
    background-color: #ff8a00;
    color: white;
    border-radius: 8px;
    min-height: 48px;
    padding: 0px 16px;
    white-space: nowrap;
`;

function Button(props) {
    const { children } = props;
    return <StyledButton type="button">{children}</StyledButton>;
}

export default Button;
