import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserName, setToken } from '../../store/actions/authActions';
import { login } from '../../api/authApi';
import { loginFormMockData } from '../../mock/authMock';
import { saveLoginInfo, clearLoginInfo, getLoginInfo } from '../../utils/storage';
import './LoginForm.css';

/**
 * 登录表单组件
 * 处理用户登录逻辑，包括：
 * 1. 表单验证
 * 2. 登录状态管理
 * 3. 路由跳转
 * 4. 错误处理
 * @returns {JSX.Element} 返回登录表单组件
 */
const LoginForm = () => {
    // Form 实例，用于表单操作
    const [form] = Form.useForm();
    // 加载状态
    const [loading, setLoading] = useState(false);
    // Redux dispatch
    const dispatch = useDispatch();
    // 路由导航
    const navigate = useNavigate();

    // 组件挂载时检查是否有保存的登录信息
    useEffect(() => {
        const savedInfo = getLoginInfo();
        if (savedInfo?.username) {
            form.setFieldsValue({
                username: savedInfo.username,
                remember: true
            });
            
            // 如果有token，直接恢复登录状态
            if (savedInfo.token) {
                dispatch(setToken(savedInfo.token));
                dispatch(setUserName(savedInfo.username));
            }
        }
    }, [form, dispatch]);

    /**
     * 处理表单提交
     * @param {Object} values - 表单值
     * @param {string} values.username - 用户名
     * @param {string} values.password - 密码
     * @param {boolean} values.remember - 是否记住登录
     * @param {boolean} values.allow - 是否同意协议
     */
    const onFinish = async (values) => {
        if (!values.allow) {
            message.error('请同意用户协议');
            return;
        }

        setLoading(true);
        try {
            const response = await login({
                username: values.username,
                password: values.password
            });
            
            const { username, token } = response.data;
            
            // 更新Redux状态
            dispatch(setToken(token));
            dispatch(setUserName(username));

            // 根据"记住登录"选项处理本地存储
            if (values.remember) {
                saveLoginInfo({ username, token });
            } else {
                clearLoginInfo();
            }

            message.success('登录成功');
            navigate('/dashboard');
        } catch (error) {
            message.error(error.message || '登录失败，请重试');
        } finally {
            setLoading(false);
        }
    };

    /**
     * 处理表单验证失败
     * @param {Object} errorInfo - 错误信息
     */
    const onFinishFailed = errorInfo => {
        console.log('表单验证失败:', errorInfo);
    };

    return (
        <Form
            form={form}
            className={'LoginFormStyle'}
            name="LoginForm"
            initialValues={loginFormMockData}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名' }]}
            >
                <Input
                    placeholder={'请输入用户名'}
                    prefix={<UserOutlined />}
                    aria-label="用户名输入框"
                />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
            >
                <Input.Password
                    placeholder={'请输入密码'}
                    prefix={<LockOutlined />}
                    aria-label="密码输入框"
                />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                label={null}
            >
                <Checkbox>记住登录</Checkbox>
            </Form.Item>

            <Form.Item
                name="allow"
                valuePropName="checked"
                label={null}
            >
                <Checkbox>同意用户协议</Checkbox>
            </Form.Item>

            <Form.Item label={null}>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    aria-label="登录按钮"
                >
                    登录
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;