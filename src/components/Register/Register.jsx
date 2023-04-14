import React from 'react';

const Register = () => {
    return (
        <div>
            <input type="email" name="email" id="email" placeholder='your email'/>
            <br />
            <input type="password" name="password" id="password" placeholder='password'/>
            <br />
            <input type="submit" value="Register" />
        </div>
    );
};

export default Register;