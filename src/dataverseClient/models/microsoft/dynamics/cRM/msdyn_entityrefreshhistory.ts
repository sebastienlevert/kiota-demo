import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_dataflowrefreshhistoryFromDiscriminatorValue} from './createMsdyn_dataflowrefreshhistoryFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_dataflowrefreshhistory, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_entityrefreshhistory extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_dataflowhistorylookup_value?: string | undefined;
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
    private _msdyn_DataflowHistoryLookup?: Msdyn_dataflowrefreshhistory | undefined;
    private _msdyn_dataflowid?: string | undefined;
    private _msdyn_dataflowname?: string | undefined;
    private _msdyn_endtime?: Date | undefined;
    private _msdyn_entityname?: string | undefined;
    private _msdyn_entityrefreshhistory_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_entityrefreshhistory_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_entityrefreshhistory_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_entityrefreshhistory_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_entityrefreshhistory_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_entityrefreshhistory_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_entityrefreshhistory_ProcessSession?: Processsession[] | undefined;
    private _msdyn_entityrefreshhistory_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_entityrefreshhistoryid?: string | undefined;
    private _msdyn_errorcount?: number | undefined;
    private _msdyn_errorinfoerrorcode?: string | undefined;
    private _msdyn_errorinfoerrormessage?: string | undefined;
    private _msdyn_errorinfoevaluationresultjson?: string | undefined;
    private _msdyn_errorinfoevaluationresultjsonmemo?: string | undefined;
    private _msdyn_errorinfoloadtocdserrorinfojson?: string | undefined;
    private _msdyn_errorinfoloadtocdserrorinfojsonmemo?: string | undefined;
    private _msdyn_insertcount?: number | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_refreshstatus?: string | undefined;
    private _msdyn_starttime?: Date | undefined;
    private _msdyn_transactionid?: string | undefined;
    private _msdyn_upsertcount?: number | undefined;
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
     * Gets the _msdyn_dataflowhistorylookup_value property value. 
     * @returns a string
     */
    public get _msdyn_dataflowhistorylookup_value() {
        return this.__msdyn_dataflowhistorylookup_value;
    };
    /**
     * Sets the _msdyn_dataflowhistorylookup_value property value. 
     * @param value Value to set for the _msdyn_dataflowhistorylookup_value property.
     */
    public set _msdyn_dataflowhistorylookup_value(value: string | undefined) {
        this.__msdyn_dataflowhistorylookup_value = value;
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
     * Instantiates a new msdyn_entityrefreshhistory and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_dataflowhistorylookup_value": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory)._msdyn_dataflowhistorylookup_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_DataflowHistoryLookup": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_DataflowHistoryLookup = n.getObjectValue<Msdyn_dataflowrefreshhistory>(createMsdyn_dataflowrefreshhistoryFromDiscriminatorValue); },
            "msdyn_dataflowid": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_dataflowid = n.getStringValue(); },
            "msdyn_dataflowname": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_dataflowname = n.getStringValue(); },
            "msdyn_endtime": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_endtime = n.getDateValue(); },
            "msdyn_entityname": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_entityname = n.getStringValue(); },
            "msdyn_entityrefreshhistory_AsyncOperations": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_entityrefreshhistory_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_entityrefreshhistory_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_entityrefreshhistory_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_entityrefreshhistory_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_entityrefreshhistory_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_entityrefreshhistory_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_entityrefreshhistory_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_entityrefreshhistory_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_entityrefreshhistory_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_entityrefreshhistory_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_entityrefreshhistory_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_entityrefreshhistory_ProcessSession": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_entityrefreshhistory_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_entityrefreshhistory_SyncErrors": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_entityrefreshhistory_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_entityrefreshhistoryid": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_entityrefreshhistoryid = n.getStringValue(); },
            "msdyn_errorcount": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_errorcount = n.getNumberValue(); },
            "msdyn_errorinfoerrorcode": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_errorinfoerrorcode = n.getStringValue(); },
            "msdyn_errorinfoerrormessage": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_errorinfoerrormessage = n.getStringValue(); },
            "msdyn_errorinfoevaluationresultjson": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_errorinfoevaluationresultjson = n.getStringValue(); },
            "msdyn_errorinfoevaluationresultjsonmemo": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_errorinfoevaluationresultjsonmemo = n.getStringValue(); },
            "msdyn_errorinfoloadtocdserrorinfojson": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_errorinfoloadtocdserrorinfojson = n.getStringValue(); },
            "msdyn_errorinfoloadtocdserrorinfojsonmemo": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_errorinfoloadtocdserrorinfojsonmemo = n.getStringValue(); },
            "msdyn_insertcount": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_insertcount = n.getNumberValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_name = n.getStringValue(); },
            "msdyn_refreshstatus": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_refreshstatus = n.getStringValue(); },
            "msdyn_starttime": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_starttime = n.getDateValue(); },
            "msdyn_transactionid": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_transactionid = n.getStringValue(); },
            "msdyn_upsertcount": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).msdyn_upsertcount = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_entityrefreshhistory).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_DataflowHistoryLookup property value. 
     * @returns a msdyn_dataflowrefreshhistory
     */
    public get msdyn_DataflowHistoryLookup() {
        return this._msdyn_DataflowHistoryLookup;
    };
    /**
     * Sets the msdyn_DataflowHistoryLookup property value. 
     * @param value Value to set for the msdyn_DataflowHistoryLookup property.
     */
    public set msdyn_DataflowHistoryLookup(value: Msdyn_dataflowrefreshhistory | undefined) {
        this._msdyn_DataflowHistoryLookup = value;
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
     * Gets the msdyn_entityname property value. 
     * @returns a string
     */
    public get msdyn_entityname() {
        return this._msdyn_entityname;
    };
    /**
     * Sets the msdyn_entityname property value. 
     * @param value Value to set for the msdyn_entityname property.
     */
    public set msdyn_entityname(value: string | undefined) {
        this._msdyn_entityname = value;
    };
    /**
     * Gets the msdyn_entityrefreshhistory_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_entityrefreshhistory_AsyncOperations() {
        return this._msdyn_entityrefreshhistory_AsyncOperations;
    };
    /**
     * Sets the msdyn_entityrefreshhistory_AsyncOperations property value. 
     * @param value Value to set for the msdyn_entityrefreshhistory_AsyncOperations property.
     */
    public set msdyn_entityrefreshhistory_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_entityrefreshhistory_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_entityrefreshhistory_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_entityrefreshhistory_BulkDeleteFailures() {
        return this._msdyn_entityrefreshhistory_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_entityrefreshhistory_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_entityrefreshhistory_BulkDeleteFailures property.
     */
    public set msdyn_entityrefreshhistory_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_entityrefreshhistory_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_entityrefreshhistory_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_entityrefreshhistory_DuplicateBaseRecord() {
        return this._msdyn_entityrefreshhistory_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_entityrefreshhistory_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_entityrefreshhistory_DuplicateBaseRecord property.
     */
    public set msdyn_entityrefreshhistory_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_entityrefreshhistory_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_entityrefreshhistory_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_entityrefreshhistory_DuplicateMatchingRecord() {
        return this._msdyn_entityrefreshhistory_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_entityrefreshhistory_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_entityrefreshhistory_DuplicateMatchingRecord property.
     */
    public set msdyn_entityrefreshhistory_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_entityrefreshhistory_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_entityrefreshhistory_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_entityrefreshhistory_MailboxTrackingFolders() {
        return this._msdyn_entityrefreshhistory_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_entityrefreshhistory_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_entityrefreshhistory_MailboxTrackingFolders property.
     */
    public set msdyn_entityrefreshhistory_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_entityrefreshhistory_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_entityrefreshhistory_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_entityrefreshhistory_PrincipalObjectAttributeAccesses() {
        return this._msdyn_entityrefreshhistory_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_entityrefreshhistory_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_entityrefreshhistory_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_entityrefreshhistory_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_entityrefreshhistory_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_entityrefreshhistory_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_entityrefreshhistory_ProcessSession() {
        return this._msdyn_entityrefreshhistory_ProcessSession;
    };
    /**
     * Sets the msdyn_entityrefreshhistory_ProcessSession property value. 
     * @param value Value to set for the msdyn_entityrefreshhistory_ProcessSession property.
     */
    public set msdyn_entityrefreshhistory_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_entityrefreshhistory_ProcessSession = value;
    };
    /**
     * Gets the msdyn_entityrefreshhistory_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_entityrefreshhistory_SyncErrors() {
        return this._msdyn_entityrefreshhistory_SyncErrors;
    };
    /**
     * Sets the msdyn_entityrefreshhistory_SyncErrors property value. 
     * @param value Value to set for the msdyn_entityrefreshhistory_SyncErrors property.
     */
    public set msdyn_entityrefreshhistory_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_entityrefreshhistory_SyncErrors = value;
    };
    /**
     * Gets the msdyn_entityrefreshhistoryid property value. 
     * @returns a string
     */
    public get msdyn_entityrefreshhistoryid() {
        return this._msdyn_entityrefreshhistoryid;
    };
    /**
     * Sets the msdyn_entityrefreshhistoryid property value. 
     * @param value Value to set for the msdyn_entityrefreshhistoryid property.
     */
    public set msdyn_entityrefreshhistoryid(value: string | undefined) {
        this._msdyn_entityrefreshhistoryid = value;
    };
    /**
     * Gets the msdyn_errorcount property value. 
     * @returns a integer
     */
    public get msdyn_errorcount() {
        return this._msdyn_errorcount;
    };
    /**
     * Sets the msdyn_errorcount property value. 
     * @param value Value to set for the msdyn_errorcount property.
     */
    public set msdyn_errorcount(value: number | undefined) {
        this._msdyn_errorcount = value;
    };
    /**
     * Gets the msdyn_errorinfoerrorcode property value. 
     * @returns a string
     */
    public get msdyn_errorinfoerrorcode() {
        return this._msdyn_errorinfoerrorcode;
    };
    /**
     * Sets the msdyn_errorinfoerrorcode property value. 
     * @param value Value to set for the msdyn_errorinfoerrorcode property.
     */
    public set msdyn_errorinfoerrorcode(value: string | undefined) {
        this._msdyn_errorinfoerrorcode = value;
    };
    /**
     * Gets the msdyn_errorinfoerrormessage property value. 
     * @returns a string
     */
    public get msdyn_errorinfoerrormessage() {
        return this._msdyn_errorinfoerrormessage;
    };
    /**
     * Sets the msdyn_errorinfoerrormessage property value. 
     * @param value Value to set for the msdyn_errorinfoerrormessage property.
     */
    public set msdyn_errorinfoerrormessage(value: string | undefined) {
        this._msdyn_errorinfoerrormessage = value;
    };
    /**
     * Gets the msdyn_errorinfoevaluationresultjson property value. 
     * @returns a string
     */
    public get msdyn_errorinfoevaluationresultjson() {
        return this._msdyn_errorinfoevaluationresultjson;
    };
    /**
     * Sets the msdyn_errorinfoevaluationresultjson property value. 
     * @param value Value to set for the msdyn_errorinfoevaluationresultjson property.
     */
    public set msdyn_errorinfoevaluationresultjson(value: string | undefined) {
        this._msdyn_errorinfoevaluationresultjson = value;
    };
    /**
     * Gets the msdyn_errorinfoevaluationresultjsonmemo property value. 
     * @returns a string
     */
    public get msdyn_errorinfoevaluationresultjsonmemo() {
        return this._msdyn_errorinfoevaluationresultjsonmemo;
    };
    /**
     * Sets the msdyn_errorinfoevaluationresultjsonmemo property value. 
     * @param value Value to set for the msdyn_errorinfoevaluationresultjsonmemo property.
     */
    public set msdyn_errorinfoevaluationresultjsonmemo(value: string | undefined) {
        this._msdyn_errorinfoevaluationresultjsonmemo = value;
    };
    /**
     * Gets the msdyn_errorinfoloadtocdserrorinfojson property value. 
     * @returns a string
     */
    public get msdyn_errorinfoloadtocdserrorinfojson() {
        return this._msdyn_errorinfoloadtocdserrorinfojson;
    };
    /**
     * Sets the msdyn_errorinfoloadtocdserrorinfojson property value. 
     * @param value Value to set for the msdyn_errorinfoloadtocdserrorinfojson property.
     */
    public set msdyn_errorinfoloadtocdserrorinfojson(value: string | undefined) {
        this._msdyn_errorinfoloadtocdserrorinfojson = value;
    };
    /**
     * Gets the msdyn_errorinfoloadtocdserrorinfojsonmemo property value. 
     * @returns a string
     */
    public get msdyn_errorinfoloadtocdserrorinfojsonmemo() {
        return this._msdyn_errorinfoloadtocdserrorinfojsonmemo;
    };
    /**
     * Sets the msdyn_errorinfoloadtocdserrorinfojsonmemo property value. 
     * @param value Value to set for the msdyn_errorinfoloadtocdserrorinfojsonmemo property.
     */
    public set msdyn_errorinfoloadtocdserrorinfojsonmemo(value: string | undefined) {
        this._msdyn_errorinfoloadtocdserrorinfojsonmemo = value;
    };
    /**
     * Gets the msdyn_insertcount property value. 
     * @returns a integer
     */
    public get msdyn_insertcount() {
        return this._msdyn_insertcount;
    };
    /**
     * Sets the msdyn_insertcount property value. 
     * @param value Value to set for the msdyn_insertcount property.
     */
    public set msdyn_insertcount(value: number | undefined) {
        this._msdyn_insertcount = value;
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
     * Gets the msdyn_upsertcount property value. 
     * @returns a integer
     */
    public get msdyn_upsertcount() {
        return this._msdyn_upsertcount;
    };
    /**
     * Sets the msdyn_upsertcount property value. 
     * @param value Value to set for the msdyn_upsertcount property.
     */
    public set msdyn_upsertcount(value: number | undefined) {
        this._msdyn_upsertcount = value;
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
        writer.writeStringValue("_msdyn_dataflowhistorylookup_value", this._msdyn_dataflowhistorylookup_value);
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
        writer.writeObjectValue<Msdyn_dataflowrefreshhistory>("msdyn_DataflowHistoryLookup", this.msdyn_DataflowHistoryLookup);
        writer.writeStringValue("msdyn_dataflowid", this.msdyn_dataflowid);
        writer.writeStringValue("msdyn_dataflowname", this.msdyn_dataflowname);
        writer.writeDateValue("msdyn_endtime", this.msdyn_endtime);
        writer.writeStringValue("msdyn_entityname", this.msdyn_entityname);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_entityrefreshhistory_AsyncOperations", this.msdyn_entityrefreshhistory_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_entityrefreshhistory_BulkDeleteFailures", this.msdyn_entityrefreshhistory_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_entityrefreshhistory_DuplicateBaseRecord", this.msdyn_entityrefreshhistory_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_entityrefreshhistory_DuplicateMatchingRecord", this.msdyn_entityrefreshhistory_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_entityrefreshhistory_MailboxTrackingFolders", this.msdyn_entityrefreshhistory_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_entityrefreshhistory_PrincipalObjectAttributeAccesses", this.msdyn_entityrefreshhistory_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_entityrefreshhistory_ProcessSession", this.msdyn_entityrefreshhistory_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_entityrefreshhistory_SyncErrors", this.msdyn_entityrefreshhistory_SyncErrors);
        writer.writeStringValue("msdyn_entityrefreshhistoryid", this.msdyn_entityrefreshhistoryid);
        writer.writeNumberValue("msdyn_errorcount", this.msdyn_errorcount);
        writer.writeStringValue("msdyn_errorinfoerrorcode", this.msdyn_errorinfoerrorcode);
        writer.writeStringValue("msdyn_errorinfoerrormessage", this.msdyn_errorinfoerrormessage);
        writer.writeStringValue("msdyn_errorinfoevaluationresultjson", this.msdyn_errorinfoevaluationresultjson);
        writer.writeStringValue("msdyn_errorinfoevaluationresultjsonmemo", this.msdyn_errorinfoevaluationresultjsonmemo);
        writer.writeStringValue("msdyn_errorinfoloadtocdserrorinfojson", this.msdyn_errorinfoloadtocdserrorinfojson);
        writer.writeStringValue("msdyn_errorinfoloadtocdserrorinfojsonmemo", this.msdyn_errorinfoloadtocdserrorinfojsonmemo);
        writer.writeNumberValue("msdyn_insertcount", this.msdyn_insertcount);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_refreshstatus", this.msdyn_refreshstatus);
        writer.writeDateValue("msdyn_starttime", this.msdyn_starttime);
        writer.writeStringValue("msdyn_transactionid", this.msdyn_transactionid);
        writer.writeNumberValue("msdyn_upsertcount", this.msdyn_upsertcount);
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
