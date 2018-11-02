import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import BurguerBuilder from './containers/BurgerBuilder/BurguerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurguerBuilder></BurguerBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
