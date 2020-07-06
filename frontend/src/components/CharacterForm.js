import React from 'react'
import {Form,Button} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addToList} from '../actions/characterActions';

class CharacterForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name:"",
			class:"",
			level:1,
			race:"",
			alignment:"",
			background:"",
			player:"",
			strength:0,
			dexterity:0,
			constitution:0,
			intelligence:0,
			wisdom:0,
			charisma:0,
			id:0
		}
	}
	
	onChange = (event) => {
		let state = {};
		state[event.target.name] = event.target.value
		this.setState(state);
	}
	
	onSubmit = (event) => {
		event.preventDefault();
		let item = {
			name:this.state.name,
		    class:this.state.class,
		    level:this.state.level,
		    race:this.state.race,
		    alignment:this.state.alignment,
		    background:this.state.background,
		    player:this.state.player,
		    strength:this.state.strength,
		    dexterity:this.state.dexterity,
		    constitution:this.state.constitution,
		    intelligence:this.state.intelligence,
		    wisdom:this.state.wisdom,
		    charisma:this.state.charisma,
			id:0
		}
		this.props.dispatch(addToList(this.props.token,item));
		this.setState({
			id:0,
			name:"",
			class:"",
			level:1,
			race:"",
			alignment:"",
			background:"",
			player:"",
			strength:0,
			dexterity:0,
			constitution:0,
			intelligence:0,
			wisdom:0,
			charisma:0
		})
		this.props.history.push("/list");
	}
	
	render() {
		let divStyle={width:500, margin:"auto",height:280, backgroundColor:"lightgreen"}
		
		return(
		<div style={divStyle}>
		<Form onSubmit={this.onSubmit}>
				<Form.Field>
					<label htmlFor="name">Name:</label>
					<input type="text"
						   name="name"
						   onChange={this.onChange}
						   value={this.state.name}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="class">Class:</label>
					<input type="text"
						   name="class"
						   onChange={this.onChange}
						   value={this.state.class}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="level">Level:</label>
					<input type="number"
						   minimum="1"
						    step="1"
						   name="level"
						   onChange={this.onChange}
						   value={this.state.level}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="race">Race:</label>
					<input type="text"
						   name="race"
						   onChange={this.onChange}
						   value={this.state.race}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="alignment">Alignment:</label>
					<input type="text"
						   name="alignment"
						   onChange={this.onChange}
						   value={this.state.alignment}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="background">Background:</label>
					<input type="text"
						   name="background"
						   onChange={this.onChange}
						   value={this.state.background}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="player">Player:</label>
					<input type="text"
						   name="player"
						   onChange={this.onChange}
						   value={this.state.player}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="strength">Strength:</label>
					<input type="number"
						   name="strength"
						   minimum="0"
							step="1"
						   onChange={this.onChange}
						   value={this.state.strength}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="dexterity">Dexterity:</label>
					<input type="number"
						   name="dexterity"
						   minimum="0"
							step="1"
						   onChange={this.onChange}
						   value={this.state.dexterity}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="constitution">Constitution:</label>
					<input type="number"
						   name="constitution"
						   minimum="0"
							step="1"
						   onChange={this.onChange}
						   value={this.state.constitution}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="intelligence">Intelligence:</label>
					<input type="number"
						   name="intelligence"
						   minimum="0"
							step="1"
						   onChange={this.onChange}
						   value={this.state.intelligence}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="wisdom">Wisdom:</label>
					<input type="number"
						   name="wisdom"
						   minimum="0"
							step="1"
						   onChange={this.onChange}
						   value={this.state.wisdom}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="charisma">Charisma:</label>
					<input type="number"
						   name="charisma"
						   minimum="0"
							step="1"
						   onChange={this.onChange}
						   value={this.state.charisma}/>
				</Form.Field>
				<Button type="submit">Add</Button>
				</Form>
		</div>
				)
	}
}

const mapStateToProps = (state) => {
	return {
		token:state.login.token
	}
}

export default withRouter(connect(mapStateToProps)(CharacterForm));