import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

// global style
import '@fortawesome/fontawesome-free/css/all.css';
import 'normalize.css';
import './Layout/Main.scss';

// redux
import {Provider} from 'react-redux';
import store from './Layout/redux/store';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
