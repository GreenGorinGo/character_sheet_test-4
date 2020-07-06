import React from 'react';
import {Table,Button} from 'semantic-ui-react';
import NormalRow from './NormalRow';
import RemoveRow from './RemoveRow';
import EditRow from './EditRow';
import {connect} from 'react-redux';
import {getCharacterList, removeFromList, editItem} from '../actions/characterActions';

class CharacterList extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			removeIndex:-1,
			editIndex:-1,
			search:""
		}
	}
	
	onChange = (event) => {
		let state = {};
		state[event.target.name] = event.target.value;
		this.setState(state);
	}	
	
	searchByName = (event) => {
		this.props.dispatch(getCharacterList(this.props.token, this.state.search));
		this.setState({
			search:""
		})
	}
	
	remove = (id) => {
		for(let i=0;i<this.props.list.length;i++) {
			if(this.props.list[i]._id === id) {
				this.setState({
					removeIndex:i,
					editIndex:-1
				})
				return;
			}
		}
	}
	
	edit = (id) => {
		for(let i=0;i<this.props.list.length;i++) {
			if(this.props.list[i]._id === id) {
				this.setState({
					removeIndex:-1,
					editIndex:i
				})
				return;
			}
		}		
	}
	
	handleRemove = (id) => {
		this.props.dispatch(removeFromList(this.props.token,id));;
		this.cancel();
	}
	
	handleEdit = (item) => {
		this.props.dispatch(editItem(this.props.token,item));
		this.cancel();
	}
	
	cancel = () => {
		this.setState({
			removeIndex:-1,
			editIndex:-1
		})
	}
	
	render() {
		let items = this.props.list.map((item,index) => {
			if(this.state.editIndex === index) {
				return <EditRow key={item._id}
								item={item}
								handleEdit={this.handleEdit}
								cancel={this.cancel}/>
			}
			if(this.state.removeIndex === index) {
				return <RemoveRow key={item._id}
							      item={item}
								  handleRemove={this.handleRemove}
								  cancel={this.cancel}/>
			}
			return <NormalRow key={item._id} item={item}
				edit={this.edit} remove={this.remove}/>
		})
		return(
			<div>
				<label htmlFor="search">Search by name:</label>
				<input type="text"
						name="search"
						onChange={this.onChange}
						value={this.state.search}/>
				<Button style={{marginLeft:10}} onClick={this.searchByName}>Search</Button>
				<Table celled>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Name</Table.HeaderCell>
							<Table.HeaderCell>Class</Table.HeaderCell>
							<Table.HeaderCell>Level</Table.HeaderCell>
							<Table.HeaderCell>Race</Table.HeaderCell>
							<Table.HeaderCell>Alignment</Table.HeaderCell>
							<Table.HeaderCell>Background</Table.HeaderCell>
							<Table.HeaderCell>Player</Table.HeaderCell>
							<Table.HeaderCell>Strength</Table.HeaderCell>
							<Table.HeaderCell>Dexterity</Table.HeaderCell>
							<Table.HeaderCell>Constitution</Table.HeaderCell>
							<Table.HeaderCell>Intelligence</Table.HeaderCell>
							<Table.HeaderCell>Wisdom</Table.HeaderCell>
							<Table.HeaderCell>Charisma</Table.HeaderCell>
							<Table.HeaderCell>Remove</Table.HeaderCell>
							<Table.HeaderCell>Edit</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{items}
					</Table.Body>
				</Table>
				
				<div>
					<head>
                        <title>DnD 5e Character Sheet</title>
                        <link rel="stylesheet prefetch" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"/> 
                    </head>
                    <body>
                        <div class="container">
					    <br></br>
	                    <h2>D&D 5th Edition Character Sheet</h2>
						<h3>"This Character Sheet is only HTML for the moment and it is non-functional"</h3>
						<h3>"Table on top is where the recently created characters will appear, be edited or be removed for now"</h3>
						<br></br>
	                        <div class="row">
		                        <div class="col-sm-4">
			                        <h1>ENCOUNTERS</h1>
		                        </div>
		                        <div class="col-sm-2">
			                        <h5>CLASS & LEVEL</h5>
		                        </div>
		                        <div class="col-sm-2">
			                        <h5>BACKGROUND</h5>
		                        </div>
		                        <div class="col-sm-2">
			                        <h5>PLAYER NAME</h5>
		                        </div>
		                        <div class="col-sm-2">
			                        <h5>FACTION</h5>
		                        </div>
	                        </div>

	                        <div class="row">
		                        <div class="col-sm-4">
			                        <h5>CHARACTER NAME</h5>
		                        </div>
		                        <div class="col-sm-2">					
			                        <h5>RACE</h5>
		                        </div>
		                        <div class="col-sm-2">
			                        <h5>ALIGNMENT</h5>
		                        </div>
		                        <div class="col-sm-2">
			                        <h5>EXPERIENCE POINTS</h5>
		                        </div>
		                        <div class="col-sm-2">
			                        <h5>DCI NUMBER</h5>
		                        </div>
	                        </div>

	                        <div class="row">
		                        <div class="col-sm-2">
			                        <ul class="list-group">
				                        <li class="list-group-item"><h5>STRENGTH</h5></li>
				                        <li class="list-group-item">0</li>
				                        <li class="list-group-item">0</li>
			                        </ul>
			                        <ul class="list-group">
				                        <li class="list-group-item"><h5>DEXTERITY</h5></li>
				                        <li class="list-group-item">0</li>
				                        <li class="list-group-item">0</li>
			                        </ul>		
			                        <ul class="list-group">
				                        <li class="list-group-item"><h5>CONSTITUTION</h5></li>
				                        <li class="list-group-item">0</li>
				                        <li class="list-group-item">0</li>
			                        </ul>
			                        <ul class="list-group">
				                        <li class="list-group-item"><h5>INTELLIGENCE</h5></li>
				                        <li class="list-group-item">0</li>
				                        <li class="list-group-item">0</li>
			                        </ul>		
			                        <ul class="list-group">
				                        <li class="list-group-item"><h5>WISDOM</h5></li>
				                        <li class="list-group-item">0</li>
				                        <li class="list-group-item">0</li>
			                        </ul>		
			                        <ul class="list-group">
				                        <li class="list-group-item"><h5>CHARISMA</h5></li>
				                        <li class="list-group-item">0</li>
				                        <li class="list-group-item">0</li>
			                        </ul>
		                        </div>

		                        <div class="col-sm-4">
			                        <div class="well">
				                        <p><span class="badge">0</span> INSPIRATION</p>
			                        </div>
			                        <div class="well">
				                        <p><span class="badge">0</span> PROFICIENCY BONUS</p>
			                        </div>
			                        <div class="well">
				                        <p><span class="badge">0</span> Strength</p>
				                        <p><span class="badge">0</span> Dexterity</p>
				                        <p><span class="badge">0</span> Constitution</p>
				                        <p><span class="badge">0</span> Intelligence</p>				
				                        <p><span class="badge">0</span> Wisdom</p>				
				                        <p><span class="badge">0</span> Charisma</p>				
				                        <h5>SAVING THROWS</h5>
			                        </div>
			                        <div class="well">
				                        <p><span class="badge">0</span> Acrobatics (Dex)</p>
				                        <p><span class="badge">0</span> Animal Handling (Wis)</p>
				                        <p><span class="badge">0</span> Arcana (int)</p>				
				                        <p><span class="badge">0</span> Athletics (Str)</p>				
				                        <p><span class="badge">0</span> Deception (Cha)</p>
				                        <p><span class="badge">0</span> History (Int)</p>				
				                        <p><span class="badge">0</span> Insight (Wis)</p>				
				                        <p><span class="badge">0</span> Intimidation (Cha)</p>				
				                        <p><span class="badge">0</span> Investigation (Int)</p>				
				                        <p><span class="badge">0</span> Medicine (Wis)</p>				
				                        <p><span class="badge">0</span> Nature (Int)</p>				
				                        <p><span class="badge">0</span> Perception (Wis)</p>								
				                        <p><span class="badge">0</span> Performance (Cha)</p>								
				                        <p><span class="badge">0</span> Persuasion (Cha)</p>								
				                        <p><span class="badge">0</span> Religion (Int)</p>								
				                        <p><span class="badge">0</span> Sleight of Hang (Dex)</p>								
				                        <p><span class="badge">0</span> Stealth (Dex)</p>								
				                        <p><span class="badge">0</span> Survival (Wis)</p>			
				                        <h5>SKILLS</h5>
			                        </div>
			                        <div class="well">
				                        <p><span class="badge">0</span> PASSIVE WISDOM (PERCEPTION)</p>
			                        </div>
			                        <div class="well">
				                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec nisi fringilla, posuere nunc ac, vulputate quam. Donec vitae purus ullamcorper, malesuada leo sed, faucibus velit. Nulla nec sapien neque. Sed semper ut leo luctus elementum. Sed tincidunt luctus lorem at blandit. Nullam ultricies fermentum sagittis. Vivamus lacinia lacinia arcu sed vestibulum. Sed sollicitudin pellentesque ligula sit amet ultrices. Nunc vitae magna tellus.</p>
				                        <h5>OTHER PROFICIENCES & LANGUAGES</h5>
			                        </div>
		                        </div>
		                        <div class="col-sm-3">
			                        <div class="well">
				                        <table class="table">
					                        <tbody>
						                        <tr>
							                        <td><span class="badge">0</span></td>
							                        <td><span class="badge">0</span></td>
							                        <td><span class="badge">0</span></td>
						                        </tr>
					                        </tbody>
					                        <tfoot>
						                        <tr>
							                        <td><h5>ARMOR CLASS</h5></td>
							                        <td><h5>INITIATIVE</h5></td>
							                        <td><h5>SPEED</h5></td>
						                        </tr>
					                        </tfoot>
				                        </table>
			                        </div>
			                        <div class="well">
				                        <p>Hit Point Maximum <span>0</span></p>
				                        <h4>0</h4>
				                        <h5>CURRENT HIT POINTS</h5>
			                        </div>
			                        <div class="well">
				                        <h4>0</h4>
				                        <h5>TEMPORARY HIT POINTS</h5>
			                        </div>
			                        <div class="well">
				                        <div class="row">
					                        <div class="col-sm-6">
						                        <div class="col-sm-6">
							                        <p>Total</p> 
						                        </div>
						                        <div class="col-sm-6">
							                        <p>1d8</p> 
						                        </div>
						                        <div class="col-sm-12">
							                        <p>0</p>
							                        <h6>HIT DICE</h6>
						                        </div>
					                        </div>
					                        <div class="col-sm-6">
						                        <div class="col-sm-12">
							                        <p>SUCCESSES <span class="badge">0</span><span class="badge">0</span><span class="badge">0</span></p>
							                        <p>FAILURES <span class="badge">0</span><span class="badge">0</span><span class="badge">0</span></p>
						                        </div>
					                        </div>
				                        </div>
			                        </div>
			                        <div class="well">
				                        <div class="row">
					                        <div class="col-sm-12">
						                        <table class="table table-condensed">
							                        <thead>
								                        <tr>
									                        <td>NAME</td>
									                        <td>ATK BONUS</td>
									                        <td>DAMAGE/ TYPE</td>
								                        </tr>
							                        </thead>
							                        <tbody>
								                        <tr>
									                        <td>Lorem ipsum</td>
									                        <td>Lorem ipsum</td>
									                        <td>Lorem ipsum</td>
								                        </tr>
								                        <tr>
									                        <td>+0</td>
									                        <td>+0</td>
									                        <td>+0</td>
								                        </tr>
								                        <tr>
									                        <td>Lorem ipsum</td>
									                        <td>Lorem ipsum</td>
									                        <td>Lorem ipsum</td>
								                        </tr>
							                        </tbody>
						                        </table>
						                        <p>Lorem ipsum dolor sit amet</p>
						                        <p>consectetur adipiscing elit. Nulla tempus metus </p>
						                        <p>nulla sit amet tortor ultricies iaculis. Fusce quis dui </p>
						                        <p>consectetur facilisis eget mauris. Aenean dictum arcu sapien, </p>
						                        <h5>ATTACKS & SPELLCASTING</h5>
					                        </div>
				                        </div>
			                        </div>
			                        <div class="well">
				                        <div class="row">
					                        <div class="col-sm-4">
						                        <span class="badge">CP</span><span class="label label-default">0</span>
						                        <span class="badge">SP</span><span class="label label-default">0</span>
						                        <span class="badge">EP</span><span class="label label-default">0</span>
						                        <span class="badge">GP</span><span class="label label-default">0</span>
						                        <span class="badge">PP</span><span class="label label-default">0</span>
					                        </div>
					                        <div class="col-sm-8">
						                        <p>Lorem ipsum</p>
						                        <p>Lorem ipsum</p>
						                        <p>Lorem ipsum</p>
						                        <p>Lorem ipsum</p>
						                        <p>Lorem ipsum</p>
						                        <p>Lorem ipsum</p>
						                        <p>Lorem ipsum</p>
						                        <p>Lorem ipsum</p>
						                        <h5>EQUIPMENT</h5>
					                        </div>
				                        </div>
			                        </div>
		                        </div>
		                        <div class="col-sm-3">
			                        <div class="well">
				                        <p>Lorem ipsum</p>
				                        <p>Lorem ipsum</p>
				                        <p>Lorem ipsum</p>
				                        <p>Lorem ipsum</p>
				                        <p>Lorem ipsum</p>
				                        <h5>PERSONALITY TRAITS</h5>
			                        </div>
			                        <div class="well">
				                        <p>Lorem ipsum</p>
				                        <p>Lorem ipsum</p>
				                        <p>Lorem ipsum</p>
				                        <h5>IDEALS</h5>
			                        </div>
			                        <div class="well">
				                        <p>Lorem ipsum</p>
				                        <p>Lorem ipsum</p>
				                        <p>Lorem ipsum</p>
				                        <h5>BONDS</h5>
			                        </div>
			                        <div class="well">
				                        <p>Lorem ipsum</p>
				                        <p>Lorem ipsum</p>
				                        <p>Lorem ipsum</p>
				                        <h5>FLAWS</h5>
			                        </div>
			                        <div class="well">
				                        <p>Lorem ipsum</p>
				                        <p>Lorem ipsum</p>
				                        <p>Lorem ipsum</p>
				                        <h5>FEATURES & TRAITS</h5>
			                        </div>
		                        </div>
	                        </div> 
                        </div>
                    </body>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		list:state.character.list,
		token:state.login.token
	}
}

export default connect(mapStateToProps)(CharacterList);