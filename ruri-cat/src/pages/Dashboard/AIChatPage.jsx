import React, { useState } from 'react';
import { Button, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ChatList from '../../components/ChatList/ChatList';
import ChatWindow from '../../components/ChatWindow/ChatWindow';
import TwoColumnLayout from '../../components/TwoColumnLayout/TwoColumnLayout';

/**
 * AI聊天页面组件
 * 提供与多个AI模型的对话功能
 * 特性：
 * 1. 支持多个AI对话会话
 * 2. 可切换不同AI模型
 * 3. 新建会话功能
 * 4. 实时对话界面
 */
const AIChatPage = () => {
    const [selectedChat, setSelectedChat] = useState(null);
    const [loading, setLoading] = useState(false);
    const [chats, setChats] = useState(mockAIChats);

    const ChatListWithHeader = () => (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '16px', borderBottom: '1px solid #f0f0f0' }}>
                <Button 
                    type="primary" 
                    icon={<PlusOutlined />}
                    onClick={createNewChat}
                    block
                >
                    新建对话
                </Button>
            </div>
            <div style={{ flex: 1, overflow: 'hidden' }}>
                <ChatList
                    chats={chats}
                    onChatSelect={handleChatSelect}
                    selectedChatId={selectedChat?.id}
                />
            </div>
        </div>
    );

    const ChatContent = () => (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {selectedChat && (
                <div style={{ padding: '16px', borderBottom: '1px solid #f0f0f0' }}>
                    <Select
                        value={selectedChat.aiModel}
                        onChange={handleModelChange}
                        style={{ width: 200 }}
                        options={aiModels}
                    />
                </div>
            )}
            <div style={{ flex: 1 }}>
                <ChatWindow
                    chat={selectedChat}
                    onSendMessage={handleSendMessage}
                    loading={loading}
                />
            </div>
        </div>
    );

    // 处理聊天选择
    const handleChatSelect = (chat) => {
        setSelectedChat(chat);
    };

    // 处理消息发送
    const handleSendMessage = (message) => {
        if (selectedChat) {
            setLoading(true);
            // 模拟AI响应
            setTimeout(() => {
                const updatedChat = {
                    ...selectedChat,
                    messages: [
                        ...(selectedChat.messages || []),
                        {
                            content: message,
                            timestamp: new Date().getTime(),
                            isSelf: true
                        },
                        {
                            content: `这是来自 ${selectedChat.aiModel} 的回复：\n我理解了你的问题...`,
                            timestamp: new Date().getTime() + 1000,
                            isSelf: false
                        }
                    ]
                };
                setSelectedChat(updatedChat);
                
                // 更新聊天列表中的最新消息
                const updatedChats = chats.map(chat => 
                    chat.id === selectedChat.id ? {
                        ...chat,
                        lastMessage: message
                    } : chat
                );
                setChats(updatedChats);
                
                setLoading(false);
            }, 1500);
        }
    };

    // 创建新对话
    const createNewChat = () => {
        const newChat = {
            id: `ai-${chats.length + 1}`,
            name: '新的对话',
            avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${chats.length + 1}`,
            lastMessage: '开始新的对话',
            unreadCount: 0,
            aiModel: 'gpt-3.5-turbo',
            messages: [{
                content: '你好！我是AI助手，让我们开始新的对话吧。',
                timestamp: new Date().getTime(),
                isSelf: false
            }]
        };
        setChats([newChat, ...chats]);
        setSelectedChat(newChat);
    };

    // 切换AI模型
    const handleModelChange = (value) => {
        if (selectedChat) {
            const updatedChat = {
                ...selectedChat,
                aiModel: value,
                messages: [
                    ...selectedChat.messages,
                    {
                        content: `已切换到 ${value} 模型`,
                        timestamp: new Date().getTime(),
                        isSelf: false
                    }
                ]
            };
            setSelectedChat(updatedChat);

            // 更新聊天列表
            const updatedChats = chats.map(chat =>
                chat.id === selectedChat.id ? updatedChat : chat
            );
            setChats(updatedChats);
        }
    };

    return (
        <TwoColumnLayout
            sider={<ChatListWithHeader />}
            content={<ChatContent />}
        />
    );
};

// AI模型选项
const aiModels = [
    { value: 'gpt-3.5-turbo', label: 'ChatGPT 3.5' },
    { value: 'gpt-4', label: 'ChatGPT 4' },
    { value: 'claude-2', label: 'Claude 2' },
    { value: 'gemini-pro', label: 'Gemini Pro' }
];

// 模拟数据
const mockAIChats = [
    {
        id: 'ai-1',
        name: 'ChatGPT对话',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=1',
        lastMessage: '有什么我可以帮你的？',
        unreadCount: 0,
        aiModel: 'gpt-3.5-turbo',
        messages: [
            {
                content: '你好！我是ChatGPT，有什么我可以帮你的？',
                timestamp: new Date().setMinutes(new Date().getMinutes() - 30),
                isSelf: false
            }
        ]
    },
    {
        id: 'ai-2',
        name: 'Claude对话',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=2',
        lastMessage: '让我们开始对话吧',
        unreadCount: 0,
        aiModel: 'claude-2',
        messages: [
            {
                content: '你好！我是Claude，让我们开始对话吧。',
                timestamp: new Date().setHours(new Date().getHours() - 1),
                isSelf: false
            }
        ]
    }
];

export default AIChatPage;