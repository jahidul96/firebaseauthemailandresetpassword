import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { confirmPasswordReset } from 'firebase/auth'
import { auth } from '../firebase';


export default function Resetpassword() {

    const [resetPass, setResetPass] = useState('');

    const navigate = useNavigate();

    const queryParams = new URLSearchParams(window.location.search)

    console.log(queryParams)

    const oobCode = queryParams.get('oobCode')
    console.log(oobCode)

    const resetPassword = async () => {
        try {
            const reset = await confirmPasswordReset(auth, oobCode, resetPass);
            alert('password reset succesfull')
            navigate('/')
        } catch (error) {
            console.log(error.message)
            alert('something went wrong')
        }
    }

    return (
        <div className='homeDiv'>
            {/* reset password  */}

            <div style={{ marginTop: 50 }}>
                <h1 style={{ marginBottom: 20 }}>Change password!</h1>
                <input onChange={(e) => setResetPass(e.target.value)} placeholder='password' />
                <button onClick={resetPassword}> submit</button>
            </div>
        </div>
    )
}
