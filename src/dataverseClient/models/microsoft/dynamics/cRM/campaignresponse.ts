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
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCampaignactivityFromDiscriminatorValue} from './createCampaignactivityFromDiscriminatorValue';
import {createCampaignFromDiscriminatorValue} from './createCampaignFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createIncidentresolutionFromDiscriminatorValue} from './createIncidentresolutionFromDiscriminatorValue';
import {createInteractionforemailFromDiscriminatorValue} from './createInteractionforemailFromDiscriminatorValue';
import {createKnowledgearticleFromDiscriminatorValue} from './createKnowledgearticleFromDiscriminatorValue';
import {createKnowledgebaserecordFromDiscriminatorValue} from './createKnowledgebaserecordFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
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
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSlaFromDiscriminatorValue} from './createSlaFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Activityparty, Activitypointer, Annotation, Appointment, Asyncoperation, Bookableresourcebooking, Bookableresourcebookingheader, Bulkdeletefailure, Bulkoperation, Businessunit, Campaign, Campaignactivity, Contact, Duplicaterecord, Email, Fax, Incidentresolution, Interactionforemail, Knowledgearticle, Knowledgebaserecord, Lead, Letter, Mailbox, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Opportunityclose, Orderclose, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Processstage, Queueitem, Quoteclose, Recurringappointmentmaster, Serviceappointment, Sla, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Campaignresponse extends Activitypointer implements Parsable {
    private __originatingactivityid_value?: string | undefined;
    private _activityid_activitypointer?: Activitypointer | undefined;
    private _campaignresponse_activity_parties?: Activityparty[] | undefined;
    private _campaignResponse_Annotation?: Annotation[] | undefined;
    private _campaignResponse_AsyncOperations?: Asyncoperation[] | undefined;
    private _campaignResponse_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _campaignResponse_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _campaignResponse_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _campaignResponse_Lead?: Lead[] | undefined;
    private _campaignresponse_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _campaignresponse_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _campaignResponse_ProcessSessions?: Processsession[] | undefined;
    private _campaignResponse_QueueItem?: Queueitem[] | undefined;
    private _campaignResponse_SyncErrors?: Syncerror[] | undefined;
    private _category?: string | undefined;
    private _channeltypecode?: number | undefined;
    private _companyname?: string | undefined;
    private _createdby_campaignresponse?: Systemuser | undefined;
    private _createdonbehalfby_campaignresponse?: Systemuser | undefined;
    private _emailaddress?: string | undefined;
    private _fax?: string | undefined;
    private _firstname?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _lastname?: string | undefined;
    private _modifiedby_campaignresponse?: Systemuser | undefined;
    private _modifiedonbehalfby_campaignresponse?: Systemuser | undefined;
    private _originatingactivityid_activitypointer?: Activitypointer | undefined;
    private _originatingactivityid_appointment?: Appointment | undefined;
    private _originatingactivityid_email?: Email | undefined;
    private _originatingactivityid_fax?: Fax | undefined;
    private _originatingactivityid_incidentresolution_campaignresponse?: Incidentresolution | undefined;
    private _originatingactivityid_letter?: Letter | undefined;
    private _originatingactivityid_msdyn_approval_campaignresponse?: Msdyn_approval | undefined;
    private _originatingactivityid_msdyn_bookingalert_campaignresponse?: Msdyn_bookingalert | undefined;
    private _originatingactivityid_msdyn_ocliveworkitem_campaignresponse?: Msdyn_ocliveworkitem | undefined;
    private _originatingactivityid_msdyn_ocoutboundmessage_campaignresponse?: Msdyn_ocoutboundmessage | undefined;
    private _originatingactivityid_msdyn_ocsession_campaignresponse?: Msdyn_ocsession | undefined;
    private _originatingactivityid_msfp_alert_campaignresponse?: Msfp_alert | undefined;
    private _originatingactivityid_msfp_surveyinvite_campaignresponse?: Msfp_surveyinvite | undefined;
    private _originatingactivityid_msfp_surveyresponse_campaignresponse?: Msfp_surveyresponse | undefined;
    private _originatingactivityid_opportunityclose_campaignresponse?: Opportunityclose | undefined;
    private _originatingactivityid_orderclose_campaignresponse?: Orderclose | undefined;
    private _originatingactivityid_phonecall?: Phonecall | undefined;
    private _originatingactivityid_quoteclose_campaignresponse?: Quoteclose | undefined;
    private _originatingactivityid_recurringappointmentmaster?: Recurringappointmentmaster | undefined;
    private _originatingactivityid_serviceappointment_campaignresponse?: Serviceappointment | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid_campaignresponse?: Principal | undefined;
    private _owningbusinessunit_campaignresponse?: Businessunit | undefined;
    private _owningteam_campaignresponse?: Team | undefined;
    private _owninguser_campaignresponse?: Systemuser | undefined;
    private _promotioncodename?: string | undefined;
    private _receivedon?: Date | undefined;
    private _regardingobjectid_account_campaignresponse?: Account | undefined;
    private _regardingobjectid_bookableresourcebooking_campaignresponse?: Bookableresourcebooking | undefined;
    private _regardingobjectid_bookableresourcebookingheader_campaignresponse?: Bookableresourcebookingheader | undefined;
    private _regardingobjectid_bulkoperation_campaignresponse?: Bulkoperation | undefined;
    private _regardingobjectid_campaign_campaignresponse?: Campaign | undefined;
    private _regardingobjectid_campaignactivity_campaignresponse?: Campaignactivity | undefined;
    private _regardingobjectid_contact_campaignresponse?: Contact | undefined;
    private _regardingobjectid_knowledgearticle_campaignresponse?: Knowledgearticle | undefined;
    private _regardingobjectid_knowledgebaserecord_campaignresponse?: Knowledgebaserecord | undefined;
    private _regardingobjectid_lead_campaignresponse?: Lead | undefined;
    private _regardingobjectid_new_interactionforemail_campaignresponse?: Interactionforemail | undefined;
    private _responsecode?: number | undefined;
    private _sendermailboxid_campaignresponse?: Mailbox | undefined;
    private _sla_activitypointer_sla_campaignresponse?: Sla | undefined;
    private _slainvokedid_activitypointer_sla_campaignresponse?: Sla | undefined;
    private _stageid_processstage?: Processstage | undefined;
    private _subcategory?: string | undefined;
    private _telephone?: string | undefined;
    private _transactioncurrencyid_campaignresponse?: Transactioncurrency | undefined;
    private _yomicompanyname?: string | undefined;
    private _yomifirstname?: string | undefined;
    private _yomilastname?: string | undefined;
    /**
     * Gets the _originatingactivityid_value property value. 
     * @returns a string
     */
    public get _originatingactivityid_value() {
        return this.__originatingactivityid_value;
    };
    /**
     * Sets the _originatingactivityid_value property value. 
     * @param value Value to set for the _originatingactivityid_value property.
     */
    public set _originatingactivityid_value(value: string | undefined) {
        this.__originatingactivityid_value = value;
    };
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
     * Gets the campaignresponse_activity_parties property value. 
     * @returns a activityparty
     */
    public get campaignresponse_activity_parties() {
        return this._campaignresponse_activity_parties;
    };
    /**
     * Sets the campaignresponse_activity_parties property value. 
     * @param value Value to set for the campaignresponse_activity_parties property.
     */
    public set campaignresponse_activity_parties(value: Activityparty[] | undefined) {
        this._campaignresponse_activity_parties = value;
    };
    /**
     * Gets the campaignResponse_Annotation property value. 
     * @returns a annotation
     */
    public get campaignResponse_Annotation() {
        return this._campaignResponse_Annotation;
    };
    /**
     * Sets the campaignResponse_Annotation property value. 
     * @param value Value to set for the CampaignResponse_Annotation property.
     */
    public set campaignResponse_Annotation(value: Annotation[] | undefined) {
        this._campaignResponse_Annotation = value;
    };
    /**
     * Gets the campaignResponse_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get campaignResponse_AsyncOperations() {
        return this._campaignResponse_AsyncOperations;
    };
    /**
     * Sets the campaignResponse_AsyncOperations property value. 
     * @param value Value to set for the CampaignResponse_AsyncOperations property.
     */
    public set campaignResponse_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._campaignResponse_AsyncOperations = value;
    };
    /**
     * Gets the campaignResponse_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get campaignResponse_BulkDeleteFailures() {
        return this._campaignResponse_BulkDeleteFailures;
    };
    /**
     * Sets the campaignResponse_BulkDeleteFailures property value. 
     * @param value Value to set for the CampaignResponse_BulkDeleteFailures property.
     */
    public set campaignResponse_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._campaignResponse_BulkDeleteFailures = value;
    };
    /**
     * Gets the campaignResponse_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get campaignResponse_DuplicateBaseRecord() {
        return this._campaignResponse_DuplicateBaseRecord;
    };
    /**
     * Sets the campaignResponse_DuplicateBaseRecord property value. 
     * @param value Value to set for the CampaignResponse_DuplicateBaseRecord property.
     */
    public set campaignResponse_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._campaignResponse_DuplicateBaseRecord = value;
    };
    /**
     * Gets the campaignResponse_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get campaignResponse_DuplicateMatchingRecord() {
        return this._campaignResponse_DuplicateMatchingRecord;
    };
    /**
     * Sets the campaignResponse_DuplicateMatchingRecord property value. 
     * @param value Value to set for the CampaignResponse_DuplicateMatchingRecord property.
     */
    public set campaignResponse_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._campaignResponse_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the campaignResponse_Lead property value. 
     * @returns a lead
     */
    public get campaignResponse_Lead() {
        return this._campaignResponse_Lead;
    };
    /**
     * Sets the campaignResponse_Lead property value. 
     * @param value Value to set for the CampaignResponse_Lead property.
     */
    public set campaignResponse_Lead(value: Lead[] | undefined) {
        this._campaignResponse_Lead = value;
    };
    /**
     * Gets the campaignresponse_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get campaignresponse_MailboxTrackingFolders() {
        return this._campaignresponse_MailboxTrackingFolders;
    };
    /**
     * Sets the campaignresponse_MailboxTrackingFolders property value. 
     * @param value Value to set for the campaignresponse_MailboxTrackingFolders property.
     */
    public set campaignresponse_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._campaignresponse_MailboxTrackingFolders = value;
    };
    /**
     * Gets the campaignresponse_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get campaignresponse_principalobjectattributeaccess() {
        return this._campaignresponse_principalobjectattributeaccess;
    };
    /**
     * Sets the campaignresponse_principalobjectattributeaccess property value. 
     * @param value Value to set for the campaignresponse_principalobjectattributeaccess property.
     */
    public set campaignresponse_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._campaignresponse_principalobjectattributeaccess = value;
    };
    /**
     * Gets the campaignResponse_ProcessSessions property value. 
     * @returns a processsession
     */
    public get campaignResponse_ProcessSessions() {
        return this._campaignResponse_ProcessSessions;
    };
    /**
     * Sets the campaignResponse_ProcessSessions property value. 
     * @param value Value to set for the CampaignResponse_ProcessSessions property.
     */
    public set campaignResponse_ProcessSessions(value: Processsession[] | undefined) {
        this._campaignResponse_ProcessSessions = value;
    };
    /**
     * Gets the campaignResponse_QueueItem property value. 
     * @returns a queueitem
     */
    public get campaignResponse_QueueItem() {
        return this._campaignResponse_QueueItem;
    };
    /**
     * Sets the campaignResponse_QueueItem property value. 
     * @param value Value to set for the CampaignResponse_QueueItem property.
     */
    public set campaignResponse_QueueItem(value: Queueitem[] | undefined) {
        this._campaignResponse_QueueItem = value;
    };
    /**
     * Gets the campaignResponse_SyncErrors property value. 
     * @returns a syncerror
     */
    public get campaignResponse_SyncErrors() {
        return this._campaignResponse_SyncErrors;
    };
    /**
     * Sets the campaignResponse_SyncErrors property value. 
     * @param value Value to set for the CampaignResponse_SyncErrors property.
     */
    public set campaignResponse_SyncErrors(value: Syncerror[] | undefined) {
        this._campaignResponse_SyncErrors = value;
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
     * Gets the companyname property value. 
     * @returns a string
     */
    public get companyname() {
        return this._companyname;
    };
    /**
     * Sets the companyname property value. 
     * @param value Value to set for the companyname property.
     */
    public set companyname(value: string | undefined) {
        this._companyname = value;
    };
    /**
     * Instantiates a new campaignresponse and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby_campaignresponse property value. 
     * @returns a systemuser
     */
    public get createdby_campaignresponse() {
        return this._createdby_campaignresponse;
    };
    /**
     * Sets the createdby_campaignresponse property value. 
     * @param value Value to set for the createdby_campaignresponse property.
     */
    public set createdby_campaignresponse(value: Systemuser | undefined) {
        this._createdby_campaignresponse = value;
    };
    /**
     * Gets the createdonbehalfby_campaignresponse property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby_campaignresponse() {
        return this._createdonbehalfby_campaignresponse;
    };
    /**
     * Sets the createdonbehalfby_campaignresponse property value. 
     * @param value Value to set for the createdonbehalfby_campaignresponse property.
     */
    public set createdonbehalfby_campaignresponse(value: Systemuser | undefined) {
        this._createdonbehalfby_campaignresponse = value;
    };
    /**
     * Gets the emailaddress property value. 
     * @returns a string
     */
    public get emailaddress() {
        return this._emailaddress;
    };
    /**
     * Sets the emailaddress property value. 
     * @param value Value to set for the emailaddress property.
     */
    public set emailaddress(value: string | undefined) {
        this._emailaddress = value;
    };
    /**
     * Gets the fax property value. 
     * @returns a string
     */
    public get fax() {
        return this._fax;
    };
    /**
     * Sets the fax property value. 
     * @param value Value to set for the fax property.
     */
    public set fax(value: string | undefined) {
        this._fax = value;
    };
    /**
     * Gets the firstname property value. 
     * @returns a string
     */
    public get firstname() {
        return this._firstname;
    };
    /**
     * Sets the firstname property value. 
     * @param value Value to set for the firstname property.
     */
    public set firstname(value: string | undefined) {
        this._firstname = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_originatingactivityid_value": (o, n) => { (o as unknown as Campaignresponse)._originatingactivityid_value = n.getStringValue(); },
            "activityid_activitypointer": (o, n) => { (o as unknown as Campaignresponse).activityid_activitypointer = n.getObjectValue<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "campaignresponse_activity_parties": (o, n) => { (o as unknown as Campaignresponse).campaignresponse_activity_parties = n.getCollectionOfObjectValues<Activityparty>(createActivitypartyFromDiscriminatorValue); },
            "campaignResponse_Annotation": (o, n) => { (o as unknown as Campaignresponse).campaignResponse_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "campaignResponse_AsyncOperations": (o, n) => { (o as unknown as Campaignresponse).campaignResponse_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "campaignResponse_BulkDeleteFailures": (o, n) => { (o as unknown as Campaignresponse).campaignResponse_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "campaignResponse_DuplicateBaseRecord": (o, n) => { (o as unknown as Campaignresponse).campaignResponse_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "campaignResponse_DuplicateMatchingRecord": (o, n) => { (o as unknown as Campaignresponse).campaignResponse_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "campaignResponse_Lead": (o, n) => { (o as unknown as Campaignresponse).campaignResponse_Lead = n.getCollectionOfObjectValues<Lead>(createLeadFromDiscriminatorValue); },
            "campaignresponse_MailboxTrackingFolders": (o, n) => { (o as unknown as Campaignresponse).campaignresponse_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "campaignresponse_principalobjectattributeaccess": (o, n) => { (o as unknown as Campaignresponse).campaignresponse_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "campaignResponse_ProcessSessions": (o, n) => { (o as unknown as Campaignresponse).campaignResponse_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "campaignResponse_QueueItem": (o, n) => { (o as unknown as Campaignresponse).campaignResponse_QueueItem = n.getCollectionOfObjectValues<Queueitem>(createQueueitemFromDiscriminatorValue); },
            "campaignResponse_SyncErrors": (o, n) => { (o as unknown as Campaignresponse).campaignResponse_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "category": (o, n) => { (o as unknown as Campaignresponse).category = n.getStringValue(); },
            "channeltypecode": (o, n) => { (o as unknown as Campaignresponse).channeltypecode = n.getNumberValue(); },
            "companyname": (o, n) => { (o as unknown as Campaignresponse).companyname = n.getStringValue(); },
            "createdby_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).createdby_campaignresponse = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdonbehalfby_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).createdonbehalfby_campaignresponse = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "emailaddress": (o, n) => { (o as unknown as Campaignresponse).emailaddress = n.getStringValue(); },
            "fax": (o, n) => { (o as unknown as Campaignresponse).fax = n.getStringValue(); },
            "firstname": (o, n) => { (o as unknown as Campaignresponse).firstname = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Campaignresponse).importsequencenumber = n.getNumberValue(); },
            "lastname": (o, n) => { (o as unknown as Campaignresponse).lastname = n.getStringValue(); },
            "modifiedby_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).modifiedby_campaignresponse = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedonbehalfby_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).modifiedonbehalfby_campaignresponse = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "originatingactivityid_activitypointer": (o, n) => { (o as unknown as Campaignresponse).originatingactivityid_activitypointer = n.getObjectValue<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "originatingactivityid_appointment": (o, n) => { (o as unknown as Campaignresponse).originatingactivityid_appointment = n.getObjectValue<Appointment>(createAppointmentFromDiscriminatorValue); },
            "originatingactivityid_email": (o, n) => { (o as unknown as Campaignresponse).originatingactivityid_email = n.getObjectValue<Email>(createEmailFromDiscriminatorValue); },
            "originatingactivityid_fax": (o, n) => { (o as unknown as Campaignresponse).originatingactivityid_fax = n.getObjectValue<Fax>(createFaxFromDiscriminatorValue); },
            "originatingactivityid_incidentresolution_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).originatingactivityid_incidentresolution_campaignresponse = n.getObjectValue<Incidentresolution>(createIncidentresolutionFromDiscriminatorValue); },
            "originatingactivityid_letter": (o, n) => { (o as unknown as Campaignresponse).originatingactivityid_letter = n.getObjectValue<Letter>(createLetterFromDiscriminatorValue); },
            "originatingactivityid_msdyn_approval_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).originatingactivityid_msdyn_approval_campaignresponse = n.getObjectValue<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "originatingactivityid_msdyn_bookingalert_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).originatingactivityid_msdyn_bookingalert_campaignresponse = n.getObjectValue<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "originatingactivityid_msdyn_ocliveworkitem_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).originatingactivityid_msdyn_ocliveworkitem_campaignresponse = n.getObjectValue<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "originatingactivityid_msdyn_ocoutboundmessage_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).originatingactivityid_msdyn_ocoutboundmessage_campaignresponse = n.getObjectValue<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "originatingactivityid_msdyn_ocsession_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).originatingactivityid_msdyn_ocsession_campaignresponse = n.getObjectValue<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "originatingactivityid_msfp_alert_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).originatingactivityid_msfp_alert_campaignresponse = n.getObjectValue<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "originatingactivityid_msfp_surveyinvite_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).originatingactivityid_msfp_surveyinvite_campaignresponse = n.getObjectValue<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "originatingactivityid_msfp_surveyresponse_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).originatingactivityid_msfp_surveyresponse_campaignresponse = n.getObjectValue<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "originatingactivityid_opportunityclose_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).originatingactivityid_opportunityclose_campaignresponse = n.getObjectValue<Opportunityclose>(createOpportunitycloseFromDiscriminatorValue); },
            "originatingactivityid_orderclose_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).originatingactivityid_orderclose_campaignresponse = n.getObjectValue<Orderclose>(createOrdercloseFromDiscriminatorValue); },
            "originatingactivityid_phonecall": (o, n) => { (o as unknown as Campaignresponse).originatingactivityid_phonecall = n.getObjectValue<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "originatingactivityid_quoteclose_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).originatingactivityid_quoteclose_campaignresponse = n.getObjectValue<Quoteclose>(createQuotecloseFromDiscriminatorValue); },
            "originatingactivityid_recurringappointmentmaster": (o, n) => { (o as unknown as Campaignresponse).originatingactivityid_recurringappointmentmaster = n.getObjectValue<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "originatingactivityid_serviceappointment_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).originatingactivityid_serviceappointment_campaignresponse = n.getObjectValue<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Campaignresponse).overriddencreatedon = n.getDateValue(); },
            "ownerid_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).ownerid_campaignresponse = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).owningbusinessunit_campaignresponse = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).owningteam_campaignresponse = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).owninguser_campaignresponse = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "promotioncodename": (o, n) => { (o as unknown as Campaignresponse).promotioncodename = n.getStringValue(); },
            "receivedon": (o, n) => { (o as unknown as Campaignresponse).receivedon = n.getDateValue(); },
            "regardingobjectid_account_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).regardingobjectid_account_campaignresponse = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "regardingobjectid_bookableresourcebooking_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).regardingobjectid_bookableresourcebooking_campaignresponse = n.getObjectValue<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "regardingobjectid_bookableresourcebookingheader_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).regardingobjectid_bookableresourcebookingheader_campaignresponse = n.getObjectValue<Bookableresourcebookingheader>(createBookableresourcebookingheaderFromDiscriminatorValue); },
            "regardingobjectid_bulkoperation_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).regardingobjectid_bulkoperation_campaignresponse = n.getObjectValue<Bulkoperation>(createBulkoperationFromDiscriminatorValue); },
            "regardingobjectid_campaign_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).regardingobjectid_campaign_campaignresponse = n.getObjectValue<Campaign>(createCampaignFromDiscriminatorValue); },
            "regardingobjectid_campaignactivity_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).regardingobjectid_campaignactivity_campaignresponse = n.getObjectValue<Campaignactivity>(createCampaignactivityFromDiscriminatorValue); },
            "regardingobjectid_contact_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).regardingobjectid_contact_campaignresponse = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "regardingobjectid_knowledgearticle_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).regardingobjectid_knowledgearticle_campaignresponse = n.getObjectValue<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "regardingobjectid_knowledgebaserecord_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).regardingobjectid_knowledgebaserecord_campaignresponse = n.getObjectValue<Knowledgebaserecord>(createKnowledgebaserecordFromDiscriminatorValue); },
            "regardingobjectid_lead_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).regardingobjectid_lead_campaignresponse = n.getObjectValue<Lead>(createLeadFromDiscriminatorValue); },
            "regardingobjectid_new_interactionforemail_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).regardingobjectid_new_interactionforemail_campaignresponse = n.getObjectValue<Interactionforemail>(createInteractionforemailFromDiscriminatorValue); },
            "responsecode": (o, n) => { (o as unknown as Campaignresponse).responsecode = n.getNumberValue(); },
            "sendermailboxid_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).sendermailboxid_campaignresponse = n.getObjectValue<Mailbox>(createMailboxFromDiscriminatorValue); },
            "sla_activitypointer_sla_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).sla_activitypointer_sla_campaignresponse = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "slainvokedid_activitypointer_sla_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).slainvokedid_activitypointer_sla_campaignresponse = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "stageid_processstage": (o, n) => { (o as unknown as Campaignresponse).stageid_processstage = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "subcategory": (o, n) => { (o as unknown as Campaignresponse).subcategory = n.getStringValue(); },
            "telephone": (o, n) => { (o as unknown as Campaignresponse).telephone = n.getStringValue(); },
            "transactioncurrencyid_campaignresponse": (o, n) => { (o as unknown as Campaignresponse).transactioncurrencyid_campaignresponse = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "yomicompanyname": (o, n) => { (o as unknown as Campaignresponse).yomicompanyname = n.getStringValue(); },
            "yomifirstname": (o, n) => { (o as unknown as Campaignresponse).yomifirstname = n.getStringValue(); },
            "yomilastname": (o, n) => { (o as unknown as Campaignresponse).yomilastname = n.getStringValue(); },
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
     * Gets the lastname property value. 
     * @returns a string
     */
    public get lastname() {
        return this._lastname;
    };
    /**
     * Sets the lastname property value. 
     * @param value Value to set for the lastname property.
     */
    public set lastname(value: string | undefined) {
        this._lastname = value;
    };
    /**
     * Gets the modifiedby_campaignresponse property value. 
     * @returns a systemuser
     */
    public get modifiedby_campaignresponse() {
        return this._modifiedby_campaignresponse;
    };
    /**
     * Sets the modifiedby_campaignresponse property value. 
     * @param value Value to set for the modifiedby_campaignresponse property.
     */
    public set modifiedby_campaignresponse(value: Systemuser | undefined) {
        this._modifiedby_campaignresponse = value;
    };
    /**
     * Gets the modifiedonbehalfby_campaignresponse property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby_campaignresponse() {
        return this._modifiedonbehalfby_campaignresponse;
    };
    /**
     * Sets the modifiedonbehalfby_campaignresponse property value. 
     * @param value Value to set for the modifiedonbehalfby_campaignresponse property.
     */
    public set modifiedonbehalfby_campaignresponse(value: Systemuser | undefined) {
        this._modifiedonbehalfby_campaignresponse = value;
    };
    /**
     * Gets the originatingactivityid_activitypointer property value. 
     * @returns a activitypointer
     */
    public get originatingactivityid_activitypointer() {
        return this._originatingactivityid_activitypointer;
    };
    /**
     * Sets the originatingactivityid_activitypointer property value. 
     * @param value Value to set for the originatingactivityid_activitypointer property.
     */
    public set originatingactivityid_activitypointer(value: Activitypointer | undefined) {
        this._originatingactivityid_activitypointer = value;
    };
    /**
     * Gets the originatingactivityid_appointment property value. 
     * @returns a appointment
     */
    public get originatingactivityid_appointment() {
        return this._originatingactivityid_appointment;
    };
    /**
     * Sets the originatingactivityid_appointment property value. 
     * @param value Value to set for the originatingactivityid_appointment property.
     */
    public set originatingactivityid_appointment(value: Appointment | undefined) {
        this._originatingactivityid_appointment = value;
    };
    /**
     * Gets the originatingactivityid_email property value. 
     * @returns a email
     */
    public get originatingactivityid_email() {
        return this._originatingactivityid_email;
    };
    /**
     * Sets the originatingactivityid_email property value. 
     * @param value Value to set for the originatingactivityid_email property.
     */
    public set originatingactivityid_email(value: Email | undefined) {
        this._originatingactivityid_email = value;
    };
    /**
     * Gets the originatingactivityid_fax property value. 
     * @returns a fax
     */
    public get originatingactivityid_fax() {
        return this._originatingactivityid_fax;
    };
    /**
     * Sets the originatingactivityid_fax property value. 
     * @param value Value to set for the originatingactivityid_fax property.
     */
    public set originatingactivityid_fax(value: Fax | undefined) {
        this._originatingactivityid_fax = value;
    };
    /**
     * Gets the originatingactivityid_incidentresolution_campaignresponse property value. 
     * @returns a incidentresolution
     */
    public get originatingactivityid_incidentresolution_campaignresponse() {
        return this._originatingactivityid_incidentresolution_campaignresponse;
    };
    /**
     * Sets the originatingactivityid_incidentresolution_campaignresponse property value. 
     * @param value Value to set for the originatingactivityid_incidentresolution_campaignresponse property.
     */
    public set originatingactivityid_incidentresolution_campaignresponse(value: Incidentresolution | undefined) {
        this._originatingactivityid_incidentresolution_campaignresponse = value;
    };
    /**
     * Gets the originatingactivityid_letter property value. 
     * @returns a letter
     */
    public get originatingactivityid_letter() {
        return this._originatingactivityid_letter;
    };
    /**
     * Sets the originatingactivityid_letter property value. 
     * @param value Value to set for the originatingactivityid_letter property.
     */
    public set originatingactivityid_letter(value: Letter | undefined) {
        this._originatingactivityid_letter = value;
    };
    /**
     * Gets the originatingactivityid_msdyn_approval_campaignresponse property value. 
     * @returns a msdyn_approval
     */
    public get originatingactivityid_msdyn_approval_campaignresponse() {
        return this._originatingactivityid_msdyn_approval_campaignresponse;
    };
    /**
     * Sets the originatingactivityid_msdyn_approval_campaignresponse property value. 
     * @param value Value to set for the originatingactivityid_msdyn_approval_campaignresponse property.
     */
    public set originatingactivityid_msdyn_approval_campaignresponse(value: Msdyn_approval | undefined) {
        this._originatingactivityid_msdyn_approval_campaignresponse = value;
    };
    /**
     * Gets the originatingactivityid_msdyn_bookingalert_campaignresponse property value. 
     * @returns a msdyn_bookingalert
     */
    public get originatingactivityid_msdyn_bookingalert_campaignresponse() {
        return this._originatingactivityid_msdyn_bookingalert_campaignresponse;
    };
    /**
     * Sets the originatingactivityid_msdyn_bookingalert_campaignresponse property value. 
     * @param value Value to set for the originatingactivityid_msdyn_bookingalert_campaignresponse property.
     */
    public set originatingactivityid_msdyn_bookingalert_campaignresponse(value: Msdyn_bookingalert | undefined) {
        this._originatingactivityid_msdyn_bookingalert_campaignresponse = value;
    };
    /**
     * Gets the originatingactivityid_msdyn_ocliveworkitem_campaignresponse property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get originatingactivityid_msdyn_ocliveworkitem_campaignresponse() {
        return this._originatingactivityid_msdyn_ocliveworkitem_campaignresponse;
    };
    /**
     * Sets the originatingactivityid_msdyn_ocliveworkitem_campaignresponse property value. 
     * @param value Value to set for the originatingactivityid_msdyn_ocliveworkitem_campaignresponse property.
     */
    public set originatingactivityid_msdyn_ocliveworkitem_campaignresponse(value: Msdyn_ocliveworkitem | undefined) {
        this._originatingactivityid_msdyn_ocliveworkitem_campaignresponse = value;
    };
    /**
     * Gets the originatingactivityid_msdyn_ocoutboundmessage_campaignresponse property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get originatingactivityid_msdyn_ocoutboundmessage_campaignresponse() {
        return this._originatingactivityid_msdyn_ocoutboundmessage_campaignresponse;
    };
    /**
     * Sets the originatingactivityid_msdyn_ocoutboundmessage_campaignresponse property value. 
     * @param value Value to set for the originatingactivityid_msdyn_ocoutboundmessage_campaignresponse property.
     */
    public set originatingactivityid_msdyn_ocoutboundmessage_campaignresponse(value: Msdyn_ocoutboundmessage | undefined) {
        this._originatingactivityid_msdyn_ocoutboundmessage_campaignresponse = value;
    };
    /**
     * Gets the originatingactivityid_msdyn_ocsession_campaignresponse property value. 
     * @returns a msdyn_ocsession
     */
    public get originatingactivityid_msdyn_ocsession_campaignresponse() {
        return this._originatingactivityid_msdyn_ocsession_campaignresponse;
    };
    /**
     * Sets the originatingactivityid_msdyn_ocsession_campaignresponse property value. 
     * @param value Value to set for the originatingactivityid_msdyn_ocsession_campaignresponse property.
     */
    public set originatingactivityid_msdyn_ocsession_campaignresponse(value: Msdyn_ocsession | undefined) {
        this._originatingactivityid_msdyn_ocsession_campaignresponse = value;
    };
    /**
     * Gets the originatingactivityid_msfp_alert_campaignresponse property value. 
     * @returns a msfp_alert
     */
    public get originatingactivityid_msfp_alert_campaignresponse() {
        return this._originatingactivityid_msfp_alert_campaignresponse;
    };
    /**
     * Sets the originatingactivityid_msfp_alert_campaignresponse property value. 
     * @param value Value to set for the originatingactivityid_msfp_alert_campaignresponse property.
     */
    public set originatingactivityid_msfp_alert_campaignresponse(value: Msfp_alert | undefined) {
        this._originatingactivityid_msfp_alert_campaignresponse = value;
    };
    /**
     * Gets the originatingactivityid_msfp_surveyinvite_campaignresponse property value. 
     * @returns a msfp_surveyinvite
     */
    public get originatingactivityid_msfp_surveyinvite_campaignresponse() {
        return this._originatingactivityid_msfp_surveyinvite_campaignresponse;
    };
    /**
     * Sets the originatingactivityid_msfp_surveyinvite_campaignresponse property value. 
     * @param value Value to set for the originatingactivityid_msfp_surveyinvite_campaignresponse property.
     */
    public set originatingactivityid_msfp_surveyinvite_campaignresponse(value: Msfp_surveyinvite | undefined) {
        this._originatingactivityid_msfp_surveyinvite_campaignresponse = value;
    };
    /**
     * Gets the originatingactivityid_msfp_surveyresponse_campaignresponse property value. 
     * @returns a msfp_surveyresponse
     */
    public get originatingactivityid_msfp_surveyresponse_campaignresponse() {
        return this._originatingactivityid_msfp_surveyresponse_campaignresponse;
    };
    /**
     * Sets the originatingactivityid_msfp_surveyresponse_campaignresponse property value. 
     * @param value Value to set for the originatingactivityid_msfp_surveyresponse_campaignresponse property.
     */
    public set originatingactivityid_msfp_surveyresponse_campaignresponse(value: Msfp_surveyresponse | undefined) {
        this._originatingactivityid_msfp_surveyresponse_campaignresponse = value;
    };
    /**
     * Gets the originatingactivityid_opportunityclose_campaignresponse property value. 
     * @returns a opportunityclose
     */
    public get originatingactivityid_opportunityclose_campaignresponse() {
        return this._originatingactivityid_opportunityclose_campaignresponse;
    };
    /**
     * Sets the originatingactivityid_opportunityclose_campaignresponse property value. 
     * @param value Value to set for the originatingactivityid_opportunityclose_campaignresponse property.
     */
    public set originatingactivityid_opportunityclose_campaignresponse(value: Opportunityclose | undefined) {
        this._originatingactivityid_opportunityclose_campaignresponse = value;
    };
    /**
     * Gets the originatingactivityid_orderclose_campaignresponse property value. 
     * @returns a orderclose
     */
    public get originatingactivityid_orderclose_campaignresponse() {
        return this._originatingactivityid_orderclose_campaignresponse;
    };
    /**
     * Sets the originatingactivityid_orderclose_campaignresponse property value. 
     * @param value Value to set for the originatingactivityid_orderclose_campaignresponse property.
     */
    public set originatingactivityid_orderclose_campaignresponse(value: Orderclose | undefined) {
        this._originatingactivityid_orderclose_campaignresponse = value;
    };
    /**
     * Gets the originatingactivityid_phonecall property value. 
     * @returns a phonecall
     */
    public get originatingactivityid_phonecall() {
        return this._originatingactivityid_phonecall;
    };
    /**
     * Sets the originatingactivityid_phonecall property value. 
     * @param value Value to set for the originatingactivityid_phonecall property.
     */
    public set originatingactivityid_phonecall(value: Phonecall | undefined) {
        this._originatingactivityid_phonecall = value;
    };
    /**
     * Gets the originatingactivityid_quoteclose_campaignresponse property value. 
     * @returns a quoteclose
     */
    public get originatingactivityid_quoteclose_campaignresponse() {
        return this._originatingactivityid_quoteclose_campaignresponse;
    };
    /**
     * Sets the originatingactivityid_quoteclose_campaignresponse property value. 
     * @param value Value to set for the originatingactivityid_quoteclose_campaignresponse property.
     */
    public set originatingactivityid_quoteclose_campaignresponse(value: Quoteclose | undefined) {
        this._originatingactivityid_quoteclose_campaignresponse = value;
    };
    /**
     * Gets the originatingactivityid_recurringappointmentmaster property value. 
     * @returns a recurringappointmentmaster
     */
    public get originatingactivityid_recurringappointmentmaster() {
        return this._originatingactivityid_recurringappointmentmaster;
    };
    /**
     * Sets the originatingactivityid_recurringappointmentmaster property value. 
     * @param value Value to set for the originatingactivityid_recurringappointmentmaster property.
     */
    public set originatingactivityid_recurringappointmentmaster(value: Recurringappointmentmaster | undefined) {
        this._originatingactivityid_recurringappointmentmaster = value;
    };
    /**
     * Gets the originatingactivityid_serviceappointment_campaignresponse property value. 
     * @returns a serviceappointment
     */
    public get originatingactivityid_serviceappointment_campaignresponse() {
        return this._originatingactivityid_serviceappointment_campaignresponse;
    };
    /**
     * Sets the originatingactivityid_serviceappointment_campaignresponse property value. 
     * @param value Value to set for the originatingactivityid_serviceappointment_campaignresponse property.
     */
    public set originatingactivityid_serviceappointment_campaignresponse(value: Serviceappointment | undefined) {
        this._originatingactivityid_serviceappointment_campaignresponse = value;
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
     * Gets the ownerid_campaignresponse property value. 
     * @returns a principal
     */
    public get ownerid_campaignresponse() {
        return this._ownerid_campaignresponse;
    };
    /**
     * Sets the ownerid_campaignresponse property value. 
     * @param value Value to set for the ownerid_campaignresponse property.
     */
    public set ownerid_campaignresponse(value: Principal | undefined) {
        this._ownerid_campaignresponse = value;
    };
    /**
     * Gets the owningbusinessunit_campaignresponse property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit_campaignresponse() {
        return this._owningbusinessunit_campaignresponse;
    };
    /**
     * Sets the owningbusinessunit_campaignresponse property value. 
     * @param value Value to set for the owningbusinessunit_campaignresponse property.
     */
    public set owningbusinessunit_campaignresponse(value: Businessunit | undefined) {
        this._owningbusinessunit_campaignresponse = value;
    };
    /**
     * Gets the owningteam_campaignresponse property value. 
     * @returns a team
     */
    public get owningteam_campaignresponse() {
        return this._owningteam_campaignresponse;
    };
    /**
     * Sets the owningteam_campaignresponse property value. 
     * @param value Value to set for the owningteam_campaignresponse property.
     */
    public set owningteam_campaignresponse(value: Team | undefined) {
        this._owningteam_campaignresponse = value;
    };
    /**
     * Gets the owninguser_campaignresponse property value. 
     * @returns a systemuser
     */
    public get owninguser_campaignresponse() {
        return this._owninguser_campaignresponse;
    };
    /**
     * Sets the owninguser_campaignresponse property value. 
     * @param value Value to set for the owninguser_campaignresponse property.
     */
    public set owninguser_campaignresponse(value: Systemuser | undefined) {
        this._owninguser_campaignresponse = value;
    };
    /**
     * Gets the promotioncodename property value. 
     * @returns a string
     */
    public get promotioncodename() {
        return this._promotioncodename;
    };
    /**
     * Sets the promotioncodename property value. 
     * @param value Value to set for the promotioncodename property.
     */
    public set promotioncodename(value: string | undefined) {
        this._promotioncodename = value;
    };
    /**
     * Gets the receivedon property value. 
     * @returns a Date
     */
    public get receivedon() {
        return this._receivedon;
    };
    /**
     * Sets the receivedon property value. 
     * @param value Value to set for the receivedon property.
     */
    public set receivedon(value: Date | undefined) {
        this._receivedon = value;
    };
    /**
     * Gets the regardingobjectid_account_campaignresponse property value. 
     * @returns a account
     */
    public get regardingobjectid_account_campaignresponse() {
        return this._regardingobjectid_account_campaignresponse;
    };
    /**
     * Sets the regardingobjectid_account_campaignresponse property value. 
     * @param value Value to set for the regardingobjectid_account_campaignresponse property.
     */
    public set regardingobjectid_account_campaignresponse(value: Account | undefined) {
        this._regardingobjectid_account_campaignresponse = value;
    };
    /**
     * Gets the regardingobjectid_bookableresourcebooking_campaignresponse property value. 
     * @returns a bookableresourcebooking
     */
    public get regardingobjectid_bookableresourcebooking_campaignresponse() {
        return this._regardingobjectid_bookableresourcebooking_campaignresponse;
    };
    /**
     * Sets the regardingobjectid_bookableresourcebooking_campaignresponse property value. 
     * @param value Value to set for the regardingobjectid_bookableresourcebooking_campaignresponse property.
     */
    public set regardingobjectid_bookableresourcebooking_campaignresponse(value: Bookableresourcebooking | undefined) {
        this._regardingobjectid_bookableresourcebooking_campaignresponse = value;
    };
    /**
     * Gets the regardingobjectid_bookableresourcebookingheader_campaignresponse property value. 
     * @returns a bookableresourcebookingheader
     */
    public get regardingobjectid_bookableresourcebookingheader_campaignresponse() {
        return this._regardingobjectid_bookableresourcebookingheader_campaignresponse;
    };
    /**
     * Sets the regardingobjectid_bookableresourcebookingheader_campaignresponse property value. 
     * @param value Value to set for the regardingobjectid_bookableresourcebookingheader_campaignresponse property.
     */
    public set regardingobjectid_bookableresourcebookingheader_campaignresponse(value: Bookableresourcebookingheader | undefined) {
        this._regardingobjectid_bookableresourcebookingheader_campaignresponse = value;
    };
    /**
     * Gets the regardingobjectid_bulkoperation_campaignresponse property value. 
     * @returns a bulkoperation
     */
    public get regardingobjectid_bulkoperation_campaignresponse() {
        return this._regardingobjectid_bulkoperation_campaignresponse;
    };
    /**
     * Sets the regardingobjectid_bulkoperation_campaignresponse property value. 
     * @param value Value to set for the regardingobjectid_bulkoperation_campaignresponse property.
     */
    public set regardingobjectid_bulkoperation_campaignresponse(value: Bulkoperation | undefined) {
        this._regardingobjectid_bulkoperation_campaignresponse = value;
    };
    /**
     * Gets the regardingobjectid_campaign_campaignresponse property value. 
     * @returns a campaign
     */
    public get regardingobjectid_campaign_campaignresponse() {
        return this._regardingobjectid_campaign_campaignresponse;
    };
    /**
     * Sets the regardingobjectid_campaign_campaignresponse property value. 
     * @param value Value to set for the regardingobjectid_campaign_campaignresponse property.
     */
    public set regardingobjectid_campaign_campaignresponse(value: Campaign | undefined) {
        this._regardingobjectid_campaign_campaignresponse = value;
    };
    /**
     * Gets the regardingobjectid_campaignactivity_campaignresponse property value. 
     * @returns a campaignactivity
     */
    public get regardingobjectid_campaignactivity_campaignresponse() {
        return this._regardingobjectid_campaignactivity_campaignresponse;
    };
    /**
     * Sets the regardingobjectid_campaignactivity_campaignresponse property value. 
     * @param value Value to set for the regardingobjectid_campaignactivity_campaignresponse property.
     */
    public set regardingobjectid_campaignactivity_campaignresponse(value: Campaignactivity | undefined) {
        this._regardingobjectid_campaignactivity_campaignresponse = value;
    };
    /**
     * Gets the regardingobjectid_contact_campaignresponse property value. 
     * @returns a contact
     */
    public get regardingobjectid_contact_campaignresponse() {
        return this._regardingobjectid_contact_campaignresponse;
    };
    /**
     * Sets the regardingobjectid_contact_campaignresponse property value. 
     * @param value Value to set for the regardingobjectid_contact_campaignresponse property.
     */
    public set regardingobjectid_contact_campaignresponse(value: Contact | undefined) {
        this._regardingobjectid_contact_campaignresponse = value;
    };
    /**
     * Gets the regardingobjectid_knowledgearticle_campaignresponse property value. 
     * @returns a knowledgearticle
     */
    public get regardingobjectid_knowledgearticle_campaignresponse() {
        return this._regardingobjectid_knowledgearticle_campaignresponse;
    };
    /**
     * Sets the regardingobjectid_knowledgearticle_campaignresponse property value. 
     * @param value Value to set for the regardingobjectid_knowledgearticle_campaignresponse property.
     */
    public set regardingobjectid_knowledgearticle_campaignresponse(value: Knowledgearticle | undefined) {
        this._regardingobjectid_knowledgearticle_campaignresponse = value;
    };
    /**
     * Gets the regardingobjectid_knowledgebaserecord_campaignresponse property value. 
     * @returns a knowledgebaserecord
     */
    public get regardingobjectid_knowledgebaserecord_campaignresponse() {
        return this._regardingobjectid_knowledgebaserecord_campaignresponse;
    };
    /**
     * Sets the regardingobjectid_knowledgebaserecord_campaignresponse property value. 
     * @param value Value to set for the regardingobjectid_knowledgebaserecord_campaignresponse property.
     */
    public set regardingobjectid_knowledgebaserecord_campaignresponse(value: Knowledgebaserecord | undefined) {
        this._regardingobjectid_knowledgebaserecord_campaignresponse = value;
    };
    /**
     * Gets the regardingobjectid_lead_campaignresponse property value. 
     * @returns a lead
     */
    public get regardingobjectid_lead_campaignresponse() {
        return this._regardingobjectid_lead_campaignresponse;
    };
    /**
     * Sets the regardingobjectid_lead_campaignresponse property value. 
     * @param value Value to set for the regardingobjectid_lead_campaignresponse property.
     */
    public set regardingobjectid_lead_campaignresponse(value: Lead | undefined) {
        this._regardingobjectid_lead_campaignresponse = value;
    };
    /**
     * Gets the regardingobjectid_new_interactionforemail_campaignresponse property value. 
     * @returns a interactionforemail
     */
    public get regardingobjectid_new_interactionforemail_campaignresponse() {
        return this._regardingobjectid_new_interactionforemail_campaignresponse;
    };
    /**
     * Sets the regardingobjectid_new_interactionforemail_campaignresponse property value. 
     * @param value Value to set for the regardingobjectid_new_interactionforemail_campaignresponse property.
     */
    public set regardingobjectid_new_interactionforemail_campaignresponse(value: Interactionforemail | undefined) {
        this._regardingobjectid_new_interactionforemail_campaignresponse = value;
    };
    /**
     * Gets the responsecode property value. 
     * @returns a integer
     */
    public get responsecode() {
        return this._responsecode;
    };
    /**
     * Sets the responsecode property value. 
     * @param value Value to set for the responsecode property.
     */
    public set responsecode(value: number | undefined) {
        this._responsecode = value;
    };
    /**
     * Gets the sendermailboxid_campaignresponse property value. 
     * @returns a mailbox
     */
    public get sendermailboxid_campaignresponse() {
        return this._sendermailboxid_campaignresponse;
    };
    /**
     * Sets the sendermailboxid_campaignresponse property value. 
     * @param value Value to set for the sendermailboxid_campaignresponse property.
     */
    public set sendermailboxid_campaignresponse(value: Mailbox | undefined) {
        this._sendermailboxid_campaignresponse = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_originatingactivityid_value", this._originatingactivityid_value);
        writer.writeObjectValue<Activitypointer>("activityid_activitypointer", this.activityid_activitypointer);
        writer.writeCollectionOfObjectValues<Activityparty>("campaignresponse_activity_parties", this.campaignresponse_activity_parties);
        writer.writeCollectionOfObjectValues<Annotation>("campaignResponse_Annotation", this.campaignResponse_Annotation);
        writer.writeCollectionOfObjectValues<Asyncoperation>("campaignResponse_AsyncOperations", this.campaignResponse_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("campaignResponse_BulkDeleteFailures", this.campaignResponse_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("campaignResponse_DuplicateBaseRecord", this.campaignResponse_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("campaignResponse_DuplicateMatchingRecord", this.campaignResponse_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Lead>("campaignResponse_Lead", this.campaignResponse_Lead);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("campaignresponse_MailboxTrackingFolders", this.campaignresponse_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("campaignresponse_principalobjectattributeaccess", this.campaignresponse_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("campaignResponse_ProcessSessions", this.campaignResponse_ProcessSessions);
        writer.writeCollectionOfObjectValues<Queueitem>("campaignResponse_QueueItem", this.campaignResponse_QueueItem);
        writer.writeCollectionOfObjectValues<Syncerror>("campaignResponse_SyncErrors", this.campaignResponse_SyncErrors);
        writer.writeStringValue("category", this.category);
        writer.writeNumberValue("channeltypecode", this.channeltypecode);
        writer.writeStringValue("companyname", this.companyname);
        writer.writeObjectValue<Systemuser>("createdby_campaignresponse", this.createdby_campaignresponse);
        writer.writeObjectValue<Systemuser>("createdonbehalfby_campaignresponse", this.createdonbehalfby_campaignresponse);
        writer.writeStringValue("emailaddress", this.emailaddress);
        writer.writeStringValue("fax", this.fax);
        writer.writeStringValue("firstname", this.firstname);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("lastname", this.lastname);
        writer.writeObjectValue<Systemuser>("modifiedby_campaignresponse", this.modifiedby_campaignresponse);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby_campaignresponse", this.modifiedonbehalfby_campaignresponse);
        writer.writeObjectValue<Activitypointer>("originatingactivityid_activitypointer", this.originatingactivityid_activitypointer);
        writer.writeObjectValue<Appointment>("originatingactivityid_appointment", this.originatingactivityid_appointment);
        writer.writeObjectValue<Email>("originatingactivityid_email", this.originatingactivityid_email);
        writer.writeObjectValue<Fax>("originatingactivityid_fax", this.originatingactivityid_fax);
        writer.writeObjectValue<Incidentresolution>("originatingactivityid_incidentresolution_campaignresponse", this.originatingactivityid_incidentresolution_campaignresponse);
        writer.writeObjectValue<Letter>("originatingactivityid_letter", this.originatingactivityid_letter);
        writer.writeObjectValue<Msdyn_approval>("originatingactivityid_msdyn_approval_campaignresponse", this.originatingactivityid_msdyn_approval_campaignresponse);
        writer.writeObjectValue<Msdyn_bookingalert>("originatingactivityid_msdyn_bookingalert_campaignresponse", this.originatingactivityid_msdyn_bookingalert_campaignresponse);
        writer.writeObjectValue<Msdyn_ocliveworkitem>("originatingactivityid_msdyn_ocliveworkitem_campaignresponse", this.originatingactivityid_msdyn_ocliveworkitem_campaignresponse);
        writer.writeObjectValue<Msdyn_ocoutboundmessage>("originatingactivityid_msdyn_ocoutboundmessage_campaignresponse", this.originatingactivityid_msdyn_ocoutboundmessage_campaignresponse);
        writer.writeObjectValue<Msdyn_ocsession>("originatingactivityid_msdyn_ocsession_campaignresponse", this.originatingactivityid_msdyn_ocsession_campaignresponse);
        writer.writeObjectValue<Msfp_alert>("originatingactivityid_msfp_alert_campaignresponse", this.originatingactivityid_msfp_alert_campaignresponse);
        writer.writeObjectValue<Msfp_surveyinvite>("originatingactivityid_msfp_surveyinvite_campaignresponse", this.originatingactivityid_msfp_surveyinvite_campaignresponse);
        writer.writeObjectValue<Msfp_surveyresponse>("originatingactivityid_msfp_surveyresponse_campaignresponse", this.originatingactivityid_msfp_surveyresponse_campaignresponse);
        writer.writeObjectValue<Opportunityclose>("originatingactivityid_opportunityclose_campaignresponse", this.originatingactivityid_opportunityclose_campaignresponse);
        writer.writeObjectValue<Orderclose>("originatingactivityid_orderclose_campaignresponse", this.originatingactivityid_orderclose_campaignresponse);
        writer.writeObjectValue<Phonecall>("originatingactivityid_phonecall", this.originatingactivityid_phonecall);
        writer.writeObjectValue<Quoteclose>("originatingactivityid_quoteclose_campaignresponse", this.originatingactivityid_quoteclose_campaignresponse);
        writer.writeObjectValue<Recurringappointmentmaster>("originatingactivityid_recurringappointmentmaster", this.originatingactivityid_recurringappointmentmaster);
        writer.writeObjectValue<Serviceappointment>("originatingactivityid_serviceappointment_campaignresponse", this.originatingactivityid_serviceappointment_campaignresponse);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid_campaignresponse", this.ownerid_campaignresponse);
        writer.writeObjectValue<Businessunit>("owningbusinessunit_campaignresponse", this.owningbusinessunit_campaignresponse);
        writer.writeObjectValue<Team>("owningteam_campaignresponse", this.owningteam_campaignresponse);
        writer.writeObjectValue<Systemuser>("owninguser_campaignresponse", this.owninguser_campaignresponse);
        writer.writeStringValue("promotioncodename", this.promotioncodename);
        writer.writeDateValue("receivedon", this.receivedon);
        writer.writeObjectValue<Account>("regardingobjectid_account_campaignresponse", this.regardingobjectid_account_campaignresponse);
        writer.writeObjectValue<Bookableresourcebooking>("regardingobjectid_bookableresourcebooking_campaignresponse", this.regardingobjectid_bookableresourcebooking_campaignresponse);
        writer.writeObjectValue<Bookableresourcebookingheader>("regardingobjectid_bookableresourcebookingheader_campaignresponse", this.regardingobjectid_bookableresourcebookingheader_campaignresponse);
        writer.writeObjectValue<Bulkoperation>("regardingobjectid_bulkoperation_campaignresponse", this.regardingobjectid_bulkoperation_campaignresponse);
        writer.writeObjectValue<Campaign>("regardingobjectid_campaign_campaignresponse", this.regardingobjectid_campaign_campaignresponse);
        writer.writeObjectValue<Campaignactivity>("regardingobjectid_campaignactivity_campaignresponse", this.regardingobjectid_campaignactivity_campaignresponse);
        writer.writeObjectValue<Contact>("regardingobjectid_contact_campaignresponse", this.regardingobjectid_contact_campaignresponse);
        writer.writeObjectValue<Knowledgearticle>("regardingobjectid_knowledgearticle_campaignresponse", this.regardingobjectid_knowledgearticle_campaignresponse);
        writer.writeObjectValue<Knowledgebaserecord>("regardingobjectid_knowledgebaserecord_campaignresponse", this.regardingobjectid_knowledgebaserecord_campaignresponse);
        writer.writeObjectValue<Lead>("regardingobjectid_lead_campaignresponse", this.regardingobjectid_lead_campaignresponse);
        writer.writeObjectValue<Interactionforemail>("regardingobjectid_new_interactionforemail_campaignresponse", this.regardingobjectid_new_interactionforemail_campaignresponse);
        writer.writeNumberValue("responsecode", this.responsecode);
        writer.writeObjectValue<Mailbox>("sendermailboxid_campaignresponse", this.sendermailboxid_campaignresponse);
        writer.writeObjectValue<Sla>("sla_activitypointer_sla_campaignresponse", this.sla_activitypointer_sla_campaignresponse);
        writer.writeObjectValue<Sla>("slainvokedid_activitypointer_sla_campaignresponse", this.slainvokedid_activitypointer_sla_campaignresponse);
        writer.writeObjectValue<Processstage>("stageid_processstage", this.stageid_processstage);
        writer.writeStringValue("subcategory", this.subcategory);
        writer.writeStringValue("telephone", this.telephone);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid_campaignresponse", this.transactioncurrencyid_campaignresponse);
        writer.writeStringValue("yomicompanyname", this.yomicompanyname);
        writer.writeStringValue("yomifirstname", this.yomifirstname);
        writer.writeStringValue("yomilastname", this.yomilastname);
    };
    /**
     * Gets the sla_activitypointer_sla_campaignresponse property value. 
     * @returns a sla
     */
    public get sla_activitypointer_sla_campaignresponse() {
        return this._sla_activitypointer_sla_campaignresponse;
    };
    /**
     * Sets the sla_activitypointer_sla_campaignresponse property value. 
     * @param value Value to set for the sla_activitypointer_sla_campaignresponse property.
     */
    public set sla_activitypointer_sla_campaignresponse(value: Sla | undefined) {
        this._sla_activitypointer_sla_campaignresponse = value;
    };
    /**
     * Gets the slainvokedid_activitypointer_sla_campaignresponse property value. 
     * @returns a sla
     */
    public get slainvokedid_activitypointer_sla_campaignresponse() {
        return this._slainvokedid_activitypointer_sla_campaignresponse;
    };
    /**
     * Sets the slainvokedid_activitypointer_sla_campaignresponse property value. 
     * @param value Value to set for the slainvokedid_activitypointer_sla_campaignresponse property.
     */
    public set slainvokedid_activitypointer_sla_campaignresponse(value: Sla | undefined) {
        this._slainvokedid_activitypointer_sla_campaignresponse = value;
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
     * Gets the telephone property value. 
     * @returns a string
     */
    public get telephone() {
        return this._telephone;
    };
    /**
     * Sets the telephone property value. 
     * @param value Value to set for the telephone property.
     */
    public set telephone(value: string | undefined) {
        this._telephone = value;
    };
    /**
     * Gets the transactioncurrencyid_campaignresponse property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid_campaignresponse() {
        return this._transactioncurrencyid_campaignresponse;
    };
    /**
     * Sets the transactioncurrencyid_campaignresponse property value. 
     * @param value Value to set for the transactioncurrencyid_campaignresponse property.
     */
    public set transactioncurrencyid_campaignresponse(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid_campaignresponse = value;
    };
    /**
     * Gets the yomicompanyname property value. 
     * @returns a string
     */
    public get yomicompanyname() {
        return this._yomicompanyname;
    };
    /**
     * Sets the yomicompanyname property value. 
     * @param value Value to set for the yomicompanyname property.
     */
    public set yomicompanyname(value: string | undefined) {
        this._yomicompanyname = value;
    };
    /**
     * Gets the yomifirstname property value. 
     * @returns a string
     */
    public get yomifirstname() {
        return this._yomifirstname;
    };
    /**
     * Sets the yomifirstname property value. 
     * @param value Value to set for the yomifirstname property.
     */
    public set yomifirstname(value: string | undefined) {
        this._yomifirstname = value;
    };
    /**
     * Gets the yomilastname property value. 
     * @returns a string
     */
    public get yomilastname() {
        return this._yomilastname;
    };
    /**
     * Sets the yomilastname property value. 
     * @param value Value to set for the yomilastname property.
     */
    public set yomilastname(value: string | undefined) {
        this._yomilastname = value;
    };
}
