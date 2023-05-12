import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

//Add reducers here
// const feedback = (state = [], action) => {
//     if (action.type === 'SET_FEEDBACK') {
//         const feedback = action.payload;
//         return feedback;
//     }
//     return state;
// };

//create a feelings reducer here
const feelings = (state = [], action) => {
    if (action.type === 'SET_FEELINGS') {
        const feelings = action.payload;
        return feelings;
    }
    return state;
};

//create a understanding reducer here
const understanding = (state = [], action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        const understanding = action.payload;
        return understanding;
    }
    return state;
};

//create a support reducer here
const support = (state = [], action) => {
    if (action.type === 'SET_SUPPORT') {
        const support = action.payload;
        return support;
    }
    return state;
};

//create a comment reducer here
const comment = (state = '', action) => {
    if (action.type === 'SET_COMMENT') {
        const comment = action.payload;
        return comment;
    }
    return state;
};

// const updatedFeedback = (state = [], action) => {
//     if (action.type === 'SET_FEELINGS') {
//         console.log('state', [...state])
//         // let updatedFeedback = [...state];
//         // updatedFeedback.push(action.payload);
//         //shorter way

//         let updatedFeedback = [...state, action.payload];
//         return updatedFeedback;


//     }
//     else if (action.type === 'SET_UNDERSTANDING') {
//         console.log('state', [...state])
//         let updatedFeedback = [...state];
//         updatedFeedback.push(action.payload);
//         return updatedFeedback;
//     }
//     return state;
// }

//Add Store:
const feedbackStore = createStore(
    combineReducers({
        //reducers  
        //feedback,
        // updatedFeedback
        feelings,
        understanding,
        support,
        comment

    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={feedbackStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
