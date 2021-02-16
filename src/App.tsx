import React, { useState, useEffect } from 'react';
import './App.css';

import Fade from '@material-ui/core/Fade';

import Loading from './Loading';
import Main from './components/Main';
import Github from './components/GithubRepos';

import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: '0 10px'
});

function App() {
  const [loading, setLoading] = useState(true)
  const [main, setMain] = useState(<p>Hi</p>)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  function ChangeMain(choice: number) {
    switch(choice) {
      case 1 : 
        setMain(
          <Fade in={1 === choice} timeout={1000}>
            <p>
              Welcome
            </p>
          </Fade>
        )
        break;
      case 2 : 
        setMain(
          <Main />
        )
        break;
      case 3 : 
        setMain(
          <Github />
        )
        break;
    }
  }
  

  return (
    <>
      {loading === false ? (
        <header className="App-header">
          <Fade in={!loading} timeout={1000}>
            <div className="App">
              
                <h1>Csaba Darazs</h1>

                {/*<a href="../assets/Csaba Darazs CV.pdf" target="_blank">
                  View Resume
                </a>*/}

                <MyButton onClick={() => ChangeMain(1)}>Main</MyButton>
                <MyButton onClick={() => ChangeMain(2)}>Bio</MyButton>
                <MyButton onClick={() => ChangeMain(3)}>Github</MyButton>

                <br />
                <br />

                {main}
                  
            </div>
          </Fade>
        </header>
        ) : (
          <Loading />
        )}
    </>
  );
}

export default App;
