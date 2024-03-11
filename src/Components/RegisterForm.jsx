const API = "https://stingray-app-axdpn.ondigitalocean.app/api/auth/signup";
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

function RegisterForm() {
    const formSchema = yup.object({
        username: yup.string().required('username is required'),
        email: yup.string().email('email is not valid').required('email is required'),
        password: yup.string().required('password is required').min(8, 'password should be of minimum 8 characters length')
    })

    const {
        register,
        handleSubmit,
    } = useForm({
        resolver: yupResolver(formSchema)
    });


    const submitData = async (data) => {
        console.log(data);
        const { username, email, password } = data;
        try{
            await axios.post(API, {username, email, password})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <div className="hero min-h-screen bg-green-200">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-green-500">Register</h1>
                </div>
                <div className="card shrink-0 w-screen max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(submitData)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="text" placeholder="username" className="input input-bordered" required {...register('username')} />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required {...register('email')} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required {...register('password')} />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type='submit'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;