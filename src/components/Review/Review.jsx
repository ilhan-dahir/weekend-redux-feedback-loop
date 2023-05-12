import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useSelector } from "react-redux";


function Review() {

    const feelings = useSelector((store) => store.feelings);
    const understanding = useSelector((store) => store.understanding);
    const support = useSelector((store) => store.support);
    const comment = useSelector((store) => store.comment);

    return (
        <>
            <p>Feedback Results</p>
            <p>Feelings: {feelings}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comment: {comment}</p>
            <Router>
                <Button component={Link} to="/Feeling/">
                    Edit
                </Button>
                <Button component={Link} to="/Submit/">
                    Continue
                </Button>
            </Router >
        </>
    )
}

export default Review;