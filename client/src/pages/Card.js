import React, { useState, useContext, useEffect } from 'react';
import { Card, CardDeck, Row, Col, Container, CardColumns, Button, Tabs, Tab } from 'react-bootstrap';

// import context for global state
import UserInfoContext from '../utils/UserInfoContext';

import * as API from '../utils/API';
import AuthService from '../utils/auth';

function AllItems() {
  // get whole userData state object from App.js
  const userData = useContext(UserInfoContext);

  // get username out of context object to display in nav
  const { username } = useContext(UserInfoContext);

  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);

  useEffect(() => {
    loadItems()
  }, [])

  function loadItems() {
    API.getAllItems()
      .then(res =>
        setItems(res.data)
        )
        console.log(items)
        // .catch(err => console.log(err));
  }
  

  return (
    <>
      <Container style={{width: '100%'}}>
      <Row className='categories'>
        <Col>
        {/* <Nav className='categories'> */}
{/*                     
                      <Link as={Link} to='/' style={{color: '#0275d8', marginRight: '25px'}}>Computers</Link>
                    
                    
                      <Link as={Link} to='/' style={{color: '#0275d8', marginRight: '25px'}}>Tablets/Phones</Link>
                    
                    
                      <Link as={Link} to='/' style={{color: '#0275d8', marginRight: '25px'}}>Parts</Link>
                    
                      <Link as={Link} to='/' style={{color: '#0275d8', marginRight: '25px'}}>Services</Link>
                   
                      <Link as={Link} to='/' style={{color: '#0275d8', marginRight: '25px'}}>Other</Link>
                     */}
          {/* </Nav> */}
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" style={{marginBottom: '45px'}}>
  <Tab eventKey="computers" title="Computers">
    {/* <Sonnet /> */}
  </Tab>
  <Tab eventKey="tablets/phones" title="Tablets/Phone">
    {/* <Sonnet /> */}
  </Tab>
  <Tab eventKey="parts" title="Parts">
    {/* <Sonnet /> */}
  </Tab>
  <Tab eventKey="services" title="Services">
    {/* <Sonnet /> */}
  </Tab>
  <Tab eventKey="other" title="Other">
    {/* <Sonnet /> */}
  </Tab>
</Tabs>
</Col>
        </Row>
         <Row>
          <Col> 
        <CardColumns>
          {items.map((item) => {
            return (
              <Card border="primary" bg="dark" text="light" style={{ padding: "20px", margin: "20px" }}>
                <Card.Header style={{ fontSize: "25px" }}>{userData.username}
                </Card.Header>
                <Card.Img variant="top" src="https://images.fineartamerica.com/images-medium-large-5/downtown-richmond-in-black-and-white-gordon-cain.jpg" />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>Description: {item.description}</Card.Text>
                  <Card.Text>Price: ${item.price}</Card.Text>
                  <a href={`mailto: ${userData.email}`} style={{ color: "white", fontSize: "45px"}}>&#9993;</a>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns> 
        <h1></h1>
         </Col>
        </Row>
      </Container>
    </>
  );
}

export default AllItems;