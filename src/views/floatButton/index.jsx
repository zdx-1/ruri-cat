import {FloatButton} from "antd";
import {CustomerServiceOutlined, QuestionCircleOutlined} from "@ant-design/icons";

const FloatButtonPage = () => {
    return (<>
        <div>
            <FloatButton onClick={() => console.log('onClick')} />
        </div>
            <div>
                <FloatButton
                    icon={<QuestionCircleOutlined/>}
                    type="primary"
                    style={{
                        insetInlineEnd: 24,
                    }}
                />
                <FloatButton
                    icon={<QuestionCircleOutlined/>}
                    type="default"
                    style={{
                        insetInlineEnd: 94,
                    }}
                /></div>
        <FloatButton
            shape="circle"
            type="primary"
            style={{
                insetInlineEnd: 94,
            }}
            icon={<CustomerServiceOutlined />}
        />
        <FloatButton
            shape="square"
            type="primary"
            style={{
                insetInlineEnd: 24,
            }}
            icon={<CustomerServiceOutlined />}
        />
        </>);
}
export default FloatButtonPage
