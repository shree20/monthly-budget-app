import React from 'react'
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header  from '../components/Header'

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route  {...rest} component={(props) => {
         return   isAuthenticated ? (
             <div>
             <Header />
             <Component {...props} />
             </div>
               
            ) : (
                    <Redirect to="/" />
                )
        }} />
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid
    }
}

export default connect(mapStateToProps)(PrivateRoute)