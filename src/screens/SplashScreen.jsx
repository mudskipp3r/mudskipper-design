import styled from '@emotion/styled';
import React from 'react';
import { DarkModeToggle } from 'react-dark-mode-toggle-2';
import LightThemeDawson from '../images/light_dawson_coffee_smile.svg';
import DarkThemeDawson from '../images/dark_dawson_coffee_smile.svg';

function SplashScreen(props) {
    return (
        <StyledContainer>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <StyledAnnouncement>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>
                            <h1 style={{ margin: 0 }}>Howdy</h1>
                            <p>
                                It's great to see you, but you're a bit early!
                            </p>
                        </div>
                        <StyledToggle style={{}}>
                            Switch theme
                            <DarkModeToggle
                                onChange={props.onThemeToggle}
                                isDarkMode={
                                    props.theme === 'dark' ? true : false
                                }
                                size={48}
                                speed={3}
                            />
                        </StyledToggle>
                    </div>
                    <img
                        style={{
                            width: '176px',
                            height: '247.32px',
                            transform: 'scaleX(-1)',
                        }}
                        src={
                            props.theme === 'light'
                                ? LightThemeDawson
                                : DarkThemeDawson
                        }
                        alt="Dawson smiling with a coffee cup"
                    />
                </StyledAnnouncement>
            </div>
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    height: 100%;
`;

const StyledAnnouncement = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${(props) =>
        props.theme.announcementCard.backgroundColor};
    border-radius: 8px;

    height: 240px;
    padding-top: 40px;
    padding-left: 24px;
    padding-right: 16px;
    width: 480px;
`;

const StyledToggle = styled.div`
    display: flex;
    height: 48px;
    align-items: center;
    margin-bottom: 32px;
    gap: 8px;
    padding: 0 16px;
    background-color: ${(props) =>
        props.theme.announcementCard.toggle.backgroundColor};
    width: fit-content;
    border-radius: 8px;
    font-size: 16px;
`;

export default SplashScreen;
