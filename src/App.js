import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput'

class App extends Component {
  state = { 
       username: 'Nick' 
  }

  switchUsernameHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.switchUsernameHandler}
          currentUser={this.state.username}
        />
        <UserOutput username={this.state.username} />
        <UserOutput username="Gary"/>
      </div>
    );
  }
}

export default App;
