import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Zephi", age: 25 }
    ],
    otherState: "Some other value"
  }

  switchNameHandler = () => {
    //console.log("Was Clicked");
    //NO USAR!!, react no va a permitir la mutacion del estado diretamente this.state.persons[0].name = "Maximilian"
    this.setState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Zephi", age: 27 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler} >Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies are: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.CreateElement('div',{className:'App'},React.CreateElement('h1',null, 'I\'m a React App!!!'));
  }
}

export default App;
