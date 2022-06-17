import React, { useState } from 'react'
import {
    sendPasswordResetEmail
} from "firebase/auth";
import { auth } from '../firebase'

export default function ChangePass() {
    const [resetemail, setresetEmail] = useState('')

    const resetPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, resetemail);
            alert('email will be there in some moment.. Thank You!')
        } catch (error) {
            console.log(error.message)
            alert('something went wrong')
        }
    }
    return (
        <div className='homeDiv'>
            {/* reset password  */}

            <div style={{ marginTop: 50 }}>
                <h1 style={{ marginBottom: 20 }}>Reset password!</h1>
                <input onChange={(e) => setresetEmail(e.target.value)} placeholder='email' />
                <button onClick={resetPassword}> submit</button>
            </div>
        </div>
    )
}
