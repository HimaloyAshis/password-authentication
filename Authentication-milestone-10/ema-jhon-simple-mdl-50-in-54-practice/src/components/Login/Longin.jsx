import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Longin = () => {
    const {signIn}  = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const from = location.state?.from?.pathname || '/'

    const handleLogIn=(event)=>{
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)


        signIn(email, password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
            navigate(from, {replace : true})
            
        })
        .catch(error=>{
            console.log(error.message)

        })


    }

    return (
        <div className='form-container'>
            <h2 className='title-container'>please Log in</h2>
            <form onSubmit={handleLogIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" className='' name="email" id="" required placeholder='Your email' />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" className='' name="password" id="" required placeholder='Your password' />
                </div>

                <input className='btn' type="submit" value="Login" />

            </form>
            <p>Don't have account? please <Link to="/signup">Sign up</Link></p>
        </div>
    );
};

export default Longin;