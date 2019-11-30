/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const FETCH_USER = 'FETCH_USER';

/*
 * other constants
 */
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};

// actions are payloads that send data from application to a store describing what to do.
// actions are the ONLY source of information to the store.
// you send them to the store using store.dispatch.


// action creators are functions that create actions. Action creators simply return an action
export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        index
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}

export function fetchUser(username) {
    return {
        type: FETCH_USER,
        username
    }
}

//You can dispatch them like so: dispatch(addTodo(text)) or dispatch(fetchUser(username))