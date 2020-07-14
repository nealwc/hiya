import React, { useState, useContext } from 'react';
import { Form, Button, Alert, Container, Card, Row, Col } from 'react-bootstrap';

import UserInfoContext from '../utils/UserInfoContext';
import AuthService from '../utils/auth';
import { createPost, savePost } from '../utils/API';



function BlankForm() {
    const [postFormData, setpostFormData] = useState({
        title: '',
        description: '',
        price:''
    });

    const userData = useContext(UserInfoContext);

    function handleInputChange(e) {
        const { name, value } = e.target;
        setpostFormData({ ...postFormData, [name]: value })
    };

    // function to handle saving a post to our database
    const handleSavePost = (e) => {
        e.preventDefault();

        // get token
        const token = AuthService.loggedIn() ? AuthService.getToken() : null;

        if (!token) {
            return false;
        }

        // send the post data to our api
        savePost(postFormData, token)
        console.log(postFormData, token)
            // .then(() => userData.getUserData())
            // .catch((err) => console.log(err));
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
                            <Form.Row>
                            
                                    <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select a Category</Form.Label>
                    <Form.Control as="select">
                        <option>Computers</option>
                        <option>Tablets/Phones</option>
                        <option>Parts</option>
                        <option>Services</option>
                        <option>Other</option>
                    </Form.Control>
                </Form.Group>
                
                    <Form.Group as={Col} controlId="formBasicPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    name="price"
                                    value={postFormData.price}
                                    onChange={handleInputChange}
                                    placeholder="Enter Price" />
                                    
                            </Form.Group>
                        
                            </Form.Row>

                            <Form.Group controlId="formBasicDescription">
                                <Form.Label>Post Description</Form.Label>
                                <Form.Control
                                    name="description"
                                    value={postFormData.description}
                                    onChange={handleInputChange}
                                    placeholder="Enter Post Description"
                                    as="textarea"
                                    rows="3" />
                            </Form.Group>
                            {/* <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select a Category</Form.Label>
                    <Form.Control as="select">
                        <option>Computers</option>
                        <option>Tablets/Phones</option>
                        <option>Parts</option>
                        <option>Services</option>
                        <option>Other</option>
                    </Form.Control>
                </Form.Group>
                            <Form.Group controlId="formBasicPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    name="price"
                                    value={postFormData.price}
                                    onChange={handleInputChange}
                                    placeholder="Enter Price" />
                            </Form.Group> */}
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