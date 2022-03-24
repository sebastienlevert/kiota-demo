import * as React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

export interface IPrivateRouteProps extends RouteProps {
  key: string;
  path: string;
  exact: boolean;
  component?: any;
  isAuthenticated?: boolean;
  isPublic?: boolean;
}

export const PrivateRoute: React.FunctionComponent<IPrivateRouteProps> = (props: IPrivateRouteProps) => {
  const { path, exact, key, isPublic, component: Component, isAuthenticated, ...rest } = props;

  return (
    <Route
      {...rest}
      key={key}
      path={path}
      exact={exact}
      render={routeProps =>
        isAuthenticated || isPublic ? (
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
