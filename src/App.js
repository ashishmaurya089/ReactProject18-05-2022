import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Ashish
        </p>
        <a
          className="App-link"
          href="https://www.google.co.in/"
          target="_blank"
        >
          Google.Com
        </a>
      </header>
    </div>
  );
}

export default App;
