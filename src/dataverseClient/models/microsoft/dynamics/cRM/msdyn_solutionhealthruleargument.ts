import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_solutionhealthruleFromDiscriminatorValue} from './createMsdyn_solutionhealthruleFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_solutionhealthrule, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_solutionhealthruleargument extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_solutionhealthrule_value?: string | undefined;
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
    private _msdyn_key?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_SolutionHealthRule?: Msdyn_solutionhealthrule | undefined;
    private _msdyn_solutionhealthruleargument_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_solutionhealthruleargument_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_solutionhealthruleargument_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_solutionhealthruleargument_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_solutionhealthruleargument_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_solutionhealthruleargument_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_solutionhealthruleargument_ProcessSession?: Processsession[] | undefined;
    private _msdyn_solutionhealthruleargument_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_solutionhealthruleargumentid?: string | undefined;
    private _msdyn_value?: string | undefined;
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
     * Gets the _msdyn_solutionhealthrule_value property value. 
     * @returns a string
     */
    public get _msdyn_solutionhealthrule_value() {
        return this.__msdyn_solutionhealthrule_value;
    };
    /**
     * Sets the _msdyn_solutionhealthrule_value property value. 
     * @param value Value to set for the _msdyn_solutionhealthrule_value property.
     */
    public set _msdyn_solutionhealthrule_value(value: string | undefined) {
        this.__msdyn_solutionhealthrule_value = value;
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
     * Instantiates a new msdyn_solutionhealthruleargument and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_solutionhealthrule_value": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument)._msdyn_solutionhealthrule_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_key": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).msdyn_key = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).msdyn_name = n.getStringValue(); },
            "msdyn_SolutionHealthRule": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).msdyn_SolutionHealthRule = n.getObjectValue<Msdyn_solutionhealthrule>(createMsdyn_solutionhealthruleFromDiscriminatorValue); },
            "msdyn_solutionhealthruleargument_AsyncOperations": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).msdyn_solutionhealthruleargument_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_solutionhealthruleargument_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).msdyn_solutionhealthruleargument_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_solutionhealthruleargument_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).msdyn_solutionhealthruleargument_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_solutionhealthruleargument_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).msdyn_solutionhealthruleargument_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_solutionhealthruleargument_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).msdyn_solutionhealthruleargument_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_solutionhealthruleargument_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).msdyn_solutionhealthruleargument_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_solutionhealthruleargument_ProcessSession": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).msdyn_solutionhealthruleargument_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_solutionhealthruleargument_SyncErrors": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).msdyn_solutionhealthruleargument_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_solutionhealthruleargumentid": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).msdyn_solutionhealthruleargumentid = n.getStringValue(); },
            "msdyn_value": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).msdyn_value = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_solutionhealthruleargument).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_key property value. 
     * @returns a string
     */
    public get msdyn_key() {
        return this._msdyn_key;
    };
    /**
     * Sets the msdyn_key property value. 
     * @param value Value to set for the msdyn_key property.
     */
    public set msdyn_key(value: string | undefined) {
        this._msdyn_key = value;
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
     * Gets the msdyn_SolutionHealthRule property value. 
     * @returns a msdyn_solutionhealthrule
     */
    public get msdyn_SolutionHealthRule() {
        return this._msdyn_SolutionHealthRule;
    };
    /**
     * Sets the msdyn_SolutionHealthRule property value. 
     * @param value Value to set for the msdyn_SolutionHealthRule property.
     */
    public set msdyn_SolutionHealthRule(value: Msdyn_solutionhealthrule | undefined) {
        this._msdyn_SolutionHealthRule = value;
    };
    /**
     * Gets the msdyn_solutionhealthruleargument_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_solutionhealthruleargument_AsyncOperations() {
        return this._msdyn_solutionhealthruleargument_AsyncOperations;
    };
    /**
     * Sets the msdyn_solutionhealthruleargument_AsyncOperations property value. 
     * @param value Value to set for the msdyn_solutionhealthruleargument_AsyncOperations property.
     */
    public set msdyn_solutionhealthruleargument_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_solutionhealthruleargument_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_solutionhealthruleargument_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_solutionhealthruleargument_BulkDeleteFailures() {
        return this._msdyn_solutionhealthruleargument_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_solutionhealthruleargument_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_solutionhealthruleargument_BulkDeleteFailures property.
     */
    public set msdyn_solutionhealthruleargument_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_solutionhealthruleargument_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_solutionhealthruleargument_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_solutionhealthruleargument_DuplicateBaseRecord() {
        return this._msdyn_solutionhealthruleargument_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_solutionhealthruleargument_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_solutionhealthruleargument_DuplicateBaseRecord property.
     */
    public set msdyn_solutionhealthruleargument_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_solutionhealthruleargument_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_solutionhealthruleargument_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_solutionhealthruleargument_DuplicateMatchingRecord() {
        return this._msdyn_solutionhealthruleargument_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_solutionhealthruleargument_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_solutionhealthruleargument_DuplicateMatchingRecord property.
     */
    public set msdyn_solutionhealthruleargument_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_solutionhealthruleargument_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_solutionhealthruleargument_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_solutionhealthruleargument_MailboxTrackingFolders() {
        return this._msdyn_solutionhealthruleargument_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_solutionhealthruleargument_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_solutionhealthruleargument_MailboxTrackingFolders property.
     */
    public set msdyn_solutionhealthruleargument_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_solutionhealthruleargument_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_solutionhealthruleargument_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_solutionhealthruleargument_PrincipalObjectAttributeAccesses() {
        return this._msdyn_solutionhealthruleargument_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_solutionhealthruleargument_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_solutionhealthruleargument_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_solutionhealthruleargument_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_solutionhealthruleargument_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_solutionhealthruleargument_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_solutionhealthruleargument_ProcessSession() {
        return this._msdyn_solutionhealthruleargument_ProcessSession;
    };
    /**
     * Sets the msdyn_solutionhealthruleargument_ProcessSession property value. 
     * @param value Value to set for the msdyn_solutionhealthruleargument_ProcessSession property.
     */
    public set msdyn_solutionhealthruleargument_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_solutionhealthruleargument_ProcessSession = value;
    };
    /**
     * Gets the msdyn_solutionhealthruleargument_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_solutionhealthruleargument_SyncErrors() {
        return this._msdyn_solutionhealthruleargument_SyncErrors;
    };
    /**
     * Sets the msdyn_solutionhealthruleargument_SyncErrors property value. 
     * @param value Value to set for the msdyn_solutionhealthruleargument_SyncErrors property.
     */
    public set msdyn_solutionhealthruleargument_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_solutionhealthruleargument_SyncErrors = value;
    };
    /**
     * Gets the msdyn_solutionhealthruleargumentid property value. 
     * @returns a string
     */
    public get msdyn_solutionhealthruleargumentid() {
        return this._msdyn_solutionhealthruleargumentid;
    };
    /**
     * Sets the msdyn_solutionhealthruleargumentid property value. 
     * @param value Value to set for the msdyn_solutionhealthruleargumentid property.
     */
    public set msdyn_solutionhealthruleargumentid(value: string | undefined) {
        this._msdyn_solutionhealthruleargumentid = value;
    };
    /**
     * Gets the msdyn_value property value. 
     * @returns a string
     */
    public get msdyn_value() {
        return this._msdyn_value;
    };
    /**
     * Sets the msdyn_value property value. 
     * @param value Value to set for the msdyn_value property.
     */
    public set msdyn_value(value: string | undefined) {
        this._msdyn_value = value;
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
        writer.writeStringValue("_msdyn_solutionhealthrule_value", this._msdyn_solutionhealthrule_value);
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
        writer.writeStringValue("msdyn_key", this.msdyn_key);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_solutionhealthrule>("msdyn_SolutionHealthRule", this.msdyn_SolutionHealthRule);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_solutionhealthruleargument_AsyncOperations", this.msdyn_solutionhealthruleargument_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_solutionhealthruleargument_BulkDeleteFailures", this.msdyn_solutionhealthruleargument_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_solutionhealthruleargument_DuplicateBaseRecord", this.msdyn_solutionhealthruleargument_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_solutionhealthruleargument_DuplicateMatchingRecord", this.msdyn_solutionhealthruleargument_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_solutionhealthruleargument_MailboxTrackingFolders", this.msdyn_solutionhealthruleargument_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_solutionhealthruleargument_PrincipalObjectAttributeAccesses", this.msdyn_solutionhealthruleargument_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_solutionhealthruleargument_ProcessSession", this.msdyn_solutionhealthruleargument_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_solutionhealthruleargument_SyncErrors", this.msdyn_solutionhealthruleargument_SyncErrors);
        writer.writeStringValue("msdyn_solutionhealthruleargumentid", this.msdyn_solutionhealthruleargumentid);
        writer.writeStringValue("msdyn_value", this.msdyn_value);
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
