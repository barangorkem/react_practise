import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import '../App.css';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import SignUp from './SignUp';
import Layout from '../container/Layout';
import Error from './Error';
class App extends Component {

  state = {
    user: [],
    isLogin: false
  }
  constructor() {
    super();
    this.loginUser = this.loginUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        this.setState({
          user: json
        });
      })
    console.log("component did mount");

  }
  loginUser(userObject) {
    for (let i = 0; i < this.state.user.length; i++) {
      if (this.state.user[i].name === userObject.name && this.state.user[i].username === userObject.username) {
        this.setState({
          isLogin: true
        })
      }
    }
  }
  addUser = (userObject) => {
    console.log(userObject);
    const user = this.state.user;
    user.push(userObject);
    this.setState({
      user
    })
  }

  render() {

    return (

      <Router>
        <Layout isLogin={this.state.isLogin}>
          <Switch>
            <Route path='/' exact strict render={(props) => <Home user={this.state.user} isAuthed={true} />}></Route>
            <Route path='/login' exact strict render={(props) => this.state.isLogin ? <Redirect to="/" /> : <Login loginUser={this.loginUser} />}></Route>
            <Route path='/profile' exact strict render={() => (this.state.isLogin ? (<Profile />) : <Redirect to="/" />)}></Route>
            <Route path='/signup' exact strict render={(props) => this.state.isLogin ? <Redirect to="/" /> : <SignUp addUser={this.addUser} />}></Route>
            <Route path='/logout' exact strict render={() => (this.setState({ isLogin: false }), <Redirect to="/" />)}></Route>
            <Route component={Error} />
          </Switch>
        </Layout>
      </Router>

    );
  }
}

export default App;
