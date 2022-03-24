import {Appointment, AppointmentCollectionResponse} from '../models/microsoft/dynamics/cRM/';
import {createAppointmentCollectionResponseFromDiscriminatorValue} from '../models/microsoft/dynamics/cRM/createAppointmentCollectionResponseFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from '../models/microsoft/dynamics/cRM/createAppointmentFromDiscriminatorValue';
import {ODataError} from '../models/microsoft/dynamics/cRM/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/microsoft/dynamics/cRM/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {RetrieveTimelineWallRecordsWithFetchXmlWithTargetWithRollupTypeRequestBuilder} from './retrieveTimelineWallRecordsWithFetchXmlWithTargetWithRollupType/retrieveTimelineWallRecordsWithFetchXmlWithTargetWithRollupTypeRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of appointment entities.  */
export class AppointmentsRequestBuilder {
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new AppointmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/appointments{?top,skip,search,filter,count,orderby,select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get entities from appointments
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    count?: boolean,
                    expand?: string[],
                    filter?: string,
                    orderby?: string[],
                    search?: string,
                    select?: string[],
                    skip?: number,
                    top?: number
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
     * Add new entity to appointments
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: Appointment | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if(h) requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Get entities from appointments
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AppointmentCollectionResponse
     */
    public get(q?: {
                    count?: boolean,
                    expand?: string[],
                    filter?: string,
                    orderby?: string[],
                    search?: string,
                    select?: string[],
                    skip?: number,
                    top?: number
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AppointmentCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AppointmentCollectionResponse>(requestInfo, createAppointmentCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Add new entity to appointments
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Appointment
     */
    public post(body: Appointment | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Appointment | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Appointment>(requestInfo, createAppointmentFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Provides operations to call the RetrieveTimelineWallRecords method.
     * @param FetchXml Usage: FetchXml='{FetchXml}'
     * @param RollupType Usage: RollupType={RollupType}
     * @returns a RetrieveTimelineWallRecordsWithFetchXmlWithTargetWithRollupTypeRequestBuilder
     */
    public retrieveTimelineWallRecordsWithFetchXmlWithTargetWithRollupType(fetchXml: string | undefined, rollupType: number | undefined) : RetrieveTimelineWallRecordsWithFetchXmlWithTargetWithRollupTypeRequestBuilder {
        if(!fetchXml) throw new Error("fetchXml cannot be undefined");
        if(!rollupType) throw new Error("rollupType cannot be undefined");
        return new RetrieveTimelineWallRecordsWithFetchXmlWithTargetWithRollupTypeRequestBuilder(this.pathParameters, this.requestAdapter, fetchXml, rollupType);
    };
}
