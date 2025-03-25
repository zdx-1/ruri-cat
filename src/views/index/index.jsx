import { RouterData } from "../../data/routeData.jsx";
import {Button, Divider, FloatButton} from "antd";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import router from "../../router/index.jsx";

const IndexPage = () => {
    const [selectedRoute, setSelectedRoute] = useState(null);
    const navigate=useNavigate()
    return (
        <div style={{minHeight:'100vh', display: 'flex', height: '100%' }}>
            {/* 左侧路由按钮区域 */}
            <div style={{width: '200px', padding: '20px', backgroundColor: '#f0f2f5' }}>
                <Button
                    type="primary"
                    onClick={() => setSelectedRoute(null)}
                    style={{ width: '100%', marginBottom: '10px' }}
                >
                    返回首页
                </Button>
                {RouterData.filter(route => route.path !== '*' && route.path !=='/')
                    .map(route => (
                        <Button
                            key={route.path}
                            type="primary"
                            onClick={() => setSelectedRoute(route)}
                            style={{ width: '100%', margin: '8px 0' }}
                        >
                            {route.name}
                        </Button>
                    ))}
                <FloatButton.BackTop visibilityHeight={0} style={{
                    insetInlineStart: 30,
                }} />
            </div>

            {/* 右侧动态视图区域 */}
            <div style={{ flex: 1, padding: '20px' }}>
                {selectedRoute ? (
                    <div>
                        <h2>{selectedRoute.name}</h2>
                        <Divider onClick={() => navigate(selectedRoute.path)}>跳转至{selectedRoute.name}</Divider>
                        {/* 在这里动态渲染选中路由的内容 */}
                        {selectedRoute.element}
                    </div>
                ) : (
                    <div>欢迎来到首页</div>
                )}
            </div>
        </div>
    );
};

export default IndexPage;
