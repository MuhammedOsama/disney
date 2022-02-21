import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// components
import Login from './Layout/components/Login';
import Navbar from './Layout/components/Navbar';
import Home from './Layout/components/Home';
import Details from './Layout/components/Details';

export default function App() {
    return <div className="App">
        <Navbar/>
        <Router>
            <Switch>
                <Route exact path='/'><Login/></Route>
                <Route exact path='/home'><Home/></Route>
                <Route exact path='/details/:id'><Details/></Route>
            </Switch>
        </Router>
    </div>
}
