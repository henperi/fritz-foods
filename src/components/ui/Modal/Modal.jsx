import React from 'react';
import { AddToCartModal, RemoveFromCartModal, SignUpModal } from './ModalTypes';

const modal = (props) => {
  const {
    id, isOpen, type, handleModal,
  } = props;
  return (
    <div className={`modal ${isOpen && 'show-modal'}`} id={id}>
      <div className="modal-content">
        <div className="text-center">
          <button
            type="button"
            onClick={handleModal}
            className="close-button btn btn-sm push-right fs-20"
          >
            x
          </button>
          {type === 'addToCart' && <AddToCartModal {...props} />}
          {type === 'removeFromCart' && <RemoveFromCartModal {...props} />}
          {type === 'signUpModal' && <SignUpModal {...props} />}
        </div>
      </div>
    </div>
  );
};

export default modal;
