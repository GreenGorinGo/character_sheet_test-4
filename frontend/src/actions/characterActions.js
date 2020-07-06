import {logoutSuccess, loading, endLoading} from './loginActions';

export const FETCH_CHARACTERLIST_SUCCESS = "FETCH_CHARACTERLIST_SUCCESS"
export const FETCH_CHARACTERLIST_FAILED = "FETCH_CHARACTERLIST_FAILED"
export const ADD_TO_CHARACTERLIST_SUCCESS = "ADD_TO_CHARACTERLIST_SUCCESS"
export const ADD_TO_CHARACTERLIST_FAILED = "ADD_TO_CHARACTERLIST_FAILED"
export const REMOVE_FROM_CHARACTERLIST_SUCCESS = "REMOVE_FROM_CHARACTERLIST_SUCCESS"
export const REMOVE_FROM_CHARACTERLIST_FAILED = "REMOVE_FROM_CHARACTERLIST_FAILED"
export const REMOVE_SINGLE_ITEM_FROM_LIST = "REMOVE_SINGLE_ITEM_FROM_LIST"
export const EDIT_CHARACTERITEM_SUCCESS = "EDIT_CHARACTERITEM_SUCCESS"
export const EDIT_CHARACTERITEM_FAILED = "EDIT_CHARACTERITEM_FAILED"
export const CLEAR_CHARACTERREDUCER_STATE = "CLEAR_CHARACTERREDUCER_STATE"



export const getCharacterList = (token,search) => {
	return dispatch => {
		let request = {
			method:"GET",
			mode:"cors",
			headers: {"Content-Type":"application/json",
					token:token}
		}
		let url = "/api/character"
		if(search) {
			url = url +"?type="+search;
		}
		dispatch(loading());
		fetch(url,request).then(response => {
			dispatch(endLoading());
			if(response.ok) {
				response.json().then(data => {
					dispatch(characterFetchSuccess(data));
				}).catch(error => {
					dispatch(characterFetchFailed("Failed to parse information. Try again"));
				})
			} else {
				if(response.status === 403) {
					dispatch(characterFetchFailed("Server responded with session failure. Logging out!"))
					dispatch(logoutSuccess());
					dispatch(clearCharacterState());
				} else {
					dispatch(characterFetchFailed("Server responded with an error status:"+response.statusText))
				}
			}
		}).catch(error => {
			dispatch(endLoading());
			dispatch(characterFetchFailed(error));
		})
	
	}
}

export const addToList = (token, item) => {
	return dispatch => {
		let request = {
			method:"POST",
			mode:"cors",
			headers:{"Content-Type":"application/json",
			token:token},
			body:JSON.stringify(item)
		}
		dispatch(loading());
		fetch("/api/character",request).then(response => {
			dispatch(endLoading());
			if(response.ok) {
				dispatch(characterAddSuccess());
				dispatch(getCharacterList(token));
			} else {
				if(response.status === 403) {
					dispatch(characterAddFailed("Server responded with a session failure. Logging out"));
					dispatch(logoutSuccess());
					dispatch(clearCharacterState());
				} else {
					dispatch(characterAddFailed("Server responded with an error status:"+response.statusText))
				}
			}
		}).catch(error => {
			dispatch(endLoading());
			dispatch(characterAddFailed(error));
		})
	}
}

export const removeFromList = (token, id) => {
	return dispatch => {
		let request = {
			method:"DELETE",
			mode:"cors",
			headers:{"Content-Type":"application/json",
			token:token}
		}
		dispatch(loading());
		let url = "/api/character/"+id
		fetch(url,request).then(response => {
			dispatch(endLoading());
			if(response.ok) {
				dispatch(characterRemoveSuccess());
				dispatch(getCharacterList(token));
			} else {
				if(response.status === 403) {
					dispatch(characterRemoveFailed("Server responded with a session failure. Logging out"));
					dispatch(logoutSuccess());
					dispatch(clearCharacterState());
				} else {
					dispatch(characterRemoveFailed("Server responded with an error:"+response.statusText));
					if(response.status === 404) {
						dispatch(characterRemoveSingleItem(id));
					}
				}
			}
		}).catch(error => {
			dispatch(endLoading());
			dispatch(characterRemoveFailed(error));
		})
	}
}

export const editItem = (token,item) => {
	console.log("editItem");
	console.log(item);
	return dispatch => {
		let request = {
			method:"PUT",
			mode:"cors",
			headers:{"Content-Type":"application/json",
			token:token},
			body:JSON.stringify(item)
		}
		let url = "/api/character/"+item.id;
		dispatch(loading());
		fetch(url,request).then(response => {
			dispatch(endLoading());
			if(response.ok) {
				dispatch(editCharacterItemSuccess());
				dispatch(getCharacterList(token));
			} else {
				if (response.status === 403) {
					dispatch(editCharacterItemFailed("Server responded with session failure. Logging out"));
					dispatch(logoutSuccess());
					dispatch(clearCharacterState());
				} else {
					dispatch(editCharacterItemFailed("Server responded with status:"+response.statusText))
				}
			}
		}).catch(error => {
			dispatch(endLoading());
			dispatch(editCharacterItemFailed(error));
		})
	}
}


export const characterFetchSuccess = (list) => {
	return {
		type:FETCH_CHARACTERLIST_SUCCESS,
		list:list
	}
}

export const characterFetchFailed = (error) => {
	return {
		type:FETCH_CHARACTERLIST_FAILED,
		error:error
	}
}

export const characterAddSuccess = () => {
	return {
		type:ADD_TO_CHARACTERLIST_SUCCESS
	}
}

export const characterAddFailed = (error) => {
	return {
		type:ADD_TO_CHARACTERLIST_FAILED,
		error:error
	}
}

export const characterRemoveSuccess = () => {
	return {
		type:REMOVE_FROM_CHARACTERLIST_SUCCESS
	}
}

export const characterRemoveFailed = (error) => {
	return {
		type:REMOVE_FROM_CHARACTERLIST_FAILED,
		error:error
	}
}

export const characterRemoveSingleItem = (id) => {
	return {
		type:REMOVE_SINGLE_ITEM_FROM_LIST,
		id:id
	}
}

export const editCharacterItemSuccess = () => {
	return {
		type:EDIT_CHARACTERITEM_SUCCESS
	}
}

export const editCharacterItemFailed = (error) => {
	return {
		type:EDIT_CHARACTERITEM_FAILED,
		error:error
	}
}

export const clearCharacterState = () => {
	return {
		type:CLEAR_CHARACTERREDUCER_STATE
	}
}