import React, { useState, useEffect } from 'react';
import './App.css';

import Fade from '@material-ui/core/Fade';

import Loading from './Loading';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  
  

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
