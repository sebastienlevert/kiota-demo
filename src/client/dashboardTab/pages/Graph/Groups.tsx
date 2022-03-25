import * as React from 'react';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { useGraphToolkit } from '../../../hooks/useGraphToolkit';
import { List } from '../../../mgt/MgtList';
import { Group } from '@microsoft/msgraph-sdk-javascript/lib/models/microsoft/graph/group';
import { useEffect } from 'react';
import { GraphServiceClient, SimpleAuthenticationProvider } from '@microsoft/msgraph-sdk-javascript';
import { Providers } from '@microsoft/mgt-element';
import { getDefaultMiddlewareChain, HttpClient } from '@microsoft/microsoft-graph-client';
import { OdataQueryHandler } from '../../../../kiota/oDataQueryHandler';
import { DetailsList, IColumn, Toggle } from '@fluentui/react';
import { GroupCollectionResponse } from '@microsoft/msgraph-sdk-javascript/lib/models/microsoft/graph';

export const Groups: React.FunctionComponent = () => {
  const { isSignedIn } = useGraphToolkit();
  const [groups, setGroups] = React.useState<Group[] | undefined>(undefined);
  const [useFluentAPI, setFluentAPI] = React.useState<boolean>(true);

  useEffect(() => {
    let authProvider = new SimpleAuthenticationProvider(async () => {
      return Providers.globalProvider.getAccessToken();
    });

    let allowedHosts = new Set<string>();
    allowedHosts.add('graph.microsoft.com');

    let middlewareChain = getDefaultMiddlewareChain(
      {
        authProvider: authProvider
      },
      allowedHosts
    );

    let fetchMiddleware = middlewareChain.pop();
    middlewareChain.push(new OdataQueryHandler());
    middlewareChain.push(fetchMiddleware!);

    const client = GraphServiceClient.init({
      authProvider: authProvider,
      middleware: middlewareChain
    });

    fetchGroups(client);
  }, [isSignedIn, useFluentAPI]);

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
      key: 'mail',
      fieldName: 'mail',
      name: 'Mail',
      minWidth: 300,
      maxWidth: 300
    }
  ];

  const fetchGroups = async (client: GraphServiceClient) => {
    const options = {
      top: 3,
      select: ['displayName', 'id', 'mail'],
      orderby: ['displayName desc']
    };

    let data: GroupCollectionResponse | undefined;

    if (useFluentAPI) {
      data = await client.groups.get(options);
    } else {
      data = (await client
        .api('/groups')
        .top(options.top)
        .select(options.select)
        .orderby(options.orderby)
        .get()) as GroupCollectionResponse;
    }

    setGroups(data?.value);
  };

  function _onToggleChange(ev: React.MouseEvent<HTMLElement>, checked?: boolean) {
    setFluentAPI(checked!);
  }

  return (
    <>
      <PageHeader title={'Groups'} description={'Groups.'}></PageHeader>

      <div>
        {isSignedIn && (
          <>
            <Toggle label="Use fluent-style API" defaultChecked onText="On" offText="Off" onChange={_onToggleChange} />
            <DetailsList items={groups || []} columns={columns} />
          </>
        )}
      </div>
    </>
  );
};
