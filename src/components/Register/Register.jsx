import React, { useState } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../../firebase.config';


const auth = getAuth(app)

const Register = () => {

    const [success , setSuccess] = useState('')
    const [error, setError] = useState('')
    

    const allHandle = (event) => {
        setSuccess('')
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value 
        console.log(event.target.password.value)

        if(!/(?=.*[a-z])/.test(password)){
            setError('please give a lowercase letter')
            return
        }
        else if(!/(?=.*[0-9].*[0-9])/.test(password)){
            setError('please give at least two number')
            return
        }
        else if(password.length> 6){
            setError('please fill in password at least 8 digit')
            return
        }

        createUserWithEmailAndPassword(auth,email, password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
            setError('')
            event.target.reset()
            setSuccess('You are logged successfully ')
        })   

        .catch(error=>{
            console.error(error.message)
            setError(error.message)
            setSuccess('')
           
        })

    }

    const handleChange = (event) => {

        // console.log(event.target.value)
    }

    const handleBlur = (event) => {

        // console.log(event.target.value)
    }

    

    return (
        <form onSubmit={allHandle} className='mb-3'>
            <input className='mb-3' onChange={handleChange} required type="email" name="email" id="email" placeholder='your email' />
            <br />
            <input className='mb-3 rounded p-1' required onBlur={handleBlur} type="password" name="password" id="password" placeholder='password' />
            <br />
            <input className='mb-3' type="submit" value="Register" />
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </form>
    );
};

export default Register;