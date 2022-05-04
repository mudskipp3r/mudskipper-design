import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import LightThemeDawson from '../../images/light_dawson_coffee_smile.svg';
import { Strong } from '../Typography/Typography';

function SidebarNavigation() {
    return (
        <StyledNav>
            <div>
                <StyledBrand>
                    <Strong>Mudskipper</Strong>.design
                </StyledBrand>
                <StyledUl>
                    <li>
                        <Link to="/">Projects</Link>
                    </li>
                    <li>
                        <Link to="/">About me</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
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
    padding: 0 2rem;
    box-sizing: border-box;
    justify-content: space-between;
    overflow: hidden;

    img {
        display: flex;
        width: 60%;
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

        a {
            text-decoration: none;
        }
    }
`;

const StyledCaption = styled.div`
    background-color: #f7f6f9;
    border-radius: 1rem;
    position: relative;
    padding: 1.5rem;
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
