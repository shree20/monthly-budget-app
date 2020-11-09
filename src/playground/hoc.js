//Higher Order Component (HOC) - A component (HOC) that renders another component
//Reuse code
//Render Hijacking
//props manipulation
//Abstract state


import React from 'react'
import ReactDOM from 'react-dom'


const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>The Info is : {props.info}</p>
        </div>
    )
}


const withAdminWarning = (WrappedComponent) =>{
    return (props)=>{
       return (
        <div>
        <p>This is private Info.</p>
        <WrappedComponent {...props} />
        </div>
       ) 
        
    }
}

const requireAuthentication = (WrappedComponent) =>{
 return  (props)=>{
    return (
            <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/>: <p>Not Authenticated</p>}
             </div>
        )
    
 }
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo  = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details"/>,document.getElementById('app'))

