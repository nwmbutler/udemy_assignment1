import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput'

class App extends Component {
  state = { 
    users: [
      { username: 'Nick' },
      { username: 'Kim' }
    ]
  }

  render() {
    return (
      <div>
        <UserInput/>
        <UserOutput username={this.state.users[0].username} />
        <UserOutput username={this.state.users[1].username} />
      </div>
    );
  }
}

export default App;
