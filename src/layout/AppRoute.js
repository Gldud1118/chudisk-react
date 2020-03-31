import React from 'react';
import { Route } from 'react-router-dom';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(
      props //routeprop인걸까?
    ) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

export default AppRoute;
