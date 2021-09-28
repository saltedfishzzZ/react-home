import React from 'react'
import { Menu, Icon } from 'antd'
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import menuList from '../../../config/menu';
import { setHeadTitle } from '../../../store/actions'

const SubMenu = Menu.SubMenu;

class MenuLayout extends React.Component {

    // 获取菜单节点
    getMenuNodes = (menuList) => {
        const path = this.props.location.pathname;

        return menuList.map(item => {
            /** 
             * item:
             * {
             *  title: '',
             *  path : '',
             *  icon : '',
             *  children : [] 可能有
             * }
            */
           if (!item.children) {
               if (item.path === path || path.indexOf(item.path) === 0) {
                   // 设置title 
                   this.props.setHeadTitle(item.title)
               }
               return (
                   <Menu.Item key={item.path} icon={item.icon}>
                        <Link to={item.path} onClick={() => this.props.setHeadTitle(item.title)}>
                           {item.title}
                        </Link>
                   </Menu.Item>
               )
           } else {
               // 查找子item与请求路径匹配的
               const childItem = item.children.find(childItem => path.indexOf(childItem.path) === 0)
               // 如果存在, 需要打开item的子列表
               if (childItem) {
                   this.openKey = item.path
               }
               return <SubMenu key={item.path} icon={item.icon} title={item.title}>
                   {
                       this.getMenuNodes(item.children)
                   }
               </SubMenu>
           }
        })
    };

    UNSAFE_componentWillMount() {
        this.menuNodes = this.getMenuNodes(menuList);
    }

    render() {
        const path = this.props.location.pathname;
        const openKey = this.openKey;
        return (
            <div>
                <Menu mode="inline"
                    theme="dark"
                    selectedKeys={[path]}
                    defaultOpenKeys={openKey}>
                    { this.menuNodes }
                </Menu>
            </div>
        )
    }
}



export default connect(state => state.headTitle, { setHeadTitle })(withRouter(MenuLayout));