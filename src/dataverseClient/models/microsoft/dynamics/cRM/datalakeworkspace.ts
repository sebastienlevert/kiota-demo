import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDatalakeworkspacepermissionFromDiscriminatorValue} from './createDatalakeworkspacepermissionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Datalakeworkspacepermission, Duplicaterecord, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Datalakeworkspace extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _containerendpoint?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _datalakeworkspace_AsyncOperations?: Asyncoperation[] | undefined;
    private _datalakeworkspace_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _datalakeworkspace_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _datalakeworkspace_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _datalakeworkspace_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _datalakeworkspace_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _datalakeworkspace_ProcessSession?: Processsession[] | undefined;
    private _datalakeworkspace_SyncErrors?: Syncerror[] | undefined;
    private _datalakeworkspace_uniquename?: string | undefined;
    private _datalakeworkspace_workspacepermission?: Datalakeworkspacepermission[] | undefined;
    private _datalakeworkspaceid?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomercapacity?: boolean | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _isdeepcopyenabled?: boolean | undefined;
    private _ismanaged?: boolean | undefined;
    private _isprivate?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _owningappid?: string | undefined;
    private _path?: string | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _tenantid?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    private _whitelistedappid?: string | undefined;
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
     * Instantiates a new datalakeworkspace and sets the default values.
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
     * Gets the datalakeworkspace_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get datalakeworkspace_AsyncOperations() {
        return this._datalakeworkspace_AsyncOperations;
    };
    /**
     * Sets the datalakeworkspace_AsyncOperations property value. 
     * @param value Value to set for the datalakeworkspace_AsyncOperations property.
     */
    public set datalakeworkspace_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._datalakeworkspace_AsyncOperations = value;
    };
    /**
     * Gets the datalakeworkspace_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get datalakeworkspace_BulkDeleteFailures() {
        return this._datalakeworkspace_BulkDeleteFailures;
    };
    /**
     * Sets the datalakeworkspace_BulkDeleteFailures property value. 
     * @param value Value to set for the datalakeworkspace_BulkDeleteFailures property.
     */
    public set datalakeworkspace_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._datalakeworkspace_BulkDeleteFailures = value;
    };
    /**
     * Gets the datalakeworkspace_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get datalakeworkspace_DuplicateBaseRecord() {
        return this._datalakeworkspace_DuplicateBaseRecord;
    };
    /**
     * Sets the datalakeworkspace_DuplicateBaseRecord property value. 
     * @param value Value to set for the datalakeworkspace_DuplicateBaseRecord property.
     */
    public set datalakeworkspace_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._datalakeworkspace_DuplicateBaseRecord = value;
    };
    /**
     * Gets the datalakeworkspace_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get datalakeworkspace_DuplicateMatchingRecord() {
        return this._datalakeworkspace_DuplicateMatchingRecord;
    };
    /**
     * Sets the datalakeworkspace_DuplicateMatchingRecord property value. 
     * @param value Value to set for the datalakeworkspace_DuplicateMatchingRecord property.
     */
    public set datalakeworkspace_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._datalakeworkspace_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the datalakeworkspace_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get datalakeworkspace_MailboxTrackingFolders() {
        return this._datalakeworkspace_MailboxTrackingFolders;
    };
    /**
     * Sets the datalakeworkspace_MailboxTrackingFolders property value. 
     * @param value Value to set for the datalakeworkspace_MailboxTrackingFolders property.
     */
    public set datalakeworkspace_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._datalakeworkspace_MailboxTrackingFolders = value;
    };
    /**
     * Gets the datalakeworkspace_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get datalakeworkspace_PrincipalObjectAttributeAccesses() {
        return this._datalakeworkspace_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the datalakeworkspace_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the datalakeworkspace_PrincipalObjectAttributeAccesses property.
     */
    public set datalakeworkspace_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._datalakeworkspace_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the datalakeworkspace_ProcessSession property value. 
     * @returns a processsession
     */
    public get datalakeworkspace_ProcessSession() {
        return this._datalakeworkspace_ProcessSession;
    };
    /**
     * Sets the datalakeworkspace_ProcessSession property value. 
     * @param value Value to set for the datalakeworkspace_ProcessSession property.
     */
    public set datalakeworkspace_ProcessSession(value: Processsession[] | undefined) {
        this._datalakeworkspace_ProcessSession = value;
    };
    /**
     * Gets the datalakeworkspace_SyncErrors property value. 
     * @returns a syncerror
     */
    public get datalakeworkspace_SyncErrors() {
        return this._datalakeworkspace_SyncErrors;
    };
    /**
     * Sets the datalakeworkspace_SyncErrors property value. 
     * @param value Value to set for the datalakeworkspace_SyncErrors property.
     */
    public set datalakeworkspace_SyncErrors(value: Syncerror[] | undefined) {
        this._datalakeworkspace_SyncErrors = value;
    };
    /**
     * Gets the datalakeworkspace_uniquename property value. 
     * @returns a string
     */
    public get datalakeworkspace_uniquename() {
        return this._datalakeworkspace_uniquename;
    };
    /**
     * Sets the datalakeworkspace_uniquename property value. 
     * @param value Value to set for the datalakeworkspace_uniquename property.
     */
    public set datalakeworkspace_uniquename(value: string | undefined) {
        this._datalakeworkspace_uniquename = value;
    };
    /**
     * Gets the datalakeworkspace_workspacepermission property value. 
     * @returns a datalakeworkspacepermission
     */
    public get datalakeworkspace_workspacepermission() {
        return this._datalakeworkspace_workspacepermission;
    };
    /**
     * Sets the datalakeworkspace_workspacepermission property value. 
     * @param value Value to set for the datalakeworkspace_workspacepermission property.
     */
    public set datalakeworkspace_workspacepermission(value: Datalakeworkspacepermission[] | undefined) {
        this._datalakeworkspace_workspacepermission = value;
    };
    /**
     * Gets the datalakeworkspaceid property value. 
     * @returns a string
     */
    public get datalakeworkspaceid() {
        return this._datalakeworkspaceid;
    };
    /**
     * Sets the datalakeworkspaceid property value. 
     * @param value Value to set for the datalakeworkspaceid property.
     */
    public set datalakeworkspaceid(value: string | undefined) {
        this._datalakeworkspaceid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Datalakeworkspace)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Datalakeworkspace)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Datalakeworkspace)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Datalakeworkspace)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Datalakeworkspace)._organizationid_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Datalakeworkspace).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Datalakeworkspace).componentstate = n.getNumberValue(); },
            "containerendpoint": (o, n) => { (o as unknown as Datalakeworkspace).containerendpoint = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Datalakeworkspace).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Datalakeworkspace).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Datalakeworkspace).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "datalakeworkspace_AsyncOperations": (o, n) => { (o as unknown as Datalakeworkspace).datalakeworkspace_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "datalakeworkspace_BulkDeleteFailures": (o, n) => { (o as unknown as Datalakeworkspace).datalakeworkspace_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "datalakeworkspace_DuplicateBaseRecord": (o, n) => { (o as unknown as Datalakeworkspace).datalakeworkspace_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "datalakeworkspace_DuplicateMatchingRecord": (o, n) => { (o as unknown as Datalakeworkspace).datalakeworkspace_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "datalakeworkspace_MailboxTrackingFolders": (o, n) => { (o as unknown as Datalakeworkspace).datalakeworkspace_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "datalakeworkspace_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Datalakeworkspace).datalakeworkspace_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "datalakeworkspace_ProcessSession": (o, n) => { (o as unknown as Datalakeworkspace).datalakeworkspace_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "datalakeworkspace_SyncErrors": (o, n) => { (o as unknown as Datalakeworkspace).datalakeworkspace_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "datalakeworkspace_uniquename": (o, n) => { (o as unknown as Datalakeworkspace).datalakeworkspace_uniquename = n.getStringValue(); },
            "datalakeworkspace_workspacepermission": (o, n) => { (o as unknown as Datalakeworkspace).datalakeworkspace_workspacepermission = n.getCollectionOfObjectValues<Datalakeworkspacepermission>(createDatalakeworkspacepermissionFromDiscriminatorValue); },
            "datalakeworkspaceid": (o, n) => { (o as unknown as Datalakeworkspace).datalakeworkspaceid = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Datalakeworkspace).importsequencenumber = n.getNumberValue(); },
            "iscustomercapacity": (o, n) => { (o as unknown as Datalakeworkspace).iscustomercapacity = n.getBooleanValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Datalakeworkspace).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "isdeepcopyenabled": (o, n) => { (o as unknown as Datalakeworkspace).isdeepcopyenabled = n.getBooleanValue(); },
            "ismanaged": (o, n) => { (o as unknown as Datalakeworkspace).ismanaged = n.getBooleanValue(); },
            "isprivate": (o, n) => { (o as unknown as Datalakeworkspace).isprivate = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Datalakeworkspace).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Datalakeworkspace).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Datalakeworkspace).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Datalakeworkspace).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Datalakeworkspace).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Datalakeworkspace).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Datalakeworkspace).overwritetime = n.getDateValue(); },
            "owningappid": (o, n) => { (o as unknown as Datalakeworkspace).owningappid = n.getStringValue(); },
            "path": (o, n) => { (o as unknown as Datalakeworkspace).path = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Datalakeworkspace).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Datalakeworkspace).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Datalakeworkspace).statuscode = n.getNumberValue(); },
            "tenantid": (o, n) => { (o as unknown as Datalakeworkspace).tenantid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Datalakeworkspace).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Datalakeworkspace).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Datalakeworkspace).versionnumber = n.getNumberValue(); },
            "whitelistedappid": (o, n) => { (o as unknown as Datalakeworkspace).whitelistedappid = n.getStringValue(); },
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
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("containerendpoint", this.containerendpoint);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeCollectionOfObjectValues<Asyncoperation>("datalakeworkspace_AsyncOperations", this.datalakeworkspace_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("datalakeworkspace_BulkDeleteFailures", this.datalakeworkspace_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("datalakeworkspace_DuplicateBaseRecord", this.datalakeworkspace_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("datalakeworkspace_DuplicateMatchingRecord", this.datalakeworkspace_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("datalakeworkspace_MailboxTrackingFolders", this.datalakeworkspace_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("datalakeworkspace_PrincipalObjectAttributeAccesses", this.datalakeworkspace_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("datalakeworkspace_ProcessSession", this.datalakeworkspace_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("datalakeworkspace_SyncErrors", this.datalakeworkspace_SyncErrors);
        writer.writeStringValue("datalakeworkspace_uniquename", this.datalakeworkspace_uniquename);
        writer.writeCollectionOfObjectValues<Datalakeworkspacepermission>("datalakeworkspace_workspacepermission", this.datalakeworkspace_workspacepermission);
        writer.writeStringValue("datalakeworkspaceid", this.datalakeworkspaceid);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeBooleanValue("iscustomercapacity", this.iscustomercapacity);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("isdeepcopyenabled", this.isdeepcopyenabled);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("isprivate", this.isprivate);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("owningappid", this.owningappid);
        writer.writeStringValue("path", this.path);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeStringValue("tenantid", this.tenantid);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeStringValue("whitelistedappid", this.whitelistedappid);
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
}
