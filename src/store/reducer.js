import * as actionTypes from './actions';
const initialState = {
  persons: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      return { ...state, persons: state.persons.concat(action.payload) };
    case actionTypes.REMOVE_PERSON:
      const updatedPersons = state.persons.filter(r => r.id !== action.payload);
      return { ...state, persons: updatedPersons };

    default:
      return state;
  }
};
