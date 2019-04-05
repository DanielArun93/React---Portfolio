import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../../actions/counter';

class Counter extends React.Component {
    handleIncrement = () => {
        this.props.dispatch(increment());
    }

    handleDecrement = () => {
        this.props.dispatch(decrement());
    }

    handleReset = () => {
        this.props.dispatch(reset());
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Counter:{this.props.counter.count}</h1>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        counter: state.counter
    }
}


export default connect(mapStateToProps)(Counter);
