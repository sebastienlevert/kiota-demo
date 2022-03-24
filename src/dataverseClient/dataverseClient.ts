import {AppointmentsRequestBuilder} from './appointments/appointmentsRequestBuilder';
import {AppointmentItemRequestBuilder} from './appointments/item/appointmentItemRequestBuilder';
import {OpportunityItemRequestBuilder} from './opportunities/item/opportunityItemRequestBuilder';
import {OpportunitiesRequestBuilder} from './opportunities/opportunitiesRequestBuilder';
import {enableBackingStoreForSerializationWriterFactory, getPathParameters, ParseNodeFactoryRegistry, registerDefaultDeserializer, registerDefaultSerializer, RequestAdapter, SerializationWriterFactoryRegistry} from '@microsoft/kiota-abstractions';
import {JsonParseNodeFactory, JsonSerializationWriterFactory} from '@microsoft/kiota-serialization-json';
import {TextParseNodeFactory, TextSerializationWriterFactory} from '@microsoft/kiota-serialization-text';

/** The main entry point of the SDK, exposes the configuration and the fluent API.  */
export class DataverseClient {
    public get appointments(): AppointmentsRequestBuilder {
        return new AppointmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunities(): OpportunitiesRequestBuilder {
        return new OpportunitiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the ApiSdk.appointments.item collection
     * @param id Unique identifier of the item
     * @returns a appointmentItemRequestBuilder
     */
    public appointmentsById(id: string) : AppointmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["appointment_activityid"] = id
        return new AppointmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DataverseClient and sets the default values.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(requestAdapter: RequestAdapter) {
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.pathParameters = {};
        this.urlTemplate = "{+baseurl}";
        this.requestAdapter = requestAdapter;
        registerDefaultSerializer(JsonSerializationWriterFactory);
        registerDefaultSerializer(TextSerializationWriterFactory);
        registerDefaultDeserializer(JsonParseNodeFactory);
        registerDefaultDeserializer(TextParseNodeFactory);
        requestAdapter.baseUrl = "http://localhost";
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item collection
     * @param id Unique identifier of the item
     * @returns a opportunityItemRequestBuilder
     */
    public opportunitiesById(id: string) : OpportunityItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["opportunity_opportunityid"] = id
        return new OpportunityItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
