import styled from '@emotion/styled';
import React from 'react';

function Footer(props) {
    return (
        <StyledFooter>
            Brought to you by &copy; Mudskipper.design 2021
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    font-size: 14px;
    text-align: center;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Footer;
