// import React, { useState, useContext } from 'react';
// import { Card, CardDeck, Row, Col, Container, CardColumns, Button, Nav, Tab } from 'react-bootstrap';


// function Tabs() {

// return (
// <>
// <Tab.Container id="left-tabs-example" defaultActiveKey="first">
//   <Row>
//     {/* <Col sm={3}> */}
//       <Nav variant="pills" className="flex-column">
//         <Nav.Item>
//           <Nav.Link eventKey="first">Tab 1</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="second">Tab 2</Nav.Link>
//         </Nav.Item>
//       </Nav>
//     {/* </Col>
//     <Col sm={9}> */}
//       <Tab.Content>
//         <Tab.Pane eventKey="first">
//           {/* <Sonnet /> */}
//         </Tab.Pane>
//         <Tab.Pane eventKey="second">
//           {/* <Sonnet /> */}
//         </Tab.Pane>
//       </Tab.Content>
//     {/* </Col> */}
//   </Row>
// </Tab.Container>
// </>
// )
// };

// export default Tabs




<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" style={{color: 'white'}}>
<Tab eventKey="computers" title="Computers" className="nav-tabs" >
{/* <Sonnet /> */}
</Tab>
<Tab eventKey="tablets/phones" title="Tablets/Phones" >
{/* <Sonnet /> */}
</Tab>
<Tab eventKey="parts" title="Parts" >
{/* <Sonnet /> */}
</Tab>
<Tab eventKey="services" title="Services" >
{/* <Sonnet /> */}
</Tab>
<Tab eventKey="other" title="Other">
{/* <Sonnet /> */}
</Tab>
</Tabs>