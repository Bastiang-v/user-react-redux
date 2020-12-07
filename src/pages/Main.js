import React, {Component} from 'react';
import './Main.css';
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button, Container, Form, Input, InputGroupAddon, InputGroupText, InputGroup
} from 'reactstrap';
import UserList from './UserList';
import UserAdd from "./UserAdd";

export default class Main extends Component {
    render() {
        const {users} = this.props
        return (
            <Container fluid>
                <Card className="border-0" style={{backgroundColor: '#f5f5f5'}}>
                    <CardBody>
                        <CardTitle className="row col card-title h3">Clever Test</CardTitle>
                        <CardSubtitle className="card-title">
                            <Form className="form-row">
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
                                        <Input placeholder="Search user"/>
                                    </InputGroup>
                                </div>
                                <div className="col-2">
                                    <Button color="primary">Search</Button>
                                </div>
                                <div className="col-6 text-right">
                                    <UserAdd/>
                                </div>
                            </Form>
                        </CardSubtitle>
                        <br/>
                        <UserList users={users}/>
                    </CardBody>
                </Card>
            </Container>)
    }
}
