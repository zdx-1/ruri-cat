import {Button} from "antd";
import {useNavigate} from "react-router-dom";

const NotFoundPage = () => {
    const navigate=useNavigate()
    return(
        <div>
            <Button type="primary" onClick={() => navigate('/')} block>页面不存在，点击后回到首页</Button>
        </div>
    );
}
export default NotFoundPage
