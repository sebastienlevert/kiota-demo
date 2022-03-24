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

export class Msdyn_knowledgeinteractioninsight extends Crmbaseentity implements Parsable {
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
    private _msdyn_articlerank?: number | undefined;
    private _msdyn_articlerecordid?: string | undefined;
    private _msdyn_articlerelevance?: number | undefined;
    private _msdyn_interactioncontext?: string | undefined;
    private _msdyn_interactiontype?: string | undefined;
    private _msdyn_knowledgeinteractioninsight_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_knowledgeinteractioninsight_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_knowledgeinteractioninsight_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_knowledgeinteractioninsight_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_knowledgeinteractioninsight_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_knowledgeinteractioninsight_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_knowledgeinteractioninsight_ProcessSession?: Processsession[] | undefined;
    private _msdyn_knowledgeinteractioninsight_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_knowledgeinteractioninsightid?: string | undefined;
    private _msdyn_knowledgeoperationid?: string | undefined;
    private _msdyn_knowledgeoperationtype?: string | undefined;
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
     * Instantiates a new msdyn_knowledgeinteractioninsight and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_articlerank": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).msdyn_articlerank = n.getNumberValue(); },
            "msdyn_articlerecordid": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).msdyn_articlerecordid = n.getStringValue(); },
            "msdyn_articlerelevance": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).msdyn_articlerelevance = n.getNumberValue(); },
            "msdyn_interactioncontext": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).msdyn_interactioncontext = n.getStringValue(); },
            "msdyn_interactiontype": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).msdyn_interactiontype = n.getStringValue(); },
            "msdyn_knowledgeinteractioninsight_AsyncOperations": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).msdyn_knowledgeinteractioninsight_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_knowledgeinteractioninsight_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).msdyn_knowledgeinteractioninsight_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_knowledgeinteractioninsight_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).msdyn_knowledgeinteractioninsight_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_knowledgeinteractioninsight_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).msdyn_knowledgeinteractioninsight_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_knowledgeinteractioninsight_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).msdyn_knowledgeinteractioninsight_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_knowledgeinteractioninsight_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).msdyn_knowledgeinteractioninsight_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_knowledgeinteractioninsight_ProcessSession": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).msdyn_knowledgeinteractioninsight_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_knowledgeinteractioninsight_SyncErrors": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).msdyn_knowledgeinteractioninsight_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_knowledgeinteractioninsightid": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).msdyn_knowledgeinteractioninsightid = n.getStringValue(); },
            "msdyn_knowledgeoperationid": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).msdyn_knowledgeoperationid = n.getStringValue(); },
            "msdyn_knowledgeoperationtype": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).msdyn_knowledgeoperationtype = n.getStringValue(); },
            "msdyn_timestamp": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).msdyn_timestamp = n.getDateValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_knowledgeinteractioninsight).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_articlerank property value. 
     * @returns a integer
     */
    public get msdyn_articlerank() {
        return this._msdyn_articlerank;
    };
    /**
     * Sets the msdyn_articlerank property value. 
     * @param value Value to set for the msdyn_articlerank property.
     */
    public set msdyn_articlerank(value: number | undefined) {
        this._msdyn_articlerank = value;
    };
    /**
     * Gets the msdyn_articlerecordid property value. 
     * @returns a string
     */
    public get msdyn_articlerecordid() {
        return this._msdyn_articlerecordid;
    };
    /**
     * Sets the msdyn_articlerecordid property value. 
     * @param value Value to set for the msdyn_articlerecordid property.
     */
    public set msdyn_articlerecordid(value: string | undefined) {
        this._msdyn_articlerecordid = value;
    };
    /**
     * Gets the msdyn_articlerelevance property value. 
     * @returns a double
     */
    public get msdyn_articlerelevance() {
        return this._msdyn_articlerelevance;
    };
    /**
     * Sets the msdyn_articlerelevance property value. 
     * @param value Value to set for the msdyn_articlerelevance property.
     */
    public set msdyn_articlerelevance(value: number | undefined) {
        this._msdyn_articlerelevance = value;
    };
    /**
     * Gets the msdyn_interactioncontext property value. 
     * @returns a string
     */
    public get msdyn_interactioncontext() {
        return this._msdyn_interactioncontext;
    };
    /**
     * Sets the msdyn_interactioncontext property value. 
     * @param value Value to set for the msdyn_interactioncontext property.
     */
    public set msdyn_interactioncontext(value: string | undefined) {
        this._msdyn_interactioncontext = value;
    };
    /**
     * Gets the msdyn_interactiontype property value. 
     * @returns a string
     */
    public get msdyn_interactiontype() {
        return this._msdyn_interactiontype;
    };
    /**
     * Sets the msdyn_interactiontype property value. 
     * @param value Value to set for the msdyn_interactiontype property.
     */
    public set msdyn_interactiontype(value: string | undefined) {
        this._msdyn_interactiontype = value;
    };
    /**
     * Gets the msdyn_knowledgeinteractioninsight_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_knowledgeinteractioninsight_AsyncOperations() {
        return this._msdyn_knowledgeinteractioninsight_AsyncOperations;
    };
    /**
     * Sets the msdyn_knowledgeinteractioninsight_AsyncOperations property value. 
     * @param value Value to set for the msdyn_knowledgeinteractioninsight_AsyncOperations property.
     */
    public set msdyn_knowledgeinteractioninsight_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_knowledgeinteractioninsight_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_knowledgeinteractioninsight_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_knowledgeinteractioninsight_BulkDeleteFailures() {
        return this._msdyn_knowledgeinteractioninsight_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_knowledgeinteractioninsight_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_knowledgeinteractioninsight_BulkDeleteFailures property.
     */
    public set msdyn_knowledgeinteractioninsight_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_knowledgeinteractioninsight_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_knowledgeinteractioninsight_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_knowledgeinteractioninsight_DuplicateBaseRecord() {
        return this._msdyn_knowledgeinteractioninsight_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_knowledgeinteractioninsight_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_knowledgeinteractioninsight_DuplicateBaseRecord property.
     */
    public set msdyn_knowledgeinteractioninsight_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_knowledgeinteractioninsight_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_knowledgeinteractioninsight_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_knowledgeinteractioninsight_DuplicateMatchingRecord() {
        return this._msdyn_knowledgeinteractioninsight_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_knowledgeinteractioninsight_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_knowledgeinteractioninsight_DuplicateMatchingRecord property.
     */
    public set msdyn_knowledgeinteractioninsight_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_knowledgeinteractioninsight_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_knowledgeinteractioninsight_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_knowledgeinteractioninsight_MailboxTrackingFolders() {
        return this._msdyn_knowledgeinteractioninsight_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_knowledgeinteractioninsight_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_knowledgeinteractioninsight_MailboxTrackingFolders property.
     */
    public set msdyn_knowledgeinteractioninsight_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_knowledgeinteractioninsight_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_knowledgeinteractioninsight_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_knowledgeinteractioninsight_PrincipalObjectAttributeAccesses() {
        return this._msdyn_knowledgeinteractioninsight_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_knowledgeinteractioninsight_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_knowledgeinteractioninsight_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_knowledgeinteractioninsight_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_knowledgeinteractioninsight_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_knowledgeinteractioninsight_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_knowledgeinteractioninsight_ProcessSession() {
        return this._msdyn_knowledgeinteractioninsight_ProcessSession;
    };
    /**
     * Sets the msdyn_knowledgeinteractioninsight_ProcessSession property value. 
     * @param value Value to set for the msdyn_knowledgeinteractioninsight_ProcessSession property.
     */
    public set msdyn_knowledgeinteractioninsight_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_knowledgeinteractioninsight_ProcessSession = value;
    };
    /**
     * Gets the msdyn_knowledgeinteractioninsight_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_knowledgeinteractioninsight_SyncErrors() {
        return this._msdyn_knowledgeinteractioninsight_SyncErrors;
    };
    /**
     * Sets the msdyn_knowledgeinteractioninsight_SyncErrors property value. 
     * @param value Value to set for the msdyn_knowledgeinteractioninsight_SyncErrors property.
     */
    public set msdyn_knowledgeinteractioninsight_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_knowledgeinteractioninsight_SyncErrors = value;
    };
    /**
     * Gets the msdyn_knowledgeinteractioninsightid property value. 
     * @returns a string
     */
    public get msdyn_knowledgeinteractioninsightid() {
        return this._msdyn_knowledgeinteractioninsightid;
    };
    /**
     * Sets the msdyn_knowledgeinteractioninsightid property value. 
     * @param value Value to set for the msdyn_knowledgeinteractioninsightid property.
     */
    public set msdyn_knowledgeinteractioninsightid(value: string | undefined) {
        this._msdyn_knowledgeinteractioninsightid = value;
    };
    /**
     * Gets the msdyn_knowledgeoperationid property value. 
     * @returns a string
     */
    public get msdyn_knowledgeoperationid() {
        return this._msdyn_knowledgeoperationid;
    };
    /**
     * Sets the msdyn_knowledgeoperationid property value. 
     * @param value Value to set for the msdyn_knowledgeoperationid property.
     */
    public set msdyn_knowledgeoperationid(value: string | undefined) {
        this._msdyn_knowledgeoperationid = value;
    };
    /**
     * Gets the msdyn_knowledgeoperationtype property value. 
     * @returns a string
     */
    public get msdyn_knowledgeoperationtype() {
        return this._msdyn_knowledgeoperationtype;
    };
    /**
     * Sets the msdyn_knowledgeoperationtype property value. 
     * @param value Value to set for the msdyn_knowledgeoperationtype property.
     */
    public set msdyn_knowledgeoperationtype(value: string | undefined) {
        this._msdyn_knowledgeoperationtype = value;
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
        writer.writeNumberValue("msdyn_articlerank", this.msdyn_articlerank);
        writer.writeStringValue("msdyn_articlerecordid", this.msdyn_articlerecordid);
        writer.writeNumberValue("msdyn_articlerelevance", this.msdyn_articlerelevance);
        writer.writeStringValue("msdyn_interactioncontext", this.msdyn_interactioncontext);
        writer.writeStringValue("msdyn_interactiontype", this.msdyn_interactiontype);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_knowledgeinteractioninsight_AsyncOperations", this.msdyn_knowledgeinteractioninsight_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_knowledgeinteractioninsight_BulkDeleteFailures", this.msdyn_knowledgeinteractioninsight_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_knowledgeinteractioninsight_DuplicateBaseRecord", this.msdyn_knowledgeinteractioninsight_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_knowledgeinteractioninsight_DuplicateMatchingRecord", this.msdyn_knowledgeinteractioninsight_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_knowledgeinteractioninsight_MailboxTrackingFolders", this.msdyn_knowledgeinteractioninsight_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_knowledgeinteractioninsight_PrincipalObjectAttributeAccesses", this.msdyn_knowledgeinteractioninsight_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_knowledgeinteractioninsight_ProcessSession", this.msdyn_knowledgeinteractioninsight_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_knowledgeinteractioninsight_SyncErrors", this.msdyn_knowledgeinteractioninsight_SyncErrors);
        writer.writeStringValue("msdyn_knowledgeinteractioninsightid", this.msdyn_knowledgeinteractioninsightid);
        writer.writeStringValue("msdyn_knowledgeoperationid", this.msdyn_knowledgeoperationid);
        writer.writeStringValue("msdyn_knowledgeoperationtype", this.msdyn_knowledgeoperationtype);
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
