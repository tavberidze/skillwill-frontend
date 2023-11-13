import React, { Component } from 'react';

class Task extends Component {
  handleComplete = () => {
    this.props.onComplete(this.props.id);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };

  handleBack = () => {
    this.props.onBack(this.props.id);
  };

  render() {
    const { text } = this.props;

    return (
      <div className="task">
        <p>{text}</p>
        <button onClick={this.handleComplete}>Complete</button>
        <button onClick={this.handleDelete}>Delete</button>
        <button onClick={this.handleBack}>Back</button>
      </div>
    );
  }
}

export default Task;