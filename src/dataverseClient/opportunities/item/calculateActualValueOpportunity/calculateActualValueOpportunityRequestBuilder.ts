import {CalculateActualValueOpportunityResponse} from '../../../models/microsoft/dynamics/cRM/';
import {createCalculateActualValueOpportunityResponseFromDiscriminatorValue} from '../../../models/microsoft/dynamics/cRM/createCalculateActualValueOpportunityResponseFromDiscriminatorValue';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the CalculateActualValueOpportunity method.  */
export class CalculateActualValueOpportunityRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new CalculateActualValueOpportunityRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/opportunities/{opportunity_opportunityid}/Microsoft.Dynamics.CRM.CalculateActualValueOpportunity";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke action CalculateActualValueOpportunity
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
     * Invoke action CalculateActualValueOpportunity
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CalculateActualValueOpportunityResponse
     */
    public post(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CalculateActualValueOpportunityResponse | undefined> {
        const requestInfo = this.createPostRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendAsync<CalculateActualValueOpportunityResponse>(requestInfo, createCalculateActualValueOpportunityResponseFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
