import * as React from 'react';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { useMicrosoftGraph } from '../../../hooks/useMicrosoftGraph';
import { List } from '../../../mgt/MgtList';
import { useEffect } from 'react';
import { GraphClient } from '../../../../graphClient/graphClient';
import { DetailsListLayoutMode, SelectionMode, ShimmeredDetailsList } from '@fluentui/react';
import { buildColumns } from '../../helpers/buildColumns';
import { User } from '../../../../graphClient/models/microsoft/graph/user';

export const Users: React.FunctionComponent = () => {
  const [{ isSignedIn, client }] = useMicrosoftGraph();
  const [users, setUsers] = React.useState<User[] | undefined>(undefined);
  
  useEffect(() => {
    if(client) {
      fetchUsers(client);
    }    
  }, [isSignedIn, client]);

  const fetchUsers = async (client: GraphClient) => {
    const users = await client.users.get({
      top: 10,
      orderby: ["displayName desc"],
      select: ["displayName, id"]
    });
    setUsers(users?.value);
  }

  return (
    <>
      <PageHeader
        title={'Users'}
        description={'Use this page to manager the users available on your tenant.'}
      ></PageHeader>

          {/*<List resource='/users'></List>
          <ShimmeredDetailsList
            items={users || []}
            columns={buildColumns(usersJson!)}
            layoutMode={DetailsListLayoutMode.justified}
            selectionMode={SelectionMode.none}
            enableShimmer={!users}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            />
          
          */
          }
      <div>
        {isSignedIn && (
          <>
            {users?.map((user) => (
              <div key={user.id}>{user.displayName}</div>
            ))}
          </>
        )}
      </div>
    </>
  );
};
