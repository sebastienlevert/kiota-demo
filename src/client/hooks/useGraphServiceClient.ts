import { useEffect, useState } from 'react';
import { Providers } from '@microsoft/mgt-element';
import { SimpleAuthenticationProvider } from '../../kiota/SimpleAuthenticationProvider';
import { getDefaultMiddlewareChain } from '@microsoft/microsoft-graph-client';
import { OdataQueryHandler } from '../../kiota/oDataQueryHandler';
import { GraphServiceClient } from '@microsoft/msgraph-sdk-javascript';

export function useGraphServiceClient(): {
  client: GraphServiceClient;
} {
  const [graphServiceClient, setGraphServiceClient] = useState<GraphServiceClient | undefined>();

  useEffect(() => {
    const authProvider = new SimpleAuthenticationProvider(async () => {
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
    setGraphServiceClient(client);
  }, []);

  return { client: graphServiceClient! };
}
