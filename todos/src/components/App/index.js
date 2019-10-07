import React, {Component} from 'react';
import AddTodo from '../../containers/AddTodo';
import RenderTodoList from '../../containers/RenderTodoList';


export default class App extends Component {
    render() {
        return (
            <>
                <AddTodo/>
                <RenderTodoList/>
            </>
        )
    }
}