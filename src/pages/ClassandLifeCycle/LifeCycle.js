import React, { Component } from 'react'

export default class LifeCycle extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    Increment = ()=>{
        this.setState({count: this.state.count +1})
    }

    componentDidMount(){
        console.log('mounted');
    }

    componentDidUpdate(){
        console.log('updated', this.state.count);
    }

    componentWillUnmount(){
        console.log('being destroyed')
    }

    componentDidCatch(){
        //on any error this is where we implement the error boundary

    }

  render() {
    return (
      <div>LifeCycle 
        {this.state.count}
        <button onClick={this.Increment}>+</button>
      </div>
    )
  }
}



//this is the child compoent