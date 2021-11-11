import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    
      //그려지자마자 호출되는 애
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    //사라지기 직전에 호출되는 애
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
    //그려줗 jsx리턴해주는 함수 render
      render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }

}

