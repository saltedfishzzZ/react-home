import { 
    HomeTwoTone,
    ShopTwoTone,
    DatabaseTwoTone,
    EditTwoTone
 } from '@ant-design/icons'
/**
 * icon: 菜单图标
 * 
 */

const menuList = [
    {
        title: '首页',
        path: '/dashboard',
        icon: <HomeTwoTone />
    },
    {
        title: '商户信息',
        path: '/merchant',
        icon: <ShopTwoTone />,
        children: [
            {
                title: '信息查看',
                path: '/merchant/info',
                icon: <DatabaseTwoTone />
            },
            {
                title: '信息修改',
                path: '/merchant/edit',
                icon: <EditTwoTone />
            }
        ]
    }
]

export default menuList;