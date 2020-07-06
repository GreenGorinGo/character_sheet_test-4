import React from 'react';
import {Table,Button} from 'semantic-ui-react';

export default class NormalRow extends React.Component {
	
	remove = (event) => {
		this.props.remove(event.target.name);
	}
	
	edit = (event) => {
		this.props.edit(event.target.id);
	}


	render() {
		return(
			<Table.Row>
				<Table.Cell>{this.props.item.name}</Table.Cell>
				<Table.Cell>{this.props.item.class}</Table.Cell>
				<Table.Cell>{this.props.item.level}</Table.Cell>
				<Table.Cell>{this.props.item.race}</Table.Cell>
				<Table.Cell>{this.props.item.alignment}</Table.Cell>
				<Table.Cell>{this.props.item.background}</Table.Cell>
				<Table.Cell>{this.props.item.player}</Table.Cell>
				<Table.Cell>{this.props.item.strength}</Table.Cell>
				<Table.Cell>{this.props.item.dexterity}</Table.Cell>
				<Table.Cell>{this.props.item.constitution}</Table.Cell>
				<Table.Cell>{this.props.item.intelligence}</Table.Cell>
				<Table.Cell>{this.props.item.wisdom}</Table.Cell>
				<Table.Cell>{this.props.item.charisma}</Table.Cell>
				<Table.Cell>
					<Button name={this.props.item._id}
							onClick={this.remove}>Remove</Button>
				</Table.Cell>
				<Table.Cell>
					<Button id={this.props.item._id}
							onClick={this.edit}>Edit</Button>
				</Table.Cell>
			</Table.Row>
		)
	}
}