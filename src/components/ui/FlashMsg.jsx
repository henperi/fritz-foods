import React from 'react';
// import { toastr as flashToast } from 'react-redux-toastr';
// import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const FlashMessage = ({ flashData }) => {
  const {
    showFlash, title, message, flashType,
  } = flashData;
  // return <div>{showFlash && <span>{flashToast[flashType](title, message)}</span>}</div>;
  return (
    <div>
      {showFlash && <span className={`card card-shadow flash ${flashType}`}>{message}</span>}
    </div>
  );
};

export default FlashMessage;
