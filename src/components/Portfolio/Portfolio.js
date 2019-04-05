import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import Items from '../Items/Items';

const Portfolio = ({match}) => {
    console.log(match);
    return (
       
            <div>
                <p>Check my Portfolio..What I've done...</p>
                <ul>
                    <li><Link to={`${match.url}/1`}>Item One</Link></li>
                    <li> <Link to={`${match.url}/2`}>Item Two</Link></li>
                </ul>


                <Route path={`${match.url}/:id`} component={Items}></Route>
                <Route
                    exact
                    path={match.path}
                    render={() => <h3>Please select a topic.</h3>}
                />

            </div>
        
    )
}

// const Items = (props) => {
//     console.log(props, "props")
//     return (
//         <div>
//             <p>This is Item One -- {props.match.params.id}</p>
//         </div>
//     )
// }

export default Portfolio;