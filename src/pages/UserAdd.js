import React, {useState} from 'react';
import {
    Button, Modal,
    ModalHeader, ModalBody, ModalFooter, FormGroup, Form, Label, Input
} from 'reactstrap';

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'User name es obligatorio'
    }
    return errors
}
const UserAdd = (props) => {
    const toggle = () => setModal(!modal);
    const [modal, setModal] = useState(false);
    const [formUser, setFormUser] = useState({
        errors: {},
        name: null,
        lastName: null,
        email: null,
    });
    const handleChange = ({target}) => {
        setFormUser({...formUser, [target.name]: target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        const {errors, ...sinErrors} = formUser;
        const result = validate(sinErrors);
        setFormUser({errors: result})
        if (!Object.keys(result).length) {
            //envio del formulario no hay errores
            // axios.post('http://localhost:8080/entity', sinErrors).then((item) => {
            //     alert(sinErrors.id ? 'Item ' + sinErrors.id + 'Editado con exito' : 'Item Agregado con exito')
            //     this.handleChangeRoute('Lista')
            // })
            console.log(sinErrors)
            e.target.reset();
            toggle();
        }
    }
    const {errors, name, lastName, email} = formUser;
    return (<div>
            <Button onClick={toggle} color="primary" className="text-right">
                <svg width="1em" height="1em" viewBox="0 0 16 16"
                     className="bi bi-file-person-fill mb-1"
                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z"/>
                </svg>
                Add user
            </Button>
            <Modal isOpen={modal} toggle={toggle} centered>
                <ModalHeader toggle={toggle}>Add User</ModalHeader>
                <Form onSubmit={handleSubmit}>
                    <ModalBody>
                        <FormGroup>
                            <Label for="userName">User name (*)</Label>
                            <Input type="text" defaultValue={name} name="name"
                                   onChange={handleChange} id="userName" placeholder="User name"/>
                            {errors.name && <p className="text-danger">{errors.name}</p>}
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Last name</Label>
                            <Input type="text" defaultValue={lastName} name="lastName"
                                   onChange={handleChange} id="lastName" placeholder="Last name"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" defaultValue={email} name="email"
                                   onChange={handleChange} id="email" placeholder="Email"/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" color="primary">Save user</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </div>
    )
};

export default UserAdd;
