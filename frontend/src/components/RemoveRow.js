import React from 'react';
import {Button,Table} from 'semantic-ui-react';

export default class RemoveRow extends React.Component {
	
	cancel = () => {
		this.props.cancel();
	}
	
	handleRemove = (event) => {
		this.props.handleRemove(event.target.name);
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
					<Button color="red"
							onClick={this.cancel}>Cancel</Button>
					<Button color="green"
							name={this.props.item._id}
							onClick={this.handleRemove}>Confirm</Button>
				</Table.Cell>			
			</Table.Row>
		)
	}
}