import React, {Component} from 'react';
import './Main.css';
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button, Container, Form, Input, InputGroupAddon, InputGroupText, InputGroup
} from 'reactstrap';
import UserList from './UserList';
import UserAdd from "./UserAdd";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput:''
        }
        this.updateInput = this.updateInput.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }
    updateInput = evt => {
        this.setState({
            searchInput: evt.target.value
        });
    }
    onSearch =(e) => {
        e.preventDefault()
        const {searchUser,selectUser} = this.props
        selectUser(null)
        searchUser(this.state.searchInput)
    }
    render() {
        const {users,addUser,selectUser,selectedUser} = this.props
        return (
            <Container fluid>
                <Card className="border-0 card-background">
                    <CardBody>
                        <CardTitle className="row col card-title h3">Clever Test</CardTitle>
                        <CardSubtitle className="card-title">
                            <Form className="form-row" onSubmit={this.onSearch}>
                                <div className="col-4">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <svg width="1em" height="1em" viewBox="0 0 16 16"
                                                     className="bi bi-search"
                                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd"
                                                          d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                                    <path fillRule="evenodd"
                                                          d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                                                </svg>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input onChange={this.updateInput} placeholder="Search user"/>
                                    </InputGroup>
                                </div>
                                <div className="col-2">
                                    <Button onClick={this.onSearch} color="primary">Search</Button>
                                </div>
                                <div className="col-6 text-right">
                                    <UserAdd onSubmit={addUser}/>
                                </div>
                            </Form>
                        </CardSubtitle>
                        <br/>
                        <UserList users={users} selectUser={selectUser} selectedUser={selectedUser} />
                    </CardBody>
                </Card>
            </Container>)
    }
}
export default Main
