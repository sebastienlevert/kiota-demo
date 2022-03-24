import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Crmbaseentity, Organization, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Customcontroldefaultconfig extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _componentstate?: number | undefined;
    private _controldescriptionjson?: string | undefined;
    private _controldescriptionxml?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _customcontroldefaultconfigid?: string | undefined;
    private _customcontroldefaultconfigidunique?: string | undefined;
    private _eventsxml?: string | undefined;
    private _introducedversion?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _primaryentitytypecode?: string | undefined;
    private _solutionid?: string | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
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
     * Instantiates a new customcontroldefaultconfig and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the controldescriptionjson property value. 
     * @returns a string
     */
    public get controldescriptionjson() {
        return this._controldescriptionjson;
    };
    /**
     * Sets the controldescriptionjson property value. 
     * @param value Value to set for the controldescriptionjson property.
     */
    public set controldescriptionjson(value: string | undefined) {
        this._controldescriptionjson = value;
    };
    /**
     * Gets the controldescriptionxml property value. 
     * @returns a string
     */
    public get controldescriptionxml() {
        return this._controldescriptionxml;
    };
    /**
     * Sets the controldescriptionxml property value. 
     * @param value Value to set for the controldescriptionxml property.
     */
    public set controldescriptionxml(value: string | undefined) {
        this._controldescriptionxml = value;
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * Gets the customcontroldefaultconfigid property value. 
     * @returns a string
     */
    public get customcontroldefaultconfigid() {
        return this._customcontroldefaultconfigid;
    };
    /**
     * Sets the customcontroldefaultconfigid property value. 
     * @param value Value to set for the customcontroldefaultconfigid property.
     */
    public set customcontroldefaultconfigid(value: string | undefined) {
        this._customcontroldefaultconfigid = value;
    };
    /**
     * Gets the customcontroldefaultconfigidunique property value. 
     * @returns a string
     */
    public get customcontroldefaultconfigidunique() {
        return this._customcontroldefaultconfigidunique;
    };
    /**
     * Sets the customcontroldefaultconfigidunique property value. 
     * @param value Value to set for the customcontroldefaultconfigidunique property.
     */
    public set customcontroldefaultconfigidunique(value: string | undefined) {
        this._customcontroldefaultconfigidunique = value;
    };
    /**
     * Gets the eventsxml property value. 
     * @returns a string
     */
    public get eventsxml() {
        return this._eventsxml;
    };
    /**
     * Sets the eventsxml property value. 
     * @param value Value to set for the eventsxml property.
     */
    public set eventsxml(value: string | undefined) {
        this._eventsxml = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Customcontroldefaultconfig)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Customcontroldefaultconfig)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Customcontroldefaultconfig)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Customcontroldefaultconfig)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Customcontroldefaultconfig)._organizationid_value = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Customcontroldefaultconfig).componentstate = n.getNumberValue(); },
            "controldescriptionjson": (o, n) => { (o as unknown as Customcontroldefaultconfig).controldescriptionjson = n.getStringValue(); },
            "controldescriptionxml": (o, n) => { (o as unknown as Customcontroldefaultconfig).controldescriptionxml = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Customcontroldefaultconfig).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Customcontroldefaultconfig).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Customcontroldefaultconfig).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "customcontroldefaultconfigid": (o, n) => { (o as unknown as Customcontroldefaultconfig).customcontroldefaultconfigid = n.getStringValue(); },
            "customcontroldefaultconfigidunique": (o, n) => { (o as unknown as Customcontroldefaultconfig).customcontroldefaultconfigidunique = n.getStringValue(); },
            "eventsxml": (o, n) => { (o as unknown as Customcontroldefaultconfig).eventsxml = n.getStringValue(); },
            "introducedversion": (o, n) => { (o as unknown as Customcontroldefaultconfig).introducedversion = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Customcontroldefaultconfig).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Customcontroldefaultconfig).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Customcontroldefaultconfig).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Customcontroldefaultconfig).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Customcontroldefaultconfig).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Customcontroldefaultconfig).overwritetime = n.getDateValue(); },
            "primaryentitytypecode": (o, n) => { (o as unknown as Customcontroldefaultconfig).primaryentitytypecode = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Customcontroldefaultconfig).solutionid = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Customcontroldefaultconfig).versionnumber = n.getNumberValue(); },
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
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
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
     * Gets the primaryentitytypecode property value. 
     * @returns a string
     */
    public get primaryentitytypecode() {
        return this._primaryentitytypecode;
    };
    /**
     * Sets the primaryentitytypecode property value. 
     * @param value Value to set for the primaryentitytypecode property.
     */
    public set primaryentitytypecode(value: string | undefined) {
        this._primaryentitytypecode = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("controldescriptionjson", this.controldescriptionjson);
        writer.writeStringValue("controldescriptionxml", this.controldescriptionxml);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("customcontroldefaultconfigid", this.customcontroldefaultconfigid);
        writer.writeStringValue("customcontroldefaultconfigidunique", this.customcontroldefaultconfigidunique);
        writer.writeStringValue("eventsxml", this.eventsxml);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("primaryentitytypecode", this.primaryentitytypecode);
        writer.writeStringValue("solutionid", this.solutionid);
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
