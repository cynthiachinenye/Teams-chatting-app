import {ChatEngine} from "react-chat-engine";
import './App.css';
import ChatFeed from "./Components/ChatFeed";
import LoginForm from "./Components/LoginForm";

const App = () =>{
    if(!localStorage.getItem('username')) return<LoginForm/>
    return(
        <ChatEngine
        height="100vh"
        projectID="7f1e2f07-abeb-4efc-977d-63150bf3e685"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}

        />
    )
}
export default App