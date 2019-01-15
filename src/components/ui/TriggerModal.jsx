import React, { Component } from 'react';
import Modal from './Modal/Modal';

class TriggerModal extends Component {
  state = {
    modal: {
      id: undefined,
      isOpen: false,
    },
  };

  handleModal = (
    event,
    {
      id = '', type = '', title = '', price = '', description = '',
    } = this.props,
  ) => {
    event.preventDefault();
    if (event.target.classList.contains('triggerModal')) {
      // add the modal to state
      return this.setState(() => ({
        modal: {
          isOpen: true,
          id,
          title,
          type,
          price,
          description,
        },
      }));
    }
    if (event.target.classList.contains('close-button')) {
      // remove the modal from this.state.
      return this.setState(() => ({
        modal: {
          isOpen: false,
        },
      }));
    }
    return null;
  };

  // console.log(isOpen)

  render() {
    return (
      <span>
        <button
          onClick={this.handleModal}
          type="button"
          className={`triggerModal ${this.props.triggerClass}`}
        >
          {this.props.triggerName}
        </button>
        <Modal {...this.state.modal} handleModal={this.handleModal} />
      </span>
    );
  }
}

export default TriggerModal;
