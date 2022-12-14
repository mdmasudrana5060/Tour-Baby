import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://tour-baby-server-production.up.railway.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="packages">
            <Container >
                <h2 className='package-header'>Our Packages</h2>
                <div className='line   mx-auto' ></div>
                <Container>
                    <Row xs={1} md={3} className="g-5 mb-5">
                        {
                            // service.map(service => <Service service={service} key={service.id}></Service>)
                            services.map(service => <Service service={service} key={services.id}></Service>)

                        }

                    </Row>
                </Container>


            </Container>


        </div>
    );
};

export default Services;