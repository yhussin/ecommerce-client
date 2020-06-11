import React from 'react';
import routes from './config/routes'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
      return (
      <div>
        <Header/>
        { routes }
      </div>
    )
}

export default App;
