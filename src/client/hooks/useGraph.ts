import { useEffect, useState } from 'react';
import { Providers } from '@microsoft/mgt-element';
import { FetchRequestAdapter, HttpClient, MiddlewareFactory } from '@microsoft/kiota-http-fetchlibrary';
import { GraphClient } from '../../graphClient/graphClient';
import { SimpleAuthenticationProvider } from '../../kiota/SimpleAuthenticationProvider';
import { getConfiguredHttpClient } from '../../kiota/helpers';

export function useGraph(): {
  client: GraphClient;
} {
  const [graphClient, setGraphClient] = useState<GraphClient | undefined>();

  useEffect(() => {
    const authProvider = new SimpleAuthenticationProvider(async () => {
      return Providers.globalProvider.getAccessToken();
    });
    const adapter = new FetchRequestAdapter(authProvider, undefined, undefined, getConfiguredHttpClient());
    setGraphClient(new GraphClient(adapter));
  }, []);

  return { client: graphClient! };
}
