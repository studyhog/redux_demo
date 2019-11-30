import React from 'react'
import PropTypes from 'prop-types'

const User = ({username}) => (
    <li>{username}</li>
);

User.propTypes = {
    username: PropTypes.string.isRequired,
};

export default User;