import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';
import {
    isRegExp
} from 'util';
describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    })

    it('should set loagind to true upon authStart', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, {
            type: actionTypes.AUTH_START,
        })).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: true,
            authRedirectPath: '/'
        })
    })

    it('should store the token upon login (authSucess)', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, {
            type: actionTypes.AUTH_SUCCESS,
            idToken:'token',
            userId:'userId'
        })).toEqual({
            token: 'token',
            userId: 'userId',
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    })
    it('should store error upon login fail (authFail)', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, {
            type: actionTypes.AUTH_FAIL,
            error:'error'
        })).toEqual({
            token: null,
            userId: null,
            error: 'error',
            loading: false,
            authRedirectPath: '/'
        })
    })

    it('should delete token an userId upon logout (authLogout)', () => {
        expect(reducer({
            token: 'token',
            userId: 'userId',
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, {
            type: actionTypes.AUTH_LOGOUT,
        })).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    })

    it('should  setAuthRedirectPath', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, {
            type: actionTypes.SET_AUTH_REDIRECT_PATH,
            path: '/path'
        })).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/path'
        })
    })



})