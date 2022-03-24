import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBotFromDiscriminatorValue} from './createBotFromDiscriminatorValue';
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
import {Asyncoperation, Bot, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Conversationtranscript extends Crmbaseentity implements Parsable {
    private __bot_conversationtranscriptid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _bot_conversationtranscriptId?: Bot | undefined;
    private _content?: string | undefined;
    private _conversationstarttime?: Date | undefined;
    private _conversationtranscript_AsyncOperations?: Asyncoperation[] | undefined;
    private _conversationtranscript_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _conversationtranscript_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _conversationtranscript_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _conversationtranscript_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _conversationtranscript_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _conversationtranscript_ProcessSession?: Processsession[] | undefined;
    private _conversationtranscript_SyncErrors?: Syncerror[] | undefined;
    private _conversationtranscriptid?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _metadata?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _schematype?: string | undefined;
    private _schemaversion?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _bot_conversationtranscriptid_value property value. 
     * @returns a string
     */
    public get _bot_conversationtranscriptid_value() {
        return this.__bot_conversationtranscriptid_value;
    };
    /**
     * Sets the _bot_conversationtranscriptid_value property value. 
     * @param value Value to set for the _bot_conversationtranscriptid_value property.
     */
    public set _bot_conversationtranscriptid_value(value: string | undefined) {
        this.__bot_conversationtranscriptid_value = value;
    };
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
     * Gets the bot_conversationtranscriptId property value. 
     * @returns a bot
     */
    public get bot_conversationtranscriptId() {
        return this._bot_conversationtranscriptId;
    };
    /**
     * Sets the bot_conversationtranscriptId property value. 
     * @param value Value to set for the bot_conversationtranscriptId property.
     */
    public set bot_conversationtranscriptId(value: Bot | undefined) {
        this._bot_conversationtranscriptId = value;
    };
    /**
     * Instantiates a new conversationtranscript and sets the default values.
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
     * Gets the conversationstarttime property value. 
     * @returns a Date
     */
    public get conversationstarttime() {
        return this._conversationstarttime;
    };
    /**
     * Sets the conversationstarttime property value. 
     * @param value Value to set for the conversationstarttime property.
     */
    public set conversationstarttime(value: Date | undefined) {
        this._conversationstarttime = value;
    };
    /**
     * Gets the conversationtranscript_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get conversationtranscript_AsyncOperations() {
        return this._conversationtranscript_AsyncOperations;
    };
    /**
     * Sets the conversationtranscript_AsyncOperations property value. 
     * @param value Value to set for the conversationtranscript_AsyncOperations property.
     */
    public set conversationtranscript_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._conversationtranscript_AsyncOperations = value;
    };
    /**
     * Gets the conversationtranscript_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get conversationtranscript_BulkDeleteFailures() {
        return this._conversationtranscript_BulkDeleteFailures;
    };
    /**
     * Sets the conversationtranscript_BulkDeleteFailures property value. 
     * @param value Value to set for the conversationtranscript_BulkDeleteFailures property.
     */
    public set conversationtranscript_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._conversationtranscript_BulkDeleteFailures = value;
    };
    /**
     * Gets the conversationtranscript_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get conversationtranscript_DuplicateBaseRecord() {
        return this._conversationtranscript_DuplicateBaseRecord;
    };
    /**
     * Sets the conversationtranscript_DuplicateBaseRecord property value. 
     * @param value Value to set for the conversationtranscript_DuplicateBaseRecord property.
     */
    public set conversationtranscript_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._conversationtranscript_DuplicateBaseRecord = value;
    };
    /**
     * Gets the conversationtranscript_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get conversationtranscript_DuplicateMatchingRecord() {
        return this._conversationtranscript_DuplicateMatchingRecord;
    };
    /**
     * Sets the conversationtranscript_DuplicateMatchingRecord property value. 
     * @param value Value to set for the conversationtranscript_DuplicateMatchingRecord property.
     */
    public set conversationtranscript_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._conversationtranscript_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the conversationtranscript_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get conversationtranscript_MailboxTrackingFolders() {
        return this._conversationtranscript_MailboxTrackingFolders;
    };
    /**
     * Sets the conversationtranscript_MailboxTrackingFolders property value. 
     * @param value Value to set for the conversationtranscript_MailboxTrackingFolders property.
     */
    public set conversationtranscript_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._conversationtranscript_MailboxTrackingFolders = value;
    };
    /**
     * Gets the conversationtranscript_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get conversationtranscript_PrincipalObjectAttributeAccesses() {
        return this._conversationtranscript_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the conversationtranscript_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the conversationtranscript_PrincipalObjectAttributeAccesses property.
     */
    public set conversationtranscript_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._conversationtranscript_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the conversationtranscript_ProcessSession property value. 
     * @returns a processsession
     */
    public get conversationtranscript_ProcessSession() {
        return this._conversationtranscript_ProcessSession;
    };
    /**
     * Sets the conversationtranscript_ProcessSession property value. 
     * @param value Value to set for the conversationtranscript_ProcessSession property.
     */
    public set conversationtranscript_ProcessSession(value: Processsession[] | undefined) {
        this._conversationtranscript_ProcessSession = value;
    };
    /**
     * Gets the conversationtranscript_SyncErrors property value. 
     * @returns a syncerror
     */
    public get conversationtranscript_SyncErrors() {
        return this._conversationtranscript_SyncErrors;
    };
    /**
     * Sets the conversationtranscript_SyncErrors property value. 
     * @param value Value to set for the conversationtranscript_SyncErrors property.
     */
    public set conversationtranscript_SyncErrors(value: Syncerror[] | undefined) {
        this._conversationtranscript_SyncErrors = value;
    };
    /**
     * Gets the conversationtranscriptid property value. 
     * @returns a string
     */
    public get conversationtranscriptid() {
        return this._conversationtranscriptid;
    };
    /**
     * Sets the conversationtranscriptid property value. 
     * @param value Value to set for the conversationtranscriptid property.
     */
    public set conversationtranscriptid(value: string | undefined) {
        this._conversationtranscriptid = value;
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
            "_bot_conversationtranscriptid_value": (o, n) => { (o as unknown as Conversationtranscript)._bot_conversationtranscriptid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Conversationtranscript)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Conversationtranscript)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Conversationtranscript)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Conversationtranscript)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Conversationtranscript)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Conversationtranscript)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Conversationtranscript)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Conversationtranscript)._owninguser_value = n.getStringValue(); },
            "bot_conversationtranscriptId": (o, n) => { (o as unknown as Conversationtranscript).bot_conversationtranscriptId = n.getObjectValue<Bot>(createBotFromDiscriminatorValue); },
            "content": (o, n) => { (o as unknown as Conversationtranscript).content = n.getStringValue(); },
            "conversationstarttime": (o, n) => { (o as unknown as Conversationtranscript).conversationstarttime = n.getDateValue(); },
            "conversationtranscript_AsyncOperations": (o, n) => { (o as unknown as Conversationtranscript).conversationtranscript_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "conversationtranscript_BulkDeleteFailures": (o, n) => { (o as unknown as Conversationtranscript).conversationtranscript_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "conversationtranscript_DuplicateBaseRecord": (o, n) => { (o as unknown as Conversationtranscript).conversationtranscript_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "conversationtranscript_DuplicateMatchingRecord": (o, n) => { (o as unknown as Conversationtranscript).conversationtranscript_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "conversationtranscript_MailboxTrackingFolders": (o, n) => { (o as unknown as Conversationtranscript).conversationtranscript_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "conversationtranscript_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Conversationtranscript).conversationtranscript_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "conversationtranscript_ProcessSession": (o, n) => { (o as unknown as Conversationtranscript).conversationtranscript_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "conversationtranscript_SyncErrors": (o, n) => { (o as unknown as Conversationtranscript).conversationtranscript_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "conversationtranscriptid": (o, n) => { (o as unknown as Conversationtranscript).conversationtranscriptid = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Conversationtranscript).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Conversationtranscript).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Conversationtranscript).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Conversationtranscript).importsequencenumber = n.getNumberValue(); },
            "metadata": (o, n) => { (o as unknown as Conversationtranscript).metadata = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Conversationtranscript).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Conversationtranscript).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Conversationtranscript).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Conversationtranscript).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Conversationtranscript).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Conversationtranscript).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Conversationtranscript).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Conversationtranscript).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Conversationtranscript).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "schematype": (o, n) => { (o as unknown as Conversationtranscript).schematype = n.getStringValue(); },
            "schemaversion": (o, n) => { (o as unknown as Conversationtranscript).schemaversion = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Conversationtranscript).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Conversationtranscript).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Conversationtranscript).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Conversationtranscript).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Conversationtranscript).versionnumber = n.getNumberValue(); },
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
     * Gets the metadata property value. 
     * @returns a string
     */
    public get metadata() {
        return this._metadata;
    };
    /**
     * Sets the metadata property value. 
     * @param value Value to set for the metadata property.
     */
    public set metadata(value: string | undefined) {
        this._metadata = value;
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
     * Gets the schematype property value. 
     * @returns a string
     */
    public get schematype() {
        return this._schematype;
    };
    /**
     * Sets the schematype property value. 
     * @param value Value to set for the schematype property.
     */
    public set schematype(value: string | undefined) {
        this._schematype = value;
    };
    /**
     * Gets the schemaversion property value. 
     * @returns a string
     */
    public get schemaversion() {
        return this._schemaversion;
    };
    /**
     * Sets the schemaversion property value. 
     * @param value Value to set for the schemaversion property.
     */
    public set schemaversion(value: string | undefined) {
        this._schemaversion = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_bot_conversationtranscriptid_value", this._bot_conversationtranscriptid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Bot>("bot_conversationtranscriptId", this.bot_conversationtranscriptId);
        writer.writeStringValue("content", this.content);
        writer.writeDateValue("conversationstarttime", this.conversationstarttime);
        writer.writeCollectionOfObjectValues<Asyncoperation>("conversationtranscript_AsyncOperations", this.conversationtranscript_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("conversationtranscript_BulkDeleteFailures", this.conversationtranscript_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("conversationtranscript_DuplicateBaseRecord", this.conversationtranscript_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("conversationtranscript_DuplicateMatchingRecord", this.conversationtranscript_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("conversationtranscript_MailboxTrackingFolders", this.conversationtranscript_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("conversationtranscript_PrincipalObjectAttributeAccesses", this.conversationtranscript_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("conversationtranscript_ProcessSession", this.conversationtranscript_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("conversationtranscript_SyncErrors", this.conversationtranscript_SyncErrors);
        writer.writeStringValue("conversationtranscriptid", this.conversationtranscriptid);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("metadata", this.metadata);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("schematype", this.schematype);
        writer.writeStringValue("schemaversion", this.schemaversion);
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
