import React from 'react';
import chat from '../assets/chat.svg'
const ChatSupport = () => {
    return (
        <div className='fixed bottom-4 right-4 bg-white border-2 border-[#FF0000] rounded-xl max-w-72 p-3 shadow-lg z-50'>
            <div className='flex items-center gap-3'>
                <img src={chat} className='w-12 h-12 mb-14'/>
                <div className='flex flex-col gap-1'>
                    <div className='font-bold text-[#FF0000] text-sm'>Do You need help?</div>
                    <div className='text-[#FF0000] text-xs'>Talk with our live assistant or support team</div>
                    <button className='bg-[#FF0000] text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 active:scale-95 transition-all duration-200 text-sm self-end'>Start Chat</button>
                </div>
            </div>
        </div>
    );
};

export default ChatSupport;