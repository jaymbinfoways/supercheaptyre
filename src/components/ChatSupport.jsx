import React, { useState } from 'react';
import chat from '/home/chat.svg'
import { CgCompressRight } from "react-icons/cg";
import { FiPaperclip, FiMic, FiSend, FiX } from "react-icons/fi";

const ChatSupport = () => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi! How may I help you today?",
            sender: "agent",
            timestamp: "01:15 PM"
        },
        {
            id: 2,
            text: "Hi! Can you tell me more about your products?",
            sender: "user",
            timestamp: "01:15 PM"
        }
    ]);

    const handleSendMessage = () => {
        if (message.trim()) {
            const newMessage = {
                id: messages.length + 1,
                text: message,
                sender: "user",
                timestamp: new Date().toLocaleTimeString('en-US', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    hour12: true 
                })
            };
            setMessages([...messages, newMessage]);
            setMessage('');
        }
    };

    if (isMinimized) {
        return (
            <button
                type="button"
                aria-label="Open chat"
                onClick={() => setIsMinimized(false)}
                className='fixed bottom-4 right-4 w-14 h-14 rounded-full bg-[#FF0000] shadow-lg z-50 grid place-items-center focus:outline-none focus:ring-2 focus:ring-white/70 transition-all duration-300 hover:scale-110'
            >
                <img src={chat} alt="Chat" className='w-7 h-7' />
            </button>
        );
    }

    if (isChatOpen) {
        return (
            <div className='fixed bottom-4 right-4 bg-white border-2 border-gray-200 rounded-xl max-w-80 w-80 shadow-lg z-50 overflow-hidden transition-all duration-300 ease-in-out'>
                {/* Header */}
                <div className='bg-[#FF0000] text-white p-3 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <img src={chat} alt="Chat" className='w-6 h-6' />
                        <span className='font-semibold text-sm'>Live Chat</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <button
                            onClick={() => setIsChatOpen(false)}
                            className='text-white hover:text-gray-200 transition-colors'
                            aria-label='Close chat'
                        >
                            <FiX className='w-5 h-5' />
                        </button>
                        <CgCompressRight
                            aria-label='Minimize chat'
                            onClick={() => setIsMinimized(true)}
                            className='w-5 h-5 text-white cursor-pointer hover:rotate-90 transition-all duration-200'
                        />
                    </div>
                </div>

                {/* Chat Messages */}
                <div className='h-80 overflow-y-auto p-3 bg-gray-50'>
                    {messages.map((msg) => (
                        <div key={msg.id} className={`mb-3 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`flex items-start gap-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                <div className='w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center'>
                                    <img src={chat} alt="Avatar" className='w-6 h-6' />
                                </div>
                                <div className={`rounded-lg p-3 ${msg.sender === 'user' ? 'bg-[#FF0000] text-white' : 'bg-gray-200 text-gray-800'}`}>
                                    <p className='text-sm'>{msg.text}</p>
                                    <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-red-100' : 'text-gray-500'}`}>
                                        {msg.timestamp}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Bar */}
                <div className='bg-gray-100 p-3 flex items-center gap-2'>
                    <button className='text-gray-500 hover:text-gray-700 transition-colors'>
                        <FiPaperclip className='w-5 h-5' />
                    </button>
                    <input
                        type="text"
                        placeholder="Type a Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        className='flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm'
                    />
                    <button className='text-gray-500 hover:text-gray-700 transition-colors'>
                        <FiMic className='w-5 h-5' />
                    </button>
                    <button 
                        onClick={handleSendMessage}
                        className='bg-[#FF0000] text-white p-2 rounded-lg hover:bg-red-600 transition-colors'
                    >
                        <FiSend className='w-4 h-4' />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className='fixed bottom-4 right-4 bg-[#FF0000] border-2 border-[#FF0000] rounded-xl max-w-72 w-72 p-0 shadow-lg z-50 overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-[1.02]'>
            <CgCompressRight
                aria-label='Minimize chat'
                onClick={() => setIsMinimized(true)}
                className='w-6 h-6 rounded-full bg-white/20 absolute top-2 right-2 hover:bg-white/30 text-white grid place-items-center cursor-pointer transition-all duration-200 hover:rotate-90'
            >
            </CgCompressRight>

            {/* Content */}
            <div className='p-3 transition-all duration-300'>
                <div className='flex items-center gap-3'>
                    <img src={chat} alt="Chat" className='w-12 h-12' />
                    <div className='flex flex-col gap-1'>
                        <div className='font-bold text-[#FFFFFF] text-sm'>Do You need help?</div>
                        <div className='text-[#FFFFFF] text-xs'>Talk with our live assistant or support team</div>
                        <button 
                            onClick={() => setIsChatOpen(true)}
                            className='bg-[#FFFFFF] text-[#FF0000] font-semibold py-2 px-4 rounded-md hover:bg-red-50 active:scale-95 transition-all duration-200 text-sm self-end'
                        >
                            Start Chat
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatSupport;
