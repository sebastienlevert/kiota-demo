import * as React from 'react';

const routes = {
  key: 'home',
  name: 'Home',
  icon: 'Home',
  path: '/',
  exact: true,
  isPublic: true,
  component: React.lazy(async () => ({ default: (await import('./pages/Home')).Home })),
  children: [
    {
      key: 'microsoft-graph',
      name: 'Microsoft Graph SDK',
      icon: 'Embed',
      children: [
        {
          key: 'groups',
          name: 'Groups',
          path: '/groups',
          icon: 'Mail',
          exact: true,
          component: React.lazy(async () => ({ default: (await import('./pages/Graph/Groups')).Groups }))
        }
      ]
    },
    {
      key: 'kiota-graph',
      name: 'Graph with Kiota',
      icon: 'Embed',
      children: [
        {
          key: 'users',
          name: 'Users',
          path: '/users',
          icon: 'People',
          exact: true,
          component: React.lazy(async () => ({ default: (await import('./pages/Graph/Users')).Users }))
        }
      ]
    },
    {
      key: 'dataverse',
      name: 'Dataverse',
      icon: 'Dynamics365Logo',
      exact: true,
      children: [
        {
          key: 'opportunities',
          name: 'Opportunities',
          path: '/opportunities',
          icon: 'FolderOpen',
          exact: true,
          component: React.lazy(async () => ({
            default: (await import('./pages/Dataverse/Opportunities')).Opportunities
          }))
        }
      ]
    },
    {
      key: 'mgt',
      name: 'Microsoft Graph Toolkit',
      icon: 'Embed',
      children: [
        {
          key: 'users',
          name: 'Users',
          path: '/mgt-users',
          icon: 'People',
          exact: true,
          component: React.lazy(async () => ({ default: (await import('./pages/Toolkit/Users')).Users }))
        },
        {
          key: 'teams',
          name: 'Teams',
          path: '/teams',
          icon: 'TeamsLogo',
          exact: true,
          component: React.lazy(async () => ({ default: (await import('./pages/Toolkit/Teams')).Teams }))
        }
      ]
    }
  ]
};

export default routes;
