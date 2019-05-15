import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    age: 10
  }

  Ageup = () => {
    this.setState({
      ...this.state,
      age:++this.state.age
    })
  }

  Agedown = () => {
    this.setState({
      ...this.state,
      age:--this.state.age
    })
  }

render (){
  return (
    <div className="App">
     <div>Age: <span>{this.state.age}</span></div>
     <button onClick={this.Ageup}>Age up</button>
     <button onClick={this.Agedown}>Age down</button>
    </div>
  );
}
 
 
}

export default App;
