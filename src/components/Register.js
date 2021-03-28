import React, { useState } from 'react';
import './register.css';

function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    return(
        <div className='register'>
            <form className='register__form'>
                <h1>Register</h1>
                <input placeholder='username' value={name} onChange={(e)=>setName(e.target.value)} type='text' required />
                <input placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} type='email' required />
                <input placeholder='password' value={password1} onChange={(e)=>setPassword1(e.target.value)} type='password' required />
                <input placeholder='confirm password' value={password2} onChange={(e)=>setPassword2(e.target.value)} type='password' required />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register;