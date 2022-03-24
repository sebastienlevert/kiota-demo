import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
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
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_dataflow extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_dataflow_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_dataflow_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_dataflow_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_dataflow_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_dataflow_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_dataflow_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_dataflow_ProcessSession?: Processsession[] | undefined;
    private _msdyn_dataflow_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_dataflowid?: string | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_destinationadls?: string | undefined;
    private _msdyn_emailsettings?: string | undefined;
    private _msdyn_gatewayobjectid?: string | undefined;
    private _msdyn_internalversion?: string | undefined;
    private _msdyn_mashupdocument?: string | undefined;
    private _msdyn_mashupsettings?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_originaldataflowid?: string | undefined;
    private _msdyn_refreshhistory?: string | undefined;
    private _msdyn_refreshsettings?: string | undefined;
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
     * Instantiates a new msdyn_dataflow and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_dataflow)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_dataflow)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_dataflow)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_dataflow)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_dataflow)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_dataflow)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_dataflow)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_dataflow)._owninguser_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Msdyn_dataflow).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Msdyn_dataflow).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_dataflow).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_dataflow).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_dataflow).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_dataflow).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Msdyn_dataflow).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Msdyn_dataflow).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_dataflow).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_dataflow).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_dataflow).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_dataflow_AsyncOperations": (o, n) => { (o as unknown as Msdyn_dataflow).msdyn_dataflow_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_dataflow_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_dataflow).msdyn_dataflow_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_dataflow_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_dataflow).msdyn_dataflow_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_dataflow_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_dataflow).msdyn_dataflow_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_dataflow_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_dataflow).msdyn_dataflow_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_dataflow_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_dataflow).msdyn_dataflow_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_dataflow_ProcessSession": (o, n) => { (o as unknown as Msdyn_dataflow).msdyn_dataflow_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_dataflow_SyncErrors": (o, n) => { (o as unknown as Msdyn_dataflow).msdyn_dataflow_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_dataflowid": (o, n) => { (o as unknown as Msdyn_dataflow).msdyn_dataflowid = n.getStringValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_dataflow).msdyn_description = n.getStringValue(); },
            "msdyn_destinationadls": (o, n) => { (o as unknown as Msdyn_dataflow).msdyn_destinationadls = n.getStringValue(); },
            "msdyn_emailsettings": (o, n) => { (o as unknown as Msdyn_dataflow).msdyn_emailsettings = n.getStringValue(); },
            "msdyn_gatewayobjectid": (o, n) => { (o as unknown as Msdyn_dataflow).msdyn_gatewayobjectid = n.getStringValue(); },
            "msdyn_internalversion": (o, n) => { (o as unknown as Msdyn_dataflow).msdyn_internalversion = n.getStringValue(); },
            "msdyn_mashupdocument": (o, n) => { (o as unknown as Msdyn_dataflow).msdyn_mashupdocument = n.getStringValue(); },
            "msdyn_mashupsettings": (o, n) => { (o as unknown as Msdyn_dataflow).msdyn_mashupsettings = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_dataflow).msdyn_name = n.getStringValue(); },
            "msdyn_originaldataflowid": (o, n) => { (o as unknown as Msdyn_dataflow).msdyn_originaldataflowid = n.getStringValue(); },
            "msdyn_refreshhistory": (o, n) => { (o as unknown as Msdyn_dataflow).msdyn_refreshhistory = n.getStringValue(); },
            "msdyn_refreshsettings": (o, n) => { (o as unknown as Msdyn_dataflow).msdyn_refreshsettings = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_dataflow).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Msdyn_dataflow).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_dataflow).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_dataflow).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_dataflow).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_dataflow).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Msdyn_dataflow).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_dataflow).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_dataflow).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_dataflow).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_dataflow).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_dataflow).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_dataflow_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_dataflow_AsyncOperations() {
        return this._msdyn_dataflow_AsyncOperations;
    };
    /**
     * Sets the msdyn_dataflow_AsyncOperations property value. 
     * @param value Value to set for the msdyn_dataflow_AsyncOperations property.
     */
    public set msdyn_dataflow_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_dataflow_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_dataflow_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_dataflow_BulkDeleteFailures() {
        return this._msdyn_dataflow_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_dataflow_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_dataflow_BulkDeleteFailures property.
     */
    public set msdyn_dataflow_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_dataflow_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_dataflow_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_dataflow_DuplicateBaseRecord() {
        return this._msdyn_dataflow_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_dataflow_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_dataflow_DuplicateBaseRecord property.
     */
    public set msdyn_dataflow_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_dataflow_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_dataflow_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_dataflow_DuplicateMatchingRecord() {
        return this._msdyn_dataflow_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_dataflow_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_dataflow_DuplicateMatchingRecord property.
     */
    public set msdyn_dataflow_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_dataflow_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_dataflow_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_dataflow_MailboxTrackingFolders() {
        return this._msdyn_dataflow_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_dataflow_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_dataflow_MailboxTrackingFolders property.
     */
    public set msdyn_dataflow_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_dataflow_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_dataflow_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_dataflow_PrincipalObjectAttributeAccesses() {
        return this._msdyn_dataflow_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_dataflow_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_dataflow_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_dataflow_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_dataflow_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_dataflow_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_dataflow_ProcessSession() {
        return this._msdyn_dataflow_ProcessSession;
    };
    /**
     * Sets the msdyn_dataflow_ProcessSession property value. 
     * @param value Value to set for the msdyn_dataflow_ProcessSession property.
     */
    public set msdyn_dataflow_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_dataflow_ProcessSession = value;
    };
    /**
     * Gets the msdyn_dataflow_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_dataflow_SyncErrors() {
        return this._msdyn_dataflow_SyncErrors;
    };
    /**
     * Sets the msdyn_dataflow_SyncErrors property value. 
     * @param value Value to set for the msdyn_dataflow_SyncErrors property.
     */
    public set msdyn_dataflow_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_dataflow_SyncErrors = value;
    };
    /**
     * Gets the msdyn_dataflowid property value. 
     * @returns a string
     */
    public get msdyn_dataflowid() {
        return this._msdyn_dataflowid;
    };
    /**
     * Sets the msdyn_dataflowid property value. 
     * @param value Value to set for the msdyn_dataflowid property.
     */
    public set msdyn_dataflowid(value: string | undefined) {
        this._msdyn_dataflowid = value;
    };
    /**
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
    };
    /**
     * Gets the msdyn_destinationadls property value. 
     * @returns a string
     */
    public get msdyn_destinationadls() {
        return this._msdyn_destinationadls;
    };
    /**
     * Sets the msdyn_destinationadls property value. 
     * @param value Value to set for the msdyn_destinationadls property.
     */
    public set msdyn_destinationadls(value: string | undefined) {
        this._msdyn_destinationadls = value;
    };
    /**
     * Gets the msdyn_emailsettings property value. 
     * @returns a string
     */
    public get msdyn_emailsettings() {
        return this._msdyn_emailsettings;
    };
    /**
     * Sets the msdyn_emailsettings property value. 
     * @param value Value to set for the msdyn_emailsettings property.
     */
    public set msdyn_emailsettings(value: string | undefined) {
        this._msdyn_emailsettings = value;
    };
    /**
     * Gets the msdyn_gatewayobjectid property value. 
     * @returns a string
     */
    public get msdyn_gatewayobjectid() {
        return this._msdyn_gatewayobjectid;
    };
    /**
     * Sets the msdyn_gatewayobjectid property value. 
     * @param value Value to set for the msdyn_gatewayobjectid property.
     */
    public set msdyn_gatewayobjectid(value: string | undefined) {
        this._msdyn_gatewayobjectid = value;
    };
    /**
     * Gets the msdyn_internalversion property value. 
     * @returns a string
     */
    public get msdyn_internalversion() {
        return this._msdyn_internalversion;
    };
    /**
     * Sets the msdyn_internalversion property value. 
     * @param value Value to set for the msdyn_internalversion property.
     */
    public set msdyn_internalversion(value: string | undefined) {
        this._msdyn_internalversion = value;
    };
    /**
     * Gets the msdyn_mashupdocument property value. 
     * @returns a string
     */
    public get msdyn_mashupdocument() {
        return this._msdyn_mashupdocument;
    };
    /**
     * Sets the msdyn_mashupdocument property value. 
     * @param value Value to set for the msdyn_mashupdocument property.
     */
    public set msdyn_mashupdocument(value: string | undefined) {
        this._msdyn_mashupdocument = value;
    };
    /**
     * Gets the msdyn_mashupsettings property value. 
     * @returns a string
     */
    public get msdyn_mashupsettings() {
        return this._msdyn_mashupsettings;
    };
    /**
     * Sets the msdyn_mashupsettings property value. 
     * @param value Value to set for the msdyn_mashupsettings property.
     */
    public set msdyn_mashupsettings(value: string | undefined) {
        this._msdyn_mashupsettings = value;
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
     * Gets the msdyn_originaldataflowid property value. 
     * @returns a string
     */
    public get msdyn_originaldataflowid() {
        return this._msdyn_originaldataflowid;
    };
    /**
     * Sets the msdyn_originaldataflowid property value. 
     * @param value Value to set for the msdyn_originaldataflowid property.
     */
    public set msdyn_originaldataflowid(value: string | undefined) {
        this._msdyn_originaldataflowid = value;
    };
    /**
     * Gets the msdyn_refreshhistory property value. 
     * @returns a string
     */
    public get msdyn_refreshhistory() {
        return this._msdyn_refreshhistory;
    };
    /**
     * Sets the msdyn_refreshhistory property value. 
     * @param value Value to set for the msdyn_refreshhistory property.
     */
    public set msdyn_refreshhistory(value: string | undefined) {
        this._msdyn_refreshhistory = value;
    };
    /**
     * Gets the msdyn_refreshsettings property value. 
     * @returns a string
     */
    public get msdyn_refreshsettings() {
        return this._msdyn_refreshsettings;
    };
    /**
     * Sets the msdyn_refreshsettings property value. 
     * @param value Value to set for the msdyn_refreshsettings property.
     */
    public set msdyn_refreshsettings(value: string | undefined) {
        this._msdyn_refreshsettings = value;
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
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_dataflow_AsyncOperations", this.msdyn_dataflow_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_dataflow_BulkDeleteFailures", this.msdyn_dataflow_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_dataflow_DuplicateBaseRecord", this.msdyn_dataflow_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_dataflow_DuplicateMatchingRecord", this.msdyn_dataflow_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_dataflow_MailboxTrackingFolders", this.msdyn_dataflow_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_dataflow_PrincipalObjectAttributeAccesses", this.msdyn_dataflow_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_dataflow_ProcessSession", this.msdyn_dataflow_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_dataflow_SyncErrors", this.msdyn_dataflow_SyncErrors);
        writer.writeStringValue("msdyn_dataflowid", this.msdyn_dataflowid);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeStringValue("msdyn_destinationadls", this.msdyn_destinationadls);
        writer.writeStringValue("msdyn_emailsettings", this.msdyn_emailsettings);
        writer.writeStringValue("msdyn_gatewayobjectid", this.msdyn_gatewayobjectid);
        writer.writeStringValue("msdyn_internalversion", this.msdyn_internalversion);
        writer.writeStringValue("msdyn_mashupdocument", this.msdyn_mashupdocument);
        writer.writeStringValue("msdyn_mashupsettings", this.msdyn_mashupsettings);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_originaldataflowid", this.msdyn_originaldataflowid);
        writer.writeStringValue("msdyn_refreshhistory", this.msdyn_refreshhistory);
        writer.writeStringValue("msdyn_refreshsettings", this.msdyn_refreshsettings);
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
