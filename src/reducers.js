// Designing state shape is important
// For todo we want to store current visibility filter and actual list of todos
// In our app we might want to store rooms - users, users - attributes
// You'll often find that you need to store some data, as well as UI state, try to keep data separate from UI state.

// In a more complex app you're going to want different entities to reference each other.
// Kee your state as normalized as possible, don't nest.
// Keep every entity with an ID as a key and use IDs to reference it from other entities or lists.
// Think of app's state is your database
// itemsById: {id -> item} and items:array<id> is a better idea in a real app (but this example is simple).

// State example:
// {
//     visibilityFilter: 'SHOW_ALL',
//     todos: [
//         {text: 'Consider redux',
//          completed: true},
//         {text: 'Keep all state in a single tree',
//          completed: false}
//     ]
//     users: [
//         {username: 'me',
//          color: 'blue'},
//         {username: 'her',
//          color: 'red'}
//     ]
// }

// reducers - pure function, takes previous state and an action, and returns the next state.
// Reducers are pure - never mutate their arguments, call fns with side effects (API calls, routes, fetch, call non-pure functions)

import {combineReducers} from "redux";
import {ADD_TODO, TOGGLE_TODO, FETCH_USER, SET_VISIBILITY_FILTER, VisibilityFilters} from "./actions";

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: [],
    users: [],
};

const { SHOW_ALL } = VisibilityFilters;

// function todoApp(state = initialState, action) {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//             // Create a brand new object, and assign the state to it
//             // third argument is overriding values in state (second argument)
//             return Object.assign({}, state, {
//                 visibilityFilter: action.filter
//             });
//         // Split this out into a separate function todos below
//         // case ADD_TODO:
//         //     return Object.assign({}, state, {
//         //         todos: [
//         //             ...state.todos, //unpack existing todos
//         //             {text: action.text, completed: false} //added item
//         //         ]
//         //     });
//         // case TOGGLE_TODO:
//         //     return Object.assign({}, state, {
//         //         todos: state.todos.map((todo, index) => {
//         //             if (index === action.index) {
//         //                 // create a new todo by finding an existing one and assigning to an empty object with override
//         //                 return Object.assign({}, todo, {completed: !todo.completed})
//         //             }
//         //             return todo;
//         //         })
//         //     });
//         case ADD_TODO:
//             return Object.assign({}, state, {todos: todos(state.todos, action)});
//         case TOGGLE_TODO:
//             return Object.assign({}, state, {todos: todos(state.todos), action});
//         case FETCH_USER:
//             return Object.assign({}, state, {users: users(state.users), action});
//         default:
//             return state
//     }
// }

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, {text: action.text, completed: false}
            ];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                // create a new todo for the item to be edited
                if (index === action.index) {
                    return Object.assign({}, todo, {completed: !todo.completed})
                }
                return todo;
            });
        default:
            return state;
    }
}

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function users(state = [], action) {
    switch (action.type) {
        case FETCH_USER:
            return [...state, {username: action.username}];
        default:
            return state
    }
}

// todoApp with combined reducers (each reducer is responsible for its own state)
// function todoApp(state = {}, action) {
//     // construct a new state, where keys are state keys, and values are what reducers returned
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action),
//         users: users(state.users, action),
//     }
// }

// let redux combine reducers
const todoApp = combineReducers({visibilityFilter, todos, users});

export default todoApp;