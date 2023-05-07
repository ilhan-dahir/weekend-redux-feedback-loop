import React from "react";
import './Feelings.css'
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

function Feelings() {
    return (
        <>
            <form>
                <label>How are you feeling?:
                    <input type="number" />
                </label>
            </form>
            <Router>
                <Button component={Link} to="/Understanding/">
                    NEXT➡️
                </Button>
            </Router>
        </>
    )
}

export default Feelings;