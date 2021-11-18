import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProjectScreen from './screens/ProjectScreen';
import PrimaryNavigation from './components/PrimaryNavigation/PrimaryNavigation';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { darkTheme, lightTheme } from './themes';

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
            <Router>
                <PrimaryNavigation
                    theme={theme}
                    onThemeToggle={handleThemeToggle}
                />
                <Routes>
                    <Route path="/" element={<HomeScreen theme={theme} />} />
                    <Route path="/HIA" element={<ProjectScreen />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
