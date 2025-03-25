import IndexPage from "../views/index/index.jsx";
import NotFoundPage from "../views/notFound/index.jsx";
import ButtonPage from "../views/button/index.jsx";
import FloatButtonPage from "../views/floatButton/index.jsx";
import TypographyPage from "../views/typography/index.jsx";


export const RouterData=[
    {
        name:'首页',
        path:'/',
        element: <IndexPage/>
    },
    {
        name:'页面不存在',
        path: '*',
        element: <NotFoundPage/>
    },
    {
        name:'按钮',
        path: '/button',
        element: <ButtonPage />
    },
    {
        name: '悬浮按钮',
        path: '/floatButton',
        element: <FloatButtonPage />
    },
    {
        name: '文本排版',
        path: '/typography',
        element: <TypographyPage />
    }
]
