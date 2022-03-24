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

export const Groups: React.FunctionComponent = () => {
  const { isSignedIn } = useGraphToolkit();
  //const { client } = useGraph();
  const [groups, setGroups] = React.useState<Group[] | undefined>(undefined);

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
  }, [isSignedIn]);

  const fetchGroups = async (client: GraphServiceClient) => {
    const data = await client.groups.get({
      top: 3,
      select: ['displayName', 'id'],
      orderby: ['displayName desc']
    });
    setGroups(data?.value);
  };

  return (
    <>
      <PageHeader title={'Groups'} description={'Groups.'}></PageHeader>

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
          
          */}
      <div>
        {isSignedIn && (
          <>
            {groups?.map(group => (
              <div key={group.id}>{group.displayName}</div>
            ))}
          </>
        )}
      </div>
    </>
  );
};
