// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


//Store:
//   holds app state
//   allows access via getState();
//   allows state updates via dispatch(action);
//   registers listeners via subscribe(listener);
//   handles unregistering of listeners via the function returned by subscribe(listener);

// You have only a single store in a Redux application. Split data handling using reducer composition (see reducers.js)
// You may optionally specify the initial state as second argument to createStore() (this may come in handy later)
// const store = createStore(todoApp, window.STATE_FROM_SERVER);
// import { createStore } from 'redux'
// import todoApp from './reducers'
//
//
// // testing
// import {addTodo, fetchUser, toggleTodo, setVisibilityFilter, VisibilityFilters} from "./actions";
//
// const store = createStore(todoApp );
//
// // Log initial state
// console.log(store.getState());
//
// // Every time the state changes, log it
// // subscribe() returns a function to unregister the listener
// const unsubscribe = store.subscribe(() => console.log('store updated', store.getState()));
//
// // Dispatch some actions
// store.dispatch(addTodo('Learn about actions'));
// store.dispatch(addTodo('Learn about reducers'));
// store.dispatch(fetchUser('poop'));
// store.dispatch(toggleTodo(0));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
// store.dispatch(fetchUser('test1'));
// unsubscribe();
// store.dispatch(fetchUser('test')); // not logged as we're unsubscribed

// Passing the store to our app
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from "redux";
import todoApp from "./reducers";
import App from "./App";

const store = createStore(todoApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);