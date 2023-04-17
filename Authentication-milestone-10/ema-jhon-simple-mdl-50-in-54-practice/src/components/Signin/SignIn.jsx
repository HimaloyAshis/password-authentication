import React, { useContext, useState } from 'react';
import './Signin.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignIn = () => {
    const [error, setError] = useState()
    const {createUser} = useContext(AuthContext)



    const handleSubmit=(event)=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const conform = form.conform.value
        console.log(email, password, conform)

        setError('')


        if(password !== conform){
            setError('Your pass code did not match')
            return
        }
        else if(password<6){
            setError('pass code will be at least six character or larger.')
        }

            
        createUser(email, password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)

        })
        .catch(error=>{
            console.log(error.message)
            setError(error.message)
        })


    }


    return (
        <div className='form-container'>
            <h2 className='title-container'>please Sign up</h2>
            <form onSubmit={handleSubmit} className='formation'>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" className='' name="email" id="" required placeholder='Your email' />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" className='' name="password" id="" required placeholder='Your password' />
                </div>
                <div className="form-control">
                    <label htmlFor="conform">Conform Password</label>
                    <input type="password" className='' name="conform" id="" required placeholder='Your password' />
                </div>

                <input className='btn' type="submit" value="Sign up" />

            </form>
            <p>Already have account? please <Link to="/login">login</Link></p>
            <p className='error'>{error}</p>
        </div>
    );
};

export default SignIn;