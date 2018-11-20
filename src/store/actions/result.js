import * as actionTypes from './actionsTypes';

export const storeResults = payload => {
  return (dispatch, getState) => {
    setTimeout(() => {
      /*const oldCounter = getState().ctr.counter;
      console.log(oldCounter);*/
      dispatch(saveResult(payload));
    }, 2000);
  };
};

export const saveResult = payload => {
  return {
    type: actionTypes.STORE_RESULT,
    payload: payload
  };
};

export const deleteResults = payload => {
  return {
    type: actionTypes.DELETE_RESULT,
    payload: payload
  };
};
