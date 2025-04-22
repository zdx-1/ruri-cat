import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { username, token } = useSelector(state => state.auth);
    
    // 验证用户名和token都存在
    if (!username || !token) {
        return <Navigate to="/login" replace />;
    }
    
    return children;
}

export default PrivateRoute;