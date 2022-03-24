import {Quote} from '../../../models/microsoft/dynamics/cRM/';
import {createQuoteFromDiscriminatorValue} from '../../../models/microsoft/dynamics/cRM/createQuoteFromDiscriminatorValue';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the msdyn_CreateQuoteFromOpportunity method.  */
export class Msdyn_CreateQuoteFromOpportunityRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new Msdyn_CreateQuoteFromOpportunityRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/opportunities/{opportunity_opportunityid}/Microsoft.Dynamics.CRM.msdyn_CreateQuoteFromOpportunity";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke action msdyn_CreateQuoteFromOpportunity
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPostRequestInformation(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Invoke action msdyn_CreateQuoteFromOpportunity
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Quote
     */
    public post(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Quote | undefined> {
        const requestInfo = this.createPostRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendAsync<Quote>(requestInfo, createQuoteFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
