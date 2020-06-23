import React, { Component } from 'react';
import Message from './components/Message';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      messages: [],
    }
  }

  handleCount = (operator) => {
    const counter = this.state.count;
    if (operator === '-' && counter > 0) {
      this.setState({ count: counter - 1 })
    } else if (operator === '-' && counter === 0) {
      this.setState({ count: 0 })
    } else {
      this.setState({ count: counter + 1 })
    }
  }

  addMessage = () => {
    const messages = this.state.messages;
    this.setState({ messages: [...messages, 'Message added from state']})
  }

  render() {
    const { count, messages } = this.state;
    return (
      <>
        <div>{count}</div>
        <button onClick={() => this.handleCount('+')}>+</button>
        <button onClick={() => this.handleCount('-')}>-</button>
        <button onClick={this.addMessage}>Add message</button>
        { messages.map((message, index) => <Message key={index} message={message} />)}
      </>
    );
  }
}

export default App;
