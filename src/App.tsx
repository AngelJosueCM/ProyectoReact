import React from 'react';
import logo from './logo.svg';
import ButtonClass from './components/ButtonClass';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit your code<code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonClass callback={() => {alert('hola')}}/>
        <ButtonClass text="example 2"/>
        <ButtonClass text="example 3"/>
        <ButtonClass text="example 4"/>

      </header>
    </div>
  );
}

export default App;
