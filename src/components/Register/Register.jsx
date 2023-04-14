import React from 'react';

const Register = () => {


    const allHandle = (event) => {
        event.preventDefault()
        console.log(event.target.password.value)
    }

    const handleChange = (event) => {

        console.log(event.target.value)
    }

    const handleBlur = (event) => {

        console.log(event.target.value)
    }

    

    return (
        <form onSubmit={allHandle}>
            <input onChange={handleChange} type="email" name="email" id="email" placeholder='your email' />
            <br />
            <input onBlur={handleBlur} type="password" name="password" id="password" placeholder='password' />
            <br />
            <input type="submit" value="Register" />
        </form>
    );
};

export default Register;