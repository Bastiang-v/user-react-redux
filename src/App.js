import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import Main from './pages/Main';
import { selectUser, searchUser, fetchGetUsers, fetchAddUser} from "./reducers";
class App extends Component {
    componentDidMount(){this.props.fetchGetUsers();}
    render() {
    const {fetchAddUser,selectUser,searchUser} = this.props
    return (
        <div className="App">
            <Main
                addUser={fetchAddUser}
                selectUser={selectUser}
                searchUser={searchUser}
            />
        </div>
    );
}
}
const mapStateToProps = state => {
    const {fetchGetUsers} = state;
    return {fetchGetUsers}
}
const mapDispatchToProps = dispatch => ({
    selectUser: payload => dispatch(selectUser(payload)),
    searchUser : payload => dispatch(searchUser(payload)),
    fetchGetUsers: payload => dispatch(fetchGetUsers(payload)),
    fetchAddUser: payload => dispatch(fetchAddUser(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
