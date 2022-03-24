import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDatalakeworkspaceFromDiscriminatorValue} from './createDatalakeworkspaceFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Datalakeworkspace, Duplicaterecord, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Datalakeworkspacepermission extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __workspaceid_value?: string | undefined;
    private _appid?: string | undefined;
    private _canexecute?: boolean | undefined;
    private _canread?: boolean | undefined;
    private _canwrite?: boolean | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _datalakeworkspacepermission_AsyncOperations?: Asyncoperation[] | undefined;
    private _datalakeworkspacepermission_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _datalakeworkspacepermission_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _datalakeworkspacepermission_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _datalakeworkspacepermission_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _datalakeworkspacepermission_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _datalakeworkspacepermission_ProcessSession?: Processsession[] | undefined;
    private _datalakeworkspacepermission_SyncErrors?: Syncerror[] | undefined;
    private _datalakeworkspacepermission_uniquename?: string | undefined;
    private _datalakeworkspacepermissionid?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _tenantid?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    private _whitelistedappid?: string | undefined;
    private _workspaceid?: Datalakeworkspace | undefined;
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
     * Gets the _workspaceid_value property value. 
     * @returns a string
     */
    public get _workspaceid_value() {
        return this.__workspaceid_value;
    };
    /**
     * Sets the _workspaceid_value property value. 
     * @param value Value to set for the _workspaceid_value property.
     */
    public set _workspaceid_value(value: string | undefined) {
        this.__workspaceid_value = value;
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
     * Instantiates a new datalakeworkspacepermission and sets the default values.
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
     * Gets the datalakeworkspacepermission_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get datalakeworkspacepermission_AsyncOperations() {
        return this._datalakeworkspacepermission_AsyncOperations;
    };
    /**
     * Sets the datalakeworkspacepermission_AsyncOperations property value. 
     * @param value Value to set for the datalakeworkspacepermission_AsyncOperations property.
     */
    public set datalakeworkspacepermission_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._datalakeworkspacepermission_AsyncOperations = value;
    };
    /**
     * Gets the datalakeworkspacepermission_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get datalakeworkspacepermission_BulkDeleteFailures() {
        return this._datalakeworkspacepermission_BulkDeleteFailures;
    };
    /**
     * Sets the datalakeworkspacepermission_BulkDeleteFailures property value. 
     * @param value Value to set for the datalakeworkspacepermission_BulkDeleteFailures property.
     */
    public set datalakeworkspacepermission_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._datalakeworkspacepermission_BulkDeleteFailures = value;
    };
    /**
     * Gets the datalakeworkspacepermission_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get datalakeworkspacepermission_DuplicateBaseRecord() {
        return this._datalakeworkspacepermission_DuplicateBaseRecord;
    };
    /**
     * Sets the datalakeworkspacepermission_DuplicateBaseRecord property value. 
     * @param value Value to set for the datalakeworkspacepermission_DuplicateBaseRecord property.
     */
    public set datalakeworkspacepermission_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._datalakeworkspacepermission_DuplicateBaseRecord = value;
    };
    /**
     * Gets the datalakeworkspacepermission_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get datalakeworkspacepermission_DuplicateMatchingRecord() {
        return this._datalakeworkspacepermission_DuplicateMatchingRecord;
    };
    /**
     * Sets the datalakeworkspacepermission_DuplicateMatchingRecord property value. 
     * @param value Value to set for the datalakeworkspacepermission_DuplicateMatchingRecord property.
     */
    public set datalakeworkspacepermission_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._datalakeworkspacepermission_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the datalakeworkspacepermission_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get datalakeworkspacepermission_MailboxTrackingFolders() {
        return this._datalakeworkspacepermission_MailboxTrackingFolders;
    };
    /**
     * Sets the datalakeworkspacepermission_MailboxTrackingFolders property value. 
     * @param value Value to set for the datalakeworkspacepermission_MailboxTrackingFolders property.
     */
    public set datalakeworkspacepermission_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._datalakeworkspacepermission_MailboxTrackingFolders = value;
    };
    /**
     * Gets the datalakeworkspacepermission_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get datalakeworkspacepermission_PrincipalObjectAttributeAccesses() {
        return this._datalakeworkspacepermission_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the datalakeworkspacepermission_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the datalakeworkspacepermission_PrincipalObjectAttributeAccesses property.
     */
    public set datalakeworkspacepermission_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._datalakeworkspacepermission_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the datalakeworkspacepermission_ProcessSession property value. 
     * @returns a processsession
     */
    public get datalakeworkspacepermission_ProcessSession() {
        return this._datalakeworkspacepermission_ProcessSession;
    };
    /**
     * Sets the datalakeworkspacepermission_ProcessSession property value. 
     * @param value Value to set for the datalakeworkspacepermission_ProcessSession property.
     */
    public set datalakeworkspacepermission_ProcessSession(value: Processsession[] | undefined) {
        this._datalakeworkspacepermission_ProcessSession = value;
    };
    /**
     * Gets the datalakeworkspacepermission_SyncErrors property value. 
     * @returns a syncerror
     */
    public get datalakeworkspacepermission_SyncErrors() {
        return this._datalakeworkspacepermission_SyncErrors;
    };
    /**
     * Sets the datalakeworkspacepermission_SyncErrors property value. 
     * @param value Value to set for the datalakeworkspacepermission_SyncErrors property.
     */
    public set datalakeworkspacepermission_SyncErrors(value: Syncerror[] | undefined) {
        this._datalakeworkspacepermission_SyncErrors = value;
    };
    /**
     * Gets the datalakeworkspacepermission_uniquename property value. 
     * @returns a string
     */
    public get datalakeworkspacepermission_uniquename() {
        return this._datalakeworkspacepermission_uniquename;
    };
    /**
     * Sets the datalakeworkspacepermission_uniquename property value. 
     * @param value Value to set for the datalakeworkspacepermission_uniquename property.
     */
    public set datalakeworkspacepermission_uniquename(value: string | undefined) {
        this._datalakeworkspacepermission_uniquename = value;
    };
    /**
     * Gets the datalakeworkspacepermissionid property value. 
     * @returns a string
     */
    public get datalakeworkspacepermissionid() {
        return this._datalakeworkspacepermissionid;
    };
    /**
     * Sets the datalakeworkspacepermissionid property value. 
     * @param value Value to set for the datalakeworkspacepermissionid property.
     */
    public set datalakeworkspacepermissionid(value: string | undefined) {
        this._datalakeworkspacepermissionid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Datalakeworkspacepermission)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Datalakeworkspacepermission)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Datalakeworkspacepermission)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Datalakeworkspacepermission)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Datalakeworkspacepermission)._organizationid_value = n.getStringValue(); },
            "_workspaceid_value": (o, n) => { (o as unknown as Datalakeworkspacepermission)._workspaceid_value = n.getStringValue(); },
            "appid": (o, n) => { (o as unknown as Datalakeworkspacepermission).appid = n.getStringValue(); },
            "canexecute": (o, n) => { (o as unknown as Datalakeworkspacepermission).canexecute = n.getBooleanValue(); },
            "canread": (o, n) => { (o as unknown as Datalakeworkspacepermission).canread = n.getBooleanValue(); },
            "canwrite": (o, n) => { (o as unknown as Datalakeworkspacepermission).canwrite = n.getBooleanValue(); },
            "componentidunique": (o, n) => { (o as unknown as Datalakeworkspacepermission).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Datalakeworkspacepermission).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Datalakeworkspacepermission).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Datalakeworkspacepermission).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Datalakeworkspacepermission).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "datalakeworkspacepermission_AsyncOperations": (o, n) => { (o as unknown as Datalakeworkspacepermission).datalakeworkspacepermission_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "datalakeworkspacepermission_BulkDeleteFailures": (o, n) => { (o as unknown as Datalakeworkspacepermission).datalakeworkspacepermission_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "datalakeworkspacepermission_DuplicateBaseRecord": (o, n) => { (o as unknown as Datalakeworkspacepermission).datalakeworkspacepermission_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "datalakeworkspacepermission_DuplicateMatchingRecord": (o, n) => { (o as unknown as Datalakeworkspacepermission).datalakeworkspacepermission_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "datalakeworkspacepermission_MailboxTrackingFolders": (o, n) => { (o as unknown as Datalakeworkspacepermission).datalakeworkspacepermission_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "datalakeworkspacepermission_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Datalakeworkspacepermission).datalakeworkspacepermission_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "datalakeworkspacepermission_ProcessSession": (o, n) => { (o as unknown as Datalakeworkspacepermission).datalakeworkspacepermission_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "datalakeworkspacepermission_SyncErrors": (o, n) => { (o as unknown as Datalakeworkspacepermission).datalakeworkspacepermission_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "datalakeworkspacepermission_uniquename": (o, n) => { (o as unknown as Datalakeworkspacepermission).datalakeworkspacepermission_uniquename = n.getStringValue(); },
            "datalakeworkspacepermissionid": (o, n) => { (o as unknown as Datalakeworkspacepermission).datalakeworkspacepermissionid = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Datalakeworkspacepermission).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Datalakeworkspacepermission).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Datalakeworkspacepermission).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Datalakeworkspacepermission).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Datalakeworkspacepermission).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Datalakeworkspacepermission).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Datalakeworkspacepermission).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Datalakeworkspacepermission).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Datalakeworkspacepermission).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Datalakeworkspacepermission).overwritetime = n.getDateValue(); },
            "solutionid": (o, n) => { (o as unknown as Datalakeworkspacepermission).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Datalakeworkspacepermission).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Datalakeworkspacepermission).statuscode = n.getNumberValue(); },
            "tenantid": (o, n) => { (o as unknown as Datalakeworkspacepermission).tenantid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Datalakeworkspacepermission).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Datalakeworkspacepermission).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Datalakeworkspacepermission).versionnumber = n.getNumberValue(); },
            "whitelistedappid": (o, n) => { (o as unknown as Datalakeworkspacepermission).whitelistedappid = n.getStringValue(); },
            "workspaceid": (o, n) => { (o as unknown as Datalakeworkspacepermission).workspaceid = n.getObjectValue<Datalakeworkspace>(createDatalakeworkspaceFromDiscriminatorValue); },
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
        writer.writeStringValue("_workspaceid_value", this._workspaceid_value);
        writer.writeStringValue("appid", this.appid);
        writer.writeBooleanValue("canexecute", this.canexecute);
        writer.writeBooleanValue("canread", this.canread);
        writer.writeBooleanValue("canwrite", this.canwrite);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeCollectionOfObjectValues<Asyncoperation>("datalakeworkspacepermission_AsyncOperations", this.datalakeworkspacepermission_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("datalakeworkspacepermission_BulkDeleteFailures", this.datalakeworkspacepermission_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("datalakeworkspacepermission_DuplicateBaseRecord", this.datalakeworkspacepermission_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("datalakeworkspacepermission_DuplicateMatchingRecord", this.datalakeworkspacepermission_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("datalakeworkspacepermission_MailboxTrackingFolders", this.datalakeworkspacepermission_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("datalakeworkspacepermission_PrincipalObjectAttributeAccesses", this.datalakeworkspacepermission_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("datalakeworkspacepermission_ProcessSession", this.datalakeworkspacepermission_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("datalakeworkspacepermission_SyncErrors", this.datalakeworkspacepermission_SyncErrors);
        writer.writeStringValue("datalakeworkspacepermission_uniquename", this.datalakeworkspacepermission_uniquename);
        writer.writeStringValue("datalakeworkspacepermissionid", this.datalakeworkspacepermissionid);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeStringValue("tenantid", this.tenantid);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeStringValue("whitelistedappid", this.whitelistedappid);
        writer.writeObjectValue<Datalakeworkspace>("workspaceid", this.workspaceid);
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
     * Gets the tenantid property value. 
     * @returns a string
     */
    public get tenantid() {
        return this._tenantid;
    };
    /**
     * Sets the tenantid property value. 
     * @param value Value to set for the tenantid property.
     */
    public set tenantid(value: string | undefined) {
        this._tenantid = value;
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
    /**
     * Gets the whitelistedappid property value. 
     * @returns a string
     */
    public get whitelistedappid() {
        return this._whitelistedappid;
    };
    /**
     * Sets the whitelistedappid property value. 
     * @param value Value to set for the whitelistedappid property.
     */
    public set whitelistedappid(value: string | undefined) {
        this._whitelistedappid = value;
    };
    /**
     * Gets the workspaceid property value. 
     * @returns a datalakeworkspace
     */
    public get workspaceid() {
        return this._workspaceid;
    };
    /**
     * Sets the workspaceid property value. 
     * @param value Value to set for the workspaceid property.
     */
    public set workspaceid(value: Datalakeworkspace | undefined) {
        this._workspaceid = value;
    };
}
