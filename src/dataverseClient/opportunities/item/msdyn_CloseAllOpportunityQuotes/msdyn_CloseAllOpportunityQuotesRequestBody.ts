import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the msdyn_CloseAllOpportunityQuotes method.  */
export class Msdyn_CloseAllOpportunityQuotesRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    private _quoteStatus?: number | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new msdyn_CloseAllOpportunityQuotesRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "quoteStatus": (o, n) => { (o as unknown as Msdyn_CloseAllOpportunityQuotesRequestBody).quoteStatus = n.getNumberValue(); },
        };
    };
    /**
     * Gets the quoteStatus property value. 
     * @returns a integer
     */
    public get quoteStatus() {
        return this._quoteStatus;
    };
    /**
     * Sets the quoteStatus property value. 
     * @param value Value to set for the quoteStatus property.
     */
    public set quoteStatus(value: number | undefined) {
        this._quoteStatus = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("quoteStatus", this.quoteStatus);
        writer.writeAdditionalData(this.additionalData);
    };
}
