import * as React from 'react';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { useMicrosoftGraph } from '../../../hooks/useMicrosoftGraph';
import { List } from '../../../mgt/MgtList';

export const Teams: React.FunctionComponent = () => {
  const [{ isSignedIn }] = useMicrosoftGraph();

  return (
    <>
      <PageHeader
        title={'Joined Teams'}
        description={'View all your joined Teams'}
      ></PageHeader>

      <div>
        {isSignedIn && (
          <List resource='/me/joinedTeams?$select=id,displayName,description' scopes={['User.Read.All']}></List>
        )}
      </div>
    </>
  );
};
