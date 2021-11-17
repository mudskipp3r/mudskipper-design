import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProjectScreen from './screens/ProjectScreen';
import PrimaryNavigation from './components/PrimaryNavigation/PrimaryNavigation';

function App() {
    return (
        <Router>
            <PrimaryNavigation />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/HIA" element={<ProjectScreen />} />
            </Routes>
        </Router>
    );
}

export default App;
