import Main from './Components/Main';
import './App.css';
import List from './Components/List';
import React, {Component} from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      groceries: [],
    }
  }
  getList=(list) => {
    this.setState({groceries:[...this.state.groceries, list]})
  }
  render(){
  return (
    <div className="App">
      <h2>Grocery List:</h2>
      <Main  getList={this.getList}/>
      <h2>Current Items:</h2>
      <ul>
        <li className="list-line">Item: Steak, Units: 1lb, Quantity: 1</li>
        <li className="list-line">Item: Onion, Units: 0.51lbs, Quantity: 2</li>
        <li className="list-line">Item: Cheese, Units: 16oz, Quantity: 3</li>
      
      <List getItems={this.state.groceries}/>
      </ul>
    </div>
  );
}
}

export default App;
