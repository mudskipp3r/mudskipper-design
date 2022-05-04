import styled from '@emotion/styled';
import React from 'react';

function Badge(props) {
    const { label } = props;
    return <StyledBadge>{label}</StyledBadge>;
}

const StyledBadge = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    padding: 0 0.5rem;
    color: #fff;
    background-color: #266cd4;
    width: fit-content;
    border-radius: 0.5rem;
    font-size: 0.875rem;
`;

export default Badge;
