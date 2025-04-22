import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import './TwoColumnLayout.css';

const { Sider, Content } = Layout;

/**
 * 通用双栏布局组件
 * 提供左侧边栏和右侧内容区的标准布局
 * 常用于列表-详情、聊天列表-对话等场景
 * 
 * @param {Object} props - 组件属性
 * @param {React.ReactNode} props.sider - 左侧边栏内容
 * @param {React.ReactNode} props.content - 右侧主要内容
 * @param {number} [props.siderWidth=300] - 左侧边栏宽度
 * @param {string} [props.className] - 自定义类名
 * @returns {JSX.Element}
 */
const TwoColumnLayout = ({ 
    sider, 
    content, 
    siderWidth = 300,
    className = ''
}) => {
    return (
        <Layout className={`two-column-layout ${className}`}>
            <Sider
                width={siderWidth}
                className="two-column-sider"
            >
                {sider}
            </Sider>
            <Content className="two-column-content">
                {content}
            </Content>
        </Layout>
    );
};

TwoColumnLayout.propTypes = {
    sider: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    siderWidth: PropTypes.number,
    className: PropTypes.string
};

export default TwoColumnLayout;