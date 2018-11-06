import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL='https://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type']= 'application/json';

//const myInterceptor = axios.interceptors.request.use(request=>{
axios.interceptors.request.use(request=>{
  console.log('[INTERCEPTOR] Request',request);
  return request;
}, error => {
  console.log('[INTERCEPTOR] Error',error);
  return Promise.reject(error);
});

// Remove interceptor
// axios.interceptors.request.eject(myInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
