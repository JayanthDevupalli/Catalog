import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"


export const Navbar=()=>{
    return(
        <div className="navbar">
            <h1>Catalog</h1>
            <ul>
                <li><Link to='/'>Catalog</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
            </ul>
        </div>
    );
}