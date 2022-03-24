import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_assignmentconfigurationFromDiscriminatorValue} from './createMsdyn_assignmentconfigurationFromDiscriminatorValue';
import {createMsdyn_decisionrulesetFromDiscriminatorValue} from './createMsdyn_decisionrulesetFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_assignmentconfiguration, Msdyn_decisionruleset, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_assignmentconfigurationstep extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_assignmentconfigurationid_value?: string | undefined;
    private __msdyn_rulesetid_value?: string | undefined;
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
    private _msdyn_assignmentconfigurationid?: Msdyn_assignmentconfiguration | undefined;
    private _msdyn_assignmentconfigurationstep_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_assignmentconfigurationstep_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_assignmentconfigurationstep_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_assignmentconfigurationstep_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_assignmentconfigurationstep_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_assignmentconfigurationstep_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_assignmentconfigurationstep_ProcessSession?: Processsession[] | undefined;
    private _msdyn_assignmentconfigurationstep_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_assignmentconfigurationstepid?: string | undefined;
    private _msdyn_isdefaultruleset?: boolean | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_rulesetid?: Msdyn_decisionruleset | undefined;
    private _msdyn_steporder?: number | undefined;
    private _msdyn_type?: number | undefined;
    private _msdyn_uniquename?: string | undefined;
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
     * Gets the _msdyn_assignmentconfigurationid_value property value. 
     * @returns a string
     */
    public get _msdyn_assignmentconfigurationid_value() {
        return this.__msdyn_assignmentconfigurationid_value;
    };
    /**
     * Sets the _msdyn_assignmentconfigurationid_value property value. 
     * @param value Value to set for the _msdyn_assignmentconfigurationid_value property.
     */
    public set _msdyn_assignmentconfigurationid_value(value: string | undefined) {
        this.__msdyn_assignmentconfigurationid_value = value;
    };
    /**
     * Gets the _msdyn_rulesetid_value property value. 
     * @returns a string
     */
    public get _msdyn_rulesetid_value() {
        return this.__msdyn_rulesetid_value;
    };
    /**
     * Sets the _msdyn_rulesetid_value property value. 
     * @param value Value to set for the _msdyn_rulesetid_value property.
     */
    public set _msdyn_rulesetid_value(value: string | undefined) {
        this.__msdyn_rulesetid_value = value;
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
     * Instantiates a new msdyn_assignmentconfigurationstep and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_assignmentconfigurationid_value": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep)._msdyn_assignmentconfigurationid_value = n.getStringValue(); },
            "_msdyn_rulesetid_value": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep)._msdyn_rulesetid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep)._owninguser_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_assignmentconfigurationid": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).msdyn_assignmentconfigurationid = n.getObjectValue<Msdyn_assignmentconfiguration>(createMsdyn_assignmentconfigurationFromDiscriminatorValue); },
            "msdyn_assignmentconfigurationstep_AsyncOperations": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).msdyn_assignmentconfigurationstep_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_assignmentconfigurationstep_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).msdyn_assignmentconfigurationstep_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_assignmentconfigurationstep_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).msdyn_assignmentconfigurationstep_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_assignmentconfigurationstep_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).msdyn_assignmentconfigurationstep_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_assignmentconfigurationstep_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).msdyn_assignmentconfigurationstep_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_assignmentconfigurationstep_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).msdyn_assignmentconfigurationstep_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_assignmentconfigurationstep_ProcessSession": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).msdyn_assignmentconfigurationstep_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_assignmentconfigurationstep_SyncErrors": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).msdyn_assignmentconfigurationstep_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_assignmentconfigurationstepid": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).msdyn_assignmentconfigurationstepid = n.getStringValue(); },
            "msdyn_isdefaultruleset": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).msdyn_isdefaultruleset = n.getBooleanValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).msdyn_name = n.getStringValue(); },
            "msdyn_rulesetid": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).msdyn_rulesetid = n.getObjectValue<Msdyn_decisionruleset>(createMsdyn_decisionrulesetFromDiscriminatorValue); },
            "msdyn_steporder": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).msdyn_steporder = n.getNumberValue(); },
            "msdyn_type": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).msdyn_type = n.getNumberValue(); },
            "msdyn_uniquename": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).msdyn_uniquename = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_assignmentconfigurationstep).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_assignmentconfigurationid property value. 
     * @returns a msdyn_assignmentconfiguration
     */
    public get msdyn_assignmentconfigurationid() {
        return this._msdyn_assignmentconfigurationid;
    };
    /**
     * Sets the msdyn_assignmentconfigurationid property value. 
     * @param value Value to set for the msdyn_assignmentconfigurationid property.
     */
    public set msdyn_assignmentconfigurationid(value: Msdyn_assignmentconfiguration | undefined) {
        this._msdyn_assignmentconfigurationid = value;
    };
    /**
     * Gets the msdyn_assignmentconfigurationstep_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_assignmentconfigurationstep_AsyncOperations() {
        return this._msdyn_assignmentconfigurationstep_AsyncOperations;
    };
    /**
     * Sets the msdyn_assignmentconfigurationstep_AsyncOperations property value. 
     * @param value Value to set for the msdyn_assignmentconfigurationstep_AsyncOperations property.
     */
    public set msdyn_assignmentconfigurationstep_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_assignmentconfigurationstep_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_assignmentconfigurationstep_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_assignmentconfigurationstep_BulkDeleteFailures() {
        return this._msdyn_assignmentconfigurationstep_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_assignmentconfigurationstep_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_assignmentconfigurationstep_BulkDeleteFailures property.
     */
    public set msdyn_assignmentconfigurationstep_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_assignmentconfigurationstep_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_assignmentconfigurationstep_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_assignmentconfigurationstep_DuplicateBaseRecord() {
        return this._msdyn_assignmentconfigurationstep_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_assignmentconfigurationstep_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_assignmentconfigurationstep_DuplicateBaseRecord property.
     */
    public set msdyn_assignmentconfigurationstep_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_assignmentconfigurationstep_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_assignmentconfigurationstep_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_assignmentconfigurationstep_DuplicateMatchingRecord() {
        return this._msdyn_assignmentconfigurationstep_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_assignmentconfigurationstep_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_assignmentconfigurationstep_DuplicateMatchingRecord property.
     */
    public set msdyn_assignmentconfigurationstep_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_assignmentconfigurationstep_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_assignmentconfigurationstep_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_assignmentconfigurationstep_MailboxTrackingFolders() {
        return this._msdyn_assignmentconfigurationstep_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_assignmentconfigurationstep_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_assignmentconfigurationstep_MailboxTrackingFolders property.
     */
    public set msdyn_assignmentconfigurationstep_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_assignmentconfigurationstep_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_assignmentconfigurationstep_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_assignmentconfigurationstep_PrincipalObjectAttributeAccesses() {
        return this._msdyn_assignmentconfigurationstep_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_assignmentconfigurationstep_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_assignmentconfigurationstep_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_assignmentconfigurationstep_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_assignmentconfigurationstep_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_assignmentconfigurationstep_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_assignmentconfigurationstep_ProcessSession() {
        return this._msdyn_assignmentconfigurationstep_ProcessSession;
    };
    /**
     * Sets the msdyn_assignmentconfigurationstep_ProcessSession property value. 
     * @param value Value to set for the msdyn_assignmentconfigurationstep_ProcessSession property.
     */
    public set msdyn_assignmentconfigurationstep_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_assignmentconfigurationstep_ProcessSession = value;
    };
    /**
     * Gets the msdyn_assignmentconfigurationstep_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_assignmentconfigurationstep_SyncErrors() {
        return this._msdyn_assignmentconfigurationstep_SyncErrors;
    };
    /**
     * Sets the msdyn_assignmentconfigurationstep_SyncErrors property value. 
     * @param value Value to set for the msdyn_assignmentconfigurationstep_SyncErrors property.
     */
    public set msdyn_assignmentconfigurationstep_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_assignmentconfigurationstep_SyncErrors = value;
    };
    /**
     * Gets the msdyn_assignmentconfigurationstepid property value. 
     * @returns a string
     */
    public get msdyn_assignmentconfigurationstepid() {
        return this._msdyn_assignmentconfigurationstepid;
    };
    /**
     * Sets the msdyn_assignmentconfigurationstepid property value. 
     * @param value Value to set for the msdyn_assignmentconfigurationstepid property.
     */
    public set msdyn_assignmentconfigurationstepid(value: string | undefined) {
        this._msdyn_assignmentconfigurationstepid = value;
    };
    /**
     * Gets the msdyn_isdefaultruleset property value. 
     * @returns a boolean
     */
    public get msdyn_isdefaultruleset() {
        return this._msdyn_isdefaultruleset;
    };
    /**
     * Sets the msdyn_isdefaultruleset property value. 
     * @param value Value to set for the msdyn_isdefaultruleset property.
     */
    public set msdyn_isdefaultruleset(value: boolean | undefined) {
        this._msdyn_isdefaultruleset = value;
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
     * Gets the msdyn_rulesetid property value. 
     * @returns a msdyn_decisionruleset
     */
    public get msdyn_rulesetid() {
        return this._msdyn_rulesetid;
    };
    /**
     * Sets the msdyn_rulesetid property value. 
     * @param value Value to set for the msdyn_rulesetid property.
     */
    public set msdyn_rulesetid(value: Msdyn_decisionruleset | undefined) {
        this._msdyn_rulesetid = value;
    };
    /**
     * Gets the msdyn_steporder property value. 
     * @returns a integer
     */
    public get msdyn_steporder() {
        return this._msdyn_steporder;
    };
    /**
     * Sets the msdyn_steporder property value. 
     * @param value Value to set for the msdyn_steporder property.
     */
    public set msdyn_steporder(value: number | undefined) {
        this._msdyn_steporder = value;
    };
    /**
     * Gets the msdyn_type property value. 
     * @returns a integer
     */
    public get msdyn_type() {
        return this._msdyn_type;
    };
    /**
     * Sets the msdyn_type property value. 
     * @param value Value to set for the msdyn_type property.
     */
    public set msdyn_type(value: number | undefined) {
        this._msdyn_type = value;
    };
    /**
     * Gets the msdyn_uniquename property value. 
     * @returns a string
     */
    public get msdyn_uniquename() {
        return this._msdyn_uniquename;
    };
    /**
     * Sets the msdyn_uniquename property value. 
     * @param value Value to set for the msdyn_uniquename property.
     */
    public set msdyn_uniquename(value: string | undefined) {
        this._msdyn_uniquename = value;
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
        writer.writeStringValue("_msdyn_assignmentconfigurationid_value", this._msdyn_assignmentconfigurationid_value);
        writer.writeStringValue("_msdyn_rulesetid_value", this._msdyn_rulesetid_value);
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
        writer.writeObjectValue<Msdyn_assignmentconfiguration>("msdyn_assignmentconfigurationid", this.msdyn_assignmentconfigurationid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_assignmentconfigurationstep_AsyncOperations", this.msdyn_assignmentconfigurationstep_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_assignmentconfigurationstep_BulkDeleteFailures", this.msdyn_assignmentconfigurationstep_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_assignmentconfigurationstep_DuplicateBaseRecord", this.msdyn_assignmentconfigurationstep_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_assignmentconfigurationstep_DuplicateMatchingRecord", this.msdyn_assignmentconfigurationstep_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_assignmentconfigurationstep_MailboxTrackingFolders", this.msdyn_assignmentconfigurationstep_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_assignmentconfigurationstep_PrincipalObjectAttributeAccesses", this.msdyn_assignmentconfigurationstep_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_assignmentconfigurationstep_ProcessSession", this.msdyn_assignmentconfigurationstep_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_assignmentconfigurationstep_SyncErrors", this.msdyn_assignmentconfigurationstep_SyncErrors);
        writer.writeStringValue("msdyn_assignmentconfigurationstepid", this.msdyn_assignmentconfigurationstepid);
        writer.writeBooleanValue("msdyn_isdefaultruleset", this.msdyn_isdefaultruleset);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_decisionruleset>("msdyn_rulesetid", this.msdyn_rulesetid);
        writer.writeNumberValue("msdyn_steporder", this.msdyn_steporder);
        writer.writeNumberValue("msdyn_type", this.msdyn_type);
        writer.writeStringValue("msdyn_uniquename", this.msdyn_uniquename);
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
