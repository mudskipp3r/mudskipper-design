import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Global, css, ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { darkTheme, lightTheme } from './themes';
import SplashScreen from './screens/SplashScreen';
import styled from '@emotion/styled';
import SidebarNavigation from './components/PrimaryNavigation/SidebarNavigation';
import ProjectScreen from './screens/ProjectScreen';

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
                    <SidebarNavigation style={{ gridArea: 'nav' }} />
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
                                path="/projects"
                                element={<ProjectScreen />}
                            />
                        </Routes>
                    </main>
                </Router>
            </StyledGrid>
        </ThemeProvider>
    );
}

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 320px 1fr;
    grid-template-areas: 'nav main';
    height: 100vh;
`;

export default App;
