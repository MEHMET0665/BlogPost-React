import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from "./components/Posts.js";
import CreatePost  from "./components/CreatePost";



class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      posts: [ 
        {
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
        },
        {
          title: 'qui est esse',
          body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
        },
        {
          title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
          body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'
        },
        {
          title: 'eum et est occaecati',
          body: 'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit'
        },
        {
          title: 'nesciunt quas odio',
          body: 'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque'
        },
        
      ],
      title:'',
      body:""
    }
    this.setfields=this.setfields.bind(this)
  }
  //store input value in this state
  setfields(key, value){
this.setState({
  [key]:value
})
  }
  render(){
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
                <Link to="/create-post" setfields={this.setfields}>Create Post</Link>
              </li>
            </ul>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Posts blogPosts={this.state.posts}/>
            </Route>
            <Route exact path="/create-post">
              <CreatePost/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}}

export default App;