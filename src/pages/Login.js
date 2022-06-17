import React, { useState } from 'react'
import {
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from '../firebase'
import { Link } from 'react-router-dom'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            alert('login succesfull')
        } catch (error) {
            console.log(error.message)
            alert('something went wrong')
        }
    }
    return (
        <div className='homeDiv'>
            {/* login  */}
            <div style={{ marginTop: 50 }}>
                <h1 style={{ marginBottom: 20 }}>login!</h1>
                <input onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                <input onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                <button onClick={login}> submit</button>
                <Link to="/newpass"><p style={{ marginTop: 20 }}>Forgot passWord?</p></Link>
            </div>
        </div>
    )
}
