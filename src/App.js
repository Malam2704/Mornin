// import logo from './logo.svg';
import './App.css';
import Forecast from './components/Forecast/forecast';
import Train from './components/Train/train';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mornin'</h1>
      </header>
      <main>
        <Forecast />
        <Train />
      </main>
      <footer>
        Created by Mohammed Alam
      </footer>
    </div>
  );
}

export default App;
