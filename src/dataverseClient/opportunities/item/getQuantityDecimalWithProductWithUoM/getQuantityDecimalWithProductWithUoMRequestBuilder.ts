import {GetQuantityDecimalResponse} from '../../../models/microsoft/dynamics/cRM/';
import {createGetQuantityDecimalResponseFromDiscriminatorValue} from '../../../models/microsoft/dynamics/cRM/createGetQuantityDecimalResponseFromDiscriminatorValue';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the GetQuantityDecimal method.  */
export class GetQuantityDecimalWithProductWithUoMRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new GetQuantityDecimalWithProductWithUoMRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/opportunities/{opportunity_opportunityid}/Microsoft.Dynamics.CRM.GetQuantityDecimal(Product=@Product,UoM=@UoM){?Product,UoM}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke function GetQuantityDecimal
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    Product?: string,
                    UoM?: string
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Invoke function GetQuantityDecimal
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of GetQuantityDecimalResponse
     */
    public get(q?: {
                    Product?: string,
                    UoM?: string
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<GetQuantityDecimalResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<GetQuantityDecimalResponse>(requestInfo, createGetQuantityDecimalResponseFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
