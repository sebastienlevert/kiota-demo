import * as React from 'react';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { useGraphToolkit } from '../../../hooks/useGraphToolkit';
import { List } from '../../../mgt/MgtList';

export const Teams: React.FunctionComponent = () => {
  const { isSignedIn } = useGraphToolkit();

  return (
    <>
      <PageHeader title={'Joined Teams'} description={'View all your joined Teams'}></PageHeader>

      <div>
        {isSignedIn && (
          <List resource="/me/joinedTeams?$select=id,displayName,description" scopes={['User.Read.All']}></List>
        )}
      </div>
    </>
  );
};
