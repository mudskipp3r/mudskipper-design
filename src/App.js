import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectScreen from './screens/ProjectScreen';
import PrimaryNavigation from './components/PrimaryNavigation/PrimaryNavigation';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { darkTheme, lightTheme } from './themes';
import SplashScreen from './screens/SplashScreen';
import styled from '@emotion/styled';

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
                            <Route path="/HIA" element={<ProjectScreen />} />
                        </Routes>
                    </main>
                </Router>
            </StyledGrid>
        </ThemeProvider>
    );
}

const StyledGrid = styled.div`
    display: grid;
    grid-template-rows: minmax(48px, 10vh) 90vh;
    grid-template-areas: 'nav' 'main';
`;

export default App;
