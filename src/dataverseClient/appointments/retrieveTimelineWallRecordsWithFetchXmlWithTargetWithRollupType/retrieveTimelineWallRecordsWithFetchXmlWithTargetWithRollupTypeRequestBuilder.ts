import {RetrieveTimelineWallRecordsResponse} from '../../models/microsoft/dynamics/cRM/';
import {createRetrieveTimelineWallRecordsResponseFromDiscriminatorValue} from '../../models/microsoft/dynamics/cRM/createRetrieveTimelineWallRecordsResponseFromDiscriminatorValue';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the RetrieveTimelineWallRecords method.  */
export class RetrieveTimelineWallRecordsWithFetchXmlWithTargetWithRollupTypeRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new RetrieveTimelineWallRecordsWithFetchXmlWithTargetWithRollupTypeRequestBuilder and sets the default values.
     * @param FetchXml Usage: FetchXml='{FetchXml}'
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param RollupType Usage: RollupType={RollupType}
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, fetchXml?: string | undefined, rollupType?: number | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/appointments/Microsoft.Dynamics.CRM.RetrieveTimelineWallRecords(FetchXml='{FetchXml}',Target=@Target,RollupType={RollupType}){?Target}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["FetchXml"] = fetchXml
        urlTplParams["RollupType"] = rollupType
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke function RetrieveTimelineWallRecords
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    Target?: string
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
     * Invoke function RetrieveTimelineWallRecords
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of RetrieveTimelineWallRecordsResponse
     */
    public get(q?: {
                    Target?: string
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<RetrieveTimelineWallRecordsResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<RetrieveTimelineWallRecordsResponse>(requestInfo, createRetrieveTimelineWallRecordsResponseFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
