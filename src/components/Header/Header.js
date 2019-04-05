import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';


class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>PortFolio</h1>
               <NavLink to="/" activeClassName="is-active" exact>Home</NavLink>
               <NavLink to="/portfolio" activeClassName="is-active" exact>Portfolio</NavLink>
               <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
            </div>
        )
    }
}

export default Header;