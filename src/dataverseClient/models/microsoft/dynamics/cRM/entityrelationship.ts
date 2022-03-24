import {createSolutioncomponentrelationshipconfigurationFromDiscriminatorValue} from './createSolutioncomponentrelationshipconfigurationFromDiscriminatorValue';
import {Crmbaseentity, Solutioncomponentrelationshipconfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Entityrelationship extends Crmbaseentity implements Parsable {
    private _componentstate?: number | undefined;
    private _entityrelationship_config?: Solutioncomponentrelationshipconfiguration[] | undefined;
    private _entityrelationshipid?: string | undefined;
    private _overwritetime?: Date | undefined;
    private _schemaname?: string | undefined;
    private _solutionid?: string | undefined;
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new entityrelationship and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the entityrelationship_config property value. 
     * @returns a solutioncomponentrelationshipconfiguration
     */
    public get entityrelationship_config() {
        return this._entityrelationship_config;
    };
    /**
     * Sets the entityrelationship_config property value. 
     * @param value Value to set for the entityrelationship_config property.
     */
    public set entityrelationship_config(value: Solutioncomponentrelationshipconfiguration[] | undefined) {
        this._entityrelationship_config = value;
    };
    /**
     * Gets the entityrelationshipid property value. 
     * @returns a string
     */
    public get entityrelationshipid() {
        return this._entityrelationshipid;
    };
    /**
     * Sets the entityrelationshipid property value. 
     * @param value Value to set for the entityrelationshipid property.
     */
    public set entityrelationshipid(value: string | undefined) {
        this._entityrelationshipid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "componentstate": (o, n) => { (o as unknown as Entityrelationship).componentstate = n.getNumberValue(); },
            "entityrelationship_config": (o, n) => { (o as unknown as Entityrelationship).entityrelationship_config = n.getCollectionOfObjectValues<Solutioncomponentrelationshipconfiguration>(createSolutioncomponentrelationshipconfigurationFromDiscriminatorValue); },
            "entityrelationshipid": (o, n) => { (o as unknown as Entityrelationship).entityrelationshipid = n.getStringValue(); },
            "overwritetime": (o, n) => { (o as unknown as Entityrelationship).overwritetime = n.getDateValue(); },
            "schemaname": (o, n) => { (o as unknown as Entityrelationship).schemaname = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Entityrelationship).solutionid = n.getStringValue(); },
        };
    };
    /**
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
    };
    /**
     * Gets the schemaname property value. 
     * @returns a string
     */
    public get schemaname() {
        return this._schemaname;
    };
    /**
     * Sets the schemaname property value. 
     * @param value Value to set for the schemaname property.
     */
    public set schemaname(value: string | undefined) {
        this._schemaname = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeCollectionOfObjectValues<Solutioncomponentrelationshipconfiguration>("entityrelationship_config", this.entityrelationship_config);
        writer.writeStringValue("entityrelationshipid", this.entityrelationshipid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("schemaname", this.schemaname);
        writer.writeStringValue("solutionid", this.solutionid);
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
    };
}
