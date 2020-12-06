import React, {useState} from 'react';
import {
    Card, CardBody,
    Row, Col, CardHeader, CardText
} from 'reactstrap';

const UserList = (props) => {
    const {users} = props
    const [userSelected, setUserSelected] = useState(null);
    return (<Row>
        <Col>
            <Card>
                <CardHeader className="text-left text-muted">User names</CardHeader>
                {users.map((user, index) => (
                    <CardText onClick={() => setUserSelected(index)}
                              key={user.id}>{user.name + ' ' + user.lastname}</CardText>))}
                <CardBody>
                </CardBody>
            </Card>
        </Col>
        <Col>
            <Card>
                <CardHeader className="text-left text-muted">Users info</CardHeader>
                {userSelected != null && <CardText
                    key={users[userSelected].id}> Email : {users[userSelected].email}
                    <br/>
                    LastName : {users[userSelected].lastname}
                    <br/>
                    Name : {users[userSelected].name}
                    <br/>
                    Id : {users[userSelected].id}
                </CardText>}
                <CardBody>
                </CardBody>
            </Card>
        </Col>
    </Row>)
};

export default UserList;
