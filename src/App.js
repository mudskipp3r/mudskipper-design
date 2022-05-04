import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Global, css, ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { darkTheme, lightTheme } from './themes';
import styled from '@emotion/styled';
import SidebarNavigation from './components/PrimaryNavigation/SidebarNavigation';
import ProjectListScreen from './screens/ProjectListScreen';
import Project1Screen from './screens/Project1Screen';
import Project2Screen from './screens/Project2Screen';
import Project3Screen from './screens/Project3Screen';

const GlobalStyles = css`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: CeraRoundProRegular;
        line-height: 125%;
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
                                exact
                                path="/"
                                element={
                                    <ProjectListScreen
                                        onThemeToggle={handleThemeToggle}
                                    />
                                }
                            />
                            <Route
                                path="/project1"
                                element={<Project1Screen />}
                            />
                            <Route
                                path="/project2"
                                element={<Project2Screen />}
                            />
                            <Route
                                path="/project3"
                                element={<Project3Screen />}
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
