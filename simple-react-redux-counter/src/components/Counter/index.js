import React, {Component} from 'react';

export default class Counter extends Component {
    render() {
        const {
            value,
            onDecrement,
            onIncrement,
        } = this.props;

        return (
            <>
                <button onClick={onDecrement}>-</button>
                <span>{value}</span>
                <button onClick={onIncrement}>+</button>
            </>
        )
    }
}