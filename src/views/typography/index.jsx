import {Divider, Flex, Radio, Slider, Switch, Typography} from 'antd';
import {useMemo, useState} from "react";
import {CheckOutlined, HighlightOutlined, SmileFilled, SmileOutlined} from "@ant-design/icons";
const { Title, Paragraph, Text, Link } = Typography;
const blockContent = `AntV 是蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。
我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。`;
const TypographyPage = () => {
    const [editableStr, setEditableStr] = useState('This is an editable text.');
    const [editableStrWithSuffix, setEditableStrWithSuffix] = useState(
        'This is a loooooooooooooooooooooooooooooooong editable text with suffix.',
    );
    const [editableStrWithSuffixStartPart, editableStrWithSuffixSuffixPart] = useMemo(
        () => [editableStrWithSuffix.slice(0, -12), editableStrWithSuffix.slice(-12)],
        [editableStrWithSuffix],
    );
    const [customIconStr, setCustomIconStr] = useState('Custom Edit icon and replace tooltip text.');
    const [clickTriggerStr, setClickTriggerStr] = useState(
        'Text or icon as trigger - click to start editing.',
    );
    const [chooseTrigger, setChooseTrigger] = useState(['icon']);
    const [customEnterIconStr, setCustomEnterIconStr] = useState(
        'Editable text with a custom enter icon in edit field.',
    );
    const [noEnterIconStr, setNoEnterIconStr] = useState(
        'Editable text with no enter icon in edit field.',
    );
    const [hideTooltipStr, setHideTooltipStr] = useState('Hide Edit tooltip.');
    const [lengthLimitedStr, setLengthLimitedStr] = useState(
        'This is an editable text with limited length.',
    );
    const radioToState = (input) => {
        switch (input) {
            case 'text':
                return ['text'];
            case 'both':
                return ['icon', 'text'];
            case 'icon':
                return ['icon'];
            default:
                return ['icon'];
        }
    };
    const stateToRadio = useMemo(() => {
        if (chooseTrigger.includes('text')) {
            return chooseTrigger.includes('icon') ? 'both' : 'text';
        }
        return 'icon';
    }, [chooseTrigger]);
    const [ellipsis, setEllipsis] = useState(false);
    const [rows, setRows] = useState(2);
    const [expanded, setExpanded] = useState(false);
    const article =
        "To be, or not to be, that is the question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life";
    return(<>
        <Divider>基本</Divider>
        <div><Typography>
        <Title>Introduction</Title>

        <Paragraph>
            In the process of internal desktop applications development, many different design specs and
            implementations would be involved, which might cause designers and developers difficulties and
            duplication and reduce the efficiency of development.
        </Paragraph>

        <Paragraph>
            After massive project practice and summaries, Ant Design, a design language for background
            applications, is refined by Ant UED Team, which aims to{' '}
            <Text strong>
                uniform the user interface specs for internal background projects, lower the unnecessary
                cost of design differences and implementation and liberate the resources of design and
                front-end development
            </Text>
            .
        </Paragraph>

        <Title level={2}>Guidelines and Resources</Title>

        <Paragraph>
            We supply a series of design principles, practical patterns and high quality design resources
            (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product
            prototypes beautifully and efficiently.
        </Paragraph>

        <Paragraph>
            <ul>
                <li>
                    <Link href="/docs/spec/proximity">Principles</Link>
                </li>
                <li>
                    <Link href="/docs/spec/overview">Patterns</Link>
                </li>
                <li>
                    <Link href="/docs/resources">Resource Download</Link>
                </li>
            </ul>
        </Paragraph>

        <Paragraph>
            Press <Text keyboard>Esc</Text> to exit...
        </Paragraph>

        <Divider />

        <Title>介绍</Title>

        <Paragraph>
            蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
        </Paragraph>

        <Paragraph>
            随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁集团体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
            Ant Design。基于<Text mark>『确定』和『自然』</Text>
            的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
            <Text strong>更好的用户体验</Text>。
        </Paragraph>

        <Title level={2}>设计资源</Title>

        <Paragraph>
            我们提供完善的设计原则、最佳实践和设计资源文件（<Text code>Sketch</Text> 和
            <Text code>Axure</Text>），来帮助业务快速设计出高质量的产品原型。
        </Paragraph>

        <Paragraph>
            <ul>
                <li>
                    <Link href="/docs/spec/proximity-cn">设计原则</Link>
                </li>
                <li>
                    <Link href="/docs/spec/overview-cn">设计模式</Link>
                </li>
                <li>
                    <Link href="/docs/resources-cn">设计资源</Link>
                </li>
            </ul>
        </Paragraph>

        <Paragraph>
            <blockquote>{blockContent}</blockquote>
            <pre>{blockContent}</pre>
        </Paragraph>

        <Paragraph>
            按<Text keyboard>Esc</Text>键退出阅读……
        </Paragraph>
    </Typography></div>
        <Divider>可编辑</Divider>
        <div><Paragraph
            editable={{
                onChange: setEditableStr,
            }}
        >
            {editableStr}
        </Paragraph>
            <Paragraph
                editable={{
                    onChange: setEditableStrWithSuffix,
                    text: editableStrWithSuffix,
                }}
                ellipsis={{
                    suffix: editableStrWithSuffixSuffixPart,
                }}
            >
                {editableStrWithSuffixStartPart}
            </Paragraph>
            <Paragraph
                editable={{
                    icon: <HighlightOutlined />,
                    tooltip: 'click to edit text',
                    onChange: setCustomIconStr,
                }}
            >
                {customIconStr}
            </Paragraph>
            Trigger edit with:{' '}
            <Radio.Group
                onChange={(e) => setChooseTrigger(radioToState(e.target.value))}
                value={stateToRadio}
            >
                <Radio value="icon">icon</Radio>
                <Radio value="text">text</Radio>
                <Radio value="both">both</Radio>
            </Radio.Group>
            <Paragraph
                editable={{
                    tooltip: 'click to edit text',
                    onChange: setClickTriggerStr,
                    triggerType: chooseTrigger,
                }}
            >
                {clickTriggerStr}
            </Paragraph>
            <Paragraph
                editable={{
                    icon: <HighlightOutlined />,
                    tooltip: 'click to edit text',
                    onChange: setCustomEnterIconStr,
                    enterIcon: <CheckOutlined />,
                }}
            >
                {customEnterIconStr}
            </Paragraph>
            <Paragraph
                editable={{
                    icon: <HighlightOutlined />,
                    tooltip: 'click to edit text',
                    onChange: setNoEnterIconStr,
                    enterIcon: null,
                }}
            >
                {noEnterIconStr}
            </Paragraph>
            <Paragraph
                editable={{
                    tooltip: false,
                    onChange: setHideTooltipStr,
                }}
            >
                {hideTooltipStr}
            </Paragraph>
            <Paragraph
                editable={{
                    onChange: setLengthLimitedStr,
                    maxLength: 50,
                    autoSize: {
                        maxRows: 5,
                        minRows: 3,
                    },
                }}
            >
                {lengthLimitedStr}
            </Paragraph>
            <Typography.Title
                editable
                level={1}
                style={{
                    margin: 0,
                }}
            >
                h1. Ant Design
            </Typography.Title>
            <Typography.Title
                editable
                level={2}
                style={{
                    margin: 0,
                }}
            >
                h2. Ant Design
            </Typography.Title>
            <Typography.Title
                editable
                level={3}
                style={{
                    margin: 0,
                }}
            >
                h3. Ant Design
            </Typography.Title>
            <Typography.Title
                editable
                level={4}
                style={{
                    margin: 0,
                }}
            >
                h4. Ant Design
            </Typography.Title>
            <Typography.Title
                editable
                level={5}
                style={{
                    margin: 0,
                }}
            >
                h5. Ant Design
            </Typography.Title></div>
        <Divider>可复制</Divider>
        <div> <Paragraph copyable>This is a copyable text.</Paragraph>
            <Paragraph
                copyable={{
                    text: 'Hello, Ant Design!',
                }}
            >
                Replace copy text.
            </Paragraph>
            <Paragraph
                copyable={{
                    icon: [<SmileOutlined key="copy-icon" />, <SmileFilled key="copied-icon" />],
                    tooltips: ['click here', 'you clicked!!'],
                }}
            >
                Custom Copy icon and replace tooltips text.
            </Paragraph>
            <Paragraph
                copyable={{
                    tooltips: false,
                }}
            >
                Hide Copy tooltips.
            </Paragraph>
            <Paragraph
                copyable={{
                    text: async () =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve('Request text');
                            }, 500);
                        }),
                }}
            >
                Request copy text.
            </Paragraph>
            <Text
                copyable={{
                    text: 'text to be copied',
                }}
            /></div>
        <Divider>省略号</Divider>
        <div><Switch
            checked={ellipsis}
            onChange={() => {
                setEllipsis(!ellipsis);
            }}
        />

            <Paragraph ellipsis={ellipsis}>
                Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team.
            </Paragraph>

            <Paragraph
                ellipsis={
                    ellipsis
                        ? {
                            rows: 2,
                            expandable: true,
                            symbol: 'more',
                        }
                        : false
                }
            >
                Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team.
            </Paragraph>

            <Text
                style={
                    ellipsis
                        ? {
                            width: 200,
                        }
                        : undefined
                }
                ellipsis={
                    ellipsis
                        ? {
                            tooltip: 'I am ellipsis now!',
                        }
                        : false
                }
            >
                Ant Design, a design language for background applications, is refined by Ant UED Team.
            </Text>

            <Text
                code
                style={
                    ellipsis
                        ? {
                            width: 200,
                        }
                        : undefined
                }
                ellipsis={
                    ellipsis
                        ? {
                            tooltip: 'I am ellipsis now!',
                        }
                        : false
                }
            >
                Ant Design, a design language for background applications, is refined by Ant UED Team.
            </Text></div>
        <Divider>受控省略/展开</Divider>
        <div><Flex gap={16} vertical>
            <Flex gap={16} align="center">
                <Switch
                    checked={expanded}
                    onChange={() => setExpanded((c) => !c)}
                    style={{
                        flex: 'none',
                    }}
                />
                <Slider
                    min={1}
                    max={20}
                    value={rows}
                    onChange={setRows}
                    style={{
                        flex: 'auto',
                    }}
                />
            </Flex>

            <Typography.Paragraph
                ellipsis={{
                    rows,
                    expandable: 'collapsible',
                    expanded,
                    onExpand: (_, info) => setExpanded(info.expanded),
                }}
                copyable
            >
                {'Ant Design, a design language for background applications, is refined by Ant UED Team.'.repeat(
                    20,
                )}
            </Typography.Paragraph>
        </Flex></div>
        <Divider>省略中间</Divider>
        <div><EllipsisMiddle suffixCount={12}>
            In the process of internal desktop applications development, many different design specs and
            implementations would be involved, which might cause designers and developers difficulties and
            duplication and reduce the efficiency of development.
        </EllipsisMiddle></div>
        <Divider>后缀</Divider>
        <div><Slider value={rows} min={1} max={10} onChange={setRows} />
            <Paragraph
                ellipsis={{
                    rows,
                    expandable: true,
                    suffix: '--William Shakespeare',
                    onEllipsis: (ellipsis) => {
                        console.log('Ellipsis changed:', ellipsis);
                    },
                }}
                title={`${article}--William Shakespeare`}
            >
                {article}
            </Paragraph></div>
    </>)
}
export default TypographyPage
const EllipsisMiddle = ({ suffixCount, children }) => {
    const start = children.slice(0, children.length - suffixCount);
    const suffix = children.slice(-suffixCount).trim();
    return (
        <Text
            style={{
                maxWidth: '100%',
            }}
            ellipsis={{
                suffix,
            }}
        >
            {start}
        </Text>
    );
};
