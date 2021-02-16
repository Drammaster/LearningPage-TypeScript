import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import './App.css';

function Loading() {
  
  return (
    <div className="App-loading-page">
      <CircularProgress className="App-loading" size={200} />
    </div>
  );
}

export default Loading;
