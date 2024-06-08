import React from 'react'
import { Counter } from './components/Counter/Counter';


export default class App extends React.Component {
    constructor() {
      super()

      this.state = {showComponent: false}
    }
  
  
  render(){
     return (
      <div>
        <h1>life-cycle in react.</h1>

        <button onClick={() =>  {
          this.setState({
            showComponent: !this.state.showComponent
          })
        }}>{this.state.showComponent? "Remove component" : "Show component"}</button>

        {this.state.showComponent ? <Counter /> : null}
      </div>

    );
  }
 
}

