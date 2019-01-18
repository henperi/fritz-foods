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
      return this.setState(() => ({
        modal: {
          isOpen: false,
        },
      }));
    }
    return null;
  };

  render() {
    const { triggerClass, triggerName } = this.props;
    const { modal } = this.state;
    console.log(this.props);
    return (
      <span>
        <button onClick={this.handleModal} type="button" className={`triggerModal ${triggerClass}`}>
          {triggerName}
        </button>
        <Modal {...modal} handleModal={this.handleModal} />
      </span>
    );
  }
}

export default TriggerModal;
