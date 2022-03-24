import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Email, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Task, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Activitymonitor extends Crmbaseentity implements Parsable {
    private __conditionid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __monitoredactivityitemid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __ruleid_value?: string | undefined;
    private _activitymonitor_AsyncOperations?: Asyncoperation[] | undefined;
    private _activitymonitor_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _activitymonitor_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _activitymonitor_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _activitymonitor_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _activitymonitor_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _activitymonitor_ProcessSession?: Processsession[] | undefined;
    private _activitymonitor_SyncErrors?: Syncerror[] | undefined;
    private _activitymonitorid?: string | undefined;
    private _advancedsettings?: string | undefined;
    private _contactcreatedbyrule?: boolean | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _currentstate?: number | undefined;
    private _entitlementcheck?: boolean | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _monitoredactivityitemid_email?: Email | undefined;
    private _monitoredactivityitemid_task?: Task | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _reason?: number | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _conditionid_value property value. 
     * @returns a string
     */
    public get _conditionid_value() {
        return this.__conditionid_value;
    };
    /**
     * Sets the _conditionid_value property value. 
     * @param value Value to set for the _conditionid_value property.
     */
    public set _conditionid_value(value: string | undefined) {
        this.__conditionid_value = value;
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
     * Gets the _monitoredactivityitemid_value property value. 
     * @returns a string
     */
    public get _monitoredactivityitemid_value() {
        return this.__monitoredactivityitemid_value;
    };
    /**
     * Sets the _monitoredactivityitemid_value property value. 
     * @param value Value to set for the _monitoredactivityitemid_value property.
     */
    public set _monitoredactivityitemid_value(value: string | undefined) {
        this.__monitoredactivityitemid_value = value;
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
     * Gets the _ruleid_value property value. 
     * @returns a string
     */
    public get _ruleid_value() {
        return this.__ruleid_value;
    };
    /**
     * Sets the _ruleid_value property value. 
     * @param value Value to set for the _ruleid_value property.
     */
    public set _ruleid_value(value: string | undefined) {
        this.__ruleid_value = value;
    };
    /**
     * Gets the activitymonitor_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get activitymonitor_AsyncOperations() {
        return this._activitymonitor_AsyncOperations;
    };
    /**
     * Sets the activitymonitor_AsyncOperations property value. 
     * @param value Value to set for the activitymonitor_AsyncOperations property.
     */
    public set activitymonitor_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._activitymonitor_AsyncOperations = value;
    };
    /**
     * Gets the activitymonitor_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get activitymonitor_BulkDeleteFailures() {
        return this._activitymonitor_BulkDeleteFailures;
    };
    /**
     * Sets the activitymonitor_BulkDeleteFailures property value. 
     * @param value Value to set for the activitymonitor_BulkDeleteFailures property.
     */
    public set activitymonitor_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._activitymonitor_BulkDeleteFailures = value;
    };
    /**
     * Gets the activitymonitor_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get activitymonitor_DuplicateBaseRecord() {
        return this._activitymonitor_DuplicateBaseRecord;
    };
    /**
     * Sets the activitymonitor_DuplicateBaseRecord property value. 
     * @param value Value to set for the activitymonitor_DuplicateBaseRecord property.
     */
    public set activitymonitor_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._activitymonitor_DuplicateBaseRecord = value;
    };
    /**
     * Gets the activitymonitor_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get activitymonitor_DuplicateMatchingRecord() {
        return this._activitymonitor_DuplicateMatchingRecord;
    };
    /**
     * Sets the activitymonitor_DuplicateMatchingRecord property value. 
     * @param value Value to set for the activitymonitor_DuplicateMatchingRecord property.
     */
    public set activitymonitor_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._activitymonitor_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the activitymonitor_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get activitymonitor_MailboxTrackingFolders() {
        return this._activitymonitor_MailboxTrackingFolders;
    };
    /**
     * Sets the activitymonitor_MailboxTrackingFolders property value. 
     * @param value Value to set for the activitymonitor_MailboxTrackingFolders property.
     */
    public set activitymonitor_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._activitymonitor_MailboxTrackingFolders = value;
    };
    /**
     * Gets the activitymonitor_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get activitymonitor_PrincipalObjectAttributeAccesses() {
        return this._activitymonitor_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the activitymonitor_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the activitymonitor_PrincipalObjectAttributeAccesses property.
     */
    public set activitymonitor_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._activitymonitor_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the activitymonitor_ProcessSession property value. 
     * @returns a processsession
     */
    public get activitymonitor_ProcessSession() {
        return this._activitymonitor_ProcessSession;
    };
    /**
     * Sets the activitymonitor_ProcessSession property value. 
     * @param value Value to set for the activitymonitor_ProcessSession property.
     */
    public set activitymonitor_ProcessSession(value: Processsession[] | undefined) {
        this._activitymonitor_ProcessSession = value;
    };
    /**
     * Gets the activitymonitor_SyncErrors property value. 
     * @returns a syncerror
     */
    public get activitymonitor_SyncErrors() {
        return this._activitymonitor_SyncErrors;
    };
    /**
     * Sets the activitymonitor_SyncErrors property value. 
     * @param value Value to set for the activitymonitor_SyncErrors property.
     */
    public set activitymonitor_SyncErrors(value: Syncerror[] | undefined) {
        this._activitymonitor_SyncErrors = value;
    };
    /**
     * Gets the activitymonitorid property value. 
     * @returns a string
     */
    public get activitymonitorid() {
        return this._activitymonitorid;
    };
    /**
     * Sets the activitymonitorid property value. 
     * @param value Value to set for the activitymonitorid property.
     */
    public set activitymonitorid(value: string | undefined) {
        this._activitymonitorid = value;
    };
    /**
     * Gets the advancedsettings property value. 
     * @returns a string
     */
    public get advancedsettings() {
        return this._advancedsettings;
    };
    /**
     * Sets the advancedsettings property value. 
     * @param value Value to set for the advancedsettings property.
     */
    public set advancedsettings(value: string | undefined) {
        this._advancedsettings = value;
    };
    /**
     * Instantiates a new activitymonitor and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contactcreatedbyrule property value. 
     * @returns a boolean
     */
    public get contactcreatedbyrule() {
        return this._contactcreatedbyrule;
    };
    /**
     * Sets the contactcreatedbyrule property value. 
     * @param value Value to set for the contactcreatedbyrule property.
     */
    public set contactcreatedbyrule(value: boolean | undefined) {
        this._contactcreatedbyrule = value;
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
     * Gets the currentstate property value. 
     * @returns a integer
     */
    public get currentstate() {
        return this._currentstate;
    };
    /**
     * Sets the currentstate property value. 
     * @param value Value to set for the currentstate property.
     */
    public set currentstate(value: number | undefined) {
        this._currentstate = value;
    };
    /**
     * Gets the entitlementcheck property value. 
     * @returns a boolean
     */
    public get entitlementcheck() {
        return this._entitlementcheck;
    };
    /**
     * Sets the entitlementcheck property value. 
     * @param value Value to set for the entitlementcheck property.
     */
    public set entitlementcheck(value: boolean | undefined) {
        this._entitlementcheck = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_conditionid_value": (o, n) => { (o as unknown as Activitymonitor)._conditionid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Activitymonitor)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Activitymonitor)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Activitymonitor)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Activitymonitor)._modifiedonbehalfby_value = n.getStringValue(); },
            "_monitoredactivityitemid_value": (o, n) => { (o as unknown as Activitymonitor)._monitoredactivityitemid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Activitymonitor)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Activitymonitor)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Activitymonitor)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Activitymonitor)._owninguser_value = n.getStringValue(); },
            "_ruleid_value": (o, n) => { (o as unknown as Activitymonitor)._ruleid_value = n.getStringValue(); },
            "activitymonitor_AsyncOperations": (o, n) => { (o as unknown as Activitymonitor).activitymonitor_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "activitymonitor_BulkDeleteFailures": (o, n) => { (o as unknown as Activitymonitor).activitymonitor_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "activitymonitor_DuplicateBaseRecord": (o, n) => { (o as unknown as Activitymonitor).activitymonitor_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "activitymonitor_DuplicateMatchingRecord": (o, n) => { (o as unknown as Activitymonitor).activitymonitor_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "activitymonitor_MailboxTrackingFolders": (o, n) => { (o as unknown as Activitymonitor).activitymonitor_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "activitymonitor_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Activitymonitor).activitymonitor_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "activitymonitor_ProcessSession": (o, n) => { (o as unknown as Activitymonitor).activitymonitor_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "activitymonitor_SyncErrors": (o, n) => { (o as unknown as Activitymonitor).activitymonitor_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "activitymonitorid": (o, n) => { (o as unknown as Activitymonitor).activitymonitorid = n.getStringValue(); },
            "advancedsettings": (o, n) => { (o as unknown as Activitymonitor).advancedsettings = n.getStringValue(); },
            "contactcreatedbyrule": (o, n) => { (o as unknown as Activitymonitor).contactcreatedbyrule = n.getBooleanValue(); },
            "createdby": (o, n) => { (o as unknown as Activitymonitor).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Activitymonitor).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Activitymonitor).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "currentstate": (o, n) => { (o as unknown as Activitymonitor).currentstate = n.getNumberValue(); },
            "entitlementcheck": (o, n) => { (o as unknown as Activitymonitor).entitlementcheck = n.getBooleanValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Activitymonitor).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Activitymonitor).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Activitymonitor).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Activitymonitor).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "monitoredactivityitemid_email": (o, n) => { (o as unknown as Activitymonitor).monitoredactivityitemid_email = n.getObjectValue<Email>(createEmailFromDiscriminatorValue); },
            "monitoredactivityitemid_task": (o, n) => { (o as unknown as Activitymonitor).monitoredactivityitemid_task = n.getObjectValue<Task>(createTaskFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Activitymonitor).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Activitymonitor).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Activitymonitor).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Activitymonitor).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Activitymonitor).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Activitymonitor).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "reason": (o, n) => { (o as unknown as Activitymonitor).reason = n.getNumberValue(); },
            "statecode": (o, n) => { (o as unknown as Activitymonitor).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Activitymonitor).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Activitymonitor).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Activitymonitor).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Activitymonitor).versionnumber = n.getNumberValue(); },
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
     * Gets the monitoredactivityitemid_email property value. 
     * @returns a email
     */
    public get monitoredactivityitemid_email() {
        return this._monitoredactivityitemid_email;
    };
    /**
     * Sets the monitoredactivityitemid_email property value. 
     * @param value Value to set for the monitoredactivityitemid_email property.
     */
    public set monitoredactivityitemid_email(value: Email | undefined) {
        this._monitoredactivityitemid_email = value;
    };
    /**
     * Gets the monitoredactivityitemid_task property value. 
     * @returns a task
     */
    public get monitoredactivityitemid_task() {
        return this._monitoredactivityitemid_task;
    };
    /**
     * Sets the monitoredactivityitemid_task property value. 
     * @param value Value to set for the monitoredactivityitemid_task property.
     */
    public set monitoredactivityitemid_task(value: Task | undefined) {
        this._monitoredactivityitemid_task = value;
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
     * Gets the reason property value. 
     * @returns a integer
     */
    public get reason() {
        return this._reason;
    };
    /**
     * Sets the reason property value. 
     * @param value Value to set for the reason property.
     */
    public set reason(value: number | undefined) {
        this._reason = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_conditionid_value", this._conditionid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_monitoredactivityitemid_value", this._monitoredactivityitemid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_ruleid_value", this._ruleid_value);
        writer.writeCollectionOfObjectValues<Asyncoperation>("activitymonitor_AsyncOperations", this.activitymonitor_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("activitymonitor_BulkDeleteFailures", this.activitymonitor_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("activitymonitor_DuplicateBaseRecord", this.activitymonitor_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("activitymonitor_DuplicateMatchingRecord", this.activitymonitor_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("activitymonitor_MailboxTrackingFolders", this.activitymonitor_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("activitymonitor_PrincipalObjectAttributeAccesses", this.activitymonitor_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("activitymonitor_ProcessSession", this.activitymonitor_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("activitymonitor_SyncErrors", this.activitymonitor_SyncErrors);
        writer.writeStringValue("activitymonitorid", this.activitymonitorid);
        writer.writeStringValue("advancedsettings", this.advancedsettings);
        writer.writeBooleanValue("contactcreatedbyrule", this.contactcreatedbyrule);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("currentstate", this.currentstate);
        writer.writeBooleanValue("entitlementcheck", this.entitlementcheck);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Email>("monitoredactivityitemid_email", this.monitoredactivityitemid_email);
        writer.writeObjectValue<Task>("monitoredactivityitemid_task", this.monitoredactivityitemid_task);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("reason", this.reason);
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
