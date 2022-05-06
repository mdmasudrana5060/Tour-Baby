import React from 'react';

import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const PlaceBooking = (props) => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        data.status = "Pending";
        fetch('https://gentle-retreat-98133.herokuapp.com/addbooking', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then((result) => {

                if (result.insertedId) {
                    window.alert('Package Booked successfully');
                    reset();
                }
            });
        console.log(data)



    }
    return (
        <div>
            <h2 className="my-3 text-center"> Your Details</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="personal-detail">
                    <input type="text" name="" {...register("name", { required: true })} placeholder="Enter Your Name" id="" /> <br />
                    <input type="email" name="" {...register("email", { required: true })} placeholder="email" id="" /> <br />

                    <input type="text" name="" placeholder="Destination" {...register('serviceName')} id="" /> <br />

                    <input type="number" name="" {...register('phoneNumber')} placeholder="Phone Number" id="" /> <br />

                    <input type="text-area" name="" {...register('address')}
                        placeholder="Address" id="" /> <br />
                    <button type="submit" className="btn btn-warning">Book Now</button>
                </div>



            </form>

        </div>
    );
};

export default PlaceBooking;