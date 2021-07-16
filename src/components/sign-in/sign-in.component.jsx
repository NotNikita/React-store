import React, { useState } from 'react'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        setEmail('')
        setPassword('')
    }
    const handleChange = event => {
        const { value, name } = event.target;
        // if there will be more than 2 fiels, this will be bad
        name === 'email' ? setEmail(value) : setPassword(value)
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name='email' type='email' label='email'
                    handleChange={handleChange} value={email} required />

                <FormInput name='password' type='password' label='password'
                    handleChange={handleChange} value={password} required />

                <div className="buttons">
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn
