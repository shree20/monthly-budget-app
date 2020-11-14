import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import 'react-dates/lib/css/_datepicker.css'
import { startSetExpenses } from './actions/expenses'
import { firebase } from './firebase/firebase'
import { login, logout } from './actions/auth'


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

console.log('Test')

ReactDOM.render(<p>Loading ....</p>, document.getElementById('app'))

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'))
})

let hasRendered = false

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true
    }
}

firebase.auth().onAuthStateChanged((user) => {

    if (user) {
        store.dispatch(login(user.uid))

        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})
