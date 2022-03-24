import {createAppconfigFromDiscriminatorValue} from './createAppconfigFromDiscriminatorValue';
import {createAppconfigmasterFromDiscriminatorValue} from './createAppconfigmasterFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Appconfig, Appconfigmaster, Crmbaseentity, Organization, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Appconfiginstance extends Crmbaseentity implements Parsable {
    private __appconfigid_value?: string | undefined;
    private __appconfigmasterid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _appconfigidunique?: string | undefined;
    private _appconfiginstance_appconfig?: Appconfig | undefined;
    private _appconfiginstance_appconfigmaster?: Appconfigmaster | undefined;
    private _appconfiginstance_createdby?: Systemuser | undefined;
    private _appconfiginstance_createdonbehalfby?: Systemuser | undefined;
    private _appconfiginstance_modifiedby?: Systemuser | undefined;
    private _appconfiginstance_modifiedonbehalfby?: Systemuser | undefined;
    private _appconfiginstanceid?: string | undefined;
    private _appconfiginstanceidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _componenttype?: string | undefined;
    private _createdon?: Date | undefined;
    private _importsequencenumber?: number | undefined;
    private _introducedversion?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedon?: Date | undefined;
    private _objectid?: string | undefined;
    private _organization_appconfiginstance_appconfiginstance?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _solutionid?: string | undefined;
    private _value?: string | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _appconfigid_value property value. 
     * @returns a string
     */
    public get _appconfigid_value() {
        return this.__appconfigid_value;
    };
    /**
     * Sets the _appconfigid_value property value. 
     * @param value Value to set for the _appconfigid_value property.
     */
    public set _appconfigid_value(value: string | undefined) {
        this.__appconfigid_value = value;
    };
    /**
     * Gets the _appconfigmasterid_value property value. 
     * @returns a string
     */
    public get _appconfigmasterid_value() {
        return this.__appconfigmasterid_value;
    };
    /**
     * Sets the _appconfigmasterid_value property value. 
     * @param value Value to set for the _appconfigmasterid_value property.
     */
    public set _appconfigmasterid_value(value: string | undefined) {
        this.__appconfigmasterid_value = value;
    };
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
     * Gets the appconfigidunique property value. 
     * @returns a string
     */
    public get appconfigidunique() {
        return this._appconfigidunique;
    };
    /**
     * Sets the appconfigidunique property value. 
     * @param value Value to set for the appconfigidunique property.
     */
    public set appconfigidunique(value: string | undefined) {
        this._appconfigidunique = value;
    };
    /**
     * Gets the appconfiginstance_appconfig property value. 
     * @returns a appconfig
     */
    public get appconfiginstance_appconfig() {
        return this._appconfiginstance_appconfig;
    };
    /**
     * Sets the appconfiginstance_appconfig property value. 
     * @param value Value to set for the appconfiginstance_appconfig property.
     */
    public set appconfiginstance_appconfig(value: Appconfig | undefined) {
        this._appconfiginstance_appconfig = value;
    };
    /**
     * Gets the appconfiginstance_appconfigmaster property value. 
     * @returns a appconfigmaster
     */
    public get appconfiginstance_appconfigmaster() {
        return this._appconfiginstance_appconfigmaster;
    };
    /**
     * Sets the appconfiginstance_appconfigmaster property value. 
     * @param value Value to set for the appconfiginstance_appconfigmaster property.
     */
    public set appconfiginstance_appconfigmaster(value: Appconfigmaster | undefined) {
        this._appconfiginstance_appconfigmaster = value;
    };
    /**
     * Gets the appconfiginstance_createdby property value. 
     * @returns a systemuser
     */
    public get appconfiginstance_createdby() {
        return this._appconfiginstance_createdby;
    };
    /**
     * Sets the appconfiginstance_createdby property value. 
     * @param value Value to set for the appconfiginstance_createdby property.
     */
    public set appconfiginstance_createdby(value: Systemuser | undefined) {
        this._appconfiginstance_createdby = value;
    };
    /**
     * Gets the appconfiginstance_createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get appconfiginstance_createdonbehalfby() {
        return this._appconfiginstance_createdonbehalfby;
    };
    /**
     * Sets the appconfiginstance_createdonbehalfby property value. 
     * @param value Value to set for the appconfiginstance_createdonbehalfby property.
     */
    public set appconfiginstance_createdonbehalfby(value: Systemuser | undefined) {
        this._appconfiginstance_createdonbehalfby = value;
    };
    /**
     * Gets the appconfiginstance_modifiedby property value. 
     * @returns a systemuser
     */
    public get appconfiginstance_modifiedby() {
        return this._appconfiginstance_modifiedby;
    };
    /**
     * Sets the appconfiginstance_modifiedby property value. 
     * @param value Value to set for the appconfiginstance_modifiedby property.
     */
    public set appconfiginstance_modifiedby(value: Systemuser | undefined) {
        this._appconfiginstance_modifiedby = value;
    };
    /**
     * Gets the appconfiginstance_modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get appconfiginstance_modifiedonbehalfby() {
        return this._appconfiginstance_modifiedonbehalfby;
    };
    /**
     * Sets the appconfiginstance_modifiedonbehalfby property value. 
     * @param value Value to set for the appconfiginstance_modifiedonbehalfby property.
     */
    public set appconfiginstance_modifiedonbehalfby(value: Systemuser | undefined) {
        this._appconfiginstance_modifiedonbehalfby = value;
    };
    /**
     * Gets the appconfiginstanceid property value. 
     * @returns a string
     */
    public get appconfiginstanceid() {
        return this._appconfiginstanceid;
    };
    /**
     * Sets the appconfiginstanceid property value. 
     * @param value Value to set for the appconfiginstanceid property.
     */
    public set appconfiginstanceid(value: string | undefined) {
        this._appconfiginstanceid = value;
    };
    /**
     * Gets the appconfiginstanceidunique property value. 
     * @returns a string
     */
    public get appconfiginstanceidunique() {
        return this._appconfiginstanceidunique;
    };
    /**
     * Sets the appconfiginstanceidunique property value. 
     * @param value Value to set for the appconfiginstanceidunique property.
     */
    public set appconfiginstanceidunique(value: string | undefined) {
        this._appconfiginstanceidunique = value;
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
     * Gets the componenttype property value. 
     * @returns a string
     */
    public get componenttype() {
        return this._componenttype;
    };
    /**
     * Sets the componenttype property value. 
     * @param value Value to set for the componenttype property.
     */
    public set componenttype(value: string | undefined) {
        this._componenttype = value;
    };
    /**
     * Instantiates a new appconfiginstance and sets the default values.
     */
    public constructor() {
        super();
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_appconfigid_value": (o, n) => { (o as unknown as Appconfiginstance)._appconfigid_value = n.getStringValue(); },
            "_appconfigmasterid_value": (o, n) => { (o as unknown as Appconfiginstance)._appconfigmasterid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Appconfiginstance)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Appconfiginstance)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Appconfiginstance)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Appconfiginstance)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Appconfiginstance)._organizationid_value = n.getStringValue(); },
            "appconfigidunique": (o, n) => { (o as unknown as Appconfiginstance).appconfigidunique = n.getStringValue(); },
            "appconfiginstance_appconfig": (o, n) => { (o as unknown as Appconfiginstance).appconfiginstance_appconfig = n.getObjectValue<Appconfig>(createAppconfigFromDiscriminatorValue); },
            "appconfiginstance_appconfigmaster": (o, n) => { (o as unknown as Appconfiginstance).appconfiginstance_appconfigmaster = n.getObjectValue<Appconfigmaster>(createAppconfigmasterFromDiscriminatorValue); },
            "appconfiginstance_createdby": (o, n) => { (o as unknown as Appconfiginstance).appconfiginstance_createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "appconfiginstance_createdonbehalfby": (o, n) => { (o as unknown as Appconfiginstance).appconfiginstance_createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "appconfiginstance_modifiedby": (o, n) => { (o as unknown as Appconfiginstance).appconfiginstance_modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "appconfiginstance_modifiedonbehalfby": (o, n) => { (o as unknown as Appconfiginstance).appconfiginstance_modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "appconfiginstanceid": (o, n) => { (o as unknown as Appconfiginstance).appconfiginstanceid = n.getStringValue(); },
            "appconfiginstanceidunique": (o, n) => { (o as unknown as Appconfiginstance).appconfiginstanceidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Appconfiginstance).componentstate = n.getNumberValue(); },
            "componenttype": (o, n) => { (o as unknown as Appconfiginstance).componenttype = n.getStringValue(); },
            "createdon": (o, n) => { (o as unknown as Appconfiginstance).createdon = n.getDateValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Appconfiginstance).importsequencenumber = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Appconfiginstance).introducedversion = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Appconfiginstance).ismanaged = n.getBooleanValue(); },
            "modifiedon": (o, n) => { (o as unknown as Appconfiginstance).modifiedon = n.getDateValue(); },
            "objectid": (o, n) => { (o as unknown as Appconfiginstance).objectid = n.getStringValue(); },
            "organization_appconfiginstance_appconfiginstance": (o, n) => { (o as unknown as Appconfiginstance).organization_appconfiginstance_appconfiginstance = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Appconfiginstance).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Appconfiginstance).overwritetime = n.getDateValue(); },
            "solutionid": (o, n) => { (o as unknown as Appconfiginstance).solutionid = n.getStringValue(); },
            "value": (o, n) => { (o as unknown as Appconfiginstance).value = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Appconfiginstance).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
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
     * Gets the objectid property value. 
     * @returns a string
     */
    public get objectid() {
        return this._objectid;
    };
    /**
     * Sets the objectid property value. 
     * @param value Value to set for the objectid property.
     */
    public set objectid(value: string | undefined) {
        this._objectid = value;
    };
    /**
     * Gets the organization_appconfiginstance_appconfiginstance property value. 
     * @returns a organization
     */
    public get organization_appconfiginstance_appconfiginstance() {
        return this._organization_appconfiginstance_appconfiginstance;
    };
    /**
     * Sets the organization_appconfiginstance_appconfiginstance property value. 
     * @param value Value to set for the organization_appconfiginstance_appconfiginstance property.
     */
    public set organization_appconfiginstance_appconfiginstance(value: Organization | undefined) {
        this._organization_appconfiginstance_appconfiginstance = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
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
        writer.writeStringValue("_appconfigid_value", this._appconfigid_value);
        writer.writeStringValue("_appconfigmasterid_value", this._appconfigmasterid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("appconfigidunique", this.appconfigidunique);
        writer.writeObjectValue<Appconfig>("appconfiginstance_appconfig", this.appconfiginstance_appconfig);
        writer.writeObjectValue<Appconfigmaster>("appconfiginstance_appconfigmaster", this.appconfiginstance_appconfigmaster);
        writer.writeObjectValue<Systemuser>("appconfiginstance_createdby", this.appconfiginstance_createdby);
        writer.writeObjectValue<Systemuser>("appconfiginstance_createdonbehalfby", this.appconfiginstance_createdonbehalfby);
        writer.writeObjectValue<Systemuser>("appconfiginstance_modifiedby", this.appconfiginstance_modifiedby);
        writer.writeObjectValue<Systemuser>("appconfiginstance_modifiedonbehalfby", this.appconfiginstance_modifiedonbehalfby);
        writer.writeStringValue("appconfiginstanceid", this.appconfiginstanceid);
        writer.writeStringValue("appconfiginstanceidunique", this.appconfiginstanceidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("componenttype", this.componenttype);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeStringValue("objectid", this.objectid);
        writer.writeObjectValue<Organization>("organization_appconfiginstance_appconfiginstance", this.organization_appconfiginstance_appconfiginstance);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeStringValue("value", this.value);
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
     * Gets the value property value. 
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
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
