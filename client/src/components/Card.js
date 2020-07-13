import React, { useState, useContext } from 'react';
import { Card, CardDeck, Row, Col, Container, CardColumns } from 'react-bootstrap';

// import context for global state
import UserInfoContext from '../utils/UserInfoContext';

import * as API from '../utils/API';
import AuthService from '../utils/auth';

function AllPosts() {
  // get whole userData state object from App.js
  const userData = useContext(UserInfoContext);

  //   // get username out of context object to display in nav
  //   const { username } = useContext(UserInfoContext);

  return (
    <>
      <Container fluid>
        {/* <Row>
          <Col> */}
        <CardColumns>
          {userData.posts.map((post) => {
            return (
              <Card border="primary" bg="dark" text="light" style={{ padding: "20px", margin: "20px" }}>
                <Card.Header>{userData.username}</Card.Header>
                <Card.Img variant="top" src="https://images.fineartamerica.com/images-medium-large-5/downtown-richmond-in-black-and-white-gordon-cain.jpg" />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>
                    {post.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
        {/* </Col>
        </Row> */}
      </Container>
    </>
  );
}

export default AllPosts;