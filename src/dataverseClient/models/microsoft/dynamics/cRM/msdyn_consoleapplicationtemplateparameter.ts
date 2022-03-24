import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_consoleapplicationtemplateFromDiscriminatorValue} from './createMsdyn_consoleapplicationtemplateFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_consoleapplicationtemplate, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_consoleapplicationtemplateparameter extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
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
    private _msdyn_consoleapplicationtemplateparameter_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_consoleapplicationtemplateparameter_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_consoleapplicationtemplateparameter_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_consoleapplicationtemplateparameter_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_consoleapplicationtemplateparameter_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_consoleapplicationtemplateparameter_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_consoleapplicationtemplateparameter_ProcessSession?: Processsession[] | undefined;
    private _msdyn_consoleapplicationtemplateparameter_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_consoleapplicationtemplateparameterid?: string | undefined;
    private _msdyn_isruntime?: boolean | undefined;
    private _msdyn_msdyn_consoleapplicationtemplate_msdyn_co?: Msdyn_consoleapplicationtemplate[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_parametername?: string | undefined;
    private _msdyn_runtimetype?: number | undefined;
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
     * Instantiates a new msdyn_consoleapplicationtemplateparameter and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_consoleapplicationtemplateparameter_AsyncOperations": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).msdyn_consoleapplicationtemplateparameter_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_consoleapplicationtemplateparameter_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).msdyn_consoleapplicationtemplateparameter_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_consoleapplicationtemplateparameter_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).msdyn_consoleapplicationtemplateparameter_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_consoleapplicationtemplateparameter_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).msdyn_consoleapplicationtemplateparameter_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_consoleapplicationtemplateparameter_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).msdyn_consoleapplicationtemplateparameter_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_consoleapplicationtemplateparameter_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).msdyn_consoleapplicationtemplateparameter_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_consoleapplicationtemplateparameter_ProcessSession": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).msdyn_consoleapplicationtemplateparameter_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_consoleapplicationtemplateparameter_SyncErrors": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).msdyn_consoleapplicationtemplateparameter_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_consoleapplicationtemplateparameterid": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).msdyn_consoleapplicationtemplateparameterid = n.getStringValue(); },
            "msdyn_isruntime": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).msdyn_isruntime = n.getBooleanValue(); },
            "msdyn_msdyn_consoleapplicationtemplate_msdyn_co": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).msdyn_msdyn_consoleapplicationtemplate_msdyn_co = n.getCollectionOfObjectValues<Msdyn_consoleapplicationtemplate>(createMsdyn_consoleapplicationtemplateFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).msdyn_name = n.getStringValue(); },
            "msdyn_parametername": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).msdyn_parametername = n.getStringValue(); },
            "msdyn_runtimetype": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).msdyn_runtimetype = n.getNumberValue(); },
            "msdyn_value": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).msdyn_value = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_consoleapplicationtemplateparameter).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_consoleapplicationtemplateparameter_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_consoleapplicationtemplateparameter_AsyncOperations() {
        return this._msdyn_consoleapplicationtemplateparameter_AsyncOperations;
    };
    /**
     * Sets the msdyn_consoleapplicationtemplateparameter_AsyncOperations property value. 
     * @param value Value to set for the msdyn_consoleapplicationtemplateparameter_AsyncOperations property.
     */
    public set msdyn_consoleapplicationtemplateparameter_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_consoleapplicationtemplateparameter_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_consoleapplicationtemplateparameter_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_consoleapplicationtemplateparameter_BulkDeleteFailures() {
        return this._msdyn_consoleapplicationtemplateparameter_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_consoleapplicationtemplateparameter_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_consoleapplicationtemplateparameter_BulkDeleteFailures property.
     */
    public set msdyn_consoleapplicationtemplateparameter_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_consoleapplicationtemplateparameter_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_consoleapplicationtemplateparameter_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_consoleapplicationtemplateparameter_DuplicateBaseRecord() {
        return this._msdyn_consoleapplicationtemplateparameter_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_consoleapplicationtemplateparameter_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_consoleapplicationtemplateparameter_DuplicateBaseRecord property.
     */
    public set msdyn_consoleapplicationtemplateparameter_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_consoleapplicationtemplateparameter_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_consoleapplicationtemplateparameter_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_consoleapplicationtemplateparameter_DuplicateMatchingRecord() {
        return this._msdyn_consoleapplicationtemplateparameter_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_consoleapplicationtemplateparameter_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_consoleapplicationtemplateparameter_DuplicateMatchingRecord property.
     */
    public set msdyn_consoleapplicationtemplateparameter_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_consoleapplicationtemplateparameter_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_consoleapplicationtemplateparameter_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_consoleapplicationtemplateparameter_MailboxTrackingFolders() {
        return this._msdyn_consoleapplicationtemplateparameter_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_consoleapplicationtemplateparameter_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_consoleapplicationtemplateparameter_MailboxTrackingFolders property.
     */
    public set msdyn_consoleapplicationtemplateparameter_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_consoleapplicationtemplateparameter_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_consoleapplicationtemplateparameter_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_consoleapplicationtemplateparameter_PrincipalObjectAttributeAccesses() {
        return this._msdyn_consoleapplicationtemplateparameter_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_consoleapplicationtemplateparameter_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_consoleapplicationtemplateparameter_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_consoleapplicationtemplateparameter_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_consoleapplicationtemplateparameter_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_consoleapplicationtemplateparameter_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_consoleapplicationtemplateparameter_ProcessSession() {
        return this._msdyn_consoleapplicationtemplateparameter_ProcessSession;
    };
    /**
     * Sets the msdyn_consoleapplicationtemplateparameter_ProcessSession property value. 
     * @param value Value to set for the msdyn_consoleapplicationtemplateparameter_ProcessSession property.
     */
    public set msdyn_consoleapplicationtemplateparameter_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_consoleapplicationtemplateparameter_ProcessSession = value;
    };
    /**
     * Gets the msdyn_consoleapplicationtemplateparameter_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_consoleapplicationtemplateparameter_SyncErrors() {
        return this._msdyn_consoleapplicationtemplateparameter_SyncErrors;
    };
    /**
     * Sets the msdyn_consoleapplicationtemplateparameter_SyncErrors property value. 
     * @param value Value to set for the msdyn_consoleapplicationtemplateparameter_SyncErrors property.
     */
    public set msdyn_consoleapplicationtemplateparameter_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_consoleapplicationtemplateparameter_SyncErrors = value;
    };
    /**
     * Gets the msdyn_consoleapplicationtemplateparameterid property value. 
     * @returns a string
     */
    public get msdyn_consoleapplicationtemplateparameterid() {
        return this._msdyn_consoleapplicationtemplateparameterid;
    };
    /**
     * Sets the msdyn_consoleapplicationtemplateparameterid property value. 
     * @param value Value to set for the msdyn_consoleapplicationtemplateparameterid property.
     */
    public set msdyn_consoleapplicationtemplateparameterid(value: string | undefined) {
        this._msdyn_consoleapplicationtemplateparameterid = value;
    };
    /**
     * Gets the msdyn_isruntime property value. 
     * @returns a boolean
     */
    public get msdyn_isruntime() {
        return this._msdyn_isruntime;
    };
    /**
     * Sets the msdyn_isruntime property value. 
     * @param value Value to set for the msdyn_isruntime property.
     */
    public set msdyn_isruntime(value: boolean | undefined) {
        this._msdyn_isruntime = value;
    };
    /**
     * Gets the msdyn_msdyn_consoleapplicationtemplate_msdyn_co property value. 
     * @returns a msdyn_consoleapplicationtemplate
     */
    public get msdyn_msdyn_consoleapplicationtemplate_msdyn_co() {
        return this._msdyn_msdyn_consoleapplicationtemplate_msdyn_co;
    };
    /**
     * Sets the msdyn_msdyn_consoleapplicationtemplate_msdyn_co property value. 
     * @param value Value to set for the msdyn_msdyn_consoleapplicationtemplate_msdyn_co property.
     */
    public set msdyn_msdyn_consoleapplicationtemplate_msdyn_co(value: Msdyn_consoleapplicationtemplate[] | undefined) {
        this._msdyn_msdyn_consoleapplicationtemplate_msdyn_co = value;
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
     * Gets the msdyn_parametername property value. 
     * @returns a string
     */
    public get msdyn_parametername() {
        return this._msdyn_parametername;
    };
    /**
     * Sets the msdyn_parametername property value. 
     * @param value Value to set for the msdyn_parametername property.
     */
    public set msdyn_parametername(value: string | undefined) {
        this._msdyn_parametername = value;
    };
    /**
     * Gets the msdyn_runtimetype property value. 
     * @returns a integer
     */
    public get msdyn_runtimetype() {
        return this._msdyn_runtimetype;
    };
    /**
     * Sets the msdyn_runtimetype property value. 
     * @param value Value to set for the msdyn_runtimetype property.
     */
    public set msdyn_runtimetype(value: number | undefined) {
        this._msdyn_runtimetype = value;
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
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_consoleapplicationtemplateparameter_AsyncOperations", this.msdyn_consoleapplicationtemplateparameter_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_consoleapplicationtemplateparameter_BulkDeleteFailures", this.msdyn_consoleapplicationtemplateparameter_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_consoleapplicationtemplateparameter_DuplicateBaseRecord", this.msdyn_consoleapplicationtemplateparameter_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_consoleapplicationtemplateparameter_DuplicateMatchingRecord", this.msdyn_consoleapplicationtemplateparameter_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_consoleapplicationtemplateparameter_MailboxTrackingFolders", this.msdyn_consoleapplicationtemplateparameter_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_consoleapplicationtemplateparameter_PrincipalObjectAttributeAccesses", this.msdyn_consoleapplicationtemplateparameter_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_consoleapplicationtemplateparameter_ProcessSession", this.msdyn_consoleapplicationtemplateparameter_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_consoleapplicationtemplateparameter_SyncErrors", this.msdyn_consoleapplicationtemplateparameter_SyncErrors);
        writer.writeStringValue("msdyn_consoleapplicationtemplateparameterid", this.msdyn_consoleapplicationtemplateparameterid);
        writer.writeBooleanValue("msdyn_isruntime", this.msdyn_isruntime);
        writer.writeCollectionOfObjectValues<Msdyn_consoleapplicationtemplate>("msdyn_msdyn_consoleapplicationtemplate_msdyn_co", this.msdyn_msdyn_consoleapplicationtemplate_msdyn_co);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_parametername", this.msdyn_parametername);
        writer.writeNumberValue("msdyn_runtimetype", this.msdyn_runtimetype);
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
