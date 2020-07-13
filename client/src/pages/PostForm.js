import React, { useState, useContext } from 'react';
import { Form, Button, Alert, Container, Card } from 'react-bootstrap';

import UserInfoContext from '../utils/UserInfoContext';
import AuthService from '../utils/auth';
import { createPost } from '../utils/API';



function BlankForm() {
    const [postFormData, setpostFormData] = useState({
        title: '',
        description: ''
    });

    const userData = useContext(UserInfoContext);

    function handleInputChange(e) {
        const { name, value } = e.target;
        setpostFormData({ ...postFormData, [name]: value })
    };

    // function to handle saving a post to our database
    const handleSavePost = (e) => {
        // get token
        const token = AuthService.loggedIn() ? AuthService.getToken() : null;

        if (!token) {
            return false;
        }

        // send the post data to our api
        createPost(postFormData, token)
        console.log(postFormData, token)
            .then(() => userData.getUserData())
            .catch((err) => console.log(err));
    };

    return (
        <>
            <Container>
                <Card style={{ margin: "25px" }}>
                    <Card.Header>Create a Post
            </Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSavePost}>
                            <Form.Group>
                                <Form.File id="exampleFormControlFile1" label="Add a photo!" />
                            </Form.Group>
                            <Form.Group controlId="formBasicTitle">
                                <Form.Label>Post Title</Form.Label>
                                <Form.Control
                                    name='title'
                                    value={postFormData.title}
                                    onChange={handleInputChange}
                                    placeholder='Enter Post Title' />
                                {/* <Form.Text className="text-muted">
                                       We'll never share your email with anyone else.
                                    </Form.Text> */}
                            </Form.Group>
                            <Form.Group controlId="formBasicDescription">
                                <Form.Label>Post Description</Form.Label>
                                <Form.Control
                                    name="description"
                                    value={postFormData.description}
                                    onChange={handleInputChange}
                                    placeholder="Enter Post Description" />
                            </Form.Group>
                            <Button
                                variant="primary" type="submit">
                                Submit
                              </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default BlankForm