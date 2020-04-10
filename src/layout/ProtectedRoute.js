import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import storage from '../utils/storage';

const ProtectedRoute = ({
  component: Component,
  layout: Layout,
  isValidated,
  ...rest
}) => {
  console.log('ProtectedRoute');
  return (
    <>
      {storage.get('currentUser') ? (
        <Route
          {...rest}
          render={(props) => (
            <Layout>
              <Component {...props} />
            </Layout>
          )}
        />
      ) : (
        <Redirect to='/signin' />
      )}
    </>
  );
};

export default ProtectedRoute;
