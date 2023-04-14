import React, { useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile} from 'firebase/auth'
import app from '../../firebase.config';
import { Link } from 'react-router-dom';


const auth = getAuth(app)

const Register = () => {

    const [success , setSuccess] = useState('')
    const [error, setError] = useState('')
    

    const allHandle = (event) => {
        event.preventDefault()
        setSuccess('')
        const email = event.target.email.value
        const password = event.target.password.value 
        const name = event.target.name.value


        console.log(password, email, name  )

        if(!/(?=.*[a-z])/.test(password)){
            setError('please give a lowercase letter')
            return
        }
        else if(!/(?=.*[0-9].*[0-9])/.test(password)){
            setError('please give at least two number')
            return
        }
        else if(password.length< 6){
            setError('please fill in password at least 8 digit')
            return
        }

        createUserWithEmailAndPassword(auth,email, password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
            setSuccess('You are logged successfully ')
            event.target.reset()
            setError('')
            handleVerify(result.user)

            setDisplayName(loggedUser, name)


        })   

        .catch(error=>{
            console.error(error.message)
            setError(error.message)
            setSuccess('')
            
           
        })

        const handleVerify=(user)=>{
            sendEmailVerification(user)
            .then(result =>{
            console.log(result)
            alert('please verify email')
            })
        }

    }

    const handleChange = (event) => {

        // console.log(event.target.value)
    }

    const handleBlur = (event) => {

        // console.log(event.target.value)
    }


    const setDisplayName =(user, name )=>{
            updateProfile(user, {
                displayName:name
            })
            .then(result=>{
                console.log(result)
            })
            .catch(error=>{
                console.log(error.message)
            })
    }
    

    return (
        <form onSubmit={allHandle} className='mb-3'>
            <input className='mb-3' onChange={handleChange} required type="name" name="name" id="name" placeholder='your name' />
            <br />
            <input className='mb-3' onChange={handleChange} required type="email" name="email" id="email" placeholder='your email' />
            <br />
            <input className='mb-3 rounded p-1' required onBlur={handleBlur} type="password" name="password" id="password" placeholder='password' />
            <br />
            <input className='mb-3' type="submit" value="Register" />
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
            <p>Already have an account ? please <Link to="/login">Login</Link></p>
        </form>
    );
};

export default Register;