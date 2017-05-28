import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Home extends Component{
	render(){
		return(
			<div className="home">
				<h1>Hello yeay !</h1>
				<Link to="/login">Login</Link>
			</div>
		);
	}
}
export default Home;