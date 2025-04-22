import React from 'react';
import { Result } from 'antd';

const SpacesPage = () => {
    return (
        <Result
            status="403"
            title="功能开发中"
            subTitle="这个功能正在开发中，敬请期待..."
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}
        />
    );
};

export default SpacesPage;