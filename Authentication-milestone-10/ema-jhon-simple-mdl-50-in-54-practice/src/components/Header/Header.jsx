import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {



    const {user, logOut} = useContext(AuthContext)


    const handleLogOut=()=>{
        logOut()
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error.message)
        })

    }

    return (
        <nav className='Header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/checkout">Check Out</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/Login">LogIn</Link>
                {
                    user && <span className='text-white'>welcome {user?.email} <button onClick={handleLogOut}>Sign Out</button></span> 
                }
            </div>
            <p>ok</p>

        </nav>
    );
};

export default Header;