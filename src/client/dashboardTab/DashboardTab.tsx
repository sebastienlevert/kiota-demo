import * as React from 'react';
import { HashRouter, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { get, isArray, isNil, flattenDeep } from 'lodash';
import { useState, useEffect } from 'react';
import { useTeams } from 'msteams-react-base-component';
import { app, authentication } from '@microsoft/teams-js';
import jwtDecode from 'jwt-decode';
import { PrivateRoute } from './components/PrivateRoute';
import { initializeIcons, ProgressIndicator, ThemeProvider } from '@fluentui/react';
import Dashboard from './pages/Dashboard';
import { Home } from './pages/Home';
import AutoSwitchLayout from './components/layout/AutoSwitchLayout';
import { DynamicThemeProvider } from './global/themes';
import { Profile } from './pages/Profile';
import { Users } from './pages/Graph/Users';
import { TeamsMsal2Provider } from '@microsoft/mgt-teams-msal2-provider';
import * as MicrosoftTeams from '@microsoft/teams-js';
import { LoginType, Providers } from '@microsoft/mgt-react';
import { Msal2Provider } from '@microsoft/mgt-msal2-provider';
import { Teams } from './pages/Graph/Teams';
import { Emails } from './pages/Graph/Emails';
import { hierarchize } from './global/hierarchical';
import routes from './routes';
import { useGraphToolkit } from '../hooks/useGraphToolkit';
import { BrowserCacheLocation } from '@azure/msal-browser';

/**
 * Implementation of the Dashboard content page
 */
export const DashboardTab = () => {
  const [{ inTeams, themeString, context }] = useTeams();
  const { isSignedIn } = useGraphToolkit();
  const [entityId, setEntityId] = useState<string | undefined>();
  const [name, setName] = useState<string>();
  const [error, setError] = useState<string>();
  const [themeName, setThemeName] = useState<string>();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();

  const scopes = [
    'User.Read',
    'User.Read.All',
    'Mail.Read',
    'Group.Read.All',
    `${process.env.DATAVERSE_URL!}/user_impersonation`
  ];
  TeamsMsal2Provider.microsoftTeamsLib = MicrosoftTeams;

  useEffect(() => {
    if (inTeams === true) {
      Providers.globalProvider = new TeamsMsal2Provider({
        clientId: process.env.CLIENT_ID!,
        scopes: scopes,
        authPopupUrl: '/auth.html'
      });

      authentication
        .getAuthToken({
          resources: [process.env.TAB_APP_URI as string],
          silent: false
        } as authentication.AuthTokenRequestParameters)
        .then(token => {
          const decoded: { [key: string]: any } = jwtDecode(token) as { [key: string]: any };
          setName(decoded!.name);
          setIsAuthenticated(true);
          app.notifySuccess();
        })
        .catch(message => {
          setError(message);
          setIsAuthenticated(false);
          app.notifyFailure({
            reason: app.FailedReason.AuthFailed,
            message
          });
        });
    } else {
      Providers.globalProvider = new Msal2Provider({
        clientId: process.env.CLIENT_ID!,
        scopes: scopes,
        loginType: LoginType.Popup
      });
    }
  }, [inTeams]);

  useEffect(() => {
    if (context) {
      setEntityId(context.page.id);
    }
  }, [context]);

  initializeIcons();

  function renderRoute(route) {
    const isGroup = isArray(route.children);
    const routeComponent = route.isPublic ? (
      <Route key={route.uniqueKey} path={route.path} component={route.component} exact={route.exact}></Route>
    ) : (
      <PrivateRoute
        key={route.uniqueKey}
        path={route.path}
        component={route.component}
        exact={route.exact}
        isPublic={route.isPublic}
        isAuthenticated={isSignedIn}
      ></PrivateRoute>
    );

    const childComponents = isGroup ? route.children.map(renderRoute) : [];
    return [routeComponent, ...childComponents];
  }

  const keyName = 'key';
  const pathName = 'path';
  const uniqueKeyName = 'uniqueKey';

  function generateRoutePath(node, parent) {
    const parentUniqueKey = get(parent, uniqueKeyName);
    const uniqueKey = parentUniqueKey ? parentUniqueKey + '.' + node[keyName] : node[keyName];

    const parentPath = get(parent, pathName, '');
    const routePath = get(node, pathName, `${parentPath}/${node[keyName]}`);
    node[uniqueKeyName] = uniqueKey;
    node[pathName] = routePath;
  }

  const routeList = hierarchize(routes, null, generateRoutePath);

  const routeComponents = renderRoute(routeList);
  const flatRouteComponents = flattenDeep(routeComponents);

  /**
   * The render() method to create the UI of the tab
   */
  return (
    <DynamicThemeProvider inTeams={inTeams} themeString={themeString}>
      <HashRouter>
        <AutoSwitchLayout>
          <React.Suspense fallback={<ProgressIndicator label="Page loading..." />}>
            <Switch>{flatRouteComponents}</Switch>
          </React.Suspense>
        </AutoSwitchLayout>
      </HashRouter>
    </DynamicThemeProvider>
  );
};
