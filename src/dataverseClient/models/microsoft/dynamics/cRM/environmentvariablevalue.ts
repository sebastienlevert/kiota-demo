import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEnvironmentvariabledefinitionFromDiscriminatorValue} from './createEnvironmentvariabledefinitionFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Environmentvariabledefinition, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Environmentvariablevalue extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __environmentvariabledefinitionid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _environmentVariableDefinitionId?: Environmentvariabledefinition | undefined;
    private _environmentvariablevalue_AsyncOperations?: Asyncoperation[] | undefined;
    private _environmentvariablevalue_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _environmentvariablevalue_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _environmentvariablevalue_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _environmentvariablevalue_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _environmentvariablevalue_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _environmentvariablevalue_ProcessSession?: Processsession[] | undefined;
    private _environmentvariablevalue_SyncErrors?: Syncerror[] | undefined;
    private _environmentvariablevalueid?: string | undefined;
    private _environmentvariablevalueidunique?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _introducedversion?: string | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _schemaname?: string | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _value?: string | undefined;
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
     * Gets the _environmentvariabledefinitionid_value property value. 
     * @returns a string
     */
    public get _environmentvariabledefinitionid_value() {
        return this.__environmentvariabledefinitionid_value;
    };
    /**
     * Sets the _environmentvariabledefinitionid_value property value. 
     * @param value Value to set for the _environmentvariabledefinitionid_value property.
     */
    public set _environmentvariabledefinitionid_value(value: string | undefined) {
        this.__environmentvariabledefinitionid_value = value;
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
     * Instantiates a new environmentvariablevalue and sets the default values.
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
     * Gets the environmentVariableDefinitionId property value. 
     * @returns a environmentvariabledefinition
     */
    public get environmentVariableDefinitionId() {
        return this._environmentVariableDefinitionId;
    };
    /**
     * Sets the environmentVariableDefinitionId property value. 
     * @param value Value to set for the EnvironmentVariableDefinitionId property.
     */
    public set environmentVariableDefinitionId(value: Environmentvariabledefinition | undefined) {
        this._environmentVariableDefinitionId = value;
    };
    /**
     * Gets the environmentvariablevalue_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get environmentvariablevalue_AsyncOperations() {
        return this._environmentvariablevalue_AsyncOperations;
    };
    /**
     * Sets the environmentvariablevalue_AsyncOperations property value. 
     * @param value Value to set for the environmentvariablevalue_AsyncOperations property.
     */
    public set environmentvariablevalue_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._environmentvariablevalue_AsyncOperations = value;
    };
    /**
     * Gets the environmentvariablevalue_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get environmentvariablevalue_BulkDeleteFailures() {
        return this._environmentvariablevalue_BulkDeleteFailures;
    };
    /**
     * Sets the environmentvariablevalue_BulkDeleteFailures property value. 
     * @param value Value to set for the environmentvariablevalue_BulkDeleteFailures property.
     */
    public set environmentvariablevalue_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._environmentvariablevalue_BulkDeleteFailures = value;
    };
    /**
     * Gets the environmentvariablevalue_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get environmentvariablevalue_DuplicateBaseRecord() {
        return this._environmentvariablevalue_DuplicateBaseRecord;
    };
    /**
     * Sets the environmentvariablevalue_DuplicateBaseRecord property value. 
     * @param value Value to set for the environmentvariablevalue_DuplicateBaseRecord property.
     */
    public set environmentvariablevalue_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._environmentvariablevalue_DuplicateBaseRecord = value;
    };
    /**
     * Gets the environmentvariablevalue_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get environmentvariablevalue_DuplicateMatchingRecord() {
        return this._environmentvariablevalue_DuplicateMatchingRecord;
    };
    /**
     * Sets the environmentvariablevalue_DuplicateMatchingRecord property value. 
     * @param value Value to set for the environmentvariablevalue_DuplicateMatchingRecord property.
     */
    public set environmentvariablevalue_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._environmentvariablevalue_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the environmentvariablevalue_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get environmentvariablevalue_MailboxTrackingFolders() {
        return this._environmentvariablevalue_MailboxTrackingFolders;
    };
    /**
     * Sets the environmentvariablevalue_MailboxTrackingFolders property value. 
     * @param value Value to set for the environmentvariablevalue_MailboxTrackingFolders property.
     */
    public set environmentvariablevalue_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._environmentvariablevalue_MailboxTrackingFolders = value;
    };
    /**
     * Gets the environmentvariablevalue_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get environmentvariablevalue_PrincipalObjectAttributeAccesses() {
        return this._environmentvariablevalue_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the environmentvariablevalue_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the environmentvariablevalue_PrincipalObjectAttributeAccesses property.
     */
    public set environmentvariablevalue_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._environmentvariablevalue_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the environmentvariablevalue_ProcessSession property value. 
     * @returns a processsession
     */
    public get environmentvariablevalue_ProcessSession() {
        return this._environmentvariablevalue_ProcessSession;
    };
    /**
     * Sets the environmentvariablevalue_ProcessSession property value. 
     * @param value Value to set for the environmentvariablevalue_ProcessSession property.
     */
    public set environmentvariablevalue_ProcessSession(value: Processsession[] | undefined) {
        this._environmentvariablevalue_ProcessSession = value;
    };
    /**
     * Gets the environmentvariablevalue_SyncErrors property value. 
     * @returns a syncerror
     */
    public get environmentvariablevalue_SyncErrors() {
        return this._environmentvariablevalue_SyncErrors;
    };
    /**
     * Sets the environmentvariablevalue_SyncErrors property value. 
     * @param value Value to set for the environmentvariablevalue_SyncErrors property.
     */
    public set environmentvariablevalue_SyncErrors(value: Syncerror[] | undefined) {
        this._environmentvariablevalue_SyncErrors = value;
    };
    /**
     * Gets the environmentvariablevalueid property value. 
     * @returns a string
     */
    public get environmentvariablevalueid() {
        return this._environmentvariablevalueid;
    };
    /**
     * Sets the environmentvariablevalueid property value. 
     * @param value Value to set for the environmentvariablevalueid property.
     */
    public set environmentvariablevalueid(value: string | undefined) {
        this._environmentvariablevalueid = value;
    };
    /**
     * Gets the environmentvariablevalueidunique property value. 
     * @returns a string
     */
    public get environmentvariablevalueidunique() {
        return this._environmentvariablevalueidunique;
    };
    /**
     * Sets the environmentvariablevalueidunique property value. 
     * @param value Value to set for the environmentvariablevalueidunique property.
     */
    public set environmentvariablevalueidunique(value: string | undefined) {
        this._environmentvariablevalueidunique = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Environmentvariablevalue)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Environmentvariablevalue)._createdonbehalfby_value = n.getStringValue(); },
            "_environmentvariabledefinitionid_value": (o, n) => { (o as unknown as Environmentvariablevalue)._environmentvariabledefinitionid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Environmentvariablevalue)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Environmentvariablevalue)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Environmentvariablevalue)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Environmentvariablevalue)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Environmentvariablevalue)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Environmentvariablevalue)._owninguser_value = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Environmentvariablevalue).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Environmentvariablevalue).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Environmentvariablevalue).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Environmentvariablevalue).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "environmentVariableDefinitionId": (o, n) => { (o as unknown as Environmentvariablevalue).environmentVariableDefinitionId = n.getObjectValue<Environmentvariabledefinition>(createEnvironmentvariabledefinitionFromDiscriminatorValue); },
            "environmentvariablevalue_AsyncOperations": (o, n) => { (o as unknown as Environmentvariablevalue).environmentvariablevalue_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "environmentvariablevalue_BulkDeleteFailures": (o, n) => { (o as unknown as Environmentvariablevalue).environmentvariablevalue_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "environmentvariablevalue_DuplicateBaseRecord": (o, n) => { (o as unknown as Environmentvariablevalue).environmentvariablevalue_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "environmentvariablevalue_DuplicateMatchingRecord": (o, n) => { (o as unknown as Environmentvariablevalue).environmentvariablevalue_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "environmentvariablevalue_MailboxTrackingFolders": (o, n) => { (o as unknown as Environmentvariablevalue).environmentvariablevalue_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "environmentvariablevalue_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Environmentvariablevalue).environmentvariablevalue_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "environmentvariablevalue_ProcessSession": (o, n) => { (o as unknown as Environmentvariablevalue).environmentvariablevalue_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "environmentvariablevalue_SyncErrors": (o, n) => { (o as unknown as Environmentvariablevalue).environmentvariablevalue_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "environmentvariablevalueid": (o, n) => { (o as unknown as Environmentvariablevalue).environmentvariablevalueid = n.getStringValue(); },
            "environmentvariablevalueidunique": (o, n) => { (o as unknown as Environmentvariablevalue).environmentvariablevalueidunique = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Environmentvariablevalue).importsequencenumber = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Environmentvariablevalue).introducedversion = n.getStringValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Environmentvariablevalue).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Environmentvariablevalue).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Environmentvariablevalue).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Environmentvariablevalue).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Environmentvariablevalue).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Environmentvariablevalue).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Environmentvariablevalue).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Environmentvariablevalue).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Environmentvariablevalue).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Environmentvariablevalue).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Environmentvariablevalue).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "schemaname": (o, n) => { (o as unknown as Environmentvariablevalue).schemaname = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Environmentvariablevalue).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Environmentvariablevalue).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Environmentvariablevalue).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Environmentvariablevalue).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Environmentvariablevalue).utcconversiontimezonecode = n.getNumberValue(); },
            "value": (o, n) => { (o as unknown as Environmentvariablevalue).value = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Environmentvariablevalue).versionnumber = n.getNumberValue(); },
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
     * Gets the introducedversion property value. 
     * @returns a string
     */
    public get introducedversion() {
        return this._introducedversion;
    };
    /**
     * Sets the introducedversion property value. 
     * @param value Value to set for the introducedversion property.
     */
    public set introducedversion(value: string | undefined) {
        this._introducedversion = value;
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
     * Gets the schemaname property value. 
     * @returns a string
     */
    public get schemaname() {
        return this._schemaname;
    };
    /**
     * Sets the schemaname property value. 
     * @param value Value to set for the schemaname property.
     */
    public set schemaname(value: string | undefined) {
        this._schemaname = value;
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
        writer.writeStringValue("_environmentvariabledefinitionid_value", this._environmentvariabledefinitionid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeObjectValue<Environmentvariabledefinition>("environmentVariableDefinitionId", this.environmentVariableDefinitionId);
        writer.writeCollectionOfObjectValues<Asyncoperation>("environmentvariablevalue_AsyncOperations", this.environmentvariablevalue_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("environmentvariablevalue_BulkDeleteFailures", this.environmentvariablevalue_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("environmentvariablevalue_DuplicateBaseRecord", this.environmentvariablevalue_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("environmentvariablevalue_DuplicateMatchingRecord", this.environmentvariablevalue_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("environmentvariablevalue_MailboxTrackingFolders", this.environmentvariablevalue_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("environmentvariablevalue_PrincipalObjectAttributeAccesses", this.environmentvariablevalue_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("environmentvariablevalue_ProcessSession", this.environmentvariablevalue_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("environmentvariablevalue_SyncErrors", this.environmentvariablevalue_SyncErrors);
        writer.writeStringValue("environmentvariablevalueid", this.environmentvariablevalueid);
        writer.writeStringValue("environmentvariablevalueidunique", this.environmentvariablevalueidunique);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("schemaname", this.schemaname);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeStringValue("value", this.value);
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
     * Gets the value property value. 
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
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
