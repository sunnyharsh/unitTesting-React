import React, { Component } from 'react'
import BuggyComponent from './BuggyComp';
import ErrorBoundary from './ErrorBoundary';

class MainComp extends Component {
    constructor(props) {
        super(props);
        this.state = { dynamicName: "" }
    }
    handleChange(e) {
        console.log(e)
        this.setState({
            dynamicName: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" placeholder='Enter your name' onChange={this.handleChange.bind(this)} />
                <ErrorBoundary>
                    <BuggyComponent name={"asdasd"} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <BuggyComponent name={"asdadas"} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <BuggyComponent name={this.state.dynamicName} />
                </ErrorBoundary>
            </div >
        );
    }
}

export default MainComp;