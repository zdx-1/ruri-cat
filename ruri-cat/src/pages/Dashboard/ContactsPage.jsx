import React, { useState } from 'react';
import { List, Avatar, Card, Typography, Button, Tag } from 'antd';
import { UserOutlined, MessageOutlined } from '@ant-design/icons';
import TwoColumnLayout from '../../components/TwoColumnLayout/TwoColumnLayout';

const { Title, Text } = Typography;

/**
 * 联系人页面组件
 * 提供联系人列表和详细信息展示
 * 功能包括：
 * 1. 显示联系人列表
 * 2. 查看联系人详细信息
 * 3. 联系人在线状态
 * 4. 快速发起聊天
 */
const ContactsPage = () => {
    const [selectedContact, setSelectedContact] = useState(null);

    /**
     * 联系人信息卡片组件
     */
    const ContactInfo = ({ contact }) => (
        <Card>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <Avatar size={64} src={contact.avatar} />
                <Title level={4} style={{ marginTop: 16, marginBottom: 4 }}>
                    {contact.name}
                </Title>
                <Text type={contact.status === 'online' ? 'success' : 'secondary'}>
                    {contact.status === 'online' ? '在线' : '离线'}
                </Text>
            </div>
            
            <div style={{ marginBottom: 16 }}>
                {contact.tags.map(tag => (
                    <Tag key={tag} color="blue" style={{ margin: 4 }}>
                        {tag}
                    </Tag>
                ))}
            </div>

            <div style={{ marginBottom: 16 }}>
                <Text strong>部门：</Text>
                <Text>{contact.department}</Text>
            </div>
            
            <div style={{ marginBottom: 16 }}>
                <Text strong>邮箱：</Text>
                <Text>{contact.email}</Text>
            </div>
            
            <div style={{ marginBottom: 24 }}>
                <Text strong>电话：</Text>
                <Text>{contact.phone}</Text>
            </div>

            <Button 
                type="primary" 
                icon={<MessageOutlined />}
                block
            >
                发送消息
            </Button>
        </Card>
    );

    const ContactList = () => (
        <div style={{ height: '100%' }}>
            <div style={{ padding: '16px' }}>
                <Title level={4}>联系人列表</Title>
            </div>
            <List
                dataSource={mockContacts}
                renderItem={item => (
                    <List.Item
                        onClick={() => setSelectedContact(item)}
                        style={{
                            padding: '12px 24px',
                            cursor: 'pointer',
                            backgroundColor: selectedContact?.id === item.id ? '#e6f7ff' : 'transparent'
                        }}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} icon={<UserOutlined />} />}
                            title={item.name}
                            description={item.department}
                        />
                    </List.Item>
                )}
            />
        </div>
    );

    const EmptyContent = () => (
        <div style={{ 
            height: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            color: '#999' 
        }}>
            请选择一个联系人查看详细信息
        </div>
    );

    return (
        <TwoColumnLayout
            sider={<ContactList />}
            content={
                selectedContact ? 
                    <div style={{ padding: '24px' }}>
                        <ContactInfo contact={selectedContact} />
                    </div> : 
                    <EmptyContent />
            }
        />
    );
};

// 模拟数据
const mockContacts = [
    {
        id: 1,
        name: '张三',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
        email: 'zhangsan@example.com',
        phone: '13800138001',
        department: '研发部',
        status: 'online',
        tags: ['同事', '项目组']
    },
    {
        id: 2,
        name: '李四',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
        email: 'lisi@example.com',
        phone: '13800138002',
        department: '设计部',
        status: 'offline',
        tags: ['同事']
    }
];

export default ContactsPage;