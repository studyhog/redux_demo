import React from 'react';
import { connect } from 'react-redux';
import { fetchUser} from "../actions";


let AddUser = ({dispatch}) => {
    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(fetchUser(input.value));
                    input.value = ''
                }}
            >
                <input
                    // Please familiarize yourself with Refs and the DOM
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit">Add User</button>
            </form>
        </div>
    )
};

AddUser = connect()(AddUser);

export default AddUser;