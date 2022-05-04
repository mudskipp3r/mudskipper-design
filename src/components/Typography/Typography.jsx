import styled from '@emotion/styled';
import React from 'react';

export function H1(props) {
    const { children } = props;
    return <StyledH1>{children}</StyledH1>;
}

export function H5(props) {
    const { children } = props;
    return <StyledH5>{children}</StyledH5>;
}

export function Strong(props) {
    const { children } = props;
    return <StyledStrong>{children}</StyledStrong>;
}

export function Caption(props) {
    const { children } = props;
    return <StyledCaption>{children}</StyledCaption>;
}

const StyledH1 = styled.h1`
    font-size: 2rem;
    font-family: CeraRoundProBold;
`;

const StyledH5 = styled.h5`
    font-size: 1.3125rem;
    font-family: CeraRoundProBold;
    margin: 0.5rem 0;
`;

const StyledStrong = styled.strong`
    font-family: CeraRoundProBold;
`;

const StyledCaption = styled.caption`
    font-size: 1rem;
`;
