import * as actionTypes from './actionsTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const add = payload => {
  return {
    type: actionTypes.ADD,
    payload: payload
  };
};

export const substract = payload => {
  return {
    type: actionTypes.SUBSTRACT,
    payload: payload
  };
};
