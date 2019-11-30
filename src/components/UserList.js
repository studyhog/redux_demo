import {connect} from 'react-redux';
import React from 'react'
import PropTypes from 'prop-types'
import User from './User'

const UserList = ({ users }) => (
    <ul>
        {users.map(user => (
            <User key={user.username} {...user} onClick={()=>console.log('User', user.id)} />
        ))}
    </ul>
);

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

const mapStateToProps = state => ({
    users: state.users
});

const mapDispatchToProps = dispatch => ({
    // toggleTodo: id => {dispatch(toggleTodo(id))}
});

const UserListView = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserList);

export default UserListView;