import React from "react";
import {  toast } from 'react-toastify';


class AddTodo extends React.Component {
    state = {
        title: '',

    }
    handleOnchangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleOnclick = () => {
        if(!this.state.title) {
            toast.error('Missing title')
            return;
        }
        let todo = {
            id: Math.floor(Math.random()  * 1000),
            title: this.state.title
        }
        this.props.addTodo(todo);
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state

        return (
            <div className="add-todo">
                <input
                    type={"text"}
                    value={title}
                    onChange={(e) => this.handleOnchangeTitle(e)}
                />
                <button className="add"
                    onClick={e => this.handleOnclick(e)}
                >
                    Add
                </button>
            </div>
        )
    }
}

export default AddTodo