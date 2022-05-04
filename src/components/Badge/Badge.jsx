import styled from '@emotion/styled';
import React from 'react';

function Badge(props) {
    const { label } = props;
    return <StyledBadge>{label}</StyledBadge>;
}

const StyledBadge = styled.span`
    padding: 0.25rem;
    color: #fff;
    background-color: #266cd4;
    width: fit-content;
    border-radius: 0.5rem;
`;

export default Badge;
