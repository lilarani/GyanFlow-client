import React from 'react';
import { Link } from 'react-router';
import './custom.css';
const Button = ({ text, url }) => {
  return (
    <>
      <Link
        to={url}
        className="button m-1 inline-block bg-yellow-600 text-textcolor px-6 py-2  font-semibold hover:bg-yellow-700 hover:text-white transition rounded"
      >
        {text}
      </Link>
    </>
  );
};

export default Button;
