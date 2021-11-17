import Appa from './images/Appa.jpg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div style={{ display: 'flex', marginTop: '5vh' }}>
                    <img
                        style={{ width: '30vw', height: '100%' }}
                        src={Appa}
                        alt="Appa"
                    />
                </div>

                <p>Website under construction</p>
            </header>
        </div>
    );
}

export default App;
