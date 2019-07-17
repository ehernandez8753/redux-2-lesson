import React from 'react';
import './App.css';
import routes from './routes';
import Header from './components/Header';

function App(props) {
  return (
    <div>
      <Header />
      <div className="content-container">
        <h1>React Redux</h1>
        {routes}
      </div>
    </div>
  );
}

export default App;
