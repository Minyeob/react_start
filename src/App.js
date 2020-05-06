import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonToolbar, Button, Badge } from 'react-bootstrap'; 

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ButtonToolbar>
          {/* Standard button */}
          <Button>Github-jenkins hook retest12</Button>
          {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
          <Button variant="primary">Primary</Button>
          {/* Indicates a successful or positive action */}
          <Button variant="success">Success</Button>
          {/* Contextual button for informational alert messages */}
          <Button variant="info">Info</Button>
          {/* Indicates caution should be taken with this action */}
          <Button variant="warning">Warning</Button>
          {/* Indicates a dangerous or potentially negative action */}
          <Button variant="danger">Danger</Button>
          {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
          <Button variant="link">Link</Button>
          <Badge variant="warning">Warning</Badge>
          TEST123
      </ButtonToolbar>
    </div>
  );
}

export default App;
