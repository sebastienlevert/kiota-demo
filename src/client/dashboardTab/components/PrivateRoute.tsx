import * as React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

export interface IPrivateRouteProps extends RouteProps {
  path: string;
  component?: any;
  isAuthenticated?: boolean;
}

export const PrivateRoute: React.FunctionComponent<IPrivateRouteProps> = (props: IPrivateRouteProps) => {
  const { component: Component, isAuthenticated, ...rest } = props;

  return (
    <Route
      {...rest}
      render={routeProps =>
        isAuthenticated ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/'
            }}
          />
        )
      }
    />
  );
};
