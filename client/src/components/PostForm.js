import React, { useState, useContext } from 'react';
import { Form, Button, Alert, Container, Card } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form'

function PostForm() {

    return (
        <>
            <Container>
            <Card style={{margin: "25px"}}>
            <Card.Header>Create a Post
            </Card.Header>
            <Card.Body>
            <Form>

            <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Add a photo!" />
            </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Post Title</Form.Label>
                    <Form.Control type="email" placeholder="Enter Post Title" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                     </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Post Description</Form.Label>
                    <Form.Control type="password" placeholder="Enter Post Description" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Card.Body>
            </Card>
            </Container>
        </>
    )
}

export default PostForm