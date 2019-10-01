// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';

// Reducers
import counter from './reducers/counter';

// Components
import App from './components/App';

const store = createStore(counter);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'),
);

