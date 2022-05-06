import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = props => {
    const { name, description, img, transportation, _id } = props.service;

    return (
        <div>

            <CardGroup>
                <Card className="service">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <div className="description ">
                            <Card.Text >
                                {description}
                                <p><b>Transportation:</b> {transportation}</p>
                            </Card.Text>
                        </div>


                    </Card.Body>
                    <Card.Footer>
                        <Link to={`/singleservice/${_id}`}>    <Button>Book Now</Button></Link>

                    </Card.Footer>
                </Card>


            </CardGroup>

        </div>
    );
};

export default Service;

{/* <Link to={`/singleservice/${name}`}><Button>Detail</Button></Link>  */ }