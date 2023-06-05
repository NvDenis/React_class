import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        let id = this.props.match.params.id;
        let res = await axios.get(`https://reqres.in/api/users/${id}`)
        console.log(res);
        this.setState({
            user: res && res.data && res.data.data ? res.data.data : {}
        })
    }
    handleOnclickBack = () => {
        this.props.history.push('/user')
    }
    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0
        return (
            <div className="detail-user">
                { !isEmptyObj &&
                    <>
                        <div> Name: {user.last_name} {user.first_name}</div>
                        <div> Email: {user.email} </div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                        <div><button onClick={() => this.handleOnclickBack()}>Back</button></div>

                    </>

                }
            </div>
        )
    }
}

export default withRouter(DetailUser);