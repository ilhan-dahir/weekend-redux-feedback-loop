import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import { useState } from "react";

function Support() {

    const dispatch = useDispatch();
    const [supportInput, setSupportInput] = useState('');


    const supportFeedback = () => {
        console.log('SUPPORT INPUT', supportInput)
        const support = Number(supportInput)

        dispatch({
            type: 'SET_SUPPORT',
            payload: support
        })
    }

    return (
        <>
            <form>
                <label>How well are you being supported?:
                    <input
                        placeholder="1-10"
                        type="number"
                        value={supportInput}
                        onChange={(event) => { setSupportInput(event.target.value) }} />
                </label>
            </form>
            <Router>
                <Button onClick={() => supportFeedback()} component={Link} to="/Comment/">
                    NEXT➡️
                </Button>
            </Router>
        </>
    )
}

export default Support;