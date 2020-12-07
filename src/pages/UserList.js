import React  from 'react';
import {
    Card, CardBody,
    Row, Col, CardHeader, CardText
} from 'reactstrap';

const UserList = (props) => {
    const {users,selectUser, selectedUser} = props
    const handleClick = id => {
        selectUser(id)
    }
    return (<Row>
        <Col>
            <Card>
                <CardHeader className="text-left text-muted">User names</CardHeader>
                {users.map((user,index) => (
                    <CardText onClick={() => handleClick(index)}
                              key={user.id}>{user.name + ' ' + user.lastname}</CardText>))}
                <CardBody>
                </CardBody>
            </Card>
        </Col>
        <Col>
            <Card>
                <CardHeader className="text-left text-muted">Users info</CardHeader>
                {selectedUser != null && <CardText
                    key={users[selectedUser].id}> Email : {users[selectedUser].email}
                    <br/>
                    LastName : {users[selectedUser].lastname}
                    <br/>
                    Name : {users[selectedUser].name}
                    <br/>
                    Id : {users[selectedUser].id}
                </CardText>}
                <CardBody>
                </CardBody>
            </Card>
        </Col>
    </Row>)
};

export default UserList;
