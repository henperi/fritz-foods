import React from 'react';

const Errors = ({ errors, name }) => errors.map(
  error => error.param === name && (
    <li key={`${error.param}-${Math.random()}`} className="list-item error">
      {error.msg}
    </li>
  ),
);

export const MainError = ({ errors }) => errors.length === 1
  && errors[0].msg && (
    <li key={`${errors.length}-${Math.random()}`} className="list-item error">
      {errors[0].msg}
    </li>
);

export default Errors;
