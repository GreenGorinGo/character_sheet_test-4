import React from 'react';
import {Link} from 'react-router-dom';
import {List,Header} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {onLogout} from '../actions/loginActions';

class Navbar extends React.Component {

	logout = () => {
		this.props.dispatch(onLogout(this.props.token));
	}
	render() {
		let header = "Character Application"
		if(this.props.loading) {
			header = "Loading ..."
		}
		if(this.props.error) {
			header = "Error:"+this.props.error
		}
		let style = {
			height:100,
			backgroundColor:"lightblue"
		}
		if(this.props.isLogged) {
			return(
				<div style={style}>
					<Header>{header}</Header>
					<List>
						<List.Item><Link to="/list">Character List</Link></List.Item>
						<List.Item><Link to="/form">Add new Character</Link></List.Item>
						<List.Item><Link to="/" onClick={this.logout}>Logout</Link></List.Item>
					</List>
				</div>		
			)
		} else {
			return(
				<div style={style}>
					<Header>{header}</Header>
				</div>
			)
		}	
		}
	
}

const mapStateToProps = (state) => {
	let error = ""
	if(state.login.error || state.character.error) {
		if(state.login.error) {
			error = state.login.error
		} 
		if(state.character.error) {
			error = state.character.error
		}
	}
	return {
		error:error,
		loading:state.login.loading,
		isLogged:state.login.isLogged,
		token:state.login.token
	}
}

export default connect(mapStateToProps)(Navbar);