import React, { useState } from 'react';
import ChatList from '../../components/ChatList/ChatList';
import ChatWindow from '../../components/ChatWindow/ChatWindow';
import TwoColumnLayout from '../../components/TwoColumnLayout/TwoColumnLayout';

/**
 * 聊天页面组件
 * 提供聊天列表和聊天窗口的功能
 * 支持：
 * 1. 显示聊天列表
 * 2. 选择聊天对象
 * 3. 发送和接收消息
 * 4. 加载历史消息
 */
const ChatPage = () => {
    const [selectedChat, setSelectedChat] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChatSelect = (chat) => {
        setSelectedChat(chat);
    };

    const handleSendMessage = (message) => {
        if (selectedChat) {
            setLoading(true);
            setTimeout(() => {
                const updatedChat = {
                    ...selectedChat,
                    messages: [
                        ...(selectedChat.messages || []),
                        {
                            content: message,
                            timestamp: new Date().getTime(),
                            isSelf: true
                        }
                    ]
                };
                setSelectedChat(updatedChat);
                setLoading(false);
            }, 500);
        }
    };

    return (
        <TwoColumnLayout
            sider={
                <ChatList
                    chats={mockChats}
                    onChatSelect={handleChatSelect}
                    selectedChatId={selectedChat?.id}
                />
            }
            content={
                <ChatWindow
                    chat={selectedChat}
                    onSendMessage={handleSendMessage}
                    loading={loading}
                />
            }
        />
    );
};

// 模拟数据
const mockChats = [
    {
        id: 1,
        name: '张三',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
        lastMessage: '周末一起打球？',
        unreadCount: 2,
        messages: [
            {
                content: '你好！',
                timestamp: new Date().setMinutes(new Date().getMinutes() - 30),
                isSelf: false
            },
            {
                content: '周末一起打球？',
                timestamp: new Date().setMinutes(new Date().getMinutes() - 25),
                isSelf: false
            }
        ]
    },
    {
        id: 2,
        name: '李四',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
        lastMessage: '项目进展如何？',
        unreadCount: 0,
        messages: [
            {
                content: '项目进展如何？',
                timestamp: new Date().setHours(new Date().getHours() - 2),
                isSelf: false
            }
        ]
    }
];

export default ChatPage;