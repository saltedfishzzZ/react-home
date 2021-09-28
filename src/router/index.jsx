import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from '../views/login'
import Home from '../views/home'

function Router(props) {
    const { token } = props;
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" component={() => {
                    if (!token) {
                        return <Redirect to="/login" />;
                    } else {
                        return <Home />;
                    }
                }} />
            </Switch>
        </BrowserRouter>
    )
}

export default connect(state => state.user, {})(Router)
