import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './WithSpinner.styles';

const WithSpinner = WrappedComponent => {
  const spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return spinner;
};

export default WithSpinner;
