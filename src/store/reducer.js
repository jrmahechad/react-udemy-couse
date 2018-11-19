import * as actionTypes from './actions';
const initialState = {
  persons: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.payload.name ||  'Julian',
        age: action.payload.age || Math.floor(Math.random() * 40)
      };
      return { ...state, persons: state.persons.concat(newPerson) };
    case actionTypes.REMOVE_PERSON:
      const updatedPersons = state.persons.filter(r => r.id !== action.payload);
      return { ...state, persons: updatedPersons };

    default:
      return state;
  }
};
