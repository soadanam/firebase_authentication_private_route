import React from 'react';
import './ReactForm.css';
import { useForm } from 'react-hook-form';
import { useAuth } from './../Hooks/useAuth';

const ReactForm = () => {
    const { user } = useAuth();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
         console.log(data) 
        };
    // console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div>
            <h2>React Hook Form!</h2>

            <form className='react-form' onSubmit={handleSubmit(onSubmit)}>

                <input className='react-form-input' defaultValue={user.displayName} {...register("name")} />
                {/* include validation with required or other standard HTML validation rules */}

                <input className='react-form-input' defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className='error'>This Email field is required!</span>}


                <input className='react-form-input' defaultValue="" placeholder='Address' {...register("address")} />
                <input className='react-form-input' defaultValue="" placeholder='City' {...register("city")} />

                <input className='react-form-input' defaultValue="Phone" placeholder='Phone' {...register("phone", { required: true })} />
                {errors.phone && <span className='error'>Phone Number is required!</span>}

                <input className='react-form-input' type="submit" />
            </form>
        </div>
    );
};

export default ReactForm;