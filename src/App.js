import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person.js'
import LifeCycle from './LifeCycle/LifeCycle.js'

class App extends Component{
  render() {
    return (
      <div className="App">
      <Person name="沈赛">
        我可以当插槽吗
      </Person>
      <LifeCycle></LifeCycle>
     </div>
    );
  }
}

export default App;
