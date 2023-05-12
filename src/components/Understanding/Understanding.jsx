import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import { useState } from "react";

function Understanding() {

    const dispatch = useDispatch();
    //const feelingsFeedback = useSelector((store) => store.updateFeedback)
    const [understandingInput, setUnderstandingInput] = useState('');


    const understandingFeedback = () => {
        console.log('UNDERSTANDING INPUT', understandingInput)
        const understanding = Number(understandingInput)

        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understanding
        })
    }


    return (
        <>
            <form>
                <label>How well are you understanding the content?:
                    <input
                        placeholder="1-10"
                        type="number"
                        value={understandingInput}
                        onChange={(event) => { setUnderstandingInput(event.target.value) }} />
                </label>
            </form>
            <Router>
                <Button onClick={() => understandingFeedback()} component={Link} to="/Support/">
                    NEXT➡️
                </Button>
            </Router>
        </>
    )
}

export default Understanding;