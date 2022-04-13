// import logo from './logo.svg';
import './App.css';
import Forecast from './components/Forecast/forecast';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mornin'</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Created by Mohammed Alam
      </footer>
    </div>
  );
}

export default App;
