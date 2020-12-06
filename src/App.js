import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import Main from './pages/Main';

function App(props) {
    const {users} = props
    return (
        <div className="App">
            <Main users={users}/>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return state
}
const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(App);
