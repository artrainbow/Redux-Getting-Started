import React, {Component} from 'react';
import Todo from '../Todo';

export default class TodoList extends Component {
    render() {
        const {store} = this.props;

        return (
            <ul>
                {store.todos.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}/>,
                )}
            </ul>
        )
    }
}