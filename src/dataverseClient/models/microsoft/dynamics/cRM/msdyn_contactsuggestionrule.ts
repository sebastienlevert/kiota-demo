import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_contactsuggestionrulesetFromDiscriminatorValue} from './createMsdyn_contactsuggestionrulesetFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_contactsuggestionruleset, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_contactsuggestionrule extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_contactsuggestionrulesetid_value?: string | undefined;
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
    private _msdyn_contactsuggestionrule_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_contactsuggestionrule_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_contactsuggestionrule_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_contactsuggestionrule_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_contactsuggestionrule_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_contactsuggestionrule_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_contactsuggestionrule_ProcessSession?: Processsession[] | undefined;
    private _msdyn_contactsuggestionrule_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_contactsuggestionruleid?: string | undefined;
    private _msdyn_contactsuggestionrulesetid?: Msdyn_contactsuggestionruleset | undefined;
    private _msdyn_customactioninputs?: string | undefined;
    private _msdyn_customactionname?: string | undefined;
    private _msdyn_descriptiontemplate?: string | undefined;
    private _msdyn_descriptiontemplateplaceholders?: string | undefined;
    private _msdyn_fetchxml?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_pathtotarget?: string | undefined;
    private _msdyn_rank?: number | undefined;
    private _msdyn_ruletype?: number | undefined;
    private _msdyn_top?: number | undefined;
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
     * Gets the _msdyn_contactsuggestionrulesetid_value property value. 
     * @returns a string
     */
    public get _msdyn_contactsuggestionrulesetid_value() {
        return this.__msdyn_contactsuggestionrulesetid_value;
    };
    /**
     * Sets the _msdyn_contactsuggestionrulesetid_value property value. 
     * @param value Value to set for the _msdyn_contactsuggestionrulesetid_value property.
     */
    public set _msdyn_contactsuggestionrulesetid_value(value: string | undefined) {
        this.__msdyn_contactsuggestionrulesetid_value = value;
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
     * Instantiates a new msdyn_contactsuggestionrule and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_contactsuggestionrulesetid_value": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule)._msdyn_contactsuggestionrulesetid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule)._owninguser_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_contactsuggestionrule_AsyncOperations": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_contactsuggestionrule_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_contactsuggestionrule_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_contactsuggestionrule_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_contactsuggestionrule_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_contactsuggestionrule_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_contactsuggestionrule_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_contactsuggestionrule_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_contactsuggestionrule_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_contactsuggestionrule_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_contactsuggestionrule_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_contactsuggestionrule_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_contactsuggestionrule_ProcessSession": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_contactsuggestionrule_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_contactsuggestionrule_SyncErrors": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_contactsuggestionrule_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_contactsuggestionruleid": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_contactsuggestionruleid = n.getStringValue(); },
            "msdyn_contactsuggestionrulesetid": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_contactsuggestionrulesetid = n.getObjectValue<Msdyn_contactsuggestionruleset>(createMsdyn_contactsuggestionrulesetFromDiscriminatorValue); },
            "msdyn_customactioninputs": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_customactioninputs = n.getStringValue(); },
            "msdyn_customactionname": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_customactionname = n.getStringValue(); },
            "msdyn_descriptiontemplate": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_descriptiontemplate = n.getStringValue(); },
            "msdyn_descriptiontemplateplaceholders": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_descriptiontemplateplaceholders = n.getStringValue(); },
            "msdyn_fetchxml": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_fetchxml = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_name = n.getStringValue(); },
            "msdyn_pathtotarget": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_pathtotarget = n.getStringValue(); },
            "msdyn_rank": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_rank = n.getNumberValue(); },
            "msdyn_ruletype": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_ruletype = n.getNumberValue(); },
            "msdyn_top": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_top = n.getNumberValue(); },
            "msdyn_uniquename": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).msdyn_uniquename = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_contactsuggestionrule).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_contactsuggestionrule_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_contactsuggestionrule_AsyncOperations() {
        return this._msdyn_contactsuggestionrule_AsyncOperations;
    };
    /**
     * Sets the msdyn_contactsuggestionrule_AsyncOperations property value. 
     * @param value Value to set for the msdyn_contactsuggestionrule_AsyncOperations property.
     */
    public set msdyn_contactsuggestionrule_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_contactsuggestionrule_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_contactsuggestionrule_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_contactsuggestionrule_BulkDeleteFailures() {
        return this._msdyn_contactsuggestionrule_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_contactsuggestionrule_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_contactsuggestionrule_BulkDeleteFailures property.
     */
    public set msdyn_contactsuggestionrule_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_contactsuggestionrule_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_contactsuggestionrule_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_contactsuggestionrule_DuplicateBaseRecord() {
        return this._msdyn_contactsuggestionrule_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_contactsuggestionrule_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_contactsuggestionrule_DuplicateBaseRecord property.
     */
    public set msdyn_contactsuggestionrule_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_contactsuggestionrule_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_contactsuggestionrule_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_contactsuggestionrule_DuplicateMatchingRecord() {
        return this._msdyn_contactsuggestionrule_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_contactsuggestionrule_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_contactsuggestionrule_DuplicateMatchingRecord property.
     */
    public set msdyn_contactsuggestionrule_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_contactsuggestionrule_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_contactsuggestionrule_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_contactsuggestionrule_MailboxTrackingFolders() {
        return this._msdyn_contactsuggestionrule_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_contactsuggestionrule_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_contactsuggestionrule_MailboxTrackingFolders property.
     */
    public set msdyn_contactsuggestionrule_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_contactsuggestionrule_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_contactsuggestionrule_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_contactsuggestionrule_PrincipalObjectAttributeAccesses() {
        return this._msdyn_contactsuggestionrule_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_contactsuggestionrule_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_contactsuggestionrule_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_contactsuggestionrule_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_contactsuggestionrule_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_contactsuggestionrule_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_contactsuggestionrule_ProcessSession() {
        return this._msdyn_contactsuggestionrule_ProcessSession;
    };
    /**
     * Sets the msdyn_contactsuggestionrule_ProcessSession property value. 
     * @param value Value to set for the msdyn_contactsuggestionrule_ProcessSession property.
     */
    public set msdyn_contactsuggestionrule_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_contactsuggestionrule_ProcessSession = value;
    };
    /**
     * Gets the msdyn_contactsuggestionrule_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_contactsuggestionrule_SyncErrors() {
        return this._msdyn_contactsuggestionrule_SyncErrors;
    };
    /**
     * Sets the msdyn_contactsuggestionrule_SyncErrors property value. 
     * @param value Value to set for the msdyn_contactsuggestionrule_SyncErrors property.
     */
    public set msdyn_contactsuggestionrule_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_contactsuggestionrule_SyncErrors = value;
    };
    /**
     * Gets the msdyn_contactsuggestionruleid property value. 
     * @returns a string
     */
    public get msdyn_contactsuggestionruleid() {
        return this._msdyn_contactsuggestionruleid;
    };
    /**
     * Sets the msdyn_contactsuggestionruleid property value. 
     * @param value Value to set for the msdyn_contactsuggestionruleid property.
     */
    public set msdyn_contactsuggestionruleid(value: string | undefined) {
        this._msdyn_contactsuggestionruleid = value;
    };
    /**
     * Gets the msdyn_contactsuggestionrulesetid property value. 
     * @returns a msdyn_contactsuggestionruleset
     */
    public get msdyn_contactsuggestionrulesetid() {
        return this._msdyn_contactsuggestionrulesetid;
    };
    /**
     * Sets the msdyn_contactsuggestionrulesetid property value. 
     * @param value Value to set for the msdyn_contactsuggestionrulesetid property.
     */
    public set msdyn_contactsuggestionrulesetid(value: Msdyn_contactsuggestionruleset | undefined) {
        this._msdyn_contactsuggestionrulesetid = value;
    };
    /**
     * Gets the msdyn_customactioninputs property value. 
     * @returns a string
     */
    public get msdyn_customactioninputs() {
        return this._msdyn_customactioninputs;
    };
    /**
     * Sets the msdyn_customactioninputs property value. 
     * @param value Value to set for the msdyn_customactioninputs property.
     */
    public set msdyn_customactioninputs(value: string | undefined) {
        this._msdyn_customactioninputs = value;
    };
    /**
     * Gets the msdyn_customactionname property value. 
     * @returns a string
     */
    public get msdyn_customactionname() {
        return this._msdyn_customactionname;
    };
    /**
     * Sets the msdyn_customactionname property value. 
     * @param value Value to set for the msdyn_customactionname property.
     */
    public set msdyn_customactionname(value: string | undefined) {
        this._msdyn_customactionname = value;
    };
    /**
     * Gets the msdyn_descriptiontemplate property value. 
     * @returns a string
     */
    public get msdyn_descriptiontemplate() {
        return this._msdyn_descriptiontemplate;
    };
    /**
     * Sets the msdyn_descriptiontemplate property value. 
     * @param value Value to set for the msdyn_descriptiontemplate property.
     */
    public set msdyn_descriptiontemplate(value: string | undefined) {
        this._msdyn_descriptiontemplate = value;
    };
    /**
     * Gets the msdyn_descriptiontemplateplaceholders property value. 
     * @returns a string
     */
    public get msdyn_descriptiontemplateplaceholders() {
        return this._msdyn_descriptiontemplateplaceholders;
    };
    /**
     * Sets the msdyn_descriptiontemplateplaceholders property value. 
     * @param value Value to set for the msdyn_descriptiontemplateplaceholders property.
     */
    public set msdyn_descriptiontemplateplaceholders(value: string | undefined) {
        this._msdyn_descriptiontemplateplaceholders = value;
    };
    /**
     * Gets the msdyn_fetchxml property value. 
     * @returns a string
     */
    public get msdyn_fetchxml() {
        return this._msdyn_fetchxml;
    };
    /**
     * Sets the msdyn_fetchxml property value. 
     * @param value Value to set for the msdyn_fetchxml property.
     */
    public set msdyn_fetchxml(value: string | undefined) {
        this._msdyn_fetchxml = value;
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
     * Gets the msdyn_pathtotarget property value. 
     * @returns a string
     */
    public get msdyn_pathtotarget() {
        return this._msdyn_pathtotarget;
    };
    /**
     * Sets the msdyn_pathtotarget property value. 
     * @param value Value to set for the msdyn_pathtotarget property.
     */
    public set msdyn_pathtotarget(value: string | undefined) {
        this._msdyn_pathtotarget = value;
    };
    /**
     * Gets the msdyn_rank property value. 
     * @returns a integer
     */
    public get msdyn_rank() {
        return this._msdyn_rank;
    };
    /**
     * Sets the msdyn_rank property value. 
     * @param value Value to set for the msdyn_rank property.
     */
    public set msdyn_rank(value: number | undefined) {
        this._msdyn_rank = value;
    };
    /**
     * Gets the msdyn_ruletype property value. 
     * @returns a integer
     */
    public get msdyn_ruletype() {
        return this._msdyn_ruletype;
    };
    /**
     * Sets the msdyn_ruletype property value. 
     * @param value Value to set for the msdyn_ruletype property.
     */
    public set msdyn_ruletype(value: number | undefined) {
        this._msdyn_ruletype = value;
    };
    /**
     * Gets the msdyn_top property value. 
     * @returns a integer
     */
    public get msdyn_top() {
        return this._msdyn_top;
    };
    /**
     * Sets the msdyn_top property value. 
     * @param value Value to set for the msdyn_top property.
     */
    public set msdyn_top(value: number | undefined) {
        this._msdyn_top = value;
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
        writer.writeStringValue("_msdyn_contactsuggestionrulesetid_value", this._msdyn_contactsuggestionrulesetid_value);
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
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_contactsuggestionrule_AsyncOperations", this.msdyn_contactsuggestionrule_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_contactsuggestionrule_BulkDeleteFailures", this.msdyn_contactsuggestionrule_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_contactsuggestionrule_DuplicateBaseRecord", this.msdyn_contactsuggestionrule_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_contactsuggestionrule_DuplicateMatchingRecord", this.msdyn_contactsuggestionrule_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_contactsuggestionrule_MailboxTrackingFolders", this.msdyn_contactsuggestionrule_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_contactsuggestionrule_PrincipalObjectAttributeAccesses", this.msdyn_contactsuggestionrule_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_contactsuggestionrule_ProcessSession", this.msdyn_contactsuggestionrule_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_contactsuggestionrule_SyncErrors", this.msdyn_contactsuggestionrule_SyncErrors);
        writer.writeStringValue("msdyn_contactsuggestionruleid", this.msdyn_contactsuggestionruleid);
        writer.writeObjectValue<Msdyn_contactsuggestionruleset>("msdyn_contactsuggestionrulesetid", this.msdyn_contactsuggestionrulesetid);
        writer.writeStringValue("msdyn_customactioninputs", this.msdyn_customactioninputs);
        writer.writeStringValue("msdyn_customactionname", this.msdyn_customactionname);
        writer.writeStringValue("msdyn_descriptiontemplate", this.msdyn_descriptiontemplate);
        writer.writeStringValue("msdyn_descriptiontemplateplaceholders", this.msdyn_descriptiontemplateplaceholders);
        writer.writeStringValue("msdyn_fetchxml", this.msdyn_fetchxml);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_pathtotarget", this.msdyn_pathtotarget);
        writer.writeNumberValue("msdyn_rank", this.msdyn_rank);
        writer.writeNumberValue("msdyn_ruletype", this.msdyn_ruletype);
        writer.writeNumberValue("msdyn_top", this.msdyn_top);
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
