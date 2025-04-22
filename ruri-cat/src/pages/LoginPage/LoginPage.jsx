import React from 'react';
import { Card } from 'antd';
import MainLayout from '../../components/MainLayout/MainLayout';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

/**
 * 登录页面组件
 * 使用 MainLayout 作为页面布局
 * 包含：
 * 1. 页面标题
 * 2. 登录卡片
 * 3. 登录表单
 * 
 * @example
 * // 在路由中使用
 * <Route path="/login" element={<LoginPage />} />
 * 
 * @returns {JSX.Element} 返回登录页面组件
 */
const LoginPage = () => {
    return (
        <MainLayout headerContent="登录">
            <Card 
                className={'loginCardStyle'}
                aria-label="登录卡片"
            >
                <LoginForm />
            </Card>
        </MainLayout>
    );
};

export default LoginPage;
