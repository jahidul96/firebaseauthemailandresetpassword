
import React, { useState } from 'react'
import {
    createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from '../firebase'
import { Link } from 'react-router-dom'


export default function Home() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const submitDetails = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            alert('user Create succesfully')
        } catch (error) {
            console.log(error.message)
            alert('something went wrong')
        }

    }



    return (
        // signup 

        <div className='homeDiv'>
            <h2 style={{ marginBottom: 20 }}>Signup</h2>
            <input onChange={(e) => setEmail(e.target.value)} placeholder='email' />
            <input onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <button onClick={submitDetails}> submit</button>


            <Link to="/login"><p style={{ marginTop: 20 }}>Have an account?</p></Link>


        </div>
    )
}
