import React from "react";
import ChildComponent from "./ChildComponent"
import AddComponent from "./AddComponent"

class MyComponent extends React.Component {

    state = {
        Jobs: [
            {
                id: 1,
                title: 'developer',
                salary: '500'
            },
            {
                id: 2,
                title: 'testers',
                salary: '400'
            },
            {
                id: 3,
                title: 'project',
                salary: '400'
            }
        ]

    }

    addJob = (job) => {
        this.setState({
            Jobs: [...this.state.Jobs, job]
        })
    }

    deleteJob = (job) => {
        this.setState ({
            Jobs: this.state.Jobs.filter(item => item.id !== job.id)
        })
    }

    render() {
        return (
            <>
                <AddComponent
                    addJob = {this.addJob}
                />
                
                <ChildComponent 
                    Jobs={this.state.Jobs}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent