import React, { Component } from 'react'
import Plus from './Components/Plus'
import Minus from './Components/Minus'
import InputNum from './Components/InputNum'
import Reset from './Components/Reset'
import "./App.css"


class App extends Component {
  state = {
    count: 0
  }

countUp = () => {
  this.setState(
    {count: this.state.count + 1}
  )
}

countDown = () => {
  this.setState(
    {count: this.state.count - 1}
  )
}

inputNum = (number) =>{
  let value = parseInt(number)
  this.setState(
    {count: this.state.count + value}
  )
}

reset = () => {
  this.setState({
    count: 0
  })
}

render() {
  return(
    <div className="App">
      <div className="box">
        <p>This is a React Counter</p>
        <h4>{this.state.count}</h4>
      </div>
      <div className="box-two">
        <Plus countUp={this.countUp} />
        <Minus countDown={this.countDown} />
      </div>
      <div className="box-three">
        <Reset reset={this.reset} />
        <InputNum inputNum={this.inputNum} />
      </div>
    </div>
  )
}
}

export default App

