import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getUser, userSelected, selectUser}) => {

    const {handleSubmit, register, reset} = useForm();

    const emptyUser = {first_name: "", last_name: "", email: "", password: "", birthday: ""}
    
    useEffect(() => {
        if(userSelected){
            reset(userSelected)
        } else {
            reset(emptyUser)
        }
    }, [userSelected])

    const submit = (data) => {
        if(userSelected){
            axios.put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, data)
                .then(() => {
                    alert('Se ha actualizado el usuario')
                    getUser()
                    selectUser()
                })
        } else {
                axios.post('https://users-crud.academlo.tech/users/', data)
            .then(() => {
                alert('Se ha creado el usuario')
                getUser()
                reset(emptyUser)
            })  
        }     
    }

    return (
        <div className='users_form'>
            <h1>Create and update a  user</h1>
            <form onSubmit={handleSubmit(submit)} >
                <div className="input-container">
                    <label htmlFor="first_name">First name</label>
                    <input 
                        type="text"
                        id='first_name'
                        {...register("first_name")}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="last_name">Last name</label>
                    <input 
                        type="text"
                        id='last_name'
                        {...register("last_name")}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text"
                        id='email'
                        {...register("email")}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id='password'
                        {...register("password")}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="birthday">Birthday</label>
                    <input 
                        type="date"
                        id='birthday'
                        {...register("birthday")}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default UsersForm;