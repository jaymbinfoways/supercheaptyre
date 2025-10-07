import React, { useState, useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import chat from '/home/chat.svg'
import { CgCompressRight } from "react-icons/cg";
import { tawkConfig } from '../config/tawkConfig';

const ChatSupport = () => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const tawkMessengerRef = useRef();

    const handleMinimize = () => {
        if (tawkMessengerRef.current) {
            tawkMessengerRef.current.minimize();
        }
        setIsMinimized(true);
    };

    const handleOpenChat = () => {
        setIsChatOpen(true);
        // Tawk.to will handle opening the chat widget
    };

    const onLoad = () => {
        console.log('Tawk.to chat widget loaded successfully!');
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
                            <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <CgCompressRight
                            aria-label='Minimize chat'
                            onClick={handleMinimize}
                            className='w-5 h-5 text-white cursor-pointer hover:rotate-90 transition-all duration-200'
                        />
                    </div>
                </div>

                {/* Tawk.to Chat Widget Container */}
                <div className='h-80 bg-gray-50'>
                    <TawkMessengerReact
                        propertyId={tawkConfig.propertyId}
                        widgetId={tawkConfig.widgetId}
                        ref={tawkMessengerRef}
                        onLoad={onLoad}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className='fixed bottom-4 right-4 bg-[#FF0000] border-2 border-[#FF0000] rounded-xl max-w-72 w-72 p-0 shadow-lg z-50 overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-[1.02]'>
            <CgCompressRight
                aria-label='Minimize chat'
                onClick={handleMinimize}
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
                            onClick={handleOpenChat}
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
