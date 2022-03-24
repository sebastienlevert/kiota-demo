import {createEmailserverprofileFromDiscriminatorValue} from './createEmailserverprofileFromDiscriminatorValue';
import {createMailboxFromDiscriminatorValue} from './createMailboxFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTracelogFromDiscriminatorValue} from './createTracelogFromDiscriminatorValue';
import {Crmbaseentity, Emailserverprofile, Mailbox, Organization, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Tracelog extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __parenttracelogid_value?: string | undefined;
    private __regardingobjectid_value?: string | undefined;
    private __regardingobjectownerid_value?: string | undefined;
    private __regardingobjectowningbusinessunit_value?: string | undefined;
    private _canbedeleted?: boolean | undefined;
    private _collationlevel?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _errordetails?: string | undefined;
    private _errortypedisplay?: string | undefined;
    private _isunique?: boolean | undefined;
    private _level?: number | undefined;
    private _machinename?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _organizationid?: Organization | undefined;
    private _parenttracelogid?: Tracelog | undefined;
    private _regardingobjectid_emailserverprofile?: Emailserverprofile | undefined;
    private _regardingobjectid_mailbox?: Mailbox | undefined;
    private _text?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _traceactionxml?: string | undefined;
    private _tracecode?: number | undefined;
    private _tracedetailxml?: string | undefined;
    private _tracelog_parent_tracelog?: Tracelog[] | undefined;
    private _tracelogid?: string | undefined;
    private _traceparameterhash?: number | undefined;
    private _traceparameterxml?: string | undefined;
    private _tracestatus?: boolean | undefined;
    private _utcconversiontimezonecode?: number | undefined;
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
     * Gets the _parenttracelogid_value property value. 
     * @returns a string
     */
    public get _parenttracelogid_value() {
        return this.__parenttracelogid_value;
    };
    /**
     * Sets the _parenttracelogid_value property value. 
     * @param value Value to set for the _parenttracelogid_value property.
     */
    public set _parenttracelogid_value(value: string | undefined) {
        this.__parenttracelogid_value = value;
    };
    /**
     * Gets the _regardingobjectid_value property value. 
     * @returns a string
     */
    public get _regardingobjectid_value() {
        return this.__regardingobjectid_value;
    };
    /**
     * Sets the _regardingobjectid_value property value. 
     * @param value Value to set for the _regardingobjectid_value property.
     */
    public set _regardingobjectid_value(value: string | undefined) {
        this.__regardingobjectid_value = value;
    };
    /**
     * Gets the _regardingobjectownerid_value property value. 
     * @returns a string
     */
    public get _regardingobjectownerid_value() {
        return this.__regardingobjectownerid_value;
    };
    /**
     * Sets the _regardingobjectownerid_value property value. 
     * @param value Value to set for the _regardingobjectownerid_value property.
     */
    public set _regardingobjectownerid_value(value: string | undefined) {
        this.__regardingobjectownerid_value = value;
    };
    /**
     * Gets the _regardingobjectowningbusinessunit_value property value. 
     * @returns a string
     */
    public get _regardingobjectowningbusinessunit_value() {
        return this.__regardingobjectowningbusinessunit_value;
    };
    /**
     * Sets the _regardingobjectowningbusinessunit_value property value. 
     * @param value Value to set for the _regardingobjectowningbusinessunit_value property.
     */
    public set _regardingobjectowningbusinessunit_value(value: string | undefined) {
        this.__regardingobjectowningbusinessunit_value = value;
    };
    /**
     * Gets the canbedeleted property value. 
     * @returns a boolean
     */
    public get canbedeleted() {
        return this._canbedeleted;
    };
    /**
     * Sets the canbedeleted property value. 
     * @param value Value to set for the canbedeleted property.
     */
    public set canbedeleted(value: boolean | undefined) {
        this._canbedeleted = value;
    };
    /**
     * Gets the collationlevel property value. 
     * @returns a integer
     */
    public get collationlevel() {
        return this._collationlevel;
    };
    /**
     * Sets the collationlevel property value. 
     * @param value Value to set for the collationlevel property.
     */
    public set collationlevel(value: number | undefined) {
        this._collationlevel = value;
    };
    /**
     * Instantiates a new tracelog and sets the default values.
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
     * Gets the errordetails property value. 
     * @returns a string
     */
    public get errordetails() {
        return this._errordetails;
    };
    /**
     * Sets the errordetails property value. 
     * @param value Value to set for the errordetails property.
     */
    public set errordetails(value: string | undefined) {
        this._errordetails = value;
    };
    /**
     * Gets the errortypedisplay property value. 
     * @returns a string
     */
    public get errortypedisplay() {
        return this._errortypedisplay;
    };
    /**
     * Sets the errortypedisplay property value. 
     * @param value Value to set for the errortypedisplay property.
     */
    public set errortypedisplay(value: string | undefined) {
        this._errortypedisplay = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Tracelog)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Tracelog)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Tracelog)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Tracelog)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Tracelog)._organizationid_value = n.getStringValue(); },
            "_parenttracelogid_value": (o, n) => { (o as unknown as Tracelog)._parenttracelogid_value = n.getStringValue(); },
            "_regardingobjectid_value": (o, n) => { (o as unknown as Tracelog)._regardingobjectid_value = n.getStringValue(); },
            "_regardingobjectownerid_value": (o, n) => { (o as unknown as Tracelog)._regardingobjectownerid_value = n.getStringValue(); },
            "_regardingobjectowningbusinessunit_value": (o, n) => { (o as unknown as Tracelog)._regardingobjectowningbusinessunit_value = n.getStringValue(); },
            "canbedeleted": (o, n) => { (o as unknown as Tracelog).canbedeleted = n.getBooleanValue(); },
            "collationlevel": (o, n) => { (o as unknown as Tracelog).collationlevel = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Tracelog).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Tracelog).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Tracelog).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "errordetails": (o, n) => { (o as unknown as Tracelog).errordetails = n.getStringValue(); },
            "errortypedisplay": (o, n) => { (o as unknown as Tracelog).errortypedisplay = n.getStringValue(); },
            "isunique": (o, n) => { (o as unknown as Tracelog).isunique = n.getBooleanValue(); },
            "level": (o, n) => { (o as unknown as Tracelog).level = n.getNumberValue(); },
            "machinename": (o, n) => { (o as unknown as Tracelog).machinename = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Tracelog).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Tracelog).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Tracelog).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Tracelog).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "parenttracelogid": (o, n) => { (o as unknown as Tracelog).parenttracelogid = n.getObjectValue<Tracelog>(createTracelogFromDiscriminatorValue); },
            "regardingobjectid_emailserverprofile": (o, n) => { (o as unknown as Tracelog).regardingobjectid_emailserverprofile = n.getObjectValue<Emailserverprofile>(createEmailserverprofileFromDiscriminatorValue); },
            "regardingobjectid_mailbox": (o, n) => { (o as unknown as Tracelog).regardingobjectid_mailbox = n.getObjectValue<Mailbox>(createMailboxFromDiscriminatorValue); },
            "text": (o, n) => { (o as unknown as Tracelog).text = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Tracelog).timezoneruleversionnumber = n.getNumberValue(); },
            "traceactionxml": (o, n) => { (o as unknown as Tracelog).traceactionxml = n.getStringValue(); },
            "tracecode": (o, n) => { (o as unknown as Tracelog).tracecode = n.getNumberValue(); },
            "tracedetailxml": (o, n) => { (o as unknown as Tracelog).tracedetailxml = n.getStringValue(); },
            "tracelog_parent_tracelog": (o, n) => { (o as unknown as Tracelog).tracelog_parent_tracelog = n.getCollectionOfObjectValues<Tracelog>(createTracelogFromDiscriminatorValue); },
            "tracelogid": (o, n) => { (o as unknown as Tracelog).tracelogid = n.getStringValue(); },
            "traceparameterhash": (o, n) => { (o as unknown as Tracelog).traceparameterhash = n.getNumberValue(); },
            "traceparameterxml": (o, n) => { (o as unknown as Tracelog).traceparameterxml = n.getStringValue(); },
            "tracestatus": (o, n) => { (o as unknown as Tracelog).tracestatus = n.getBooleanValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Tracelog).utcconversiontimezonecode = n.getNumberValue(); },
        };
    };
    /**
     * Gets the isunique property value. 
     * @returns a boolean
     */
    public get isunique() {
        return this._isunique;
    };
    /**
     * Sets the isunique property value. 
     * @param value Value to set for the isunique property.
     */
    public set isunique(value: boolean | undefined) {
        this._isunique = value;
    };
    /**
     * Gets the level property value. 
     * @returns a integer
     */
    public get level() {
        return this._level;
    };
    /**
     * Sets the level property value. 
     * @param value Value to set for the level property.
     */
    public set level(value: number | undefined) {
        this._level = value;
    };
    /**
     * Gets the machinename property value. 
     * @returns a string
     */
    public get machinename() {
        return this._machinename;
    };
    /**
     * Sets the machinename property value. 
     * @param value Value to set for the machinename property.
     */
    public set machinename(value: string | undefined) {
        this._machinename = value;
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
     * Gets the parenttracelogid property value. 
     * @returns a tracelog
     */
    public get parenttracelogid() {
        return this._parenttracelogid;
    };
    /**
     * Sets the parenttracelogid property value. 
     * @param value Value to set for the parenttracelogid property.
     */
    public set parenttracelogid(value: Tracelog | undefined) {
        this._parenttracelogid = value;
    };
    /**
     * Gets the regardingobjectid_emailserverprofile property value. 
     * @returns a emailserverprofile
     */
    public get regardingobjectid_emailserverprofile() {
        return this._regardingobjectid_emailserverprofile;
    };
    /**
     * Sets the regardingobjectid_emailserverprofile property value. 
     * @param value Value to set for the regardingobjectid_emailserverprofile property.
     */
    public set regardingobjectid_emailserverprofile(value: Emailserverprofile | undefined) {
        this._regardingobjectid_emailserverprofile = value;
    };
    /**
     * Gets the regardingobjectid_mailbox property value. 
     * @returns a mailbox
     */
    public get regardingobjectid_mailbox() {
        return this._regardingobjectid_mailbox;
    };
    /**
     * Sets the regardingobjectid_mailbox property value. 
     * @param value Value to set for the regardingobjectid_mailbox property.
     */
    public set regardingobjectid_mailbox(value: Mailbox | undefined) {
        this._regardingobjectid_mailbox = value;
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
        writer.writeStringValue("_parenttracelogid_value", this._parenttracelogid_value);
        writer.writeStringValue("_regardingobjectid_value", this._regardingobjectid_value);
        writer.writeStringValue("_regardingobjectownerid_value", this._regardingobjectownerid_value);
        writer.writeStringValue("_regardingobjectowningbusinessunit_value", this._regardingobjectowningbusinessunit_value);
        writer.writeBooleanValue("canbedeleted", this.canbedeleted);
        writer.writeNumberValue("collationlevel", this.collationlevel);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("errordetails", this.errordetails);
        writer.writeStringValue("errortypedisplay", this.errortypedisplay);
        writer.writeBooleanValue("isunique", this.isunique);
        writer.writeNumberValue("level", this.level);
        writer.writeStringValue("machinename", this.machinename);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeObjectValue<Tracelog>("parenttracelogid", this.parenttracelogid);
        writer.writeObjectValue<Emailserverprofile>("regardingobjectid_emailserverprofile", this.regardingobjectid_emailserverprofile);
        writer.writeObjectValue<Mailbox>("regardingobjectid_mailbox", this.regardingobjectid_mailbox);
        writer.writeStringValue("text", this.text);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("traceactionxml", this.traceactionxml);
        writer.writeNumberValue("tracecode", this.tracecode);
        writer.writeStringValue("tracedetailxml", this.tracedetailxml);
        writer.writeCollectionOfObjectValues<Tracelog>("tracelog_parent_tracelog", this.tracelog_parent_tracelog);
        writer.writeStringValue("tracelogid", this.tracelogid);
        writer.writeNumberValue("traceparameterhash", this.traceparameterhash);
        writer.writeStringValue("traceparameterxml", this.traceparameterxml);
        writer.writeBooleanValue("tracestatus", this.tracestatus);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
    };
    /**
     * Gets the text property value. 
     * @returns a string
     */
    public get text() {
        return this._text;
    };
    /**
     * Sets the text property value. 
     * @param value Value to set for the text property.
     */
    public set text(value: string | undefined) {
        this._text = value;
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
     * Gets the traceactionxml property value. 
     * @returns a string
     */
    public get traceactionxml() {
        return this._traceactionxml;
    };
    /**
     * Sets the traceactionxml property value. 
     * @param value Value to set for the traceactionxml property.
     */
    public set traceactionxml(value: string | undefined) {
        this._traceactionxml = value;
    };
    /**
     * Gets the tracecode property value. 
     * @returns a integer
     */
    public get tracecode() {
        return this._tracecode;
    };
    /**
     * Sets the tracecode property value. 
     * @param value Value to set for the tracecode property.
     */
    public set tracecode(value: number | undefined) {
        this._tracecode = value;
    };
    /**
     * Gets the tracedetailxml property value. 
     * @returns a string
     */
    public get tracedetailxml() {
        return this._tracedetailxml;
    };
    /**
     * Sets the tracedetailxml property value. 
     * @param value Value to set for the tracedetailxml property.
     */
    public set tracedetailxml(value: string | undefined) {
        this._tracedetailxml = value;
    };
    /**
     * Gets the tracelog_parent_tracelog property value. 
     * @returns a tracelog
     */
    public get tracelog_parent_tracelog() {
        return this._tracelog_parent_tracelog;
    };
    /**
     * Sets the tracelog_parent_tracelog property value. 
     * @param value Value to set for the tracelog_parent_tracelog property.
     */
    public set tracelog_parent_tracelog(value: Tracelog[] | undefined) {
        this._tracelog_parent_tracelog = value;
    };
    /**
     * Gets the tracelogid property value. 
     * @returns a string
     */
    public get tracelogid() {
        return this._tracelogid;
    };
    /**
     * Sets the tracelogid property value. 
     * @param value Value to set for the tracelogid property.
     */
    public set tracelogid(value: string | undefined) {
        this._tracelogid = value;
    };
    /**
     * Gets the traceparameterhash property value. 
     * @returns a integer
     */
    public get traceparameterhash() {
        return this._traceparameterhash;
    };
    /**
     * Sets the traceparameterhash property value. 
     * @param value Value to set for the traceparameterhash property.
     */
    public set traceparameterhash(value: number | undefined) {
        this._traceparameterhash = value;
    };
    /**
     * Gets the traceparameterxml property value. 
     * @returns a string
     */
    public get traceparameterxml() {
        return this._traceparameterxml;
    };
    /**
     * Sets the traceparameterxml property value. 
     * @param value Value to set for the traceparameterxml property.
     */
    public set traceparameterxml(value: string | undefined) {
        this._traceparameterxml = value;
    };
    /**
     * Gets the tracestatus property value. 
     * @returns a boolean
     */
    public get tracestatus() {
        return this._tracestatus;
    };
    /**
     * Sets the tracestatus property value. 
     * @param value Value to set for the tracestatus property.
     */
    public set tracestatus(value: boolean | undefined) {
        this._tracestatus = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
}
