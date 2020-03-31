import React from 'react';
import { Group, FormInputContainer } from './FormInput.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <Group className='group'>
    <FormInputContainer
      className='form-input'
      onChange={handleChange}
      {...otherProps}
    />
    {label ? <label>{label}</label> : null}
  </Group>
);

export default FormInput;
