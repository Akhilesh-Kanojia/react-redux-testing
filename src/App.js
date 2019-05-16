import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {

  // state = {
  //   age: 10
  // }

  // Ageup = () => {
  //   this.setState({
  //     ...this.state,
  //     age:++this.state.age
  //   })
  // }

  // Agedown = () => {
  //   this.setState({
  //     ...this.state,
  //     age:--this.state.age
  //   })
  // }

render (){
  return (
    <div className="App">
     <div>Age: <span>{this.props.age} {this.props.number}</span></div>
     <button onClick={this.props.Ageup}>Age up</button>
     <button onClick={this.props.Agedown}>Age down</button>
    </div>
  );
}
 
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    number: state.number
  }
};

const mapDispatchToProps = (dispatch) => {
return {
  Ageup: () => dispatch({type: 'AGE_UP'}),
  Agedown: () => dispatch({type: 'AGE_DOWN'})
}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
