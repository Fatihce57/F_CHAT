import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../firebase'
import SendMessage from './SendMessage'
import SignOut from './SignOut'

function Chat() {
  const scroll = useRef()
  const [messages, setMessages] = useState([])
  useEffect(() => {
    db.collection('messages')
      .orderBy('createdAt')
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()))
      })
  }, [])
  return (
    <div className="chat-page ">
    <div className="chat-border">
    <span className="chat-header"> <SignOut/><h1>FC CHAT</h1> <img className="logo" src="./logo.png" alt="logo" /></span>
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? 'sent' : 'received'
              }`}
            >
              <img className="photo" src={photoURL} alt="photo" />
              <p className="text">{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
    </div>
  )
}

export default Chat
