import React from 'react'
import {Link} from 'react-router-dom'

export default function LoginScreen (props) {
    return (
        <div>
        <h1>Hello</h1>
        <span>Have you been here befour?  </span> 
        <Link to="/login">
         <button>Login</button>
         </Link>
         <Link to="/register">
        <a>New member? Register!</a>
         </Link>
        </div>
    )
}