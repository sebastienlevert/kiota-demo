import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Account, Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Incident, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_aicontactsuggestion extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_sourcerecord_value?: string | undefined;
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
    private _msdyn_aicontactsuggestion_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_aicontactsuggestion_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_aicontactsuggestion_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_aicontactsuggestion_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_aicontactsuggestion_ProcessSession?: Processsession[] | undefined;
    private _msdyn_aicontactsuggestion_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_aicontactsuggestionid?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_sourcerecord_account?: Account | undefined;
    private _msdyn_sourcerecord_Incident_incident?: Incident | undefined;
    private _msdyn_suggestionresponse?: string | undefined;
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
     * Gets the _msdyn_sourcerecord_value property value. 
     * @returns a string
     */
    public get _msdyn_sourcerecord_value() {
        return this.__msdyn_sourcerecord_value;
    };
    /**
     * Sets the _msdyn_sourcerecord_value property value. 
     * @param value Value to set for the _msdyn_sourcerecord_value property.
     */
    public set _msdyn_sourcerecord_value(value: string | undefined) {
        this.__msdyn_sourcerecord_value = value;
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
     * Instantiates a new msdyn_aicontactsuggestion and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_sourcerecord_value": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion)._msdyn_sourcerecord_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_aicontactsuggestion_AsyncOperations": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).msdyn_aicontactsuggestion_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_aicontactsuggestion_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).msdyn_aicontactsuggestion_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_aicontactsuggestion_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).msdyn_aicontactsuggestion_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_aicontactsuggestion_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).msdyn_aicontactsuggestion_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_aicontactsuggestion_ProcessSession": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).msdyn_aicontactsuggestion_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_aicontactsuggestion_SyncErrors": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).msdyn_aicontactsuggestion_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_aicontactsuggestionid": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).msdyn_aicontactsuggestionid = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).msdyn_name = n.getStringValue(); },
            "msdyn_sourcerecord_account": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).msdyn_sourcerecord_account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_sourcerecord_Incident_incident": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).msdyn_sourcerecord_Incident_incident = n.getObjectValue<Incident>(createIncidentFromDiscriminatorValue); },
            "msdyn_suggestionresponse": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).msdyn_suggestionresponse = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_aicontactsuggestion).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_aicontactsuggestion_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_aicontactsuggestion_AsyncOperations() {
        return this._msdyn_aicontactsuggestion_AsyncOperations;
    };
    /**
     * Sets the msdyn_aicontactsuggestion_AsyncOperations property value. 
     * @param value Value to set for the msdyn_aicontactsuggestion_AsyncOperations property.
     */
    public set msdyn_aicontactsuggestion_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_aicontactsuggestion_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_aicontactsuggestion_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_aicontactsuggestion_BulkDeleteFailures() {
        return this._msdyn_aicontactsuggestion_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_aicontactsuggestion_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_aicontactsuggestion_BulkDeleteFailures property.
     */
    public set msdyn_aicontactsuggestion_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_aicontactsuggestion_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_aicontactsuggestion_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_aicontactsuggestion_MailboxTrackingFolders() {
        return this._msdyn_aicontactsuggestion_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_aicontactsuggestion_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_aicontactsuggestion_MailboxTrackingFolders property.
     */
    public set msdyn_aicontactsuggestion_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_aicontactsuggestion_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_aicontactsuggestion_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_aicontactsuggestion_PrincipalObjectAttributeAccesses() {
        return this._msdyn_aicontactsuggestion_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_aicontactsuggestion_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_aicontactsuggestion_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_aicontactsuggestion_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_aicontactsuggestion_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_aicontactsuggestion_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_aicontactsuggestion_ProcessSession() {
        return this._msdyn_aicontactsuggestion_ProcessSession;
    };
    /**
     * Sets the msdyn_aicontactsuggestion_ProcessSession property value. 
     * @param value Value to set for the msdyn_aicontactsuggestion_ProcessSession property.
     */
    public set msdyn_aicontactsuggestion_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_aicontactsuggestion_ProcessSession = value;
    };
    /**
     * Gets the msdyn_aicontactsuggestion_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_aicontactsuggestion_SyncErrors() {
        return this._msdyn_aicontactsuggestion_SyncErrors;
    };
    /**
     * Sets the msdyn_aicontactsuggestion_SyncErrors property value. 
     * @param value Value to set for the msdyn_aicontactsuggestion_SyncErrors property.
     */
    public set msdyn_aicontactsuggestion_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_aicontactsuggestion_SyncErrors = value;
    };
    /**
     * Gets the msdyn_aicontactsuggestionid property value. 
     * @returns a string
     */
    public get msdyn_aicontactsuggestionid() {
        return this._msdyn_aicontactsuggestionid;
    };
    /**
     * Sets the msdyn_aicontactsuggestionid property value. 
     * @param value Value to set for the msdyn_aicontactsuggestionid property.
     */
    public set msdyn_aicontactsuggestionid(value: string | undefined) {
        this._msdyn_aicontactsuggestionid = value;
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
     * Gets the msdyn_sourcerecord_account property value. 
     * @returns a account
     */
    public get msdyn_sourcerecord_account() {
        return this._msdyn_sourcerecord_account;
    };
    /**
     * Sets the msdyn_sourcerecord_account property value. 
     * @param value Value to set for the msdyn_sourcerecord_account property.
     */
    public set msdyn_sourcerecord_account(value: Account | undefined) {
        this._msdyn_sourcerecord_account = value;
    };
    /**
     * Gets the msdyn_sourcerecord_Incident_incident property value. 
     * @returns a incident
     */
    public get msdyn_sourcerecord_Incident_incident() {
        return this._msdyn_sourcerecord_Incident_incident;
    };
    /**
     * Sets the msdyn_sourcerecord_Incident_incident property value. 
     * @param value Value to set for the msdyn_sourcerecord_Incident_incident property.
     */
    public set msdyn_sourcerecord_Incident_incident(value: Incident | undefined) {
        this._msdyn_sourcerecord_Incident_incident = value;
    };
    /**
     * Gets the msdyn_suggestionresponse property value. 
     * @returns a string
     */
    public get msdyn_suggestionresponse() {
        return this._msdyn_suggestionresponse;
    };
    /**
     * Sets the msdyn_suggestionresponse property value. 
     * @param value Value to set for the msdyn_suggestionresponse property.
     */
    public set msdyn_suggestionresponse(value: string | undefined) {
        this._msdyn_suggestionresponse = value;
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
        writer.writeStringValue("_msdyn_sourcerecord_value", this._msdyn_sourcerecord_value);
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
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_aicontactsuggestion_AsyncOperations", this.msdyn_aicontactsuggestion_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_aicontactsuggestion_BulkDeleteFailures", this.msdyn_aicontactsuggestion_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_aicontactsuggestion_MailboxTrackingFolders", this.msdyn_aicontactsuggestion_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_aicontactsuggestion_PrincipalObjectAttributeAccesses", this.msdyn_aicontactsuggestion_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_aicontactsuggestion_ProcessSession", this.msdyn_aicontactsuggestion_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_aicontactsuggestion_SyncErrors", this.msdyn_aicontactsuggestion_SyncErrors);
        writer.writeStringValue("msdyn_aicontactsuggestionid", this.msdyn_aicontactsuggestionid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Account>("msdyn_sourcerecord_account", this.msdyn_sourcerecord_account);
        writer.writeObjectValue<Incident>("msdyn_sourcerecord_Incident_incident", this.msdyn_sourcerecord_Incident_incident);
        writer.writeStringValue("msdyn_suggestionresponse", this.msdyn_suggestionresponse);
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
