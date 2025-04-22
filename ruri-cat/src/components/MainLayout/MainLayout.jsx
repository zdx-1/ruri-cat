import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import './MainLayout.css';

const { Header, Footer, Content } = Layout;

/**
 * 主布局组件
 * @param {Object} props - 组件属性
 * @param {ReactNode} props.children - 子组件内容
 * @param {string} props.headerContent - 头部显示的文本内容
 * @returns {JSX.Element} 返回布局组件
 */
const MainLayout = ({ headerContent, children }) => {
    return (
        <Layout className={'layoutStyle'}>
            <Header className={'headerStyle'}>{headerContent}</Header>
            <Content className={'contentStyle'}>
                {children}
            </Content>
            <Footer className={'footerStyle'}>copyright@2025 by zdx-1</Footer>
        </Layout>
    );
};

MainLayout.propTypes = {
    headerContent: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default MainLayout;