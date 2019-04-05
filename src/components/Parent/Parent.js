import React from 'react';
import Child from '../Child/Child';
import './Parent.css';
import PropTypes from 'prop-types';

class Parent extends React.Component {
    constructor(props) {
        super(props);

        console.log('constructor');

        this.state = {
            message: "From Parent to Child"
        }
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentWillReceiveProps(nextProps){
         console.log("componentWillReceiveProps",nextProps)
    }

     shouldComponentUpdate(nextProps, nextState) {
         console.log("shouldComponentUpdate",nextProps,nextState);
         return true;
     }
     
     componentWillUpdate(){
           console.log("componentWillUpdate")
     }

     componentDidUpdate(){
         console.log("componentDidUpdate")
     }

    childClick = (message) => {
       
        this.setState(() => ({message}));
    }

    render() {
        console.log('render')
        return (
            <div className="parent">
                <h1>Parent Component</h1>
                <Child message={this.state.message} click={this.childClick} />
            </div>
        )
    }
}

Parent.propTypes = {
    message: PropTypes.string
};

export default Parent;