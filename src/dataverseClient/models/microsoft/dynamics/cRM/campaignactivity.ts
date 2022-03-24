import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createActivitypartyFromDiscriminatorValue} from './createActivitypartyFromDiscriminatorValue';
import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcebookingFromDiscriminatorValue} from './createBookableresourcebookingFromDiscriminatorValue';
import {createBookableresourcebookingheaderFromDiscriminatorValue} from './createBookableresourcebookingheaderFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBulkoperationFromDiscriminatorValue} from './createBulkoperationFromDiscriminatorValue';
import {createBulkoperationlogFromDiscriminatorValue} from './createBulkoperationlogFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCampaignFromDiscriminatorValue} from './createCampaignFromDiscriminatorValue';
import {createCampaignresponseFromDiscriminatorValue} from './createCampaignresponseFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createIncidentresolutionFromDiscriminatorValue} from './createIncidentresolutionFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createListFromDiscriminatorValue} from './createListFromDiscriminatorValue';
import {createMailboxFromDiscriminatorValue} from './createMailboxFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createOpportunitycloseFromDiscriminatorValue} from './createOpportunitycloseFromDiscriminatorValue';
import {createOrdercloseFromDiscriminatorValue} from './createOrdercloseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createQueueitemFromDiscriminatorValue} from './createQueueitemFromDiscriminatorValue';
import {createQuotecloseFromDiscriminatorValue} from './createQuotecloseFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createSalesliteratureFromDiscriminatorValue} from './createSalesliteratureFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSlaFromDiscriminatorValue} from './createSlaFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Activityparty, Activitypointer, Annotation, Appointment, Asyncoperation, Bookableresourcebooking, Bookableresourcebookingheader, Bulkdeletefailure, Bulkoperation, Bulkoperationlog, Businessunit, Campaign, Campaignresponse, Connection, Contact, Email, Fax, Incidentresolution, Lead, Letter, List, Mailbox, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Opportunityclose, Orderclose, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Processstage, Queueitem, Quoteclose, Recurringappointmentmaster, Salesliterature, Serviceappointment, Sla, Socialactivity, Syncerror, Systemuser, Task, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Campaignactivity extends Activitypointer implements Parsable {
    private _activityid_activitypointer?: Activitypointer | undefined;
    private _actualcost?: number | undefined;
    private _actualcost_base?: number | undefined;
    private _budgetedcost?: number | undefined;
    private _budgetedcost_base?: number | undefined;
    private _campaignActivity_Accounts?: Account[] | undefined;
    private _campaignactivity_activity_parties?: Activityparty[] | undefined;
    private _campaignactivity_activityparties?: Activityparty[] | undefined;
    private _campaignActivity_ActivityPointers?: Activitypointer[] | undefined;
    private _campaignActivity_Annotation?: Annotation[] | undefined;
    private _campaignActivity_Appointments?: Appointment[] | undefined;
    private _campaignActivity_AsyncOperations?: Asyncoperation[] | undefined;
    private _campaignActivity_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _campaignActivity_BulkOperations?: Bulkoperation[] | undefined;
    private _campaignactivity_CampaignResponses?: Campaignresponse[] | undefined;
    private _campaignactivity_connections1?: Connection[] | undefined;
    private _campaignactivity_connections2?: Connection[] | undefined;
    private _campaignActivity_Contacts?: Contact[] | undefined;
    private _campaignActivity_Emails?: Email[] | undefined;
    private _campaignActivity_Faxes?: Fax[] | undefined;
    private _campaignactivity_IncidentResolutions?: Incidentresolution[] | undefined;
    private _campaignActivity_Leads?: Lead[] | undefined;
    private _campaignActivity_Letters?: Letter[] | undefined;
    private _campaignActivity_logs?: Bulkoperationlog[] | undefined;
    private _campaignActivity_MailboxTrackingFolder?: Mailboxtrackingfolder[] | undefined;
    private _campaignactivity_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _campaignactivity_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _campaignactivity_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _campaignactivity_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _campaignactivity_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _campaignactivity_msfp_alerts?: Msfp_alert[] | undefined;
    private _campaignactivity_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _campaignactivity_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _campaignactivity_OpportunityCloses?: Opportunityclose[] | undefined;
    private _campaignactivity_OrderCloses?: Orderclose[] | undefined;
    private _campaignActivity_Phonecalls?: Phonecall[] | undefined;
    private _campaignactivity_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _campaignActivity_ProcessSessions?: Processsession[] | undefined;
    private _campaignActivity_QueueItem?: Queueitem[] | undefined;
    private _campaignactivity_QuoteCloses?: Quoteclose[] | undefined;
    private _campaignActivity_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _campaignactivity_ServiceAppointments?: Serviceappointment[] | undefined;
    private _campaignactivity_SocialActivities?: Socialactivity[] | undefined;
    private _campaignActivity_SyncErrors?: Syncerror[] | undefined;
    private _campaignActivity_Tasks?: Task[] | undefined;
    private _campaignactivitylist_association?: List[] | undefined;
    private _campaignactivitysalesliterature_association?: Salesliterature[] | undefined;
    private _category?: string | undefined;
    private _channeltypecode?: number | undefined;
    private _createdby_campaignactivity?: Systemuser | undefined;
    private _createdonbehalfby_campaignactivity?: Systemuser | undefined;
    private _donotsendonoptout?: boolean | undefined;
    private _excludeifcontactedinxdays?: number | undefined;
    private _ignoreinactivelistmembers?: boolean | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby_campaignactivity?: Systemuser | undefined;
    private _modifiedonbehalfby_campaignactivity?: Systemuser | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid_campaignactivity?: Principal | undefined;
    private _owningbusinessunit_campaignactivity?: Businessunit | undefined;
    private _owningteam_campaignactivity?: Team | undefined;
    private _owninguser_campaignactivity?: Systemuser | undefined;
    private _regardingobjectid_bookableresourcebooking_campaignactivity?: Bookableresourcebooking | undefined;
    private _regardingobjectid_bookableresourcebookingheader_campaignactivity?: Bookableresourcebookingheader | undefined;
    private _regardingobjectid_campaign_campaignactivity?: Campaign | undefined;
    private _sendermailboxid_campaignactivity?: Mailbox | undefined;
    private _sla_activitypointer_sla_campaignactivity?: Sla | undefined;
    private _slainvokedid_activitypointer_sla_campaignactivity?: Sla | undefined;
    private _stageid_processstage?: Processstage | undefined;
    private _subcategory?: string | undefined;
    private _transactioncurrencyid_campaignactivity?: Transactioncurrency | undefined;
    private _typecode?: number | undefined;
    /**
     * Gets the activityid_activitypointer property value. 
     * @returns a activitypointer
     */
    public get activityid_activitypointer() {
        return this._activityid_activitypointer;
    };
    /**
     * Sets the activityid_activitypointer property value. 
     * @param value Value to set for the activityid_activitypointer property.
     */
    public set activityid_activitypointer(value: Activitypointer | undefined) {
        this._activityid_activitypointer = value;
    };
    /**
     * Gets the actualcost property value. 
     * @returns a int64
     */
    public get actualcost() {
        return this._actualcost;
    };
    /**
     * Sets the actualcost property value. 
     * @param value Value to set for the actualcost property.
     */
    public set actualcost(value: number | undefined) {
        this._actualcost = value;
    };
    /**
     * Gets the actualcost_base property value. 
     * @returns a int64
     */
    public get actualcost_base() {
        return this._actualcost_base;
    };
    /**
     * Sets the actualcost_base property value. 
     * @param value Value to set for the actualcost_base property.
     */
    public set actualcost_base(value: number | undefined) {
        this._actualcost_base = value;
    };
    /**
     * Gets the budgetedcost property value. 
     * @returns a int64
     */
    public get budgetedcost() {
        return this._budgetedcost;
    };
    /**
     * Sets the budgetedcost property value. 
     * @param value Value to set for the budgetedcost property.
     */
    public set budgetedcost(value: number | undefined) {
        this._budgetedcost = value;
    };
    /**
     * Gets the budgetedcost_base property value. 
     * @returns a int64
     */
    public get budgetedcost_base() {
        return this._budgetedcost_base;
    };
    /**
     * Sets the budgetedcost_base property value. 
     * @param value Value to set for the budgetedcost_base property.
     */
    public set budgetedcost_base(value: number | undefined) {
        this._budgetedcost_base = value;
    };
    /**
     * Gets the campaignActivity_Accounts property value. 
     * @returns a account
     */
    public get campaignActivity_Accounts() {
        return this._campaignActivity_Accounts;
    };
    /**
     * Sets the campaignActivity_Accounts property value. 
     * @param value Value to set for the CampaignActivity_Accounts property.
     */
    public set campaignActivity_Accounts(value: Account[] | undefined) {
        this._campaignActivity_Accounts = value;
    };
    /**
     * Gets the campaignactivity_activity_parties property value. 
     * @returns a activityparty
     */
    public get campaignactivity_activity_parties() {
        return this._campaignactivity_activity_parties;
    };
    /**
     * Sets the campaignactivity_activity_parties property value. 
     * @param value Value to set for the campaignactivity_activity_parties property.
     */
    public set campaignactivity_activity_parties(value: Activityparty[] | undefined) {
        this._campaignactivity_activity_parties = value;
    };
    /**
     * Gets the campaignactivity_activityparties property value. 
     * @returns a activityparty
     */
    public get campaignactivity_activityparties() {
        return this._campaignactivity_activityparties;
    };
    /**
     * Sets the campaignactivity_activityparties property value. 
     * @param value Value to set for the campaignactivity_activityparties property.
     */
    public set campaignactivity_activityparties(value: Activityparty[] | undefined) {
        this._campaignactivity_activityparties = value;
    };
    /**
     * Gets the campaignActivity_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get campaignActivity_ActivityPointers() {
        return this._campaignActivity_ActivityPointers;
    };
    /**
     * Sets the campaignActivity_ActivityPointers property value. 
     * @param value Value to set for the CampaignActivity_ActivityPointers property.
     */
    public set campaignActivity_ActivityPointers(value: Activitypointer[] | undefined) {
        this._campaignActivity_ActivityPointers = value;
    };
    /**
     * Gets the campaignActivity_Annotation property value. 
     * @returns a annotation
     */
    public get campaignActivity_Annotation() {
        return this._campaignActivity_Annotation;
    };
    /**
     * Sets the campaignActivity_Annotation property value. 
     * @param value Value to set for the CampaignActivity_Annotation property.
     */
    public set campaignActivity_Annotation(value: Annotation[] | undefined) {
        this._campaignActivity_Annotation = value;
    };
    /**
     * Gets the campaignActivity_Appointments property value. 
     * @returns a appointment
     */
    public get campaignActivity_Appointments() {
        return this._campaignActivity_Appointments;
    };
    /**
     * Sets the campaignActivity_Appointments property value. 
     * @param value Value to set for the CampaignActivity_Appointments property.
     */
    public set campaignActivity_Appointments(value: Appointment[] | undefined) {
        this._campaignActivity_Appointments = value;
    };
    /**
     * Gets the campaignActivity_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get campaignActivity_AsyncOperations() {
        return this._campaignActivity_AsyncOperations;
    };
    /**
     * Sets the campaignActivity_AsyncOperations property value. 
     * @param value Value to set for the CampaignActivity_AsyncOperations property.
     */
    public set campaignActivity_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._campaignActivity_AsyncOperations = value;
    };
    /**
     * Gets the campaignActivity_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get campaignActivity_BulkDeleteFailures() {
        return this._campaignActivity_BulkDeleteFailures;
    };
    /**
     * Sets the campaignActivity_BulkDeleteFailures property value. 
     * @param value Value to set for the CampaignActivity_BulkDeleteFailures property.
     */
    public set campaignActivity_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._campaignActivity_BulkDeleteFailures = value;
    };
    /**
     * Gets the campaignActivity_BulkOperations property value. 
     * @returns a bulkoperation
     */
    public get campaignActivity_BulkOperations() {
        return this._campaignActivity_BulkOperations;
    };
    /**
     * Sets the campaignActivity_BulkOperations property value. 
     * @param value Value to set for the CampaignActivity_BulkOperations property.
     */
    public set campaignActivity_BulkOperations(value: Bulkoperation[] | undefined) {
        this._campaignActivity_BulkOperations = value;
    };
    /**
     * Gets the campaignactivity_CampaignResponses property value. 
     * @returns a campaignresponse
     */
    public get campaignactivity_CampaignResponses() {
        return this._campaignactivity_CampaignResponses;
    };
    /**
     * Sets the campaignactivity_CampaignResponses property value. 
     * @param value Value to set for the campaignactivity_CampaignResponses property.
     */
    public set campaignactivity_CampaignResponses(value: Campaignresponse[] | undefined) {
        this._campaignactivity_CampaignResponses = value;
    };
    /**
     * Gets the campaignactivity_connections1 property value. 
     * @returns a connection
     */
    public get campaignactivity_connections1() {
        return this._campaignactivity_connections1;
    };
    /**
     * Sets the campaignactivity_connections1 property value. 
     * @param value Value to set for the campaignactivity_connections1 property.
     */
    public set campaignactivity_connections1(value: Connection[] | undefined) {
        this._campaignactivity_connections1 = value;
    };
    /**
     * Gets the campaignactivity_connections2 property value. 
     * @returns a connection
     */
    public get campaignactivity_connections2() {
        return this._campaignactivity_connections2;
    };
    /**
     * Sets the campaignactivity_connections2 property value. 
     * @param value Value to set for the campaignactivity_connections2 property.
     */
    public set campaignactivity_connections2(value: Connection[] | undefined) {
        this._campaignactivity_connections2 = value;
    };
    /**
     * Gets the campaignActivity_Contacts property value. 
     * @returns a contact
     */
    public get campaignActivity_Contacts() {
        return this._campaignActivity_Contacts;
    };
    /**
     * Sets the campaignActivity_Contacts property value. 
     * @param value Value to set for the CampaignActivity_Contacts property.
     */
    public set campaignActivity_Contacts(value: Contact[] | undefined) {
        this._campaignActivity_Contacts = value;
    };
    /**
     * Gets the campaignActivity_Emails property value. 
     * @returns a email
     */
    public get campaignActivity_Emails() {
        return this._campaignActivity_Emails;
    };
    /**
     * Sets the campaignActivity_Emails property value. 
     * @param value Value to set for the CampaignActivity_Emails property.
     */
    public set campaignActivity_Emails(value: Email[] | undefined) {
        this._campaignActivity_Emails = value;
    };
    /**
     * Gets the campaignActivity_Faxes property value. 
     * @returns a fax
     */
    public get campaignActivity_Faxes() {
        return this._campaignActivity_Faxes;
    };
    /**
     * Sets the campaignActivity_Faxes property value. 
     * @param value Value to set for the CampaignActivity_Faxes property.
     */
    public set campaignActivity_Faxes(value: Fax[] | undefined) {
        this._campaignActivity_Faxes = value;
    };
    /**
     * Gets the campaignactivity_IncidentResolutions property value. 
     * @returns a incidentresolution
     */
    public get campaignactivity_IncidentResolutions() {
        return this._campaignactivity_IncidentResolutions;
    };
    /**
     * Sets the campaignactivity_IncidentResolutions property value. 
     * @param value Value to set for the campaignactivity_IncidentResolutions property.
     */
    public set campaignactivity_IncidentResolutions(value: Incidentresolution[] | undefined) {
        this._campaignactivity_IncidentResolutions = value;
    };
    /**
     * Gets the campaignActivity_Leads property value. 
     * @returns a lead
     */
    public get campaignActivity_Leads() {
        return this._campaignActivity_Leads;
    };
    /**
     * Sets the campaignActivity_Leads property value. 
     * @param value Value to set for the CampaignActivity_Leads property.
     */
    public set campaignActivity_Leads(value: Lead[] | undefined) {
        this._campaignActivity_Leads = value;
    };
    /**
     * Gets the campaignActivity_Letters property value. 
     * @returns a letter
     */
    public get campaignActivity_Letters() {
        return this._campaignActivity_Letters;
    };
    /**
     * Sets the campaignActivity_Letters property value. 
     * @param value Value to set for the CampaignActivity_Letters property.
     */
    public set campaignActivity_Letters(value: Letter[] | undefined) {
        this._campaignActivity_Letters = value;
    };
    /**
     * Gets the campaignActivity_logs property value. 
     * @returns a bulkoperationlog
     */
    public get campaignActivity_logs() {
        return this._campaignActivity_logs;
    };
    /**
     * Sets the campaignActivity_logs property value. 
     * @param value Value to set for the CampaignActivity_logs property.
     */
    public set campaignActivity_logs(value: Bulkoperationlog[] | undefined) {
        this._campaignActivity_logs = value;
    };
    /**
     * Gets the campaignActivity_MailboxTrackingFolder property value. 
     * @returns a mailboxtrackingfolder
     */
    public get campaignActivity_MailboxTrackingFolder() {
        return this._campaignActivity_MailboxTrackingFolder;
    };
    /**
     * Sets the campaignActivity_MailboxTrackingFolder property value. 
     * @param value Value to set for the CampaignActivity_MailboxTrackingFolder property.
     */
    public set campaignActivity_MailboxTrackingFolder(value: Mailboxtrackingfolder[] | undefined) {
        this._campaignActivity_MailboxTrackingFolder = value;
    };
    /**
     * Gets the campaignactivity_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get campaignactivity_msdyn_approvals() {
        return this._campaignactivity_msdyn_approvals;
    };
    /**
     * Sets the campaignactivity_msdyn_approvals property value. 
     * @param value Value to set for the campaignactivity_msdyn_approvals property.
     */
    public set campaignactivity_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._campaignactivity_msdyn_approvals = value;
    };
    /**
     * Gets the campaignactivity_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get campaignactivity_msdyn_bookingalerts() {
        return this._campaignactivity_msdyn_bookingalerts;
    };
    /**
     * Sets the campaignactivity_msdyn_bookingalerts property value. 
     * @param value Value to set for the campaignactivity_msdyn_bookingalerts property.
     */
    public set campaignactivity_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._campaignactivity_msdyn_bookingalerts = value;
    };
    /**
     * Gets the campaignactivity_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get campaignactivity_msdyn_ocliveworkitems() {
        return this._campaignactivity_msdyn_ocliveworkitems;
    };
    /**
     * Sets the campaignactivity_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the campaignactivity_msdyn_ocliveworkitems property.
     */
    public set campaignactivity_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._campaignactivity_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the campaignactivity_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get campaignactivity_msdyn_ocoutboundmessages() {
        return this._campaignactivity_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the campaignactivity_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the campaignactivity_msdyn_ocoutboundmessages property.
     */
    public set campaignactivity_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._campaignactivity_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the campaignactivity_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get campaignactivity_msdyn_ocsessions() {
        return this._campaignactivity_msdyn_ocsessions;
    };
    /**
     * Sets the campaignactivity_msdyn_ocsessions property value. 
     * @param value Value to set for the campaignactivity_msdyn_ocsessions property.
     */
    public set campaignactivity_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._campaignactivity_msdyn_ocsessions = value;
    };
    /**
     * Gets the campaignactivity_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get campaignactivity_msfp_alerts() {
        return this._campaignactivity_msfp_alerts;
    };
    /**
     * Sets the campaignactivity_msfp_alerts property value. 
     * @param value Value to set for the campaignactivity_msfp_alerts property.
     */
    public set campaignactivity_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._campaignactivity_msfp_alerts = value;
    };
    /**
     * Gets the campaignactivity_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get campaignactivity_msfp_surveyinvites() {
        return this._campaignactivity_msfp_surveyinvites;
    };
    /**
     * Sets the campaignactivity_msfp_surveyinvites property value. 
     * @param value Value to set for the campaignactivity_msfp_surveyinvites property.
     */
    public set campaignactivity_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._campaignactivity_msfp_surveyinvites = value;
    };
    /**
     * Gets the campaignactivity_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get campaignactivity_msfp_surveyresponses() {
        return this._campaignactivity_msfp_surveyresponses;
    };
    /**
     * Sets the campaignactivity_msfp_surveyresponses property value. 
     * @param value Value to set for the campaignactivity_msfp_surveyresponses property.
     */
    public set campaignactivity_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._campaignactivity_msfp_surveyresponses = value;
    };
    /**
     * Gets the campaignactivity_OpportunityCloses property value. 
     * @returns a opportunityclose
     */
    public get campaignactivity_OpportunityCloses() {
        return this._campaignactivity_OpportunityCloses;
    };
    /**
     * Sets the campaignactivity_OpportunityCloses property value. 
     * @param value Value to set for the campaignactivity_OpportunityCloses property.
     */
    public set campaignactivity_OpportunityCloses(value: Opportunityclose[] | undefined) {
        this._campaignactivity_OpportunityCloses = value;
    };
    /**
     * Gets the campaignactivity_OrderCloses property value. 
     * @returns a orderclose
     */
    public get campaignactivity_OrderCloses() {
        return this._campaignactivity_OrderCloses;
    };
    /**
     * Sets the campaignactivity_OrderCloses property value. 
     * @param value Value to set for the campaignactivity_OrderCloses property.
     */
    public set campaignactivity_OrderCloses(value: Orderclose[] | undefined) {
        this._campaignactivity_OrderCloses = value;
    };
    /**
     * Gets the campaignActivity_Phonecalls property value. 
     * @returns a phonecall
     */
    public get campaignActivity_Phonecalls() {
        return this._campaignActivity_Phonecalls;
    };
    /**
     * Sets the campaignActivity_Phonecalls property value. 
     * @param value Value to set for the CampaignActivity_Phonecalls property.
     */
    public set campaignActivity_Phonecalls(value: Phonecall[] | undefined) {
        this._campaignActivity_Phonecalls = value;
    };
    /**
     * Gets the campaignactivity_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get campaignactivity_principalobjectattributeaccess() {
        return this._campaignactivity_principalobjectattributeaccess;
    };
    /**
     * Sets the campaignactivity_principalobjectattributeaccess property value. 
     * @param value Value to set for the campaignactivity_principalobjectattributeaccess property.
     */
    public set campaignactivity_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._campaignactivity_principalobjectattributeaccess = value;
    };
    /**
     * Gets the campaignActivity_ProcessSessions property value. 
     * @returns a processsession
     */
    public get campaignActivity_ProcessSessions() {
        return this._campaignActivity_ProcessSessions;
    };
    /**
     * Sets the campaignActivity_ProcessSessions property value. 
     * @param value Value to set for the CampaignActivity_ProcessSessions property.
     */
    public set campaignActivity_ProcessSessions(value: Processsession[] | undefined) {
        this._campaignActivity_ProcessSessions = value;
    };
    /**
     * Gets the campaignActivity_QueueItem property value. 
     * @returns a queueitem
     */
    public get campaignActivity_QueueItem() {
        return this._campaignActivity_QueueItem;
    };
    /**
     * Sets the campaignActivity_QueueItem property value. 
     * @param value Value to set for the CampaignActivity_QueueItem property.
     */
    public set campaignActivity_QueueItem(value: Queueitem[] | undefined) {
        this._campaignActivity_QueueItem = value;
    };
    /**
     * Gets the campaignactivity_QuoteCloses property value. 
     * @returns a quoteclose
     */
    public get campaignactivity_QuoteCloses() {
        return this._campaignactivity_QuoteCloses;
    };
    /**
     * Sets the campaignactivity_QuoteCloses property value. 
     * @param value Value to set for the campaignactivity_QuoteCloses property.
     */
    public set campaignactivity_QuoteCloses(value: Quoteclose[] | undefined) {
        this._campaignactivity_QuoteCloses = value;
    };
    /**
     * Gets the campaignActivity_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get campaignActivity_RecurringAppointmentMasters() {
        return this._campaignActivity_RecurringAppointmentMasters;
    };
    /**
     * Sets the campaignActivity_RecurringAppointmentMasters property value. 
     * @param value Value to set for the CampaignActivity_RecurringAppointmentMasters property.
     */
    public set campaignActivity_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._campaignActivity_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the campaignactivity_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get campaignactivity_ServiceAppointments() {
        return this._campaignactivity_ServiceAppointments;
    };
    /**
     * Sets the campaignactivity_ServiceAppointments property value. 
     * @param value Value to set for the campaignactivity_ServiceAppointments property.
     */
    public set campaignactivity_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._campaignactivity_ServiceAppointments = value;
    };
    /**
     * Gets the campaignactivity_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get campaignactivity_SocialActivities() {
        return this._campaignactivity_SocialActivities;
    };
    /**
     * Sets the campaignactivity_SocialActivities property value. 
     * @param value Value to set for the campaignactivity_SocialActivities property.
     */
    public set campaignactivity_SocialActivities(value: Socialactivity[] | undefined) {
        this._campaignactivity_SocialActivities = value;
    };
    /**
     * Gets the campaignActivity_SyncErrors property value. 
     * @returns a syncerror
     */
    public get campaignActivity_SyncErrors() {
        return this._campaignActivity_SyncErrors;
    };
    /**
     * Sets the campaignActivity_SyncErrors property value. 
     * @param value Value to set for the CampaignActivity_SyncErrors property.
     */
    public set campaignActivity_SyncErrors(value: Syncerror[] | undefined) {
        this._campaignActivity_SyncErrors = value;
    };
    /**
     * Gets the campaignActivity_Tasks property value. 
     * @returns a task
     */
    public get campaignActivity_Tasks() {
        return this._campaignActivity_Tasks;
    };
    /**
     * Sets the campaignActivity_Tasks property value. 
     * @param value Value to set for the CampaignActivity_Tasks property.
     */
    public set campaignActivity_Tasks(value: Task[] | undefined) {
        this._campaignActivity_Tasks = value;
    };
    /**
     * Gets the campaignactivitylist_association property value. 
     * @returns a list
     */
    public get campaignactivitylist_association() {
        return this._campaignactivitylist_association;
    };
    /**
     * Sets the campaignactivitylist_association property value. 
     * @param value Value to set for the campaignactivitylist_association property.
     */
    public set campaignactivitylist_association(value: List[] | undefined) {
        this._campaignactivitylist_association = value;
    };
    /**
     * Gets the campaignactivitysalesliterature_association property value. 
     * @returns a salesliterature
     */
    public get campaignactivitysalesliterature_association() {
        return this._campaignactivitysalesliterature_association;
    };
    /**
     * Sets the campaignactivitysalesliterature_association property value. 
     * @param value Value to set for the campaignactivitysalesliterature_association property.
     */
    public set campaignactivitysalesliterature_association(value: Salesliterature[] | undefined) {
        this._campaignactivitysalesliterature_association = value;
    };
    /**
     * Gets the category property value. 
     * @returns a string
     */
    public get category() {
        return this._category;
    };
    /**
     * Sets the category property value. 
     * @param value Value to set for the category property.
     */
    public set category(value: string | undefined) {
        this._category = value;
    };
    /**
     * Gets the channeltypecode property value. 
     * @returns a integer
     */
    public get channeltypecode() {
        return this._channeltypecode;
    };
    /**
     * Sets the channeltypecode property value. 
     * @param value Value to set for the channeltypecode property.
     */
    public set channeltypecode(value: number | undefined) {
        this._channeltypecode = value;
    };
    /**
     * Instantiates a new campaignactivity and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby_campaignactivity property value. 
     * @returns a systemuser
     */
    public get createdby_campaignactivity() {
        return this._createdby_campaignactivity;
    };
    /**
     * Sets the createdby_campaignactivity property value. 
     * @param value Value to set for the createdby_campaignactivity property.
     */
    public set createdby_campaignactivity(value: Systemuser | undefined) {
        this._createdby_campaignactivity = value;
    };
    /**
     * Gets the createdonbehalfby_campaignactivity property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby_campaignactivity() {
        return this._createdonbehalfby_campaignactivity;
    };
    /**
     * Sets the createdonbehalfby_campaignactivity property value. 
     * @param value Value to set for the createdonbehalfby_campaignactivity property.
     */
    public set createdonbehalfby_campaignactivity(value: Systemuser | undefined) {
        this._createdonbehalfby_campaignactivity = value;
    };
    /**
     * Gets the donotsendonoptout property value. 
     * @returns a boolean
     */
    public get donotsendonoptout() {
        return this._donotsendonoptout;
    };
    /**
     * Sets the donotsendonoptout property value. 
     * @param value Value to set for the donotsendonoptout property.
     */
    public set donotsendonoptout(value: boolean | undefined) {
        this._donotsendonoptout = value;
    };
    /**
     * Gets the excludeifcontactedinxdays property value. 
     * @returns a integer
     */
    public get excludeifcontactedinxdays() {
        return this._excludeifcontactedinxdays;
    };
    /**
     * Sets the excludeifcontactedinxdays property value. 
     * @param value Value to set for the excludeifcontactedinxdays property.
     */
    public set excludeifcontactedinxdays(value: number | undefined) {
        this._excludeifcontactedinxdays = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "activityid_activitypointer": (o, n) => { (o as unknown as Campaignactivity).activityid_activitypointer = n.getObjectValue<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "actualcost": (o, n) => { (o as unknown as Campaignactivity).actualcost = n.getNumberValue(); },
            "actualcost_base": (o, n) => { (o as unknown as Campaignactivity).actualcost_base = n.getNumberValue(); },
            "budgetedcost": (o, n) => { (o as unknown as Campaignactivity).budgetedcost = n.getNumberValue(); },
            "budgetedcost_base": (o, n) => { (o as unknown as Campaignactivity).budgetedcost_base = n.getNumberValue(); },
            "campaignActivity_Accounts": (o, n) => { (o as unknown as Campaignactivity).campaignActivity_Accounts = n.getCollectionOfObjectValues<Account>(createAccountFromDiscriminatorValue); },
            "campaignactivity_activity_parties": (o, n) => { (o as unknown as Campaignactivity).campaignactivity_activity_parties = n.getCollectionOfObjectValues<Activityparty>(createActivitypartyFromDiscriminatorValue); },
            "campaignactivity_activityparties": (o, n) => { (o as unknown as Campaignactivity).campaignactivity_activityparties = n.getCollectionOfObjectValues<Activityparty>(createActivitypartyFromDiscriminatorValue); },
            "campaignActivity_ActivityPointers": (o, n) => { (o as unknown as Campaignactivity).campaignActivity_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "campaignActivity_Annotation": (o, n) => { (o as unknown as Campaignactivity).campaignActivity_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "campaignActivity_Appointments": (o, n) => { (o as unknown as Campaignactivity).campaignActivity_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "campaignActivity_AsyncOperations": (o, n) => { (o as unknown as Campaignactivity).campaignActivity_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "campaignActivity_BulkDeleteFailures": (o, n) => { (o as unknown as Campaignactivity).campaignActivity_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "campaignActivity_BulkOperations": (o, n) => { (o as unknown as Campaignactivity).campaignActivity_BulkOperations = n.getCollectionOfObjectValues<Bulkoperation>(createBulkoperationFromDiscriminatorValue); },
            "campaignactivity_CampaignResponses": (o, n) => { (o as unknown as Campaignactivity).campaignactivity_CampaignResponses = n.getCollectionOfObjectValues<Campaignresponse>(createCampaignresponseFromDiscriminatorValue); },
            "campaignactivity_connections1": (o, n) => { (o as unknown as Campaignactivity).campaignactivity_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "campaignactivity_connections2": (o, n) => { (o as unknown as Campaignactivity).campaignactivity_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "campaignActivity_Contacts": (o, n) => { (o as unknown as Campaignactivity).campaignActivity_Contacts = n.getCollectionOfObjectValues<Contact>(createContactFromDiscriminatorValue); },
            "campaignActivity_Emails": (o, n) => { (o as unknown as Campaignactivity).campaignActivity_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "campaignActivity_Faxes": (o, n) => { (o as unknown as Campaignactivity).campaignActivity_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "campaignactivity_IncidentResolutions": (o, n) => { (o as unknown as Campaignactivity).campaignactivity_IncidentResolutions = n.getCollectionOfObjectValues<Incidentresolution>(createIncidentresolutionFromDiscriminatorValue); },
            "campaignActivity_Leads": (o, n) => { (o as unknown as Campaignactivity).campaignActivity_Leads = n.getCollectionOfObjectValues<Lead>(createLeadFromDiscriminatorValue); },
            "campaignActivity_Letters": (o, n) => { (o as unknown as Campaignactivity).campaignActivity_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "campaignActivity_logs": (o, n) => { (o as unknown as Campaignactivity).campaignActivity_logs = n.getCollectionOfObjectValues<Bulkoperationlog>(createBulkoperationlogFromDiscriminatorValue); },
            "campaignActivity_MailboxTrackingFolder": (o, n) => { (o as unknown as Campaignactivity).campaignActivity_MailboxTrackingFolder = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "campaignactivity_msdyn_approvals": (o, n) => { (o as unknown as Campaignactivity).campaignactivity_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "campaignactivity_msdyn_bookingalerts": (o, n) => { (o as unknown as Campaignactivity).campaignactivity_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "campaignactivity_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Campaignactivity).campaignactivity_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "campaignactivity_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Campaignactivity).campaignactivity_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "campaignactivity_msdyn_ocsessions": (o, n) => { (o as unknown as Campaignactivity).campaignactivity_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "campaignactivity_msfp_alerts": (o, n) => { (o as unknown as Campaignactivity).campaignactivity_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "campaignactivity_msfp_surveyinvites": (o, n) => { (o as unknown as Campaignactivity).campaignactivity_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "campaignactivity_msfp_surveyresponses": (o, n) => { (o as unknown as Campaignactivity).campaignactivity_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "campaignactivity_OpportunityCloses": (o, n) => { (o as unknown as Campaignactivity).campaignactivity_OpportunityCloses = n.getCollectionOfObjectValues<Opportunityclose>(createOpportunitycloseFromDiscriminatorValue); },
            "campaignactivity_OrderCloses": (o, n) => { (o as unknown as Campaignactivity).campaignactivity_OrderCloses = n.getCollectionOfObjectValues<Orderclose>(createOrdercloseFromDiscriminatorValue); },
            "campaignActivity_Phonecalls": (o, n) => { (o as unknown as Campaignactivity).campaignActivity_Phonecalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "campaignactivity_principalobjectattributeaccess": (o, n) => { (o as unknown as Campaignactivity).campaignactivity_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "campaignActivity_ProcessSessions": (o, n) => { (o as unknown as Campaignactivity).campaignActivity_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "campaignActivity_QueueItem": (o, n) => { (o as unknown as Campaignactivity).campaignActivity_QueueItem = n.getCollectionOfObjectValues<Queueitem>(createQueueitemFromDiscriminatorValue); },
            "campaignactivity_QuoteCloses": (o, n) => { (o as unknown as Campaignactivity).campaignactivity_QuoteCloses = n.getCollectionOfObjectValues<Quoteclose>(createQuotecloseFromDiscriminatorValue); },
            "campaignActivity_RecurringAppointmentMasters": (o, n) => { (o as unknown as Campaignactivity).campaignActivity_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "campaignactivity_ServiceAppointments": (o, n) => { (o as unknown as Campaignactivity).campaignactivity_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "campaignactivity_SocialActivities": (o, n) => { (o as unknown as Campaignactivity).campaignactivity_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "campaignActivity_SyncErrors": (o, n) => { (o as unknown as Campaignactivity).campaignActivity_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "campaignActivity_Tasks": (o, n) => { (o as unknown as Campaignactivity).campaignActivity_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "campaignactivitylist_association": (o, n) => { (o as unknown as Campaignactivity).campaignactivitylist_association = n.getCollectionOfObjectValues<List>(createListFromDiscriminatorValue); },
            "campaignactivitysalesliterature_association": (o, n) => { (o as unknown as Campaignactivity).campaignactivitysalesliterature_association = n.getCollectionOfObjectValues<Salesliterature>(createSalesliteratureFromDiscriminatorValue); },
            "category": (o, n) => { (o as unknown as Campaignactivity).category = n.getStringValue(); },
            "channeltypecode": (o, n) => { (o as unknown as Campaignactivity).channeltypecode = n.getNumberValue(); },
            "createdby_campaignactivity": (o, n) => { (o as unknown as Campaignactivity).createdby_campaignactivity = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdonbehalfby_campaignactivity": (o, n) => { (o as unknown as Campaignactivity).createdonbehalfby_campaignactivity = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "donotsendonoptout": (o, n) => { (o as unknown as Campaignactivity).donotsendonoptout = n.getBooleanValue(); },
            "excludeifcontactedinxdays": (o, n) => { (o as unknown as Campaignactivity).excludeifcontactedinxdays = n.getNumberValue(); },
            "ignoreinactivelistmembers": (o, n) => { (o as unknown as Campaignactivity).ignoreinactivelistmembers = n.getBooleanValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Campaignactivity).importsequencenumber = n.getNumberValue(); },
            "modifiedby_campaignactivity": (o, n) => { (o as unknown as Campaignactivity).modifiedby_campaignactivity = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedonbehalfby_campaignactivity": (o, n) => { (o as unknown as Campaignactivity).modifiedonbehalfby_campaignactivity = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Campaignactivity).overriddencreatedon = n.getDateValue(); },
            "ownerid_campaignactivity": (o, n) => { (o as unknown as Campaignactivity).ownerid_campaignactivity = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit_campaignactivity": (o, n) => { (o as unknown as Campaignactivity).owningbusinessunit_campaignactivity = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam_campaignactivity": (o, n) => { (o as unknown as Campaignactivity).owningteam_campaignactivity = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser_campaignactivity": (o, n) => { (o as unknown as Campaignactivity).owninguser_campaignactivity = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "regardingobjectid_bookableresourcebooking_campaignactivity": (o, n) => { (o as unknown as Campaignactivity).regardingobjectid_bookableresourcebooking_campaignactivity = n.getObjectValue<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "regardingobjectid_bookableresourcebookingheader_campaignactivity": (o, n) => { (o as unknown as Campaignactivity).regardingobjectid_bookableresourcebookingheader_campaignactivity = n.getObjectValue<Bookableresourcebookingheader>(createBookableresourcebookingheaderFromDiscriminatorValue); },
            "regardingobjectid_campaign_campaignactivity": (o, n) => { (o as unknown as Campaignactivity).regardingobjectid_campaign_campaignactivity = n.getObjectValue<Campaign>(createCampaignFromDiscriminatorValue); },
            "sendermailboxid_campaignactivity": (o, n) => { (o as unknown as Campaignactivity).sendermailboxid_campaignactivity = n.getObjectValue<Mailbox>(createMailboxFromDiscriminatorValue); },
            "sla_activitypointer_sla_campaignactivity": (o, n) => { (o as unknown as Campaignactivity).sla_activitypointer_sla_campaignactivity = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "slainvokedid_activitypointer_sla_campaignactivity": (o, n) => { (o as unknown as Campaignactivity).slainvokedid_activitypointer_sla_campaignactivity = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "stageid_processstage": (o, n) => { (o as unknown as Campaignactivity).stageid_processstage = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "subcategory": (o, n) => { (o as unknown as Campaignactivity).subcategory = n.getStringValue(); },
            "transactioncurrencyid_campaignactivity": (o, n) => { (o as unknown as Campaignactivity).transactioncurrencyid_campaignactivity = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "typecode": (o, n) => { (o as unknown as Campaignactivity).typecode = n.getNumberValue(); },
        };
    };
    /**
     * Gets the ignoreinactivelistmembers property value. 
     * @returns a boolean
     */
    public get ignoreinactivelistmembers() {
        return this._ignoreinactivelistmembers;
    };
    /**
     * Sets the ignoreinactivelistmembers property value. 
     * @param value Value to set for the ignoreinactivelistmembers property.
     */
    public set ignoreinactivelistmembers(value: boolean | undefined) {
        this._ignoreinactivelistmembers = value;
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
     * Gets the modifiedby_campaignactivity property value. 
     * @returns a systemuser
     */
    public get modifiedby_campaignactivity() {
        return this._modifiedby_campaignactivity;
    };
    /**
     * Sets the modifiedby_campaignactivity property value. 
     * @param value Value to set for the modifiedby_campaignactivity property.
     */
    public set modifiedby_campaignactivity(value: Systemuser | undefined) {
        this._modifiedby_campaignactivity = value;
    };
    /**
     * Gets the modifiedonbehalfby_campaignactivity property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby_campaignactivity() {
        return this._modifiedonbehalfby_campaignactivity;
    };
    /**
     * Sets the modifiedonbehalfby_campaignactivity property value. 
     * @param value Value to set for the modifiedonbehalfby_campaignactivity property.
     */
    public set modifiedonbehalfby_campaignactivity(value: Systemuser | undefined) {
        this._modifiedonbehalfby_campaignactivity = value;
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
     * Gets the ownerid_campaignactivity property value. 
     * @returns a principal
     */
    public get ownerid_campaignactivity() {
        return this._ownerid_campaignactivity;
    };
    /**
     * Sets the ownerid_campaignactivity property value. 
     * @param value Value to set for the ownerid_campaignactivity property.
     */
    public set ownerid_campaignactivity(value: Principal | undefined) {
        this._ownerid_campaignactivity = value;
    };
    /**
     * Gets the owningbusinessunit_campaignactivity property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit_campaignactivity() {
        return this._owningbusinessunit_campaignactivity;
    };
    /**
     * Sets the owningbusinessunit_campaignactivity property value. 
     * @param value Value to set for the owningbusinessunit_campaignactivity property.
     */
    public set owningbusinessunit_campaignactivity(value: Businessunit | undefined) {
        this._owningbusinessunit_campaignactivity = value;
    };
    /**
     * Gets the owningteam_campaignactivity property value. 
     * @returns a team
     */
    public get owningteam_campaignactivity() {
        return this._owningteam_campaignactivity;
    };
    /**
     * Sets the owningteam_campaignactivity property value. 
     * @param value Value to set for the owningteam_campaignactivity property.
     */
    public set owningteam_campaignactivity(value: Team | undefined) {
        this._owningteam_campaignactivity = value;
    };
    /**
     * Gets the owninguser_campaignactivity property value. 
     * @returns a systemuser
     */
    public get owninguser_campaignactivity() {
        return this._owninguser_campaignactivity;
    };
    /**
     * Sets the owninguser_campaignactivity property value. 
     * @param value Value to set for the owninguser_campaignactivity property.
     */
    public set owninguser_campaignactivity(value: Systemuser | undefined) {
        this._owninguser_campaignactivity = value;
    };
    /**
     * Gets the regardingobjectid_bookableresourcebooking_campaignactivity property value. 
     * @returns a bookableresourcebooking
     */
    public get regardingobjectid_bookableresourcebooking_campaignactivity() {
        return this._regardingobjectid_bookableresourcebooking_campaignactivity;
    };
    /**
     * Sets the regardingobjectid_bookableresourcebooking_campaignactivity property value. 
     * @param value Value to set for the regardingobjectid_bookableresourcebooking_campaignactivity property.
     */
    public set regardingobjectid_bookableresourcebooking_campaignactivity(value: Bookableresourcebooking | undefined) {
        this._regardingobjectid_bookableresourcebooking_campaignactivity = value;
    };
    /**
     * Gets the regardingobjectid_bookableresourcebookingheader_campaignactivity property value. 
     * @returns a bookableresourcebookingheader
     */
    public get regardingobjectid_bookableresourcebookingheader_campaignactivity() {
        return this._regardingobjectid_bookableresourcebookingheader_campaignactivity;
    };
    /**
     * Sets the regardingobjectid_bookableresourcebookingheader_campaignactivity property value. 
     * @param value Value to set for the regardingobjectid_bookableresourcebookingheader_campaignactivity property.
     */
    public set regardingobjectid_bookableresourcebookingheader_campaignactivity(value: Bookableresourcebookingheader | undefined) {
        this._regardingobjectid_bookableresourcebookingheader_campaignactivity = value;
    };
    /**
     * Gets the regardingobjectid_campaign_campaignactivity property value. 
     * @returns a campaign
     */
    public get regardingobjectid_campaign_campaignactivity() {
        return this._regardingobjectid_campaign_campaignactivity;
    };
    /**
     * Sets the regardingobjectid_campaign_campaignactivity property value. 
     * @param value Value to set for the regardingobjectid_campaign_campaignactivity property.
     */
    public set regardingobjectid_campaign_campaignactivity(value: Campaign | undefined) {
        this._regardingobjectid_campaign_campaignactivity = value;
    };
    /**
     * Gets the sendermailboxid_campaignactivity property value. 
     * @returns a mailbox
     */
    public get sendermailboxid_campaignactivity() {
        return this._sendermailboxid_campaignactivity;
    };
    /**
     * Sets the sendermailboxid_campaignactivity property value. 
     * @param value Value to set for the sendermailboxid_campaignactivity property.
     */
    public set sendermailboxid_campaignactivity(value: Mailbox | undefined) {
        this._sendermailboxid_campaignactivity = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Activitypointer>("activityid_activitypointer", this.activityid_activitypointer);
        writer.writeNumberValue("actualcost", this.actualcost);
        writer.writeNumberValue("actualcost_base", this.actualcost_base);
        writer.writeNumberValue("budgetedcost", this.budgetedcost);
        writer.writeNumberValue("budgetedcost_base", this.budgetedcost_base);
        writer.writeCollectionOfObjectValues<Account>("campaignActivity_Accounts", this.campaignActivity_Accounts);
        writer.writeCollectionOfObjectValues<Activityparty>("campaignactivity_activity_parties", this.campaignactivity_activity_parties);
        writer.writeCollectionOfObjectValues<Activityparty>("campaignactivity_activityparties", this.campaignactivity_activityparties);
        writer.writeCollectionOfObjectValues<Activitypointer>("campaignActivity_ActivityPointers", this.campaignActivity_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("campaignActivity_Annotation", this.campaignActivity_Annotation);
        writer.writeCollectionOfObjectValues<Appointment>("campaignActivity_Appointments", this.campaignActivity_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("campaignActivity_AsyncOperations", this.campaignActivity_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("campaignActivity_BulkDeleteFailures", this.campaignActivity_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Bulkoperation>("campaignActivity_BulkOperations", this.campaignActivity_BulkOperations);
        writer.writeCollectionOfObjectValues<Campaignresponse>("campaignactivity_CampaignResponses", this.campaignactivity_CampaignResponses);
        writer.writeCollectionOfObjectValues<Connection>("campaignactivity_connections1", this.campaignactivity_connections1);
        writer.writeCollectionOfObjectValues<Connection>("campaignactivity_connections2", this.campaignactivity_connections2);
        writer.writeCollectionOfObjectValues<Contact>("campaignActivity_Contacts", this.campaignActivity_Contacts);
        writer.writeCollectionOfObjectValues<Email>("campaignActivity_Emails", this.campaignActivity_Emails);
        writer.writeCollectionOfObjectValues<Fax>("campaignActivity_Faxes", this.campaignActivity_Faxes);
        writer.writeCollectionOfObjectValues<Incidentresolution>("campaignactivity_IncidentResolutions", this.campaignactivity_IncidentResolutions);
        writer.writeCollectionOfObjectValues<Lead>("campaignActivity_Leads", this.campaignActivity_Leads);
        writer.writeCollectionOfObjectValues<Letter>("campaignActivity_Letters", this.campaignActivity_Letters);
        writer.writeCollectionOfObjectValues<Bulkoperationlog>("campaignActivity_logs", this.campaignActivity_logs);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("campaignActivity_MailboxTrackingFolder", this.campaignActivity_MailboxTrackingFolder);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("campaignactivity_msdyn_approvals", this.campaignactivity_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("campaignactivity_msdyn_bookingalerts", this.campaignactivity_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("campaignactivity_msdyn_ocliveworkitems", this.campaignactivity_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("campaignactivity_msdyn_ocoutboundmessages", this.campaignactivity_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("campaignactivity_msdyn_ocsessions", this.campaignactivity_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("campaignactivity_msfp_alerts", this.campaignactivity_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("campaignactivity_msfp_surveyinvites", this.campaignactivity_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("campaignactivity_msfp_surveyresponses", this.campaignactivity_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Opportunityclose>("campaignactivity_OpportunityCloses", this.campaignactivity_OpportunityCloses);
        writer.writeCollectionOfObjectValues<Orderclose>("campaignactivity_OrderCloses", this.campaignactivity_OrderCloses);
        writer.writeCollectionOfObjectValues<Phonecall>("campaignActivity_Phonecalls", this.campaignActivity_Phonecalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("campaignactivity_principalobjectattributeaccess", this.campaignactivity_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("campaignActivity_ProcessSessions", this.campaignActivity_ProcessSessions);
        writer.writeCollectionOfObjectValues<Queueitem>("campaignActivity_QueueItem", this.campaignActivity_QueueItem);
        writer.writeCollectionOfObjectValues<Quoteclose>("campaignactivity_QuoteCloses", this.campaignactivity_QuoteCloses);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("campaignActivity_RecurringAppointmentMasters", this.campaignActivity_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("campaignactivity_ServiceAppointments", this.campaignactivity_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("campaignactivity_SocialActivities", this.campaignactivity_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("campaignActivity_SyncErrors", this.campaignActivity_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("campaignActivity_Tasks", this.campaignActivity_Tasks);
        writer.writeCollectionOfObjectValues<List>("campaignactivitylist_association", this.campaignactivitylist_association);
        writer.writeCollectionOfObjectValues<Salesliterature>("campaignactivitysalesliterature_association", this.campaignactivitysalesliterature_association);
        writer.writeStringValue("category", this.category);
        writer.writeNumberValue("channeltypecode", this.channeltypecode);
        writer.writeObjectValue<Systemuser>("createdby_campaignactivity", this.createdby_campaignactivity);
        writer.writeObjectValue<Systemuser>("createdonbehalfby_campaignactivity", this.createdonbehalfby_campaignactivity);
        writer.writeBooleanValue("donotsendonoptout", this.donotsendonoptout);
        writer.writeNumberValue("excludeifcontactedinxdays", this.excludeifcontactedinxdays);
        writer.writeBooleanValue("ignoreinactivelistmembers", this.ignoreinactivelistmembers);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby_campaignactivity", this.modifiedby_campaignactivity);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby_campaignactivity", this.modifiedonbehalfby_campaignactivity);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid_campaignactivity", this.ownerid_campaignactivity);
        writer.writeObjectValue<Businessunit>("owningbusinessunit_campaignactivity", this.owningbusinessunit_campaignactivity);
        writer.writeObjectValue<Team>("owningteam_campaignactivity", this.owningteam_campaignactivity);
        writer.writeObjectValue<Systemuser>("owninguser_campaignactivity", this.owninguser_campaignactivity);
        writer.writeObjectValue<Bookableresourcebooking>("regardingobjectid_bookableresourcebooking_campaignactivity", this.regardingobjectid_bookableresourcebooking_campaignactivity);
        writer.writeObjectValue<Bookableresourcebookingheader>("regardingobjectid_bookableresourcebookingheader_campaignactivity", this.regardingobjectid_bookableresourcebookingheader_campaignactivity);
        writer.writeObjectValue<Campaign>("regardingobjectid_campaign_campaignactivity", this.regardingobjectid_campaign_campaignactivity);
        writer.writeObjectValue<Mailbox>("sendermailboxid_campaignactivity", this.sendermailboxid_campaignactivity);
        writer.writeObjectValue<Sla>("sla_activitypointer_sla_campaignactivity", this.sla_activitypointer_sla_campaignactivity);
        writer.writeObjectValue<Sla>("slainvokedid_activitypointer_sla_campaignactivity", this.slainvokedid_activitypointer_sla_campaignactivity);
        writer.writeObjectValue<Processstage>("stageid_processstage", this.stageid_processstage);
        writer.writeStringValue("subcategory", this.subcategory);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid_campaignactivity", this.transactioncurrencyid_campaignactivity);
        writer.writeNumberValue("typecode", this.typecode);
    };
    /**
     * Gets the sla_activitypointer_sla_campaignactivity property value. 
     * @returns a sla
     */
    public get sla_activitypointer_sla_campaignactivity() {
        return this._sla_activitypointer_sla_campaignactivity;
    };
    /**
     * Sets the sla_activitypointer_sla_campaignactivity property value. 
     * @param value Value to set for the sla_activitypointer_sla_campaignactivity property.
     */
    public set sla_activitypointer_sla_campaignactivity(value: Sla | undefined) {
        this._sla_activitypointer_sla_campaignactivity = value;
    };
    /**
     * Gets the slainvokedid_activitypointer_sla_campaignactivity property value. 
     * @returns a sla
     */
    public get slainvokedid_activitypointer_sla_campaignactivity() {
        return this._slainvokedid_activitypointer_sla_campaignactivity;
    };
    /**
     * Sets the slainvokedid_activitypointer_sla_campaignactivity property value. 
     * @param value Value to set for the slainvokedid_activitypointer_sla_campaignactivity property.
     */
    public set slainvokedid_activitypointer_sla_campaignactivity(value: Sla | undefined) {
        this._slainvokedid_activitypointer_sla_campaignactivity = value;
    };
    /**
     * Gets the stageid_processstage property value. 
     * @returns a processstage
     */
    public get stageid_processstage() {
        return this._stageid_processstage;
    };
    /**
     * Sets the stageid_processstage property value. 
     * @param value Value to set for the stageid_processstage property.
     */
    public set stageid_processstage(value: Processstage | undefined) {
        this._stageid_processstage = value;
    };
    /**
     * Gets the subcategory property value. 
     * @returns a string
     */
    public get subcategory() {
        return this._subcategory;
    };
    /**
     * Sets the subcategory property value. 
     * @param value Value to set for the subcategory property.
     */
    public set subcategory(value: string | undefined) {
        this._subcategory = value;
    };
    /**
     * Gets the transactioncurrencyid_campaignactivity property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid_campaignactivity() {
        return this._transactioncurrencyid_campaignactivity;
    };
    /**
     * Sets the transactioncurrencyid_campaignactivity property value. 
     * @param value Value to set for the transactioncurrencyid_campaignactivity property.
     */
    public set transactioncurrencyid_campaignactivity(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid_campaignactivity = value;
    };
    /**
     * Gets the typecode property value. 
     * @returns a integer
     */
    public get typecode() {
        return this._typecode;
    };
    /**
     * Sets the typecode property value. 
     * @param value Value to set for the typecode property.
     */
    public set typecode(value: number | undefined) {
        this._typecode = value;
    };
}
