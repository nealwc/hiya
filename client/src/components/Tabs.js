import React from 'react';
import { Tabs, Tab, Row, Col } from 'react-bootstrap';
import '../index.css';

function TabsBar(props) {

    return (
        <>
            <Row className='categories'>
                <Col>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" style={{ marginBottom: '45px' }}>
                        <Tab
                            eventKey="all"
                            title="All">
                        </Tab>
                        <Tab
                            eventKey="computers"
                            title="Computers"
                            type="button"
                            onClick={props.itemFilter}
                            value="Computers">
                        </Tab>
                        <Tab
                            eventKey="tablets/phones"
                            title="Tablets/Phones">
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
        </>
    );
}

export default TabsBar;