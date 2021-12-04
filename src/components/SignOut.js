import React from 'react'
import { auth } from '../firebase'
import { Button } from '@material-ui/core'

function SignOut() {
    return (
        <Button
            style={{
                padding: '10px',
                fontSize: '16px',
                fontWeight: '600',
                fontColor: 'white'
            }}
            onClick={() => auth.signOut()}
        >
            Sign Out
        </Button>

    )
}

export default SignOut
