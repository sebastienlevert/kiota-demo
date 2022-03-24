import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTimezonedefinitionFromDiscriminatorValue} from './createTimezonedefinitionFromDiscriminatorValue';
import {Crmbaseentity, Systemuser, Timezonedefinition} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Timezonelocalizedname extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __timezonedefinitionid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _cultureid?: number | undefined;
    private _daylightname?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _standardname?: string | undefined;
    private _timezonedefinitionid?: Timezonedefinition | undefined;
    private _timezonelocalizednameid?: string | undefined;
    private _userinterfacename?: string | undefined;
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
     * Gets the _timezonedefinitionid_value property value. 
     * @returns a string
     */
    public get _timezonedefinitionid_value() {
        return this.__timezonedefinitionid_value;
    };
    /**
     * Sets the _timezonedefinitionid_value property value. 
     * @param value Value to set for the _timezonedefinitionid_value property.
     */
    public set _timezonedefinitionid_value(value: string | undefined) {
        this.__timezonedefinitionid_value = value;
    };
    /**
     * Instantiates a new timezonelocalizedname and sets the default values.
     */
    public constructor() {
        super();
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
     * Gets the cultureid property value. 
     * @returns a integer
     */
    public get cultureid() {
        return this._cultureid;
    };
    /**
     * Sets the cultureid property value. 
     * @param value Value to set for the cultureid property.
     */
    public set cultureid(value: number | undefined) {
        this._cultureid = value;
    };
    /**
     * Gets the daylightname property value. 
     * @returns a string
     */
    public get daylightname() {
        return this._daylightname;
    };
    /**
     * Sets the daylightname property value. 
     * @param value Value to set for the daylightname property.
     */
    public set daylightname(value: string | undefined) {
        this._daylightname = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Timezonelocalizedname)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Timezonelocalizedname)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Timezonelocalizedname)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Timezonelocalizedname)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Timezonelocalizedname)._organizationid_value = n.getStringValue(); },
            "_timezonedefinitionid_value": (o, n) => { (o as unknown as Timezonelocalizedname)._timezonedefinitionid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Timezonelocalizedname).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Timezonelocalizedname).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Timezonelocalizedname).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "cultureid": (o, n) => { (o as unknown as Timezonelocalizedname).cultureid = n.getNumberValue(); },
            "daylightname": (o, n) => { (o as unknown as Timezonelocalizedname).daylightname = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Timezonelocalizedname).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Timezonelocalizedname).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Timezonelocalizedname).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "standardname": (o, n) => { (o as unknown as Timezonelocalizedname).standardname = n.getStringValue(); },
            "timezonedefinitionid": (o, n) => { (o as unknown as Timezonelocalizedname).timezonedefinitionid = n.getObjectValue<Timezonedefinition>(createTimezonedefinitionFromDiscriminatorValue); },
            "timezonelocalizednameid": (o, n) => { (o as unknown as Timezonelocalizedname).timezonelocalizednameid = n.getStringValue(); },
            "userinterfacename": (o, n) => { (o as unknown as Timezonelocalizedname).userinterfacename = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Timezonelocalizedname).versionnumber = n.getNumberValue(); },
        };
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
        writer.writeStringValue("_timezonedefinitionid_value", this._timezonedefinitionid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("cultureid", this.cultureid);
        writer.writeStringValue("daylightname", this.daylightname);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("standardname", this.standardname);
        writer.writeObjectValue<Timezonedefinition>("timezonedefinitionid", this.timezonedefinitionid);
        writer.writeStringValue("timezonelocalizednameid", this.timezonelocalizednameid);
        writer.writeStringValue("userinterfacename", this.userinterfacename);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the standardname property value. 
     * @returns a string
     */
    public get standardname() {
        return this._standardname;
    };
    /**
     * Sets the standardname property value. 
     * @param value Value to set for the standardname property.
     */
    public set standardname(value: string | undefined) {
        this._standardname = value;
    };
    /**
     * Gets the timezonedefinitionid property value. 
     * @returns a timezonedefinition
     */
    public get timezonedefinitionid() {
        return this._timezonedefinitionid;
    };
    /**
     * Sets the timezonedefinitionid property value. 
     * @param value Value to set for the timezonedefinitionid property.
     */
    public set timezonedefinitionid(value: Timezonedefinition | undefined) {
        this._timezonedefinitionid = value;
    };
    /**
     * Gets the timezonelocalizednameid property value. 
     * @returns a string
     */
    public get timezonelocalizednameid() {
        return this._timezonelocalizednameid;
    };
    /**
     * Sets the timezonelocalizednameid property value. 
     * @param value Value to set for the timezonelocalizednameid property.
     */
    public set timezonelocalizednameid(value: string | undefined) {
        this._timezonelocalizednameid = value;
    };
    /**
     * Gets the userinterfacename property value. 
     * @returns a string
     */
    public get userinterfacename() {
        return this._userinterfacename;
    };
    /**
     * Sets the userinterfacename property value. 
     * @param value Value to set for the userinterfacename property.
     */
    public set userinterfacename(value: string | undefined) {
        this._userinterfacename = value;
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
