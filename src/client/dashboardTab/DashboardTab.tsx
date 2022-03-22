import * as React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
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

/**
 * Implementation of the Dashboard content page
 */
export const DashboardTab = () => {
  const [{ inTeams, themeString, context }] = useTeams();
  const [entityId, setEntityId] = useState<string | undefined>();
  const [name, setName] = useState<string>();
  const [error, setError] = useState<string>();
  const [themeName, setThemeName] = useState<string>();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();

  useEffect(() => {
    if (inTeams === true) {
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
      setEntityId('Not in Microsoft Teams');
    }
  }, [inTeams]);

  useEffect(() => {
    if (context) {
      setEntityId(context.page.id);
    }
  }, [context]);

  initializeIcons();

  /**
   * The render() method to create the UI of the tab
   */
  return (
    <DynamicThemeProvider inTeams={inTeams} themeString={themeString}>
      <HashRouter>
        <AutoSwitchLayout>
          <React.Suspense fallback={<ProgressIndicator label="Page loading..." />}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route exact path="/home" component={Home} />
              <PrivateRoute path="/configurations" component={Dashboard} />
            </Switch>
          </React.Suspense>
        </AutoSwitchLayout>
      </HashRouter>
    </DynamicThemeProvider>
  );
};
