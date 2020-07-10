import React, { useState, useContext } from 'react';
import { Card, CardDeck, Row, Col, Container } from 'react-bootstrap';

function cardRow() {
//   // get username out of context object to display in nav
//   const { username } = useContext(UserInfoContext);



return(
<>
<Container fluid>
<Row>
{/* <CardDeck> */}
<Col>
<Card border="primary" bg="dark" text="light" style={{width: "28rem", padding: "20px", margin: "20px"}}>
<Card.Header>Username</Card.Header>
  <Card.Img variant="top" src="https://images.fineartamerica.com/images-medium-large-5/downtown-richmond-in-black-and-white-gordon-cain.jpg" />
  <Card.Body>

    <Card.Title>Title</Card.Title>
    <Card.Text>
      Description of Product
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col>
<Card border="primary" bg="dark" text="light" style={{width: "28rem", padding: "20px", margin: "20px"}}>
<Card.Header>Username</Card.Header>
  <Card.Img variant="top" src="https://images.fineartamerica.com/images-medium-large-5/downtown-richmond-in-black-and-white-gordon-cain.jpg" />
  <Card.Body>
    
    <Card.Title>Title</Card.Title>
    <Card.Text>
      Description of Product
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col>
<Card border="primary" bg="dark" text="light" style={{width: "28rem", padding: "20px", margin: "20px"}}>
<Card.Header>Username</Card.Header>
  <Card.Img variant="top" src="https://images.fineartamerica.com/images-medium-large-5/downtown-richmond-in-black-and-white-gordon-cain.jpg" />
  <Card.Body>
   
    <Card.Title>Title</Card.Title>
    <Card.Text>
      Description of Product
    </Card.Text>
  </Card.Body>
</Card>
</Col>
{/* </CardDeck> */}
</Row>
</Container>
</>
);
}

export default cardRow;