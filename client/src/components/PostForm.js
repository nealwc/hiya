import React, { useState, useContext } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form'

function PostForm() {

    return (
        <>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="email" placeholder="Enter Title" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                     </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="password" placeholder="Description" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default PostForm