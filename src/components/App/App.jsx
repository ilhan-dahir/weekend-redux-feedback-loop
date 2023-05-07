import React from 'react';
import axios from 'axios';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const feedback = useSelector((store) => store.feedback);


  useEffect(() => {
    getFeeback();
  }, [])

  const getFeeback = () => {
    event.preventDefault()

    axios({
      method: 'GET',
      url: '/feedback'
    })
      .then(response => {
        const feedback = response.data
        dispatch({
          type: 'SET_FEEDBACK',
          payload: feedback
        })
      })
      .catch(err => {
        console.log('/app.js error', err);
      })
  }
  console.log('FEEDBACK', feedback);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
  );
}

export default App;
