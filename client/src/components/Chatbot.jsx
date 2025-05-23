import React, { useState } from "react";
import "./Chatbot.css";
 
const responses = [
  {
    keywords: ["hi", "hello", "hey"],
    reply: "Hello! How can I assist you today?",
  },
  {
    keywords: ["refund", "money back"],
    reply: "To get a refund, go to your orders and select 'Request refund'.",
  },
  {
    keywords: ["contact", "support"],
    reply: "You can reach our support team through the help center or chat live.",
  },
  {
    keywords: ["return"],
    reply: "We accept returns within 30 days of purchase.",
  },
  {
    keywords: ["shipping", "delivery"],
    reply: "Shipping typically takes 3–5 business days.",
  },
  {
    keywords: ["international"],
    reply: "Yes, we ship to most countries worldwide.",
  },
  {
    keywords: ["change address"],
    reply: "Yes, you can update your address before it's shipped.",
  },
  {
    keywords: ["payment", "paypal"],
    reply: "We accept all major credit cards, PayPal, and Apple Pay.",
  },
  {
    keywords: ["track"],
    reply: "Track your order in the 'Orders' section of your account.",
  },
];

const ChatBotPanel = () => {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false); 
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi, I’m Fin AI Copilot. Ask me anything!" }
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
  
    const userMessage = input;
    setMessages(prev => [...prev, { from: "user", text: userMessage }]);
    setInput("");
    setIsTyping(true); // Show typing indicator
  
    setTimeout(() => {
      const lower = userMessage.toLowerCase();
      const matched = responses.find(({ keywords }) =>
        keywords.some(kw => lower.includes(kw))
      );
  
      const reply = matched
        ? matched.reply
        : "I'm not sure about that. Try rephrasing!";
  
      setMessages(prev => [...prev, { from: "bot", text: reply }]);
      setIsTyping(false); // Hide typing indicator
    }, 1200); // Simulated typing delay
  };
  

  return (
    <div className="chatbot-panel">
  <div className="chatbot-header">
    AI Copilot <span style={{ color: '#999', marginLeft: '8px' }}>Details</span>
  </div>

  <div className="chatbot-body">
    {[...messages].reverse().map((msg, i) => (
      <div key={i} className={`chatbot-message ${msg.from}`}>
        {msg.text}
      </div>
    ))}
  </div>

  {/* ✅ Typing animation ABOVE input, like WhatsApp */}
  {isTyping && (
    <div className="typing-indicator-box">
      <div className="chatbot-message bot typing-indicator">
        Fin AI is typing<span className="dot one">.</span>
        <span className="dot two">.</span>
        <span className="dot three">.</span>
      </div>
    </div>
  )}

  <div className="chatbot-input-wrapper">
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Ask a question..."
    />
    <button onClick={handleSend}>Send</button>
  </div>
</div>
 
  );
};

export default ChatBotPanel;
