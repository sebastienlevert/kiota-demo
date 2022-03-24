import { HttpClient, MiddlewareFactory } from '@microsoft/kiota-http-fetchlibrary';
import { OdataQueryHandler } from './oDataQueryHandler';

export function getConfiguredHttpClient(): HttpClient {
  let middlewareChain = MiddlewareFactory.getDefaultMiddlewareChain();
  let fetchMiddleware = middlewareChain.pop();
  middlewareChain.push(new OdataQueryHandler());
  middlewareChain.push(fetchMiddleware!);
  return new HttpClient(undefined, ...middlewareChain);
}
