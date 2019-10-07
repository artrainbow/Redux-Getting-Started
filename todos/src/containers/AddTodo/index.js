import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddTodo extends Component {
    render() {
        const {
            addTodo,
        } = this.props;

        const handler = e => {
            e.preventDefault();

            if (!this.input.value.trim()) {
                return null;
            }

            addTodo(this.input.value.toString());
            this.input.value = '';
        };

        return (
            <>
                <form onSubmit={handler}>
                    <input ref={input => this.input = input} type="text"/>
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </>
        )
    }
}

export default connect(
    () => ({}),
    (dispatch) => ({
        addTodo: (name) => {
            dispatch({
                type: 'ADD_TODO',
                name: name,
                id: Date.now(),
            })
        },
    }),
)(AddTodo);


