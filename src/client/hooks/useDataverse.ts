import { useEffect, useMemo, useState } from 'react';
import { Providers, ProviderState } from '@microsoft/mgt-element';
import { FetchRequestAdapter } from '@microsoft/kiota-http-fetchlibrary';
import { DataverseClient } from '../../dataverseClient/dataverseClient';
import { SimpleAuthenticationProvider } from '../../kiota/SimpleAuthenticationProvider';
import { getConfiguredHttpClient } from '../../kiota/helpers';
import { singletonHook } from 'react-singleton-hook';

const initDataverseClient: DataverseClient | undefined = undefined;

const useDataverseImpl = (): DataverseClient | undefined => {
  const [dataverseClient, setDataverseClient] = useState<DataverseClient | undefined>(undefined);
  const updateClient = () => {
    const authProvider = new SimpleAuthenticationProvider(async () => {
      return Providers.globalProvider.getAccessTokenForScopes(`${process.env.DATAVERSE_URL!}/user_impersonation`);
    });
    const adapter = new FetchRequestAdapter(authProvider, undefined, undefined, getConfiguredHttpClient());
    setDataverseClient(new DataverseClient(adapter));
    adapter.baseUrl = process.env.DATAVERSE_API_URL!;
  };

  useEffect(() => {
    updateClient();
  }, []);

  return dataverseClient;
};

export const useDataverse = singletonHook(initDataverseClient, useDataverseImpl);
