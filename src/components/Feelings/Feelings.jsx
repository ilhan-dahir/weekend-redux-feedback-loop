import React from "react";
import './Feelings.css'
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import { useState } from "react";




function Feelings() {

    const dispatch = useDispatch();
    //const feelingsFeedback = useSelector((store) => store.updateFeedback)
    const [feelingsInput, setFeelingsInput] = useState('');


    const feelingsFeedback = () => {
        console.log('FEELINGS INPUT', feelingsInput)
        const feeling = Number(feelingsInput)

        dispatch({
            type: 'SET_FEELINGS',
            payload: feeling
        })
    }

    return (
        <>
            <form>
                <label>How are you feeling today?:
                    <input
                        placeholder="1-10"
                        type="number"
                        value={feelingsInput}
                        onChange={(event) => { setFeelingsInput(event.target.value) }}
                    />
                </label>
            </form>
            <Router>
                <Button onClick={() => feelingsFeedback()} component={Link} to="/Understanding/">
                    NEXT➡️
                </Button>
            </Router >
        </>
    )
}

export default Feelings;