import React from 'react';
class BuggyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.name === "rohan") {
            throw new Error('rohan not a part of our team anymore');
        } else {


            return (
                <div>
                    <h1>{this.props.name}</h1>
                </div>
            );
        }
    }
}
export default BuggyComponent;