import { useEffect,useRef } from "react";
import { connectionWithSocket } from "./utils/wssConnection/wssConnection";
import {Route,BrowserRouter as Router, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
function App() {
    const firstRenderRef = useRef(true);
    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        connectionWithSocket();
    },[]);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
