import React from 'react';
import { ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import '../index.css';

function TabsBar(props) {

    return (
        <>
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
                            variant='link'
                            >Other
                        </Button>
                </ButtonGroup>
            </Col>
        </Row>
    </>
    );
    //                 <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" style={{ marginBottom: '45px' }}>
    //                     <Tab
    //                         eventKey="all"
    //                         title="All">
    //                     </Tab>
    //                     <Tab
    //                         eventKey="computers"
    //                         title="Computers"
    //                         type="button"
    //                         onClick={props.itemFilter}
    //                         value="Computers">
    //                     </Tab>
    //                     <Tab
    //                         eventKey="tablets/phones"
    //                         title="Tablets/Phones">
    //                     </Tab>
    //                     <Tab
    //                         eventKey="parts"
    //                         title="Parts">
    //                     </Tab>
    //                     <Tab
    //                         eventKey="services"
    //                         title="Services">
    //                     </Tab>
    //                     <Tab
    //                         eventKey="other"
    //                         title="Other">
    //                     </Tab>
    //                 </Tabs>
    //             </Col>
    //         </Row>
    //     </>
    // );
}

export default TabsBar;