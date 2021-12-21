import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Random} from './Random';
function App() {
  return (
      // need to add instance of Random in here
      <div className="App">
        <header className="App-header">
          <Random/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Click button above to change section color
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

  );
}
ReactDOM.render(<App/>, document.getElementById('root'));
export default App;
