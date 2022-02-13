import { Avatar } from '@material-ui/core'
import {React,useEffect,useState} from 'react'
import {NavLink} from "react-router-dom";
import "./SidebarChat.css";
import db from './Firebase'

const SidebarChat = ({addNewChat,id,name}) => {
    
    const [seed,setSeed]=useState();
    useEffect(()=>{
      setSeed(Math.floor(Math.random()*2000));
    },[])
    const createChat=()=>{
        const roomName=prompt("Enter the room name");
        if(roomName){
            db.collection('rooms').add({name:roomName})
        }
    }
     
    return !addNewChat ?(
        <NavLink to ={`/rooms/${id}`}>
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p></p>
            </div>
        </div>
        </NavLink>
    ):
    (<div onClick={createChat} className="sidebarChat">
        <h2>Add New Chat</h2>
    </div>
    );
    
}

export default SidebarChat
