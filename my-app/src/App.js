import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">My Hobbies are: Racing</Person>
        <Person name="Zephi" age="27"/>
      </div>
    );
    // return React.CreateElement('div',{className:'App'},React.CreateElement('h1',null, 'I\'m a React App!!!'));
  }
}

export default App;
