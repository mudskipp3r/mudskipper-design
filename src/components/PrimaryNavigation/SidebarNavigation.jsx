import styled from '@emotion/styled';
import React from 'react';
import LightThemeDawson from '../../images/light_dawson_coffee_smile.svg';

function SidebarNavigation() {
    return (
        <StyledNav>
            <div>
                <StyledBrand>
                    <strong>Mudskipper</strong>.design
                </StyledBrand>
                <StyledUl>
                    <li>Projects</li>
                    <li>About me</li>
                    <li>Contact</li>
                </StyledUl>
            </div>
            <div>
                <StyledCaption>
                    Here are some of my latest projects
                    <span />
                </StyledCaption>
                <img src={LightThemeDawson} alt="coffee" />
            </div>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 320px;
    padding: 0 3rem;
    box-sizing: border-box;
    justify-content: space-between;
    overflow: hidden;

    img {
        display: flex;
        width: 75%;
        margin-bottom: -1rem;
        margin-left: auto;
    }
`;

const StyledBrand = styled.div`
    display: flex;
    height: 10rem;
    align-items: center;
`;

const StyledUl = styled.ul`
    list-style: none;
    padding: 0;
    li {
        text-decoration: none;
        padding: 0.5rem 0;
    }
`;

const StyledCaption = styled.div`
    background-color: #f7f6f9;
    border-radius: 1rem;
    position: relative;
    padding: 2rem;
    margin-bottom: 1rem;

    span {
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #f7f6f9;
        position: absolute;
        bottom: -10px;
        right: 3.5rem;
    }
`;

export default SidebarNavigation;