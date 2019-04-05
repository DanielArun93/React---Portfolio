import React from 'react';
import userdata from './userdata';

class Todo extends React.Component {

    render() {

        return (
            <div>
                <h1>User List Details</h1>
                <table>
                    <thead>
                      
                            <td>
                                UserName
                            </td>
                            <td>
                                Age
                            </td>
                            <td>
                                Address
                            </td>
                       
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        )
    }
}


export default Todo; 