import React, { useState, useContext } from 'react';
import { Form, Button, Alert, Container, Card, Row, Col, Input } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UserInfoContext from '../utils/UserInfoContext';
import AuthService from '../utils/auth';
import { createPost, savePost } from '../utils/API';



function BlankForm() {
    const [postFormData, setpostFormData] = useState({
        title: '',
        description: '',
        price: '',
        category: '',
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
            // .then(<Router>
            //         <Route exact path='/' component={Card}/>
            //         </Router>)
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
                                <Form.Label>What would you like to offer? *</Form.Label>
                                <Form.Control
                                    name='title'
                                    value={postFormData.title}
                                    onChange={handleInputChange}
                                    placeholder='Item Name' />
                                {/* <Form.Text className="text-muted">
                                       We'll never share your email with anyone else.
                                    </Form.Text> */}
                            </Form.Group>
                            <Form.Row>

                                <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                                    <Form.Label>How would you categorize your item? *</Form.Label>
                                    <Form.Control 
                                        as="select"
                                        name='category'
                                        value={postFormData.category}
                                        onChange={handleInputChange}>
                                            <option>Computers</option>
                                            <option>Tablets/Phones</option>
                                            <option>Parts</option>
                                            <option>Services</option>
                                            <option>Other</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formBasicPrice">
                                    <Form.Label>What's the asking price? *</Form.Label>
                                    <Form.Control
                                        name="price"
                                        value={postFormData.price}
                                        onChange={handleInputChange}
                                        placeholder="Price" />

                                </Form.Group>

                            </Form.Row>

                            <Form.Group controlId="formBasicDescription">
                                <Form.Label>Please describe your item:</Form.Label>
                                <Form.Control
                                    name="description"
                                    value={postFormData.description}
                                    onChange={handleInputChange}
                                    placeholder="Description"
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
                            <Form.Group>
                            <Button
                                variant="primary" type="submit">
                                Submit
                              </Button>
                              </Form.Group>
                            <Form.Text className="text-muted">
                                *required fields
                            </Form.Text>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default BlankForm