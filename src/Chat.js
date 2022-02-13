import { useState,useEffect} from 'react';
import { Avatar, IconButton, ownerDocument } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MessageSharp, Mic, SearchOutlined } from '@material-ui/icons';
import MoreVert from '@material-ui/icons/MoreVert';
import React from 'react'
import './Chat.css';
import { useParams } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import firebase from "firebase";
import db from './Firebase';
const Chat = () => {
    
    const [state,dispatch]=useStateValue();
    const [roomName,setRoomName]=useState("");
    const [messages,setMessages]=useState([]);
    const [input,setInput]=useState("");
    const {roomid}=useParams();
    // console.log(roomid);
    useEffect(() => {
        db.collection("rooms").doc(roomid).onSnapshot((snapShot)=>{setRoomName(snapShot.data().name)})
        db.collection('rooms').doc(roomid).collection('messages').orderBy('timestamp','asc').onSnapshot(snap=>setMessages(snap.docs.map(doc=>doc.data())));
        // console.log(messages); 
    }, [roomid])
  
    const sendMessage=(e)=>{
        e.preventDefault();
        db.collection('rooms').doc(roomid).collection('messages').add({
            message:input ,
            name:state.user.displayName ,
            timestamp: firebase.firestore.FieldValue.serverTimestamp() 
        })
        // console.log(messages);
        setInput("");
    }
    return (
        <div className="chat">
           <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${roomid}.svg`} />
            <div className="chat__headerInfo">
                <h3>{roomName}</h3>
                <p>{`last seen at ${ new Date(messages[messages.length-1]?.timestamp?.toDate()).toUTCString()}`}</p>
            </div>
            <div className="chat__headerRight">
            <IconButton> <SearchOutlined/></IconButton>
                  <IconButton><AttachFile/></IconButton>
                  <IconButton><MoreVert/></IconButton>
            </div>
           </div>
           <div className="chat__body ">
            {/* <img src="/images/wallpaper.png" alt="wall"/> */}
               {messages.map(mes=>{
                const check=mes.name==state.user.displayName;
               return( <p className={`${check?"check__class":null}`}>
              
                 <span className={`chat__name`}>{mes.name}   
                 </span>
                 <p className={`chat__message ${check && "chat__reciever"} `}>
                
                     {mes.message}
                     
                 <span className="chat__timestamp">{
                     new Date(mes.timestamp?mes.timestamp.toDate():null).toUTCString()}</span>
                 </p> 
                  </p>
                 )
               })}
                 
           
               
            
           </div>
           <div className="chat__footer">
              <InsertEmoticon/>
               <form>
                  <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder="type a message" />
                  <button type="submit" onClick={sendMessage}>send Message</button>
               </form>
              <Mic/>
           </div>
        </div>
    )
}

export default Chat
