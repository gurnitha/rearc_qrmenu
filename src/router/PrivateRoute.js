import { Route, Redirect } from 'react-router-dom';
import React, { useContext } from 'react';

import AuthContext from '../contexts/AuthContext';

// 1. We create a normal route, but inside it, it has ...rest, 
//    it means we pass all the props into ...rest, then
//    we pass it into the return
function PrivateRoute({ children, ...rest }) {
  const auth = useContext(AuthContext);

  return (
    <Route
      // 2. We pass all the props into here, then render 
      // the code after it   
      {...rest}
      render={({ location }) => 
        // if auth.token has value: execute ? (children) or return to client
        // if auth.token has not value: execute : (<Redirect />)
        // or return to login page 
        auth.token ? (
          children
        ) : (
          <Redirect 
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute;
