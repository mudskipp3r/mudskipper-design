import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrimaryNavigation from './components/PrimaryNavigation/PrimaryNavigation';
import { Global, css, ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { darkTheme, lightTheme } from './themes';
import SplashScreen from './screens/SplashScreen';
import styled from '@emotion/styled';
import Footer from './components/Footer/Footer';
import TestScreen from './screens/TestScreen';

const GlobalStyles = css`
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0px;
        margin: 0px;
    }
`;

const themes = {
    light: lightTheme,
    dark: darkTheme,
};

function App() {
    const [theme, setTheme] = useState('light');

    function handleThemeToggle() {
        console.log(theme);
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <ThemeProvider theme={themes[theme]}>
            <Global styles={GlobalStyles} />
            <StyledGrid>
                <Router>
                    <PrimaryNavigation
                        style={{ gridArea: 'nav' }}
                        theme={theme}
                        onThemeToggle={handleThemeToggle}
                    />
                    <main style={{ gridArea: 'main' }}>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <SplashScreen
                                        theme={theme}
                                        onThemeToggle={handleThemeToggle}
                                    />
                                }
                            />
                            <Route
                                path="/Test"
                                element={<TestScreen theme={theme} />}
                            />
                        </Routes>
                    </main>
                    <Footer />
                </Router>
            </StyledGrid>
        </ThemeProvider>
    );
}

const StyledGrid = styled.div`
    display: grid;
    grid-template-rows: 65px 1fr 56px;
    grid-template-areas: 'nav' 'main' 'ft';
    height: 100vh;
`;

export default App;
