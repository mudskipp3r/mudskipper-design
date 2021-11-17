import Appa from './images/Appa.jpg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProjectScreen from './screens/ProjectScreen';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={<HomeScreen />} />
                <Route path="/HIA" component={<ProjectScreen />} />
            </Routes>
        </Router>
    );
}

export default App;
