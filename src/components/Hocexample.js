import React from 'react';
import Hoc from './Hoc';

class Hocexample extends React.Component {
    render() {
        return (
            <div>
                This is DashBorad Component...
            </div>
        )
    }
}

const WrappedComponent = Hoc(Hocexample);
export default WrappedComponent;