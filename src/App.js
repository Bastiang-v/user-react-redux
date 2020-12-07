import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import Main from './pages/Main';
import {addUser,selectUser} from "./reducers";

function App(props) {
    const {users,addUser,selectUser,selected} = props
    return (
        <div className="App">
            <Main
                users={users}
                addUser={addUser}
                selectUser={selectUser}
                selectedUser={selected}
            />
        </div>
    );
}

const mapStateToProps = state => {
    const {data:users,selected} = state;
    return {users,selected}
}
const mapDispatchToProps = dispatch => ({
    addUser:payload => dispatch(addUser(payload)),
    selectUser: payload => dispatch(selectUser(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
