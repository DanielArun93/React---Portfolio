import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import Home from '../components/Home/Home';
import Portfolio from '../components/Portfolio/Portfolio';
import Contact from '../components/Contact/Contact';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import Header from '../components/Header/Header';
import Items from '../components/Items/Items';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/portfolio" component={Portfolio}></Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route component={PageNotFound}></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;