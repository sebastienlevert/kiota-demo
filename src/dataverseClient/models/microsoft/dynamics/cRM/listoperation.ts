import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createListFromDiscriminatorValue} from './createListFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, List, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Listoperation extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __listid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _added?: number | undefined;
    private _batchinput?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _errorcode?: number | undefined;
    private _errordescription?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _input?: string | undefined;
    private _listId?: List | undefined;
    private _listoperation_AsyncOperations?: Asyncoperation[] | undefined;
    private _listoperation_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _listoperation_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _listoperation_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _listoperation_ProcessSession?: Processsession[] | undefined;
    private _listoperation_SyncErrors?: Syncerror[] | undefined;
    private _listoperationid?: string | undefined;
    private _listoperationname?: string | undefined;
    private _listoperationprimaryname?: string | undefined;
    private _log?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _processed?: number | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _type?: number | undefined;
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
     * Gets the _listid_value property value. 
     * @returns a string
     */
    public get _listid_value() {
        return this.__listid_value;
    };
    /**
     * Sets the _listid_value property value. 
     * @param value Value to set for the _listid_value property.
     */
    public set _listid_value(value: string | undefined) {
        this.__listid_value = value;
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
     * Gets the added property value. 
     * @returns a integer
     */
    public get added() {
        return this._added;
    };
    /**
     * Sets the added property value. 
     * @param value Value to set for the added property.
     */
    public set added(value: number | undefined) {
        this._added = value;
    };
    /**
     * Gets the batchinput property value. 
     * @returns a string
     */
    public get batchinput() {
        return this._batchinput;
    };
    /**
     * Sets the batchinput property value. 
     * @param value Value to set for the batchinput property.
     */
    public set batchinput(value: string | undefined) {
        this._batchinput = value;
    };
    /**
     * Instantiates a new listoperation and sets the default values.
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
     * Gets the errorcode property value. 
     * @returns a integer
     */
    public get errorcode() {
        return this._errorcode;
    };
    /**
     * Sets the errorcode property value. 
     * @param value Value to set for the errorcode property.
     */
    public set errorcode(value: number | undefined) {
        this._errorcode = value;
    };
    /**
     * Gets the errordescription property value. 
     * @returns a string
     */
    public get errordescription() {
        return this._errordescription;
    };
    /**
     * Sets the errordescription property value. 
     * @param value Value to set for the errordescription property.
     */
    public set errordescription(value: string | undefined) {
        this._errordescription = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Listoperation)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Listoperation)._createdonbehalfby_value = n.getStringValue(); },
            "_listid_value": (o, n) => { (o as unknown as Listoperation)._listid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Listoperation)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Listoperation)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Listoperation)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Listoperation)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Listoperation)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Listoperation)._owninguser_value = n.getStringValue(); },
            "added": (o, n) => { (o as unknown as Listoperation).added = n.getNumberValue(); },
            "batchinput": (o, n) => { (o as unknown as Listoperation).batchinput = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Listoperation).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Listoperation).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Listoperation).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "errorcode": (o, n) => { (o as unknown as Listoperation).errorcode = n.getNumberValue(); },
            "errordescription": (o, n) => { (o as unknown as Listoperation).errordescription = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Listoperation).importsequencenumber = n.getNumberValue(); },
            "input": (o, n) => { (o as unknown as Listoperation).input = n.getStringValue(); },
            "listId": (o, n) => { (o as unknown as Listoperation).listId = n.getObjectValue<List>(createListFromDiscriminatorValue); },
            "listoperation_AsyncOperations": (o, n) => { (o as unknown as Listoperation).listoperation_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "listoperation_BulkDeleteFailures": (o, n) => { (o as unknown as Listoperation).listoperation_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "listoperation_MailboxTrackingFolders": (o, n) => { (o as unknown as Listoperation).listoperation_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "listoperation_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Listoperation).listoperation_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "listoperation_ProcessSession": (o, n) => { (o as unknown as Listoperation).listoperation_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "listoperation_SyncErrors": (o, n) => { (o as unknown as Listoperation).listoperation_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "listoperationid": (o, n) => { (o as unknown as Listoperation).listoperationid = n.getStringValue(); },
            "listoperationname": (o, n) => { (o as unknown as Listoperation).listoperationname = n.getStringValue(); },
            "listoperationprimaryname": (o, n) => { (o as unknown as Listoperation).listoperationprimaryname = n.getStringValue(); },
            "log": (o, n) => { (o as unknown as Listoperation).log = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Listoperation).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Listoperation).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Listoperation).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Listoperation).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Listoperation).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Listoperation).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Listoperation).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Listoperation).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "processed": (o, n) => { (o as unknown as Listoperation).processed = n.getNumberValue(); },
            "statecode": (o, n) => { (o as unknown as Listoperation).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Listoperation).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Listoperation).timezoneruleversionnumber = n.getNumberValue(); },
            "type": (o, n) => { (o as unknown as Listoperation).type = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Listoperation).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Listoperation).versionnumber = n.getNumberValue(); },
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
     * Gets the input property value. 
     * @returns a string
     */
    public get input() {
        return this._input;
    };
    /**
     * Sets the input property value. 
     * @param value Value to set for the input property.
     */
    public set input(value: string | undefined) {
        this._input = value;
    };
    /**
     * Gets the listId property value. 
     * @returns a list
     */
    public get listId() {
        return this._listId;
    };
    /**
     * Sets the listId property value. 
     * @param value Value to set for the ListId property.
     */
    public set listId(value: List | undefined) {
        this._listId = value;
    };
    /**
     * Gets the listoperation_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get listoperation_AsyncOperations() {
        return this._listoperation_AsyncOperations;
    };
    /**
     * Sets the listoperation_AsyncOperations property value. 
     * @param value Value to set for the listoperation_AsyncOperations property.
     */
    public set listoperation_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._listoperation_AsyncOperations = value;
    };
    /**
     * Gets the listoperation_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get listoperation_BulkDeleteFailures() {
        return this._listoperation_BulkDeleteFailures;
    };
    /**
     * Sets the listoperation_BulkDeleteFailures property value. 
     * @param value Value to set for the listoperation_BulkDeleteFailures property.
     */
    public set listoperation_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._listoperation_BulkDeleteFailures = value;
    };
    /**
     * Gets the listoperation_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get listoperation_MailboxTrackingFolders() {
        return this._listoperation_MailboxTrackingFolders;
    };
    /**
     * Sets the listoperation_MailboxTrackingFolders property value. 
     * @param value Value to set for the listoperation_MailboxTrackingFolders property.
     */
    public set listoperation_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._listoperation_MailboxTrackingFolders = value;
    };
    /**
     * Gets the listoperation_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get listoperation_PrincipalObjectAttributeAccesses() {
        return this._listoperation_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the listoperation_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the listoperation_PrincipalObjectAttributeAccesses property.
     */
    public set listoperation_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._listoperation_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the listoperation_ProcessSession property value. 
     * @returns a processsession
     */
    public get listoperation_ProcessSession() {
        return this._listoperation_ProcessSession;
    };
    /**
     * Sets the listoperation_ProcessSession property value. 
     * @param value Value to set for the listoperation_ProcessSession property.
     */
    public set listoperation_ProcessSession(value: Processsession[] | undefined) {
        this._listoperation_ProcessSession = value;
    };
    /**
     * Gets the listoperation_SyncErrors property value. 
     * @returns a syncerror
     */
    public get listoperation_SyncErrors() {
        return this._listoperation_SyncErrors;
    };
    /**
     * Sets the listoperation_SyncErrors property value. 
     * @param value Value to set for the listoperation_SyncErrors property.
     */
    public set listoperation_SyncErrors(value: Syncerror[] | undefined) {
        this._listoperation_SyncErrors = value;
    };
    /**
     * Gets the listoperationid property value. 
     * @returns a string
     */
    public get listoperationid() {
        return this._listoperationid;
    };
    /**
     * Sets the listoperationid property value. 
     * @param value Value to set for the listoperationid property.
     */
    public set listoperationid(value: string | undefined) {
        this._listoperationid = value;
    };
    /**
     * Gets the listoperationname property value. 
     * @returns a string
     */
    public get listoperationname() {
        return this._listoperationname;
    };
    /**
     * Sets the listoperationname property value. 
     * @param value Value to set for the listoperationname property.
     */
    public set listoperationname(value: string | undefined) {
        this._listoperationname = value;
    };
    /**
     * Gets the listoperationprimaryname property value. 
     * @returns a string
     */
    public get listoperationprimaryname() {
        return this._listoperationprimaryname;
    };
    /**
     * Sets the listoperationprimaryname property value. 
     * @param value Value to set for the listoperationprimaryname property.
     */
    public set listoperationprimaryname(value: string | undefined) {
        this._listoperationprimaryname = value;
    };
    /**
     * Gets the log property value. 
     * @returns a string
     */
    public get log() {
        return this._log;
    };
    /**
     * Sets the log property value. 
     * @param value Value to set for the log property.
     */
    public set log(value: string | undefined) {
        this._log = value;
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
     * Gets the processed property value. 
     * @returns a integer
     */
    public get processed() {
        return this._processed;
    };
    /**
     * Sets the processed property value. 
     * @param value Value to set for the processed property.
     */
    public set processed(value: number | undefined) {
        this._processed = value;
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
        writer.writeStringValue("_listid_value", this._listid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeNumberValue("added", this.added);
        writer.writeStringValue("batchinput", this.batchinput);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("errorcode", this.errorcode);
        writer.writeStringValue("errordescription", this.errordescription);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("input", this.input);
        writer.writeObjectValue<List>("listId", this.listId);
        writer.writeCollectionOfObjectValues<Asyncoperation>("listoperation_AsyncOperations", this.listoperation_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("listoperation_BulkDeleteFailures", this.listoperation_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("listoperation_MailboxTrackingFolders", this.listoperation_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("listoperation_PrincipalObjectAttributeAccesses", this.listoperation_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("listoperation_ProcessSession", this.listoperation_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("listoperation_SyncErrors", this.listoperation_SyncErrors);
        writer.writeStringValue("listoperationid", this.listoperationid);
        writer.writeStringValue("listoperationname", this.listoperationname);
        writer.writeStringValue("listoperationprimaryname", this.listoperationprimaryname);
        writer.writeStringValue("log", this.log);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("processed", this.processed);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("type", this.type);
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
     * Gets the type property value. 
     * @returns a integer
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: number | undefined) {
        this._type = value;
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
