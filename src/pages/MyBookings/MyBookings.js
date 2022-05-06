import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();
    const [control, setControl] = useState(false);
    useEffect(() => {
        fetch(`https://gentle-retreat-98133.herokuapp.com/myBookings/${user.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [control]);
    const handleDelete = (id) => {
        const proceed = window.confirm("DO You want to delete?");
        if (proceed) {
            fetch(`https://gentle-retreat-98133.herokuapp.com/deleteBooking/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                },


            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        setControl(!control)

                    }
                    else {
                        setControl(false);
                    }

                })
            console.log(id);

        }



    }

    return (

        <Container>
            <h1>My Booking List</h1>
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>Booking id</th>
                            <th>Package Details</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, index) => (
                                <tr key={booking._id}>
                                    <td>{index + 1}</td>
                                    <td>{booking.serviceName}</td>
                                    <td>{booking.name}</td>
                                    <td>{booking.email}</td>
                                    <td className="text-warning">{booking.status}</td>
                                    <td><Button onClick={() => handleDelete(booking._id)} variant="danger">Delete</Button> </td>
                                </tr>

                            ))
                        }


                    </tbody>
                </Table >
            </Container >
        </Container >
    );
};

export default MyBookings;