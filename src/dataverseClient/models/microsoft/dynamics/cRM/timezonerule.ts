import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTimezonedefinitionFromDiscriminatorValue} from './createTimezonedefinitionFromDiscriminatorValue';
import {Crmbaseentity, Systemuser, Timezonedefinition} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Timezonerule extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __timezonedefinitionid_value?: string | undefined;
    private _bias?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _daylightbias?: number | undefined;
    private _daylightday?: number | undefined;
    private _daylightdayofweek?: number | undefined;
    private _daylighthour?: number | undefined;
    private _daylightminute?: number | undefined;
    private _daylightmonth?: number | undefined;
    private _daylightsecond?: number | undefined;
    private _daylightyear?: number | undefined;
    private _effectivedatetime?: Date | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _standardbias?: number | undefined;
    private _standardday?: number | undefined;
    private _standarddayofweek?: number | undefined;
    private _standardhour?: number | undefined;
    private _standardminute?: number | undefined;
    private _standardmonth?: number | undefined;
    private _standardsecond?: number | undefined;
    private _standardyear?: number | undefined;
    private _timezonedefinitionid?: Timezonedefinition | undefined;
    private _timezoneruleid?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
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
     * Gets the bias property value. 
     * @returns a integer
     */
    public get bias() {
        return this._bias;
    };
    /**
     * Sets the bias property value. 
     * @param value Value to set for the bias property.
     */
    public set bias(value: number | undefined) {
        this._bias = value;
    };
    /**
     * Instantiates a new timezonerule and sets the default values.
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
     * Gets the daylightbias property value. 
     * @returns a integer
     */
    public get daylightbias() {
        return this._daylightbias;
    };
    /**
     * Sets the daylightbias property value. 
     * @param value Value to set for the daylightbias property.
     */
    public set daylightbias(value: number | undefined) {
        this._daylightbias = value;
    };
    /**
     * Gets the daylightday property value. 
     * @returns a integer
     */
    public get daylightday() {
        return this._daylightday;
    };
    /**
     * Sets the daylightday property value. 
     * @param value Value to set for the daylightday property.
     */
    public set daylightday(value: number | undefined) {
        this._daylightday = value;
    };
    /**
     * Gets the daylightdayofweek property value. 
     * @returns a integer
     */
    public get daylightdayofweek() {
        return this._daylightdayofweek;
    };
    /**
     * Sets the daylightdayofweek property value. 
     * @param value Value to set for the daylightdayofweek property.
     */
    public set daylightdayofweek(value: number | undefined) {
        this._daylightdayofweek = value;
    };
    /**
     * Gets the daylighthour property value. 
     * @returns a integer
     */
    public get daylighthour() {
        return this._daylighthour;
    };
    /**
     * Sets the daylighthour property value. 
     * @param value Value to set for the daylighthour property.
     */
    public set daylighthour(value: number | undefined) {
        this._daylighthour = value;
    };
    /**
     * Gets the daylightminute property value. 
     * @returns a integer
     */
    public get daylightminute() {
        return this._daylightminute;
    };
    /**
     * Sets the daylightminute property value. 
     * @param value Value to set for the daylightminute property.
     */
    public set daylightminute(value: number | undefined) {
        this._daylightminute = value;
    };
    /**
     * Gets the daylightmonth property value. 
     * @returns a integer
     */
    public get daylightmonth() {
        return this._daylightmonth;
    };
    /**
     * Sets the daylightmonth property value. 
     * @param value Value to set for the daylightmonth property.
     */
    public set daylightmonth(value: number | undefined) {
        this._daylightmonth = value;
    };
    /**
     * Gets the daylightsecond property value. 
     * @returns a integer
     */
    public get daylightsecond() {
        return this._daylightsecond;
    };
    /**
     * Sets the daylightsecond property value. 
     * @param value Value to set for the daylightsecond property.
     */
    public set daylightsecond(value: number | undefined) {
        this._daylightsecond = value;
    };
    /**
     * Gets the daylightyear property value. 
     * @returns a integer
     */
    public get daylightyear() {
        return this._daylightyear;
    };
    /**
     * Sets the daylightyear property value. 
     * @param value Value to set for the daylightyear property.
     */
    public set daylightyear(value: number | undefined) {
        this._daylightyear = value;
    };
    /**
     * Gets the effectivedatetime property value. 
     * @returns a Date
     */
    public get effectivedatetime() {
        return this._effectivedatetime;
    };
    /**
     * Sets the effectivedatetime property value. 
     * @param value Value to set for the effectivedatetime property.
     */
    public set effectivedatetime(value: Date | undefined) {
        this._effectivedatetime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Timezonerule)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Timezonerule)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Timezonerule)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Timezonerule)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Timezonerule)._organizationid_value = n.getStringValue(); },
            "_timezonedefinitionid_value": (o, n) => { (o as unknown as Timezonerule)._timezonedefinitionid_value = n.getStringValue(); },
            "bias": (o, n) => { (o as unknown as Timezonerule).bias = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Timezonerule).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Timezonerule).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Timezonerule).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "daylightbias": (o, n) => { (o as unknown as Timezonerule).daylightbias = n.getNumberValue(); },
            "daylightday": (o, n) => { (o as unknown as Timezonerule).daylightday = n.getNumberValue(); },
            "daylightdayofweek": (o, n) => { (o as unknown as Timezonerule).daylightdayofweek = n.getNumberValue(); },
            "daylighthour": (o, n) => { (o as unknown as Timezonerule).daylighthour = n.getNumberValue(); },
            "daylightminute": (o, n) => { (o as unknown as Timezonerule).daylightminute = n.getNumberValue(); },
            "daylightmonth": (o, n) => { (o as unknown as Timezonerule).daylightmonth = n.getNumberValue(); },
            "daylightsecond": (o, n) => { (o as unknown as Timezonerule).daylightsecond = n.getNumberValue(); },
            "daylightyear": (o, n) => { (o as unknown as Timezonerule).daylightyear = n.getNumberValue(); },
            "effectivedatetime": (o, n) => { (o as unknown as Timezonerule).effectivedatetime = n.getDateValue(); },
            "modifiedby": (o, n) => { (o as unknown as Timezonerule).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Timezonerule).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Timezonerule).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "standardbias": (o, n) => { (o as unknown as Timezonerule).standardbias = n.getNumberValue(); },
            "standardday": (o, n) => { (o as unknown as Timezonerule).standardday = n.getNumberValue(); },
            "standarddayofweek": (o, n) => { (o as unknown as Timezonerule).standarddayofweek = n.getNumberValue(); },
            "standardhour": (o, n) => { (o as unknown as Timezonerule).standardhour = n.getNumberValue(); },
            "standardminute": (o, n) => { (o as unknown as Timezonerule).standardminute = n.getNumberValue(); },
            "standardmonth": (o, n) => { (o as unknown as Timezonerule).standardmonth = n.getNumberValue(); },
            "standardsecond": (o, n) => { (o as unknown as Timezonerule).standardsecond = n.getNumberValue(); },
            "standardyear": (o, n) => { (o as unknown as Timezonerule).standardyear = n.getNumberValue(); },
            "timezonedefinitionid": (o, n) => { (o as unknown as Timezonerule).timezonedefinitionid = n.getObjectValue<Timezonedefinition>(createTimezonedefinitionFromDiscriminatorValue); },
            "timezoneruleid": (o, n) => { (o as unknown as Timezonerule).timezoneruleid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Timezonerule).timezoneruleversionnumber = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Timezonerule).versionnumber = n.getNumberValue(); },
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
        writer.writeNumberValue("bias", this.bias);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("daylightbias", this.daylightbias);
        writer.writeNumberValue("daylightday", this.daylightday);
        writer.writeNumberValue("daylightdayofweek", this.daylightdayofweek);
        writer.writeNumberValue("daylighthour", this.daylighthour);
        writer.writeNumberValue("daylightminute", this.daylightminute);
        writer.writeNumberValue("daylightmonth", this.daylightmonth);
        writer.writeNumberValue("daylightsecond", this.daylightsecond);
        writer.writeNumberValue("daylightyear", this.daylightyear);
        writer.writeDateValue("effectivedatetime", this.effectivedatetime);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("standardbias", this.standardbias);
        writer.writeNumberValue("standardday", this.standardday);
        writer.writeNumberValue("standarddayofweek", this.standarddayofweek);
        writer.writeNumberValue("standardhour", this.standardhour);
        writer.writeNumberValue("standardminute", this.standardminute);
        writer.writeNumberValue("standardmonth", this.standardmonth);
        writer.writeNumberValue("standardsecond", this.standardsecond);
        writer.writeNumberValue("standardyear", this.standardyear);
        writer.writeObjectValue<Timezonedefinition>("timezonedefinitionid", this.timezonedefinitionid);
        writer.writeStringValue("timezoneruleid", this.timezoneruleid);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the standardbias property value. 
     * @returns a integer
     */
    public get standardbias() {
        return this._standardbias;
    };
    /**
     * Sets the standardbias property value. 
     * @param value Value to set for the standardbias property.
     */
    public set standardbias(value: number | undefined) {
        this._standardbias = value;
    };
    /**
     * Gets the standardday property value. 
     * @returns a integer
     */
    public get standardday() {
        return this._standardday;
    };
    /**
     * Sets the standardday property value. 
     * @param value Value to set for the standardday property.
     */
    public set standardday(value: number | undefined) {
        this._standardday = value;
    };
    /**
     * Gets the standarddayofweek property value. 
     * @returns a integer
     */
    public get standarddayofweek() {
        return this._standarddayofweek;
    };
    /**
     * Sets the standarddayofweek property value. 
     * @param value Value to set for the standarddayofweek property.
     */
    public set standarddayofweek(value: number | undefined) {
        this._standarddayofweek = value;
    };
    /**
     * Gets the standardhour property value. 
     * @returns a integer
     */
    public get standardhour() {
        return this._standardhour;
    };
    /**
     * Sets the standardhour property value. 
     * @param value Value to set for the standardhour property.
     */
    public set standardhour(value: number | undefined) {
        this._standardhour = value;
    };
    /**
     * Gets the standardminute property value. 
     * @returns a integer
     */
    public get standardminute() {
        return this._standardminute;
    };
    /**
     * Sets the standardminute property value. 
     * @param value Value to set for the standardminute property.
     */
    public set standardminute(value: number | undefined) {
        this._standardminute = value;
    };
    /**
     * Gets the standardmonth property value. 
     * @returns a integer
     */
    public get standardmonth() {
        return this._standardmonth;
    };
    /**
     * Sets the standardmonth property value. 
     * @param value Value to set for the standardmonth property.
     */
    public set standardmonth(value: number | undefined) {
        this._standardmonth = value;
    };
    /**
     * Gets the standardsecond property value. 
     * @returns a integer
     */
    public get standardsecond() {
        return this._standardsecond;
    };
    /**
     * Sets the standardsecond property value. 
     * @param value Value to set for the standardsecond property.
     */
    public set standardsecond(value: number | undefined) {
        this._standardsecond = value;
    };
    /**
     * Gets the standardyear property value. 
     * @returns a integer
     */
    public get standardyear() {
        return this._standardyear;
    };
    /**
     * Sets the standardyear property value. 
     * @param value Value to set for the standardyear property.
     */
    public set standardyear(value: number | undefined) {
        this._standardyear = value;
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
     * Gets the timezoneruleid property value. 
     * @returns a string
     */
    public get timezoneruleid() {
        return this._timezoneruleid;
    };
    /**
     * Sets the timezoneruleid property value. 
     * @param value Value to set for the timezoneruleid property.
     */
    public set timezoneruleid(value: string | undefined) {
        this._timezoneruleid = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
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
