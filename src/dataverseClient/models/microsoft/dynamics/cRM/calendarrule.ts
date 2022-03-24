import {createCalendarFromDiscriminatorValue} from './createCalendarFromDiscriminatorValue';
import {createServiceFromDiscriminatorValue} from './createServiceFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Calendar, Crmbaseentity, Service, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Calendarrule extends Crmbaseentity implements Parsable {
    private __calendarid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __innercalendarid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __serviceid_value?: string | undefined;
    private _businessunitid?: string | undefined;
    private _calendarid?: Calendar | undefined;
    private _calendarruleid?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _duration?: number | undefined;
    private _effectiveintervalend?: Date | undefined;
    private _effectiveintervalstart?: Date | undefined;
    private _effort?: number | undefined;
    private _endtime?: Date | undefined;
    private _extentcode?: number | undefined;
    private _groupdesignator?: string | undefined;
    private _innercalendarid?: Calendar | undefined;
    private _ismodified?: boolean | undefined;
    private _isselected?: boolean | undefined;
    private _issimple?: boolean | undefined;
    private _isvaried?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _offset?: number | undefined;
    private _organizationid?: string | undefined;
    private _pattern?: string | undefined;
    private _rank?: number | undefined;
    private _serviceid?: Service | undefined;
    private _starttime?: Date | undefined;
    private _subcode?: number | undefined;
    private _timecode?: number | undefined;
    private _timezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _calendarid_value property value. 
     * @returns a string
     */
    public get _calendarid_value() {
        return this.__calendarid_value;
    };
    /**
     * Sets the _calendarid_value property value. 
     * @param value Value to set for the _calendarid_value property.
     */
    public set _calendarid_value(value: string | undefined) {
        this.__calendarid_value = value;
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
     * Gets the _innercalendarid_value property value. 
     * @returns a string
     */
    public get _innercalendarid_value() {
        return this.__innercalendarid_value;
    };
    /**
     * Sets the _innercalendarid_value property value. 
     * @param value Value to set for the _innercalendarid_value property.
     */
    public set _innercalendarid_value(value: string | undefined) {
        this.__innercalendarid_value = value;
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
     * Gets the _serviceid_value property value. 
     * @returns a string
     */
    public get _serviceid_value() {
        return this.__serviceid_value;
    };
    /**
     * Sets the _serviceid_value property value. 
     * @param value Value to set for the _serviceid_value property.
     */
    public set _serviceid_value(value: string | undefined) {
        this.__serviceid_value = value;
    };
    /**
     * Gets the businessunitid property value. 
     * @returns a string
     */
    public get businessunitid() {
        return this._businessunitid;
    };
    /**
     * Sets the businessunitid property value. 
     * @param value Value to set for the businessunitid property.
     */
    public set businessunitid(value: string | undefined) {
        this._businessunitid = value;
    };
    /**
     * Gets the calendarid property value. 
     * @returns a calendar
     */
    public get calendarid() {
        return this._calendarid;
    };
    /**
     * Sets the calendarid property value. 
     * @param value Value to set for the calendarid property.
     */
    public set calendarid(value: Calendar | undefined) {
        this._calendarid = value;
    };
    /**
     * Gets the calendarruleid property value. 
     * @returns a string
     */
    public get calendarruleid() {
        return this._calendarruleid;
    };
    /**
     * Sets the calendarruleid property value. 
     * @param value Value to set for the calendarruleid property.
     */
    public set calendarruleid(value: string | undefined) {
        this._calendarruleid = value;
    };
    /**
     * Instantiates a new calendarrule and sets the default values.
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
     * Gets the duration property value. 
     * @returns a integer
     */
    public get duration() {
        return this._duration;
    };
    /**
     * Sets the duration property value. 
     * @param value Value to set for the duration property.
     */
    public set duration(value: number | undefined) {
        this._duration = value;
    };
    /**
     * Gets the effectiveintervalend property value. 
     * @returns a Date
     */
    public get effectiveintervalend() {
        return this._effectiveintervalend;
    };
    /**
     * Sets the effectiveintervalend property value. 
     * @param value Value to set for the effectiveintervalend property.
     */
    public set effectiveintervalend(value: Date | undefined) {
        this._effectiveintervalend = value;
    };
    /**
     * Gets the effectiveintervalstart property value. 
     * @returns a Date
     */
    public get effectiveintervalstart() {
        return this._effectiveintervalstart;
    };
    /**
     * Sets the effectiveintervalstart property value. 
     * @param value Value to set for the effectiveintervalstart property.
     */
    public set effectiveintervalstart(value: Date | undefined) {
        this._effectiveintervalstart = value;
    };
    /**
     * Gets the effort property value. 
     * @returns a double
     */
    public get effort() {
        return this._effort;
    };
    /**
     * Sets the effort property value. 
     * @param value Value to set for the effort property.
     */
    public set effort(value: number | undefined) {
        this._effort = value;
    };
    /**
     * Gets the endtime property value. 
     * @returns a Date
     */
    public get endtime() {
        return this._endtime;
    };
    /**
     * Sets the endtime property value. 
     * @param value Value to set for the endtime property.
     */
    public set endtime(value: Date | undefined) {
        this._endtime = value;
    };
    /**
     * Gets the extentcode property value. 
     * @returns a integer
     */
    public get extentcode() {
        return this._extentcode;
    };
    /**
     * Sets the extentcode property value. 
     * @param value Value to set for the extentcode property.
     */
    public set extentcode(value: number | undefined) {
        this._extentcode = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_calendarid_value": (o, n) => { (o as unknown as Calendarrule)._calendarid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Calendarrule)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Calendarrule)._createdonbehalfby_value = n.getStringValue(); },
            "_innercalendarid_value": (o, n) => { (o as unknown as Calendarrule)._innercalendarid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Calendarrule)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Calendarrule)._modifiedonbehalfby_value = n.getStringValue(); },
            "_serviceid_value": (o, n) => { (o as unknown as Calendarrule)._serviceid_value = n.getStringValue(); },
            "businessunitid": (o, n) => { (o as unknown as Calendarrule).businessunitid = n.getStringValue(); },
            "calendarid": (o, n) => { (o as unknown as Calendarrule).calendarid = n.getObjectValue<Calendar>(createCalendarFromDiscriminatorValue); },
            "calendarruleid": (o, n) => { (o as unknown as Calendarrule).calendarruleid = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Calendarrule).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Calendarrule).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Calendarrule).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Calendarrule).description = n.getStringValue(); },
            "duration": (o, n) => { (o as unknown as Calendarrule).duration = n.getNumberValue(); },
            "effectiveintervalend": (o, n) => { (o as unknown as Calendarrule).effectiveintervalend = n.getDateValue(); },
            "effectiveintervalstart": (o, n) => { (o as unknown as Calendarrule).effectiveintervalstart = n.getDateValue(); },
            "effort": (o, n) => { (o as unknown as Calendarrule).effort = n.getNumberValue(); },
            "endtime": (o, n) => { (o as unknown as Calendarrule).endtime = n.getDateValue(); },
            "extentcode": (o, n) => { (o as unknown as Calendarrule).extentcode = n.getNumberValue(); },
            "groupdesignator": (o, n) => { (o as unknown as Calendarrule).groupdesignator = n.getStringValue(); },
            "innercalendarid": (o, n) => { (o as unknown as Calendarrule).innercalendarid = n.getObjectValue<Calendar>(createCalendarFromDiscriminatorValue); },
            "ismodified": (o, n) => { (o as unknown as Calendarrule).ismodified = n.getBooleanValue(); },
            "isselected": (o, n) => { (o as unknown as Calendarrule).isselected = n.getBooleanValue(); },
            "issimple": (o, n) => { (o as unknown as Calendarrule).issimple = n.getBooleanValue(); },
            "isvaried": (o, n) => { (o as unknown as Calendarrule).isvaried = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Calendarrule).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Calendarrule).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Calendarrule).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Calendarrule).name = n.getStringValue(); },
            "offset": (o, n) => { (o as unknown as Calendarrule).offset = n.getNumberValue(); },
            "organizationid": (o, n) => { (o as unknown as Calendarrule).organizationid = n.getStringValue(); },
            "pattern": (o, n) => { (o as unknown as Calendarrule).pattern = n.getStringValue(); },
            "rank": (o, n) => { (o as unknown as Calendarrule).rank = n.getNumberValue(); },
            "serviceid": (o, n) => { (o as unknown as Calendarrule).serviceid = n.getObjectValue<Service>(createServiceFromDiscriminatorValue); },
            "starttime": (o, n) => { (o as unknown as Calendarrule).starttime = n.getDateValue(); },
            "subcode": (o, n) => { (o as unknown as Calendarrule).subcode = n.getNumberValue(); },
            "timecode": (o, n) => { (o as unknown as Calendarrule).timecode = n.getNumberValue(); },
            "timezonecode": (o, n) => { (o as unknown as Calendarrule).timezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Calendarrule).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the groupdesignator property value. 
     * @returns a string
     */
    public get groupdesignator() {
        return this._groupdesignator;
    };
    /**
     * Sets the groupdesignator property value. 
     * @param value Value to set for the groupdesignator property.
     */
    public set groupdesignator(value: string | undefined) {
        this._groupdesignator = value;
    };
    /**
     * Gets the innercalendarid property value. 
     * @returns a calendar
     */
    public get innercalendarid() {
        return this._innercalendarid;
    };
    /**
     * Sets the innercalendarid property value. 
     * @param value Value to set for the innercalendarid property.
     */
    public set innercalendarid(value: Calendar | undefined) {
        this._innercalendarid = value;
    };
    /**
     * Gets the ismodified property value. 
     * @returns a boolean
     */
    public get ismodified() {
        return this._ismodified;
    };
    /**
     * Sets the ismodified property value. 
     * @param value Value to set for the ismodified property.
     */
    public set ismodified(value: boolean | undefined) {
        this._ismodified = value;
    };
    /**
     * Gets the isselected property value. 
     * @returns a boolean
     */
    public get isselected() {
        return this._isselected;
    };
    /**
     * Sets the isselected property value. 
     * @param value Value to set for the isselected property.
     */
    public set isselected(value: boolean | undefined) {
        this._isselected = value;
    };
    /**
     * Gets the issimple property value. 
     * @returns a boolean
     */
    public get issimple() {
        return this._issimple;
    };
    /**
     * Sets the issimple property value. 
     * @param value Value to set for the issimple property.
     */
    public set issimple(value: boolean | undefined) {
        this._issimple = value;
    };
    /**
     * Gets the isvaried property value. 
     * @returns a boolean
     */
    public get isvaried() {
        return this._isvaried;
    };
    /**
     * Sets the isvaried property value. 
     * @param value Value to set for the isvaried property.
     */
    public set isvaried(value: boolean | undefined) {
        this._isvaried = value;
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
     * Gets the offset property value. 
     * @returns a integer
     */
    public get offset() {
        return this._offset;
    };
    /**
     * Sets the offset property value. 
     * @param value Value to set for the offset property.
     */
    public set offset(value: number | undefined) {
        this._offset = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a string
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: string | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the pattern property value. 
     * @returns a string
     */
    public get pattern() {
        return this._pattern;
    };
    /**
     * Sets the pattern property value. 
     * @param value Value to set for the pattern property.
     */
    public set pattern(value: string | undefined) {
        this._pattern = value;
    };
    /**
     * Gets the rank property value. 
     * @returns a integer
     */
    public get rank() {
        return this._rank;
    };
    /**
     * Sets the rank property value. 
     * @param value Value to set for the rank property.
     */
    public set rank(value: number | undefined) {
        this._rank = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_calendarid_value", this._calendarid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_innercalendarid_value", this._innercalendarid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_serviceid_value", this._serviceid_value);
        writer.writeStringValue("businessunitid", this.businessunitid);
        writer.writeObjectValue<Calendar>("calendarid", this.calendarid);
        writer.writeStringValue("calendarruleid", this.calendarruleid);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("duration", this.duration);
        writer.writeDateValue("effectiveintervalend", this.effectiveintervalend);
        writer.writeDateValue("effectiveintervalstart", this.effectiveintervalstart);
        writer.writeNumberValue("effort", this.effort);
        writer.writeDateValue("endtime", this.endtime);
        writer.writeNumberValue("extentcode", this.extentcode);
        writer.writeStringValue("groupdesignator", this.groupdesignator);
        writer.writeObjectValue<Calendar>("innercalendarid", this.innercalendarid);
        writer.writeBooleanValue("ismodified", this.ismodified);
        writer.writeBooleanValue("isselected", this.isselected);
        writer.writeBooleanValue("issimple", this.issimple);
        writer.writeBooleanValue("isvaried", this.isvaried);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("offset", this.offset);
        writer.writeStringValue("organizationid", this.organizationid);
        writer.writeStringValue("pattern", this.pattern);
        writer.writeNumberValue("rank", this.rank);
        writer.writeObjectValue<Service>("serviceid", this.serviceid);
        writer.writeDateValue("starttime", this.starttime);
        writer.writeNumberValue("subcode", this.subcode);
        writer.writeNumberValue("timecode", this.timecode);
        writer.writeNumberValue("timezonecode", this.timezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the serviceid property value. 
     * @returns a service
     */
    public get serviceid() {
        return this._serviceid;
    };
    /**
     * Sets the serviceid property value. 
     * @param value Value to set for the serviceid property.
     */
    public set serviceid(value: Service | undefined) {
        this._serviceid = value;
    };
    /**
     * Gets the starttime property value. 
     * @returns a Date
     */
    public get starttime() {
        return this._starttime;
    };
    /**
     * Sets the starttime property value. 
     * @param value Value to set for the starttime property.
     */
    public set starttime(value: Date | undefined) {
        this._starttime = value;
    };
    /**
     * Gets the subcode property value. 
     * @returns a integer
     */
    public get subcode() {
        return this._subcode;
    };
    /**
     * Sets the subcode property value. 
     * @param value Value to set for the subcode property.
     */
    public set subcode(value: number | undefined) {
        this._subcode = value;
    };
    /**
     * Gets the timecode property value. 
     * @returns a integer
     */
    public get timecode() {
        return this._timecode;
    };
    /**
     * Sets the timecode property value. 
     * @param value Value to set for the timecode property.
     */
    public set timecode(value: number | undefined) {
        this._timecode = value;
    };
    /**
     * Gets the timezonecode property value. 
     * @returns a integer
     */
    public get timezonecode() {
        return this._timezonecode;
    };
    /**
     * Sets the timezonecode property value. 
     * @param value Value to set for the timezonecode property.
     */
    public set timezonecode(value: number | undefined) {
        this._timezonecode = value;
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
