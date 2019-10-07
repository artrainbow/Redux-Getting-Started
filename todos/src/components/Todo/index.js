import React, {Component} from 'react';

export default class Todo extends Component {
    render(){
        const {
            name
        } = this.props;

        return (
            <li>{name}</li>
        )
    }
}