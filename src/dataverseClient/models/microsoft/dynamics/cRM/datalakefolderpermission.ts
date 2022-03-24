import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDatalakefolderFromDiscriminatorValue} from './createDatalakefolderFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Datalakefolder, Duplicaterecord, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Datalakefolderpermission extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __folderid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _appid?: string | undefined;
    private _canexecute?: boolean | undefined;
    private _canread?: boolean | undefined;
    private _canwrite?: boolean | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _datalakefolderpermission_AsyncOperations?: Asyncoperation[] | undefined;
    private _datalakefolderpermission_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _datalakefolderpermission_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _datalakefolderpermission_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _datalakefolderpermission_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _datalakefolderpermission_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _datalakefolderpermission_ProcessSession?: Processsession[] | undefined;
    private _datalakefolderpermission_SyncErrors?: Syncerror[] | undefined;
    private _datalakefolderpermission_uniquename?: string | undefined;
    private _datalakefolderpermissionid?: string | undefined;
    private _folderid?: Datalakefolder | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _solutionid?: string | undefined;
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
     * Gets the _folderid_value property value. 
     * @returns a string
     */
    public get _folderid_value() {
        return this.__folderid_value;
    };
    /**
     * Sets the _folderid_value property value. 
     * @param value Value to set for the _folderid_value property.
     */
    public set _folderid_value(value: string | undefined) {
        this.__folderid_value = value;
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
     * Gets the appid property value. 
     * @returns a string
     */
    public get appid() {
        return this._appid;
    };
    /**
     * Sets the appid property value. 
     * @param value Value to set for the appid property.
     */
    public set appid(value: string | undefined) {
        this._appid = value;
    };
    /**
     * Gets the canexecute property value. 
     * @returns a boolean
     */
    public get canexecute() {
        return this._canexecute;
    };
    /**
     * Sets the canexecute property value. 
     * @param value Value to set for the canexecute property.
     */
    public set canexecute(value: boolean | undefined) {
        this._canexecute = value;
    };
    /**
     * Gets the canread property value. 
     * @returns a boolean
     */
    public get canread() {
        return this._canread;
    };
    /**
     * Sets the canread property value. 
     * @param value Value to set for the canread property.
     */
    public set canread(value: boolean | undefined) {
        this._canread = value;
    };
    /**
     * Gets the canwrite property value. 
     * @returns a boolean
     */
    public get canwrite() {
        return this._canwrite;
    };
    /**
     * Sets the canwrite property value. 
     * @param value Value to set for the canwrite property.
     */
    public set canwrite(value: boolean | undefined) {
        this._canwrite = value;
    };
    /**
     * Gets the componentidunique property value. 
     * @returns a string
     */
    public get componentidunique() {
        return this._componentidunique;
    };
    /**
     * Sets the componentidunique property value. 
     * @param value Value to set for the componentidunique property.
     */
    public set componentidunique(value: string | undefined) {
        this._componentidunique = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new datalakefolderpermission and sets the default values.
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
     * Gets the datalakefolderpermission_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get datalakefolderpermission_AsyncOperations() {
        return this._datalakefolderpermission_AsyncOperations;
    };
    /**
     * Sets the datalakefolderpermission_AsyncOperations property value. 
     * @param value Value to set for the datalakefolderpermission_AsyncOperations property.
     */
    public set datalakefolderpermission_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._datalakefolderpermission_AsyncOperations = value;
    };
    /**
     * Gets the datalakefolderpermission_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get datalakefolderpermission_BulkDeleteFailures() {
        return this._datalakefolderpermission_BulkDeleteFailures;
    };
    /**
     * Sets the datalakefolderpermission_BulkDeleteFailures property value. 
     * @param value Value to set for the datalakefolderpermission_BulkDeleteFailures property.
     */
    public set datalakefolderpermission_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._datalakefolderpermission_BulkDeleteFailures = value;
    };
    /**
     * Gets the datalakefolderpermission_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get datalakefolderpermission_DuplicateBaseRecord() {
        return this._datalakefolderpermission_DuplicateBaseRecord;
    };
    /**
     * Sets the datalakefolderpermission_DuplicateBaseRecord property value. 
     * @param value Value to set for the datalakefolderpermission_DuplicateBaseRecord property.
     */
    public set datalakefolderpermission_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._datalakefolderpermission_DuplicateBaseRecord = value;
    };
    /**
     * Gets the datalakefolderpermission_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get datalakefolderpermission_DuplicateMatchingRecord() {
        return this._datalakefolderpermission_DuplicateMatchingRecord;
    };
    /**
     * Sets the datalakefolderpermission_DuplicateMatchingRecord property value. 
     * @param value Value to set for the datalakefolderpermission_DuplicateMatchingRecord property.
     */
    public set datalakefolderpermission_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._datalakefolderpermission_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the datalakefolderpermission_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get datalakefolderpermission_MailboxTrackingFolders() {
        return this._datalakefolderpermission_MailboxTrackingFolders;
    };
    /**
     * Sets the datalakefolderpermission_MailboxTrackingFolders property value. 
     * @param value Value to set for the datalakefolderpermission_MailboxTrackingFolders property.
     */
    public set datalakefolderpermission_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._datalakefolderpermission_MailboxTrackingFolders = value;
    };
    /**
     * Gets the datalakefolderpermission_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get datalakefolderpermission_PrincipalObjectAttributeAccesses() {
        return this._datalakefolderpermission_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the datalakefolderpermission_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the datalakefolderpermission_PrincipalObjectAttributeAccesses property.
     */
    public set datalakefolderpermission_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._datalakefolderpermission_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the datalakefolderpermission_ProcessSession property value. 
     * @returns a processsession
     */
    public get datalakefolderpermission_ProcessSession() {
        return this._datalakefolderpermission_ProcessSession;
    };
    /**
     * Sets the datalakefolderpermission_ProcessSession property value. 
     * @param value Value to set for the datalakefolderpermission_ProcessSession property.
     */
    public set datalakefolderpermission_ProcessSession(value: Processsession[] | undefined) {
        this._datalakefolderpermission_ProcessSession = value;
    };
    /**
     * Gets the datalakefolderpermission_SyncErrors property value. 
     * @returns a syncerror
     */
    public get datalakefolderpermission_SyncErrors() {
        return this._datalakefolderpermission_SyncErrors;
    };
    /**
     * Sets the datalakefolderpermission_SyncErrors property value. 
     * @param value Value to set for the datalakefolderpermission_SyncErrors property.
     */
    public set datalakefolderpermission_SyncErrors(value: Syncerror[] | undefined) {
        this._datalakefolderpermission_SyncErrors = value;
    };
    /**
     * Gets the datalakefolderpermission_uniquename property value. 
     * @returns a string
     */
    public get datalakefolderpermission_uniquename() {
        return this._datalakefolderpermission_uniquename;
    };
    /**
     * Sets the datalakefolderpermission_uniquename property value. 
     * @param value Value to set for the datalakefolderpermission_uniquename property.
     */
    public set datalakefolderpermission_uniquename(value: string | undefined) {
        this._datalakefolderpermission_uniquename = value;
    };
    /**
     * Gets the datalakefolderpermissionid property value. 
     * @returns a string
     */
    public get datalakefolderpermissionid() {
        return this._datalakefolderpermissionid;
    };
    /**
     * Sets the datalakefolderpermissionid property value. 
     * @param value Value to set for the datalakefolderpermissionid property.
     */
    public set datalakefolderpermissionid(value: string | undefined) {
        this._datalakefolderpermissionid = value;
    };
    /**
     * Gets the folderid property value. 
     * @returns a datalakefolder
     */
    public get folderid() {
        return this._folderid;
    };
    /**
     * Sets the folderid property value. 
     * @param value Value to set for the folderid property.
     */
    public set folderid(value: Datalakefolder | undefined) {
        this._folderid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Datalakefolderpermission)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Datalakefolderpermission)._createdonbehalfby_value = n.getStringValue(); },
            "_folderid_value": (o, n) => { (o as unknown as Datalakefolderpermission)._folderid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Datalakefolderpermission)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Datalakefolderpermission)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Datalakefolderpermission)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Datalakefolderpermission)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Datalakefolderpermission)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Datalakefolderpermission)._owninguser_value = n.getStringValue(); },
            "appid": (o, n) => { (o as unknown as Datalakefolderpermission).appid = n.getStringValue(); },
            "canexecute": (o, n) => { (o as unknown as Datalakefolderpermission).canexecute = n.getBooleanValue(); },
            "canread": (o, n) => { (o as unknown as Datalakefolderpermission).canread = n.getBooleanValue(); },
            "canwrite": (o, n) => { (o as unknown as Datalakefolderpermission).canwrite = n.getBooleanValue(); },
            "componentidunique": (o, n) => { (o as unknown as Datalakefolderpermission).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Datalakefolderpermission).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Datalakefolderpermission).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Datalakefolderpermission).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Datalakefolderpermission).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "datalakefolderpermission_AsyncOperations": (o, n) => { (o as unknown as Datalakefolderpermission).datalakefolderpermission_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "datalakefolderpermission_BulkDeleteFailures": (o, n) => { (o as unknown as Datalakefolderpermission).datalakefolderpermission_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "datalakefolderpermission_DuplicateBaseRecord": (o, n) => { (o as unknown as Datalakefolderpermission).datalakefolderpermission_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "datalakefolderpermission_DuplicateMatchingRecord": (o, n) => { (o as unknown as Datalakefolderpermission).datalakefolderpermission_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "datalakefolderpermission_MailboxTrackingFolders": (o, n) => { (o as unknown as Datalakefolderpermission).datalakefolderpermission_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "datalakefolderpermission_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Datalakefolderpermission).datalakefolderpermission_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "datalakefolderpermission_ProcessSession": (o, n) => { (o as unknown as Datalakefolderpermission).datalakefolderpermission_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "datalakefolderpermission_SyncErrors": (o, n) => { (o as unknown as Datalakefolderpermission).datalakefolderpermission_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "datalakefolderpermission_uniquename": (o, n) => { (o as unknown as Datalakefolderpermission).datalakefolderpermission_uniquename = n.getStringValue(); },
            "datalakefolderpermissionid": (o, n) => { (o as unknown as Datalakefolderpermission).datalakefolderpermissionid = n.getStringValue(); },
            "folderid": (o, n) => { (o as unknown as Datalakefolderpermission).folderid = n.getObjectValue<Datalakefolder>(createDatalakefolderFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Datalakefolderpermission).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Datalakefolderpermission).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Datalakefolderpermission).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Datalakefolderpermission).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Datalakefolderpermission).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Datalakefolderpermission).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Datalakefolderpermission).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Datalakefolderpermission).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Datalakefolderpermission).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Datalakefolderpermission).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Datalakefolderpermission).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Datalakefolderpermission).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Datalakefolderpermission).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Datalakefolderpermission).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Datalakefolderpermission).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Datalakefolderpermission).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Datalakefolderpermission).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Datalakefolderpermission).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Datalakefolderpermission).versionnumber = n.getNumberValue(); },
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
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
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
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
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
        writer.writeStringValue("_folderid_value", this._folderid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("appid", this.appid);
        writer.writeBooleanValue("canexecute", this.canexecute);
        writer.writeBooleanValue("canread", this.canread);
        writer.writeBooleanValue("canwrite", this.canwrite);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeCollectionOfObjectValues<Asyncoperation>("datalakefolderpermission_AsyncOperations", this.datalakefolderpermission_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("datalakefolderpermission_BulkDeleteFailures", this.datalakefolderpermission_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("datalakefolderpermission_DuplicateBaseRecord", this.datalakefolderpermission_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("datalakefolderpermission_DuplicateMatchingRecord", this.datalakefolderpermission_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("datalakefolderpermission_MailboxTrackingFolders", this.datalakefolderpermission_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("datalakefolderpermission_PrincipalObjectAttributeAccesses", this.datalakefolderpermission_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("datalakefolderpermission_ProcessSession", this.datalakefolderpermission_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("datalakefolderpermission_SyncErrors", this.datalakefolderpermission_SyncErrors);
        writer.writeStringValue("datalakefolderpermission_uniquename", this.datalakefolderpermission_uniquename);
        writer.writeStringValue("datalakefolderpermissionid", this.datalakefolderpermissionid);
        writer.writeObjectValue<Datalakefolder>("folderid", this.folderid);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
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
