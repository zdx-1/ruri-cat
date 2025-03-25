import {Button, ConfigProvider, Divider, Flex, Space, Tooltip,Radio,Dropdown } from "antd";
import {createStyles, useResponsive} from 'antd-style';
import {AntDesignOutlined ,SyncOutlined , PoweroffOutlined ,SearchOutlined ,DownloadOutlined } from '@ant-design/icons';
import {useState} from "react";

const ButtonPage = () => {
    const {xxl} = useResponsive();
    const [position, setPosition] = useState('end');
    const [size, setSize] = useState('large'); // default is 'middle'
    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 3000);
    };
    const { styles } = useStyle();
    return (<>
        <Space direction="vertical" size="middle" style={{width: '100%'}}>
            <Divider>语法糖</Divider>
            <Flex gap="small" wrap>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </Flex>

            <Divider>语法与变体</Divider>
            <ConfigProvider componentSize={xxl ? 'middle' : 'small'}>
                <Flex vertical gap="small">
                    <Flex gap="small" wrap>
                        <Button color="default" variant="solid">
                            Solid
                        </Button>
                        <Button color="default" variant="outlined">
                            Outlined
                        </Button>
                        <Button color="default" variant="dashed">
                            Dashed
                        </Button>
                        <Button color="default" variant="filled">
                            Filled
                        </Button>
                        <Button color="default" variant="text">
                            Text
                        </Button>
                        <Button color="default" variant="link">
                            Link
                        </Button>
                    </Flex>
                    <Flex gap="small" wrap>
                        <Button color="primary" variant="solid">
                            Solid
                        </Button>
                        <Button color="primary" variant="outlined">
                            Outlined
                        </Button>
                        <Button color="primary" variant="dashed">
                            Dashed
                        </Button>
                        <Button color="primary" variant="filled">
                            Filled
                        </Button>
                        <Button color="primary" variant="text">
                            Text
                        </Button>
                        <Button color="primary" variant="link">
                            Link
                        </Button>
                    </Flex>
                    <Flex gap="small" wrap>
                        <Button color="danger" variant="solid">
                            Solid
                        </Button>
                        <Button color="danger" variant="outlined">
                            Outlined
                        </Button>
                        <Button color="danger" variant="dashed">
                            Dashed
                        </Button>
                        <Button color="danger" variant="filled">
                            Filled
                        </Button>
                        <Button color="danger" variant="text">
                            Text
                        </Button>
                        <Button color="danger" variant="link">
                            Link
                        </Button>
                    </Flex>
                    <Flex gap="small" wrap>
                        <Button color="pink" variant="solid">
                            Solid
                        </Button>
                        <Button color="pink" variant="outlined">
                            Outlined
                        </Button>
                        <Button color="pink" variant="dashed">
                            Dashed
                        </Button>
                        <Button color="pink" variant="filled">
                            Filled
                        </Button>
                        <Button color="pink" variant="text">
                            Text
                        </Button>
                        <Button color="pink" variant="link">
                            Link
                        </Button>
                    </Flex>
                    <Flex gap="small" wrap>
                        <Button color="purple" variant="solid">
                            Solid
                        </Button>
                        <Button color="purple" variant="outlined">
                            Outlined
                        </Button>
                        <Button color="purple" variant="dashed">
                            Dashed
                        </Button>
                        <Button color="purple" variant="filled">
                            Filled
                        </Button>
                        <Button color="purple" variant="text">
                            Text
                        </Button>
                        <Button color="purple" variant="link">
                            Link
                        </Button>
                    </Flex>
                    <Flex gap="small" wrap>
                        <Button color="cyan" variant="solid">
                            Solid
                        </Button>
                        <Button color="cyan" variant="outlined">
                            Outlined
                        </Button>
                        <Button color="cyan" variant="dashed">
                            Dashed
                        </Button>
                        <Button color="cyan" variant="filled">
                            Filled
                        </Button>
                        <Button color="cyan" variant="text">
                            Text
                        </Button>
                        <Button color="cyan" variant="link">
                            Link
                        </Button>
                    </Flex>
                </Flex>
            </ConfigProvider>

            <Divider>按钮图标</Divider>
            <Flex gap="small" vertical>
                <Flex wrap gap="small">
                    <Tooltip title="search">
                        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button type="primary" shape="circle">
                        A
                    </Button>
                    <Button type="primary" icon={<SearchOutlined />}>
                        Search
                    </Button>
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button icon={<SearchOutlined />}>Search</Button>
                </Flex>
                <Flex wrap gap="small">
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button icon={<SearchOutlined />}>Search</Button>
                    <Tooltip title="search">
                        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button type="dashed" icon={<SearchOutlined />}>
                        Search
                    </Button>
                    <Button icon={<SearchOutlined />} href="https://www.google.com" target="_blank" />
                </Flex>
            </Flex>

            <Divider>按钮图标位置</Divider>
            <Space>
                <Radio.Group value={position} onChange={(e) => setPosition(e.target.value)}>
                    <Radio.Button value="start">start</Radio.Button>
                    <Radio.Button value="end">end</Radio.Button>
                </Radio.Group>
            </Space>
            <Divider orientation="left" plain>
                Preview
            </Divider>
            <Flex gap="small" vertical>
                <Flex wrap gap="small">
                    <Tooltip title="search">
                        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button type="primary" shape="circle">
                        A
                    </Button>
                    <Button type="primary" icon={<SearchOutlined />} iconPosition={position}>
                        Search
                    </Button>
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button icon={<SearchOutlined />} iconPosition={position}>
                        Search
                    </Button>
                </Flex>
                <Flex wrap gap="small">
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button icon={<SearchOutlined />} type="text" iconPosition={position}>
                        Search
                    </Button>
                    <Tooltip title="search">
                        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button type="dashed" icon={<SearchOutlined />} iconPosition={position}>
                        Search
                    </Button>
                    <Button
                        icon={<SearchOutlined />}
                        href="https://www.google.com"
                        target="_blank"
                        iconPosition={position}
                    />
                    <Button type="primary" loading iconPosition={position}>
                        Loading
                    </Button>
                </Flex>
            </Flex>

            <Divider>按钮图标尺寸</Divider>

            <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <Divider orientation="left" plain>
                Preview
            </Divider>
            <Flex gap="small" align="flex-start" vertical>
                <Flex gap="small" wrap>
                    <Button type="primary" size={size}>
                        Primary
                    </Button>
                    <Button size={size}>Default</Button>
                    <Button type="dashed" size={size}>
                        Dashed
                    </Button>
                </Flex>
                <Button type="link" size={size}>
                    Link
                </Button>
                <Flex gap="small" wrap>
                    <Button type="primary" icon={<DownloadOutlined />} size={size} />
                    <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
                    <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
                    <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
                        Download
                    </Button>
                    <Button type="primary" icon={<DownloadOutlined />} size={size}>
                        Download
                    </Button>
                </Flex>
            </Flex>

            <Divider>不可用状态</Divider>

            <Flex gap="small" align="flex-start" vertical>
                <Flex gap="small">
                    <Button type="primary">Primary</Button>
                    <Button type="primary" disabled>
                        Primary(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button>Default</Button>
                    <Button disabled>Default(disabled)</Button>
                </Flex>
                <Flex gap="small">
                    <Button type="dashed">Dashed</Button>
                    <Button type="dashed" disabled>
                        Dashed(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button type="text">Text</Button>
                    <Button type="text" disabled>
                        Text(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button type="link">Link</Button>
                    <Button type="link" disabled>
                        Link(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button type="primary" href="https://ant.design/index-cn">
                        Href Primary
                    </Button>
                    <Button type="primary" href="https://ant.design/index-cn" disabled>
                        Href Primary(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button danger>Danger Default</Button>
                    <Button danger disabled>
                        Danger Default(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button danger type="text">
                        Danger Text
                    </Button>
                    <Button danger type="text" disabled>
                        Danger Text(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button type="link" danger>
                        Danger Link
                    </Button>
                    <Button type="link" danger disabled>
                        Danger Link(disabled)
                    </Button>
                </Flex>
                <Flex gap="small" className="site-button-ghost-wrapper">
                    <Button ghost>Ghost</Button>
                    <Button ghost disabled>
                        Ghost(disabled)
                    </Button>
                </Flex>
            </Flex>

            <Divider>加载中状态</Divider>

            <Flex gap="small" vertical>
                <Flex gap="small" align="center" wrap>
                    <Button type="primary" loading>
                        Loading
                    </Button>
                    <Button type="primary" size="small" loading>
                        Loading
                    </Button>
                    <Button type="primary" icon={<PoweroffOutlined />} loading />
                    <Button
                        type="primary"
                        loading={{
                            icon: <SyncOutlined spin />,
                        }}
                    >
                        Loading Icon
                    </Button>
                </Flex>
                <Flex gap="small" wrap>
                    <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
                        Icon Start
                    </Button>
                    <Button
                        type="primary"
                        loading={loadings[2]}
                        onClick={() => enterLoading(2)}
                        iconPosition="end"
                    >
                        Icon End
                    </Button>
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={loadings[1]}
                        onClick={() => enterLoading(1)}
                    >
                        Icon Replace
                    </Button>
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={loadings[3]}
                        onClick={() => enterLoading(3)}
                    />
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={
                            loadings[3] && {
                                icon: <SyncOutlined spin />,
                            }
                        }
                        onClick={() => enterLoading(3)}
                    >
                        Loading Icon
                    </Button>
                </Flex>
            </Flex>

            <Divider>多个按钮组合</Divider>

            <Flex align="flex-start" gap="small" vertical>
                <Button type="primary">primary</Button>
                <Button>secondary</Button>
                <Dropdown.Button
                    menu={{
                        items,
                        onClick: onMenuClick,
                    }}
                >
                    Actions
                </Dropdown.Button>
            </Flex>

            <Divider>危险按钮</Divider>

            <Flex wrap gap="small">
                <Button type="primary" danger>
                    Primary
                </Button>
                <Button danger>Default</Button>
                <Button type="dashed" danger>
                    Dashed
                </Button>
                <Button type="text" danger>
                    Text
                </Button>
                <Button type="link" danger>
                    Link
                </Button>
            </Flex>

            <Divider>幽灵按钮</Divider>

            <Flex wrap gap="small" className="site-button-ghost-wrapper">
                <Button type="primary" ghost>
                    Primary
                </Button>
                <Button ghost>Default</Button>
                <Button type="dashed" ghost>
                    Dashed
                </Button>
                <Button type="primary" danger ghost>
                    Danger
                </Button>
            </Flex>

            <Divider>渐变按钮</Divider>

            <ConfigProvider button={{
                    className: styles.linearGradientButton,
                }}><Space>
                    <Button type="primary" size="large" icon={<AntDesignOutlined />}>
                        Gradient Button
                    </Button>
                    <Button size="large">Button</Button>
                </Space></ConfigProvider>

            <Divider>Block按钮</Divider>

            <Flex gap="small" style={{width: '100%',}}>
                <Button type="primary" block>
                    Primary
                </Button>
                <Button block>Default</Button>
                <Button type="dashed" block>
                    Dashed
                </Button>
                <Button disabled block>
                    disabled
                </Button>
                <Button type="text" block>
                    text
                </Button>
                <Button type="link" block>
                    Link
                </Button>
            </Flex>

            <Divider>移除汉字中间空格</Divider>

            <Flex gap="small" wrap>
                <Button type="primary" autoInsertSpace={false}>
                    确定
                </Button>
                <Button type="primary" autoInsertSpace>
                    确定
                </Button>
            </Flex>
        </Space>
        </>);
}
export default ButtonPage
const onMenuClick = (e) => {
    console.log('click', e);
};
const items = [
    {
        key: '1',
        label: '1st item',
    },
    {
        key: '2',
        label: '2nd item',
    },
    {
        key: '3',
        label: '3rd item',
    },
];
const useStyle = createStyles(({ prefixCls, css }) => ({
    linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));
