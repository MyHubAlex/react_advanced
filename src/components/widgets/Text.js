import PropTypes from 'prop-types';
import React from 'react';

const TextBox = ({ text }) => (
  <span>{text}</span>
);

TextBox.propTypes = {
  text: PropTypes.string.isRequired
};

export default TextBox;
