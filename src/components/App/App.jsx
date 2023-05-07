import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import ConfirmSubmit from '../ConfirmSubmit/ConfirmSubmit';
import Button from '@material-ui/core/Button';




function App() {
  const dispatch = useDispatch();
  const feedback = useSelector((store) => store.feedback);


  useEffect(() => {
    getFeeback();
  }, [])

  const getFeeback = () => {
    // event.preventDefault()

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
      <Router>
        <Button component={Link} to="/Feelings/">
          Start
        </Button>
        <Link to='/Feelings'></Link>
        <Route exact path="/Feelings">
          <Feelings />
        </Route>
        <Link to='/Understanding'></Link>
        <Route exact path="/Understanding">
          <h1>Understanding</h1>
          <Understanding />
        </Route>
        <Link to='/Support'></Link>
        <Route exact path="/Support">
          <h1>Support</h1>
          <Support />
        </Route>
        <Link to='/ConfirmSubmit'></Link>
        <Route exact path="/ConfirmSubmit">
          <h1>Confirm and Submit</h1>
          <ConfirmSubmit />
        </Route>

      </Router>
    </div>
  );
}

export default App;
