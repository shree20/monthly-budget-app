import React from 'react'
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({startLogin})=>{
    return (
        <div className="box-layout">
        <div className="box-layout__box">
        <h1 className="box-layout__title">Monthly Budget</h1>
        <p>It's time to get your expenses under control.</p>
        <button className="button" onClick={startLogin}>Login with Google</button>
        </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        startLogin: ()=>{
            return dispatch(startLogin())
        }
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage)

