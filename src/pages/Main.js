import React, {Component} from 'react';
import './Main.css';
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button, Container, Form, Input, InputGroupAddon, InputGroupText, InputGroup
} from 'reactstrap';
import UserList from './UserList';

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
                                    <Button color="primary" className="text-right">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16"
                                             className="bi bi-file-person-fill mb-1"
                                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z"/>
                                        </svg>
                                        Add user
                                    </Button>
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
