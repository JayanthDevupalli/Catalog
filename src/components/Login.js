import React from "react";
import './login.css'

export const Login=()=>{
    return(
        <main>
        <div className="login-form">
            <h2>Login</h2>
            <form>
                <input type="email" placeholder="email" required/>
                <input type="password" placeholder="password" required/>
                <button type="submit">Login</button> 
            </form>
        </div>
        </main>
    );
}