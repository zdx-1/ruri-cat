import React, { useState, useRef, useEffect } from 'react';
import { Input, Button, Avatar, Spin } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import './ChatWindow.css';

const ChatWindow = ({ chat, onSendMessage, loading }) => {
    const [message, setMessage] = useState('');
    const messagesEndRef = useRef(null);
    
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [chat?.messages]);

    const handleSend = () => {
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    if (!chat) {
        return (
            <div className="chat-window-empty">
                <p>请选择一个聊天</p>
            </div>
        );
    }

    return (
        <div className="chat-window">
            <div className="chat-header">
                <Avatar src={chat.avatar} />
                <span className="chat-name">{chat.name}</span>
            </div>
            
            <div className="messages-container">
                {chat.messages?.map((msg, index) => (
                    <div
                        key={index}
                        className={`message ${msg.isSelf ? 'self' : 'other'}`}
                    >
                        <Avatar
                            size="small"
                            src={msg.isSelf ? '/path/to/self-avatar.png' : chat.avatar}
                        />
                        <div className="message-content">
                            <p className="message-text">{msg.content}</p>
                            <span className="message-time">
                                {new Date(msg.timestamp).toLocaleTimeString()}
                            </span>
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="loading-messages">
                        <Spin />
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            
            <div className="chat-input">
                <Input.TextArea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="输入消息..."
                    autoSize={{ minRows: 1, maxRows: 4 }}
                />
                <Button
                    type="primary"
                    icon={<SendOutlined />}
                    onClick={handleSend}
                    disabled={!message.trim()}
                >
                    发送
                </Button>
            </div>
        </div>
    );
};

export default ChatWindow;