import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

// import global style
// import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'normalize.css';
import './Layout/components/Main.scss';

ReactDOM.render(<App/>, document.getElementById('root'));

reportWebVitals();
