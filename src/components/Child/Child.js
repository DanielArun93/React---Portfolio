import React from 'react';
import './Child.css';


class Child extends React.Component {
    constructor(props) {
        super(props);

        console.log('constructor from child');
    }

    componentWillMount() {
        console.log("componentWillMount from child")
    }

    componentDidMount() {
        console.log("componentDidMount from child")
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps from child", nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate from child", nextProps, nextState);
        return true;
    }

    componentWillUpdate() {
        console.log("componentWillUpdate from child")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate from child")
    }
    render() {

        console.log("render from child")
        return (
            <div className="child">
                <h1>Child Component</h1>
                <h3>Message:{this.props.message}</h3>
                <button onClick={() => {
                    this.props.click(5);
                }}>ChildMessage</button>
            </div>
        )
    }

}


export default Child;

