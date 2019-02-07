import React, { Component } from 'react';
import Modal from './Modal/Modal';

export class TriggerModal extends Component {
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
    if (event && event.target.classList.contains('triggerModal')) {
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
    if (event && event.target.classList.contains('close-button')) {
      return this.setState(() => ({
        modal: {
          isOpen: false,
        },
      }));
    }
    return this.setState(() => ({
      modal: {
        isOpen: false,
      },
    }));
  };

  render() {
    const { triggerClass, triggerName } = this.props;
    const { modal } = this.state;

    return (
      <span>
        <button onClick={this.handleModal} type="button" className={`triggerModal ${triggerClass}`}>
          {triggerName}
        </button>
        <Modal {...modal} handleModal={this.handleModal} {...this.props} />
      </span>
    );
  }
}

export default TriggerModal;
