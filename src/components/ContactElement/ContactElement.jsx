import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './ContactElement.styled';

export function ContactElement({ name, number }) {
  return (
    <Item>
      Name: {name} Phone number: {number}
    </Item>
  );
}

ContactElement.propTypes = {

    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};
