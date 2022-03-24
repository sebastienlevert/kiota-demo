import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_recording extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_appointment_activity_value?: string | undefined;
    private __msdyn_phone_call_activity_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_appointment_activity?: Appointment | undefined;
    private _msdyn_ci_comments?: string | undefined;
    private _msdyn_ci_id?: string | undefined;
    private _msdyn_ci_insights_json?: string | undefined;
    private _msdyn_ci_keywords?: string | undefined;
    private _msdyn_ci_tags?: string | undefined;
    private _msdyn_ci_transcript?: string | undefined;
    private _msdyn_ci_transcript_json?: string | undefined;
    private _msdyn_ci_translated_transcript?: string | undefined;
    private _msdyn_ci_translated_transcript_json?: string | undefined;
    private _msdyn_ci_url?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_phone_call_activity?: Phonecall | undefined;
    private _msdyn_recording_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_recording_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_recording_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_recording_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_recording_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_recording_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_recording_ProcessSession?: Processsession[] | undefined;
    private _msdyn_recording_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_recordingid?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
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
     * Gets the _msdyn_appointment_activity_value property value. 
     * @returns a string
     */
    public get _msdyn_appointment_activity_value() {
        return this.__msdyn_appointment_activity_value;
    };
    /**
     * Sets the _msdyn_appointment_activity_value property value. 
     * @param value Value to set for the _msdyn_appointment_activity_value property.
     */
    public set _msdyn_appointment_activity_value(value: string | undefined) {
        this.__msdyn_appointment_activity_value = value;
    };
    /**
     * Gets the _msdyn_phone_call_activity_value property value. 
     * @returns a string
     */
    public get _msdyn_phone_call_activity_value() {
        return this.__msdyn_phone_call_activity_value;
    };
    /**
     * Sets the _msdyn_phone_call_activity_value property value. 
     * @param value Value to set for the _msdyn_phone_call_activity_value property.
     */
    public set _msdyn_phone_call_activity_value(value: string | undefined) {
        this.__msdyn_phone_call_activity_value = value;
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
     * Instantiates a new msdyn_recording and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_recording)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_recording)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_recording)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_recording)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_appointment_activity_value": (o, n) => { (o as unknown as Msdyn_recording)._msdyn_appointment_activity_value = n.getStringValue(); },
            "_msdyn_phone_call_activity_value": (o, n) => { (o as unknown as Msdyn_recording)._msdyn_phone_call_activity_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_recording)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_recording)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_recording)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_recording)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_recording).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_recording).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_recording).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_recording).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_recording).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_recording).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_recording).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_appointment_activity": (o, n) => { (o as unknown as Msdyn_recording).msdyn_appointment_activity = n.getObjectValue<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_ci_comments": (o, n) => { (o as unknown as Msdyn_recording).msdyn_ci_comments = n.getStringValue(); },
            "msdyn_ci_id": (o, n) => { (o as unknown as Msdyn_recording).msdyn_ci_id = n.getStringValue(); },
            "msdyn_ci_insights_json": (o, n) => { (o as unknown as Msdyn_recording).msdyn_ci_insights_json = n.getStringValue(); },
            "msdyn_ci_keywords": (o, n) => { (o as unknown as Msdyn_recording).msdyn_ci_keywords = n.getStringValue(); },
            "msdyn_ci_tags": (o, n) => { (o as unknown as Msdyn_recording).msdyn_ci_tags = n.getStringValue(); },
            "msdyn_ci_transcript": (o, n) => { (o as unknown as Msdyn_recording).msdyn_ci_transcript = n.getStringValue(); },
            "msdyn_ci_transcript_json": (o, n) => { (o as unknown as Msdyn_recording).msdyn_ci_transcript_json = n.getStringValue(); },
            "msdyn_ci_translated_transcript": (o, n) => { (o as unknown as Msdyn_recording).msdyn_ci_translated_transcript = n.getStringValue(); },
            "msdyn_ci_translated_transcript_json": (o, n) => { (o as unknown as Msdyn_recording).msdyn_ci_translated_transcript_json = n.getStringValue(); },
            "msdyn_ci_url": (o, n) => { (o as unknown as Msdyn_recording).msdyn_ci_url = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_recording).msdyn_name = n.getStringValue(); },
            "msdyn_phone_call_activity": (o, n) => { (o as unknown as Msdyn_recording).msdyn_phone_call_activity = n.getObjectValue<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_recording_AsyncOperations": (o, n) => { (o as unknown as Msdyn_recording).msdyn_recording_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_recording_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_recording).msdyn_recording_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_recording_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_recording).msdyn_recording_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_recording_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_recording).msdyn_recording_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_recording_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_recording).msdyn_recording_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_recording_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_recording).msdyn_recording_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_recording_ProcessSession": (o, n) => { (o as unknown as Msdyn_recording).msdyn_recording_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_recording_SyncErrors": (o, n) => { (o as unknown as Msdyn_recording).msdyn_recording_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_recordingid": (o, n) => { (o as unknown as Msdyn_recording).msdyn_recordingid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_recording).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_recording).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_recording).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_recording).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_recording).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_recording).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_recording).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_recording).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_recording).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_recording).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_appointment_activity property value. 
     * @returns a appointment
     */
    public get msdyn_appointment_activity() {
        return this._msdyn_appointment_activity;
    };
    /**
     * Sets the msdyn_appointment_activity property value. 
     * @param value Value to set for the msdyn_appointment_activity property.
     */
    public set msdyn_appointment_activity(value: Appointment | undefined) {
        this._msdyn_appointment_activity = value;
    };
    /**
     * Gets the msdyn_ci_comments property value. 
     * @returns a string
     */
    public get msdyn_ci_comments() {
        return this._msdyn_ci_comments;
    };
    /**
     * Sets the msdyn_ci_comments property value. 
     * @param value Value to set for the msdyn_ci_comments property.
     */
    public set msdyn_ci_comments(value: string | undefined) {
        this._msdyn_ci_comments = value;
    };
    /**
     * Gets the msdyn_ci_id property value. 
     * @returns a string
     */
    public get msdyn_ci_id() {
        return this._msdyn_ci_id;
    };
    /**
     * Sets the msdyn_ci_id property value. 
     * @param value Value to set for the msdyn_ci_id property.
     */
    public set msdyn_ci_id(value: string | undefined) {
        this._msdyn_ci_id = value;
    };
    /**
     * Gets the msdyn_ci_insights_json property value. 
     * @returns a string
     */
    public get msdyn_ci_insights_json() {
        return this._msdyn_ci_insights_json;
    };
    /**
     * Sets the msdyn_ci_insights_json property value. 
     * @param value Value to set for the msdyn_ci_insights_json property.
     */
    public set msdyn_ci_insights_json(value: string | undefined) {
        this._msdyn_ci_insights_json = value;
    };
    /**
     * Gets the msdyn_ci_keywords property value. 
     * @returns a string
     */
    public get msdyn_ci_keywords() {
        return this._msdyn_ci_keywords;
    };
    /**
     * Sets the msdyn_ci_keywords property value. 
     * @param value Value to set for the msdyn_ci_keywords property.
     */
    public set msdyn_ci_keywords(value: string | undefined) {
        this._msdyn_ci_keywords = value;
    };
    /**
     * Gets the msdyn_ci_tags property value. 
     * @returns a string
     */
    public get msdyn_ci_tags() {
        return this._msdyn_ci_tags;
    };
    /**
     * Sets the msdyn_ci_tags property value. 
     * @param value Value to set for the msdyn_ci_tags property.
     */
    public set msdyn_ci_tags(value: string | undefined) {
        this._msdyn_ci_tags = value;
    };
    /**
     * Gets the msdyn_ci_transcript property value. 
     * @returns a string
     */
    public get msdyn_ci_transcript() {
        return this._msdyn_ci_transcript;
    };
    /**
     * Sets the msdyn_ci_transcript property value. 
     * @param value Value to set for the msdyn_ci_transcript property.
     */
    public set msdyn_ci_transcript(value: string | undefined) {
        this._msdyn_ci_transcript = value;
    };
    /**
     * Gets the msdyn_ci_transcript_json property value. 
     * @returns a string
     */
    public get msdyn_ci_transcript_json() {
        return this._msdyn_ci_transcript_json;
    };
    /**
     * Sets the msdyn_ci_transcript_json property value. 
     * @param value Value to set for the msdyn_ci_transcript_json property.
     */
    public set msdyn_ci_transcript_json(value: string | undefined) {
        this._msdyn_ci_transcript_json = value;
    };
    /**
     * Gets the msdyn_ci_translated_transcript property value. 
     * @returns a string
     */
    public get msdyn_ci_translated_transcript() {
        return this._msdyn_ci_translated_transcript;
    };
    /**
     * Sets the msdyn_ci_translated_transcript property value. 
     * @param value Value to set for the msdyn_ci_translated_transcript property.
     */
    public set msdyn_ci_translated_transcript(value: string | undefined) {
        this._msdyn_ci_translated_transcript = value;
    };
    /**
     * Gets the msdyn_ci_translated_transcript_json property value. 
     * @returns a string
     */
    public get msdyn_ci_translated_transcript_json() {
        return this._msdyn_ci_translated_transcript_json;
    };
    /**
     * Sets the msdyn_ci_translated_transcript_json property value. 
     * @param value Value to set for the msdyn_ci_translated_transcript_json property.
     */
    public set msdyn_ci_translated_transcript_json(value: string | undefined) {
        this._msdyn_ci_translated_transcript_json = value;
    };
    /**
     * Gets the msdyn_ci_url property value. 
     * @returns a string
     */
    public get msdyn_ci_url() {
        return this._msdyn_ci_url;
    };
    /**
     * Sets the msdyn_ci_url property value. 
     * @param value Value to set for the msdyn_ci_url property.
     */
    public set msdyn_ci_url(value: string | undefined) {
        this._msdyn_ci_url = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_phone_call_activity property value. 
     * @returns a phonecall
     */
    public get msdyn_phone_call_activity() {
        return this._msdyn_phone_call_activity;
    };
    /**
     * Sets the msdyn_phone_call_activity property value. 
     * @param value Value to set for the msdyn_phone_call_activity property.
     */
    public set msdyn_phone_call_activity(value: Phonecall | undefined) {
        this._msdyn_phone_call_activity = value;
    };
    /**
     * Gets the msdyn_recording_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_recording_AsyncOperations() {
        return this._msdyn_recording_AsyncOperations;
    };
    /**
     * Sets the msdyn_recording_AsyncOperations property value. 
     * @param value Value to set for the msdyn_recording_AsyncOperations property.
     */
    public set msdyn_recording_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_recording_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_recording_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_recording_BulkDeleteFailures() {
        return this._msdyn_recording_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_recording_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_recording_BulkDeleteFailures property.
     */
    public set msdyn_recording_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_recording_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_recording_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_recording_DuplicateBaseRecord() {
        return this._msdyn_recording_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_recording_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_recording_DuplicateBaseRecord property.
     */
    public set msdyn_recording_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_recording_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_recording_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_recording_DuplicateMatchingRecord() {
        return this._msdyn_recording_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_recording_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_recording_DuplicateMatchingRecord property.
     */
    public set msdyn_recording_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_recording_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_recording_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_recording_MailboxTrackingFolders() {
        return this._msdyn_recording_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_recording_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_recording_MailboxTrackingFolders property.
     */
    public set msdyn_recording_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_recording_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_recording_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_recording_PrincipalObjectAttributeAccesses() {
        return this._msdyn_recording_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_recording_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_recording_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_recording_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_recording_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_recording_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_recording_ProcessSession() {
        return this._msdyn_recording_ProcessSession;
    };
    /**
     * Sets the msdyn_recording_ProcessSession property value. 
     * @param value Value to set for the msdyn_recording_ProcessSession property.
     */
    public set msdyn_recording_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_recording_ProcessSession = value;
    };
    /**
     * Gets the msdyn_recording_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_recording_SyncErrors() {
        return this._msdyn_recording_SyncErrors;
    };
    /**
     * Sets the msdyn_recording_SyncErrors property value. 
     * @param value Value to set for the msdyn_recording_SyncErrors property.
     */
    public set msdyn_recording_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_recording_SyncErrors = value;
    };
    /**
     * Gets the msdyn_recordingid property value. 
     * @returns a string
     */
    public get msdyn_recordingid() {
        return this._msdyn_recordingid;
    };
    /**
     * Sets the msdyn_recordingid property value. 
     * @param value Value to set for the msdyn_recordingid property.
     */
    public set msdyn_recordingid(value: string | undefined) {
        this._msdyn_recordingid = value;
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
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
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
        writer.writeStringValue("_msdyn_appointment_activity_value", this._msdyn_appointment_activity_value);
        writer.writeStringValue("_msdyn_phone_call_activity_value", this._msdyn_phone_call_activity_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Appointment>("msdyn_appointment_activity", this.msdyn_appointment_activity);
        writer.writeStringValue("msdyn_ci_comments", this.msdyn_ci_comments);
        writer.writeStringValue("msdyn_ci_id", this.msdyn_ci_id);
        writer.writeStringValue("msdyn_ci_insights_json", this.msdyn_ci_insights_json);
        writer.writeStringValue("msdyn_ci_keywords", this.msdyn_ci_keywords);
        writer.writeStringValue("msdyn_ci_tags", this.msdyn_ci_tags);
        writer.writeStringValue("msdyn_ci_transcript", this.msdyn_ci_transcript);
        writer.writeStringValue("msdyn_ci_transcript_json", this.msdyn_ci_transcript_json);
        writer.writeStringValue("msdyn_ci_translated_transcript", this.msdyn_ci_translated_transcript);
        writer.writeStringValue("msdyn_ci_translated_transcript_json", this.msdyn_ci_translated_transcript_json);
        writer.writeStringValue("msdyn_ci_url", this.msdyn_ci_url);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Phonecall>("msdyn_phone_call_activity", this.msdyn_phone_call_activity);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_recording_AsyncOperations", this.msdyn_recording_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_recording_BulkDeleteFailures", this.msdyn_recording_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_recording_DuplicateBaseRecord", this.msdyn_recording_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_recording_DuplicateMatchingRecord", this.msdyn_recording_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_recording_MailboxTrackingFolders", this.msdyn_recording_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_recording_PrincipalObjectAttributeAccesses", this.msdyn_recording_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_recording_ProcessSession", this.msdyn_recording_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_recording_SyncErrors", this.msdyn_recording_SyncErrors);
        writer.writeStringValue("msdyn_recordingid", this.msdyn_recordingid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
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
