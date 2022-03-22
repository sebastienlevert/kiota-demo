import { Home } from './pages/Home';
import { Opportunities } from './pages/Opportunities';
import { Profile } from './pages/Profile';

const routes = {
  key: 'home',
  name: 'Home',
  icon: 'Home',
  path: '/',
  component: Home,
  children: [
    {
      key: 'profile',
      name: 'Profile',
      path: '/profile',
      component: Profile
    },
    {
      key: 'order',
      name: 'Order',
      icon: 'visualizeApp',
      children: [
        {
          key: 'purchase-order',
          name: 'Purchase Order',
          component: Opportunities
        },
        {
          key: 'sales-order',
          name: 'Sales Order'
        }
      ]
    },
    {
      key: 'mangement',
      name: 'System Management',
      icon: 'managementApp',
      children: [
        {
          key: 'organization',
          name: 'Organization',
          icon: 'Org'
        },
        {
          key: 'user',
          name: 'User',
          icon: 'People'
        },
        {
          key: 'authority',
          name: 'Authority',
          icon: 'SecurityGroup'
        },
        {
          key: 'settings',
          name: 'Settings',
          icon: 'Settings',
          children: [
            {
              key: 'list',
              name: 'List'
            },
            {
              key: 'unit',
              name: 'Unit'
            }
          ]
        }
      ]
    }
  ]
};

export default routes;
