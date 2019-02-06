import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="container">
    <div className="text-center contain-50">
      <div className="card card-shadow text-inverse">
        <h1 className="fs-150 link">404</h1>
        <h2 className="t-28">
          The page you are looking for could not be found
          {' '}
          <br />
          <i className="fa fa-smile-o price" />
        </h2>
        <p>
          <Link className="link fs-20" to="/">
            <i className="fa fa-backward" />
            Go back Home
            <i className="fa fa-home" />
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
