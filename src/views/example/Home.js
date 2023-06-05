import React from "react";
// import { withRouter } from 'react-router';
import { connect } from "react-redux";

class Home extends React.Component {

    handleDeleteUser = (user) => {
        // console.log(user);
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.createUserRedux();

    }

    render() {
        let listUser = this.props.dataRedux;

        return (

            <>
                <h1>hello world width home</h1>
                <div>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div key={item.id}> {index + 1} - {item.name} <span onClick={() => this.handleDeleteUser(item)}>x</span> </div>
                            )
                        })

                    }
                    <button onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        createUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home) 