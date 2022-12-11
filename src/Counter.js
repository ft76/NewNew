import React, {Component} from 'react';
import { ThemeContext } from './App';

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count : this.props.initialCount,
        }
    }
    
    // asynchronous in nature
    // changeCount(amount) {
    //     this.setState({count: this.state.count + amount})
    // }

    // synchronous in nature
    changeCount(amount) {
        this.setState(prevState => {return {count: prevState.count + amount}}); // when need to use previous state
        //this.setState({count: 0});  // when not need to use any state
    }



    render() {
        return (
            <ThemeContext.Consumer>
            {style => (
                <div>
                    <button style = {style} onClick={() => this.changeCount(-1)}>-</button>
                    <span>{this.state.count}</span>
                    <button style = {style} onClick={() => this.changeCount(1)}>+</button>
                </div>
            )}
            </ThemeContext.Consumer>
        );
    }
}