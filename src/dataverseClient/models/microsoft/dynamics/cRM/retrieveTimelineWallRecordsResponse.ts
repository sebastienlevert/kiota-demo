import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RetrieveTimelineWallRecordsResponse implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    private _timelineWallRecords?: string | undefined;
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
     * Instantiates a new RetrieveTimelineWallRecordsResponse and sets the default values.
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
            "timelineWallRecords": (o, n) => { (o as unknown as RetrieveTimelineWallRecordsResponse).timelineWallRecords = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("timelineWallRecords", this.timelineWallRecords);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the timelineWallRecords property value. 
     * @returns a string
     */
    public get timelineWallRecords() {
        return this._timelineWallRecords;
    };
    /**
     * Sets the timelineWallRecords property value. 
     * @param value Value to set for the TimelineWallRecords property.
     */
    public set timelineWallRecords(value: string | undefined) {
        this._timelineWallRecords = value;
    };
}
