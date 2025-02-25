import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import AddExpensePage from '../components/AddExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import EditExpensePage from '../components/EditExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory()

const AppRouter = ()=>{
    return (
 <Router history={history}>
    <div>
    <Switch>
    <PublicRoute path="/"  component={LoginPage} exact={true} />
    <PrivateRoute path="/dashboard"  component={ExpenseDashboardPage} exact={true} />
    <PrivateRoute path="/create" component={AddExpensePage} />
    <PrivateRoute path="/edit/:id" component={EditExpensePage} />
    <Route component={NotFoundPage} />
    </Switch>
    </div>
</Router>
    )
}

export default AppRouter