import Chat from "../components/chat/Chat";
import useScriptLoader from "../hooks/useScriptLoader";
import scriptUrls from "../utils/scriptsUrl";

const ChatPage = () =>{
    useScriptLoader(scriptUrls);
    return (
   <Chat/>
    )
}

export default ChatPage;