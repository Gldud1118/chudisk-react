import React from 'react';
import { CustomDropdownContainer } from './CustomDropdown.styles';

const CustomDropdown = React.forwardRef((props, ref) => {
  return (
    <CustomDropdownContainer {...props} ref={ref}>
      {props.children}
    </CustomDropdownContainer>
  );
});

export default CustomDropdown;
