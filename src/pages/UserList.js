import React from 'react';
import {Card, CardBody, CardHeader, CardText, Col, Row} from 'reactstrap';
import { useSelector } from 'react-redux'
const UserList = (props) => {
    const {selectUser} = props
    const users = useSelector(state => state.search?state.data.filter(user=> user.name?.toLocaleUpperCase().match(state.search.toLocaleUpperCase())):state.data)
   const userSelected = useSelector(state => state.selected?state.data.find(user=> user.id===state.selected):null)
    const handleClick = id => {
        selectUser(id)
    }
    return (<Row>
        <Col>
            <Card>
                <CardHeader className="text-left text-muted">User names</CardHeader>
                {users.map((user,index) => ( user.name && <CardText onClick={() => handleClick(user.id)} key={index}>{user.name} {user.lastname && user.lastname}</CardText>))}
                <CardBody>
                </CardBody>
            </Card>
        </Col>
        <Col>
            <Card>
                <CardHeader className="text-left text-muted">Users info</CardHeader>
                {userSelected != null && <CardText
                    key={userSelected.id}> Email : {userSelected.email}
                    <br/>
                    LastName : {userSelected.lastname}
                    <br/>
                    Name : {userSelected.name}
                    <br/>
                    Id : {userSelected.id}
                </CardText>}
                <CardBody>
                </CardBody>
            </Card>
        </Col>
    </Row>)
};

export default UserList;
