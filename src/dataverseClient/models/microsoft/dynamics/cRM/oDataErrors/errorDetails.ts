import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ErrorDetails implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    private _code?: string | undefined;
    private _message?: string | undefined;
    private _target?: string | undefined;
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
     * Gets the code property value. 
     * @returns a string
     */
    public get code() {
        return this._code;
    };
    /**
     * Sets the code property value. 
     * @param value Value to set for the code property.
     */
    public set code(value: string | undefined) {
        this._code = value;
    };
    /**
     * Instantiates a new ErrorDetails and sets the default values.
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
            "code": (o, n) => { (o as unknown as ErrorDetails).code = n.getStringValue(); },
            "message": (o, n) => { (o as unknown as ErrorDetails).message = n.getStringValue(); },
            "target": (o, n) => { (o as unknown as ErrorDetails).target = n.getStringValue(); },
        };
    };
    /**
     * Gets the message property value. 
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. 
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("code", this.code);
        writer.writeStringValue("message", this.message);
        writer.writeStringValue("target", this.target);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the target property value. 
     * @returns a string
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. 
     * @param value Value to set for the target property.
     */
    public set target(value: string | undefined) {
        this._target = value;
    };
}
