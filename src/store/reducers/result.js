import * as actionTypes from '../actions';

const initialState = {
	results: []
};

const reducer = (state = initialState, action) => {
    console.log(action)
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({ value: action.payload, id: new Date() })
			};
		case actionTypes.DELETE_RESULT:
			const updatedArray = state.results.filter((r) => r.id !== action.payload);
			return {
				...state,
				results: updatedArray
			};

		default:
			break;
	}
	return state;
};

export default reducer;
