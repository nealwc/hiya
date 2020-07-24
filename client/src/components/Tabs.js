import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tabs, Tab, Image, Row, Col} from 'react-bootstrap';
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
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" style={{ marginBottom: '45px' }}>
                        <Tab
                        eventKey="computers"
                        title="Computers">
                    </Tab>
                    <Tab
                        eventKey="tablets/phones"
                        title="Tablets/Phone">
                    </Tab>
                    <Tab
                        eventKey="parts"
                        title="Parts">
                    </Tab>
                    <Tab
                        eventKey="services"
                        title="Services">
                    </Tab>
                    <Tab 
                        eventKey="other"
                        title="Other">
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    </Container>
    </>
    );
}

export default Tabs1;