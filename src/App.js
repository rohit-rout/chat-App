import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
// import { useState } from "react";
  
import "./App.css"
import Chat from "./Chat"
import Sidebar from "./Sidebar"
import Login from "./Login";
import { useStateValue } from "./StateProvider";
function App() {
 const [{user},dispatch] =useStateValue();
// const [user,setUser]=useState(1);

  return (
   <div className="app">
    
    
     {!user?(<Login/>):(  <div className="app__body">
     <Router>
      <Switch>

      <Route  path="/rooms/:roomid">
      <Sidebar/>
      <Chat/>
      </Route>
      
      <Route path="/"> 
      <Sidebar/>
      </Route>
     
      </Switch>
   </Router></div>)}
    
     </div>
   
  );
}

export default App;
