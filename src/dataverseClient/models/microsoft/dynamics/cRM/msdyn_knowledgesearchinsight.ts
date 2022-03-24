import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
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
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_knowledgesearchinsight extends Crmbaseentity implements Parsable {
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
    private _msdyn_applicationname?: string | undefined;
    private _msdyn_correlationid?: string | undefined;
    private _msdyn_customcontrolid?: string | undefined;
    private _msdyn_entityrecordid?: string | undefined;
    private _msdyn_entitytype?: string | undefined;
    private _msdyn_filters?: string | undefined;
    private _msdyn_initiatedby?: string | undefined;
    private _msdyn_knowledgesearchinsight_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_knowledgesearchinsight_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_knowledgesearchinsight_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_knowledgesearchinsight_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_knowledgesearchinsight_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_knowledgesearchinsight_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_knowledgesearchinsight_ProcessSession?: Processsession[] | undefined;
    private _msdyn_knowledgesearchinsight_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_knowledgesearchinsightid?: string | undefined;
    private _msdyn_responsetime?: number | undefined;
    private _msdyn_resultcount?: number | undefined;
    private _msdyn_searchproviderid?: string | undefined;
    private _msdyn_searchprovidername?: string | undefined;
    private _msdyn_searchterm?: string | undefined;
    private _msdyn_searchtype?: string | undefined;
    private _msdyn_sortby?: string | undefined;
    private _msdyn_timestamp?: Date | undefined;
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
     * Instantiates a new msdyn_knowledgesearchinsight and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_applicationname": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_applicationname = n.getStringValue(); },
            "msdyn_correlationid": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_correlationid = n.getStringValue(); },
            "msdyn_customcontrolid": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_customcontrolid = n.getStringValue(); },
            "msdyn_entityrecordid": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_entityrecordid = n.getStringValue(); },
            "msdyn_entitytype": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_entitytype = n.getStringValue(); },
            "msdyn_filters": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_filters = n.getStringValue(); },
            "msdyn_initiatedby": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_initiatedby = n.getStringValue(); },
            "msdyn_knowledgesearchinsight_AsyncOperations": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_knowledgesearchinsight_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_knowledgesearchinsight_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_knowledgesearchinsight_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_knowledgesearchinsight_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_knowledgesearchinsight_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_knowledgesearchinsight_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_knowledgesearchinsight_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_knowledgesearchinsight_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_knowledgesearchinsight_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_knowledgesearchinsight_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_knowledgesearchinsight_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_knowledgesearchinsight_ProcessSession": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_knowledgesearchinsight_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_knowledgesearchinsight_SyncErrors": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_knowledgesearchinsight_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_knowledgesearchinsightid": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_knowledgesearchinsightid = n.getStringValue(); },
            "msdyn_responsetime": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_responsetime = n.getNumberValue(); },
            "msdyn_resultcount": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_resultcount = n.getNumberValue(); },
            "msdyn_searchproviderid": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_searchproviderid = n.getStringValue(); },
            "msdyn_searchprovidername": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_searchprovidername = n.getStringValue(); },
            "msdyn_searchterm": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_searchterm = n.getStringValue(); },
            "msdyn_searchtype": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_searchtype = n.getStringValue(); },
            "msdyn_sortby": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_sortby = n.getStringValue(); },
            "msdyn_timestamp": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).msdyn_timestamp = n.getDateValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_knowledgesearchinsight).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_applicationname property value. 
     * @returns a string
     */
    public get msdyn_applicationname() {
        return this._msdyn_applicationname;
    };
    /**
     * Sets the msdyn_applicationname property value. 
     * @param value Value to set for the msdyn_applicationname property.
     */
    public set msdyn_applicationname(value: string | undefined) {
        this._msdyn_applicationname = value;
    };
    /**
     * Gets the msdyn_correlationid property value. 
     * @returns a string
     */
    public get msdyn_correlationid() {
        return this._msdyn_correlationid;
    };
    /**
     * Sets the msdyn_correlationid property value. 
     * @param value Value to set for the msdyn_correlationid property.
     */
    public set msdyn_correlationid(value: string | undefined) {
        this._msdyn_correlationid = value;
    };
    /**
     * Gets the msdyn_customcontrolid property value. 
     * @returns a string
     */
    public get msdyn_customcontrolid() {
        return this._msdyn_customcontrolid;
    };
    /**
     * Sets the msdyn_customcontrolid property value. 
     * @param value Value to set for the msdyn_customcontrolid property.
     */
    public set msdyn_customcontrolid(value: string | undefined) {
        this._msdyn_customcontrolid = value;
    };
    /**
     * Gets the msdyn_entityrecordid property value. 
     * @returns a string
     */
    public get msdyn_entityrecordid() {
        return this._msdyn_entityrecordid;
    };
    /**
     * Sets the msdyn_entityrecordid property value. 
     * @param value Value to set for the msdyn_entityrecordid property.
     */
    public set msdyn_entityrecordid(value: string | undefined) {
        this._msdyn_entityrecordid = value;
    };
    /**
     * Gets the msdyn_entitytype property value. 
     * @returns a string
     */
    public get msdyn_entitytype() {
        return this._msdyn_entitytype;
    };
    /**
     * Sets the msdyn_entitytype property value. 
     * @param value Value to set for the msdyn_entitytype property.
     */
    public set msdyn_entitytype(value: string | undefined) {
        this._msdyn_entitytype = value;
    };
    /**
     * Gets the msdyn_filters property value. 
     * @returns a string
     */
    public get msdyn_filters() {
        return this._msdyn_filters;
    };
    /**
     * Sets the msdyn_filters property value. 
     * @param value Value to set for the msdyn_filters property.
     */
    public set msdyn_filters(value: string | undefined) {
        this._msdyn_filters = value;
    };
    /**
     * Gets the msdyn_initiatedby property value. 
     * @returns a string
     */
    public get msdyn_initiatedby() {
        return this._msdyn_initiatedby;
    };
    /**
     * Sets the msdyn_initiatedby property value. 
     * @param value Value to set for the msdyn_initiatedby property.
     */
    public set msdyn_initiatedby(value: string | undefined) {
        this._msdyn_initiatedby = value;
    };
    /**
     * Gets the msdyn_knowledgesearchinsight_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_knowledgesearchinsight_AsyncOperations() {
        return this._msdyn_knowledgesearchinsight_AsyncOperations;
    };
    /**
     * Sets the msdyn_knowledgesearchinsight_AsyncOperations property value. 
     * @param value Value to set for the msdyn_knowledgesearchinsight_AsyncOperations property.
     */
    public set msdyn_knowledgesearchinsight_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_knowledgesearchinsight_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_knowledgesearchinsight_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_knowledgesearchinsight_BulkDeleteFailures() {
        return this._msdyn_knowledgesearchinsight_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_knowledgesearchinsight_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_knowledgesearchinsight_BulkDeleteFailures property.
     */
    public set msdyn_knowledgesearchinsight_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_knowledgesearchinsight_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_knowledgesearchinsight_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_knowledgesearchinsight_DuplicateBaseRecord() {
        return this._msdyn_knowledgesearchinsight_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_knowledgesearchinsight_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_knowledgesearchinsight_DuplicateBaseRecord property.
     */
    public set msdyn_knowledgesearchinsight_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_knowledgesearchinsight_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_knowledgesearchinsight_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_knowledgesearchinsight_DuplicateMatchingRecord() {
        return this._msdyn_knowledgesearchinsight_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_knowledgesearchinsight_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_knowledgesearchinsight_DuplicateMatchingRecord property.
     */
    public set msdyn_knowledgesearchinsight_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_knowledgesearchinsight_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_knowledgesearchinsight_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_knowledgesearchinsight_MailboxTrackingFolders() {
        return this._msdyn_knowledgesearchinsight_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_knowledgesearchinsight_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_knowledgesearchinsight_MailboxTrackingFolders property.
     */
    public set msdyn_knowledgesearchinsight_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_knowledgesearchinsight_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_knowledgesearchinsight_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_knowledgesearchinsight_PrincipalObjectAttributeAccesses() {
        return this._msdyn_knowledgesearchinsight_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_knowledgesearchinsight_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_knowledgesearchinsight_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_knowledgesearchinsight_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_knowledgesearchinsight_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_knowledgesearchinsight_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_knowledgesearchinsight_ProcessSession() {
        return this._msdyn_knowledgesearchinsight_ProcessSession;
    };
    /**
     * Sets the msdyn_knowledgesearchinsight_ProcessSession property value. 
     * @param value Value to set for the msdyn_knowledgesearchinsight_ProcessSession property.
     */
    public set msdyn_knowledgesearchinsight_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_knowledgesearchinsight_ProcessSession = value;
    };
    /**
     * Gets the msdyn_knowledgesearchinsight_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_knowledgesearchinsight_SyncErrors() {
        return this._msdyn_knowledgesearchinsight_SyncErrors;
    };
    /**
     * Sets the msdyn_knowledgesearchinsight_SyncErrors property value. 
     * @param value Value to set for the msdyn_knowledgesearchinsight_SyncErrors property.
     */
    public set msdyn_knowledgesearchinsight_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_knowledgesearchinsight_SyncErrors = value;
    };
    /**
     * Gets the msdyn_knowledgesearchinsightid property value. 
     * @returns a string
     */
    public get msdyn_knowledgesearchinsightid() {
        return this._msdyn_knowledgesearchinsightid;
    };
    /**
     * Sets the msdyn_knowledgesearchinsightid property value. 
     * @param value Value to set for the msdyn_knowledgesearchinsightid property.
     */
    public set msdyn_knowledgesearchinsightid(value: string | undefined) {
        this._msdyn_knowledgesearchinsightid = value;
    };
    /**
     * Gets the msdyn_responsetime property value. 
     * @returns a integer
     */
    public get msdyn_responsetime() {
        return this._msdyn_responsetime;
    };
    /**
     * Sets the msdyn_responsetime property value. 
     * @param value Value to set for the msdyn_responsetime property.
     */
    public set msdyn_responsetime(value: number | undefined) {
        this._msdyn_responsetime = value;
    };
    /**
     * Gets the msdyn_resultcount property value. 
     * @returns a integer
     */
    public get msdyn_resultcount() {
        return this._msdyn_resultcount;
    };
    /**
     * Sets the msdyn_resultcount property value. 
     * @param value Value to set for the msdyn_resultcount property.
     */
    public set msdyn_resultcount(value: number | undefined) {
        this._msdyn_resultcount = value;
    };
    /**
     * Gets the msdyn_searchproviderid property value. 
     * @returns a string
     */
    public get msdyn_searchproviderid() {
        return this._msdyn_searchproviderid;
    };
    /**
     * Sets the msdyn_searchproviderid property value. 
     * @param value Value to set for the msdyn_searchproviderid property.
     */
    public set msdyn_searchproviderid(value: string | undefined) {
        this._msdyn_searchproviderid = value;
    };
    /**
     * Gets the msdyn_searchprovidername property value. 
     * @returns a string
     */
    public get msdyn_searchprovidername() {
        return this._msdyn_searchprovidername;
    };
    /**
     * Sets the msdyn_searchprovidername property value. 
     * @param value Value to set for the msdyn_searchprovidername property.
     */
    public set msdyn_searchprovidername(value: string | undefined) {
        this._msdyn_searchprovidername = value;
    };
    /**
     * Gets the msdyn_searchterm property value. 
     * @returns a string
     */
    public get msdyn_searchterm() {
        return this._msdyn_searchterm;
    };
    /**
     * Sets the msdyn_searchterm property value. 
     * @param value Value to set for the msdyn_searchterm property.
     */
    public set msdyn_searchterm(value: string | undefined) {
        this._msdyn_searchterm = value;
    };
    /**
     * Gets the msdyn_searchtype property value. 
     * @returns a string
     */
    public get msdyn_searchtype() {
        return this._msdyn_searchtype;
    };
    /**
     * Sets the msdyn_searchtype property value. 
     * @param value Value to set for the msdyn_searchtype property.
     */
    public set msdyn_searchtype(value: string | undefined) {
        this._msdyn_searchtype = value;
    };
    /**
     * Gets the msdyn_sortby property value. 
     * @returns a string
     */
    public get msdyn_sortby() {
        return this._msdyn_sortby;
    };
    /**
     * Sets the msdyn_sortby property value. 
     * @param value Value to set for the msdyn_sortby property.
     */
    public set msdyn_sortby(value: string | undefined) {
        this._msdyn_sortby = value;
    };
    /**
     * Gets the msdyn_timestamp property value. 
     * @returns a Date
     */
    public get msdyn_timestamp() {
        return this._msdyn_timestamp;
    };
    /**
     * Sets the msdyn_timestamp property value. 
     * @param value Value to set for the msdyn_timestamp property.
     */
    public set msdyn_timestamp(value: Date | undefined) {
        this._msdyn_timestamp = value;
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
        writer.writeStringValue("msdyn_applicationname", this.msdyn_applicationname);
        writer.writeStringValue("msdyn_correlationid", this.msdyn_correlationid);
        writer.writeStringValue("msdyn_customcontrolid", this.msdyn_customcontrolid);
        writer.writeStringValue("msdyn_entityrecordid", this.msdyn_entityrecordid);
        writer.writeStringValue("msdyn_entitytype", this.msdyn_entitytype);
        writer.writeStringValue("msdyn_filters", this.msdyn_filters);
        writer.writeStringValue("msdyn_initiatedby", this.msdyn_initiatedby);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_knowledgesearchinsight_AsyncOperations", this.msdyn_knowledgesearchinsight_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_knowledgesearchinsight_BulkDeleteFailures", this.msdyn_knowledgesearchinsight_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_knowledgesearchinsight_DuplicateBaseRecord", this.msdyn_knowledgesearchinsight_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_knowledgesearchinsight_DuplicateMatchingRecord", this.msdyn_knowledgesearchinsight_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_knowledgesearchinsight_MailboxTrackingFolders", this.msdyn_knowledgesearchinsight_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_knowledgesearchinsight_PrincipalObjectAttributeAccesses", this.msdyn_knowledgesearchinsight_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_knowledgesearchinsight_ProcessSession", this.msdyn_knowledgesearchinsight_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_knowledgesearchinsight_SyncErrors", this.msdyn_knowledgesearchinsight_SyncErrors);
        writer.writeStringValue("msdyn_knowledgesearchinsightid", this.msdyn_knowledgesearchinsightid);
        writer.writeNumberValue("msdyn_responsetime", this.msdyn_responsetime);
        writer.writeNumberValue("msdyn_resultcount", this.msdyn_resultcount);
        writer.writeStringValue("msdyn_searchproviderid", this.msdyn_searchproviderid);
        writer.writeStringValue("msdyn_searchprovidername", this.msdyn_searchprovidername);
        writer.writeStringValue("msdyn_searchterm", this.msdyn_searchterm);
        writer.writeStringValue("msdyn_searchtype", this.msdyn_searchtype);
        writer.writeStringValue("msdyn_sortby", this.msdyn_sortby);
        writer.writeDateValue("msdyn_timestamp", this.msdyn_timestamp);
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
