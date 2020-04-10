import React from 'react';
import { Group, InputWithLabelContainer } from './InputWithLabel.styles';

const InputWithLabel = ({ handleChange, label, ...otherProps }) => (
  <Group className='group'>
    <InputWithLabelContainer
      className='form-input'
      onChange={handleChange}
      {...otherProps}
    />
    {label ? <label>{label}</label> : null}
  </Group>
);

export default InputWithLabel;
