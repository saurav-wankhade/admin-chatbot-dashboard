import React from "react";
import "./ChatThread.css";

const messages = [
  {
    from: "client",
    text: "I bought a product from your store in November as a Christmas gift...",
    time: "1min",
  },
  {
    from: "you",
    text: "Let me just look into this for you, Luis.",
    time: "Seen · 1min",
  },
];

const ChatThread = () => {
  return (
    <div className="chat-thread">
      <div className="chat-header">
        <h3>Luis Easton</h3>
        <div className="chat-header-actions">
          <button className="dot">⋯</button>
          <button className="close-btn">✕ Close</button>
        </div>
      </div>

      <div className="messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message ${msg.from === "you" ? "sent" : "received"}`}
          >
            <div className="bubble">{msg.text}</div>
            <div className="timestamp">{msg.time}</div>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <textarea placeholder="Type your message…" />
        <button className="send-btn">Send</button>
      </div>
    </div>
  );
};

export default ChatThread;
