import React, { useState } from 'react';
import './login.css';

function Login(){

    const[name,setName] = useState('');
    const[password,setPassword] = useState('');

    return(
        <div className='login'>
            <form className='login__form'>
                <h1>Login</h1>
                <input placeholder='username' value={name} onChange={(e)=>setName(e.target.value)} type='text' required />
                <input placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} type='password' required />
                <button >Login</button>
            </form>
        </div>
    )
}

export default Login;