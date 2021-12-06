import React from 'react'
import { auth } from '../firebase'
import { Button } from '@material-ui/core'

function SignOut() {
    return (
        <Button
            style={{
                padding: '8px',
                fontSize: '14px',
                fontWeight: '500',
                width: '6rem',
            }}
            onClick={() => auth.signOut()}
        >
            Sign Out
        </Button>
    )
}

export default SignOut
