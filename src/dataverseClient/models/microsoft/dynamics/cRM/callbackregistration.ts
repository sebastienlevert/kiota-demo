import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Businessunit, Crmbaseentity, Principal, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Callbackregistration extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _callbackregistration_createdby?: Systemuser | undefined;
    private _callbackregistration_createdonbehalfby?: Systemuser | undefined;
    private _callbackregistration_modifiedby?: Systemuser | undefined;
    private _callbackregistration_modifiedonbehalfby?: Systemuser | undefined;
    private _callbackregistrationid?: string | undefined;
    private _createdon?: Date | undefined;
    private _entityname?: string | undefined;
    private _filterexpression?: string | undefined;
    private _filteringattributes?: string | undefined;
    private _harddelete?: boolean | undefined;
    private _message?: number | undefined;
    private _modifiedon?: Date | undefined;
    private _name?: string | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _postponeuntil?: string | undefined;
    private _runas?: number | undefined;
    private _runtimeintegrationproperties?: string | undefined;
    private _scope?: number | undefined;
    private _sdkmessagename?: string | undefined;
    private _softdeletestatus?: number | undefined;
    private _url?: string | undefined;
    private _version?: number | undefined;
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
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Gets the callbackregistration_createdby property value. 
     * @returns a systemuser
     */
    public get callbackregistration_createdby() {
        return this._callbackregistration_createdby;
    };
    /**
     * Sets the callbackregistration_createdby property value. 
     * @param value Value to set for the callbackregistration_createdby property.
     */
    public set callbackregistration_createdby(value: Systemuser | undefined) {
        this._callbackregistration_createdby = value;
    };
    /**
     * Gets the callbackregistration_createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get callbackregistration_createdonbehalfby() {
        return this._callbackregistration_createdonbehalfby;
    };
    /**
     * Sets the callbackregistration_createdonbehalfby property value. 
     * @param value Value to set for the callbackregistration_createdonbehalfby property.
     */
    public set callbackregistration_createdonbehalfby(value: Systemuser | undefined) {
        this._callbackregistration_createdonbehalfby = value;
    };
    /**
     * Gets the callbackregistration_modifiedby property value. 
     * @returns a systemuser
     */
    public get callbackregistration_modifiedby() {
        return this._callbackregistration_modifiedby;
    };
    /**
     * Sets the callbackregistration_modifiedby property value. 
     * @param value Value to set for the callbackregistration_modifiedby property.
     */
    public set callbackregistration_modifiedby(value: Systemuser | undefined) {
        this._callbackregistration_modifiedby = value;
    };
    /**
     * Gets the callbackregistration_modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get callbackregistration_modifiedonbehalfby() {
        return this._callbackregistration_modifiedonbehalfby;
    };
    /**
     * Sets the callbackregistration_modifiedonbehalfby property value. 
     * @param value Value to set for the callbackregistration_modifiedonbehalfby property.
     */
    public set callbackregistration_modifiedonbehalfby(value: Systemuser | undefined) {
        this._callbackregistration_modifiedonbehalfby = value;
    };
    /**
     * Gets the callbackregistrationid property value. 
     * @returns a string
     */
    public get callbackregistrationid() {
        return this._callbackregistrationid;
    };
    /**
     * Sets the callbackregistrationid property value. 
     * @param value Value to set for the callbackregistrationid property.
     */
    public set callbackregistrationid(value: string | undefined) {
        this._callbackregistrationid = value;
    };
    /**
     * Instantiates a new callbackregistration and sets the default values.
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
     * Gets the entityname property value. 
     * @returns a string
     */
    public get entityname() {
        return this._entityname;
    };
    /**
     * Sets the entityname property value. 
     * @param value Value to set for the entityname property.
     */
    public set entityname(value: string | undefined) {
        this._entityname = value;
    };
    /**
     * Gets the filterexpression property value. 
     * @returns a string
     */
    public get filterexpression() {
        return this._filterexpression;
    };
    /**
     * Sets the filterexpression property value. 
     * @param value Value to set for the filterexpression property.
     */
    public set filterexpression(value: string | undefined) {
        this._filterexpression = value;
    };
    /**
     * Gets the filteringattributes property value. 
     * @returns a string
     */
    public get filteringattributes() {
        return this._filteringattributes;
    };
    /**
     * Sets the filteringattributes property value. 
     * @param value Value to set for the filteringattributes property.
     */
    public set filteringattributes(value: string | undefined) {
        this._filteringattributes = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Callbackregistration)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Callbackregistration)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Callbackregistration)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Callbackregistration)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Callbackregistration)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Callbackregistration)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Callbackregistration)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Callbackregistration)._owninguser_value = n.getStringValue(); },
            "callbackregistration_createdby": (o, n) => { (o as unknown as Callbackregistration).callbackregistration_createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "callbackregistration_createdonbehalfby": (o, n) => { (o as unknown as Callbackregistration).callbackregistration_createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "callbackregistration_modifiedby": (o, n) => { (o as unknown as Callbackregistration).callbackregistration_modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "callbackregistration_modifiedonbehalfby": (o, n) => { (o as unknown as Callbackregistration).callbackregistration_modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "callbackregistrationid": (o, n) => { (o as unknown as Callbackregistration).callbackregistrationid = n.getStringValue(); },
            "createdon": (o, n) => { (o as unknown as Callbackregistration).createdon = n.getDateValue(); },
            "entityname": (o, n) => { (o as unknown as Callbackregistration).entityname = n.getStringValue(); },
            "filterexpression": (o, n) => { (o as unknown as Callbackregistration).filterexpression = n.getStringValue(); },
            "filteringattributes": (o, n) => { (o as unknown as Callbackregistration).filteringattributes = n.getStringValue(); },
            "harddelete": (o, n) => { (o as unknown as Callbackregistration).harddelete = n.getBooleanValue(); },
            "message": (o, n) => { (o as unknown as Callbackregistration).message = n.getNumberValue(); },
            "modifiedon": (o, n) => { (o as unknown as Callbackregistration).modifiedon = n.getDateValue(); },
            "name": (o, n) => { (o as unknown as Callbackregistration).name = n.getStringValue(); },
            "ownerid": (o, n) => { (o as unknown as Callbackregistration).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Callbackregistration).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "postponeuntil": (o, n) => { (o as unknown as Callbackregistration).postponeuntil = n.getStringValue(); },
            "runas": (o, n) => { (o as unknown as Callbackregistration).runas = n.getNumberValue(); },
            "runtimeintegrationproperties": (o, n) => { (o as unknown as Callbackregistration).runtimeintegrationproperties = n.getStringValue(); },
            "scope": (o, n) => { (o as unknown as Callbackregistration).scope = n.getNumberValue(); },
            "sdkmessagename": (o, n) => { (o as unknown as Callbackregistration).sdkmessagename = n.getStringValue(); },
            "softdeletestatus": (o, n) => { (o as unknown as Callbackregistration).softdeletestatus = n.getNumberValue(); },
            "url": (o, n) => { (o as unknown as Callbackregistration).url = n.getStringValue(); },
            "version": (o, n) => { (o as unknown as Callbackregistration).version = n.getNumberValue(); },
        };
    };
    /**
     * Gets the harddelete property value. 
     * @returns a boolean
     */
    public get harddelete() {
        return this._harddelete;
    };
    /**
     * Sets the harddelete property value. 
     * @param value Value to set for the harddelete property.
     */
    public set harddelete(value: boolean | undefined) {
        this._harddelete = value;
    };
    /**
     * Gets the message property value. 
     * @returns a integer
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. 
     * @param value Value to set for the message property.
     */
    public set message(value: number | undefined) {
        this._message = value;
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
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the postponeuntil property value. 
     * @returns a string
     */
    public get postponeuntil() {
        return this._postponeuntil;
    };
    /**
     * Sets the postponeuntil property value. 
     * @param value Value to set for the postponeuntil property.
     */
    public set postponeuntil(value: string | undefined) {
        this._postponeuntil = value;
    };
    /**
     * Gets the runas property value. 
     * @returns a integer
     */
    public get runas() {
        return this._runas;
    };
    /**
     * Sets the runas property value. 
     * @param value Value to set for the runas property.
     */
    public set runas(value: number | undefined) {
        this._runas = value;
    };
    /**
     * Gets the runtimeintegrationproperties property value. 
     * @returns a string
     */
    public get runtimeintegrationproperties() {
        return this._runtimeintegrationproperties;
    };
    /**
     * Sets the runtimeintegrationproperties property value. 
     * @param value Value to set for the runtimeintegrationproperties property.
     */
    public set runtimeintegrationproperties(value: string | undefined) {
        this._runtimeintegrationproperties = value;
    };
    /**
     * Gets the scope property value. 
     * @returns a integer
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Sets the scope property value. 
     * @param value Value to set for the scope property.
     */
    public set scope(value: number | undefined) {
        this._scope = value;
    };
    /**
     * Gets the sdkmessagename property value. 
     * @returns a string
     */
    public get sdkmessagename() {
        return this._sdkmessagename;
    };
    /**
     * Sets the sdkmessagename property value. 
     * @param value Value to set for the sdkmessagename property.
     */
    public set sdkmessagename(value: string | undefined) {
        this._sdkmessagename = value;
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
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("callbackregistration_createdby", this.callbackregistration_createdby);
        writer.writeObjectValue<Systemuser>("callbackregistration_createdonbehalfby", this.callbackregistration_createdonbehalfby);
        writer.writeObjectValue<Systemuser>("callbackregistration_modifiedby", this.callbackregistration_modifiedby);
        writer.writeObjectValue<Systemuser>("callbackregistration_modifiedonbehalfby", this.callbackregistration_modifiedonbehalfby);
        writer.writeStringValue("callbackregistrationid", this.callbackregistrationid);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeStringValue("entityname", this.entityname);
        writer.writeStringValue("filterexpression", this.filterexpression);
        writer.writeStringValue("filteringattributes", this.filteringattributes);
        writer.writeBooleanValue("harddelete", this.harddelete);
        writer.writeNumberValue("message", this.message);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeStringValue("postponeuntil", this.postponeuntil);
        writer.writeNumberValue("runas", this.runas);
        writer.writeStringValue("runtimeintegrationproperties", this.runtimeintegrationproperties);
        writer.writeNumberValue("scope", this.scope);
        writer.writeStringValue("sdkmessagename", this.sdkmessagename);
        writer.writeNumberValue("softdeletestatus", this.softdeletestatus);
        writer.writeStringValue("url", this.url);
        writer.writeNumberValue("version", this.version);
    };
    /**
     * Gets the softdeletestatus property value. 
     * @returns a integer
     */
    public get softdeletestatus() {
        return this._softdeletestatus;
    };
    /**
     * Sets the softdeletestatus property value. 
     * @param value Value to set for the softdeletestatus property.
     */
    public set softdeletestatus(value: number | undefined) {
        this._softdeletestatus = value;
    };
    /**
     * Gets the url property value. 
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. 
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
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
}
