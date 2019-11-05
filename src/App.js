import React from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        count: 0
      }
  }
    handleIncrement = () => {
      const count = this.state.count;
      this.setState({ count: count + 1 });
    }
  handleDecrement = () => {
    const count = this.state.count;
    this.setState({ count: count - 1 });
  }
    render() {
      return (
          <div>
            <h3> {this.state.count}</h3>
          <button onClick={this.handleIncrement}>
            <h3>+</h3>
          </button>
          <button onClick={this.handleDecrement}>
            <h3>-</h3>
          </button>
          </div>
      );
    }
  }
  export default Counter;
