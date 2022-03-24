import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsfp_emailtemplateFromDiscriminatorValue} from './createMsfp_emailtemplateFromDiscriminatorValue';
import {createMsfp_surveyFromDiscriminatorValue} from './createMsfp_surveyFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msfp_emailtemplate, Msfp_survey, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msfp_surveyreminder extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msfp_emailtemplate_value?: string | undefined;
    private __msfp_survey_value?: string | undefined;
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
    private _msfp_description?: string | undefined;
    private _msfp_emailtemplate?: Msfp_emailtemplate | undefined;
    private _msfp_name?: string | undefined;
    private _msfp_properties?: string | undefined;
    private _msfp_scheduleddate?: Date | undefined;
    private _msfp_status?: number | undefined;
    private _msfp_survey?: Msfp_survey | undefined;
    private _msfp_surveyreminder_AsyncOperations?: Asyncoperation[] | undefined;
    private _msfp_surveyreminder_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msfp_surveyreminder_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msfp_surveyreminder_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msfp_surveyreminder_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msfp_surveyreminder_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msfp_surveyreminder_ProcessSession?: Processsession[] | undefined;
    private _msfp_surveyreminder_SyncErrors?: Syncerror[] | undefined;
    private _msfp_surveyreminderid?: string | undefined;
    private _msfp_type?: string | undefined;
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
     * Gets the _msfp_emailtemplate_value property value. 
     * @returns a string
     */
    public get _msfp_emailtemplate_value() {
        return this.__msfp_emailtemplate_value;
    };
    /**
     * Sets the _msfp_emailtemplate_value property value. 
     * @param value Value to set for the _msfp_emailtemplate_value property.
     */
    public set _msfp_emailtemplate_value(value: string | undefined) {
        this.__msfp_emailtemplate_value = value;
    };
    /**
     * Gets the _msfp_survey_value property value. 
     * @returns a string
     */
    public get _msfp_survey_value() {
        return this.__msfp_survey_value;
    };
    /**
     * Sets the _msfp_survey_value property value. 
     * @param value Value to set for the _msfp_survey_value property.
     */
    public set _msfp_survey_value(value: string | undefined) {
        this.__msfp_survey_value = value;
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
     * Instantiates a new msfp_surveyreminder and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msfp_surveyreminder)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msfp_surveyreminder)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msfp_surveyreminder)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msfp_surveyreminder)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msfp_emailtemplate_value": (o, n) => { (o as unknown as Msfp_surveyreminder)._msfp_emailtemplate_value = n.getStringValue(); },
            "_msfp_survey_value": (o, n) => { (o as unknown as Msfp_surveyreminder)._msfp_survey_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msfp_surveyreminder)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msfp_surveyreminder)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msfp_surveyreminder)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msfp_surveyreminder)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msfp_surveyreminder).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msfp_surveyreminder).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msfp_surveyreminder).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msfp_surveyreminder).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msfp_surveyreminder).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msfp_surveyreminder).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msfp_surveyreminder).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msfp_description": (o, n) => { (o as unknown as Msfp_surveyreminder).msfp_description = n.getStringValue(); },
            "msfp_emailtemplate": (o, n) => { (o as unknown as Msfp_surveyreminder).msfp_emailtemplate = n.getObjectValue<Msfp_emailtemplate>(createMsfp_emailtemplateFromDiscriminatorValue); },
            "msfp_name": (o, n) => { (o as unknown as Msfp_surveyreminder).msfp_name = n.getStringValue(); },
            "msfp_properties": (o, n) => { (o as unknown as Msfp_surveyreminder).msfp_properties = n.getStringValue(); },
            "msfp_scheduleddate": (o, n) => { (o as unknown as Msfp_surveyreminder).msfp_scheduleddate = n.getDateValue(); },
            "msfp_status": (o, n) => { (o as unknown as Msfp_surveyreminder).msfp_status = n.getNumberValue(); },
            "msfp_survey": (o, n) => { (o as unknown as Msfp_surveyreminder).msfp_survey = n.getObjectValue<Msfp_survey>(createMsfp_surveyFromDiscriminatorValue); },
            "msfp_surveyreminder_AsyncOperations": (o, n) => { (o as unknown as Msfp_surveyreminder).msfp_surveyreminder_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msfp_surveyreminder_BulkDeleteFailures": (o, n) => { (o as unknown as Msfp_surveyreminder).msfp_surveyreminder_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msfp_surveyreminder_DuplicateBaseRecord": (o, n) => { (o as unknown as Msfp_surveyreminder).msfp_surveyreminder_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msfp_surveyreminder_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msfp_surveyreminder).msfp_surveyreminder_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msfp_surveyreminder_MailboxTrackingFolders": (o, n) => { (o as unknown as Msfp_surveyreminder).msfp_surveyreminder_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msfp_surveyreminder_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msfp_surveyreminder).msfp_surveyreminder_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msfp_surveyreminder_ProcessSession": (o, n) => { (o as unknown as Msfp_surveyreminder).msfp_surveyreminder_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msfp_surveyreminder_SyncErrors": (o, n) => { (o as unknown as Msfp_surveyreminder).msfp_surveyreminder_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msfp_surveyreminderid": (o, n) => { (o as unknown as Msfp_surveyreminder).msfp_surveyreminderid = n.getStringValue(); },
            "msfp_type": (o, n) => { (o as unknown as Msfp_surveyreminder).msfp_type = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msfp_surveyreminder).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msfp_surveyreminder).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msfp_surveyreminder).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msfp_surveyreminder).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msfp_surveyreminder).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msfp_surveyreminder).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msfp_surveyreminder).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msfp_surveyreminder).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msfp_surveyreminder).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msfp_surveyreminder).versionnumber = n.getNumberValue(); },
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
     * Gets the msfp_description property value. 
     * @returns a string
     */
    public get msfp_description() {
        return this._msfp_description;
    };
    /**
     * Sets the msfp_description property value. 
     * @param value Value to set for the msfp_description property.
     */
    public set msfp_description(value: string | undefined) {
        this._msfp_description = value;
    };
    /**
     * Gets the msfp_emailtemplate property value. 
     * @returns a msfp_emailtemplate
     */
    public get msfp_emailtemplate() {
        return this._msfp_emailtemplate;
    };
    /**
     * Sets the msfp_emailtemplate property value. 
     * @param value Value to set for the msfp_emailtemplate property.
     */
    public set msfp_emailtemplate(value: Msfp_emailtemplate | undefined) {
        this._msfp_emailtemplate = value;
    };
    /**
     * Gets the msfp_name property value. 
     * @returns a string
     */
    public get msfp_name() {
        return this._msfp_name;
    };
    /**
     * Sets the msfp_name property value. 
     * @param value Value to set for the msfp_name property.
     */
    public set msfp_name(value: string | undefined) {
        this._msfp_name = value;
    };
    /**
     * Gets the msfp_properties property value. 
     * @returns a string
     */
    public get msfp_properties() {
        return this._msfp_properties;
    };
    /**
     * Sets the msfp_properties property value. 
     * @param value Value to set for the msfp_properties property.
     */
    public set msfp_properties(value: string | undefined) {
        this._msfp_properties = value;
    };
    /**
     * Gets the msfp_scheduleddate property value. 
     * @returns a Date
     */
    public get msfp_scheduleddate() {
        return this._msfp_scheduleddate;
    };
    /**
     * Sets the msfp_scheduleddate property value. 
     * @param value Value to set for the msfp_scheduleddate property.
     */
    public set msfp_scheduleddate(value: Date | undefined) {
        this._msfp_scheduleddate = value;
    };
    /**
     * Gets the msfp_status property value. 
     * @returns a integer
     */
    public get msfp_status() {
        return this._msfp_status;
    };
    /**
     * Sets the msfp_status property value. 
     * @param value Value to set for the msfp_status property.
     */
    public set msfp_status(value: number | undefined) {
        this._msfp_status = value;
    };
    /**
     * Gets the msfp_survey property value. 
     * @returns a msfp_survey
     */
    public get msfp_survey() {
        return this._msfp_survey;
    };
    /**
     * Sets the msfp_survey property value. 
     * @param value Value to set for the msfp_survey property.
     */
    public set msfp_survey(value: Msfp_survey | undefined) {
        this._msfp_survey = value;
    };
    /**
     * Gets the msfp_surveyreminder_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msfp_surveyreminder_AsyncOperations() {
        return this._msfp_surveyreminder_AsyncOperations;
    };
    /**
     * Sets the msfp_surveyreminder_AsyncOperations property value. 
     * @param value Value to set for the msfp_surveyreminder_AsyncOperations property.
     */
    public set msfp_surveyreminder_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msfp_surveyreminder_AsyncOperations = value;
    };
    /**
     * Gets the msfp_surveyreminder_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msfp_surveyreminder_BulkDeleteFailures() {
        return this._msfp_surveyreminder_BulkDeleteFailures;
    };
    /**
     * Sets the msfp_surveyreminder_BulkDeleteFailures property value. 
     * @param value Value to set for the msfp_surveyreminder_BulkDeleteFailures property.
     */
    public set msfp_surveyreminder_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msfp_surveyreminder_BulkDeleteFailures = value;
    };
    /**
     * Gets the msfp_surveyreminder_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msfp_surveyreminder_DuplicateBaseRecord() {
        return this._msfp_surveyreminder_DuplicateBaseRecord;
    };
    /**
     * Sets the msfp_surveyreminder_DuplicateBaseRecord property value. 
     * @param value Value to set for the msfp_surveyreminder_DuplicateBaseRecord property.
     */
    public set msfp_surveyreminder_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msfp_surveyreminder_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msfp_surveyreminder_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msfp_surveyreminder_DuplicateMatchingRecord() {
        return this._msfp_surveyreminder_DuplicateMatchingRecord;
    };
    /**
     * Sets the msfp_surveyreminder_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msfp_surveyreminder_DuplicateMatchingRecord property.
     */
    public set msfp_surveyreminder_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msfp_surveyreminder_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msfp_surveyreminder_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msfp_surveyreminder_MailboxTrackingFolders() {
        return this._msfp_surveyreminder_MailboxTrackingFolders;
    };
    /**
     * Sets the msfp_surveyreminder_MailboxTrackingFolders property value. 
     * @param value Value to set for the msfp_surveyreminder_MailboxTrackingFolders property.
     */
    public set msfp_surveyreminder_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msfp_surveyreminder_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msfp_surveyreminder_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msfp_surveyreminder_PrincipalObjectAttributeAccesses() {
        return this._msfp_surveyreminder_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msfp_surveyreminder_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msfp_surveyreminder_PrincipalObjectAttributeAccesses property.
     */
    public set msfp_surveyreminder_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msfp_surveyreminder_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msfp_surveyreminder_ProcessSession property value. 
     * @returns a processsession
     */
    public get msfp_surveyreminder_ProcessSession() {
        return this._msfp_surveyreminder_ProcessSession;
    };
    /**
     * Sets the msfp_surveyreminder_ProcessSession property value. 
     * @param value Value to set for the msfp_surveyreminder_ProcessSession property.
     */
    public set msfp_surveyreminder_ProcessSession(value: Processsession[] | undefined) {
        this._msfp_surveyreminder_ProcessSession = value;
    };
    /**
     * Gets the msfp_surveyreminder_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msfp_surveyreminder_SyncErrors() {
        return this._msfp_surveyreminder_SyncErrors;
    };
    /**
     * Sets the msfp_surveyreminder_SyncErrors property value. 
     * @param value Value to set for the msfp_surveyreminder_SyncErrors property.
     */
    public set msfp_surveyreminder_SyncErrors(value: Syncerror[] | undefined) {
        this._msfp_surveyreminder_SyncErrors = value;
    };
    /**
     * Gets the msfp_surveyreminderid property value. 
     * @returns a string
     */
    public get msfp_surveyreminderid() {
        return this._msfp_surveyreminderid;
    };
    /**
     * Sets the msfp_surveyreminderid property value. 
     * @param value Value to set for the msfp_surveyreminderid property.
     */
    public set msfp_surveyreminderid(value: string | undefined) {
        this._msfp_surveyreminderid = value;
    };
    /**
     * Gets the msfp_type property value. 
     * @returns a string
     */
    public get msfp_type() {
        return this._msfp_type;
    };
    /**
     * Sets the msfp_type property value. 
     * @param value Value to set for the msfp_type property.
     */
    public set msfp_type(value: string | undefined) {
        this._msfp_type = value;
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
        writer.writeStringValue("_msfp_emailtemplate_value", this._msfp_emailtemplate_value);
        writer.writeStringValue("_msfp_survey_value", this._msfp_survey_value);
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
        writer.writeStringValue("msfp_description", this.msfp_description);
        writer.writeObjectValue<Msfp_emailtemplate>("msfp_emailtemplate", this.msfp_emailtemplate);
        writer.writeStringValue("msfp_name", this.msfp_name);
        writer.writeStringValue("msfp_properties", this.msfp_properties);
        writer.writeDateValue("msfp_scheduleddate", this.msfp_scheduleddate);
        writer.writeNumberValue("msfp_status", this.msfp_status);
        writer.writeObjectValue<Msfp_survey>("msfp_survey", this.msfp_survey);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msfp_surveyreminder_AsyncOperations", this.msfp_surveyreminder_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msfp_surveyreminder_BulkDeleteFailures", this.msfp_surveyreminder_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msfp_surveyreminder_DuplicateBaseRecord", this.msfp_surveyreminder_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msfp_surveyreminder_DuplicateMatchingRecord", this.msfp_surveyreminder_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msfp_surveyreminder_MailboxTrackingFolders", this.msfp_surveyreminder_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msfp_surveyreminder_PrincipalObjectAttributeAccesses", this.msfp_surveyreminder_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msfp_surveyreminder_ProcessSession", this.msfp_surveyreminder_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msfp_surveyreminder_SyncErrors", this.msfp_surveyreminder_SyncErrors);
        writer.writeStringValue("msfp_surveyreminderid", this.msfp_surveyreminderid);
        writer.writeStringValue("msfp_type", this.msfp_type);
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
