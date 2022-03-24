import { useEffect, useState } from 'react';
import { Providers, ProviderState } from '@microsoft/mgt-element';
import { FetchRequestAdapter, HttpClient, MiddlewareFactory } from '@microsoft/kiota-http-fetchlibrary';
import { GraphClient } from './../../graphClient/graphClient';
import { SimpleAuthenticationProvider } from './../../kiota/SimpleAuthenticationProvider';
import { OdataQueryHandler } from '../dashboardTab/helpers/oDataQueryHandler';

export function useMicrosoftGraph(): [
  {
    client: GraphClient;
    isSignedIn: boolean;
  }
] {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [graphClient, setGraphClient] = useState<GraphClient | undefined>();

  const updateState = () => {
    let provider = Providers.globalProvider;
    setIsSignedIn(provider && provider.state === ProviderState.SignedIn); 
  };

  useEffect(() => {
    Providers.onProviderUpdated(updateState);
    updateState();
    
    const authProvider = new SimpleAuthenticationProvider(async () => { return Providers.globalProvider.getAccessToken(); });
    let middlewareChain = MiddlewareFactory.getDefaultMiddlewareChain();
    
    let fetchMiddleware = middlewareChain.pop();
    middlewareChain.push(new OdataQueryHandler());
    middlewareChain.push(fetchMiddleware!);
    const httpClient = new HttpClient(undefined, ...middlewareChain);
    const adapter = new FetchRequestAdapter(authProvider, undefined, undefined, httpClient);
    setGraphClient(new GraphClient(adapter));

    return () => {
      Providers.removeProviderUpdatedListener(updateState);
    };
  }, []);

  return [{isSignedIn: isSignedIn, client: graphClient!}];
}
