import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

function Support() {
    return (
        <>
            <form>
                <label>How well are you being supported?:
                    <input type="number" />
                </label>
            </form>
            <Router>
                <Button component={Link} to="/ConfirmSubmit/">
                    NEXT➡️
                </Button>
            </Router>
        </>
    )
}

export default Support;