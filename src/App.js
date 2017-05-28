import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import Home from './home';

class App extends Component {
	render() {
		return (
			<div>
				<Route path='/home' component={Home}/>
			<switch>
					<Route path='/login' component={Login}/>
					<Route path='/signup' component={Signup}/>
			</switch>
			</div>
		// <div className="App">
		//   <div className="App-header">
		//     <img src={logo} className="App-logo" alt="logo" />
		//     <h2>Welcome to React</h2>
		//   </div>
		//   <p className="App-intro">
		//     To get started, edit <code>src/App.js</code> and save to reload.
		//   </p>
		// </div>
	);
	}
}

export default App;
