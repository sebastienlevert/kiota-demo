// Default entry point for client scripts
// Automatically generated
// Please avoid from modifying to much...
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { TeamsMsal2Provider } from '@microsoft/mgt-teams-msal2-provider';
import { Providers } from '@microsoft/mgt-react';
import * as MicrosoftTeams from "@microsoft/teams-js";

export const render = (type: any, element: HTMLElement) => {
  ReactDOM.render(React.createElement(type, {}), element);
};
// Automatically added for the dashboardTab tab
export * from './dashboardTab/DashboardTab';

TeamsMsal2Provider.microsoftTeamsLib = MicrosoftTeams;
Providers.globalProvider = new TeamsMsal2Provider({
  clientId: 'e90c2d1b-7727-4cba-a014-5f15cb8a8003',
  scopes: ['User.Read'],
  authPopupUrl: '/auth.html'
});