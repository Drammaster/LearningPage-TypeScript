import React, { useState, useEffect } from 'react';
import './App.css';

import Fade from '@material-ui/core/Fade';

import Loading from './Loading';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  
  console.log(fetch('https://api.github.com/users/drammaster/repos')
    .then(response => {
        return response.json();
    }))
    
  return (
    <>
      <header className="App-header">
        {loading === false ? (
          <Fade in={!loading} timeout={1000}>
            <div className="App">
              
                <h1>Csaba Darazs</h1>
                <p>
                  Welcome
                </p>
              
            </div>
          </Fade>
          ) : (
            <Loading />
          )}
      </header>
    </>
  );
}

export default App;
