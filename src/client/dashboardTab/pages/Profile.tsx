import { Person } from '@microsoft/mgt-react';
import * as React from 'react';
import { PageHeader } from '../components/PageHeader/PageHeader';

export const Profile: React.FunctionComponent = () => {
  return (
    <>
      <PageHeader title={'Profile'} description={'Profile.'}></PageHeader>
      <Person userId="4de510fa-d280-41cc-bc7a-c17d4e358158"></Person>
    </>
  );
};
