import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import Dashboard from './pages/Dashboard/DashboardComponent';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ChatPage from './pages/Dashboard/ChatPage';
import ContactsPage from './pages/Dashboard/ContactsPage';
import SpacesPage from './pages/Dashboard/SpacesPage';
import AIChatPage from './pages/Dashboard/AIChatPage';
import BlogPage from './pages/Dashboard/BlogPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        >
          <Route index element={<Navigate to="chats" replace />} />
          <Route path="chats" element={<ChatPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="spaces" element={<SpacesPage />} />
          <Route path="ai-chat" element={<AIChatPage />} />
          <Route path="blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
