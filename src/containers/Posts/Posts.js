import React, { Component } from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import './Posts.css';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

export default class Posts extends Component {
  state = {
    posts: []
  };

  postSelectedHandler = id => {
    //this.props.history.push({ pathname: '/' + id });
    this.props.history.push('/posts/' + id);
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get('/posts')
      .then(response => {
        console.log('[GET] all', response);
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(p => {
          return {
            ...p,
            author: 'Julian'
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(error => {
        console.log(error);
        //this.setState({ error: true });
      });
  }

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(p => {
        return (
          //<Link key={p.id} to={'/' + p.id}>
          <Post
            key={p.id}
            title={p.title}
            author={p.author}
            clicked={() => this.postSelectedHandler(p.id)}
          />
          //</Link>
        );
      });
    }
    console.log(this.props.match.url + '/:id')
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
      </div>
    );
  }
}
