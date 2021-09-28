import React from 'react'
import { Switch, Redirect, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout } from 'antd';
import Logo from './logo'
import MenuLayout from './menu'
import HeaderLayout from './header'
import { getUserInfo } from '../../store/actions'

import { routeList } from '../../config/route'

const { Content, Footer, Sider } = Layout;

function Home(props) {
    const { getUserInfo } = props;

    React.useEffect(() => {
        return () => {
            getUserInfo()
                .then(data => {
                })
                .catch(error => {
                })
        }
    }, [])

    return (
        <Layout style={{ height: '100%' }}>
            <Sider trigger={null} collapsible>
                <Logo />
                <MenuLayout />
            </Sider>
            <Layout >
                <HeaderLayout />
                <Content style={{ margin: '10px', background: '#fff'}}>
                    <Switch>
                        <Redirect exact from='/' to='/home' />
                        { routeList.map(route => {
                            return <Route key={route.path} {...route} />
                        }) }
                    </Switch>
                </Content>
                <Footer style={{ textAlign: 'center',color: '#ccc', height: '30px'}}>点餐系统, 欢迎使用</Footer>
            </Layout>
        </Layout>
    );
}


export default connect(
    state => state.user,
    { getUserInfo }
)(withRouter(Home))