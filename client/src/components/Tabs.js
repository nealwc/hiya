import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tabs, Tab, Image, Row, Col, ButtonGroup, Button} from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
// import Card from './Card';

import '../index.css';


import UserInfoContext from '../utils/UserInfoContext';
import AuthService from '../utils/auth';

import Logo from '../utils/Photo/hiyadraft2fxd.png';

function Tabs1() {
    // set modal display state
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <Container>
            <Row className='categories'>
                <Col>
                    <ButtonGroup defaultActiveKey="profile" id="categories" size='lg' variant='link' style={{ marginBottom: '45px'}}>
                        <Button
                            // eventKey="all"
                            // title="All"
                            variant='link'
                            >All
                        </Button>
                        <Button
                            // eventKey="computers"
                            // title="Computers"
                            variant='link'
                            >Computers
                        </Button>
                         <Button
                            // eventKey="tablets/phones"
                            // title="Tablets/Phones"
                            variant='link'
                            >Tablets/Phones
                        </Button>
                        <Button
                            // eventKey="parts"
                            // title="Parts"
                            variant='link'
                            >Parts
                        </Button>
                        <Button
                            // eventKey="services"
                            // title="Services"
                            variant='link'
                            >Services
                        </Button>
                        <Button 
                            // eventKey="other"
                            // title="Other"
                            vat riant='link'
                            >Other
                        </Button>
                </ButtonGroup>
            </Col>
        </Row>
    </Container>
    </>
    );
}

export default Tabs1;