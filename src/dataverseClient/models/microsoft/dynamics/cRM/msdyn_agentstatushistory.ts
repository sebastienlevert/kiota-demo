import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_presenceFromDiscriminatorValue} from './createMsdyn_presenceFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_presence, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_agentstatushistory extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_agentid_value?: string | undefined;
    private __msdyn_presenceid_value?: string | undefined;
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
    private _msdyn_Agentid?: Systemuser | undefined;
    private _msdyn_agentstatushistory_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_agentstatushistory_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_agentstatushistory_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_agentstatushistory_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_agentstatushistory_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_agentstatushistory_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_agentstatushistory_ProcessSession?: Processsession[] | undefined;
    private _msdyn_agentstatushistory_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_agentstatushistoryid?: string | undefined;
    private _msdyn_availablecapacity?: number | undefined;
    private _msdyn_endtime?: Date | undefined;
    private _msdyn_isagentloggedin?: boolean | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_presenceid?: Msdyn_presence | undefined;
    private _msdyn_starttime?: Date | undefined;
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
     * Gets the _msdyn_agentid_value property value. 
     * @returns a string
     */
    public get _msdyn_agentid_value() {
        return this.__msdyn_agentid_value;
    };
    /**
     * Sets the _msdyn_agentid_value property value. 
     * @param value Value to set for the _msdyn_agentid_value property.
     */
    public set _msdyn_agentid_value(value: string | undefined) {
        this.__msdyn_agentid_value = value;
    };
    /**
     * Gets the _msdyn_presenceid_value property value. 
     * @returns a string
     */
    public get _msdyn_presenceid_value() {
        return this.__msdyn_presenceid_value;
    };
    /**
     * Sets the _msdyn_presenceid_value property value. 
     * @param value Value to set for the _msdyn_presenceid_value property.
     */
    public set _msdyn_presenceid_value(value: string | undefined) {
        this.__msdyn_presenceid_value = value;
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
     * Instantiates a new msdyn_agentstatushistory and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_agentstatushistory)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_agentstatushistory)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_agentstatushistory)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_agentstatushistory)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_agentid_value": (o, n) => { (o as unknown as Msdyn_agentstatushistory)._msdyn_agentid_value = n.getStringValue(); },
            "_msdyn_presenceid_value": (o, n) => { (o as unknown as Msdyn_agentstatushistory)._msdyn_presenceid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_agentstatushistory)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_agentstatushistory)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_agentstatushistory)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_agentstatushistory)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_agentstatushistory).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_agentstatushistory).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_agentstatushistory).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_agentstatushistory).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_agentstatushistory).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_agentstatushistory).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_agentstatushistory).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_Agentid": (o, n) => { (o as unknown as Msdyn_agentstatushistory).msdyn_Agentid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_agentstatushistory_AsyncOperations": (o, n) => { (o as unknown as Msdyn_agentstatushistory).msdyn_agentstatushistory_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_agentstatushistory_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_agentstatushistory).msdyn_agentstatushistory_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_agentstatushistory_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_agentstatushistory).msdyn_agentstatushistory_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_agentstatushistory_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_agentstatushistory).msdyn_agentstatushistory_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_agentstatushistory_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_agentstatushistory).msdyn_agentstatushistory_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_agentstatushistory_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_agentstatushistory).msdyn_agentstatushistory_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_agentstatushistory_ProcessSession": (o, n) => { (o as unknown as Msdyn_agentstatushistory).msdyn_agentstatushistory_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_agentstatushistory_SyncErrors": (o, n) => { (o as unknown as Msdyn_agentstatushistory).msdyn_agentstatushistory_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_agentstatushistoryid": (o, n) => { (o as unknown as Msdyn_agentstatushistory).msdyn_agentstatushistoryid = n.getStringValue(); },
            "msdyn_availablecapacity": (o, n) => { (o as unknown as Msdyn_agentstatushistory).msdyn_availablecapacity = n.getNumberValue(); },
            "msdyn_endtime": (o, n) => { (o as unknown as Msdyn_agentstatushistory).msdyn_endtime = n.getDateValue(); },
            "msdyn_isagentloggedin": (o, n) => { (o as unknown as Msdyn_agentstatushistory).msdyn_isagentloggedin = n.getBooleanValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_agentstatushistory).msdyn_name = n.getStringValue(); },
            "msdyn_presenceid": (o, n) => { (o as unknown as Msdyn_agentstatushistory).msdyn_presenceid = n.getObjectValue<Msdyn_presence>(createMsdyn_presenceFromDiscriminatorValue); },
            "msdyn_starttime": (o, n) => { (o as unknown as Msdyn_agentstatushistory).msdyn_starttime = n.getDateValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_agentstatushistory).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_agentstatushistory).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_agentstatushistory).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_agentstatushistory).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_agentstatushistory).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_agentstatushistory).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_agentstatushistory).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_agentstatushistory).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_agentstatushistory).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_agentstatushistory).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_Agentid property value. 
     * @returns a systemuser
     */
    public get msdyn_Agentid() {
        return this._msdyn_Agentid;
    };
    /**
     * Sets the msdyn_Agentid property value. 
     * @param value Value to set for the msdyn_Agentid property.
     */
    public set msdyn_Agentid(value: Systemuser | undefined) {
        this._msdyn_Agentid = value;
    };
    /**
     * Gets the msdyn_agentstatushistory_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_agentstatushistory_AsyncOperations() {
        return this._msdyn_agentstatushistory_AsyncOperations;
    };
    /**
     * Sets the msdyn_agentstatushistory_AsyncOperations property value. 
     * @param value Value to set for the msdyn_agentstatushistory_AsyncOperations property.
     */
    public set msdyn_agentstatushistory_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_agentstatushistory_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_agentstatushistory_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_agentstatushistory_BulkDeleteFailures() {
        return this._msdyn_agentstatushistory_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_agentstatushistory_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_agentstatushistory_BulkDeleteFailures property.
     */
    public set msdyn_agentstatushistory_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_agentstatushistory_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_agentstatushistory_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_agentstatushistory_DuplicateBaseRecord() {
        return this._msdyn_agentstatushistory_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_agentstatushistory_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_agentstatushistory_DuplicateBaseRecord property.
     */
    public set msdyn_agentstatushistory_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_agentstatushistory_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_agentstatushistory_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_agentstatushistory_DuplicateMatchingRecord() {
        return this._msdyn_agentstatushistory_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_agentstatushistory_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_agentstatushistory_DuplicateMatchingRecord property.
     */
    public set msdyn_agentstatushistory_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_agentstatushistory_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_agentstatushistory_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_agentstatushistory_MailboxTrackingFolders() {
        return this._msdyn_agentstatushistory_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_agentstatushistory_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_agentstatushistory_MailboxTrackingFolders property.
     */
    public set msdyn_agentstatushistory_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_agentstatushistory_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_agentstatushistory_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_agentstatushistory_PrincipalObjectAttributeAccesses() {
        return this._msdyn_agentstatushistory_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_agentstatushistory_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_agentstatushistory_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_agentstatushistory_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_agentstatushistory_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_agentstatushistory_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_agentstatushistory_ProcessSession() {
        return this._msdyn_agentstatushistory_ProcessSession;
    };
    /**
     * Sets the msdyn_agentstatushistory_ProcessSession property value. 
     * @param value Value to set for the msdyn_agentstatushistory_ProcessSession property.
     */
    public set msdyn_agentstatushistory_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_agentstatushistory_ProcessSession = value;
    };
    /**
     * Gets the msdyn_agentstatushistory_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_agentstatushistory_SyncErrors() {
        return this._msdyn_agentstatushistory_SyncErrors;
    };
    /**
     * Sets the msdyn_agentstatushistory_SyncErrors property value. 
     * @param value Value to set for the msdyn_agentstatushistory_SyncErrors property.
     */
    public set msdyn_agentstatushistory_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_agentstatushistory_SyncErrors = value;
    };
    /**
     * Gets the msdyn_agentstatushistoryid property value. 
     * @returns a string
     */
    public get msdyn_agentstatushistoryid() {
        return this._msdyn_agentstatushistoryid;
    };
    /**
     * Sets the msdyn_agentstatushistoryid property value. 
     * @param value Value to set for the msdyn_agentstatushistoryid property.
     */
    public set msdyn_agentstatushistoryid(value: string | undefined) {
        this._msdyn_agentstatushistoryid = value;
    };
    /**
     * Gets the msdyn_availablecapacity property value. 
     * @returns a integer
     */
    public get msdyn_availablecapacity() {
        return this._msdyn_availablecapacity;
    };
    /**
     * Sets the msdyn_availablecapacity property value. 
     * @param value Value to set for the msdyn_availablecapacity property.
     */
    public set msdyn_availablecapacity(value: number | undefined) {
        this._msdyn_availablecapacity = value;
    };
    /**
     * Gets the msdyn_endtime property value. 
     * @returns a Date
     */
    public get msdyn_endtime() {
        return this._msdyn_endtime;
    };
    /**
     * Sets the msdyn_endtime property value. 
     * @param value Value to set for the msdyn_endtime property.
     */
    public set msdyn_endtime(value: Date | undefined) {
        this._msdyn_endtime = value;
    };
    /**
     * Gets the msdyn_isagentloggedin property value. 
     * @returns a boolean
     */
    public get msdyn_isagentloggedin() {
        return this._msdyn_isagentloggedin;
    };
    /**
     * Sets the msdyn_isagentloggedin property value. 
     * @param value Value to set for the msdyn_isagentloggedin property.
     */
    public set msdyn_isagentloggedin(value: boolean | undefined) {
        this._msdyn_isagentloggedin = value;
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
     * Gets the msdyn_presenceid property value. 
     * @returns a msdyn_presence
     */
    public get msdyn_presenceid() {
        return this._msdyn_presenceid;
    };
    /**
     * Sets the msdyn_presenceid property value. 
     * @param value Value to set for the msdyn_presenceid property.
     */
    public set msdyn_presenceid(value: Msdyn_presence | undefined) {
        this._msdyn_presenceid = value;
    };
    /**
     * Gets the msdyn_starttime property value. 
     * @returns a Date
     */
    public get msdyn_starttime() {
        return this._msdyn_starttime;
    };
    /**
     * Sets the msdyn_starttime property value. 
     * @param value Value to set for the msdyn_starttime property.
     */
    public set msdyn_starttime(value: Date | undefined) {
        this._msdyn_starttime = value;
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
        writer.writeStringValue("_msdyn_agentid_value", this._msdyn_agentid_value);
        writer.writeStringValue("_msdyn_presenceid_value", this._msdyn_presenceid_value);
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
        writer.writeObjectValue<Systemuser>("msdyn_Agentid", this.msdyn_Agentid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_agentstatushistory_AsyncOperations", this.msdyn_agentstatushistory_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_agentstatushistory_BulkDeleteFailures", this.msdyn_agentstatushistory_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_agentstatushistory_DuplicateBaseRecord", this.msdyn_agentstatushistory_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_agentstatushistory_DuplicateMatchingRecord", this.msdyn_agentstatushistory_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_agentstatushistory_MailboxTrackingFolders", this.msdyn_agentstatushistory_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_agentstatushistory_PrincipalObjectAttributeAccesses", this.msdyn_agentstatushistory_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_agentstatushistory_ProcessSession", this.msdyn_agentstatushistory_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_agentstatushistory_SyncErrors", this.msdyn_agentstatushistory_SyncErrors);
        writer.writeStringValue("msdyn_agentstatushistoryid", this.msdyn_agentstatushistoryid);
        writer.writeNumberValue("msdyn_availablecapacity", this.msdyn_availablecapacity);
        writer.writeDateValue("msdyn_endtime", this.msdyn_endtime);
        writer.writeBooleanValue("msdyn_isagentloggedin", this.msdyn_isagentloggedin);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_presence>("msdyn_presenceid", this.msdyn_presenceid);
        writer.writeDateValue("msdyn_starttime", this.msdyn_starttime);
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
