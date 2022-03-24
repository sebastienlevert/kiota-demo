import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Activitypointer, Businessunit, Crmbaseentity, Principal, Recurringappointmentmaster, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Recurrencerule extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __objectid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _dayofmonth?: number | undefined;
    private _daysofweekmask?: number | undefined;
    private _duration?: number | undefined;
    private _effectiveenddate?: Date | undefined;
    private _effectivestartdate?: Date | undefined;
    private _endtime?: Date | undefined;
    private _firstdayofweek?: number | undefined;
    private _instance?: number | undefined;
    private _interval?: number | undefined;
    private _isnthmonthly?: boolean | undefined;
    private _isnthyearly?: boolean | undefined;
    private _isregenerate?: boolean | undefined;
    private _isweekdaypattern?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _monthofyear?: number | undefined;
    private _objectid?: Activitypointer | undefined;
    private _occurrences?: number | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _patternenddate?: Date | undefined;
    private _patternendtype?: number | undefined;
    private _patternstartdate?: Date | undefined;
    private _recurrencepatterntype?: number | undefined;
    private _recurrencerule_recurringappointmentmaster?: Recurringappointmentmaster[] | undefined;
    private _ruleid?: string | undefined;
    private _starttime?: Date | undefined;
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
     * Gets the _objectid_value property value. 
     * @returns a string
     */
    public get _objectid_value() {
        return this.__objectid_value;
    };
    /**
     * Sets the _objectid_value property value. 
     * @param value Value to set for the _objectid_value property.
     */
    public set _objectid_value(value: string | undefined) {
        this.__objectid_value = value;
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
     * Instantiates a new recurrencerule and sets the default values.
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
     * Gets the dayofmonth property value. 
     * @returns a integer
     */
    public get dayofmonth() {
        return this._dayofmonth;
    };
    /**
     * Sets the dayofmonth property value. 
     * @param value Value to set for the dayofmonth property.
     */
    public set dayofmonth(value: number | undefined) {
        this._dayofmonth = value;
    };
    /**
     * Gets the daysofweekmask property value. 
     * @returns a integer
     */
    public get daysofweekmask() {
        return this._daysofweekmask;
    };
    /**
     * Sets the daysofweekmask property value. 
     * @param value Value to set for the daysofweekmask property.
     */
    public set daysofweekmask(value: number | undefined) {
        this._daysofweekmask = value;
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
     * Gets the effectiveenddate property value. 
     * @returns a Date
     */
    public get effectiveenddate() {
        return this._effectiveenddate;
    };
    /**
     * Sets the effectiveenddate property value. 
     * @param value Value to set for the effectiveenddate property.
     */
    public set effectiveenddate(value: Date | undefined) {
        this._effectiveenddate = value;
    };
    /**
     * Gets the effectivestartdate property value. 
     * @returns a Date
     */
    public get effectivestartdate() {
        return this._effectivestartdate;
    };
    /**
     * Sets the effectivestartdate property value. 
     * @param value Value to set for the effectivestartdate property.
     */
    public set effectivestartdate(value: Date | undefined) {
        this._effectivestartdate = value;
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
     * Gets the firstdayofweek property value. 
     * @returns a integer
     */
    public get firstdayofweek() {
        return this._firstdayofweek;
    };
    /**
     * Sets the firstdayofweek property value. 
     * @param value Value to set for the firstdayofweek property.
     */
    public set firstdayofweek(value: number | undefined) {
        this._firstdayofweek = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Recurrencerule)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Recurrencerule)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Recurrencerule)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Recurrencerule)._modifiedonbehalfby_value = n.getStringValue(); },
            "_objectid_value": (o, n) => { (o as unknown as Recurrencerule)._objectid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Recurrencerule)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Recurrencerule)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Recurrencerule)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Recurrencerule)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Recurrencerule).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Recurrencerule).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Recurrencerule).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "dayofmonth": (o, n) => { (o as unknown as Recurrencerule).dayofmonth = n.getNumberValue(); },
            "daysofweekmask": (o, n) => { (o as unknown as Recurrencerule).daysofweekmask = n.getNumberValue(); },
            "duration": (o, n) => { (o as unknown as Recurrencerule).duration = n.getNumberValue(); },
            "effectiveenddate": (o, n) => { (o as unknown as Recurrencerule).effectiveenddate = n.getDateValue(); },
            "effectivestartdate": (o, n) => { (o as unknown as Recurrencerule).effectivestartdate = n.getDateValue(); },
            "endtime": (o, n) => { (o as unknown as Recurrencerule).endtime = n.getDateValue(); },
            "firstdayofweek": (o, n) => { (o as unknown as Recurrencerule).firstdayofweek = n.getNumberValue(); },
            "instance": (o, n) => { (o as unknown as Recurrencerule).instance = n.getNumberValue(); },
            "interval": (o, n) => { (o as unknown as Recurrencerule).interval = n.getNumberValue(); },
            "isnthmonthly": (o, n) => { (o as unknown as Recurrencerule).isnthmonthly = n.getBooleanValue(); },
            "isnthyearly": (o, n) => { (o as unknown as Recurrencerule).isnthyearly = n.getBooleanValue(); },
            "isregenerate": (o, n) => { (o as unknown as Recurrencerule).isregenerate = n.getBooleanValue(); },
            "isweekdaypattern": (o, n) => { (o as unknown as Recurrencerule).isweekdaypattern = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Recurrencerule).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Recurrencerule).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Recurrencerule).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "monthofyear": (o, n) => { (o as unknown as Recurrencerule).monthofyear = n.getNumberValue(); },
            "objectid": (o, n) => { (o as unknown as Recurrencerule).objectid = n.getObjectValue<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "occurrences": (o, n) => { (o as unknown as Recurrencerule).occurrences = n.getNumberValue(); },
            "ownerid": (o, n) => { (o as unknown as Recurrencerule).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Recurrencerule).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "patternenddate": (o, n) => { (o as unknown as Recurrencerule).patternenddate = n.getDateValue(); },
            "patternendtype": (o, n) => { (o as unknown as Recurrencerule).patternendtype = n.getNumberValue(); },
            "patternstartdate": (o, n) => { (o as unknown as Recurrencerule).patternstartdate = n.getDateValue(); },
            "recurrencepatterntype": (o, n) => { (o as unknown as Recurrencerule).recurrencepatterntype = n.getNumberValue(); },
            "recurrencerule_recurringappointmentmaster": (o, n) => { (o as unknown as Recurrencerule).recurrencerule_recurringappointmentmaster = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "ruleid": (o, n) => { (o as unknown as Recurrencerule).ruleid = n.getStringValue(); },
            "starttime": (o, n) => { (o as unknown as Recurrencerule).starttime = n.getDateValue(); },
            "versionnumber": (o, n) => { (o as unknown as Recurrencerule).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the instance property value. 
     * @returns a integer
     */
    public get instance() {
        return this._instance;
    };
    /**
     * Sets the instance property value. 
     * @param value Value to set for the instance property.
     */
    public set instance(value: number | undefined) {
        this._instance = value;
    };
    /**
     * Gets the interval property value. 
     * @returns a integer
     */
    public get interval() {
        return this._interval;
    };
    /**
     * Sets the interval property value. 
     * @param value Value to set for the interval property.
     */
    public set interval(value: number | undefined) {
        this._interval = value;
    };
    /**
     * Gets the isnthmonthly property value. 
     * @returns a boolean
     */
    public get isnthmonthly() {
        return this._isnthmonthly;
    };
    /**
     * Sets the isnthmonthly property value. 
     * @param value Value to set for the isnthmonthly property.
     */
    public set isnthmonthly(value: boolean | undefined) {
        this._isnthmonthly = value;
    };
    /**
     * Gets the isnthyearly property value. 
     * @returns a boolean
     */
    public get isnthyearly() {
        return this._isnthyearly;
    };
    /**
     * Sets the isnthyearly property value. 
     * @param value Value to set for the isnthyearly property.
     */
    public set isnthyearly(value: boolean | undefined) {
        this._isnthyearly = value;
    };
    /**
     * Gets the isregenerate property value. 
     * @returns a boolean
     */
    public get isregenerate() {
        return this._isregenerate;
    };
    /**
     * Sets the isregenerate property value. 
     * @param value Value to set for the isregenerate property.
     */
    public set isregenerate(value: boolean | undefined) {
        this._isregenerate = value;
    };
    /**
     * Gets the isweekdaypattern property value. 
     * @returns a boolean
     */
    public get isweekdaypattern() {
        return this._isweekdaypattern;
    };
    /**
     * Sets the isweekdaypattern property value. 
     * @param value Value to set for the isweekdaypattern property.
     */
    public set isweekdaypattern(value: boolean | undefined) {
        this._isweekdaypattern = value;
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
     * Gets the monthofyear property value. 
     * @returns a integer
     */
    public get monthofyear() {
        return this._monthofyear;
    };
    /**
     * Sets the monthofyear property value. 
     * @param value Value to set for the monthofyear property.
     */
    public set monthofyear(value: number | undefined) {
        this._monthofyear = value;
    };
    /**
     * Gets the objectid property value. 
     * @returns a activitypointer
     */
    public get objectid() {
        return this._objectid;
    };
    /**
     * Sets the objectid property value. 
     * @param value Value to set for the objectid property.
     */
    public set objectid(value: Activitypointer | undefined) {
        this._objectid = value;
    };
    /**
     * Gets the occurrences property value. 
     * @returns a integer
     */
    public get occurrences() {
        return this._occurrences;
    };
    /**
     * Sets the occurrences property value. 
     * @param value Value to set for the occurrences property.
     */
    public set occurrences(value: number | undefined) {
        this._occurrences = value;
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
     * Gets the patternenddate property value. 
     * @returns a Date
     */
    public get patternenddate() {
        return this._patternenddate;
    };
    /**
     * Sets the patternenddate property value. 
     * @param value Value to set for the patternenddate property.
     */
    public set patternenddate(value: Date | undefined) {
        this._patternenddate = value;
    };
    /**
     * Gets the patternendtype property value. 
     * @returns a integer
     */
    public get patternendtype() {
        return this._patternendtype;
    };
    /**
     * Sets the patternendtype property value. 
     * @param value Value to set for the patternendtype property.
     */
    public set patternendtype(value: number | undefined) {
        this._patternendtype = value;
    };
    /**
     * Gets the patternstartdate property value. 
     * @returns a Date
     */
    public get patternstartdate() {
        return this._patternstartdate;
    };
    /**
     * Sets the patternstartdate property value. 
     * @param value Value to set for the patternstartdate property.
     */
    public set patternstartdate(value: Date | undefined) {
        this._patternstartdate = value;
    };
    /**
     * Gets the recurrencepatterntype property value. 
     * @returns a integer
     */
    public get recurrencepatterntype() {
        return this._recurrencepatterntype;
    };
    /**
     * Sets the recurrencepatterntype property value. 
     * @param value Value to set for the recurrencepatterntype property.
     */
    public set recurrencepatterntype(value: number | undefined) {
        this._recurrencepatterntype = value;
    };
    /**
     * Gets the recurrencerule_recurringappointmentmaster property value. 
     * @returns a recurringappointmentmaster
     */
    public get recurrencerule_recurringappointmentmaster() {
        return this._recurrencerule_recurringappointmentmaster;
    };
    /**
     * Sets the recurrencerule_recurringappointmentmaster property value. 
     * @param value Value to set for the recurrencerule_recurringappointmentmaster property.
     */
    public set recurrencerule_recurringappointmentmaster(value: Recurringappointmentmaster[] | undefined) {
        this._recurrencerule_recurringappointmentmaster = value;
    };
    /**
     * Gets the ruleid property value. 
     * @returns a string
     */
    public get ruleid() {
        return this._ruleid;
    };
    /**
     * Sets the ruleid property value. 
     * @param value Value to set for the ruleid property.
     */
    public set ruleid(value: string | undefined) {
        this._ruleid = value;
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
        writer.writeStringValue("_objectid_value", this._objectid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("dayofmonth", this.dayofmonth);
        writer.writeNumberValue("daysofweekmask", this.daysofweekmask);
        writer.writeNumberValue("duration", this.duration);
        writer.writeDateValue("effectiveenddate", this.effectiveenddate);
        writer.writeDateValue("effectivestartdate", this.effectivestartdate);
        writer.writeDateValue("endtime", this.endtime);
        writer.writeNumberValue("firstdayofweek", this.firstdayofweek);
        writer.writeNumberValue("instance", this.instance);
        writer.writeNumberValue("interval", this.interval);
        writer.writeBooleanValue("isnthmonthly", this.isnthmonthly);
        writer.writeBooleanValue("isnthyearly", this.isnthyearly);
        writer.writeBooleanValue("isregenerate", this.isregenerate);
        writer.writeBooleanValue("isweekdaypattern", this.isweekdaypattern);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("monthofyear", this.monthofyear);
        writer.writeObjectValue<Activitypointer>("objectid", this.objectid);
        writer.writeNumberValue("occurrences", this.occurrences);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeDateValue("patternenddate", this.patternenddate);
        writer.writeNumberValue("patternendtype", this.patternendtype);
        writer.writeDateValue("patternstartdate", this.patternstartdate);
        writer.writeNumberValue("recurrencepatterntype", this.recurrencepatterntype);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("recurrencerule_recurringappointmentmaster", this.recurrencerule_recurringappointmentmaster);
        writer.writeStringValue("ruleid", this.ruleid);
        writer.writeDateValue("starttime", this.starttime);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
