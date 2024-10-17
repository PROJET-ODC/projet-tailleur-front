import Chat from "../components/chat/Chat";
import useRemoveScripts from "../hooks/useRemoveScripts";
import useScriptLoader from "../hooks/useScriptLoader";
import scriptUrls from "../utils/scriptsUrl";

const ChatPage = () => {
  useRemoveScripts();
  useScriptLoader(scriptUrls);
  return <Chat />;
};

export default ChatPage;
