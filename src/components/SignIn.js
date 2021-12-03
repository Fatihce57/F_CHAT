import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'
import { Container, Row, Col } from 'react-bootstrap'

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <div className="sign-page">
            <div className="chat-border">
                
                    <h1 className="header">FC CHAT</h1>
                    <div className="logoo"><img className="logo" src="./logo.png" alt="logo" /></div>
                    <div className="button-signIn">
                        <Button
                        style={{
                            padding: '30px',
                            fontSize: '20px',
                            borderRadius: '0',
                            fontWeight: '600', 
                            color: 'white',                    
                        }}
                        onClick={signInWithGoogle}
                    >
                        Sign In With Google
                    </Button></div>
                    
          
            </div>
        </div>
    )
}

export default SignIn
