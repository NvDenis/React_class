import React from "react";

class AddComponent extends React.Component {
    state = {
        title : '',
        salary: '',
    }


    handleSubmit = (e) => {
        e.preventDefault();
        if( !this.state.title || !this.state.salary ) {
            alert('missing required params')
            return;
        }
        this.props.addJob({
            id: Math.floor(Math.random() *100),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form>
                    <label>Job's title</label> <br />
                    <input
                        value={this.state.title}
                        onChange={(e) => this.setState({
                            title: e.target.value
                        })}
                    /><br />
                    <label>salary</label><br />
                    <input
                        value={this.state.salary}
                        onChange={(e) => this.setState({
                            salary: e.target.value
                        })}
                    /><br />
                    <input
                        type='submit' value='Submit'
                        onClick={e => this.handleSubmit(e)}
                    />
                </form>
        )
    }
}

export default AddComponent