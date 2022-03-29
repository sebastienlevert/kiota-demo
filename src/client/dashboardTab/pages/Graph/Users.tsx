import * as React from 'react';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { useGraphToolkit } from '../../../hooks/useGraphToolkit';
import { useEffect } from 'react';
import { GraphClient } from '../../../../graphClient/graphClient';
import { User } from '../../../../graphClient/models/microsoft/graph/user';
import { useGraph } from '../../../hooks/useGraph';
import { DetailsList, IColumn } from '@fluentui/react';

export const Users: React.FunctionComponent = () => {
  const { isSignedIn } = useGraphToolkit();
  const client = useGraph();
  const [users, setUsers] = React.useState<User[] | undefined>(undefined);

  useEffect(() => {
    if (client) {
      fetchUsers(client);
    }
  }, [isSignedIn, client]);

  const columns: IColumn[] = [
    {
      key: 'id',
      fieldName: 'id',
      name: 'User',
      minWidth: 300,
      maxWidth: 300
    },
    {
      key: 'displayName',
      fieldName: 'displayName',
      name: 'Name',
      minWidth: 200
    },
    {
      key: 'jobTitle',
      fieldName: 'jobTitle',
      name: 'Job Title',
      minWidth: 300,
      maxWidth: 300
    },
    {
      key: 'mail',
      fieldName: 'mail',
      name: 'Mail',
      minWidth: 300,
      maxWidth: 300
    }
  ];

  const fetchUsers = async (client: GraphClient) => {
    const users = await client.users.get({
      top: 10,
      orderby: ['displayName desc'],
      select: ['displayName, id, jobTitle, mail']
    });
    setUsers(users?.value);
  };

  return (
    <>
      <PageHeader
        title={'Users'}
        description={'Use this page to manager the users available on your tenant.'}
      ></PageHeader>
      <div>
        {isSignedIn && (
          <>
            <DetailsList items={users || []} columns={columns} />
          </>
        )}
      </div>
    </>
  );
};
