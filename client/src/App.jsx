import React from "react";
import Sidebar from "./components/Sidebar";
import ChatThread from "./components/ChatThread";
import ChatBotPanel from "./components/Chatbot";
import "./App.css";

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <ChatThread />
      <ChatBotPanel />
    </div>
  );
}

export default App;
