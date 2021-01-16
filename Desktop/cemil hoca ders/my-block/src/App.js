import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from "./components/Posts.js";
import CreatePost from "./components/CreatePost.js";
import PostDetails from "./components/PostDetails";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [ 
        
        
      ],
      title: '',
      body: ''
    }
    this.setFields = this.setFields.bind(this)
    this.storeBlogPost = this.storeBlogPost.bind(this)
  }

  // Store input values in the state
  setFields (key, value) {
    this.setState({
      [key]: value
    })
  }

  storeBlogPost() {
    const newPost = {
      id: Date.now(),
      title: this.state.title,
      body: this.state.body
    }
    const newArray = [...this.state.posts, newPost];
    this.setState({
      posts: newArray,
      title: '',
      body: ''
    })
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Welcome to my Blog</h1>
  
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/create-post">Create Post</Link>
                </li>
              </ul>
            </nav>
  
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/">
                <Posts blogPosts={this.state.posts} />
              </Route>
              <Route exact path="/create-post">
                <CreatePost setFields={this.setFields} storePost={this.storeBlogPost} title={this.state.title} body={this.state.body}/>
              </Route>
              <Route path="/posts/:id">
                <PostDetails />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => this.setState({posts: res.data}));
  }
}

export default App;