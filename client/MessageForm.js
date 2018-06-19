import React, {Component} from 'react';
import styles from './MessageForm.scss';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleMessageSubmit(event) {
    event.preventDefault();
    const message = {
      from: this.props.name,
      text: this.state.text
    };
    this.props.onMessageSubmit(message);
    this.setState({text:''})
  }

  changeHandler(event) {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <form className={styles.MessageForm} onSubmit={event => this.handleMessageSubmit(event)}>
        <input
          className={styles.MessageInput}
          placeholder="Message"
          onChange={event => this.changeHandler(event)}
          value={this.state.text}
        />
      </form>
    );
  }
}

export default MessageForm;
