import React from 'react';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CharacterList from './components/CharacterList';
import CharacterForm from './components/CharacterForm';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import {connect} from 'react-redux';

class App extends React.Component {
		
	render() {
		return(
			<div className="App">
				<Navbar/>
				<hr/>
				<Switch>
					<Route exact path="/" render={
						() => this.props.isLogged ?
						(<Redirect to="/list"/>) :
						(<LoginForm />)
					}/>
					<Route path="/form" render={
						() => this.props.isLogged ?
						(<CharacterForm/>) :
						(<Redirect to="/"/>)
					}/>
					<Route path="/list" render={
						() => this.props.isLogged ?
						(<CharacterList/>) :
						(<Redirect to="/"/>)
					}/>				
				</Switch>
			</div>
		)
	}	
}

const mapStateToProps = (state) => {
	return {
		isLogged:state.login.isLogged
	}
}

export default withRouter(connect(mapStateToProps)(App));