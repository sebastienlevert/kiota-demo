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

export class Featurecontrolsetting extends Crmbaseentity implements Parsable {
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
    private _content?: string | undefined;
    private _countoffcs?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _featurecontrolsetting_AsyncOperations?: Asyncoperation[] | undefined;
    private _featurecontrolsetting_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _featurecontrolsetting_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _featurecontrolsetting_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _featurecontrolsetting_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _featurecontrolsetting_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _featurecontrolsetting_ProcessSession?: Processsession[] | undefined;
    private _featurecontrolsetting_SyncErrors?: Syncerror[] | undefined;
    private _featurecontrolsettingid?: string | undefined;
    private _fullname?: string | undefined;
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
    private _publickeytoken?: string | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _uniquename?: string | undefined;
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
     * Instantiates a new featurecontrolsetting and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the content property value. 
     * @returns a string
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. 
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
    };
    /**
     * Gets the countoffcs property value. 
     * @returns a integer
     */
    public get countoffcs() {
        return this._countoffcs;
    };
    /**
     * Sets the countoffcs property value. 
     * @param value Value to set for the countoffcs property.
     */
    public set countoffcs(value: number | undefined) {
        this._countoffcs = value;
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
     * Gets the featurecontrolsetting_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get featurecontrolsetting_AsyncOperations() {
        return this._featurecontrolsetting_AsyncOperations;
    };
    /**
     * Sets the featurecontrolsetting_AsyncOperations property value. 
     * @param value Value to set for the featurecontrolsetting_AsyncOperations property.
     */
    public set featurecontrolsetting_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._featurecontrolsetting_AsyncOperations = value;
    };
    /**
     * Gets the featurecontrolsetting_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get featurecontrolsetting_BulkDeleteFailures() {
        return this._featurecontrolsetting_BulkDeleteFailures;
    };
    /**
     * Sets the featurecontrolsetting_BulkDeleteFailures property value. 
     * @param value Value to set for the featurecontrolsetting_BulkDeleteFailures property.
     */
    public set featurecontrolsetting_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._featurecontrolsetting_BulkDeleteFailures = value;
    };
    /**
     * Gets the featurecontrolsetting_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get featurecontrolsetting_DuplicateBaseRecord() {
        return this._featurecontrolsetting_DuplicateBaseRecord;
    };
    /**
     * Sets the featurecontrolsetting_DuplicateBaseRecord property value. 
     * @param value Value to set for the featurecontrolsetting_DuplicateBaseRecord property.
     */
    public set featurecontrolsetting_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._featurecontrolsetting_DuplicateBaseRecord = value;
    };
    /**
     * Gets the featurecontrolsetting_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get featurecontrolsetting_DuplicateMatchingRecord() {
        return this._featurecontrolsetting_DuplicateMatchingRecord;
    };
    /**
     * Sets the featurecontrolsetting_DuplicateMatchingRecord property value. 
     * @param value Value to set for the featurecontrolsetting_DuplicateMatchingRecord property.
     */
    public set featurecontrolsetting_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._featurecontrolsetting_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the featurecontrolsetting_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get featurecontrolsetting_MailboxTrackingFolders() {
        return this._featurecontrolsetting_MailboxTrackingFolders;
    };
    /**
     * Sets the featurecontrolsetting_MailboxTrackingFolders property value. 
     * @param value Value to set for the featurecontrolsetting_MailboxTrackingFolders property.
     */
    public set featurecontrolsetting_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._featurecontrolsetting_MailboxTrackingFolders = value;
    };
    /**
     * Gets the featurecontrolsetting_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get featurecontrolsetting_PrincipalObjectAttributeAccesses() {
        return this._featurecontrolsetting_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the featurecontrolsetting_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the featurecontrolsetting_PrincipalObjectAttributeAccesses property.
     */
    public set featurecontrolsetting_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._featurecontrolsetting_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the featurecontrolsetting_ProcessSession property value. 
     * @returns a processsession
     */
    public get featurecontrolsetting_ProcessSession() {
        return this._featurecontrolsetting_ProcessSession;
    };
    /**
     * Sets the featurecontrolsetting_ProcessSession property value. 
     * @param value Value to set for the featurecontrolsetting_ProcessSession property.
     */
    public set featurecontrolsetting_ProcessSession(value: Processsession[] | undefined) {
        this._featurecontrolsetting_ProcessSession = value;
    };
    /**
     * Gets the featurecontrolsetting_SyncErrors property value. 
     * @returns a syncerror
     */
    public get featurecontrolsetting_SyncErrors() {
        return this._featurecontrolsetting_SyncErrors;
    };
    /**
     * Sets the featurecontrolsetting_SyncErrors property value. 
     * @param value Value to set for the featurecontrolsetting_SyncErrors property.
     */
    public set featurecontrolsetting_SyncErrors(value: Syncerror[] | undefined) {
        this._featurecontrolsetting_SyncErrors = value;
    };
    /**
     * Gets the featurecontrolsettingid property value. 
     * @returns a string
     */
    public get featurecontrolsettingid() {
        return this._featurecontrolsettingid;
    };
    /**
     * Sets the featurecontrolsettingid property value. 
     * @param value Value to set for the featurecontrolsettingid property.
     */
    public set featurecontrolsettingid(value: string | undefined) {
        this._featurecontrolsettingid = value;
    };
    /**
     * Gets the fullname property value. 
     * @returns a string
     */
    public get fullname() {
        return this._fullname;
    };
    /**
     * Sets the fullname property value. 
     * @param value Value to set for the fullname property.
     */
    public set fullname(value: string | undefined) {
        this._fullname = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Featurecontrolsetting)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Featurecontrolsetting)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Featurecontrolsetting)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Featurecontrolsetting)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Featurecontrolsetting)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Featurecontrolsetting)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Featurecontrolsetting)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Featurecontrolsetting)._owninguser_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Featurecontrolsetting).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Featurecontrolsetting).componentstate = n.getNumberValue(); },
            "content": (o, n) => { (o as unknown as Featurecontrolsetting).content = n.getStringValue(); },
            "countoffcs": (o, n) => { (o as unknown as Featurecontrolsetting).countoffcs = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Featurecontrolsetting).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Featurecontrolsetting).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Featurecontrolsetting).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "featurecontrolsetting_AsyncOperations": (o, n) => { (o as unknown as Featurecontrolsetting).featurecontrolsetting_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "featurecontrolsetting_BulkDeleteFailures": (o, n) => { (o as unknown as Featurecontrolsetting).featurecontrolsetting_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "featurecontrolsetting_DuplicateBaseRecord": (o, n) => { (o as unknown as Featurecontrolsetting).featurecontrolsetting_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "featurecontrolsetting_DuplicateMatchingRecord": (o, n) => { (o as unknown as Featurecontrolsetting).featurecontrolsetting_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "featurecontrolsetting_MailboxTrackingFolders": (o, n) => { (o as unknown as Featurecontrolsetting).featurecontrolsetting_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "featurecontrolsetting_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Featurecontrolsetting).featurecontrolsetting_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "featurecontrolsetting_ProcessSession": (o, n) => { (o as unknown as Featurecontrolsetting).featurecontrolsetting_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "featurecontrolsetting_SyncErrors": (o, n) => { (o as unknown as Featurecontrolsetting).featurecontrolsetting_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "featurecontrolsettingid": (o, n) => { (o as unknown as Featurecontrolsetting).featurecontrolsettingid = n.getStringValue(); },
            "fullname": (o, n) => { (o as unknown as Featurecontrolsetting).fullname = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Featurecontrolsetting).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Featurecontrolsetting).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Featurecontrolsetting).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Featurecontrolsetting).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Featurecontrolsetting).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Featurecontrolsetting).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Featurecontrolsetting).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Featurecontrolsetting).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Featurecontrolsetting).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Featurecontrolsetting).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Featurecontrolsetting).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Featurecontrolsetting).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Featurecontrolsetting).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "publickeytoken": (o, n) => { (o as unknown as Featurecontrolsetting).publickeytoken = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Featurecontrolsetting).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Featurecontrolsetting).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Featurecontrolsetting).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Featurecontrolsetting).timezoneruleversionnumber = n.getNumberValue(); },
            "uniquename": (o, n) => { (o as unknown as Featurecontrolsetting).uniquename = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Featurecontrolsetting).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Featurecontrolsetting).versionnumber = n.getNumberValue(); },
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
     * Gets the publickeytoken property value. 
     * @returns a string
     */
    public get publickeytoken() {
        return this._publickeytoken;
    };
    /**
     * Sets the publickeytoken property value. 
     * @param value Value to set for the publickeytoken property.
     */
    public set publickeytoken(value: string | undefined) {
        this._publickeytoken = value;
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
        writer.writeStringValue("content", this.content);
        writer.writeNumberValue("countoffcs", this.countoffcs);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeCollectionOfObjectValues<Asyncoperation>("featurecontrolsetting_AsyncOperations", this.featurecontrolsetting_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("featurecontrolsetting_BulkDeleteFailures", this.featurecontrolsetting_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("featurecontrolsetting_DuplicateBaseRecord", this.featurecontrolsetting_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("featurecontrolsetting_DuplicateMatchingRecord", this.featurecontrolsetting_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("featurecontrolsetting_MailboxTrackingFolders", this.featurecontrolsetting_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("featurecontrolsetting_PrincipalObjectAttributeAccesses", this.featurecontrolsetting_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("featurecontrolsetting_ProcessSession", this.featurecontrolsetting_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("featurecontrolsetting_SyncErrors", this.featurecontrolsetting_SyncErrors);
        writer.writeStringValue("featurecontrolsettingid", this.featurecontrolsettingid);
        writer.writeStringValue("fullname", this.fullname);
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
        writer.writeStringValue("publickeytoken", this.publickeytoken);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("uniquename", this.uniquename);
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
     * Gets the uniquename property value. 
     * @returns a string
     */
    public get uniquename() {
        return this._uniquename;
    };
    /**
     * Sets the uniquename property value. 
     * @param value Value to set for the uniquename property.
     */
    public set uniquename(value: string | undefined) {
        this._uniquename = value;
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
