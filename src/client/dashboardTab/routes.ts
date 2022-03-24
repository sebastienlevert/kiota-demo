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
      key: 'profile',
      name: 'Profile',
      path: '/profile',
      icon: 'ContactCard',
      exact: true,
      component: React.lazy(async () => ({ default: (await import('./pages/Profile')).Profile }))
    },
    {
      key: 'microsoft-graph',
      name: 'Microsoft Graph',
      icon: 'Embed',
      children: [
        {
          key: 'users',
          name: 'Users',
          path: '/users',
          icon: 'People',
          exact: true,
          component: React.lazy(async () => ({ default: (await import('./pages/Graph/Users')).Users }))
        },
        {
          key: 'teams',
          name: 'Teams',
          path: '/teams',
          icon: 'TeamsLogo',
          exact: true,
          component: React.lazy(async () => ({ default: (await import('./pages/Graph/Teams')).Teams }))
        },
        {
          key: 'emails',
          name: 'Emails',
          path: '/emails',
          icon: 'Mail',
          exact: true,
          component: React.lazy(async () => ({ default: (await import('./pages/Graph/Emails')).Emails }))
        },
        {
          key: 'groups',
          name: 'Groups2',
          path: '/groups',
          icon: 'Mail',
          exact: true,
          component: React.lazy(async () => ({ default: (await import('./pages/Graph/Groups')).Groups }))
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
        },
        {
          key: 'appointments',
          name: 'Appointments',
          path: '/appointments',
          icon: 'FolderOpen',
          exact: true,
          component: React.lazy(async () => ({
            default: (await import('./pages/Dataverse/Appointments')).Appointments
          }))
        }
      ]
    }
  ]
};

export default routes;
