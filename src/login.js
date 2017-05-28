import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Login extends Component {
	render() {
		return (
      <div className="login">
          <form method="post" onSubmit={this.onFormSubmit}>
              <div className="box">
                  <h1>Dashboard</h1>
                  <input type="email" name="email" className="email" ref="email"/>
                  <input type="password" name="email" className="email" ref="password"/>
                  <div className="btn">Login</div>
                  <div id="btn2"><Link to="/signup">Signup</Link></div>
              </div>
          </form>
      </div>
		)
	}
}
