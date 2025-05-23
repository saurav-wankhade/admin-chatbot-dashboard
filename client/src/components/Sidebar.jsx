import React from "react";
import "./Sidebar.css";

const conversations = [
  { name: "Luis · Github", message: "Hey! I have a question...", time: "45m" },
  { name: "Ivan · Nike", message: "Hi there, I have a qu...", time: "3m", unread: true },
  { name: "Lead from New York", message: "Good morning, let me...", time: "40m" },
  { name: "Booking API problems", message: "Bug report", time: "45m" },
  { name: "Miracle · Exemplary Bank", message: "Hey there, I’m here to...", time: "45m" },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Your inbox</h2>
      <div className="tabs">
        <span className="active-tab">5 Open</span>
        <span>Waiting longest</span>
      </div>
      <ul className="conversation-list">
        {conversations.map((c, i) => (
          <li key={i} className={`conversation ${c.unread ? "unread" : ""}`}>
            <div className="conversation-name">{c.name}</div>
            <div className="conversation-info">
              <span className="message-preview">{c.message}</span>
              <span className="time">{c.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
