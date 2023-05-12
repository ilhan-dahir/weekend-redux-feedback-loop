import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import { useState } from "react";




function Comments() {

    const dispatch = useDispatch();
    //const feelingsFeedback = useSelector((store) => store.updateFeedback)
    const [commentInput, setCommentInput] = useState('');


    const commentFeedback = () => {
        // console.log('coment!!!', commentInput)
        const comment = commentInput
        dispatch({
            type: 'SET_COMMENT',
            payload: comment
        })
    }

    return (
        <>
            <form>
                <label>Any comments?:
                    <input
                        placeholder="text"
                        type="text"
                        value={commentInput}
                        onChange={(event) => { setCommentInput(event.target.value) }}
                    />
                </label>
            </form>
            <Router>
                <Button onClick={() => commentFeedback()} component={Link} to="/Review/">
                    NEXT➡️
                </Button>
            </Router >
        </>
    )
}

export default Comments;