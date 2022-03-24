import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createFlowmachineFromDiscriminatorValue} from './createFlowmachineFromDiscriminatorValue';
import {createFlowsessionFromDiscriminatorValue} from './createFlowsessionFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Flowmachine, Flowsession, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Flowmachinegroup extends Crmbaseentity implements Parsable {
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
    private _description?: string | undefined;
    private _flowgrouptype?: number | undefined;
    private _flowmachinegroup_AsyncOperations?: Asyncoperation[] | undefined;
    private _flowmachinegroup_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _flowmachinegroup_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _flowmachinegroup_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _flowmachinegroup_flowmachine?: Flowmachine[] | undefined;
    private _flowmachinegroup_flowsession_MachineGroupId?: Flowsession[] | undefined;
    private _flowmachinegroup_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _flowmachinegroup_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _flowmachinegroup_ProcessSession?: Processsession[] | undefined;
    private _flowmachinegroup_SyncErrors?: Syncerror[] | undefined;
    private _flowmachinegroupid?: string | undefined;
    private _groupmetadata?: string | undefined;
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
    private _primarykeypackage?: string | undefined;
    private _primarypublickey?: string | undefined;
    private _secondarykeypackage?: string | undefined;
    private _secondarypublickey?: string | undefined;
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
     * Instantiates a new flowmachinegroup and sets the default values.
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
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the flowgrouptype property value. 
     * @returns a integer
     */
    public get flowgrouptype() {
        return this._flowgrouptype;
    };
    /**
     * Sets the flowgrouptype property value. 
     * @param value Value to set for the flowgrouptype property.
     */
    public set flowgrouptype(value: number | undefined) {
        this._flowgrouptype = value;
    };
    /**
     * Gets the flowmachinegroup_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get flowmachinegroup_AsyncOperations() {
        return this._flowmachinegroup_AsyncOperations;
    };
    /**
     * Sets the flowmachinegroup_AsyncOperations property value. 
     * @param value Value to set for the flowmachinegroup_AsyncOperations property.
     */
    public set flowmachinegroup_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._flowmachinegroup_AsyncOperations = value;
    };
    /**
     * Gets the flowmachinegroup_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get flowmachinegroup_BulkDeleteFailures() {
        return this._flowmachinegroup_BulkDeleteFailures;
    };
    /**
     * Sets the flowmachinegroup_BulkDeleteFailures property value. 
     * @param value Value to set for the flowmachinegroup_BulkDeleteFailures property.
     */
    public set flowmachinegroup_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._flowmachinegroup_BulkDeleteFailures = value;
    };
    /**
     * Gets the flowmachinegroup_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get flowmachinegroup_DuplicateBaseRecord() {
        return this._flowmachinegroup_DuplicateBaseRecord;
    };
    /**
     * Sets the flowmachinegroup_DuplicateBaseRecord property value. 
     * @param value Value to set for the flowmachinegroup_DuplicateBaseRecord property.
     */
    public set flowmachinegroup_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._flowmachinegroup_DuplicateBaseRecord = value;
    };
    /**
     * Gets the flowmachinegroup_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get flowmachinegroup_DuplicateMatchingRecord() {
        return this._flowmachinegroup_DuplicateMatchingRecord;
    };
    /**
     * Sets the flowmachinegroup_DuplicateMatchingRecord property value. 
     * @param value Value to set for the flowmachinegroup_DuplicateMatchingRecord property.
     */
    public set flowmachinegroup_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._flowmachinegroup_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the flowmachinegroup_flowmachine property value. 
     * @returns a flowmachine
     */
    public get flowmachinegroup_flowmachine() {
        return this._flowmachinegroup_flowmachine;
    };
    /**
     * Sets the flowmachinegroup_flowmachine property value. 
     * @param value Value to set for the flowmachinegroup_flowmachine property.
     */
    public set flowmachinegroup_flowmachine(value: Flowmachine[] | undefined) {
        this._flowmachinegroup_flowmachine = value;
    };
    /**
     * Gets the flowmachinegroup_flowsession_MachineGroupId property value. 
     * @returns a flowsession
     */
    public get flowmachinegroup_flowsession_MachineGroupId() {
        return this._flowmachinegroup_flowsession_MachineGroupId;
    };
    /**
     * Sets the flowmachinegroup_flowsession_MachineGroupId property value. 
     * @param value Value to set for the flowmachinegroup_flowsession_MachineGroupId property.
     */
    public set flowmachinegroup_flowsession_MachineGroupId(value: Flowsession[] | undefined) {
        this._flowmachinegroup_flowsession_MachineGroupId = value;
    };
    /**
     * Gets the flowmachinegroup_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get flowmachinegroup_MailboxTrackingFolders() {
        return this._flowmachinegroup_MailboxTrackingFolders;
    };
    /**
     * Sets the flowmachinegroup_MailboxTrackingFolders property value. 
     * @param value Value to set for the flowmachinegroup_MailboxTrackingFolders property.
     */
    public set flowmachinegroup_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._flowmachinegroup_MailboxTrackingFolders = value;
    };
    /**
     * Gets the flowmachinegroup_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get flowmachinegroup_PrincipalObjectAttributeAccesses() {
        return this._flowmachinegroup_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the flowmachinegroup_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the flowmachinegroup_PrincipalObjectAttributeAccesses property.
     */
    public set flowmachinegroup_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._flowmachinegroup_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the flowmachinegroup_ProcessSession property value. 
     * @returns a processsession
     */
    public get flowmachinegroup_ProcessSession() {
        return this._flowmachinegroup_ProcessSession;
    };
    /**
     * Sets the flowmachinegroup_ProcessSession property value. 
     * @param value Value to set for the flowmachinegroup_ProcessSession property.
     */
    public set flowmachinegroup_ProcessSession(value: Processsession[] | undefined) {
        this._flowmachinegroup_ProcessSession = value;
    };
    /**
     * Gets the flowmachinegroup_SyncErrors property value. 
     * @returns a syncerror
     */
    public get flowmachinegroup_SyncErrors() {
        return this._flowmachinegroup_SyncErrors;
    };
    /**
     * Sets the flowmachinegroup_SyncErrors property value. 
     * @param value Value to set for the flowmachinegroup_SyncErrors property.
     */
    public set flowmachinegroup_SyncErrors(value: Syncerror[] | undefined) {
        this._flowmachinegroup_SyncErrors = value;
    };
    /**
     * Gets the flowmachinegroupid property value. 
     * @returns a string
     */
    public get flowmachinegroupid() {
        return this._flowmachinegroupid;
    };
    /**
     * Sets the flowmachinegroupid property value. 
     * @param value Value to set for the flowmachinegroupid property.
     */
    public set flowmachinegroupid(value: string | undefined) {
        this._flowmachinegroupid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Flowmachinegroup)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Flowmachinegroup)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Flowmachinegroup)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Flowmachinegroup)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Flowmachinegroup)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Flowmachinegroup)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Flowmachinegroup)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Flowmachinegroup)._owninguser_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Flowmachinegroup).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Flowmachinegroup).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Flowmachinegroup).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Flowmachinegroup).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Flowmachinegroup).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Flowmachinegroup).description = n.getStringValue(); },
            "flowgrouptype": (o, n) => { (o as unknown as Flowmachinegroup).flowgrouptype = n.getNumberValue(); },
            "flowmachinegroup_AsyncOperations": (o, n) => { (o as unknown as Flowmachinegroup).flowmachinegroup_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "flowmachinegroup_BulkDeleteFailures": (o, n) => { (o as unknown as Flowmachinegroup).flowmachinegroup_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "flowmachinegroup_DuplicateBaseRecord": (o, n) => { (o as unknown as Flowmachinegroup).flowmachinegroup_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "flowmachinegroup_DuplicateMatchingRecord": (o, n) => { (o as unknown as Flowmachinegroup).flowmachinegroup_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "flowmachinegroup_flowmachine": (o, n) => { (o as unknown as Flowmachinegroup).flowmachinegroup_flowmachine = n.getCollectionOfObjectValues<Flowmachine>(createFlowmachineFromDiscriminatorValue); },
            "flowmachinegroup_flowsession_MachineGroupId": (o, n) => { (o as unknown as Flowmachinegroup).flowmachinegroup_flowsession_MachineGroupId = n.getCollectionOfObjectValues<Flowsession>(createFlowsessionFromDiscriminatorValue); },
            "flowmachinegroup_MailboxTrackingFolders": (o, n) => { (o as unknown as Flowmachinegroup).flowmachinegroup_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "flowmachinegroup_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Flowmachinegroup).flowmachinegroup_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "flowmachinegroup_ProcessSession": (o, n) => { (o as unknown as Flowmachinegroup).flowmachinegroup_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "flowmachinegroup_SyncErrors": (o, n) => { (o as unknown as Flowmachinegroup).flowmachinegroup_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "flowmachinegroupid": (o, n) => { (o as unknown as Flowmachinegroup).flowmachinegroupid = n.getStringValue(); },
            "groupmetadata": (o, n) => { (o as unknown as Flowmachinegroup).groupmetadata = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Flowmachinegroup).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Flowmachinegroup).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Flowmachinegroup).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Flowmachinegroup).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Flowmachinegroup).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Flowmachinegroup).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Flowmachinegroup).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Flowmachinegroup).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Flowmachinegroup).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Flowmachinegroup).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Flowmachinegroup).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Flowmachinegroup).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Flowmachinegroup).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "primarykeypackage": (o, n) => { (o as unknown as Flowmachinegroup).primarykeypackage = n.getStringValue(); },
            "primarypublickey": (o, n) => { (o as unknown as Flowmachinegroup).primarypublickey = n.getStringValue(); },
            "secondarykeypackage": (o, n) => { (o as unknown as Flowmachinegroup).secondarykeypackage = n.getStringValue(); },
            "secondarypublickey": (o, n) => { (o as unknown as Flowmachinegroup).secondarypublickey = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Flowmachinegroup).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Flowmachinegroup).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Flowmachinegroup).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Flowmachinegroup).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Flowmachinegroup).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Flowmachinegroup).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the groupmetadata property value. 
     * @returns a string
     */
    public get groupmetadata() {
        return this._groupmetadata;
    };
    /**
     * Sets the groupmetadata property value. 
     * @param value Value to set for the groupmetadata property.
     */
    public set groupmetadata(value: string | undefined) {
        this._groupmetadata = value;
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
     * Gets the primarykeypackage property value. 
     * @returns a string
     */
    public get primarykeypackage() {
        return this._primarykeypackage;
    };
    /**
     * Sets the primarykeypackage property value. 
     * @param value Value to set for the primarykeypackage property.
     */
    public set primarykeypackage(value: string | undefined) {
        this._primarykeypackage = value;
    };
    /**
     * Gets the primarypublickey property value. 
     * @returns a string
     */
    public get primarypublickey() {
        return this._primarypublickey;
    };
    /**
     * Sets the primarypublickey property value. 
     * @param value Value to set for the primarypublickey property.
     */
    public set primarypublickey(value: string | undefined) {
        this._primarypublickey = value;
    };
    /**
     * Gets the secondarykeypackage property value. 
     * @returns a string
     */
    public get secondarykeypackage() {
        return this._secondarykeypackage;
    };
    /**
     * Sets the secondarykeypackage property value. 
     * @param value Value to set for the secondarykeypackage property.
     */
    public set secondarykeypackage(value: string | undefined) {
        this._secondarykeypackage = value;
    };
    /**
     * Gets the secondarypublickey property value. 
     * @returns a string
     */
    public get secondarypublickey() {
        return this._secondarypublickey;
    };
    /**
     * Sets the secondarypublickey property value. 
     * @param value Value to set for the secondarypublickey property.
     */
    public set secondarypublickey(value: string | undefined) {
        this._secondarypublickey = value;
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
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("flowgrouptype", this.flowgrouptype);
        writer.writeCollectionOfObjectValues<Asyncoperation>("flowmachinegroup_AsyncOperations", this.flowmachinegroup_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("flowmachinegroup_BulkDeleteFailures", this.flowmachinegroup_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("flowmachinegroup_DuplicateBaseRecord", this.flowmachinegroup_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("flowmachinegroup_DuplicateMatchingRecord", this.flowmachinegroup_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Flowmachine>("flowmachinegroup_flowmachine", this.flowmachinegroup_flowmachine);
        writer.writeCollectionOfObjectValues<Flowsession>("flowmachinegroup_flowsession_MachineGroupId", this.flowmachinegroup_flowsession_MachineGroupId);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("flowmachinegroup_MailboxTrackingFolders", this.flowmachinegroup_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("flowmachinegroup_PrincipalObjectAttributeAccesses", this.flowmachinegroup_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("flowmachinegroup_ProcessSession", this.flowmachinegroup_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("flowmachinegroup_SyncErrors", this.flowmachinegroup_SyncErrors);
        writer.writeStringValue("flowmachinegroupid", this.flowmachinegroupid);
        writer.writeStringValue("groupmetadata", this.groupmetadata);
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
        writer.writeStringValue("primarykeypackage", this.primarykeypackage);
        writer.writeStringValue("primarypublickey", this.primarypublickey);
        writer.writeStringValue("secondarykeypackage", this.secondarykeypackage);
        writer.writeStringValue("secondarypublickey", this.secondarypublickey);
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
