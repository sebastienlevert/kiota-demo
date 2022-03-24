import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_entityrefreshhistoryFromDiscriminatorValue} from './createMsdyn_entityrefreshhistoryFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_entityrefreshhistory, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_dataflowrefreshhistory extends Crmbaseentity implements Parsable {
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
    private _msdyn_dataflowid?: string | undefined;
    private _msdyn_dataflowname?: string | undefined;
    private _msdyn_dataflowrefreshhistory_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_dataflowrefreshhistory_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_dataflowrefreshhistory_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_dataflowrefreshhistory_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_dataflowrefreshhistory_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_dataflowrefreshhistory_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_dataflowrefreshhistory_ProcessSession?: Processsession[] | undefined;
    private _msdyn_dataflowrefreshhistory_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_dataflowrefreshhistoryid?: string | undefined;
    private _msdyn_endtime?: Date | undefined;
    private _msdyn_EntityRefreshHistory_DataflowHistor?: Msdyn_entityrefreshhistory[] | undefined;
    private _msdyn_errorinfojson?: string | undefined;
    private _msdyn_jobid?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_refreshstatus?: string | undefined;
    private _msdyn_refreshtype?: string | undefined;
    private _msdyn_requestid?: string | undefined;
    private _msdyn_starttime?: Date | undefined;
    private _msdyn_transactionid?: string | undefined;
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
     * Instantiates a new msdyn_dataflowrefreshhistory and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_dataflowid": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_dataflowid = n.getStringValue(); },
            "msdyn_dataflowname": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_dataflowname = n.getStringValue(); },
            "msdyn_dataflowrefreshhistory_AsyncOperations": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_dataflowrefreshhistory_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_dataflowrefreshhistory_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_dataflowrefreshhistory_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_dataflowrefreshhistory_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_dataflowrefreshhistory_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_dataflowrefreshhistory_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_dataflowrefreshhistory_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_dataflowrefreshhistory_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_dataflowrefreshhistory_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_dataflowrefreshhistory_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_dataflowrefreshhistory_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_dataflowrefreshhistory_ProcessSession": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_dataflowrefreshhistory_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_dataflowrefreshhistory_SyncErrors": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_dataflowrefreshhistory_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_dataflowrefreshhistoryid": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_dataflowrefreshhistoryid = n.getStringValue(); },
            "msdyn_endtime": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_endtime = n.getDateValue(); },
            "msdyn_EntityRefreshHistory_DataflowHistor": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_EntityRefreshHistory_DataflowHistor = n.getCollectionOfObjectValues<Msdyn_entityrefreshhistory>(createMsdyn_entityrefreshhistoryFromDiscriminatorValue); },
            "msdyn_errorinfojson": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_errorinfojson = n.getStringValue(); },
            "msdyn_jobid": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_jobid = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_name = n.getStringValue(); },
            "msdyn_refreshstatus": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_refreshstatus = n.getStringValue(); },
            "msdyn_refreshtype": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_refreshtype = n.getStringValue(); },
            "msdyn_requestid": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_requestid = n.getStringValue(); },
            "msdyn_starttime": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_starttime = n.getDateValue(); },
            "msdyn_transactionid": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).msdyn_transactionid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_dataflowrefreshhistory).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_dataflowname property value. 
     * @returns a string
     */
    public get msdyn_dataflowname() {
        return this._msdyn_dataflowname;
    };
    /**
     * Sets the msdyn_dataflowname property value. 
     * @param value Value to set for the msdyn_dataflowname property.
     */
    public set msdyn_dataflowname(value: string | undefined) {
        this._msdyn_dataflowname = value;
    };
    /**
     * Gets the msdyn_dataflowrefreshhistory_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_dataflowrefreshhistory_AsyncOperations() {
        return this._msdyn_dataflowrefreshhistory_AsyncOperations;
    };
    /**
     * Sets the msdyn_dataflowrefreshhistory_AsyncOperations property value. 
     * @param value Value to set for the msdyn_dataflowrefreshhistory_AsyncOperations property.
     */
    public set msdyn_dataflowrefreshhistory_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_dataflowrefreshhistory_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_dataflowrefreshhistory_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_dataflowrefreshhistory_BulkDeleteFailures() {
        return this._msdyn_dataflowrefreshhistory_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_dataflowrefreshhistory_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_dataflowrefreshhistory_BulkDeleteFailures property.
     */
    public set msdyn_dataflowrefreshhistory_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_dataflowrefreshhistory_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_dataflowrefreshhistory_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_dataflowrefreshhistory_DuplicateBaseRecord() {
        return this._msdyn_dataflowrefreshhistory_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_dataflowrefreshhistory_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_dataflowrefreshhistory_DuplicateBaseRecord property.
     */
    public set msdyn_dataflowrefreshhistory_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_dataflowrefreshhistory_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_dataflowrefreshhistory_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_dataflowrefreshhistory_DuplicateMatchingRecord() {
        return this._msdyn_dataflowrefreshhistory_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_dataflowrefreshhistory_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_dataflowrefreshhistory_DuplicateMatchingRecord property.
     */
    public set msdyn_dataflowrefreshhistory_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_dataflowrefreshhistory_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_dataflowrefreshhistory_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_dataflowrefreshhistory_MailboxTrackingFolders() {
        return this._msdyn_dataflowrefreshhistory_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_dataflowrefreshhistory_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_dataflowrefreshhistory_MailboxTrackingFolders property.
     */
    public set msdyn_dataflowrefreshhistory_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_dataflowrefreshhistory_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_dataflowrefreshhistory_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_dataflowrefreshhistory_PrincipalObjectAttributeAccesses() {
        return this._msdyn_dataflowrefreshhistory_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_dataflowrefreshhistory_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_dataflowrefreshhistory_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_dataflowrefreshhistory_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_dataflowrefreshhistory_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_dataflowrefreshhistory_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_dataflowrefreshhistory_ProcessSession() {
        return this._msdyn_dataflowrefreshhistory_ProcessSession;
    };
    /**
     * Sets the msdyn_dataflowrefreshhistory_ProcessSession property value. 
     * @param value Value to set for the msdyn_dataflowrefreshhistory_ProcessSession property.
     */
    public set msdyn_dataflowrefreshhistory_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_dataflowrefreshhistory_ProcessSession = value;
    };
    /**
     * Gets the msdyn_dataflowrefreshhistory_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_dataflowrefreshhistory_SyncErrors() {
        return this._msdyn_dataflowrefreshhistory_SyncErrors;
    };
    /**
     * Sets the msdyn_dataflowrefreshhistory_SyncErrors property value. 
     * @param value Value to set for the msdyn_dataflowrefreshhistory_SyncErrors property.
     */
    public set msdyn_dataflowrefreshhistory_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_dataflowrefreshhistory_SyncErrors = value;
    };
    /**
     * Gets the msdyn_dataflowrefreshhistoryid property value. 
     * @returns a string
     */
    public get msdyn_dataflowrefreshhistoryid() {
        return this._msdyn_dataflowrefreshhistoryid;
    };
    /**
     * Sets the msdyn_dataflowrefreshhistoryid property value. 
     * @param value Value to set for the msdyn_dataflowrefreshhistoryid property.
     */
    public set msdyn_dataflowrefreshhistoryid(value: string | undefined) {
        this._msdyn_dataflowrefreshhistoryid = value;
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
     * Gets the msdyn_EntityRefreshHistory_DataflowHistor property value. 
     * @returns a msdyn_entityrefreshhistory
     */
    public get msdyn_EntityRefreshHistory_DataflowHistor() {
        return this._msdyn_EntityRefreshHistory_DataflowHistor;
    };
    /**
     * Sets the msdyn_EntityRefreshHistory_DataflowHistor property value. 
     * @param value Value to set for the msdyn_EntityRefreshHistory_DataflowHistor property.
     */
    public set msdyn_EntityRefreshHistory_DataflowHistor(value: Msdyn_entityrefreshhistory[] | undefined) {
        this._msdyn_EntityRefreshHistory_DataflowHistor = value;
    };
    /**
     * Gets the msdyn_errorinfojson property value. 
     * @returns a string
     */
    public get msdyn_errorinfojson() {
        return this._msdyn_errorinfojson;
    };
    /**
     * Sets the msdyn_errorinfojson property value. 
     * @param value Value to set for the msdyn_errorinfojson property.
     */
    public set msdyn_errorinfojson(value: string | undefined) {
        this._msdyn_errorinfojson = value;
    };
    /**
     * Gets the msdyn_jobid property value. 
     * @returns a string
     */
    public get msdyn_jobid() {
        return this._msdyn_jobid;
    };
    /**
     * Sets the msdyn_jobid property value. 
     * @param value Value to set for the msdyn_jobid property.
     */
    public set msdyn_jobid(value: string | undefined) {
        this._msdyn_jobid = value;
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
     * Gets the msdyn_refreshstatus property value. 
     * @returns a string
     */
    public get msdyn_refreshstatus() {
        return this._msdyn_refreshstatus;
    };
    /**
     * Sets the msdyn_refreshstatus property value. 
     * @param value Value to set for the msdyn_refreshstatus property.
     */
    public set msdyn_refreshstatus(value: string | undefined) {
        this._msdyn_refreshstatus = value;
    };
    /**
     * Gets the msdyn_refreshtype property value. 
     * @returns a string
     */
    public get msdyn_refreshtype() {
        return this._msdyn_refreshtype;
    };
    /**
     * Sets the msdyn_refreshtype property value. 
     * @param value Value to set for the msdyn_refreshtype property.
     */
    public set msdyn_refreshtype(value: string | undefined) {
        this._msdyn_refreshtype = value;
    };
    /**
     * Gets the msdyn_requestid property value. 
     * @returns a string
     */
    public get msdyn_requestid() {
        return this._msdyn_requestid;
    };
    /**
     * Sets the msdyn_requestid property value. 
     * @param value Value to set for the msdyn_requestid property.
     */
    public set msdyn_requestid(value: string | undefined) {
        this._msdyn_requestid = value;
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
     * Gets the msdyn_transactionid property value. 
     * @returns a string
     */
    public get msdyn_transactionid() {
        return this._msdyn_transactionid;
    };
    /**
     * Sets the msdyn_transactionid property value. 
     * @param value Value to set for the msdyn_transactionid property.
     */
    public set msdyn_transactionid(value: string | undefined) {
        this._msdyn_transactionid = value;
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
        writer.writeStringValue("msdyn_dataflowid", this.msdyn_dataflowid);
        writer.writeStringValue("msdyn_dataflowname", this.msdyn_dataflowname);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_dataflowrefreshhistory_AsyncOperations", this.msdyn_dataflowrefreshhistory_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_dataflowrefreshhistory_BulkDeleteFailures", this.msdyn_dataflowrefreshhistory_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_dataflowrefreshhistory_DuplicateBaseRecord", this.msdyn_dataflowrefreshhistory_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_dataflowrefreshhistory_DuplicateMatchingRecord", this.msdyn_dataflowrefreshhistory_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_dataflowrefreshhistory_MailboxTrackingFolders", this.msdyn_dataflowrefreshhistory_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_dataflowrefreshhistory_PrincipalObjectAttributeAccesses", this.msdyn_dataflowrefreshhistory_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_dataflowrefreshhistory_ProcessSession", this.msdyn_dataflowrefreshhistory_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_dataflowrefreshhistory_SyncErrors", this.msdyn_dataflowrefreshhistory_SyncErrors);
        writer.writeStringValue("msdyn_dataflowrefreshhistoryid", this.msdyn_dataflowrefreshhistoryid);
        writer.writeDateValue("msdyn_endtime", this.msdyn_endtime);
        writer.writeCollectionOfObjectValues<Msdyn_entityrefreshhistory>("msdyn_EntityRefreshHistory_DataflowHistor", this.msdyn_EntityRefreshHistory_DataflowHistor);
        writer.writeStringValue("msdyn_errorinfojson", this.msdyn_errorinfojson);
        writer.writeStringValue("msdyn_jobid", this.msdyn_jobid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_refreshstatus", this.msdyn_refreshstatus);
        writer.writeStringValue("msdyn_refreshtype", this.msdyn_refreshtype);
        writer.writeStringValue("msdyn_requestid", this.msdyn_requestid);
        writer.writeDateValue("msdyn_starttime", this.msdyn_starttime);
        writer.writeStringValue("msdyn_transactionid", this.msdyn_transactionid);
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
