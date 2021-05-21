import React, { Component } from "react"; 
// import InputNum from './InputNum'
class Counter extends Component {
constructor(props){
    super(props)
    this.state = {
        count: 0
    };
}


increment = () => {
    this.setState({
        count: this.state.count + 1
    });
};


decrement = () =>{
    this.setState({
        count: this.state.count -1
    });
};


reset = () => {
    this.setState({
        count:  0
    });
};
inputNum = (number) => {
    let value = parseInt(number)
    this.setState({
        count: this.state.count + value
    })
}


    render () {
        return (
          <div className="App">
            <p>This is the current count: {this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.reset}>Reset</button>
           
          </div>
        );
      }
    }
    



export default Counter; 