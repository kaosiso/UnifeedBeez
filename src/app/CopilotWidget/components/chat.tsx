'use client';
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import MessageInControl from './MessageInControl';
import BusinessPlanCard from './BusinessPlanCard';
import { chatMessages, ChatMessageData } from './data';
import { users } from './users';
import Image from 'next/image';
interface ChatProps {
  currentSectionLabel: string;
}

const Chat: React.FC<ChatProps> = ({ currentSectionLabel }) => {
  const [messages, setMessages] = useState<ChatMessageData[]>(chatMessages);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage: ChatMessageData = {
      id: Date.now(),
      type: 'text',
      sender: 'user',
      text: input.trim(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput('');
  };

  const handleChoice = (choice: string) => {
    const newReply: ChatMessageData = {
      id: Date.now() + 1,
      type: 'text',
      sender: 'user',
      text: choice,
    };
    setMessages((prev) => [...prev, newReply]);
  };

  return (
    <div
      className="flex flex-col flex-grow bg-[#f8f8f8] rounded-3xl overflow-hidden relative mr-12"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, #ebebeb 0%, transparent 55%),
          radial-gradient(circle at 70% 60%, #ebebeb 0%, transparent 60%),
          radial-gradient(circle at 40% 80%, #ebebeb 0%, transparent 65%)
        `,
        backgroundBlendMode: 'normal',
      }}
    >
      <div className="flex-grow p-4  px-8 overflow-y-auto space-y-6">
        <div className="mb-6">
          <MessageInControl />
        </div>
        <div className="mt-10"> {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {/* Profile Avatar */}
            {message.sender === 'copilot' && (
              <div className="bg-white rounded-full p-2 mr-2 border-2 border-gray-300">
                <Image src="icons/logo-bee.svg" alt="Bee Logo" className="w-7 h-auto" />
              </div>
            )}
            {message.sender === 'user' && (
              <Image src="/images/avatar.png" alt="User" className="w-10 h-10 rounded-full ml-3 order-last" />
            )}


            {/* Message Bubble */}
            {message.type === 'content' && message.content && (
              <div className={`max-w-xl ${message.sender === 'copilot' ? 'mr-2' : 'ml-2'}`}>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-[#aa8d0f] via-[#636b19] to-[#305221] text-white p-4 rounded-xl shadow-lg max-w-xl">
                    <p className="text-base font-normal">{message.content.title}</p>
                    <p className="text-base mt-1">{message.content.text}</p>
                  </div>

                  {message.content.plan && <BusinessPlanCard plan={message.content.plan} />}
                </div>
              </div>
            )}

            {message.type === 'choice' && (
              <div
                className={`max-w-xl flex flex-col ${message.sender === 'copilot' ? 'items-start' : 'items-end'
                  } space-y-2`}
              >
                <button
                  onClick={() => handleChoice(message.text!)}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-150"
                >
                  {message.text}
                </button>
                <div className="flex space-x-2">
                  {message.choices?.map((choice, index) => (
                    <button
                      key={index}
                      onClick={() => handleChoice(choice)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg transition"
                    >
                      {choice}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {message.type === 'text' && message.text && (
              <div
                className={`max-w-xl bg-white p-3 rounded-xl shadow-md ${message.sender === 'copilot' ? 'mr-2' : 'ml-2'
                  }`}
              >
                {message.text}
              </div>
            )}
          </div>
        ))}</div>
      </div>

      {/* Input Area */}
      <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-200 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="ml-3 p-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition disabled:opacity-50"
          disabled={!input.trim()}
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default Chat;
