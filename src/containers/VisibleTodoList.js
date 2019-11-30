// Time to connect presentational components to redux by creating some containers.
// Generate the container component with react redux library's `connect()`
// https://redux.js.org/basics/usage-with-react
// https://redux.js.org/recipes/computing-derived-data
// To use `connect()` define a special `mapStateToProps` that describes
//   how to transform the current Redux store state into the props we need to pass to presentational component we are wrapping.

import {toggleTodo} from "../actions";
import TodoList from '../components/TodoList';
import {connect} from 'react-redux';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t=>t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t=>!t.completed);
        case 'SHOW_ALL':
        default:
            return todos;
    }
};

// VisibleTodoList's mapStateToProps
const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

// Container components can also dispatch actions (to tell redux to update the state)
const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);

export default VisibleTodoList