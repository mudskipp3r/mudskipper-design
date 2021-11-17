import Appa from './images/Appa.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProjectScreen from './screens/ProjectScreen';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={<HomeScreen />} />
                <Route path="/HIA" component={<ProjectScreen />} />
            </Switch>
        </Router>
    );
}

export default App;
