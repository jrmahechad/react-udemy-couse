import { cloneableGenerator } from 'redux-saga/utils';
import { call, put } from 'redux-saga/effects';
import {
  authCheckStateSaga,
  checkAuthTimeoutSaga,
  logoutSaga,
  authUserSaga
} from './auth';
import * as actions from '../actions/index';
import axios from 'axios';

const mockLocalStorage = ()=> {
  global.localStorage = {
    getItem: function(key) {
      return this[key];
    },
    setItem: function(key, value) {
      this[key] = value;
    },
    removeItem: function(key) {
      delete this[key];
    }
  };
}

describe('init ingredients saga', () => {
  it('should execute logout after a delay', () => {
    const generator = cloneableGenerator(checkAuthTimeoutSaga)(actions);
    generator.next(actions.checkAuthTimeout);
    expect(generator.next().value).toEqual(put(actions.logout()));
  });

  it('should logout', () => {
    const generator = cloneableGenerator(logoutSaga)(actions);
    mockLocalStorage();

    generator.next();
    generator.next();
    generator.next();
    expect(generator.next().value).toEqual(put(actions.logoutSucceed()));
  });

  it('should fail if there is no token in localstogare', ()=>{
    const generator = cloneableGenerator(authCheckStateSaga)(actions);
    mockLocalStorage();
    generator.next()
    expect(generator.next().value).toEqual(put(actions.logout()));
  })

  it('should continue checking data', ()=>{
    const generator = cloneableGenerator(authCheckStateSaga)(actions);
    mockLocalStorage();
    localStorage.setItem('token','mock_token');
    localStorage.setItem('expirationDate','11-11-2020');
    localStorage.setItem('userId','user_id')
    const token = generator.next().value;
    const expirationDate = generator.next(token).value;
    const userId = generator.next(expirationDate).value;

    expect(generator.next(userId).value).toEqual(put(actions.authSuccess(token, userId)))
    expect(generator.next().value).toEqual(put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000)))

  })

  it('should logout because expiration date', ()=>{
    const generator = cloneableGenerator(authCheckStateSaga)(actions);
    mockLocalStorage();
    localStorage.setItem('token','mock_token');
    localStorage.setItem('expirationDate','11-11-1900');

    const token = generator.next().value;
    generator.next(token);
    expect(generator.next().value).toEqual(put(actions.logout()));
  })

  it('should log in a valid user', () => {
    const generator = cloneableGenerator(authUserSaga)(actions);
    mockLocalStorage();
    const authData = {
      email: 'email',
      password: 'password',
      returnSecureToken: true
    };
    const url ='http://myurl'
    const fakeResponse= {data:{
      idToken:'id_token',
      localId: 'local_id',
      expiresIn:1000000
    }}
    generator.next();
    generator.next(call(axios.post,url, authData));
    generator.next(fakeResponse)
    generator.next();
    generator.next();
    generator.next();
    expect(generator.next().value).toEqual(put(actions.authSuccess(fakeResponse.data.idToken, fakeResponse.data.localId)))


  });
});
