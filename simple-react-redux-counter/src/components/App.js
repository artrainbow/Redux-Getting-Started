import React, {Component} from 'react';
import {connect} from 'react-redux';
import Counter from '../components/Counter';

class App extends Component {
    render() {
        const {
            store,
            onIncrement,
            onDecrement,
        } = this.props;

        console.log('props', this.props, store);

        return (
            <Counter
                value={store}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
            />
        )
    }
}

export default connect(
    (state) => ({
        store: state,
    }),
    (dispatch) => ({
        onIncrement: () => {
            dispatch({
                type: 'INCREMENT',
            });
        },
        onDecrement: () => {
            dispatch({
                type: 'DECREMENT',
            });
        },
    }),
)(App);