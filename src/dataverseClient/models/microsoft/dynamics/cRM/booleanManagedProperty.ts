import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BooleanManagedProperty implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    private _canBeChanged?: boolean | undefined;
    private _managedPropertyLogicalName?: string | undefined;
    private _value?: boolean | undefined;
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
     * Gets the canBeChanged property value. 
     * @returns a boolean
     */
    public get canBeChanged() {
        return this._canBeChanged;
    };
    /**
     * Sets the canBeChanged property value. 
     * @param value Value to set for the CanBeChanged property.
     */
    public set canBeChanged(value: boolean | undefined) {
        this._canBeChanged = value;
    };
    /**
     * Instantiates a new BooleanManagedProperty and sets the default values.
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
            "canBeChanged": (o, n) => { (o as unknown as BooleanManagedProperty).canBeChanged = n.getBooleanValue(); },
            "managedPropertyLogicalName": (o, n) => { (o as unknown as BooleanManagedProperty).managedPropertyLogicalName = n.getStringValue(); },
            "value": (o, n) => { (o as unknown as BooleanManagedProperty).value = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the managedPropertyLogicalName property value. 
     * @returns a string
     */
    public get managedPropertyLogicalName() {
        return this._managedPropertyLogicalName;
    };
    /**
     * Sets the managedPropertyLogicalName property value. 
     * @param value Value to set for the ManagedPropertyLogicalName property.
     */
    public set managedPropertyLogicalName(value: string | undefined) {
        this._managedPropertyLogicalName = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("canBeChanged", this.canBeChanged);
        writer.writeStringValue("managedPropertyLogicalName", this.managedPropertyLogicalName);
        writer.writeBooleanValue("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. 
     * @returns a boolean
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the Value property.
     */
    public set value(value: boolean | undefined) {
        this._value = value;
    };
}
