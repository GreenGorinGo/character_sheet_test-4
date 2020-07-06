import {
	FETCH_CHARACTERLIST_SUCCESS,
	FETCH_CHARACTERLIST_FAILED,
	ADD_TO_CHARACTERLIST_SUCCESS,
	ADD_TO_CHARACTERLIST_FAILED,
	REMOVE_FROM_CHARACTERLIST_SUCCESS,
	REMOVE_FROM_CHARACTERLIST_FAILED,
	REMOVE_SINGLE_ITEM_FROM_LIST,
	EDIT_CHARACTERITEM_SUCCESS,
	EDIT_CHARACTERITEM_FAILED,
	CLEAR_CHARACTERREDUCER_STATE	
} from '../actions/characterActions';

const getInitialStateFromStorage = () => {
	if(sessionStorage.getItem("characterstate")) {
		let state = JSON.parse(sessionStorage.getItem("characterstate"));
		return state;
	} else {
		return {
			list:[],
			error:""
		}
	}
}

const saveStateToStorage = (state) => {
	sessionStorage.setItem("characterstate",JSON.stringify(state));
}

const initialState = getInitialStateFromStorage();

const characterReducer = (state = initialState, action) => {
	console.log(state);
	let tempState = {};
	switch(action.type) {
		case FETCH_CHARACTERLIST_SUCCESS:
			tempState = {
				list:action.list,
				error:""
			}
			saveStateToStorage(tempState);
			return tempState;
		case FETCH_CHARACTERLIST_FAILED:
			tempState= {
				...state,
				error:action.error
			}
			saveStateToStorage(tempState);
			return tempState;
		case ADD_TO_CHARACTERLIST_SUCCESS:
			tempState = {
				...state,
				error:""
			}
			saveStateToStorage(tempState);
			return tempState;
		case ADD_TO_CHARACTERLIST_FAILED:
			tempState = {
				...state,
				error:action.error
			}
			saveStateToStorage(tempState);
			return tempState;
		case REMOVE_FROM_CHARACTERLIST_SUCCESS:
			tempState = {
				...state,
				error:""
			}
			saveStateToStorage(tempState);
			return tempState;
		case REMOVE_FROM_CHARACTERLIST_FAILED:
			tempState = {
				...state,
				error:action.error
			}
			saveStateToStorage(tempState);
			return tempState;
		case REMOVE_SINGLE_ITEM_FROM_LIST:
			let tempList = []
			for(let i=0;i<state.list.length;i++) {
				if(state.list[i]._id !== action.id) {
					tempList.push(state.list[i]);
				}
			}
			tempState = {
				...state,
				list:tempList
			}
			saveStateToStorage(tempState);
			return tempState;
		case EDIT_CHARACTERITEM_SUCCESS:
			tempState = {
				...state,
				error:""
			}
			saveStateToStorage(tempState);
			return tempState;
		case EDIT_CHARACTERITEM_FAILED:
			tempState = {
				...state,
				error:action.error
			}
			saveStateToStorage(tempState);
			return tempState;
		case CLEAR_CHARACTERREDUCER_STATE:
			tempState = {
				list:[],
				error:""
			}
			saveStateToStorage(tempState);
			return tempState;
		default:
			return state;
	}
}

export default characterReducer;