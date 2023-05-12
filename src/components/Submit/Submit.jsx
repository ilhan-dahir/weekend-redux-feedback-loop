import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useSelector } from "react-redux";


function Submit() {
    return (
        <>
            <Router>
                <Button component={Link} to="/Feeling/">
                    Sumbit
                </Button>
                <Button component={Link} to="/">
                    Take a new survey
                </Button>
            </Router >
        </>
    )
}

export default Submit;