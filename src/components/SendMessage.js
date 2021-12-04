import React, { useState } from 'react'
import { Button, Input } from '@material-ui/core'
import firebase from 'firebase'
import { db, auth } from '../firebase'

function SendMessage({ scroll }) {
    const [message, setMessage] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: message,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setMessage('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <form onSubmit={sendMessage}>
            <div className="sendMsg">
                <Input
                    className="input"
                    placeholder="Message..."
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button
                    className="send-button"
                    type="submit"
                >
                    Send
                </Button>
            </div>
        </form>
    )
}

export default SendMessage
