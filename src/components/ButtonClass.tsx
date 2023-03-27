import React, { Component } from 'react'

interface ButtonClassProps{
  text?: string;
  callback?: Function;
}
interface ButtonClassState{
  counter: number;
  counter3: number;
  times: Array<number>;

}

export default class ButtonClass extends Component <ButtonClassProps, ButtonClassState> {
  count = 34;
  constructor(props: ButtonClassProps){
    super(props);
    this.state = {
      counter: 0,
      counter3: 10,
      times: [1],
    }
  }

  handleClick(){
    this.setState({counter: this.state.counter + 1}, () =>{
      this.setState({times: [...this.state.times, this.state.counter]})
    })
  }
  render() {
    return (
      <button className='btn btn-primary' onClick={() => this.props.callback ? this.props.callback() : this.handleClick()}>{this.props.text || 'Count'} ({this.state.counter}) {this.state.times}</button>
    )
  }
}
