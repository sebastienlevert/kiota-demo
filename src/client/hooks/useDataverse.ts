import { useEffect, useState } from 'react';
import { Providers, ProviderState } from '@microsoft/mgt-element';
import { FetchRequestAdapter, HttpClient, MiddlewareFactory } from '@microsoft/kiota-http-fetchlibrary';
import { DataverseClient } from '../../dataverseClient/dataverseClient';
import { SimpleAuthenticationProvider } from '../../kiota/SimpleAuthenticationProvider';
import { OdataQueryHandler } from '../dashboardTab/helpers/oDataQueryHandler';

export function useDataverse(): [
  {
    client: DataverseClient;
    isSignedIn: boolean;
  }
] {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [graphClient, setGraphClient] = useState<DataverseClient | undefined>();

  const updateState = () => {
    let provider = Providers.globalProvider;
    setIsSignedIn(provider && provider.state === ProviderState.SignedIn); 
  };

  useEffect(() => {
    Providers.onProviderUpdated(updateState);
    updateState();
    
    const authProvider = new SimpleAuthenticationProvider(async () => { return Providers.globalProvider.getAccessTokenForScopes("https://orgc2c7c244.crm.dynamics.com/user_impersonation"); });
    let middlewareChain = MiddlewareFactory.getDefaultMiddlewareChain();
    
    let fetchMiddleware = middlewareChain.pop();
    middlewareChain.push(new OdataQueryHandler());
    middlewareChain.push(fetchMiddleware!);
    const httpClient = new HttpClient(undefined, ...middlewareChain);
    const adapter = new FetchRequestAdapter(authProvider, undefined, undefined, httpClient);
    setGraphClient(new DataverseClient(adapter));
    adapter.baseUrl = "https://orgc2c7c244.crm.dynamics.com/api/data/v9.1";

    return () => {
      Providers.removeProviderUpdatedListener(updateState);
    };
  }, []);

  return [{isSignedIn: isSignedIn, client: graphClient!}];
}
