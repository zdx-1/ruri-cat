import React from 'react';
import { List, Avatar } from 'antd';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import './ChatList.css';

const ChatList = ({ chats, onChatSelect, selectedChatId, width = 300 }) => {
    return (
        <ResizableBox
            width={width}
            height={Infinity}
            minConstraints={[200, Infinity]}
            maxConstraints={[500, Infinity]}
            axis="x"
            className="chat-list-container"
        >
            <List
                className="chat-list"
                itemLayout="horizontal"
                dataSource={chats}
                renderItem={(chat) => (
                    <List.Item
                        className={`chat-item ${selectedChatId === chat.id ? 'selected' : ''}`}
                        onClick={() => onChatSelect(chat)}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={chat.avatar} />}
                            title={chat.name}
                            description={chat.lastMessage}
                        />
                        {chat.unreadCount > 0 && (
                            <div className="unread-count">{chat.unreadCount}</div>
                        )}
                    </List.Item>
                )}
            />
        </ResizableBox>
    );
};

export default ChatList;