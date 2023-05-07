import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

//Add reducers here
const feedback = (state = [], action) => {
    if (action.type === 'SET_FEEDBACK') {
        const feedback = action.payload;
        return feedback;
    }
    return state;
};

//Add Store:
const feedbackStore = createStore(
    combineReducers({
        //reducers  
        feedback

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
