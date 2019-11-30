// Time to connect presentational components to redux by creating some containers.
// Generate the container component with react redux library's `connect()`
// https://redux.js.org/basics/usage-with-react
// https://redux.js.org/recipes/computing-derived-data
// To use `connect()` define a special `mapStateToProps` that describes
//   how to transform the current Redux store state into the props we need to pass to presentational component we are wrapping.

import {connect} from 'react-redux';
import {toggleTodo} from "../actions";
import TodoList from '../components/TodoList';
import {VisibilityFilters} from "../actions";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t=>!t.completed);
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t=>t.completed);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

// VisibleTodoList's mapStateToProps
const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

// Container components can also dispatch actions (to tell redux to update the state)
const mapDispatchToProps = dispatch => ({
    toggleTodo: id => {dispatch(toggleTodo(id))}
});

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);

export default VisibleTodoList