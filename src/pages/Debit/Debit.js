import React from 'react';
import "./Debit.css"
import { useForm } from 'react-hook-form';


const Debit = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        fetch('https://tour-baby-server-production.up.railway.app/debit', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),


        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    window.confirm('Your payment is received');
                    reset();
                }

            });

    }
    return (
        <div className='debit'>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="personal-detail">
                    <input type="text" name="" {...register("name", { required: true })} placeholder="Enter Your Name" id="" /> <br />
                    <input type="email" name="" {...register("email", { required: true })} placeholder="email" id="" /> <br />

                    <input type="text" name="" placeholder="Destination" {...register('serviceName')} id="" /> <br />

                    <input type="number" name="" {...register('phoneNumber')} placeholder="Phone Number" id="" /> <br />
                    <input type="number" name="" {...register('debitCardNumber')} placeholder="Account Number" id="" /> <br />
                    <input type="number" name="" {...register('pin')} placeholder="pin" id="" /> <br />
                    <input type="number" name="" {...register('money')} placeholder="money" id="" /> <br />

                    <button type="submit" className="btn btn-warning">Pay Now</button>
                </div>



            </form>

        </div>
    );
};

export default Debit;