import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class addProducts extends Component {
    render() {
        return(
            <Form action="http://localhost:8080/products/create" method="POST" enctype="multipart/form-data">
                <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input type="text" name="name" id="exampleEmail" placeholder="Add name of product" />
                </FormGroup>
                <FormGroup>
                <Label for="examplePassword">Description</Label>
                <Input type="text" name="description" id="examplePassword" placeholder="Description Product" />
                </FormGroup>
                <FormGroup>
                <Label for="examplePassword">Image of Product:</Label><br/>
                <Input type="file" name="image" id="examplePassword" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        )
    }
}