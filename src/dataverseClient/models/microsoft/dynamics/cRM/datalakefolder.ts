import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDatalakefolderpermissionFromDiscriminatorValue} from './createDatalakefolderpermissionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSynapsedatabaseFromDiscriminatorValue} from './createSynapsedatabaseFromDiscriminatorValue';
import {createSynapselinkexternaltablestateFromDiscriminatorValue} from './createSynapselinkexternaltablestateFromDiscriminatorValue';
import {createSynapselinkprofileFromDiscriminatorValue} from './createSynapselinkprofileFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Datalakefolderpermission, Duplicaterecord, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Synapsedatabase, Synapselinkexternaltablestate, Synapselinkprofile, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Datalakefolder extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _cdmpath?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _containerendpoint?: string | undefined;
    private _contributorsecuritygroupid?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _datalakefolder_AsyncOperations?: Asyncoperation[] | undefined;
    private _datalakefolder_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _datalakefolder_datalakefolderpermission?: Datalakefolderpermission[] | undefined;
    private _datalakefolder_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _datalakefolder_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _datalakefolder_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _datalakefolder_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _datalakefolder_ProcessSession?: Processsession[] | undefined;
    private _datalakefolder_SyncErrors?: Syncerror[] | undefined;
    private _datalakefolder_uniquename?: string | undefined;
    private _datalakefolderid?: string | undefined;
    private _extendedproperties?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomercapacity?: boolean | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _isdeepcopyenabled?: boolean | undefined;
    private _isexternallake?: boolean | undefined;
    private _isexternallakereadonly?: boolean | undefined;
    private _ismanaged?: boolean | undefined;
    private _isprivate?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningappid?: string | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _path?: string | undefined;
    private _readersecuritygroupid?: string | undefined;
    private _resourcegroup?: string | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _subscription?: string | undefined;
    private _synapsedatabases?: Synapsedatabase[] | undefined;
    private _synapselinkexternaltablestates?: Synapselinkexternaltablestate[] | undefined;
    private _synapselinkprofiles?: Synapselinkprofile[] | undefined;
    private _synchronizeschematodataverse?: boolean | undefined;
    private _synchronizeschematosynapsedb?: boolean | undefined;
    private _tenant?: string | undefined;
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
     * Gets the cdmpath property value. 
     * @returns a string
     */
    public get cdmpath() {
        return this._cdmpath;
    };
    /**
     * Sets the cdmpath property value. 
     * @param value Value to set for the cdmpath property.
     */
    public set cdmpath(value: string | undefined) {
        this._cdmpath = value;
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
     * Instantiates a new datalakefolder and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the containerendpoint property value. 
     * @returns a string
     */
    public get containerendpoint() {
        return this._containerendpoint;
    };
    /**
     * Sets the containerendpoint property value. 
     * @param value Value to set for the containerendpoint property.
     */
    public set containerendpoint(value: string | undefined) {
        this._containerendpoint = value;
    };
    /**
     * Gets the contributorsecuritygroupid property value. 
     * @returns a string
     */
    public get contributorsecuritygroupid() {
        return this._contributorsecuritygroupid;
    };
    /**
     * Sets the contributorsecuritygroupid property value. 
     * @param value Value to set for the contributorsecuritygroupid property.
     */
    public set contributorsecuritygroupid(value: string | undefined) {
        this._contributorsecuritygroupid = value;
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
     * Gets the datalakefolder_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get datalakefolder_AsyncOperations() {
        return this._datalakefolder_AsyncOperations;
    };
    /**
     * Sets the datalakefolder_AsyncOperations property value. 
     * @param value Value to set for the datalakefolder_AsyncOperations property.
     */
    public set datalakefolder_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._datalakefolder_AsyncOperations = value;
    };
    /**
     * Gets the datalakefolder_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get datalakefolder_BulkDeleteFailures() {
        return this._datalakefolder_BulkDeleteFailures;
    };
    /**
     * Sets the datalakefolder_BulkDeleteFailures property value. 
     * @param value Value to set for the datalakefolder_BulkDeleteFailures property.
     */
    public set datalakefolder_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._datalakefolder_BulkDeleteFailures = value;
    };
    /**
     * Gets the datalakefolder_datalakefolderpermission property value. 
     * @returns a datalakefolderpermission
     */
    public get datalakefolder_datalakefolderpermission() {
        return this._datalakefolder_datalakefolderpermission;
    };
    /**
     * Sets the datalakefolder_datalakefolderpermission property value. 
     * @param value Value to set for the datalakefolder_datalakefolderpermission property.
     */
    public set datalakefolder_datalakefolderpermission(value: Datalakefolderpermission[] | undefined) {
        this._datalakefolder_datalakefolderpermission = value;
    };
    /**
     * Gets the datalakefolder_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get datalakefolder_DuplicateBaseRecord() {
        return this._datalakefolder_DuplicateBaseRecord;
    };
    /**
     * Sets the datalakefolder_DuplicateBaseRecord property value. 
     * @param value Value to set for the datalakefolder_DuplicateBaseRecord property.
     */
    public set datalakefolder_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._datalakefolder_DuplicateBaseRecord = value;
    };
    /**
     * Gets the datalakefolder_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get datalakefolder_DuplicateMatchingRecord() {
        return this._datalakefolder_DuplicateMatchingRecord;
    };
    /**
     * Sets the datalakefolder_DuplicateMatchingRecord property value. 
     * @param value Value to set for the datalakefolder_DuplicateMatchingRecord property.
     */
    public set datalakefolder_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._datalakefolder_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the datalakefolder_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get datalakefolder_MailboxTrackingFolders() {
        return this._datalakefolder_MailboxTrackingFolders;
    };
    /**
     * Sets the datalakefolder_MailboxTrackingFolders property value. 
     * @param value Value to set for the datalakefolder_MailboxTrackingFolders property.
     */
    public set datalakefolder_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._datalakefolder_MailboxTrackingFolders = value;
    };
    /**
     * Gets the datalakefolder_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get datalakefolder_PrincipalObjectAttributeAccesses() {
        return this._datalakefolder_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the datalakefolder_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the datalakefolder_PrincipalObjectAttributeAccesses property.
     */
    public set datalakefolder_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._datalakefolder_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the datalakefolder_ProcessSession property value. 
     * @returns a processsession
     */
    public get datalakefolder_ProcessSession() {
        return this._datalakefolder_ProcessSession;
    };
    /**
     * Sets the datalakefolder_ProcessSession property value. 
     * @param value Value to set for the datalakefolder_ProcessSession property.
     */
    public set datalakefolder_ProcessSession(value: Processsession[] | undefined) {
        this._datalakefolder_ProcessSession = value;
    };
    /**
     * Gets the datalakefolder_SyncErrors property value. 
     * @returns a syncerror
     */
    public get datalakefolder_SyncErrors() {
        return this._datalakefolder_SyncErrors;
    };
    /**
     * Sets the datalakefolder_SyncErrors property value. 
     * @param value Value to set for the datalakefolder_SyncErrors property.
     */
    public set datalakefolder_SyncErrors(value: Syncerror[] | undefined) {
        this._datalakefolder_SyncErrors = value;
    };
    /**
     * Gets the datalakefolder_uniquename property value. 
     * @returns a string
     */
    public get datalakefolder_uniquename() {
        return this._datalakefolder_uniquename;
    };
    /**
     * Sets the datalakefolder_uniquename property value. 
     * @param value Value to set for the datalakefolder_uniquename property.
     */
    public set datalakefolder_uniquename(value: string | undefined) {
        this._datalakefolder_uniquename = value;
    };
    /**
     * Gets the datalakefolderid property value. 
     * @returns a string
     */
    public get datalakefolderid() {
        return this._datalakefolderid;
    };
    /**
     * Sets the datalakefolderid property value. 
     * @param value Value to set for the datalakefolderid property.
     */
    public set datalakefolderid(value: string | undefined) {
        this._datalakefolderid = value;
    };
    /**
     * Gets the extendedproperties property value. 
     * @returns a string
     */
    public get extendedproperties() {
        return this._extendedproperties;
    };
    /**
     * Sets the extendedproperties property value. 
     * @param value Value to set for the extendedproperties property.
     */
    public set extendedproperties(value: string | undefined) {
        this._extendedproperties = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Datalakefolder)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Datalakefolder)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Datalakefolder)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Datalakefolder)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Datalakefolder)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Datalakefolder)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Datalakefolder)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Datalakefolder)._owninguser_value = n.getStringValue(); },
            "cdmpath": (o, n) => { (o as unknown as Datalakefolder).cdmpath = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Datalakefolder).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Datalakefolder).componentstate = n.getNumberValue(); },
            "containerendpoint": (o, n) => { (o as unknown as Datalakefolder).containerendpoint = n.getStringValue(); },
            "contributorsecuritygroupid": (o, n) => { (o as unknown as Datalakefolder).contributorsecuritygroupid = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Datalakefolder).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Datalakefolder).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Datalakefolder).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "datalakefolder_AsyncOperations": (o, n) => { (o as unknown as Datalakefolder).datalakefolder_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "datalakefolder_BulkDeleteFailures": (o, n) => { (o as unknown as Datalakefolder).datalakefolder_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "datalakefolder_datalakefolderpermission": (o, n) => { (o as unknown as Datalakefolder).datalakefolder_datalakefolderpermission = n.getCollectionOfObjectValues<Datalakefolderpermission>(createDatalakefolderpermissionFromDiscriminatorValue); },
            "datalakefolder_DuplicateBaseRecord": (o, n) => { (o as unknown as Datalakefolder).datalakefolder_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "datalakefolder_DuplicateMatchingRecord": (o, n) => { (o as unknown as Datalakefolder).datalakefolder_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "datalakefolder_MailboxTrackingFolders": (o, n) => { (o as unknown as Datalakefolder).datalakefolder_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "datalakefolder_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Datalakefolder).datalakefolder_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "datalakefolder_ProcessSession": (o, n) => { (o as unknown as Datalakefolder).datalakefolder_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "datalakefolder_SyncErrors": (o, n) => { (o as unknown as Datalakefolder).datalakefolder_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "datalakefolder_uniquename": (o, n) => { (o as unknown as Datalakefolder).datalakefolder_uniquename = n.getStringValue(); },
            "datalakefolderid": (o, n) => { (o as unknown as Datalakefolder).datalakefolderid = n.getStringValue(); },
            "extendedproperties": (o, n) => { (o as unknown as Datalakefolder).extendedproperties = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Datalakefolder).importsequencenumber = n.getNumberValue(); },
            "iscustomercapacity": (o, n) => { (o as unknown as Datalakefolder).iscustomercapacity = n.getBooleanValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Datalakefolder).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "isdeepcopyenabled": (o, n) => { (o as unknown as Datalakefolder).isdeepcopyenabled = n.getBooleanValue(); },
            "isexternallake": (o, n) => { (o as unknown as Datalakefolder).isexternallake = n.getBooleanValue(); },
            "isexternallakereadonly": (o, n) => { (o as unknown as Datalakefolder).isexternallakereadonly = n.getBooleanValue(); },
            "ismanaged": (o, n) => { (o as unknown as Datalakefolder).ismanaged = n.getBooleanValue(); },
            "isprivate": (o, n) => { (o as unknown as Datalakefolder).isprivate = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Datalakefolder).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Datalakefolder).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Datalakefolder).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Datalakefolder).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Datalakefolder).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Datalakefolder).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Datalakefolder).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningappid": (o, n) => { (o as unknown as Datalakefolder).owningappid = n.getStringValue(); },
            "owningbusinessunit": (o, n) => { (o as unknown as Datalakefolder).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Datalakefolder).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Datalakefolder).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "path": (o, n) => { (o as unknown as Datalakefolder).path = n.getStringValue(); },
            "readersecuritygroupid": (o, n) => { (o as unknown as Datalakefolder).readersecuritygroupid = n.getStringValue(); },
            "resourcegroup": (o, n) => { (o as unknown as Datalakefolder).resourcegroup = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Datalakefolder).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Datalakefolder).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Datalakefolder).statuscode = n.getNumberValue(); },
            "subscription": (o, n) => { (o as unknown as Datalakefolder).subscription = n.getStringValue(); },
            "synapsedatabases": (o, n) => { (o as unknown as Datalakefolder).synapsedatabases = n.getCollectionOfObjectValues<Synapsedatabase>(createSynapsedatabaseFromDiscriminatorValue); },
            "synapselinkexternaltablestates": (o, n) => { (o as unknown as Datalakefolder).synapselinkexternaltablestates = n.getCollectionOfObjectValues<Synapselinkexternaltablestate>(createSynapselinkexternaltablestateFromDiscriminatorValue); },
            "synapselinkprofiles": (o, n) => { (o as unknown as Datalakefolder).synapselinkprofiles = n.getCollectionOfObjectValues<Synapselinkprofile>(createSynapselinkprofileFromDiscriminatorValue); },
            "synchronizeschematodataverse": (o, n) => { (o as unknown as Datalakefolder).synchronizeschematodataverse = n.getBooleanValue(); },
            "synchronizeschematosynapsedb": (o, n) => { (o as unknown as Datalakefolder).synchronizeschematosynapsedb = n.getBooleanValue(); },
            "tenant": (o, n) => { (o as unknown as Datalakefolder).tenant = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Datalakefolder).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Datalakefolder).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Datalakefolder).versionnumber = n.getNumberValue(); },
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
     * Gets the iscustomercapacity property value. 
     * @returns a boolean
     */
    public get iscustomercapacity() {
        return this._iscustomercapacity;
    };
    /**
     * Sets the iscustomercapacity property value. 
     * @param value Value to set for the iscustomercapacity property.
     */
    public set iscustomercapacity(value: boolean | undefined) {
        this._iscustomercapacity = value;
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
     * Gets the isdeepcopyenabled property value. 
     * @returns a boolean
     */
    public get isdeepcopyenabled() {
        return this._isdeepcopyenabled;
    };
    /**
     * Sets the isdeepcopyenabled property value. 
     * @param value Value to set for the isdeepcopyenabled property.
     */
    public set isdeepcopyenabled(value: boolean | undefined) {
        this._isdeepcopyenabled = value;
    };
    /**
     * Gets the isexternallake property value. 
     * @returns a boolean
     */
    public get isexternallake() {
        return this._isexternallake;
    };
    /**
     * Sets the isexternallake property value. 
     * @param value Value to set for the isexternallake property.
     */
    public set isexternallake(value: boolean | undefined) {
        this._isexternallake = value;
    };
    /**
     * Gets the isexternallakereadonly property value. 
     * @returns a boolean
     */
    public get isexternallakereadonly() {
        return this._isexternallakereadonly;
    };
    /**
     * Sets the isexternallakereadonly property value. 
     * @param value Value to set for the isexternallakereadonly property.
     */
    public set isexternallakereadonly(value: boolean | undefined) {
        this._isexternallakereadonly = value;
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
     * Gets the isprivate property value. 
     * @returns a boolean
     */
    public get isprivate() {
        return this._isprivate;
    };
    /**
     * Sets the isprivate property value. 
     * @param value Value to set for the isprivate property.
     */
    public set isprivate(value: boolean | undefined) {
        this._isprivate = value;
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
     * Gets the owningappid property value. 
     * @returns a string
     */
    public get owningappid() {
        return this._owningappid;
    };
    /**
     * Sets the owningappid property value. 
     * @param value Value to set for the owningappid property.
     */
    public set owningappid(value: string | undefined) {
        this._owningappid = value;
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
     * Gets the path property value. 
     * @returns a string
     */
    public get path() {
        return this._path;
    };
    /**
     * Sets the path property value. 
     * @param value Value to set for the path property.
     */
    public set path(value: string | undefined) {
        this._path = value;
    };
    /**
     * Gets the readersecuritygroupid property value. 
     * @returns a string
     */
    public get readersecuritygroupid() {
        return this._readersecuritygroupid;
    };
    /**
     * Sets the readersecuritygroupid property value. 
     * @param value Value to set for the readersecuritygroupid property.
     */
    public set readersecuritygroupid(value: string | undefined) {
        this._readersecuritygroupid = value;
    };
    /**
     * Gets the resourcegroup property value. 
     * @returns a string
     */
    public get resourcegroup() {
        return this._resourcegroup;
    };
    /**
     * Sets the resourcegroup property value. 
     * @param value Value to set for the resourcegroup property.
     */
    public set resourcegroup(value: string | undefined) {
        this._resourcegroup = value;
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
        writer.writeStringValue("cdmpath", this.cdmpath);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("containerendpoint", this.containerendpoint);
        writer.writeStringValue("contributorsecuritygroupid", this.contributorsecuritygroupid);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeCollectionOfObjectValues<Asyncoperation>("datalakefolder_AsyncOperations", this.datalakefolder_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("datalakefolder_BulkDeleteFailures", this.datalakefolder_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Datalakefolderpermission>("datalakefolder_datalakefolderpermission", this.datalakefolder_datalakefolderpermission);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("datalakefolder_DuplicateBaseRecord", this.datalakefolder_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("datalakefolder_DuplicateMatchingRecord", this.datalakefolder_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("datalakefolder_MailboxTrackingFolders", this.datalakefolder_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("datalakefolder_PrincipalObjectAttributeAccesses", this.datalakefolder_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("datalakefolder_ProcessSession", this.datalakefolder_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("datalakefolder_SyncErrors", this.datalakefolder_SyncErrors);
        writer.writeStringValue("datalakefolder_uniquename", this.datalakefolder_uniquename);
        writer.writeStringValue("datalakefolderid", this.datalakefolderid);
        writer.writeStringValue("extendedproperties", this.extendedproperties);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeBooleanValue("iscustomercapacity", this.iscustomercapacity);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("isdeepcopyenabled", this.isdeepcopyenabled);
        writer.writeBooleanValue("isexternallake", this.isexternallake);
        writer.writeBooleanValue("isexternallakereadonly", this.isexternallakereadonly);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("isprivate", this.isprivate);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeStringValue("owningappid", this.owningappid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("path", this.path);
        writer.writeStringValue("readersecuritygroupid", this.readersecuritygroupid);
        writer.writeStringValue("resourcegroup", this.resourcegroup);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeStringValue("subscription", this.subscription);
        writer.writeCollectionOfObjectValues<Synapsedatabase>("synapsedatabases", this.synapsedatabases);
        writer.writeCollectionOfObjectValues<Synapselinkexternaltablestate>("synapselinkexternaltablestates", this.synapselinkexternaltablestates);
        writer.writeCollectionOfObjectValues<Synapselinkprofile>("synapselinkprofiles", this.synapselinkprofiles);
        writer.writeBooleanValue("synchronizeschematodataverse", this.synchronizeschematodataverse);
        writer.writeBooleanValue("synchronizeschematosynapsedb", this.synchronizeschematosynapsedb);
        writer.writeStringValue("tenant", this.tenant);
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
     * Gets the subscription property value. 
     * @returns a string
     */
    public get subscription() {
        return this._subscription;
    };
    /**
     * Sets the subscription property value. 
     * @param value Value to set for the subscription property.
     */
    public set subscription(value: string | undefined) {
        this._subscription = value;
    };
    /**
     * Gets the synapsedatabases property value. 
     * @returns a synapsedatabase
     */
    public get synapsedatabases() {
        return this._synapsedatabases;
    };
    /**
     * Sets the synapsedatabases property value. 
     * @param value Value to set for the synapsedatabases property.
     */
    public set synapsedatabases(value: Synapsedatabase[] | undefined) {
        this._synapsedatabases = value;
    };
    /**
     * Gets the synapselinkexternaltablestates property value. 
     * @returns a synapselinkexternaltablestate
     */
    public get synapselinkexternaltablestates() {
        return this._synapselinkexternaltablestates;
    };
    /**
     * Sets the synapselinkexternaltablestates property value. 
     * @param value Value to set for the synapselinkexternaltablestates property.
     */
    public set synapselinkexternaltablestates(value: Synapselinkexternaltablestate[] | undefined) {
        this._synapselinkexternaltablestates = value;
    };
    /**
     * Gets the synapselinkprofiles property value. 
     * @returns a synapselinkprofile
     */
    public get synapselinkprofiles() {
        return this._synapselinkprofiles;
    };
    /**
     * Sets the synapselinkprofiles property value. 
     * @param value Value to set for the synapselinkprofiles property.
     */
    public set synapselinkprofiles(value: Synapselinkprofile[] | undefined) {
        this._synapselinkprofiles = value;
    };
    /**
     * Gets the synchronizeschematodataverse property value. 
     * @returns a boolean
     */
    public get synchronizeschematodataverse() {
        return this._synchronizeschematodataverse;
    };
    /**
     * Sets the synchronizeschematodataverse property value. 
     * @param value Value to set for the synchronizeschematodataverse property.
     */
    public set synchronizeschematodataverse(value: boolean | undefined) {
        this._synchronizeschematodataverse = value;
    };
    /**
     * Gets the synchronizeschematosynapsedb property value. 
     * @returns a boolean
     */
    public get synchronizeschematosynapsedb() {
        return this._synchronizeschematosynapsedb;
    };
    /**
     * Sets the synchronizeschematosynapsedb property value. 
     * @param value Value to set for the synchronizeschematosynapsedb property.
     */
    public set synchronizeschematosynapsedb(value: boolean | undefined) {
        this._synchronizeschematosynapsedb = value;
    };
    /**
     * Gets the tenant property value. 
     * @returns a string
     */
    public get tenant() {
        return this._tenant;
    };
    /**
     * Sets the tenant property value. 
     * @param value Value to set for the tenant property.
     */
    public set tenant(value: string | undefined) {
        this._tenant = value;
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
