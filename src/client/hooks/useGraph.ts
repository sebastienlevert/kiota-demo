import { useEffect, useState } from 'react';
import { Providers } from '@microsoft/mgt-element';
import { FetchRequestAdapter } from '@microsoft/kiota-http-fetchlibrary';
import { GraphClient } from '../../graphClient/graphClient';
import { SimpleAuthenticationProvider } from '../../kiota/SimpleAuthenticationProvider';
import { getConfiguredHttpClient } from '../../kiota/helpers';
import { singletonHook } from 'react-singleton-hook';

const initGraphClient: GraphClient | undefined = undefined;

const useGraphImpl = (): GraphClient | undefined => {
  const [graphClient, setGraphClient] = useState<GraphClient | undefined>();

  useEffect(() => {
    const authProvider = new SimpleAuthenticationProvider(async () => {
      return Providers.globalProvider.getAccessToken();
    });
    const adapter = new FetchRequestAdapter(authProvider, undefined, undefined, getConfiguredHttpClient());
    setGraphClient(new GraphClient(adapter));
  }, []);

  return graphClient;
};

export const useGraph = singletonHook(initGraphClient, useGraphImpl);
