import React from 'react'
import './Login.css'
import img from './images/logo.png'
import { Link } from 'react-router-dom'


function Login() {

    
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src={img}
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' />

                    <h5>Password</h5>
                    <input type='password'/>

                    <button type='submit'   className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to Amazon Fake Clone Condition of Use & Sale. Please see our Privacy Notice , our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton'>Create Your Amazon Account</button>
            </div>

        </div>
    )   
}

export default Login