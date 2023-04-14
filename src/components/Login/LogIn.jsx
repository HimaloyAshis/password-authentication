import React, { useRef, useState } from 'react';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase.config';
import { Link } from 'react-router-dom';


const auth = getAuth(app)

const LogIn = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const emailRef = useRef()

    const handleSub =(event)=>{
        event.preventDefault()
        
        setError('')
        setSuccess('')
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        if(!/(?=.*[a-z])/.test(password)){
            setError('please password should be lowercase also')
            return
        }
        else if(!/(?=.*[A-Z])/.test(password)){
            setError('please put uppercase letter also')
            return
        }
        else if(password.length< 6){
            setError('Password length should be more than 6 character')
            return
        }


        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const loggedUser = result.user
            setError('')
            setSuccess('successfully logged')
            event.target.reset()
            console.log(loggedUser)

        })
        .catch(error=>{
            console.log(error.message)
            setSuccess('')
            setError(error.message)
        })


    }


    const handleResetPass=()=>{
        const email = emailRef.current.value
        if(!email){
            alert('please input a valid email')
        }
        sendPasswordResetEmail(auth, email)
        .then(result=>{
            alert('please check your email')
        })
        .catch(error=>{
            console.log(error.message)
        })
        

    }

    return (
        <div>
            <form onSubmit={handleSub}>
                <input className='mb-3 p-2' type="email" name="email" ref={emailRef} id="email" placeholder='put a valid email'/>
                <br />
                <input className='mb-3 p-2' type="password" name="password" id="password" placeholder='put a valid password'/>
                <br />
                <input className='mb-3 p-2 ' type="submit" value="Login" />

                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>
                
                <p>New to this website? please <Link to="/register">Register</Link></p>
            </form>
            <p><small>Forget password? please <button onClick={handleResetPass} className='btn btn-link'>Reset password</button></small></p>
        </div>
    );
};

export default LogIn;