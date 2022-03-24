/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module OdataQueryHandler
 */

 import { RequestOption } from "@microsoft/kiota-abstractions";
 import { Middleware } from "@microsoft/kiota-http-fetchlibrary";
 
 /**
  * @class
  * @implements Middleware
  * Class for OdataQueryHandler
  */
 export class OdataQueryHandler implements Middleware {
     /**
      * @public
      * @constructor
      * To create an instance of RetryHandler
      * @param {RetryHandlerOptions} [options = new RetryHandlerOptions()] - The retry handler options value
      * @returns An instance of RetryHandler
      */
     public constructor() {}
     next: Middleware | undefined;
 
     /**
      * @public
      * @async
      * To execute the current middleware
      * @param {Context} context - The context object of the request
      * @returns A Promise that resolves to nothing
      */
     public execute(url: string, requestInit: RequestInit, requestOptions?: Record<string, RequestOption>): Promise<Response> {
         const oDataurl = url.replaceAll(/([^$])(count|deltatoken|expand|filter|format|orderby|search|select|skip|skiptoken|top)=/ig, "$1$$$2=")
         return this.next?.execute(oDataurl, requestInit, requestOptions) ?? Promise.reject();
     }
 }