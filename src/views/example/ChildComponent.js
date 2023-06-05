import React from "react";
import './demo.scss'
class ChildComponent extends React.Component {
    state = {
        showJobs: false,
    }
    handleDelete = (job) => {
        this.props.deleteJob(job)
    }
    render() {
        let { Jobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {showJobs ? 
                    <div>
                        <button 
                            className="btn-show"
                            onClick={() => this.setState({showJobs: !this.state.showJobs})}
                        >
                            Show
                        </button>
                    </div> 
                    :
                    <>
                        <div className="jobs">
                            {

                                Jobs.map((job, index) => {
                                    return (
                                        <p key={index}>{job.title} - {job.salary}$ <></> <span onClick={()=> this.handleDelete(job)}>x</span></p>
                                    )
                                }
                                )
                            }
                        </div>
                        <div><button onClick={() => this.setState({showJobs: !this.state.showJobs})}>Hide</button></div>

                    </>
                }


            </>

        )
    }
}

export default ChildComponent