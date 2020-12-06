import React from 'react';
import {
    Card, CardBody,
    Row, Col, CardHeader
} from 'reactstrap';

const UserList = () => {
    return (<Row>
        <Col>
            <Card>
                <CardHeader className="text-left text-muted">User names</CardHeader>
                <CardBody>
                </CardBody>
            </Card>
        </Col>
        <Col>
            <Card>
                <CardHeader className="text-left text-muted">Users info</CardHeader>
                <CardBody>
                </CardBody>
            </Card>
        </Col>
    </Row>)
};

export default UserList;
