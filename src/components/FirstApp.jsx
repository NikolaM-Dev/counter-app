import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ greeting, subtitle }) => {
  return (
    <>
      <h1>{greeting}</h1>
      <p>{subtitle}</p>
      <button>+ 1</button>
    </>
  );
};

FirstApp.propTypes = {
  greeting: PropTypes.string,
};

FirstApp.defaultProps = {
  subtitle: "I'm a subtitle",
};

export default FirstApp;
