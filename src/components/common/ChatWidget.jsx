// ChatWidget.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  FiX,
  FiArrowLeft,
  FiPaperclip,
  FiSend,
} from 'react-icons/fi';
import logo from '../../images/Sage/logo-1.png'; // ← your hexagon logo

// Initial bot prompts
const INITIAL_BOT_MSGS = [
  'Need some help, got a question or want to chat? 👇',
  'What are you looking for?',
];

// Static option buttons
const OPTIONS = [
  'I want to book a demo',
  'I want to chat with sales',
  'I want to learn about RealTalk',
  'I have a support request',
];

// 20 standard canned replies
const CANNED = [
  'Hello! How can I help you today?',
  'Sure, I’d be happy to assist with that.',
  'Could you please provide more details?',
  'Thanks for sharing that.',
  'I’ll look into that for you.',
  'That’s interesting!',
  'Let me check and get back to you.',
  'Absolutely!',
  'I understand.',
  'Please hold on a moment.',
  'Can you clarify your request?',
  'Certainly!',
  'Here is the information you requested.',
  'I’m not sure I understand. Could you elaborate?',
  'Great question!',
  'I’ll need to consult my resources on that.',
  'One moment please.',
  'Thank you for your patience.',
  'I appreciate the feedback!',
  'Is there anything else I can help you with?',
];

// Helper to format HH:MM AM/PM
function formatTime(date = new Date()) {
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [showOptions, setShowOptions] = useState(true);
  const [messages, setMessages] = useState(
    INITIAL_BOT_MSGS.map((txt) => ({
      text: txt,
      fromUser: false,
      time: formatTime(),
    }))
  );
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Reset to initial state
  const resetChat = () => {
    setShowOptions(true);
    setMessages(
      INITIAL_BOT_MSGS.map((txt) => ({
        text: txt,
        fromUser: false,
        time: formatTime(),
      }))
    );
  };

  // When an option button is clicked
  const handleOption = (opt) => {
    const userMsg = { text: opt, fromUser: true, time: formatTime() };
    const botReplies = [
      'Great, we would love to help! 😊',
      'Please let me get some info from you in case we get disconnected',
      'What is your name?',
    ].map((t) => ({ text: t, fromUser: false, time: formatTime() }));

    setMessages((prev) => [...prev, userMsg, ...botReplies]);
    setShowOptions(false);
  };

  // When user sends free text
  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { text: input, fromUser: true, time: formatTime() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    // pick a random canned response
    const botMsg = CANNED[Math.floor(Math.random() * CANNED.length)];
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: botMsg, fromUser: false, time: formatTime() },
      ]);
    }, 500);
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-2 z-50">
      {/* Collapsed bubble + icon */}
      {!isOpen && (
        <>
          {showBubble && (
            <div className="relative bg-white border border-purple-600 rounded-full px-6 py-3 max-w-xs">
              {/* logo as avatar */}
              {/* <img
                src={logo}
                alt="Agent"
                className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-2 border-white"
              /> */}
              <button
                onClick={() => setShowBubble(false)}
                className="absolute -top-2 -right-2 bg-gray-200 rounded-full p-1 hover:bg-gray-300 transition"
              >
                <FiX className="w-4 h-4 text-gray-600" />
              </button>
              <p className="text-sm text-gray-700 text-center">
                Need some help, got a question or want to chat? 👇
              </p>
            </div>
          )}

          <button
            onClick={() => {
              setIsOpen(true);
              setShowBubble(true);
            }}
            className="transition"
          >
            <img src={logo} alt="Chat" className="w-16 h-16" />
          </button>
        </>
      )}

      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="w-96 bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col h-[40rem]">
          {/* Header */}
          <div className="bg-purple-600 flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  resetChat();
                  setShowOptions(true);
                }}
              >
                <FiArrowLeft className="w-5 h-5 text-white" />
              </button>
              <div className="relative">
                <img
                  src={logo}
                  alt="Agent"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <span className="absolute bottom-0 right-0 block w-2 h-2 bg-green-400 rounded-full border-2 border-white" />
              </div>
              <span className="text-white font-medium">Amelia</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1">
              <FiX className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="px-4 py-3 flex-1 overflow-y-auto space-y-3 overflow-scroll">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  m.fromUser ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`text-sm rounded-lg px-3 py-2 inline-block ${
                    m.fromUser
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-100 text-gray-800'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-xs text-gray-500 mt-1">
                  {m.time}
                </span>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Options or Input Bar */}
          {showOptions ? (
            <div className="px-4 pb-4 space-y-2">
              {OPTIONS.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleOption(opt)}
                  className="w-full text-purple-600 text-sm border border-purple-600 rounded-full py-2 hover:bg-purple-50 transition"
                >
                  {opt}
                </button>
              ))}
            </div>
          ) : (
            <div className="px-4 py-3 border-t border-gray-200 flex items-center space-x-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                type="text"
                placeholder="Write a message"
                className="flex-1 text-sm placeholder-gray-400 bg-white border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button>
                <FiPaperclip className="w-5 h-5 text-gray-400 hover:text-gray-600" />
              </button>
              <button onClick={handleSend}>
                <FiSend className="w-5 h-5 text-purple-600 hover:text-purple-800" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
