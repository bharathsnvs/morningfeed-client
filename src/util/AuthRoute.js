import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../context/auth";

//Disallow logged in users to be able to access register and login page
function AuthRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);

  return(
    <Route
      {...rest}
      render={(props) =>
        user ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}

export default AuthRoute;
