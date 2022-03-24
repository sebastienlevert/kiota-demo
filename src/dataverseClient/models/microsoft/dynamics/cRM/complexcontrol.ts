import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {Crmbaseentity, Organization} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Complexcontrol extends Crmbaseentity implements Parsable {
    private __organizationid_value?: string | undefined;
    private _complexcontrolid?: string | undefined;
    private _complexcontrolidunique?: string | undefined;
    private _complexcontrolxml?: string | undefined;
    private _componentstate?: number | undefined;
    private _description?: string | undefined;
    private _introducedversion?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _solutionid?: string | undefined;
    private _type?: number | undefined;
    private _version?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Gets the complexcontrolid property value. 
     * @returns a string
     */
    public get complexcontrolid() {
        return this._complexcontrolid;
    };
    /**
     * Sets the complexcontrolid property value. 
     * @param value Value to set for the complexcontrolid property.
     */
    public set complexcontrolid(value: string | undefined) {
        this._complexcontrolid = value;
    };
    /**
     * Gets the complexcontrolidunique property value. 
     * @returns a string
     */
    public get complexcontrolidunique() {
        return this._complexcontrolidunique;
    };
    /**
     * Sets the complexcontrolidunique property value. 
     * @param value Value to set for the complexcontrolidunique property.
     */
    public set complexcontrolidunique(value: string | undefined) {
        this._complexcontrolidunique = value;
    };
    /**
     * Gets the complexcontrolxml property value. 
     * @returns a string
     */
    public get complexcontrolxml() {
        return this._complexcontrolxml;
    };
    /**
     * Sets the complexcontrolxml property value. 
     * @param value Value to set for the complexcontrolxml property.
     */
    public set complexcontrolxml(value: string | undefined) {
        this._complexcontrolxml = value;
    };
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
     * Instantiates a new complexcontrol and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_organizationid_value": (o, n) => { (o as unknown as Complexcontrol)._organizationid_value = n.getStringValue(); },
            "complexcontrolid": (o, n) => { (o as unknown as Complexcontrol).complexcontrolid = n.getStringValue(); },
            "complexcontrolidunique": (o, n) => { (o as unknown as Complexcontrol).complexcontrolidunique = n.getStringValue(); },
            "complexcontrolxml": (o, n) => { (o as unknown as Complexcontrol).complexcontrolxml = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Complexcontrol).componentstate = n.getNumberValue(); },
            "description": (o, n) => { (o as unknown as Complexcontrol).description = n.getStringValue(); },
            "introducedversion": (o, n) => { (o as unknown as Complexcontrol).introducedversion = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Complexcontrol).ismanaged = n.getBooleanValue(); },
            "name": (o, n) => { (o as unknown as Complexcontrol).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Complexcontrol).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Complexcontrol).overwritetime = n.getDateValue(); },
            "solutionid": (o, n) => { (o as unknown as Complexcontrol).solutionid = n.getStringValue(); },
            "type": (o, n) => { (o as unknown as Complexcontrol).type = n.getNumberValue(); },
            "version": (o, n) => { (o as unknown as Complexcontrol).version = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Complexcontrol).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the introducedversion property value. 
     * @returns a string
     */
    public get introducedversion() {
        return this._introducedversion;
    };
    /**
     * Sets the introducedversion property value. 
     * @param value Value to set for the introducedversion property.
     */
    public set introducedversion(value: string | undefined) {
        this._introducedversion = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("complexcontrolid", this.complexcontrolid);
        writer.writeStringValue("complexcontrolidunique", this.complexcontrolidunique);
        writer.writeStringValue("complexcontrolxml", this.complexcontrolxml);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("type", this.type);
        writer.writeNumberValue("version", this.version);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
    /**
     * Gets the type property value. 
     * @returns a integer
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: number | undefined) {
        this._type = value;
    };
    /**
     * Gets the version property value. 
     * @returns a integer
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. 
     * @param value Value to set for the version property.
     */
    public set version(value: number | undefined) {
        this._version = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
