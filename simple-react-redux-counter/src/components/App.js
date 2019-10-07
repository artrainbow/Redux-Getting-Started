import React, {Component} from 'react';
import {connect} from 'react-redux';
import Counter from '../components/Counter';

class App extends Component {
    constructor(){
        super();
        console.log('constructor');
    }

    UNSAFE_componentWillMount(){
        console.log('componentWillMount, UNSAFE_componentWillMount');
    }

    /* start update */
    UNSAFE_componentWillReceiveProps(nextProps) { // invokes each time when props update
        console.log('componentWillReceiveProps, UNSAFE_componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return true; // if return false component won't be updated
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate, UNSAFE_componentWillUpdate', nextProps, nextState);
        return true;
    }

    /* end update */

    render() {
        const {
            store,
            onIncrement,
            onDecrement,
        } = this.props;

        console.log('render --------------------------------------------------------------');

        return (
            <Counter
                value={store}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
            />
        )
    }

    /* start update */

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState);
    }

    /* end update */

    componentDidMount(){ // You can use it for adding resources
        console.log('componentDidMount');
    }

    componentWillUnmount() { // Clear memory stack before unmounting component
        console.log('componentWillUnmount');
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