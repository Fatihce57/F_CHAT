import { Button, Input } from '@material-ui/core'
import firebase from 'firebase'
import { db, auth } from '../firebase'
import React, { useState } from 'react'

function SendMessage() {
    const [msg, setMsg] = useState('');

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    }

    return (
        <div>
            <from onSubmit={sendMessage}>
                <Input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Message...">
                    <Button type="submit">Send</Button>
                </Input>
            </from>
        </div>
    )
}

export default SendMessage
