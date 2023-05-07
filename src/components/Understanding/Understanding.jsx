import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

function Understanding() {
    return (
        <>
            <form>
                <label>How well are you understanding the content?:
                    <input type="number" />
                </label>
            </form>
            <Router>
                <Button component={Link} to="/Support/">
                    NEXT➡️
                </Button>
            </Router>
        </>
    )
}

export default Understanding;