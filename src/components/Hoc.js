import React from 'react';

const Hoc = (WrappedComponent) => {
    class Changedcomponent extends React.Component {
        state = {
            isAuthenticated: true,
            username: 'ArunKumar'
        }
        render() {
            console.log(this.props);
            return (
                <div>
                    <WrappedComponent message="Associate" />
                    {(this.state.isAuthenticated && this.state.username) ? <h3>You are authorised..Welcome {this.state.username}</h3> : <h3>You are not authorised...</h3>}
                </div>
            )
        }
    }
    return Changedcomponent;
}



export default Hoc;