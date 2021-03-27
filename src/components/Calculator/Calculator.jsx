import React, { Component } from 'react'

import InputList from '../InputList'
import DisplayNumber from '../DIsplayNumber'

import './calculator.css';


export class Calculator extends Component {
  constructor(props){
    super(props);
    this.state ={
      x: 0,
      y: 0,
      operator: "",
      result: 0
    }
  }

  setStateAsync = state => new Promise((resolve) => {
    this.setState(state, resolve)
  })

  // Versi Callback
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    }, () => {
      switch(this.state.operator){
        case '+':
          this.setState({
            result: +this.state.x + +this.state.y
          })
          break;
        case '-':
          this.setState({
            result: +this.state.x - +this.state.y
          })
          break;
        case '*':
          this.setState({
            result: +this.state.x * +this.state.y
          })
          break;
        case '/':
          this.setState({
            result: +this.state.x / +this.state.y
          })
          break;
        default :
          return this.state
      }
    })
  }

  // Versi promise
  // handleChange = async e => {
  //   const { name, value } = e.target;

  //   await this.setStateAsync({
  //     [name]: value
  //   })

  //   switch(this.state.operator) {
  //     case '+' :
  //       await this.setStateAsync({
  //         result: +this.state.x + +this.state.y
  //       })
  //       break;
  //     case '-' :
  //       await this.setStateAsync({
  //         result: +this.state.x - +this.state.y
  //       })
  //       break;
  //     case '*' :
  //       await this.setStateAsync({
  //         result: +this.state.x * +this.state.y
  //       })
  //       break;
  //     case '/' :
  //       await this.setStateAsync({
  //         result: +this.state.x / +this.state.y
  //       })
  //       break;
  //     default :
  //       return this.state
  //   }
  // }

  render() {
    return (
      <div className="calculator">
        <InputList onChangeHandler={this.handleChange} />
        <DisplayNumber result={this.state.result} />
      </div>
    )
  }
}

export default Calculator
