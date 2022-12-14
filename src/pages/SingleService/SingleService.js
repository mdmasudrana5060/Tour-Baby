import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import "./SingleService.css"
import PlaceBooking from './PlaceBooking/PlaceBooking';
import { useHistory } from 'react-router-dom';

const SingleService = () => {
    const { id } = useParams();


    const [serviceDetails, setServiceDetails] = useState([]);


    useEffect(() => {
        fetch(`https://tour-baby-server-production.up.railway.app/services/${id}`)
            .then(res => res.json())
            .then(data => setServiceDetails(data));

    }, [id]);



    return (
        <div>
            <h2 className="my-3 text-center"> Service Details</h2>
            <div>

                <Row className="w-75 mx-auto my-5  ">
                    <Col xs={12} md={6} className="text-center p-3">
                        <h2 className="my-3 text-center"> Destination Details</h2>
                        <img src={serviceDetails.img} alt="" className="img-fluid"></img>
                        <h3>{serviceDetails.name}</h3>
                        <p className="text-secondary lh-lg">{serviceDetails.description}</p>

                        <h5>Cost:$<span className="text-danger"> {serviceDetails.cost}</span></h5>
                    </Col>
                    <Col xs={12} md={6} className="p-3 text-format">
                        <PlaceBooking service={serviceDetails}></PlaceBooking>



                    </Col>
                </Row>

            </div>

        </div >


    );
};

export default SingleService;