import React, { useState } from 'react';
import './App.css';
import Login from './login';
import Register from './register';

function App() {
    const [activeComponent, setActiveComponent] = useState('grocery');
  
    const renderComponent = () => {
      switch (activeComponent) {
        case 'login':
          return <Login/>;
        case 'Register':
          return <Register />;
        default:
          return <Register />;
      }
    };
  
    return (
      <div className="App">
        <header className="App-header">
  
          <div>
            <button onClick={() => setActiveComponent('login')}>Login</button>
            <button onClick={() => setActiveComponent('register')}>Register</button>
          </div>
  
          {renderComponent()}
        </header>
      </div>
    );
  }
  
  export default App;
  