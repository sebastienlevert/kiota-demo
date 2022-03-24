import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBulkoperationFromDiscriminatorValue} from './createBulkoperationFromDiscriminatorValue';
import {createCampaignactivityFromDiscriminatorValue} from './createCampaignactivityFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Account, Activitypointer, Asyncoperation, Bulkdeletefailure, Bulkoperation, Campaignactivity, Contact, Crmbaseentity, Lead, Mailboxtrackingfolder, Opportunity, Principalobjectattributeaccess, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Bulkoperationlog extends Crmbaseentity implements Parsable {
    private __bulkoperationid_value?: string | undefined;
    private __campaignactivityid_value?: string | undefined;
    private __createdobjectid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __regardingobjectid_value?: string | undefined;
    private _additionalinfo?: string | undefined;
    private _bulkoperationid?: Bulkoperation | undefined;
    private _bulkoperationid_activitypointer?: Activitypointer | undefined;
    private _bulkOperationLog_AsyncOperations?: Asyncoperation[] | undefined;
    private _bulkOperationLog_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _bulkoperationlog_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _bulkoperationlog_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _bulkoperationlog_SyncErrors?: Syncerror[] | undefined;
    private _bulkoperationlogid?: string | undefined;
    private _campaignActivityId_Logs?: Campaignactivity | undefined;
    private _createdobjectid_account?: Account | undefined;
    private _createdobjectid_activitypointer?: Activitypointer | undefined;
    private _createdobjectid_contact?: Contact | undefined;
    private _createdobjectid_lead?: Lead | undefined;
    private _createdobjectid_opportunity?: Opportunity | undefined;
    private _errordescriptionformatted?: string | undefined;
    private _errornumber?: number | undefined;
    private _errornumberformatted?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _regardingobjectid_account?: Account | undefined;
    private _regardingobjectid_contact?: Contact | undefined;
    private _regardingobjectid_lead?: Lead | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _bulkoperationid_value property value. 
     * @returns a string
     */
    public get _bulkoperationid_value() {
        return this.__bulkoperationid_value;
    };
    /**
     * Sets the _bulkoperationid_value property value. 
     * @param value Value to set for the _bulkoperationid_value property.
     */
    public set _bulkoperationid_value(value: string | undefined) {
        this.__bulkoperationid_value = value;
    };
    /**
     * Gets the _campaignactivityid_value property value. 
     * @returns a string
     */
    public get _campaignactivityid_value() {
        return this.__campaignactivityid_value;
    };
    /**
     * Sets the _campaignactivityid_value property value. 
     * @param value Value to set for the _campaignactivityid_value property.
     */
    public set _campaignactivityid_value(value: string | undefined) {
        this.__campaignactivityid_value = value;
    };
    /**
     * Gets the _createdobjectid_value property value. 
     * @returns a string
     */
    public get _createdobjectid_value() {
        return this.__createdobjectid_value;
    };
    /**
     * Sets the _createdobjectid_value property value. 
     * @param value Value to set for the _createdobjectid_value property.
     */
    public set _createdobjectid_value(value: string | undefined) {
        this.__createdobjectid_value = value;
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
     * Gets the _regardingobjectid_value property value. 
     * @returns a string
     */
    public get _regardingobjectid_value() {
        return this.__regardingobjectid_value;
    };
    /**
     * Sets the _regardingobjectid_value property value. 
     * @param value Value to set for the _regardingobjectid_value property.
     */
    public set _regardingobjectid_value(value: string | undefined) {
        this.__regardingobjectid_value = value;
    };
    /**
     * Gets the additionalinfo property value. 
     * @returns a string
     */
    public get additionalinfo() {
        return this._additionalinfo;
    };
    /**
     * Sets the additionalinfo property value. 
     * @param value Value to set for the additionalinfo property.
     */
    public set additionalinfo(value: string | undefined) {
        this._additionalinfo = value;
    };
    /**
     * Gets the bulkoperationid property value. 
     * @returns a bulkoperation
     */
    public get bulkoperationid() {
        return this._bulkoperationid;
    };
    /**
     * Sets the bulkoperationid property value. 
     * @param value Value to set for the bulkoperationid property.
     */
    public set bulkoperationid(value: Bulkoperation | undefined) {
        this._bulkoperationid = value;
    };
    /**
     * Gets the bulkoperationid_activitypointer property value. 
     * @returns a activitypointer
     */
    public get bulkoperationid_activitypointer() {
        return this._bulkoperationid_activitypointer;
    };
    /**
     * Sets the bulkoperationid_activitypointer property value. 
     * @param value Value to set for the bulkoperationid_activitypointer property.
     */
    public set bulkoperationid_activitypointer(value: Activitypointer | undefined) {
        this._bulkoperationid_activitypointer = value;
    };
    /**
     * Gets the bulkOperationLog_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get bulkOperationLog_AsyncOperations() {
        return this._bulkOperationLog_AsyncOperations;
    };
    /**
     * Sets the bulkOperationLog_AsyncOperations property value. 
     * @param value Value to set for the BulkOperationLog_AsyncOperations property.
     */
    public set bulkOperationLog_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._bulkOperationLog_AsyncOperations = value;
    };
    /**
     * Gets the bulkOperationLog_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get bulkOperationLog_BulkDeleteFailures() {
        return this._bulkOperationLog_BulkDeleteFailures;
    };
    /**
     * Sets the bulkOperationLog_BulkDeleteFailures property value. 
     * @param value Value to set for the BulkOperationLog_BulkDeleteFailures property.
     */
    public set bulkOperationLog_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._bulkOperationLog_BulkDeleteFailures = value;
    };
    /**
     * Gets the bulkoperationlog_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get bulkoperationlog_MailboxTrackingFolders() {
        return this._bulkoperationlog_MailboxTrackingFolders;
    };
    /**
     * Sets the bulkoperationlog_MailboxTrackingFolders property value. 
     * @param value Value to set for the bulkoperationlog_MailboxTrackingFolders property.
     */
    public set bulkoperationlog_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._bulkoperationlog_MailboxTrackingFolders = value;
    };
    /**
     * Gets the bulkoperationlog_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get bulkoperationlog_PrincipalObjectAttributeAccesses() {
        return this._bulkoperationlog_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the bulkoperationlog_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the bulkoperationlog_PrincipalObjectAttributeAccesses property.
     */
    public set bulkoperationlog_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._bulkoperationlog_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the bulkoperationlog_SyncErrors property value. 
     * @returns a syncerror
     */
    public get bulkoperationlog_SyncErrors() {
        return this._bulkoperationlog_SyncErrors;
    };
    /**
     * Sets the bulkoperationlog_SyncErrors property value. 
     * @param value Value to set for the bulkoperationlog_SyncErrors property.
     */
    public set bulkoperationlog_SyncErrors(value: Syncerror[] | undefined) {
        this._bulkoperationlog_SyncErrors = value;
    };
    /**
     * Gets the bulkoperationlogid property value. 
     * @returns a string
     */
    public get bulkoperationlogid() {
        return this._bulkoperationlogid;
    };
    /**
     * Sets the bulkoperationlogid property value. 
     * @param value Value to set for the bulkoperationlogid property.
     */
    public set bulkoperationlogid(value: string | undefined) {
        this._bulkoperationlogid = value;
    };
    /**
     * Gets the campaignActivityId_Logs property value. 
     * @returns a campaignactivity
     */
    public get campaignActivityId_Logs() {
        return this._campaignActivityId_Logs;
    };
    /**
     * Sets the campaignActivityId_Logs property value. 
     * @param value Value to set for the CampaignActivityId_Logs property.
     */
    public set campaignActivityId_Logs(value: Campaignactivity | undefined) {
        this._campaignActivityId_Logs = value;
    };
    /**
     * Instantiates a new bulkoperationlog and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdobjectid_account property value. 
     * @returns a account
     */
    public get createdobjectid_account() {
        return this._createdobjectid_account;
    };
    /**
     * Sets the createdobjectid_account property value. 
     * @param value Value to set for the createdobjectid_account property.
     */
    public set createdobjectid_account(value: Account | undefined) {
        this._createdobjectid_account = value;
    };
    /**
     * Gets the createdobjectid_activitypointer property value. 
     * @returns a activitypointer
     */
    public get createdobjectid_activitypointer() {
        return this._createdobjectid_activitypointer;
    };
    /**
     * Sets the createdobjectid_activitypointer property value. 
     * @param value Value to set for the createdobjectid_activitypointer property.
     */
    public set createdobjectid_activitypointer(value: Activitypointer | undefined) {
        this._createdobjectid_activitypointer = value;
    };
    /**
     * Gets the createdobjectid_contact property value. 
     * @returns a contact
     */
    public get createdobjectid_contact() {
        return this._createdobjectid_contact;
    };
    /**
     * Sets the createdobjectid_contact property value. 
     * @param value Value to set for the createdobjectid_contact property.
     */
    public set createdobjectid_contact(value: Contact | undefined) {
        this._createdobjectid_contact = value;
    };
    /**
     * Gets the createdobjectid_lead property value. 
     * @returns a lead
     */
    public get createdobjectid_lead() {
        return this._createdobjectid_lead;
    };
    /**
     * Sets the createdobjectid_lead property value. 
     * @param value Value to set for the createdobjectid_lead property.
     */
    public set createdobjectid_lead(value: Lead | undefined) {
        this._createdobjectid_lead = value;
    };
    /**
     * Gets the createdobjectid_opportunity property value. 
     * @returns a opportunity
     */
    public get createdobjectid_opportunity() {
        return this._createdobjectid_opportunity;
    };
    /**
     * Sets the createdobjectid_opportunity property value. 
     * @param value Value to set for the createdobjectid_opportunity property.
     */
    public set createdobjectid_opportunity(value: Opportunity | undefined) {
        this._createdobjectid_opportunity = value;
    };
    /**
     * Gets the errordescriptionformatted property value. 
     * @returns a string
     */
    public get errordescriptionformatted() {
        return this._errordescriptionformatted;
    };
    /**
     * Sets the errordescriptionformatted property value. 
     * @param value Value to set for the errordescriptionformatted property.
     */
    public set errordescriptionformatted(value: string | undefined) {
        this._errordescriptionformatted = value;
    };
    /**
     * Gets the errornumber property value. 
     * @returns a integer
     */
    public get errornumber() {
        return this._errornumber;
    };
    /**
     * Sets the errornumber property value. 
     * @param value Value to set for the errornumber property.
     */
    public set errornumber(value: number | undefined) {
        this._errornumber = value;
    };
    /**
     * Gets the errornumberformatted property value. 
     * @returns a string
     */
    public get errornumberformatted() {
        return this._errornumberformatted;
    };
    /**
     * Sets the errornumberformatted property value. 
     * @param value Value to set for the errornumberformatted property.
     */
    public set errornumberformatted(value: string | undefined) {
        this._errornumberformatted = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_bulkoperationid_value": (o, n) => { (o as unknown as Bulkoperationlog)._bulkoperationid_value = n.getStringValue(); },
            "_campaignactivityid_value": (o, n) => { (o as unknown as Bulkoperationlog)._campaignactivityid_value = n.getStringValue(); },
            "_createdobjectid_value": (o, n) => { (o as unknown as Bulkoperationlog)._createdobjectid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Bulkoperationlog)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Bulkoperationlog)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Bulkoperationlog)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Bulkoperationlog)._owninguser_value = n.getStringValue(); },
            "_regardingobjectid_value": (o, n) => { (o as unknown as Bulkoperationlog)._regardingobjectid_value = n.getStringValue(); },
            "additionalinfo": (o, n) => { (o as unknown as Bulkoperationlog).additionalinfo = n.getStringValue(); },
            "bulkoperationid": (o, n) => { (o as unknown as Bulkoperationlog).bulkoperationid = n.getObjectValue<Bulkoperation>(createBulkoperationFromDiscriminatorValue); },
            "bulkoperationid_activitypointer": (o, n) => { (o as unknown as Bulkoperationlog).bulkoperationid_activitypointer = n.getObjectValue<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "bulkOperationLog_AsyncOperations": (o, n) => { (o as unknown as Bulkoperationlog).bulkOperationLog_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "bulkOperationLog_BulkDeleteFailures": (o, n) => { (o as unknown as Bulkoperationlog).bulkOperationLog_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "bulkoperationlog_MailboxTrackingFolders": (o, n) => { (o as unknown as Bulkoperationlog).bulkoperationlog_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "bulkoperationlog_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Bulkoperationlog).bulkoperationlog_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "bulkoperationlog_SyncErrors": (o, n) => { (o as unknown as Bulkoperationlog).bulkoperationlog_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "bulkoperationlogid": (o, n) => { (o as unknown as Bulkoperationlog).bulkoperationlogid = n.getStringValue(); },
            "campaignActivityId_Logs": (o, n) => { (o as unknown as Bulkoperationlog).campaignActivityId_Logs = n.getObjectValue<Campaignactivity>(createCampaignactivityFromDiscriminatorValue); },
            "createdobjectid_account": (o, n) => { (o as unknown as Bulkoperationlog).createdobjectid_account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "createdobjectid_activitypointer": (o, n) => { (o as unknown as Bulkoperationlog).createdobjectid_activitypointer = n.getObjectValue<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "createdobjectid_contact": (o, n) => { (o as unknown as Bulkoperationlog).createdobjectid_contact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "createdobjectid_lead": (o, n) => { (o as unknown as Bulkoperationlog).createdobjectid_lead = n.getObjectValue<Lead>(createLeadFromDiscriminatorValue); },
            "createdobjectid_opportunity": (o, n) => { (o as unknown as Bulkoperationlog).createdobjectid_opportunity = n.getObjectValue<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "errordescriptionformatted": (o, n) => { (o as unknown as Bulkoperationlog).errordescriptionformatted = n.getStringValue(); },
            "errornumber": (o, n) => { (o as unknown as Bulkoperationlog).errornumber = n.getNumberValue(); },
            "errornumberformatted": (o, n) => { (o as unknown as Bulkoperationlog).errornumberformatted = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Bulkoperationlog).importsequencenumber = n.getNumberValue(); },
            "name": (o, n) => { (o as unknown as Bulkoperationlog).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Bulkoperationlog).overriddencreatedon = n.getDateValue(); },
            "owningteam": (o, n) => { (o as unknown as Bulkoperationlog).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Bulkoperationlog).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "regardingobjectid_account": (o, n) => { (o as unknown as Bulkoperationlog).regardingobjectid_account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "regardingobjectid_contact": (o, n) => { (o as unknown as Bulkoperationlog).regardingobjectid_contact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "regardingobjectid_lead": (o, n) => { (o as unknown as Bulkoperationlog).regardingobjectid_lead = n.getObjectValue<Lead>(createLeadFromDiscriminatorValue); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Bulkoperationlog).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Bulkoperationlog).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Bulkoperationlog).versionnumber = n.getNumberValue(); },
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
     * Gets the regardingobjectid_account property value. 
     * @returns a account
     */
    public get regardingobjectid_account() {
        return this._regardingobjectid_account;
    };
    /**
     * Sets the regardingobjectid_account property value. 
     * @param value Value to set for the regardingobjectid_account property.
     */
    public set regardingobjectid_account(value: Account | undefined) {
        this._regardingobjectid_account = value;
    };
    /**
     * Gets the regardingobjectid_contact property value. 
     * @returns a contact
     */
    public get regardingobjectid_contact() {
        return this._regardingobjectid_contact;
    };
    /**
     * Sets the regardingobjectid_contact property value. 
     * @param value Value to set for the regardingobjectid_contact property.
     */
    public set regardingobjectid_contact(value: Contact | undefined) {
        this._regardingobjectid_contact = value;
    };
    /**
     * Gets the regardingobjectid_lead property value. 
     * @returns a lead
     */
    public get regardingobjectid_lead() {
        return this._regardingobjectid_lead;
    };
    /**
     * Sets the regardingobjectid_lead property value. 
     * @param value Value to set for the regardingobjectid_lead property.
     */
    public set regardingobjectid_lead(value: Lead | undefined) {
        this._regardingobjectid_lead = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_bulkoperationid_value", this._bulkoperationid_value);
        writer.writeStringValue("_campaignactivityid_value", this._campaignactivityid_value);
        writer.writeStringValue("_createdobjectid_value", this._createdobjectid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_regardingobjectid_value", this._regardingobjectid_value);
        writer.writeStringValue("additionalinfo", this.additionalinfo);
        writer.writeObjectValue<Bulkoperation>("bulkoperationid", this.bulkoperationid);
        writer.writeObjectValue<Activitypointer>("bulkoperationid_activitypointer", this.bulkoperationid_activitypointer);
        writer.writeCollectionOfObjectValues<Asyncoperation>("bulkOperationLog_AsyncOperations", this.bulkOperationLog_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("bulkOperationLog_BulkDeleteFailures", this.bulkOperationLog_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("bulkoperationlog_MailboxTrackingFolders", this.bulkoperationlog_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("bulkoperationlog_PrincipalObjectAttributeAccesses", this.bulkoperationlog_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("bulkoperationlog_SyncErrors", this.bulkoperationlog_SyncErrors);
        writer.writeStringValue("bulkoperationlogid", this.bulkoperationlogid);
        writer.writeObjectValue<Campaignactivity>("campaignActivityId_Logs", this.campaignActivityId_Logs);
        writer.writeObjectValue<Account>("createdobjectid_account", this.createdobjectid_account);
        writer.writeObjectValue<Activitypointer>("createdobjectid_activitypointer", this.createdobjectid_activitypointer);
        writer.writeObjectValue<Contact>("createdobjectid_contact", this.createdobjectid_contact);
        writer.writeObjectValue<Lead>("createdobjectid_lead", this.createdobjectid_lead);
        writer.writeObjectValue<Opportunity>("createdobjectid_opportunity", this.createdobjectid_opportunity);
        writer.writeStringValue("errordescriptionformatted", this.errordescriptionformatted);
        writer.writeNumberValue("errornumber", this.errornumber);
        writer.writeStringValue("errornumberformatted", this.errornumberformatted);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeObjectValue<Account>("regardingobjectid_account", this.regardingobjectid_account);
        writer.writeObjectValue<Contact>("regardingobjectid_contact", this.regardingobjectid_contact);
        writer.writeObjectValue<Lead>("regardingobjectid_lead", this.regardingobjectid_lead);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
