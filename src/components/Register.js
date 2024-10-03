import React from "react";
import './register.css';

export const Register=()=>{
    return(
        <main>
            <section class="login-form">
                
                <h2>Register</h2>
                <form>
                    <input type="text" placeholder="username" required/>
                    <input type="email" placeholder="email" required/>
                    <input type="password" placeholder="password" required/>
                    <input type="password" placeholder="confirm password" required/>
                    <input type="number" placeholder="mobile number" required/>
                    <input type="number" placeholder="age"/>
                    <button type="submit">register</button>
                </form>
            </section>
        </main>
    );
}