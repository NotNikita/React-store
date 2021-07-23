import React from 'react'
import './signin-signup.styles.scss'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-out">
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )
}

export default SignInAndSignUpPage
