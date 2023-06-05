import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';


class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making videos' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
        editTodo: {}
    }

    addTodo = (todo) => {

        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
        toast.success('add succeed')
    }

    handleDelete = (todo) => {
        this.setState({
            listTodo: this.state.listTodo.filter((item) => item.id !== todo.id)
        })
        toast.success('Delete succeed!')
    }

    handleEdit = (todo) => {
        let { listTodo, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;
        if (!isEmptyObj && editTodo.id === todo.id) {
            let listTodoCoppy = { ...this.state.listTodo }
            let indexTodo = listTodo.findIndex(item => todo.id === item.id)
            listTodoCoppy[indexTodo].title = editTodo.title
            this.setState({
                editTodo: {}
            })
            toast.success('Update succeed!')

            return;
        }
        this.setState({
            editTodo: todo,

        })
    }

    handleOnchangTitle = (e) => {
        let curTodo = { ...this.state.editTodo };
        curTodo.title = e.target.value
        this.setState({
            editTodo: curTodo
        })
    }

    render() {
        let { listTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <>
                <p>hello world width React</p>
                <div className="list-todo-container">
                    <AddTodo
                        addTodo={this.addTodo}
                    />
                    <div className="list-todo-content">
                        {listTodo && listTodo.length > 0 &&
                            listTodo.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {/* <span> {index + 1} - {item.title} </span> */}
                                        {isEmptyObj ?
                                            <span> {index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {item.id === editTodo.id ?
                                                    <span> {index + 1} -
                                                        <input
                                                            value={editTodo.title}
                                                            onChange={(e) => this.handleOnchangTitle(e)}
                                                        />
                                                    </span>
                                                    :
                                                    <span> {index + 1} - {item.title} </span>

                                                }

                                            </>

                                        }
                                        <button
                                            className="edit"
                                            onClick={() => this.handleEdit(item)}
                                        >
                                            {!isEmptyObj && item.id === editTodo.id ?
                                                'Save'
                                                :
                                                'Edit'
                                            }
                                        </button>
                                        <button className="delete" onClick={() => this.handleDelete(item)}>Delete</button>
                                    </div>
                                )
                            })

                        }

                    </div>
                </div>
            </>

        )
    }
}

export default ListTodo