import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Dashboard extends Component{
	render(){
		return(
			<div className="dashboard">
			<h1>Hello yeay !</h1>
			<a><div className="btn"><Link to="/login">Logout</Link></div></a>
			</div>
		);
	}
}
export default Dashboard;