import React from 'react'
import {Link} from 'react-router-dom'
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";



export const Header = ({startLogout})=>{
    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link className = "header__title" to="/dashboard">
                    <h1>Expensify</h1>
                    </Link>
                    <button className="button button--link" onClick={startLogout}>Logout</button>
                </div>
            </div>
        </header>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return {
        startLogout : ()=>{
            return dispatch(startLogout())
        }
    }
}

export default connect(undefined, mapDispatchToProps)(Header)