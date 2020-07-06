import React from 'react';
import {Button,Table} from 'semantic-ui-react';

export default class EditRow extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			name:props.item.name,
		    class:props.item.class,
		    level:props.item.level,
		    race:props.item.race,
		    alignment:props.item.alignment,
		    background:props.item.background,
		    player:props.item.player,
		    strength:props.item.strength,
		    dexterity:props.item.dexterity,
		    constitution:props.item.constitution,
		    intelligence:props.item.intelligence,
		    wisdom:props.item.wisdom,
		    charisma:props.item.charisma
		}
	}

	onChange = (event) => {
		let state = {};
		state[event.target.name] = event.target.value;
		this.setState(state);
	}

	handleEdit = (event) => {
		let item = {
			id:this.props.item._id,
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
		    charisma:this.state.charisma
		}
		this.props.handleEdit(item);
	}
	
	cancel = (event) => {
		this.props.cancel();
	}

	render() {
		return(
			<Table.Row>
				<Table.Cell>
					<input type="text"
						   name="name"
						   onChange={this.onChange}
						   value={this.state.name}/>
				</Table.Cell>
				<Table.Cell>
					<input type="text"
						   name="class"
						   onChange={this.onChange}
						   value={this.state.class}/>
				</Table.Cell>
				<Table.Cell>
					<input type="number"
						   minimum="1"
						    step="1"
						   name="level"
						   onChange={this.onChange}
						   value={this.state.level}/>
				</Table.Cell>
				<Table.Cell>
					<input type="text"
						   name="race"
						   onChange={this.onChange}
						   value={this.state.race}/>
				</Table.Cell>
				<Table.Cell>
					<input type="text"
						   name="alignment"
						   onChange={this.onChange}
						   value={this.state.alignment}/>
				</Table.Cell>
				<Table.Cell>
					<input type="text"
						   name="background"
						   onChange={this.onChange}
						   value={this.state.background}/>
				</Table.Cell>
				<Table.Cell>
					<input type="text"
						   name="player"
						   onChange={this.onChange}
						   value={this.state.player}/>
				</Table.Cell>
				<Table.Cell>
					<input type="number"
						   name="strength"
						   minimum="0"
							step="1"
						   onChange={this.onChange}
						   value={this.state.strength}/>
				</Table.Cell>
				<Table.Cell>
					<input type="number"
						   name="dexterity"
						   minimum="0"
							step="1"
						   onChange={this.onChange}
						   value={this.state.dexterity}/>
				</Table.Cell>
				<Table.Cell>
					<input type="number"
						   name="constitution"
						   minimum="0"
							step="1"
						   onChange={this.onChange}
						   value={this.state.constitution}/>
				</Table.Cell>
				<Table.Cell>
					<input type="number"
						   name="intelligence"
						   minimum="0"
							step="1"
						   onChange={this.onChange}
						   value={this.state.intelligence}/>
				</Table.Cell>
				<Table.Cell>
					<input type="number"
						   name="wisdom"
						   minimum="0"
							step="1"
						   onChange={this.onChange}
						   value={this.state.wisdom}/>
				</Table.Cell>
				<Table.Cell>
					<input type="number"
						   name="charisma"
						   minimum="0"
							step="1"
						   onChange={this.onChange}
						   value={this.state.charisma}/>
				</Table.Cell>
				<Table.Cell>
					<Button color="green"
							onClick={this.handleEdit}>Save</Button>
				</Table.Cell>
				<Table.Cell>
					<Button color="red"
							onClick={this.cancel}>Cancel</Button>
				</Table.Cell>
			</Table.Row>
		)	
	}
}