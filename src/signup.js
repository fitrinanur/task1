import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Signup extends Component{
    onFormSubmit(e){
        e.preventDefault();

        let first_name = this.refs.firstName.value;
        let last_name = this.refs.lastName.value;
        let email = this.refs.email.value;
        let password = this.refs.password.value;

        alert(first_name);
    }
    render(){
        return(
            <div className="signup">
                <form onSubmit={() => this.onFormSubmit}>
                    <div className="box">
                        <h1>Register</h1>
                        <input type="text"  ref='firstName' className="email" placeholder="firstname"/>
                        <input type="text"  ref="lastName" className="email" placeholder="lastname"/>
                        <input type="email" ref='email' className="email" placeholder="email"/>
                        <input type="password" ref='password' className="email" placeholder="password"/>
                        <div className="btn"><Link to="/login">Login</Link></div>
                        <button id="btn2" type="submit">Signup</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Signup;
