import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_autocapturesettings extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
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
    private _msdyn_autocapture?: boolean | undefined;
    private _msdyn_autocapturesettings_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_autocapturesettings_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_autocapturesettings_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_autocapturesettings_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_autocapturesettings_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_autocapturesettings_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_autocapturesettings_ProcessSession?: Processsession[] | undefined;
    private _msdyn_autocapturesettings_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_autocapturesettingsid?: string | undefined;
    private _msdyn_autocapturev1?: boolean | undefined;
    private _msdyn_automaticactivityupdate?: boolean | undefined;
    private _msdyn_calendar?: boolean | undefined;
    private _msdyn_contacts?: boolean | undefined;
    private _msdyn_defaultassociation?: string | undefined;
    private _msdyn_DontShowSettingStatus?: string | undefined;
    private _msdyn_emails?: boolean | undefined;
    private _msdyn_meetings?: boolean | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_organizationid?: string | undefined;
    private _msdyn_settingsuiaction?: string | undefined;
    private _msdyn_userid?: string | undefined;
    private _msdyn_v1termsandconditionscount?: string | undefined;
    private _msdyn_v2termsandconditionscount?: string | undefined;
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
     * Instantiates a new msdyn_autocapturesettings and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_autocapturesettings)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_autocapturesettings)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_autocapturesettings)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_autocapturesettings)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_autocapturesettings)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_autocapturesettings)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_autocapturesettings)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_autocapturesettings)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_autocapturesettings).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_autocapturesettings).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_autocapturesettings).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_autocapturesettings).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_autocapturesettings).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_autocapturesettings).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_autocapturesettings).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_autocapture": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_autocapture = n.getBooleanValue(); },
            "msdyn_autocapturesettings_AsyncOperations": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_autocapturesettings_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_autocapturesettings_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_autocapturesettings_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_autocapturesettings_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_autocapturesettings_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_autocapturesettings_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_autocapturesettings_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_autocapturesettings_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_autocapturesettings_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_autocapturesettings_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_autocapturesettings_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_autocapturesettings_ProcessSession": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_autocapturesettings_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_autocapturesettings_SyncErrors": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_autocapturesettings_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_autocapturesettingsid": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_autocapturesettingsid = n.getStringValue(); },
            "msdyn_autocapturev1": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_autocapturev1 = n.getBooleanValue(); },
            "msdyn_automaticactivityupdate": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_automaticactivityupdate = n.getBooleanValue(); },
            "msdyn_calendar": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_calendar = n.getBooleanValue(); },
            "msdyn_contacts": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_contacts = n.getBooleanValue(); },
            "msdyn_defaultassociation": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_defaultassociation = n.getStringValue(); },
            "msdyn_DontShowSettingStatus": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_DontShowSettingStatus = n.getStringValue(); },
            "msdyn_emails": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_emails = n.getBooleanValue(); },
            "msdyn_meetings": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_meetings = n.getBooleanValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_name = n.getStringValue(); },
            "msdyn_organizationid": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_organizationid = n.getStringValue(); },
            "msdyn_settingsuiaction": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_settingsuiaction = n.getStringValue(); },
            "msdyn_userid": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_userid = n.getStringValue(); },
            "msdyn_v1termsandconditionscount": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_v1termsandconditionscount = n.getStringValue(); },
            "msdyn_v2termsandconditionscount": (o, n) => { (o as unknown as Msdyn_autocapturesettings).msdyn_v2termsandconditionscount = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_autocapturesettings).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_autocapturesettings).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_autocapturesettings).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_autocapturesettings).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_autocapturesettings).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_autocapturesettings).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_autocapturesettings).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_autocapturesettings).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_autocapturesettings).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_autocapturesettings).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_autocapture property value. 
     * @returns a boolean
     */
    public get msdyn_autocapture() {
        return this._msdyn_autocapture;
    };
    /**
     * Sets the msdyn_autocapture property value. 
     * @param value Value to set for the msdyn_autocapture property.
     */
    public set msdyn_autocapture(value: boolean | undefined) {
        this._msdyn_autocapture = value;
    };
    /**
     * Gets the msdyn_autocapturesettings_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_autocapturesettings_AsyncOperations() {
        return this._msdyn_autocapturesettings_AsyncOperations;
    };
    /**
     * Sets the msdyn_autocapturesettings_AsyncOperations property value. 
     * @param value Value to set for the msdyn_autocapturesettings_AsyncOperations property.
     */
    public set msdyn_autocapturesettings_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_autocapturesettings_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_autocapturesettings_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_autocapturesettings_BulkDeleteFailures() {
        return this._msdyn_autocapturesettings_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_autocapturesettings_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_autocapturesettings_BulkDeleteFailures property.
     */
    public set msdyn_autocapturesettings_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_autocapturesettings_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_autocapturesettings_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_autocapturesettings_DuplicateBaseRecord() {
        return this._msdyn_autocapturesettings_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_autocapturesettings_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_autocapturesettings_DuplicateBaseRecord property.
     */
    public set msdyn_autocapturesettings_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_autocapturesettings_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_autocapturesettings_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_autocapturesettings_DuplicateMatchingRecord() {
        return this._msdyn_autocapturesettings_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_autocapturesettings_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_autocapturesettings_DuplicateMatchingRecord property.
     */
    public set msdyn_autocapturesettings_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_autocapturesettings_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_autocapturesettings_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_autocapturesettings_MailboxTrackingFolders() {
        return this._msdyn_autocapturesettings_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_autocapturesettings_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_autocapturesettings_MailboxTrackingFolders property.
     */
    public set msdyn_autocapturesettings_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_autocapturesettings_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_autocapturesettings_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_autocapturesettings_PrincipalObjectAttributeAccesses() {
        return this._msdyn_autocapturesettings_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_autocapturesettings_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_autocapturesettings_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_autocapturesettings_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_autocapturesettings_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_autocapturesettings_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_autocapturesettings_ProcessSession() {
        return this._msdyn_autocapturesettings_ProcessSession;
    };
    /**
     * Sets the msdyn_autocapturesettings_ProcessSession property value. 
     * @param value Value to set for the msdyn_autocapturesettings_ProcessSession property.
     */
    public set msdyn_autocapturesettings_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_autocapturesettings_ProcessSession = value;
    };
    /**
     * Gets the msdyn_autocapturesettings_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_autocapturesettings_SyncErrors() {
        return this._msdyn_autocapturesettings_SyncErrors;
    };
    /**
     * Sets the msdyn_autocapturesettings_SyncErrors property value. 
     * @param value Value to set for the msdyn_autocapturesettings_SyncErrors property.
     */
    public set msdyn_autocapturesettings_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_autocapturesettings_SyncErrors = value;
    };
    /**
     * Gets the msdyn_autocapturesettingsid property value. 
     * @returns a string
     */
    public get msdyn_autocapturesettingsid() {
        return this._msdyn_autocapturesettingsid;
    };
    /**
     * Sets the msdyn_autocapturesettingsid property value. 
     * @param value Value to set for the msdyn_autocapturesettingsid property.
     */
    public set msdyn_autocapturesettingsid(value: string | undefined) {
        this._msdyn_autocapturesettingsid = value;
    };
    /**
     * Gets the msdyn_autocapturev1 property value. 
     * @returns a boolean
     */
    public get msdyn_autocapturev1() {
        return this._msdyn_autocapturev1;
    };
    /**
     * Sets the msdyn_autocapturev1 property value. 
     * @param value Value to set for the msdyn_autocapturev1 property.
     */
    public set msdyn_autocapturev1(value: boolean | undefined) {
        this._msdyn_autocapturev1 = value;
    };
    /**
     * Gets the msdyn_automaticactivityupdate property value. 
     * @returns a boolean
     */
    public get msdyn_automaticactivityupdate() {
        return this._msdyn_automaticactivityupdate;
    };
    /**
     * Sets the msdyn_automaticactivityupdate property value. 
     * @param value Value to set for the msdyn_automaticactivityupdate property.
     */
    public set msdyn_automaticactivityupdate(value: boolean | undefined) {
        this._msdyn_automaticactivityupdate = value;
    };
    /**
     * Gets the msdyn_calendar property value. 
     * @returns a boolean
     */
    public get msdyn_calendar() {
        return this._msdyn_calendar;
    };
    /**
     * Sets the msdyn_calendar property value. 
     * @param value Value to set for the msdyn_calendar property.
     */
    public set msdyn_calendar(value: boolean | undefined) {
        this._msdyn_calendar = value;
    };
    /**
     * Gets the msdyn_contacts property value. 
     * @returns a boolean
     */
    public get msdyn_contacts() {
        return this._msdyn_contacts;
    };
    /**
     * Sets the msdyn_contacts property value. 
     * @param value Value to set for the msdyn_contacts property.
     */
    public set msdyn_contacts(value: boolean | undefined) {
        this._msdyn_contacts = value;
    };
    /**
     * Gets the msdyn_defaultassociation property value. 
     * @returns a string
     */
    public get msdyn_defaultassociation() {
        return this._msdyn_defaultassociation;
    };
    /**
     * Sets the msdyn_defaultassociation property value. 
     * @param value Value to set for the msdyn_defaultassociation property.
     */
    public set msdyn_defaultassociation(value: string | undefined) {
        this._msdyn_defaultassociation = value;
    };
    /**
     * Gets the msdyn_DontShowSettingStatus property value. 
     * @returns a string
     */
    public get msdyn_DontShowSettingStatus() {
        return this._msdyn_DontShowSettingStatus;
    };
    /**
     * Sets the msdyn_DontShowSettingStatus property value. 
     * @param value Value to set for the msdyn_DontShowSettingStatus property.
     */
    public set msdyn_DontShowSettingStatus(value: string | undefined) {
        this._msdyn_DontShowSettingStatus = value;
    };
    /**
     * Gets the msdyn_emails property value. 
     * @returns a boolean
     */
    public get msdyn_emails() {
        return this._msdyn_emails;
    };
    /**
     * Sets the msdyn_emails property value. 
     * @param value Value to set for the msdyn_emails property.
     */
    public set msdyn_emails(value: boolean | undefined) {
        this._msdyn_emails = value;
    };
    /**
     * Gets the msdyn_meetings property value. 
     * @returns a boolean
     */
    public get msdyn_meetings() {
        return this._msdyn_meetings;
    };
    /**
     * Sets the msdyn_meetings property value. 
     * @param value Value to set for the msdyn_meetings property.
     */
    public set msdyn_meetings(value: boolean | undefined) {
        this._msdyn_meetings = value;
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
     * Gets the msdyn_organizationid property value. 
     * @returns a string
     */
    public get msdyn_organizationid() {
        return this._msdyn_organizationid;
    };
    /**
     * Sets the msdyn_organizationid property value. 
     * @param value Value to set for the msdyn_organizationid property.
     */
    public set msdyn_organizationid(value: string | undefined) {
        this._msdyn_organizationid = value;
    };
    /**
     * Gets the msdyn_settingsuiaction property value. 
     * @returns a string
     */
    public get msdyn_settingsuiaction() {
        return this._msdyn_settingsuiaction;
    };
    /**
     * Sets the msdyn_settingsuiaction property value. 
     * @param value Value to set for the msdyn_settingsuiaction property.
     */
    public set msdyn_settingsuiaction(value: string | undefined) {
        this._msdyn_settingsuiaction = value;
    };
    /**
     * Gets the msdyn_userid property value. 
     * @returns a string
     */
    public get msdyn_userid() {
        return this._msdyn_userid;
    };
    /**
     * Sets the msdyn_userid property value. 
     * @param value Value to set for the msdyn_userid property.
     */
    public set msdyn_userid(value: string | undefined) {
        this._msdyn_userid = value;
    };
    /**
     * Gets the msdyn_v1termsandconditionscount property value. 
     * @returns a string
     */
    public get msdyn_v1termsandconditionscount() {
        return this._msdyn_v1termsandconditionscount;
    };
    /**
     * Sets the msdyn_v1termsandconditionscount property value. 
     * @param value Value to set for the msdyn_v1termsandconditionscount property.
     */
    public set msdyn_v1termsandconditionscount(value: string | undefined) {
        this._msdyn_v1termsandconditionscount = value;
    };
    /**
     * Gets the msdyn_v2termsandconditionscount property value. 
     * @returns a string
     */
    public get msdyn_v2termsandconditionscount() {
        return this._msdyn_v2termsandconditionscount;
    };
    /**
     * Sets the msdyn_v2termsandconditionscount property value. 
     * @param value Value to set for the msdyn_v2termsandconditionscount property.
     */
    public set msdyn_v2termsandconditionscount(value: string | undefined) {
        this._msdyn_v2termsandconditionscount = value;
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
        writer.writeBooleanValue("msdyn_autocapture", this.msdyn_autocapture);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_autocapturesettings_AsyncOperations", this.msdyn_autocapturesettings_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_autocapturesettings_BulkDeleteFailures", this.msdyn_autocapturesettings_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_autocapturesettings_DuplicateBaseRecord", this.msdyn_autocapturesettings_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_autocapturesettings_DuplicateMatchingRecord", this.msdyn_autocapturesettings_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_autocapturesettings_MailboxTrackingFolders", this.msdyn_autocapturesettings_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_autocapturesettings_PrincipalObjectAttributeAccesses", this.msdyn_autocapturesettings_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_autocapturesettings_ProcessSession", this.msdyn_autocapturesettings_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_autocapturesettings_SyncErrors", this.msdyn_autocapturesettings_SyncErrors);
        writer.writeStringValue("msdyn_autocapturesettingsid", this.msdyn_autocapturesettingsid);
        writer.writeBooleanValue("msdyn_autocapturev1", this.msdyn_autocapturev1);
        writer.writeBooleanValue("msdyn_automaticactivityupdate", this.msdyn_automaticactivityupdate);
        writer.writeBooleanValue("msdyn_calendar", this.msdyn_calendar);
        writer.writeBooleanValue("msdyn_contacts", this.msdyn_contacts);
        writer.writeStringValue("msdyn_defaultassociation", this.msdyn_defaultassociation);
        writer.writeStringValue("msdyn_DontShowSettingStatus", this.msdyn_DontShowSettingStatus);
        writer.writeBooleanValue("msdyn_emails", this.msdyn_emails);
        writer.writeBooleanValue("msdyn_meetings", this.msdyn_meetings);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_organizationid", this.msdyn_organizationid);
        writer.writeStringValue("msdyn_settingsuiaction", this.msdyn_settingsuiaction);
        writer.writeStringValue("msdyn_userid", this.msdyn_userid);
        writer.writeStringValue("msdyn_v1termsandconditionscount", this.msdyn_v1termsandconditionscount);
        writer.writeStringValue("msdyn_v2termsandconditionscount", this.msdyn_v2termsandconditionscount);
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
