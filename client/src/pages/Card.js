import React, { useState, useContext, useEffect } from 'react';
import { Card, CardDeck, Row, Col, Container, CardColumns, Button, Tabs, Tab } from 'react-bootstrap';
import moment from 'moment';

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
  const [currentFilter, setCurrentFilter] = useState();

  useEffect(() => {
    loadItems()
  }, [currentFilter])

  function loadItems() {
    API.getAllItems()
      .then(res => {
        const sorted = res.data.sort((i1, i2) => moment(i2.date) - moment(i1.date))
        if (currentFilter) {
          const filteredItems = sorted.filter(item => {
            return item.category === currentFilter
          })
          setItems(filteredItems)
        }
        else {
        setItems(sorted)
        }
      })
    console.log(items)
  }


  return (
    <>
      <Container style={{ width: '100%' }}>
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
        <Row>
          <Col>
            <CardColumns>
              {items.map((item) => {
                return (
                  <Card border="primary" bg="dark" text="light" style={{ padding: "20px", margin: "20px" }}>
                    <Card.Header style={{ fontSize: "25px" }}>{item.user.username}
                    </Card.Header>
                    <Card.Img variant="top" src="https://images.fineartamerica.com/images-medium-large-5/downtown-richmond-in-black-and-white-gordon-cain.jpg" />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>Description: {item.description}</Card.Text>
                      <Card.Text>Price: ${item.price}</Card.Text>
                      <a href={`mailto: ${userData.email}`} style={{ color: "white", fontSize: "45px" }}>&#9993;</a>
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