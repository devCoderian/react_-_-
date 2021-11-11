import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = { date: new Date()}
    }
    componentDidMount(){
        console.log('componentDidMount');
        this.timerID = setInterval(() => this.tick(), 10000)
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillUnMount');
        clearInterval(this.timerID);
    }
    tick(){
        // console.log('tick')
        this.setState({date: new Date()})
    }
    render() {
        // console.log('constructor')
        return (
            <div>
                <h1>{this.state.date.toLocaleDateString}</h1>
            </div>
        )
    }
}
