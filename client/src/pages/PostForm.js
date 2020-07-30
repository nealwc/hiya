import React, { useState } from 'react';
import { Form, Button, Container, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import AuthService from '../utils/auth';
import { saveItem } from '../utils/API';

function BlankForm() {
    const history = useHistory();
    const [itemFormData, setItemFormData] = useState({
        title: '',
        description: '',
        price: '',
        category: '',
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setItemFormData({ ...itemFormData, [name]: value })
    };

    // function to handle saving an item to our database
    const handleSaveItem = (e) => {
        e.preventDefault();

        const token = AuthService.loggedIn() ? AuthService.getToken() : null;

        if (!token) {
            return false;
        }

        // send the item data to our api
        saveItem(itemFormData, token).then(() => {
            history.push('/')
        })
    };

    return (
        <>
            <Container>
                <Card style={{ margin: "25px" }} id='postformcard'>
                    <Card.Header id='posthead'><strong>Post an Item</strong>
            </Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSaveItem} bg="dark" variant="dark">
                            <Form.Group>
                                <Form.File id="exampleFormControlFile1" label="Add a photo!" id='photobutton' />
                            </Form.Group>
                            <Form.Group controlId="formBasicTitle">
                                <Form.Label>What would you like to offer? *</Form.Label>
                                <Form.Control
                                    name='title'
                                    value={itemFormData.title}
                                    onChange={handleInputChange}
                                    placeholder='Item Name' />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                                    <Form.Label>How would you categorize your item? *</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name='category'
                                        value={itemFormData.category}
                                        onChange={handleInputChange}
                                        placeholder='Select a Category'>
                                        <option disabled></option>
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
                                        value={itemFormData.price}
                                        onChange={handleInputChange}
                                        placeholder="Price" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="formBasicDescription">
                                <Form.Label>Please describe your item:</Form.Label>
                                <Form.Control
                                    name="description"
                                    value={itemFormData.description}
                                    onChange={handleInputChange}
                                    placeholder="Description"
                                    as="textarea"
                                    rows="3" />
                            </Form.Group>
                            <Form.Group>
                                <Button
                                    variant="primary" type="submit">
                                    Submit
                              </Button>
                            </Form.Group>
                            <Form.Text className="text-muted" style={{color: '#0275d8'}}>
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