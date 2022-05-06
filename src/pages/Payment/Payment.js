
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
    return (
        <div id="payment">
            <h2>PayMent Method</h2>
            <Row xs={1} md={2} className="g-4 m-5">
                <Col>
                    <Card className='single-payment '>
                        <Card.Img variant="top" src="https://i.postimg.cc/T1ChhL3X/bkash.png" />
                        <Card.Body>
                            <Card.Title>Bkash payment</Card.Title>
                            <Card.Text>
                                If you want to pay through Bkash you can click below:
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer>
                            <Link to={`/bkash`}>    <Button>Pay</Button></Link>
                        </Card.Footer>

                    </Card>
                </Col>
                <Col>
                    <Card className='single-payment'>
                        <Card.Img variant="top" src="https://i.postimg.cc/CxDYQnpL/debit.png" />
                        <Card.Body>
                            <Card.Title>Debit Card Payment</Card.Title>
                            <Card.Text>
                                If You want to pay through debit card click below:
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link to={`/debit`}>    <Button>Pay</Button></Link>
                        </Card.Footer>

                    </Card>
                </Col>

            </Row>


            {/* <div className='payment-style'>
                <div className="single-payment">
                        <img src="https://i.postimg.cc/0QzJh4F7/bkash.png" alt="" />

                </div>
                <div className="single-payment"><img src="https://i.postimg.cc/6q0wcWcc/Nagad.png" alt="" /></div>
                <div className="single-payment">
                    <img src="https://i.postimg.cc/g2Bz10WB/debit.png" alt="" />
                </div>
            </div> */}

        </div>
    );
};

export default Payment;