import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createActivitypartyFromDiscriminatorValue} from './createActivitypartyFromDiscriminatorValue';
import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcebookingFromDiscriminatorValue} from './createBookableresourcebookingFromDiscriminatorValue';
import {createBookableresourcebookingheaderFromDiscriminatorValue} from './createBookableresourcebookingheaderFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBulkoperationlogFromDiscriminatorValue} from './createBulkoperationlogFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCampaignactivityFromDiscriminatorValue} from './createCampaignactivityFromDiscriminatorValue';
import {createCampaignresponseFromDiscriminatorValue} from './createCampaignresponseFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createIncidentresolutionFromDiscriminatorValue} from './createIncidentresolutionFromDiscriminatorValue';
import {createInteractionforemailFromDiscriminatorValue} from './createInteractionforemailFromDiscriminatorValue';
import {createKnowledgearticleFromDiscriminatorValue} from './createKnowledgearticleFromDiscriminatorValue';
import {createKnowledgebaserecordFromDiscriminatorValue} from './createKnowledgebaserecordFromDiscriminatorValue';
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
import {createQueueitemFromDiscriminatorValue} from './createQueueitemFromDiscriminatorValue';
import {createQuotecloseFromDiscriminatorValue} from './createQuotecloseFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSlaFromDiscriminatorValue} from './createSlaFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Activityparty, Activitypointer, Annotation, Appointment, Asyncoperation, Bookableresourcebooking, Bookableresourcebookingheader, Bulkdeletefailure, Bulkoperationlog, Businessunit, Campaignactivity, Campaignresponse, Contact, Email, Fax, Incidentresolution, Interactionforemail, Knowledgearticle, Knowledgebaserecord, Lead, Letter, List, Mailbox, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Opportunityclose, Orderclose, Phonecall, Principal, Principalobjectattributeaccess, Queueitem, Quoteclose, Recurringappointmentmaster, Serviceappointment, Sla, Socialactivity, Syncerror, Systemuser, Task, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Bulkoperation extends Activitypointer implements Parsable {
    private _activityid_activitypointer?: Activitypointer | undefined;
    private _bulkOperation_Accounts?: Account[] | undefined;
    private _bulkoperation_activity_parties?: Activityparty[] | undefined;
    private _bulkOperation_ActivityPointers?: Activitypointer[] | undefined;
    private _bulkoperation_Annotations?: Annotation[] | undefined;
    private _bulkOperation_Appointment?: Appointment[] | undefined;
    private _bulkOperation_AsyncOperations?: Asyncoperation[] | undefined;
    private _bulkOperation_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _bulkOperation_CampaignResponse?: Campaignresponse[] | undefined;
    private _bulkOperation_Contacts?: Contact[] | undefined;
    private _bulkOperation_Email?: Email[] | undefined;
    private _bulkOperation_Faxes?: Fax[] | undefined;
    private _bulkoperation_IncidentResolutions?: Incidentresolution[] | undefined;
    private _bulkOperation_Leads?: Lead[] | undefined;
    private _bulkOperation_Letter?: Letter[] | undefined;
    private _bulkOperation_logs?: Bulkoperationlog[] | undefined;
    private _bulkOperation_MailboxTrackingFolder?: Mailboxtrackingfolder[] | undefined;
    private _bulkoperation_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _bulkoperation_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _bulkoperation_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _bulkoperation_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _bulkoperation_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _bulkoperation_msfp_alerts?: Msfp_alert[] | undefined;
    private _bulkoperation_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _bulkoperation_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _bulkoperation_OpportunityCloses?: Opportunityclose[] | undefined;
    private _bulkoperation_OrderCloses?: Orderclose[] | undefined;
    private _bulkOperation_Phonecall?: Phonecall[] | undefined;
    private _bulkoperation_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _bulkOperation_QueueItem?: Queueitem[] | undefined;
    private _bulkoperation_QuoteCloses?: Quoteclose[] | undefined;
    private _bulkOperation_RecurringAppointmentMaster?: Recurringappointmentmaster[] | undefined;
    private _bulkoperation_ServiceAppointments?: Serviceappointment[] | undefined;
    private _bulkOperation_SocialActivity?: Socialactivity[] | undefined;
    private _bulkOperation_SyncErrors?: Syncerror[] | undefined;
    private _bulkoperation_Tasks?: Task[] | undefined;
    private _bulkoperationnumber?: string | undefined;
    private _createdby_bulkoperation?: Systemuser | undefined;
    private _createdonbehalfby_bulkoperation?: Systemuser | undefined;
    private _createdrecordtypecode?: number | undefined;
    private _errornumber?: number | undefined;
    private _failurecount?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby_bulkoperation?: Systemuser | undefined;
    private _modifiedonbehalfby_bulkoperation?: Systemuser | undefined;
    private _operationtypecode?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid_bulkoperation?: Principal | undefined;
    private _owningbusinessunit_bulkoperation?: Businessunit | undefined;
    private _owningteam_bulkoperation?: Team | undefined;
    private _owninguser_bulkoperation?: Systemuser | undefined;
    private _parameters?: string | undefined;
    private _regardingobjectid_account_bulkoperation?: Account | undefined;
    private _regardingobjectid_bookableresourcebooking_bulkoperation?: Bookableresourcebooking | undefined;
    private _regardingobjectid_bookableresourcebookingheader_bulkoperation?: Bookableresourcebookingheader | undefined;
    private _regardingobjectid_campaignactivity_bulkoperation?: Campaignactivity | undefined;
    private _regardingobjectid_contact_bulkoperation?: Contact | undefined;
    private _regardingobjectid_knowledgearticle_bulkoperation?: Knowledgearticle | undefined;
    private _regardingobjectid_knowledgebaserecord_bulkoperation?: Knowledgebaserecord | undefined;
    private _regardingobjectid_lead_bulkoperation?: Lead | undefined;
    private _regardingobjectid_list?: List | undefined;
    private _regardingobjectid_new_interactionforemail_bulkoperation?: Interactionforemail | undefined;
    private _sendermailboxid_bulkoperation?: Mailbox | undefined;
    private _sla_activitypointer_sla_bulkoperation?: Sla | undefined;
    private _slainvokedid_activitypointer_sla_bulkoperation?: Sla | undefined;
    private _successcount?: number | undefined;
    private _targetedrecordtypecode?: number | undefined;
    private _targetmemberscount?: number | undefined;
    private _transactioncurrencyid_bulkoperation?: Transactioncurrency | undefined;
    private _workflowinfo?: string | undefined;
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
     * Gets the bulkOperation_Accounts property value. 
     * @returns a account
     */
    public get bulkOperation_Accounts() {
        return this._bulkOperation_Accounts;
    };
    /**
     * Sets the bulkOperation_Accounts property value. 
     * @param value Value to set for the BulkOperation_Accounts property.
     */
    public set bulkOperation_Accounts(value: Account[] | undefined) {
        this._bulkOperation_Accounts = value;
    };
    /**
     * Gets the bulkoperation_activity_parties property value. 
     * @returns a activityparty
     */
    public get bulkoperation_activity_parties() {
        return this._bulkoperation_activity_parties;
    };
    /**
     * Sets the bulkoperation_activity_parties property value. 
     * @param value Value to set for the bulkoperation_activity_parties property.
     */
    public set bulkoperation_activity_parties(value: Activityparty[] | undefined) {
        this._bulkoperation_activity_parties = value;
    };
    /**
     * Gets the bulkOperation_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get bulkOperation_ActivityPointers() {
        return this._bulkOperation_ActivityPointers;
    };
    /**
     * Sets the bulkOperation_ActivityPointers property value. 
     * @param value Value to set for the BulkOperation_ActivityPointers property.
     */
    public set bulkOperation_ActivityPointers(value: Activitypointer[] | undefined) {
        this._bulkOperation_ActivityPointers = value;
    };
    /**
     * Gets the bulkoperation_Annotations property value. 
     * @returns a annotation
     */
    public get bulkoperation_Annotations() {
        return this._bulkoperation_Annotations;
    };
    /**
     * Sets the bulkoperation_Annotations property value. 
     * @param value Value to set for the bulkoperation_Annotations property.
     */
    public set bulkoperation_Annotations(value: Annotation[] | undefined) {
        this._bulkoperation_Annotations = value;
    };
    /**
     * Gets the bulkOperation_Appointment property value. 
     * @returns a appointment
     */
    public get bulkOperation_Appointment() {
        return this._bulkOperation_Appointment;
    };
    /**
     * Sets the bulkOperation_Appointment property value. 
     * @param value Value to set for the BulkOperation_Appointment property.
     */
    public set bulkOperation_Appointment(value: Appointment[] | undefined) {
        this._bulkOperation_Appointment = value;
    };
    /**
     * Gets the bulkOperation_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get bulkOperation_AsyncOperations() {
        return this._bulkOperation_AsyncOperations;
    };
    /**
     * Sets the bulkOperation_AsyncOperations property value. 
     * @param value Value to set for the BulkOperation_AsyncOperations property.
     */
    public set bulkOperation_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._bulkOperation_AsyncOperations = value;
    };
    /**
     * Gets the bulkOperation_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get bulkOperation_BulkDeleteFailures() {
        return this._bulkOperation_BulkDeleteFailures;
    };
    /**
     * Sets the bulkOperation_BulkDeleteFailures property value. 
     * @param value Value to set for the BulkOperation_BulkDeleteFailures property.
     */
    public set bulkOperation_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._bulkOperation_BulkDeleteFailures = value;
    };
    /**
     * Gets the bulkOperation_CampaignResponse property value. 
     * @returns a campaignresponse
     */
    public get bulkOperation_CampaignResponse() {
        return this._bulkOperation_CampaignResponse;
    };
    /**
     * Sets the bulkOperation_CampaignResponse property value. 
     * @param value Value to set for the BulkOperation_CampaignResponse property.
     */
    public set bulkOperation_CampaignResponse(value: Campaignresponse[] | undefined) {
        this._bulkOperation_CampaignResponse = value;
    };
    /**
     * Gets the bulkOperation_Contacts property value. 
     * @returns a contact
     */
    public get bulkOperation_Contacts() {
        return this._bulkOperation_Contacts;
    };
    /**
     * Sets the bulkOperation_Contacts property value. 
     * @param value Value to set for the BulkOperation_Contacts property.
     */
    public set bulkOperation_Contacts(value: Contact[] | undefined) {
        this._bulkOperation_Contacts = value;
    };
    /**
     * Gets the bulkOperation_Email property value. 
     * @returns a email
     */
    public get bulkOperation_Email() {
        return this._bulkOperation_Email;
    };
    /**
     * Sets the bulkOperation_Email property value. 
     * @param value Value to set for the BulkOperation_Email property.
     */
    public set bulkOperation_Email(value: Email[] | undefined) {
        this._bulkOperation_Email = value;
    };
    /**
     * Gets the bulkOperation_Faxes property value. 
     * @returns a fax
     */
    public get bulkOperation_Faxes() {
        return this._bulkOperation_Faxes;
    };
    /**
     * Sets the bulkOperation_Faxes property value. 
     * @param value Value to set for the BulkOperation_Faxes property.
     */
    public set bulkOperation_Faxes(value: Fax[] | undefined) {
        this._bulkOperation_Faxes = value;
    };
    /**
     * Gets the bulkoperation_IncidentResolutions property value. 
     * @returns a incidentresolution
     */
    public get bulkoperation_IncidentResolutions() {
        return this._bulkoperation_IncidentResolutions;
    };
    /**
     * Sets the bulkoperation_IncidentResolutions property value. 
     * @param value Value to set for the bulkoperation_IncidentResolutions property.
     */
    public set bulkoperation_IncidentResolutions(value: Incidentresolution[] | undefined) {
        this._bulkoperation_IncidentResolutions = value;
    };
    /**
     * Gets the bulkOperation_Leads property value. 
     * @returns a lead
     */
    public get bulkOperation_Leads() {
        return this._bulkOperation_Leads;
    };
    /**
     * Sets the bulkOperation_Leads property value. 
     * @param value Value to set for the BulkOperation_Leads property.
     */
    public set bulkOperation_Leads(value: Lead[] | undefined) {
        this._bulkOperation_Leads = value;
    };
    /**
     * Gets the bulkOperation_Letter property value. 
     * @returns a letter
     */
    public get bulkOperation_Letter() {
        return this._bulkOperation_Letter;
    };
    /**
     * Sets the bulkOperation_Letter property value. 
     * @param value Value to set for the BulkOperation_Letter property.
     */
    public set bulkOperation_Letter(value: Letter[] | undefined) {
        this._bulkOperation_Letter = value;
    };
    /**
     * Gets the bulkOperation_logs property value. 
     * @returns a bulkoperationlog
     */
    public get bulkOperation_logs() {
        return this._bulkOperation_logs;
    };
    /**
     * Sets the bulkOperation_logs property value. 
     * @param value Value to set for the BulkOperation_logs property.
     */
    public set bulkOperation_logs(value: Bulkoperationlog[] | undefined) {
        this._bulkOperation_logs = value;
    };
    /**
     * Gets the bulkOperation_MailboxTrackingFolder property value. 
     * @returns a mailboxtrackingfolder
     */
    public get bulkOperation_MailboxTrackingFolder() {
        return this._bulkOperation_MailboxTrackingFolder;
    };
    /**
     * Sets the bulkOperation_MailboxTrackingFolder property value. 
     * @param value Value to set for the BulkOperation_MailboxTrackingFolder property.
     */
    public set bulkOperation_MailboxTrackingFolder(value: Mailboxtrackingfolder[] | undefined) {
        this._bulkOperation_MailboxTrackingFolder = value;
    };
    /**
     * Gets the bulkoperation_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get bulkoperation_msdyn_approvals() {
        return this._bulkoperation_msdyn_approvals;
    };
    /**
     * Sets the bulkoperation_msdyn_approvals property value. 
     * @param value Value to set for the bulkoperation_msdyn_approvals property.
     */
    public set bulkoperation_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._bulkoperation_msdyn_approvals = value;
    };
    /**
     * Gets the bulkoperation_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get bulkoperation_msdyn_bookingalerts() {
        return this._bulkoperation_msdyn_bookingalerts;
    };
    /**
     * Sets the bulkoperation_msdyn_bookingalerts property value. 
     * @param value Value to set for the bulkoperation_msdyn_bookingalerts property.
     */
    public set bulkoperation_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._bulkoperation_msdyn_bookingalerts = value;
    };
    /**
     * Gets the bulkoperation_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get bulkoperation_msdyn_ocliveworkitems() {
        return this._bulkoperation_msdyn_ocliveworkitems;
    };
    /**
     * Sets the bulkoperation_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the bulkoperation_msdyn_ocliveworkitems property.
     */
    public set bulkoperation_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._bulkoperation_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the bulkoperation_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get bulkoperation_msdyn_ocoutboundmessages() {
        return this._bulkoperation_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the bulkoperation_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the bulkoperation_msdyn_ocoutboundmessages property.
     */
    public set bulkoperation_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._bulkoperation_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the bulkoperation_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get bulkoperation_msdyn_ocsessions() {
        return this._bulkoperation_msdyn_ocsessions;
    };
    /**
     * Sets the bulkoperation_msdyn_ocsessions property value. 
     * @param value Value to set for the bulkoperation_msdyn_ocsessions property.
     */
    public set bulkoperation_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._bulkoperation_msdyn_ocsessions = value;
    };
    /**
     * Gets the bulkoperation_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get bulkoperation_msfp_alerts() {
        return this._bulkoperation_msfp_alerts;
    };
    /**
     * Sets the bulkoperation_msfp_alerts property value. 
     * @param value Value to set for the bulkoperation_msfp_alerts property.
     */
    public set bulkoperation_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._bulkoperation_msfp_alerts = value;
    };
    /**
     * Gets the bulkoperation_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get bulkoperation_msfp_surveyinvites() {
        return this._bulkoperation_msfp_surveyinvites;
    };
    /**
     * Sets the bulkoperation_msfp_surveyinvites property value. 
     * @param value Value to set for the bulkoperation_msfp_surveyinvites property.
     */
    public set bulkoperation_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._bulkoperation_msfp_surveyinvites = value;
    };
    /**
     * Gets the bulkoperation_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get bulkoperation_msfp_surveyresponses() {
        return this._bulkoperation_msfp_surveyresponses;
    };
    /**
     * Sets the bulkoperation_msfp_surveyresponses property value. 
     * @param value Value to set for the bulkoperation_msfp_surveyresponses property.
     */
    public set bulkoperation_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._bulkoperation_msfp_surveyresponses = value;
    };
    /**
     * Gets the bulkoperation_OpportunityCloses property value. 
     * @returns a opportunityclose
     */
    public get bulkoperation_OpportunityCloses() {
        return this._bulkoperation_OpportunityCloses;
    };
    /**
     * Sets the bulkoperation_OpportunityCloses property value. 
     * @param value Value to set for the bulkoperation_OpportunityCloses property.
     */
    public set bulkoperation_OpportunityCloses(value: Opportunityclose[] | undefined) {
        this._bulkoperation_OpportunityCloses = value;
    };
    /**
     * Gets the bulkoperation_OrderCloses property value. 
     * @returns a orderclose
     */
    public get bulkoperation_OrderCloses() {
        return this._bulkoperation_OrderCloses;
    };
    /**
     * Sets the bulkoperation_OrderCloses property value. 
     * @param value Value to set for the bulkoperation_OrderCloses property.
     */
    public set bulkoperation_OrderCloses(value: Orderclose[] | undefined) {
        this._bulkoperation_OrderCloses = value;
    };
    /**
     * Gets the bulkOperation_Phonecall property value. 
     * @returns a phonecall
     */
    public get bulkOperation_Phonecall() {
        return this._bulkOperation_Phonecall;
    };
    /**
     * Sets the bulkOperation_Phonecall property value. 
     * @param value Value to set for the BulkOperation_Phonecall property.
     */
    public set bulkOperation_Phonecall(value: Phonecall[] | undefined) {
        this._bulkOperation_Phonecall = value;
    };
    /**
     * Gets the bulkoperation_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get bulkoperation_PrincipalObjectAttributeAccesses() {
        return this._bulkoperation_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the bulkoperation_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the bulkoperation_PrincipalObjectAttributeAccesses property.
     */
    public set bulkoperation_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._bulkoperation_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the bulkOperation_QueueItem property value. 
     * @returns a queueitem
     */
    public get bulkOperation_QueueItem() {
        return this._bulkOperation_QueueItem;
    };
    /**
     * Sets the bulkOperation_QueueItem property value. 
     * @param value Value to set for the BulkOperation_QueueItem property.
     */
    public set bulkOperation_QueueItem(value: Queueitem[] | undefined) {
        this._bulkOperation_QueueItem = value;
    };
    /**
     * Gets the bulkoperation_QuoteCloses property value. 
     * @returns a quoteclose
     */
    public get bulkoperation_QuoteCloses() {
        return this._bulkoperation_QuoteCloses;
    };
    /**
     * Sets the bulkoperation_QuoteCloses property value. 
     * @param value Value to set for the bulkoperation_QuoteCloses property.
     */
    public set bulkoperation_QuoteCloses(value: Quoteclose[] | undefined) {
        this._bulkoperation_QuoteCloses = value;
    };
    /**
     * Gets the bulkOperation_RecurringAppointmentMaster property value. 
     * @returns a recurringappointmentmaster
     */
    public get bulkOperation_RecurringAppointmentMaster() {
        return this._bulkOperation_RecurringAppointmentMaster;
    };
    /**
     * Sets the bulkOperation_RecurringAppointmentMaster property value. 
     * @param value Value to set for the BulkOperation_RecurringAppointmentMaster property.
     */
    public set bulkOperation_RecurringAppointmentMaster(value: Recurringappointmentmaster[] | undefined) {
        this._bulkOperation_RecurringAppointmentMaster = value;
    };
    /**
     * Gets the bulkoperation_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get bulkoperation_ServiceAppointments() {
        return this._bulkoperation_ServiceAppointments;
    };
    /**
     * Sets the bulkoperation_ServiceAppointments property value. 
     * @param value Value to set for the bulkoperation_ServiceAppointments property.
     */
    public set bulkoperation_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._bulkoperation_ServiceAppointments = value;
    };
    /**
     * Gets the bulkOperation_SocialActivity property value. 
     * @returns a socialactivity
     */
    public get bulkOperation_SocialActivity() {
        return this._bulkOperation_SocialActivity;
    };
    /**
     * Sets the bulkOperation_SocialActivity property value. 
     * @param value Value to set for the BulkOperation_SocialActivity property.
     */
    public set bulkOperation_SocialActivity(value: Socialactivity[] | undefined) {
        this._bulkOperation_SocialActivity = value;
    };
    /**
     * Gets the bulkOperation_SyncErrors property value. 
     * @returns a syncerror
     */
    public get bulkOperation_SyncErrors() {
        return this._bulkOperation_SyncErrors;
    };
    /**
     * Sets the bulkOperation_SyncErrors property value. 
     * @param value Value to set for the BulkOperation_SyncErrors property.
     */
    public set bulkOperation_SyncErrors(value: Syncerror[] | undefined) {
        this._bulkOperation_SyncErrors = value;
    };
    /**
     * Gets the bulkoperation_Tasks property value. 
     * @returns a task
     */
    public get bulkoperation_Tasks() {
        return this._bulkoperation_Tasks;
    };
    /**
     * Sets the bulkoperation_Tasks property value. 
     * @param value Value to set for the bulkoperation_Tasks property.
     */
    public set bulkoperation_Tasks(value: Task[] | undefined) {
        this._bulkoperation_Tasks = value;
    };
    /**
     * Gets the bulkoperationnumber property value. 
     * @returns a string
     */
    public get bulkoperationnumber() {
        return this._bulkoperationnumber;
    };
    /**
     * Sets the bulkoperationnumber property value. 
     * @param value Value to set for the bulkoperationnumber property.
     */
    public set bulkoperationnumber(value: string | undefined) {
        this._bulkoperationnumber = value;
    };
    /**
     * Instantiates a new bulkoperation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby_bulkoperation property value. 
     * @returns a systemuser
     */
    public get createdby_bulkoperation() {
        return this._createdby_bulkoperation;
    };
    /**
     * Sets the createdby_bulkoperation property value. 
     * @param value Value to set for the createdby_bulkoperation property.
     */
    public set createdby_bulkoperation(value: Systemuser | undefined) {
        this._createdby_bulkoperation = value;
    };
    /**
     * Gets the createdonbehalfby_bulkoperation property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby_bulkoperation() {
        return this._createdonbehalfby_bulkoperation;
    };
    /**
     * Sets the createdonbehalfby_bulkoperation property value. 
     * @param value Value to set for the createdonbehalfby_bulkoperation property.
     */
    public set createdonbehalfby_bulkoperation(value: Systemuser | undefined) {
        this._createdonbehalfby_bulkoperation = value;
    };
    /**
     * Gets the createdrecordtypecode property value. 
     * @returns a integer
     */
    public get createdrecordtypecode() {
        return this._createdrecordtypecode;
    };
    /**
     * Sets the createdrecordtypecode property value. 
     * @param value Value to set for the createdrecordtypecode property.
     */
    public set createdrecordtypecode(value: number | undefined) {
        this._createdrecordtypecode = value;
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
     * Gets the failurecount property value. 
     * @returns a integer
     */
    public get failurecount() {
        return this._failurecount;
    };
    /**
     * Sets the failurecount property value. 
     * @param value Value to set for the failurecount property.
     */
    public set failurecount(value: number | undefined) {
        this._failurecount = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "activityid_activitypointer": (o, n) => { (o as unknown as Bulkoperation).activityid_activitypointer = n.getObjectValue<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "bulkOperation_Accounts": (o, n) => { (o as unknown as Bulkoperation).bulkOperation_Accounts = n.getCollectionOfObjectValues<Account>(createAccountFromDiscriminatorValue); },
            "bulkoperation_activity_parties": (o, n) => { (o as unknown as Bulkoperation).bulkoperation_activity_parties = n.getCollectionOfObjectValues<Activityparty>(createActivitypartyFromDiscriminatorValue); },
            "bulkOperation_ActivityPointers": (o, n) => { (o as unknown as Bulkoperation).bulkOperation_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "bulkoperation_Annotations": (o, n) => { (o as unknown as Bulkoperation).bulkoperation_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "bulkOperation_Appointment": (o, n) => { (o as unknown as Bulkoperation).bulkOperation_Appointment = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "bulkOperation_AsyncOperations": (o, n) => { (o as unknown as Bulkoperation).bulkOperation_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "bulkOperation_BulkDeleteFailures": (o, n) => { (o as unknown as Bulkoperation).bulkOperation_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "bulkOperation_CampaignResponse": (o, n) => { (o as unknown as Bulkoperation).bulkOperation_CampaignResponse = n.getCollectionOfObjectValues<Campaignresponse>(createCampaignresponseFromDiscriminatorValue); },
            "bulkOperation_Contacts": (o, n) => { (o as unknown as Bulkoperation).bulkOperation_Contacts = n.getCollectionOfObjectValues<Contact>(createContactFromDiscriminatorValue); },
            "bulkOperation_Email": (o, n) => { (o as unknown as Bulkoperation).bulkOperation_Email = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "bulkOperation_Faxes": (o, n) => { (o as unknown as Bulkoperation).bulkOperation_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "bulkoperation_IncidentResolutions": (o, n) => { (o as unknown as Bulkoperation).bulkoperation_IncidentResolutions = n.getCollectionOfObjectValues<Incidentresolution>(createIncidentresolutionFromDiscriminatorValue); },
            "bulkOperation_Leads": (o, n) => { (o as unknown as Bulkoperation).bulkOperation_Leads = n.getCollectionOfObjectValues<Lead>(createLeadFromDiscriminatorValue); },
            "bulkOperation_Letter": (o, n) => { (o as unknown as Bulkoperation).bulkOperation_Letter = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "bulkOperation_logs": (o, n) => { (o as unknown as Bulkoperation).bulkOperation_logs = n.getCollectionOfObjectValues<Bulkoperationlog>(createBulkoperationlogFromDiscriminatorValue); },
            "bulkOperation_MailboxTrackingFolder": (o, n) => { (o as unknown as Bulkoperation).bulkOperation_MailboxTrackingFolder = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "bulkoperation_msdyn_approvals": (o, n) => { (o as unknown as Bulkoperation).bulkoperation_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "bulkoperation_msdyn_bookingalerts": (o, n) => { (o as unknown as Bulkoperation).bulkoperation_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "bulkoperation_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Bulkoperation).bulkoperation_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "bulkoperation_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Bulkoperation).bulkoperation_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "bulkoperation_msdyn_ocsessions": (o, n) => { (o as unknown as Bulkoperation).bulkoperation_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "bulkoperation_msfp_alerts": (o, n) => { (o as unknown as Bulkoperation).bulkoperation_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "bulkoperation_msfp_surveyinvites": (o, n) => { (o as unknown as Bulkoperation).bulkoperation_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "bulkoperation_msfp_surveyresponses": (o, n) => { (o as unknown as Bulkoperation).bulkoperation_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "bulkoperation_OpportunityCloses": (o, n) => { (o as unknown as Bulkoperation).bulkoperation_OpportunityCloses = n.getCollectionOfObjectValues<Opportunityclose>(createOpportunitycloseFromDiscriminatorValue); },
            "bulkoperation_OrderCloses": (o, n) => { (o as unknown as Bulkoperation).bulkoperation_OrderCloses = n.getCollectionOfObjectValues<Orderclose>(createOrdercloseFromDiscriminatorValue); },
            "bulkOperation_Phonecall": (o, n) => { (o as unknown as Bulkoperation).bulkOperation_Phonecall = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "bulkoperation_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Bulkoperation).bulkoperation_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "bulkOperation_QueueItem": (o, n) => { (o as unknown as Bulkoperation).bulkOperation_QueueItem = n.getCollectionOfObjectValues<Queueitem>(createQueueitemFromDiscriminatorValue); },
            "bulkoperation_QuoteCloses": (o, n) => { (o as unknown as Bulkoperation).bulkoperation_QuoteCloses = n.getCollectionOfObjectValues<Quoteclose>(createQuotecloseFromDiscriminatorValue); },
            "bulkOperation_RecurringAppointmentMaster": (o, n) => { (o as unknown as Bulkoperation).bulkOperation_RecurringAppointmentMaster = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "bulkoperation_ServiceAppointments": (o, n) => { (o as unknown as Bulkoperation).bulkoperation_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "bulkOperation_SocialActivity": (o, n) => { (o as unknown as Bulkoperation).bulkOperation_SocialActivity = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "bulkOperation_SyncErrors": (o, n) => { (o as unknown as Bulkoperation).bulkOperation_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "bulkoperation_Tasks": (o, n) => { (o as unknown as Bulkoperation).bulkoperation_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "bulkoperationnumber": (o, n) => { (o as unknown as Bulkoperation).bulkoperationnumber = n.getStringValue(); },
            "createdby_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).createdby_bulkoperation = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdonbehalfby_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).createdonbehalfby_bulkoperation = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdrecordtypecode": (o, n) => { (o as unknown as Bulkoperation).createdrecordtypecode = n.getNumberValue(); },
            "errornumber": (o, n) => { (o as unknown as Bulkoperation).errornumber = n.getNumberValue(); },
            "failurecount": (o, n) => { (o as unknown as Bulkoperation).failurecount = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Bulkoperation).importsequencenumber = n.getNumberValue(); },
            "modifiedby_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).modifiedby_bulkoperation = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedonbehalfby_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).modifiedonbehalfby_bulkoperation = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "operationtypecode": (o, n) => { (o as unknown as Bulkoperation).operationtypecode = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Bulkoperation).overriddencreatedon = n.getDateValue(); },
            "ownerid_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).ownerid_bulkoperation = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).owningbusinessunit_bulkoperation = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).owningteam_bulkoperation = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).owninguser_bulkoperation = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "parameters": (o, n) => { (o as unknown as Bulkoperation).parameters = n.getStringValue(); },
            "regardingobjectid_account_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).regardingobjectid_account_bulkoperation = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "regardingobjectid_bookableresourcebooking_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).regardingobjectid_bookableresourcebooking_bulkoperation = n.getObjectValue<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "regardingobjectid_bookableresourcebookingheader_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).regardingobjectid_bookableresourcebookingheader_bulkoperation = n.getObjectValue<Bookableresourcebookingheader>(createBookableresourcebookingheaderFromDiscriminatorValue); },
            "regardingobjectid_campaignactivity_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).regardingobjectid_campaignactivity_bulkoperation = n.getObjectValue<Campaignactivity>(createCampaignactivityFromDiscriminatorValue); },
            "regardingobjectid_contact_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).regardingobjectid_contact_bulkoperation = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "regardingobjectid_knowledgearticle_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).regardingobjectid_knowledgearticle_bulkoperation = n.getObjectValue<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "regardingobjectid_knowledgebaserecord_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).regardingobjectid_knowledgebaserecord_bulkoperation = n.getObjectValue<Knowledgebaserecord>(createKnowledgebaserecordFromDiscriminatorValue); },
            "regardingobjectid_lead_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).regardingobjectid_lead_bulkoperation = n.getObjectValue<Lead>(createLeadFromDiscriminatorValue); },
            "regardingobjectid_list": (o, n) => { (o as unknown as Bulkoperation).regardingobjectid_list = n.getObjectValue<List>(createListFromDiscriminatorValue); },
            "regardingobjectid_new_interactionforemail_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).regardingobjectid_new_interactionforemail_bulkoperation = n.getObjectValue<Interactionforemail>(createInteractionforemailFromDiscriminatorValue); },
            "sendermailboxid_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).sendermailboxid_bulkoperation = n.getObjectValue<Mailbox>(createMailboxFromDiscriminatorValue); },
            "sla_activitypointer_sla_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).sla_activitypointer_sla_bulkoperation = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "slainvokedid_activitypointer_sla_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).slainvokedid_activitypointer_sla_bulkoperation = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "successcount": (o, n) => { (o as unknown as Bulkoperation).successcount = n.getNumberValue(); },
            "targetedrecordtypecode": (o, n) => { (o as unknown as Bulkoperation).targetedrecordtypecode = n.getNumberValue(); },
            "targetmemberscount": (o, n) => { (o as unknown as Bulkoperation).targetmemberscount = n.getNumberValue(); },
            "transactioncurrencyid_bulkoperation": (o, n) => { (o as unknown as Bulkoperation).transactioncurrencyid_bulkoperation = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "workflowinfo": (o, n) => { (o as unknown as Bulkoperation).workflowinfo = n.getStringValue(); },
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
     * Gets the modifiedby_bulkoperation property value. 
     * @returns a systemuser
     */
    public get modifiedby_bulkoperation() {
        return this._modifiedby_bulkoperation;
    };
    /**
     * Sets the modifiedby_bulkoperation property value. 
     * @param value Value to set for the modifiedby_bulkoperation property.
     */
    public set modifiedby_bulkoperation(value: Systemuser | undefined) {
        this._modifiedby_bulkoperation = value;
    };
    /**
     * Gets the modifiedonbehalfby_bulkoperation property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby_bulkoperation() {
        return this._modifiedonbehalfby_bulkoperation;
    };
    /**
     * Sets the modifiedonbehalfby_bulkoperation property value. 
     * @param value Value to set for the modifiedonbehalfby_bulkoperation property.
     */
    public set modifiedonbehalfby_bulkoperation(value: Systemuser | undefined) {
        this._modifiedonbehalfby_bulkoperation = value;
    };
    /**
     * Gets the operationtypecode property value. 
     * @returns a integer
     */
    public get operationtypecode() {
        return this._operationtypecode;
    };
    /**
     * Sets the operationtypecode property value. 
     * @param value Value to set for the operationtypecode property.
     */
    public set operationtypecode(value: number | undefined) {
        this._operationtypecode = value;
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
     * Gets the ownerid_bulkoperation property value. 
     * @returns a principal
     */
    public get ownerid_bulkoperation() {
        return this._ownerid_bulkoperation;
    };
    /**
     * Sets the ownerid_bulkoperation property value. 
     * @param value Value to set for the ownerid_bulkoperation property.
     */
    public set ownerid_bulkoperation(value: Principal | undefined) {
        this._ownerid_bulkoperation = value;
    };
    /**
     * Gets the owningbusinessunit_bulkoperation property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit_bulkoperation() {
        return this._owningbusinessunit_bulkoperation;
    };
    /**
     * Sets the owningbusinessunit_bulkoperation property value. 
     * @param value Value to set for the owningbusinessunit_bulkoperation property.
     */
    public set owningbusinessunit_bulkoperation(value: Businessunit | undefined) {
        this._owningbusinessunit_bulkoperation = value;
    };
    /**
     * Gets the owningteam_bulkoperation property value. 
     * @returns a team
     */
    public get owningteam_bulkoperation() {
        return this._owningteam_bulkoperation;
    };
    /**
     * Sets the owningteam_bulkoperation property value. 
     * @param value Value to set for the owningteam_bulkoperation property.
     */
    public set owningteam_bulkoperation(value: Team | undefined) {
        this._owningteam_bulkoperation = value;
    };
    /**
     * Gets the owninguser_bulkoperation property value. 
     * @returns a systemuser
     */
    public get owninguser_bulkoperation() {
        return this._owninguser_bulkoperation;
    };
    /**
     * Sets the owninguser_bulkoperation property value. 
     * @param value Value to set for the owninguser_bulkoperation property.
     */
    public set owninguser_bulkoperation(value: Systemuser | undefined) {
        this._owninguser_bulkoperation = value;
    };
    /**
     * Gets the parameters property value. 
     * @returns a string
     */
    public get parameters() {
        return this._parameters;
    };
    /**
     * Sets the parameters property value. 
     * @param value Value to set for the parameters property.
     */
    public set parameters(value: string | undefined) {
        this._parameters = value;
    };
    /**
     * Gets the regardingobjectid_account_bulkoperation property value. 
     * @returns a account
     */
    public get regardingobjectid_account_bulkoperation() {
        return this._regardingobjectid_account_bulkoperation;
    };
    /**
     * Sets the regardingobjectid_account_bulkoperation property value. 
     * @param value Value to set for the regardingobjectid_account_bulkoperation property.
     */
    public set regardingobjectid_account_bulkoperation(value: Account | undefined) {
        this._regardingobjectid_account_bulkoperation = value;
    };
    /**
     * Gets the regardingobjectid_bookableresourcebooking_bulkoperation property value. 
     * @returns a bookableresourcebooking
     */
    public get regardingobjectid_bookableresourcebooking_bulkoperation() {
        return this._regardingobjectid_bookableresourcebooking_bulkoperation;
    };
    /**
     * Sets the regardingobjectid_bookableresourcebooking_bulkoperation property value. 
     * @param value Value to set for the regardingobjectid_bookableresourcebooking_bulkoperation property.
     */
    public set regardingobjectid_bookableresourcebooking_bulkoperation(value: Bookableresourcebooking | undefined) {
        this._regardingobjectid_bookableresourcebooking_bulkoperation = value;
    };
    /**
     * Gets the regardingobjectid_bookableresourcebookingheader_bulkoperation property value. 
     * @returns a bookableresourcebookingheader
     */
    public get regardingobjectid_bookableresourcebookingheader_bulkoperation() {
        return this._regardingobjectid_bookableresourcebookingheader_bulkoperation;
    };
    /**
     * Sets the regardingobjectid_bookableresourcebookingheader_bulkoperation property value. 
     * @param value Value to set for the regardingobjectid_bookableresourcebookingheader_bulkoperation property.
     */
    public set regardingobjectid_bookableresourcebookingheader_bulkoperation(value: Bookableresourcebookingheader | undefined) {
        this._regardingobjectid_bookableresourcebookingheader_bulkoperation = value;
    };
    /**
     * Gets the regardingobjectid_campaignactivity_bulkoperation property value. 
     * @returns a campaignactivity
     */
    public get regardingobjectid_campaignactivity_bulkoperation() {
        return this._regardingobjectid_campaignactivity_bulkoperation;
    };
    /**
     * Sets the regardingobjectid_campaignactivity_bulkoperation property value. 
     * @param value Value to set for the regardingobjectid_campaignactivity_bulkoperation property.
     */
    public set regardingobjectid_campaignactivity_bulkoperation(value: Campaignactivity | undefined) {
        this._regardingobjectid_campaignactivity_bulkoperation = value;
    };
    /**
     * Gets the regardingobjectid_contact_bulkoperation property value. 
     * @returns a contact
     */
    public get regardingobjectid_contact_bulkoperation() {
        return this._regardingobjectid_contact_bulkoperation;
    };
    /**
     * Sets the regardingobjectid_contact_bulkoperation property value. 
     * @param value Value to set for the regardingobjectid_contact_bulkoperation property.
     */
    public set regardingobjectid_contact_bulkoperation(value: Contact | undefined) {
        this._regardingobjectid_contact_bulkoperation = value;
    };
    /**
     * Gets the regardingobjectid_knowledgearticle_bulkoperation property value. 
     * @returns a knowledgearticle
     */
    public get regardingobjectid_knowledgearticle_bulkoperation() {
        return this._regardingobjectid_knowledgearticle_bulkoperation;
    };
    /**
     * Sets the regardingobjectid_knowledgearticle_bulkoperation property value. 
     * @param value Value to set for the regardingobjectid_knowledgearticle_bulkoperation property.
     */
    public set regardingobjectid_knowledgearticle_bulkoperation(value: Knowledgearticle | undefined) {
        this._regardingobjectid_knowledgearticle_bulkoperation = value;
    };
    /**
     * Gets the regardingobjectid_knowledgebaserecord_bulkoperation property value. 
     * @returns a knowledgebaserecord
     */
    public get regardingobjectid_knowledgebaserecord_bulkoperation() {
        return this._regardingobjectid_knowledgebaserecord_bulkoperation;
    };
    /**
     * Sets the regardingobjectid_knowledgebaserecord_bulkoperation property value. 
     * @param value Value to set for the regardingobjectid_knowledgebaserecord_bulkoperation property.
     */
    public set regardingobjectid_knowledgebaserecord_bulkoperation(value: Knowledgebaserecord | undefined) {
        this._regardingobjectid_knowledgebaserecord_bulkoperation = value;
    };
    /**
     * Gets the regardingobjectid_lead_bulkoperation property value. 
     * @returns a lead
     */
    public get regardingobjectid_lead_bulkoperation() {
        return this._regardingobjectid_lead_bulkoperation;
    };
    /**
     * Sets the regardingobjectid_lead_bulkoperation property value. 
     * @param value Value to set for the regardingobjectid_lead_bulkoperation property.
     */
    public set regardingobjectid_lead_bulkoperation(value: Lead | undefined) {
        this._regardingobjectid_lead_bulkoperation = value;
    };
    /**
     * Gets the regardingobjectid_list property value. 
     * @returns a list
     */
    public get regardingobjectid_list() {
        return this._regardingobjectid_list;
    };
    /**
     * Sets the regardingobjectid_list property value. 
     * @param value Value to set for the regardingobjectid_list property.
     */
    public set regardingobjectid_list(value: List | undefined) {
        this._regardingobjectid_list = value;
    };
    /**
     * Gets the regardingobjectid_new_interactionforemail_bulkoperation property value. 
     * @returns a interactionforemail
     */
    public get regardingobjectid_new_interactionforemail_bulkoperation() {
        return this._regardingobjectid_new_interactionforemail_bulkoperation;
    };
    /**
     * Sets the regardingobjectid_new_interactionforemail_bulkoperation property value. 
     * @param value Value to set for the regardingobjectid_new_interactionforemail_bulkoperation property.
     */
    public set regardingobjectid_new_interactionforemail_bulkoperation(value: Interactionforemail | undefined) {
        this._regardingobjectid_new_interactionforemail_bulkoperation = value;
    };
    /**
     * Gets the sendermailboxid_bulkoperation property value. 
     * @returns a mailbox
     */
    public get sendermailboxid_bulkoperation() {
        return this._sendermailboxid_bulkoperation;
    };
    /**
     * Sets the sendermailboxid_bulkoperation property value. 
     * @param value Value to set for the sendermailboxid_bulkoperation property.
     */
    public set sendermailboxid_bulkoperation(value: Mailbox | undefined) {
        this._sendermailboxid_bulkoperation = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Activitypointer>("activityid_activitypointer", this.activityid_activitypointer);
        writer.writeCollectionOfObjectValues<Account>("bulkOperation_Accounts", this.bulkOperation_Accounts);
        writer.writeCollectionOfObjectValues<Activityparty>("bulkoperation_activity_parties", this.bulkoperation_activity_parties);
        writer.writeCollectionOfObjectValues<Activitypointer>("bulkOperation_ActivityPointers", this.bulkOperation_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("bulkoperation_Annotations", this.bulkoperation_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("bulkOperation_Appointment", this.bulkOperation_Appointment);
        writer.writeCollectionOfObjectValues<Asyncoperation>("bulkOperation_AsyncOperations", this.bulkOperation_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("bulkOperation_BulkDeleteFailures", this.bulkOperation_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Campaignresponse>("bulkOperation_CampaignResponse", this.bulkOperation_CampaignResponse);
        writer.writeCollectionOfObjectValues<Contact>("bulkOperation_Contacts", this.bulkOperation_Contacts);
        writer.writeCollectionOfObjectValues<Email>("bulkOperation_Email", this.bulkOperation_Email);
        writer.writeCollectionOfObjectValues<Fax>("bulkOperation_Faxes", this.bulkOperation_Faxes);
        writer.writeCollectionOfObjectValues<Incidentresolution>("bulkoperation_IncidentResolutions", this.bulkoperation_IncidentResolutions);
        writer.writeCollectionOfObjectValues<Lead>("bulkOperation_Leads", this.bulkOperation_Leads);
        writer.writeCollectionOfObjectValues<Letter>("bulkOperation_Letter", this.bulkOperation_Letter);
        writer.writeCollectionOfObjectValues<Bulkoperationlog>("bulkOperation_logs", this.bulkOperation_logs);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("bulkOperation_MailboxTrackingFolder", this.bulkOperation_MailboxTrackingFolder);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("bulkoperation_msdyn_approvals", this.bulkoperation_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("bulkoperation_msdyn_bookingalerts", this.bulkoperation_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("bulkoperation_msdyn_ocliveworkitems", this.bulkoperation_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("bulkoperation_msdyn_ocoutboundmessages", this.bulkoperation_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("bulkoperation_msdyn_ocsessions", this.bulkoperation_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("bulkoperation_msfp_alerts", this.bulkoperation_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("bulkoperation_msfp_surveyinvites", this.bulkoperation_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("bulkoperation_msfp_surveyresponses", this.bulkoperation_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Opportunityclose>("bulkoperation_OpportunityCloses", this.bulkoperation_OpportunityCloses);
        writer.writeCollectionOfObjectValues<Orderclose>("bulkoperation_OrderCloses", this.bulkoperation_OrderCloses);
        writer.writeCollectionOfObjectValues<Phonecall>("bulkOperation_Phonecall", this.bulkOperation_Phonecall);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("bulkoperation_PrincipalObjectAttributeAccesses", this.bulkoperation_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Queueitem>("bulkOperation_QueueItem", this.bulkOperation_QueueItem);
        writer.writeCollectionOfObjectValues<Quoteclose>("bulkoperation_QuoteCloses", this.bulkoperation_QuoteCloses);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("bulkOperation_RecurringAppointmentMaster", this.bulkOperation_RecurringAppointmentMaster);
        writer.writeCollectionOfObjectValues<Serviceappointment>("bulkoperation_ServiceAppointments", this.bulkoperation_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("bulkOperation_SocialActivity", this.bulkOperation_SocialActivity);
        writer.writeCollectionOfObjectValues<Syncerror>("bulkOperation_SyncErrors", this.bulkOperation_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("bulkoperation_Tasks", this.bulkoperation_Tasks);
        writer.writeStringValue("bulkoperationnumber", this.bulkoperationnumber);
        writer.writeObjectValue<Systemuser>("createdby_bulkoperation", this.createdby_bulkoperation);
        writer.writeObjectValue<Systemuser>("createdonbehalfby_bulkoperation", this.createdonbehalfby_bulkoperation);
        writer.writeNumberValue("createdrecordtypecode", this.createdrecordtypecode);
        writer.writeNumberValue("errornumber", this.errornumber);
        writer.writeNumberValue("failurecount", this.failurecount);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby_bulkoperation", this.modifiedby_bulkoperation);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby_bulkoperation", this.modifiedonbehalfby_bulkoperation);
        writer.writeNumberValue("operationtypecode", this.operationtypecode);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid_bulkoperation", this.ownerid_bulkoperation);
        writer.writeObjectValue<Businessunit>("owningbusinessunit_bulkoperation", this.owningbusinessunit_bulkoperation);
        writer.writeObjectValue<Team>("owningteam_bulkoperation", this.owningteam_bulkoperation);
        writer.writeObjectValue<Systemuser>("owninguser_bulkoperation", this.owninguser_bulkoperation);
        writer.writeStringValue("parameters", this.parameters);
        writer.writeObjectValue<Account>("regardingobjectid_account_bulkoperation", this.regardingobjectid_account_bulkoperation);
        writer.writeObjectValue<Bookableresourcebooking>("regardingobjectid_bookableresourcebooking_bulkoperation", this.regardingobjectid_bookableresourcebooking_bulkoperation);
        writer.writeObjectValue<Bookableresourcebookingheader>("regardingobjectid_bookableresourcebookingheader_bulkoperation", this.regardingobjectid_bookableresourcebookingheader_bulkoperation);
        writer.writeObjectValue<Campaignactivity>("regardingobjectid_campaignactivity_bulkoperation", this.regardingobjectid_campaignactivity_bulkoperation);
        writer.writeObjectValue<Contact>("regardingobjectid_contact_bulkoperation", this.regardingobjectid_contact_bulkoperation);
        writer.writeObjectValue<Knowledgearticle>("regardingobjectid_knowledgearticle_bulkoperation", this.regardingobjectid_knowledgearticle_bulkoperation);
        writer.writeObjectValue<Knowledgebaserecord>("regardingobjectid_knowledgebaserecord_bulkoperation", this.regardingobjectid_knowledgebaserecord_bulkoperation);
        writer.writeObjectValue<Lead>("regardingobjectid_lead_bulkoperation", this.regardingobjectid_lead_bulkoperation);
        writer.writeObjectValue<List>("regardingobjectid_list", this.regardingobjectid_list);
        writer.writeObjectValue<Interactionforemail>("regardingobjectid_new_interactionforemail_bulkoperation", this.regardingobjectid_new_interactionforemail_bulkoperation);
        writer.writeObjectValue<Mailbox>("sendermailboxid_bulkoperation", this.sendermailboxid_bulkoperation);
        writer.writeObjectValue<Sla>("sla_activitypointer_sla_bulkoperation", this.sla_activitypointer_sla_bulkoperation);
        writer.writeObjectValue<Sla>("slainvokedid_activitypointer_sla_bulkoperation", this.slainvokedid_activitypointer_sla_bulkoperation);
        writer.writeNumberValue("successcount", this.successcount);
        writer.writeNumberValue("targetedrecordtypecode", this.targetedrecordtypecode);
        writer.writeNumberValue("targetmemberscount", this.targetmemberscount);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid_bulkoperation", this.transactioncurrencyid_bulkoperation);
        writer.writeStringValue("workflowinfo", this.workflowinfo);
    };
    /**
     * Gets the sla_activitypointer_sla_bulkoperation property value. 
     * @returns a sla
     */
    public get sla_activitypointer_sla_bulkoperation() {
        return this._sla_activitypointer_sla_bulkoperation;
    };
    /**
     * Sets the sla_activitypointer_sla_bulkoperation property value. 
     * @param value Value to set for the sla_activitypointer_sla_bulkoperation property.
     */
    public set sla_activitypointer_sla_bulkoperation(value: Sla | undefined) {
        this._sla_activitypointer_sla_bulkoperation = value;
    };
    /**
     * Gets the slainvokedid_activitypointer_sla_bulkoperation property value. 
     * @returns a sla
     */
    public get slainvokedid_activitypointer_sla_bulkoperation() {
        return this._slainvokedid_activitypointer_sla_bulkoperation;
    };
    /**
     * Sets the slainvokedid_activitypointer_sla_bulkoperation property value. 
     * @param value Value to set for the slainvokedid_activitypointer_sla_bulkoperation property.
     */
    public set slainvokedid_activitypointer_sla_bulkoperation(value: Sla | undefined) {
        this._slainvokedid_activitypointer_sla_bulkoperation = value;
    };
    /**
     * Gets the successcount property value. 
     * @returns a integer
     */
    public get successcount() {
        return this._successcount;
    };
    /**
     * Sets the successcount property value. 
     * @param value Value to set for the successcount property.
     */
    public set successcount(value: number | undefined) {
        this._successcount = value;
    };
    /**
     * Gets the targetedrecordtypecode property value. 
     * @returns a integer
     */
    public get targetedrecordtypecode() {
        return this._targetedrecordtypecode;
    };
    /**
     * Sets the targetedrecordtypecode property value. 
     * @param value Value to set for the targetedrecordtypecode property.
     */
    public set targetedrecordtypecode(value: number | undefined) {
        this._targetedrecordtypecode = value;
    };
    /**
     * Gets the targetmemberscount property value. 
     * @returns a integer
     */
    public get targetmemberscount() {
        return this._targetmemberscount;
    };
    /**
     * Sets the targetmemberscount property value. 
     * @param value Value to set for the targetmemberscount property.
     */
    public set targetmemberscount(value: number | undefined) {
        this._targetmemberscount = value;
    };
    /**
     * Gets the transactioncurrencyid_bulkoperation property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid_bulkoperation() {
        return this._transactioncurrencyid_bulkoperation;
    };
    /**
     * Sets the transactioncurrencyid_bulkoperation property value. 
     * @param value Value to set for the transactioncurrencyid_bulkoperation property.
     */
    public set transactioncurrencyid_bulkoperation(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid_bulkoperation = value;
    };
    /**
     * Gets the workflowinfo property value. 
     * @returns a string
     */
    public get workflowinfo() {
        return this._workflowinfo;
    };
    /**
     * Sets the workflowinfo property value. 
     * @param value Value to set for the workflowinfo property.
     */
    public set workflowinfo(value: string | undefined) {
        this._workflowinfo = value;
    };
}
