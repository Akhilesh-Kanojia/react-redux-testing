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
     <hr/>
     <div>History</div>
     <div>
       <ul>
     {
       this.props.history.map(el => (
         <li className="historyItem" key={el.id} onClick={() => this.props.onDelItem(el.id)}>
           {el.age}
         </li>
       ))
       }
       </ul>
     </div>
    </div>
  );
}
 
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    number: state.number,
    history: state.history
  }
};

const mapDispatchToProps = (dispatch) => {
return {
  Ageup: () => dispatch({type: 'AGE_UP', value: 1}),
  Agedown: () => dispatch({type: 'AGE_DOWN', value: 1}),
  onDelItem: (id) => dispatch({type: 'DEL_ITEM', key: id})
}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
