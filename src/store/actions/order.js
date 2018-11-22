import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurguerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGUER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseBurguerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGUER_FAIL,
    error: error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

export const purchaseBurger = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post('/orders.json?auth='+ token, orderData)
      .then(response => {
        console.log(response.data);
        dispatch(purchaseBurguerSuccess(response.data.name, orderData));
      })
      .catch(error => {
        dispatch(purchaseBurguerFail(error));
        console.log(error);
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  };
};

export const fetchOrderStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrders = (token, userId) => {
  return dispatch => {
    dispatch(fetchOrderStart());
    const queryParams = '?auth='+ token+ '&orderBy="userId"&equalTo="' + userId+'"'
    axios
      .get('/orders.json' + queryParams)
      .then(res => {
        console.log(res.data);
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchOrdersFail(error));
      });
  };
};
