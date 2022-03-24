import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_ocliveworkitem, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_liveworkitemevent extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_liveworkitemid_value?: string | undefined;
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
    private _msdyn_eventtime?: Date | undefined;
    private _msdyn_liveworkitemevent?: number | undefined;
    private _msdyn_liveworkitemevent_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_liveworkitemevent_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_liveworkitemevent_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_liveworkitemevent_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_liveworkitemevent_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_liveworkitemevent_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_liveworkitemevent_ProcessSession?: Processsession[] | undefined;
    private _msdyn_liveworkitemevent_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_liveworkitemeventdata?: string | undefined;
    private _msdyn_liveworkitemeventid?: string | undefined;
    private _msdyn_liveworkitemid?: Msdyn_ocliveworkitem | undefined;
    private _msdyn_name?: string | undefined;
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
     * Gets the _msdyn_liveworkitemid_value property value. 
     * @returns a string
     */
    public get _msdyn_liveworkitemid_value() {
        return this.__msdyn_liveworkitemid_value;
    };
    /**
     * Sets the _msdyn_liveworkitemid_value property value. 
     * @param value Value to set for the _msdyn_liveworkitemid_value property.
     */
    public set _msdyn_liveworkitemid_value(value: string | undefined) {
        this.__msdyn_liveworkitemid_value = value;
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
     * Instantiates a new msdyn_liveworkitemevent and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_liveworkitemevent)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_liveworkitemevent)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_liveworkitemevent)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_liveworkitemevent)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_liveworkitemid_value": (o, n) => { (o as unknown as Msdyn_liveworkitemevent)._msdyn_liveworkitemid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_liveworkitemevent)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_liveworkitemevent)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_liveworkitemevent)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_liveworkitemevent)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_eventtime": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).msdyn_eventtime = n.getDateValue(); },
            "msdyn_liveworkitemevent": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).msdyn_liveworkitemevent = n.getNumberValue(); },
            "msdyn_liveworkitemevent_AsyncOperations": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).msdyn_liveworkitemevent_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_liveworkitemevent_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).msdyn_liveworkitemevent_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_liveworkitemevent_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).msdyn_liveworkitemevent_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_liveworkitemevent_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).msdyn_liveworkitemevent_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_liveworkitemevent_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).msdyn_liveworkitemevent_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_liveworkitemevent_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).msdyn_liveworkitemevent_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_liveworkitemevent_ProcessSession": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).msdyn_liveworkitemevent_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_liveworkitemevent_SyncErrors": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).msdyn_liveworkitemevent_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_liveworkitemeventdata": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).msdyn_liveworkitemeventdata = n.getStringValue(); },
            "msdyn_liveworkitemeventid": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).msdyn_liveworkitemeventid = n.getStringValue(); },
            "msdyn_liveworkitemid": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).msdyn_liveworkitemid = n.getObjectValue<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).msdyn_name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_liveworkitemevent).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_eventtime property value. 
     * @returns a Date
     */
    public get msdyn_eventtime() {
        return this._msdyn_eventtime;
    };
    /**
     * Sets the msdyn_eventtime property value. 
     * @param value Value to set for the msdyn_eventtime property.
     */
    public set msdyn_eventtime(value: Date | undefined) {
        this._msdyn_eventtime = value;
    };
    /**
     * Gets the msdyn_liveworkitemevent property value. 
     * @returns a integer
     */
    public get msdyn_liveworkitemevent() {
        return this._msdyn_liveworkitemevent;
    };
    /**
     * Sets the msdyn_liveworkitemevent property value. 
     * @param value Value to set for the msdyn_liveworkitemevent property.
     */
    public set msdyn_liveworkitemevent(value: number | undefined) {
        this._msdyn_liveworkitemevent = value;
    };
    /**
     * Gets the msdyn_liveworkitemevent_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_liveworkitemevent_AsyncOperations() {
        return this._msdyn_liveworkitemevent_AsyncOperations;
    };
    /**
     * Sets the msdyn_liveworkitemevent_AsyncOperations property value. 
     * @param value Value to set for the msdyn_liveworkitemevent_AsyncOperations property.
     */
    public set msdyn_liveworkitemevent_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_liveworkitemevent_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_liveworkitemevent_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_liveworkitemevent_BulkDeleteFailures() {
        return this._msdyn_liveworkitemevent_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_liveworkitemevent_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_liveworkitemevent_BulkDeleteFailures property.
     */
    public set msdyn_liveworkitemevent_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_liveworkitemevent_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_liveworkitemevent_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_liveworkitemevent_DuplicateBaseRecord() {
        return this._msdyn_liveworkitemevent_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_liveworkitemevent_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_liveworkitemevent_DuplicateBaseRecord property.
     */
    public set msdyn_liveworkitemevent_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_liveworkitemevent_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_liveworkitemevent_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_liveworkitemevent_DuplicateMatchingRecord() {
        return this._msdyn_liveworkitemevent_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_liveworkitemevent_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_liveworkitemevent_DuplicateMatchingRecord property.
     */
    public set msdyn_liveworkitemevent_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_liveworkitemevent_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_liveworkitemevent_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_liveworkitemevent_MailboxTrackingFolders() {
        return this._msdyn_liveworkitemevent_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_liveworkitemevent_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_liveworkitemevent_MailboxTrackingFolders property.
     */
    public set msdyn_liveworkitemevent_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_liveworkitemevent_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_liveworkitemevent_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_liveworkitemevent_PrincipalObjectAttributeAccesses() {
        return this._msdyn_liveworkitemevent_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_liveworkitemevent_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_liveworkitemevent_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_liveworkitemevent_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_liveworkitemevent_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_liveworkitemevent_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_liveworkitemevent_ProcessSession() {
        return this._msdyn_liveworkitemevent_ProcessSession;
    };
    /**
     * Sets the msdyn_liveworkitemevent_ProcessSession property value. 
     * @param value Value to set for the msdyn_liveworkitemevent_ProcessSession property.
     */
    public set msdyn_liveworkitemevent_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_liveworkitemevent_ProcessSession = value;
    };
    /**
     * Gets the msdyn_liveworkitemevent_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_liveworkitemevent_SyncErrors() {
        return this._msdyn_liveworkitemevent_SyncErrors;
    };
    /**
     * Sets the msdyn_liveworkitemevent_SyncErrors property value. 
     * @param value Value to set for the msdyn_liveworkitemevent_SyncErrors property.
     */
    public set msdyn_liveworkitemevent_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_liveworkitemevent_SyncErrors = value;
    };
    /**
     * Gets the msdyn_liveworkitemeventdata property value. 
     * @returns a string
     */
    public get msdyn_liveworkitemeventdata() {
        return this._msdyn_liveworkitemeventdata;
    };
    /**
     * Sets the msdyn_liveworkitemeventdata property value. 
     * @param value Value to set for the msdyn_liveworkitemeventdata property.
     */
    public set msdyn_liveworkitemeventdata(value: string | undefined) {
        this._msdyn_liveworkitemeventdata = value;
    };
    /**
     * Gets the msdyn_liveworkitemeventid property value. 
     * @returns a string
     */
    public get msdyn_liveworkitemeventid() {
        return this._msdyn_liveworkitemeventid;
    };
    /**
     * Sets the msdyn_liveworkitemeventid property value. 
     * @param value Value to set for the msdyn_liveworkitemeventid property.
     */
    public set msdyn_liveworkitemeventid(value: string | undefined) {
        this._msdyn_liveworkitemeventid = value;
    };
    /**
     * Gets the msdyn_liveworkitemid property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_liveworkitemid() {
        return this._msdyn_liveworkitemid;
    };
    /**
     * Sets the msdyn_liveworkitemid property value. 
     * @param value Value to set for the msdyn_liveworkitemid property.
     */
    public set msdyn_liveworkitemid(value: Msdyn_ocliveworkitem | undefined) {
        this._msdyn_liveworkitemid = value;
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
        writer.writeStringValue("_msdyn_liveworkitemid_value", this._msdyn_liveworkitemid_value);
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
        writer.writeDateValue("msdyn_eventtime", this.msdyn_eventtime);
        writer.writeNumberValue("msdyn_liveworkitemevent", this.msdyn_liveworkitemevent);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_liveworkitemevent_AsyncOperations", this.msdyn_liveworkitemevent_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_liveworkitemevent_BulkDeleteFailures", this.msdyn_liveworkitemevent_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_liveworkitemevent_DuplicateBaseRecord", this.msdyn_liveworkitemevent_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_liveworkitemevent_DuplicateMatchingRecord", this.msdyn_liveworkitemevent_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_liveworkitemevent_MailboxTrackingFolders", this.msdyn_liveworkitemevent_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_liveworkitemevent_PrincipalObjectAttributeAccesses", this.msdyn_liveworkitemevent_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_liveworkitemevent_ProcessSession", this.msdyn_liveworkitemevent_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_liveworkitemevent_SyncErrors", this.msdyn_liveworkitemevent_SyncErrors);
        writer.writeStringValue("msdyn_liveworkitemeventdata", this.msdyn_liveworkitemeventdata);
        writer.writeStringValue("msdyn_liveworkitemeventid", this.msdyn_liveworkitemeventid);
        writer.writeObjectValue<Msdyn_ocliveworkitem>("msdyn_liveworkitemid", this.msdyn_liveworkitemid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
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
