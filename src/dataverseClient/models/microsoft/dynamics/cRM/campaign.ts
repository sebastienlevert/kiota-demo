import {createActivitypartyFromDiscriminatorValue} from './createActivitypartyFromDiscriminatorValue';
import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCampaignactivityFromDiscriminatorValue} from './createCampaignactivityFromDiscriminatorValue';
import {createCampaignFromDiscriminatorValue} from './createCampaignFromDiscriminatorValue';
import {createCampaignresponseFromDiscriminatorValue} from './createCampaignresponseFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createIncidentresolutionFromDiscriminatorValue} from './createIncidentresolutionFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createListFromDiscriminatorValue} from './createListFromDiscriminatorValue';
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
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createOrdercloseFromDiscriminatorValue} from './createOrdercloseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPricelevelFromDiscriminatorValue} from './createPricelevelFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createQuotecloseFromDiscriminatorValue} from './createQuotecloseFromDiscriminatorValue';
import {createQuoteFromDiscriminatorValue} from './createQuoteFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createSalesliteratureFromDiscriminatorValue} from './createSalesliteratureFromDiscriminatorValue';
import {createSalesorderFromDiscriminatorValue} from './createSalesorderFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Activityparty, Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Campaignactivity, Campaignresponse, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Incidentresolution, Lead, Letter, List, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Opportunity, Opportunityclose, Orderclose, Phonecall, Pricelevel, Principal, Principalobjectattributeaccess, Processsession, Processstage, Product, Quote, Quoteclose, Recurringappointmentmaster, Salesliterature, Salesorder, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Campaign extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __pricelistid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _actualend?: Date | undefined;
    private _actualstart?: Date | undefined;
    private _budgetedcost?: number | undefined;
    private _budgetedcost_base?: number | undefined;
    private _campaign_activity_parties?: Activityparty[] | undefined;
    private _campaign_ActivityPointers?: Activitypointer[] | undefined;
    private _campaign_Annotation?: Annotation[] | undefined;
    private _campaign_Appointments?: Appointment[] | undefined;
    private _campaign_AsyncOperations?: Asyncoperation[] | undefined;
    private _campaign_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _campaign_CampaignActivities?: Campaignactivity[] | undefined;
    private _campaign_CampaignResponses?: Campaignresponse[] | undefined;
    private _campaign_connections1?: Connection[] | undefined;
    private _campaign_connections2?: Connection[] | undefined;
    private _campaign_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _campaign_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _campaign_Emails?: Email[] | undefined;
    private _campaign_Faxes?: Fax[] | undefined;
    private _campaign_IncidentResolutions?: Incidentresolution[] | undefined;
    private _campaign_leads?: Lead[] | undefined;
    private _campaign_Letters?: Letter[] | undefined;
    private _campaign_MailboxTrackingFolder?: Mailboxtrackingfolder[] | undefined;
    private _campaign_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _campaign_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _campaign_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _campaign_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _campaign_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _campaign_msfp_alerts?: Msfp_alert[] | undefined;
    private _campaign_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _campaign_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _campaign_opportunities?: Opportunity[] | undefined;
    private _campaign_OpportunityCloses?: Opportunityclose[] | undefined;
    private _campaign_OrderCloses?: Orderclose[] | undefined;
    private _campaign_orders?: Salesorder[] | undefined;
    private _campaign_Phonecalls?: Phonecall[] | undefined;
    private _campaign_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _campaign_ProcessSessions?: Processsession[] | undefined;
    private _campaign_QuoteCloses?: Quoteclose[] | undefined;
    private _campaign_quotes?: Quote[] | undefined;
    private _campaign_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _campaign_ServiceAppointments?: Serviceappointment[] | undefined;
    private _campaign_SocialActivities?: Socialactivity[] | undefined;
    private _campaign_SyncErrors?: Syncerror[] | undefined;
    private _campaign_Tasks?: Task[] | undefined;
    private _campaigncampaign_association?: Campaign[] | undefined;
    private _campaigncampaign_association_referenced?: Campaign[] | undefined;
    private _campaignid?: string | undefined;
    private _campaignlist_association?: List[] | undefined;
    private _campaignproduct_association?: Product[] | undefined;
    private _campaignsalesliterature_association?: Salesliterature[] | undefined;
    private _codename?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _emailaddress?: string | undefined;
    private _entityimage?: string | undefined;
    private _entityimage_timestamp?: number | undefined;
    private _entityimage_url?: string | undefined;
    private _entityimageid?: string | undefined;
    private _exchangerate?: number | undefined;
    private _expectedresponse?: number | undefined;
    private _expectedrevenue?: number | undefined;
    private _expectedrevenue_base?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _istemplate?: boolean | undefined;
    private _message?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_gdproptout?: boolean | undefined;
    private _name?: string | undefined;
    private _objective?: string | undefined;
    private _othercost?: number | undefined;
    private _othercost_base?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _pricelistid?: Pricelevel | undefined;
    private _processid?: string | undefined;
    private _promotioncodename?: string | undefined;
    private _proposedend?: Date | undefined;
    private _proposedstart?: Date | undefined;
    private _stageid?: string | undefined;
    private _stageid_processstage?: Processstage | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _tmpregardingobjectid?: string | undefined;
    private _totalactualcost?: number | undefined;
    private _totalactualcost_base?: number | undefined;
    private _totalcampaignactivityactualcost?: number | undefined;
    private _totalcampaignactivityactualcost_base?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _traversedpath?: string | undefined;
    private _typecode?: number | undefined;
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
     * Gets the _pricelistid_value property value. 
     * @returns a string
     */
    public get _pricelistid_value() {
        return this.__pricelistid_value;
    };
    /**
     * Sets the _pricelistid_value property value. 
     * @param value Value to set for the _pricelistid_value property.
     */
    public set _pricelistid_value(value: string | undefined) {
        this.__pricelistid_value = value;
    };
    /**
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Gets the actualend property value. 
     * @returns a Date
     */
    public get actualend() {
        return this._actualend;
    };
    /**
     * Sets the actualend property value. 
     * @param value Value to set for the actualend property.
     */
    public set actualend(value: Date | undefined) {
        this._actualend = value;
    };
    /**
     * Gets the actualstart property value. 
     * @returns a Date
     */
    public get actualstart() {
        return this._actualstart;
    };
    /**
     * Sets the actualstart property value. 
     * @param value Value to set for the actualstart property.
     */
    public set actualstart(value: Date | undefined) {
        this._actualstart = value;
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
     * Gets the campaign_activity_parties property value. 
     * @returns a activityparty
     */
    public get campaign_activity_parties() {
        return this._campaign_activity_parties;
    };
    /**
     * Sets the campaign_activity_parties property value. 
     * @param value Value to set for the campaign_activity_parties property.
     */
    public set campaign_activity_parties(value: Activityparty[] | undefined) {
        this._campaign_activity_parties = value;
    };
    /**
     * Gets the campaign_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get campaign_ActivityPointers() {
        return this._campaign_ActivityPointers;
    };
    /**
     * Sets the campaign_ActivityPointers property value. 
     * @param value Value to set for the Campaign_ActivityPointers property.
     */
    public set campaign_ActivityPointers(value: Activitypointer[] | undefined) {
        this._campaign_ActivityPointers = value;
    };
    /**
     * Gets the campaign_Annotation property value. 
     * @returns a annotation
     */
    public get campaign_Annotation() {
        return this._campaign_Annotation;
    };
    /**
     * Sets the campaign_Annotation property value. 
     * @param value Value to set for the Campaign_Annotation property.
     */
    public set campaign_Annotation(value: Annotation[] | undefined) {
        this._campaign_Annotation = value;
    };
    /**
     * Gets the campaign_Appointments property value. 
     * @returns a appointment
     */
    public get campaign_Appointments() {
        return this._campaign_Appointments;
    };
    /**
     * Sets the campaign_Appointments property value. 
     * @param value Value to set for the Campaign_Appointments property.
     */
    public set campaign_Appointments(value: Appointment[] | undefined) {
        this._campaign_Appointments = value;
    };
    /**
     * Gets the campaign_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get campaign_AsyncOperations() {
        return this._campaign_AsyncOperations;
    };
    /**
     * Sets the campaign_AsyncOperations property value. 
     * @param value Value to set for the Campaign_AsyncOperations property.
     */
    public set campaign_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._campaign_AsyncOperations = value;
    };
    /**
     * Gets the campaign_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get campaign_BulkDeleteFailures() {
        return this._campaign_BulkDeleteFailures;
    };
    /**
     * Sets the campaign_BulkDeleteFailures property value. 
     * @param value Value to set for the Campaign_BulkDeleteFailures property.
     */
    public set campaign_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._campaign_BulkDeleteFailures = value;
    };
    /**
     * Gets the campaign_CampaignActivities property value. 
     * @returns a campaignactivity
     */
    public get campaign_CampaignActivities() {
        return this._campaign_CampaignActivities;
    };
    /**
     * Sets the campaign_CampaignActivities property value. 
     * @param value Value to set for the Campaign_CampaignActivities property.
     */
    public set campaign_CampaignActivities(value: Campaignactivity[] | undefined) {
        this._campaign_CampaignActivities = value;
    };
    /**
     * Gets the campaign_CampaignResponses property value. 
     * @returns a campaignresponse
     */
    public get campaign_CampaignResponses() {
        return this._campaign_CampaignResponses;
    };
    /**
     * Sets the campaign_CampaignResponses property value. 
     * @param value Value to set for the Campaign_CampaignResponses property.
     */
    public set campaign_CampaignResponses(value: Campaignresponse[] | undefined) {
        this._campaign_CampaignResponses = value;
    };
    /**
     * Gets the campaign_connections1 property value. 
     * @returns a connection
     */
    public get campaign_connections1() {
        return this._campaign_connections1;
    };
    /**
     * Sets the campaign_connections1 property value. 
     * @param value Value to set for the campaign_connections1 property.
     */
    public set campaign_connections1(value: Connection[] | undefined) {
        this._campaign_connections1 = value;
    };
    /**
     * Gets the campaign_connections2 property value. 
     * @returns a connection
     */
    public get campaign_connections2() {
        return this._campaign_connections2;
    };
    /**
     * Sets the campaign_connections2 property value. 
     * @param value Value to set for the campaign_connections2 property.
     */
    public set campaign_connections2(value: Connection[] | undefined) {
        this._campaign_connections2 = value;
    };
    /**
     * Gets the campaign_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get campaign_DuplicateBaseRecord() {
        return this._campaign_DuplicateBaseRecord;
    };
    /**
     * Sets the campaign_DuplicateBaseRecord property value. 
     * @param value Value to set for the Campaign_DuplicateBaseRecord property.
     */
    public set campaign_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._campaign_DuplicateBaseRecord = value;
    };
    /**
     * Gets the campaign_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get campaign_DuplicateMatchingRecord() {
        return this._campaign_DuplicateMatchingRecord;
    };
    /**
     * Sets the campaign_DuplicateMatchingRecord property value. 
     * @param value Value to set for the Campaign_DuplicateMatchingRecord property.
     */
    public set campaign_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._campaign_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the campaign_Emails property value. 
     * @returns a email
     */
    public get campaign_Emails() {
        return this._campaign_Emails;
    };
    /**
     * Sets the campaign_Emails property value. 
     * @param value Value to set for the Campaign_Emails property.
     */
    public set campaign_Emails(value: Email[] | undefined) {
        this._campaign_Emails = value;
    };
    /**
     * Gets the campaign_Faxes property value. 
     * @returns a fax
     */
    public get campaign_Faxes() {
        return this._campaign_Faxes;
    };
    /**
     * Sets the campaign_Faxes property value. 
     * @param value Value to set for the Campaign_Faxes property.
     */
    public set campaign_Faxes(value: Fax[] | undefined) {
        this._campaign_Faxes = value;
    };
    /**
     * Gets the campaign_IncidentResolutions property value. 
     * @returns a incidentresolution
     */
    public get campaign_IncidentResolutions() {
        return this._campaign_IncidentResolutions;
    };
    /**
     * Sets the campaign_IncidentResolutions property value. 
     * @param value Value to set for the campaign_IncidentResolutions property.
     */
    public set campaign_IncidentResolutions(value: Incidentresolution[] | undefined) {
        this._campaign_IncidentResolutions = value;
    };
    /**
     * Gets the campaign_leads property value. 
     * @returns a lead
     */
    public get campaign_leads() {
        return this._campaign_leads;
    };
    /**
     * Sets the campaign_leads property value. 
     * @param value Value to set for the campaign_leads property.
     */
    public set campaign_leads(value: Lead[] | undefined) {
        this._campaign_leads = value;
    };
    /**
     * Gets the campaign_Letters property value. 
     * @returns a letter
     */
    public get campaign_Letters() {
        return this._campaign_Letters;
    };
    /**
     * Sets the campaign_Letters property value. 
     * @param value Value to set for the Campaign_Letters property.
     */
    public set campaign_Letters(value: Letter[] | undefined) {
        this._campaign_Letters = value;
    };
    /**
     * Gets the campaign_MailboxTrackingFolder property value. 
     * @returns a mailboxtrackingfolder
     */
    public get campaign_MailboxTrackingFolder() {
        return this._campaign_MailboxTrackingFolder;
    };
    /**
     * Sets the campaign_MailboxTrackingFolder property value. 
     * @param value Value to set for the Campaign_MailboxTrackingFolder property.
     */
    public set campaign_MailboxTrackingFolder(value: Mailboxtrackingfolder[] | undefined) {
        this._campaign_MailboxTrackingFolder = value;
    };
    /**
     * Gets the campaign_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get campaign_msdyn_approvals() {
        return this._campaign_msdyn_approvals;
    };
    /**
     * Sets the campaign_msdyn_approvals property value. 
     * @param value Value to set for the campaign_msdyn_approvals property.
     */
    public set campaign_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._campaign_msdyn_approvals = value;
    };
    /**
     * Gets the campaign_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get campaign_msdyn_bookingalerts() {
        return this._campaign_msdyn_bookingalerts;
    };
    /**
     * Sets the campaign_msdyn_bookingalerts property value. 
     * @param value Value to set for the campaign_msdyn_bookingalerts property.
     */
    public set campaign_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._campaign_msdyn_bookingalerts = value;
    };
    /**
     * Gets the campaign_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get campaign_msdyn_ocliveworkitems() {
        return this._campaign_msdyn_ocliveworkitems;
    };
    /**
     * Sets the campaign_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the campaign_msdyn_ocliveworkitems property.
     */
    public set campaign_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._campaign_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the campaign_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get campaign_msdyn_ocoutboundmessages() {
        return this._campaign_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the campaign_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the campaign_msdyn_ocoutboundmessages property.
     */
    public set campaign_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._campaign_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the campaign_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get campaign_msdyn_ocsessions() {
        return this._campaign_msdyn_ocsessions;
    };
    /**
     * Sets the campaign_msdyn_ocsessions property value. 
     * @param value Value to set for the campaign_msdyn_ocsessions property.
     */
    public set campaign_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._campaign_msdyn_ocsessions = value;
    };
    /**
     * Gets the campaign_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get campaign_msfp_alerts() {
        return this._campaign_msfp_alerts;
    };
    /**
     * Sets the campaign_msfp_alerts property value. 
     * @param value Value to set for the campaign_msfp_alerts property.
     */
    public set campaign_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._campaign_msfp_alerts = value;
    };
    /**
     * Gets the campaign_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get campaign_msfp_surveyinvites() {
        return this._campaign_msfp_surveyinvites;
    };
    /**
     * Sets the campaign_msfp_surveyinvites property value. 
     * @param value Value to set for the campaign_msfp_surveyinvites property.
     */
    public set campaign_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._campaign_msfp_surveyinvites = value;
    };
    /**
     * Gets the campaign_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get campaign_msfp_surveyresponses() {
        return this._campaign_msfp_surveyresponses;
    };
    /**
     * Sets the campaign_msfp_surveyresponses property value. 
     * @param value Value to set for the campaign_msfp_surveyresponses property.
     */
    public set campaign_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._campaign_msfp_surveyresponses = value;
    };
    /**
     * Gets the campaign_opportunities property value. 
     * @returns a opportunity
     */
    public get campaign_opportunities() {
        return this._campaign_opportunities;
    };
    /**
     * Sets the campaign_opportunities property value. 
     * @param value Value to set for the campaign_opportunities property.
     */
    public set campaign_opportunities(value: Opportunity[] | undefined) {
        this._campaign_opportunities = value;
    };
    /**
     * Gets the campaign_OpportunityCloses property value. 
     * @returns a opportunityclose
     */
    public get campaign_OpportunityCloses() {
        return this._campaign_OpportunityCloses;
    };
    /**
     * Sets the campaign_OpportunityCloses property value. 
     * @param value Value to set for the campaign_OpportunityCloses property.
     */
    public set campaign_OpportunityCloses(value: Opportunityclose[] | undefined) {
        this._campaign_OpportunityCloses = value;
    };
    /**
     * Gets the campaign_OrderCloses property value. 
     * @returns a orderclose
     */
    public get campaign_OrderCloses() {
        return this._campaign_OrderCloses;
    };
    /**
     * Sets the campaign_OrderCloses property value. 
     * @param value Value to set for the campaign_OrderCloses property.
     */
    public set campaign_OrderCloses(value: Orderclose[] | undefined) {
        this._campaign_OrderCloses = value;
    };
    /**
     * Gets the campaign_orders property value. 
     * @returns a salesorder
     */
    public get campaign_orders() {
        return this._campaign_orders;
    };
    /**
     * Sets the campaign_orders property value. 
     * @param value Value to set for the campaign_orders property.
     */
    public set campaign_orders(value: Salesorder[] | undefined) {
        this._campaign_orders = value;
    };
    /**
     * Gets the campaign_Phonecalls property value. 
     * @returns a phonecall
     */
    public get campaign_Phonecalls() {
        return this._campaign_Phonecalls;
    };
    /**
     * Sets the campaign_Phonecalls property value. 
     * @param value Value to set for the Campaign_Phonecalls property.
     */
    public set campaign_Phonecalls(value: Phonecall[] | undefined) {
        this._campaign_Phonecalls = value;
    };
    /**
     * Gets the campaign_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get campaign_principalobjectattributeaccess() {
        return this._campaign_principalobjectattributeaccess;
    };
    /**
     * Sets the campaign_principalobjectattributeaccess property value. 
     * @param value Value to set for the campaign_principalobjectattributeaccess property.
     */
    public set campaign_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._campaign_principalobjectattributeaccess = value;
    };
    /**
     * Gets the campaign_ProcessSessions property value. 
     * @returns a processsession
     */
    public get campaign_ProcessSessions() {
        return this._campaign_ProcessSessions;
    };
    /**
     * Sets the campaign_ProcessSessions property value. 
     * @param value Value to set for the Campaign_ProcessSessions property.
     */
    public set campaign_ProcessSessions(value: Processsession[] | undefined) {
        this._campaign_ProcessSessions = value;
    };
    /**
     * Gets the campaign_QuoteCloses property value. 
     * @returns a quoteclose
     */
    public get campaign_QuoteCloses() {
        return this._campaign_QuoteCloses;
    };
    /**
     * Sets the campaign_QuoteCloses property value. 
     * @param value Value to set for the campaign_QuoteCloses property.
     */
    public set campaign_QuoteCloses(value: Quoteclose[] | undefined) {
        this._campaign_QuoteCloses = value;
    };
    /**
     * Gets the campaign_quotes property value. 
     * @returns a quote
     */
    public get campaign_quotes() {
        return this._campaign_quotes;
    };
    /**
     * Sets the campaign_quotes property value. 
     * @param value Value to set for the campaign_quotes property.
     */
    public set campaign_quotes(value: Quote[] | undefined) {
        this._campaign_quotes = value;
    };
    /**
     * Gets the campaign_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get campaign_RecurringAppointmentMasters() {
        return this._campaign_RecurringAppointmentMasters;
    };
    /**
     * Sets the campaign_RecurringAppointmentMasters property value. 
     * @param value Value to set for the Campaign_RecurringAppointmentMasters property.
     */
    public set campaign_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._campaign_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the campaign_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get campaign_ServiceAppointments() {
        return this._campaign_ServiceAppointments;
    };
    /**
     * Sets the campaign_ServiceAppointments property value. 
     * @param value Value to set for the Campaign_ServiceAppointments property.
     */
    public set campaign_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._campaign_ServiceAppointments = value;
    };
    /**
     * Gets the campaign_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get campaign_SocialActivities() {
        return this._campaign_SocialActivities;
    };
    /**
     * Sets the campaign_SocialActivities property value. 
     * @param value Value to set for the campaign_SocialActivities property.
     */
    public set campaign_SocialActivities(value: Socialactivity[] | undefined) {
        this._campaign_SocialActivities = value;
    };
    /**
     * Gets the campaign_SyncErrors property value. 
     * @returns a syncerror
     */
    public get campaign_SyncErrors() {
        return this._campaign_SyncErrors;
    };
    /**
     * Sets the campaign_SyncErrors property value. 
     * @param value Value to set for the Campaign_SyncErrors property.
     */
    public set campaign_SyncErrors(value: Syncerror[] | undefined) {
        this._campaign_SyncErrors = value;
    };
    /**
     * Gets the campaign_Tasks property value. 
     * @returns a task
     */
    public get campaign_Tasks() {
        return this._campaign_Tasks;
    };
    /**
     * Sets the campaign_Tasks property value. 
     * @param value Value to set for the Campaign_Tasks property.
     */
    public set campaign_Tasks(value: Task[] | undefined) {
        this._campaign_Tasks = value;
    };
    /**
     * Gets the campaigncampaign_association property value. 
     * @returns a campaign
     */
    public get campaigncampaign_association() {
        return this._campaigncampaign_association;
    };
    /**
     * Sets the campaigncampaign_association property value. 
     * @param value Value to set for the campaigncampaign_association property.
     */
    public set campaigncampaign_association(value: Campaign[] | undefined) {
        this._campaigncampaign_association = value;
    };
    /**
     * Gets the campaigncampaign_association_referenced property value. 
     * @returns a campaign
     */
    public get campaigncampaign_association_referenced() {
        return this._campaigncampaign_association_referenced;
    };
    /**
     * Sets the campaigncampaign_association_referenced property value. 
     * @param value Value to set for the campaigncampaign_association_referenced property.
     */
    public set campaigncampaign_association_referenced(value: Campaign[] | undefined) {
        this._campaigncampaign_association_referenced = value;
    };
    /**
     * Gets the campaignid property value. 
     * @returns a string
     */
    public get campaignid() {
        return this._campaignid;
    };
    /**
     * Sets the campaignid property value. 
     * @param value Value to set for the campaignid property.
     */
    public set campaignid(value: string | undefined) {
        this._campaignid = value;
    };
    /**
     * Gets the campaignlist_association property value. 
     * @returns a list
     */
    public get campaignlist_association() {
        return this._campaignlist_association;
    };
    /**
     * Sets the campaignlist_association property value. 
     * @param value Value to set for the campaignlist_association property.
     */
    public set campaignlist_association(value: List[] | undefined) {
        this._campaignlist_association = value;
    };
    /**
     * Gets the campaignproduct_association property value. 
     * @returns a product
     */
    public get campaignproduct_association() {
        return this._campaignproduct_association;
    };
    /**
     * Sets the campaignproduct_association property value. 
     * @param value Value to set for the campaignproduct_association property.
     */
    public set campaignproduct_association(value: Product[] | undefined) {
        this._campaignproduct_association = value;
    };
    /**
     * Gets the campaignsalesliterature_association property value. 
     * @returns a salesliterature
     */
    public get campaignsalesliterature_association() {
        return this._campaignsalesliterature_association;
    };
    /**
     * Sets the campaignsalesliterature_association property value. 
     * @param value Value to set for the campaignsalesliterature_association property.
     */
    public set campaignsalesliterature_association(value: Salesliterature[] | undefined) {
        this._campaignsalesliterature_association = value;
    };
    /**
     * Gets the codename property value. 
     * @returns a string
     */
    public get codename() {
        return this._codename;
    };
    /**
     * Sets the codename property value. 
     * @param value Value to set for the codename property.
     */
    public set codename(value: string | undefined) {
        this._codename = value;
    };
    /**
     * Instantiates a new campaign and sets the default values.
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
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
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
     * Gets the entityimage property value. 
     * @returns a binary
     */
    public get entityimage() {
        return this._entityimage;
    };
    /**
     * Sets the entityimage property value. 
     * @param value Value to set for the entityimage property.
     */
    public set entityimage(value: string | undefined) {
        this._entityimage = value;
    };
    /**
     * Gets the entityimage_timestamp property value. 
     * @returns a int64
     */
    public get entityimage_timestamp() {
        return this._entityimage_timestamp;
    };
    /**
     * Sets the entityimage_timestamp property value. 
     * @param value Value to set for the entityimage_timestamp property.
     */
    public set entityimage_timestamp(value: number | undefined) {
        this._entityimage_timestamp = value;
    };
    /**
     * Gets the entityimage_url property value. 
     * @returns a string
     */
    public get entityimage_url() {
        return this._entityimage_url;
    };
    /**
     * Sets the entityimage_url property value. 
     * @param value Value to set for the entityimage_url property.
     */
    public set entityimage_url(value: string | undefined) {
        this._entityimage_url = value;
    };
    /**
     * Gets the entityimageid property value. 
     * @returns a string
     */
    public get entityimageid() {
        return this._entityimageid;
    };
    /**
     * Sets the entityimageid property value. 
     * @param value Value to set for the entityimageid property.
     */
    public set entityimageid(value: string | undefined) {
        this._entityimageid = value;
    };
    /**
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * Gets the expectedresponse property value. 
     * @returns a integer
     */
    public get expectedresponse() {
        return this._expectedresponse;
    };
    /**
     * Sets the expectedresponse property value. 
     * @param value Value to set for the expectedresponse property.
     */
    public set expectedresponse(value: number | undefined) {
        this._expectedresponse = value;
    };
    /**
     * Gets the expectedrevenue property value. 
     * @returns a int64
     */
    public get expectedrevenue() {
        return this._expectedrevenue;
    };
    /**
     * Sets the expectedrevenue property value. 
     * @param value Value to set for the expectedrevenue property.
     */
    public set expectedrevenue(value: number | undefined) {
        this._expectedrevenue = value;
    };
    /**
     * Gets the expectedrevenue_base property value. 
     * @returns a int64
     */
    public get expectedrevenue_base() {
        return this._expectedrevenue_base;
    };
    /**
     * Sets the expectedrevenue_base property value. 
     * @param value Value to set for the expectedrevenue_base property.
     */
    public set expectedrevenue_base(value: number | undefined) {
        this._expectedrevenue_base = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Campaign)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Campaign)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Campaign)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Campaign)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Campaign)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Campaign)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Campaign)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Campaign)._owninguser_value = n.getStringValue(); },
            "_pricelistid_value": (o, n) => { (o as unknown as Campaign)._pricelistid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Campaign)._transactioncurrencyid_value = n.getStringValue(); },
            "actualend": (o, n) => { (o as unknown as Campaign).actualend = n.getDateValue(); },
            "actualstart": (o, n) => { (o as unknown as Campaign).actualstart = n.getDateValue(); },
            "budgetedcost": (o, n) => { (o as unknown as Campaign).budgetedcost = n.getNumberValue(); },
            "budgetedcost_base": (o, n) => { (o as unknown as Campaign).budgetedcost_base = n.getNumberValue(); },
            "campaign_activity_parties": (o, n) => { (o as unknown as Campaign).campaign_activity_parties = n.getCollectionOfObjectValues<Activityparty>(createActivitypartyFromDiscriminatorValue); },
            "campaign_ActivityPointers": (o, n) => { (o as unknown as Campaign).campaign_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "campaign_Annotation": (o, n) => { (o as unknown as Campaign).campaign_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "campaign_Appointments": (o, n) => { (o as unknown as Campaign).campaign_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "campaign_AsyncOperations": (o, n) => { (o as unknown as Campaign).campaign_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "campaign_BulkDeleteFailures": (o, n) => { (o as unknown as Campaign).campaign_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "campaign_CampaignActivities": (o, n) => { (o as unknown as Campaign).campaign_CampaignActivities = n.getCollectionOfObjectValues<Campaignactivity>(createCampaignactivityFromDiscriminatorValue); },
            "campaign_CampaignResponses": (o, n) => { (o as unknown as Campaign).campaign_CampaignResponses = n.getCollectionOfObjectValues<Campaignresponse>(createCampaignresponseFromDiscriminatorValue); },
            "campaign_connections1": (o, n) => { (o as unknown as Campaign).campaign_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "campaign_connections2": (o, n) => { (o as unknown as Campaign).campaign_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "campaign_DuplicateBaseRecord": (o, n) => { (o as unknown as Campaign).campaign_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "campaign_DuplicateMatchingRecord": (o, n) => { (o as unknown as Campaign).campaign_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "campaign_Emails": (o, n) => { (o as unknown as Campaign).campaign_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "campaign_Faxes": (o, n) => { (o as unknown as Campaign).campaign_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "campaign_IncidentResolutions": (o, n) => { (o as unknown as Campaign).campaign_IncidentResolutions = n.getCollectionOfObjectValues<Incidentresolution>(createIncidentresolutionFromDiscriminatorValue); },
            "campaign_leads": (o, n) => { (o as unknown as Campaign).campaign_leads = n.getCollectionOfObjectValues<Lead>(createLeadFromDiscriminatorValue); },
            "campaign_Letters": (o, n) => { (o as unknown as Campaign).campaign_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "campaign_MailboxTrackingFolder": (o, n) => { (o as unknown as Campaign).campaign_MailboxTrackingFolder = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "campaign_msdyn_approvals": (o, n) => { (o as unknown as Campaign).campaign_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "campaign_msdyn_bookingalerts": (o, n) => { (o as unknown as Campaign).campaign_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "campaign_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Campaign).campaign_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "campaign_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Campaign).campaign_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "campaign_msdyn_ocsessions": (o, n) => { (o as unknown as Campaign).campaign_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "campaign_msfp_alerts": (o, n) => { (o as unknown as Campaign).campaign_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "campaign_msfp_surveyinvites": (o, n) => { (o as unknown as Campaign).campaign_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "campaign_msfp_surveyresponses": (o, n) => { (o as unknown as Campaign).campaign_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "campaign_opportunities": (o, n) => { (o as unknown as Campaign).campaign_opportunities = n.getCollectionOfObjectValues<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "campaign_OpportunityCloses": (o, n) => { (o as unknown as Campaign).campaign_OpportunityCloses = n.getCollectionOfObjectValues<Opportunityclose>(createOpportunitycloseFromDiscriminatorValue); },
            "campaign_OrderCloses": (o, n) => { (o as unknown as Campaign).campaign_OrderCloses = n.getCollectionOfObjectValues<Orderclose>(createOrdercloseFromDiscriminatorValue); },
            "campaign_orders": (o, n) => { (o as unknown as Campaign).campaign_orders = n.getCollectionOfObjectValues<Salesorder>(createSalesorderFromDiscriminatorValue); },
            "campaign_Phonecalls": (o, n) => { (o as unknown as Campaign).campaign_Phonecalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "campaign_principalobjectattributeaccess": (o, n) => { (o as unknown as Campaign).campaign_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "campaign_ProcessSessions": (o, n) => { (o as unknown as Campaign).campaign_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "campaign_QuoteCloses": (o, n) => { (o as unknown as Campaign).campaign_QuoteCloses = n.getCollectionOfObjectValues<Quoteclose>(createQuotecloseFromDiscriminatorValue); },
            "campaign_quotes": (o, n) => { (o as unknown as Campaign).campaign_quotes = n.getCollectionOfObjectValues<Quote>(createQuoteFromDiscriminatorValue); },
            "campaign_RecurringAppointmentMasters": (o, n) => { (o as unknown as Campaign).campaign_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "campaign_ServiceAppointments": (o, n) => { (o as unknown as Campaign).campaign_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "campaign_SocialActivities": (o, n) => { (o as unknown as Campaign).campaign_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "campaign_SyncErrors": (o, n) => { (o as unknown as Campaign).campaign_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "campaign_Tasks": (o, n) => { (o as unknown as Campaign).campaign_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "campaigncampaign_association": (o, n) => { (o as unknown as Campaign).campaigncampaign_association = n.getCollectionOfObjectValues<Campaign>(createCampaignFromDiscriminatorValue); },
            "campaigncampaign_association_referenced": (o, n) => { (o as unknown as Campaign).campaigncampaign_association_referenced = n.getCollectionOfObjectValues<Campaign>(createCampaignFromDiscriminatorValue); },
            "campaignid": (o, n) => { (o as unknown as Campaign).campaignid = n.getStringValue(); },
            "campaignlist_association": (o, n) => { (o as unknown as Campaign).campaignlist_association = n.getCollectionOfObjectValues<List>(createListFromDiscriminatorValue); },
            "campaignproduct_association": (o, n) => { (o as unknown as Campaign).campaignproduct_association = n.getCollectionOfObjectValues<Product>(createProductFromDiscriminatorValue); },
            "campaignsalesliterature_association": (o, n) => { (o as unknown as Campaign).campaignsalesliterature_association = n.getCollectionOfObjectValues<Salesliterature>(createSalesliteratureFromDiscriminatorValue); },
            "codename": (o, n) => { (o as unknown as Campaign).codename = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Campaign).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Campaign).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Campaign).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Campaign).description = n.getStringValue(); },
            "emailaddress": (o, n) => { (o as unknown as Campaign).emailaddress = n.getStringValue(); },
            "entityimage": (o, n) => { (o as unknown as Campaign).entityimage = n.getStringValue(); },
            "entityimage_timestamp": (o, n) => { (o as unknown as Campaign).entityimage_timestamp = n.getNumberValue(); },
            "entityimage_url": (o, n) => { (o as unknown as Campaign).entityimage_url = n.getStringValue(); },
            "entityimageid": (o, n) => { (o as unknown as Campaign).entityimageid = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Campaign).exchangerate = n.getNumberValue(); },
            "expectedresponse": (o, n) => { (o as unknown as Campaign).expectedresponse = n.getNumberValue(); },
            "expectedrevenue": (o, n) => { (o as unknown as Campaign).expectedrevenue = n.getNumberValue(); },
            "expectedrevenue_base": (o, n) => { (o as unknown as Campaign).expectedrevenue_base = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Campaign).importsequencenumber = n.getNumberValue(); },
            "istemplate": (o, n) => { (o as unknown as Campaign).istemplate = n.getBooleanValue(); },
            "message": (o, n) => { (o as unknown as Campaign).message = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Campaign).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Campaign).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Campaign).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_gdproptout": (o, n) => { (o as unknown as Campaign).msdyn_gdproptout = n.getBooleanValue(); },
            "name": (o, n) => { (o as unknown as Campaign).name = n.getStringValue(); },
            "objective": (o, n) => { (o as unknown as Campaign).objective = n.getStringValue(); },
            "othercost": (o, n) => { (o as unknown as Campaign).othercost = n.getNumberValue(); },
            "othercost_base": (o, n) => { (o as unknown as Campaign).othercost_base = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Campaign).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Campaign).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Campaign).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Campaign).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Campaign).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "pricelistid": (o, n) => { (o as unknown as Campaign).pricelistid = n.getObjectValue<Pricelevel>(createPricelevelFromDiscriminatorValue); },
            "processid": (o, n) => { (o as unknown as Campaign).processid = n.getStringValue(); },
            "promotioncodename": (o, n) => { (o as unknown as Campaign).promotioncodename = n.getStringValue(); },
            "proposedend": (o, n) => { (o as unknown as Campaign).proposedend = n.getDateValue(); },
            "proposedstart": (o, n) => { (o as unknown as Campaign).proposedstart = n.getDateValue(); },
            "stageid": (o, n) => { (o as unknown as Campaign).stageid = n.getStringValue(); },
            "stageid_processstage": (o, n) => { (o as unknown as Campaign).stageid_processstage = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Campaign).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Campaign).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Campaign).timezoneruleversionnumber = n.getNumberValue(); },
            "tmpregardingobjectid": (o, n) => { (o as unknown as Campaign).tmpregardingobjectid = n.getStringValue(); },
            "totalactualcost": (o, n) => { (o as unknown as Campaign).totalactualcost = n.getNumberValue(); },
            "totalactualcost_base": (o, n) => { (o as unknown as Campaign).totalactualcost_base = n.getNumberValue(); },
            "totalcampaignactivityactualcost": (o, n) => { (o as unknown as Campaign).totalcampaignactivityactualcost = n.getNumberValue(); },
            "totalcampaignactivityactualcost_base": (o, n) => { (o as unknown as Campaign).totalcampaignactivityactualcost_base = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Campaign).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "traversedpath": (o, n) => { (o as unknown as Campaign).traversedpath = n.getStringValue(); },
            "typecode": (o, n) => { (o as unknown as Campaign).typecode = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Campaign).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Campaign).versionnumber = n.getNumberValue(); },
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
     * Gets the istemplate property value. 
     * @returns a boolean
     */
    public get istemplate() {
        return this._istemplate;
    };
    /**
     * Sets the istemplate property value. 
     * @param value Value to set for the istemplate property.
     */
    public set istemplate(value: boolean | undefined) {
        this._istemplate = value;
    };
    /**
     * Gets the message property value. 
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. 
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
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
     * Gets the msdyn_gdproptout property value. 
     * @returns a boolean
     */
    public get msdyn_gdproptout() {
        return this._msdyn_gdproptout;
    };
    /**
     * Sets the msdyn_gdproptout property value. 
     * @param value Value to set for the msdyn_gdproptout property.
     */
    public set msdyn_gdproptout(value: boolean | undefined) {
        this._msdyn_gdproptout = value;
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
     * Gets the objective property value. 
     * @returns a string
     */
    public get objective() {
        return this._objective;
    };
    /**
     * Sets the objective property value. 
     * @param value Value to set for the objective property.
     */
    public set objective(value: string | undefined) {
        this._objective = value;
    };
    /**
     * Gets the othercost property value. 
     * @returns a int64
     */
    public get othercost() {
        return this._othercost;
    };
    /**
     * Sets the othercost property value. 
     * @param value Value to set for the othercost property.
     */
    public set othercost(value: number | undefined) {
        this._othercost = value;
    };
    /**
     * Gets the othercost_base property value. 
     * @returns a int64
     */
    public get othercost_base() {
        return this._othercost_base;
    };
    /**
     * Sets the othercost_base property value. 
     * @param value Value to set for the othercost_base property.
     */
    public set othercost_base(value: number | undefined) {
        this._othercost_base = value;
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
     * Gets the pricelistid property value. 
     * @returns a pricelevel
     */
    public get pricelistid() {
        return this._pricelistid;
    };
    /**
     * Sets the pricelistid property value. 
     * @param value Value to set for the pricelistid property.
     */
    public set pricelistid(value: Pricelevel | undefined) {
        this._pricelistid = value;
    };
    /**
     * Gets the processid property value. 
     * @returns a string
     */
    public get processid() {
        return this._processid;
    };
    /**
     * Sets the processid property value. 
     * @param value Value to set for the processid property.
     */
    public set processid(value: string | undefined) {
        this._processid = value;
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
     * Gets the proposedend property value. 
     * @returns a Date
     */
    public get proposedend() {
        return this._proposedend;
    };
    /**
     * Sets the proposedend property value. 
     * @param value Value to set for the proposedend property.
     */
    public set proposedend(value: Date | undefined) {
        this._proposedend = value;
    };
    /**
     * Gets the proposedstart property value. 
     * @returns a Date
     */
    public get proposedstart() {
        return this._proposedstart;
    };
    /**
     * Sets the proposedstart property value. 
     * @param value Value to set for the proposedstart property.
     */
    public set proposedstart(value: Date | undefined) {
        this._proposedstart = value;
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
        writer.writeStringValue("_pricelistid_value", this._pricelistid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeDateValue("actualend", this.actualend);
        writer.writeDateValue("actualstart", this.actualstart);
        writer.writeNumberValue("budgetedcost", this.budgetedcost);
        writer.writeNumberValue("budgetedcost_base", this.budgetedcost_base);
        writer.writeCollectionOfObjectValues<Activityparty>("campaign_activity_parties", this.campaign_activity_parties);
        writer.writeCollectionOfObjectValues<Activitypointer>("campaign_ActivityPointers", this.campaign_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("campaign_Annotation", this.campaign_Annotation);
        writer.writeCollectionOfObjectValues<Appointment>("campaign_Appointments", this.campaign_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("campaign_AsyncOperations", this.campaign_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("campaign_BulkDeleteFailures", this.campaign_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Campaignactivity>("campaign_CampaignActivities", this.campaign_CampaignActivities);
        writer.writeCollectionOfObjectValues<Campaignresponse>("campaign_CampaignResponses", this.campaign_CampaignResponses);
        writer.writeCollectionOfObjectValues<Connection>("campaign_connections1", this.campaign_connections1);
        writer.writeCollectionOfObjectValues<Connection>("campaign_connections2", this.campaign_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("campaign_DuplicateBaseRecord", this.campaign_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("campaign_DuplicateMatchingRecord", this.campaign_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("campaign_Emails", this.campaign_Emails);
        writer.writeCollectionOfObjectValues<Fax>("campaign_Faxes", this.campaign_Faxes);
        writer.writeCollectionOfObjectValues<Incidentresolution>("campaign_IncidentResolutions", this.campaign_IncidentResolutions);
        writer.writeCollectionOfObjectValues<Lead>("campaign_leads", this.campaign_leads);
        writer.writeCollectionOfObjectValues<Letter>("campaign_Letters", this.campaign_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("campaign_MailboxTrackingFolder", this.campaign_MailboxTrackingFolder);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("campaign_msdyn_approvals", this.campaign_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("campaign_msdyn_bookingalerts", this.campaign_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("campaign_msdyn_ocliveworkitems", this.campaign_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("campaign_msdyn_ocoutboundmessages", this.campaign_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("campaign_msdyn_ocsessions", this.campaign_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("campaign_msfp_alerts", this.campaign_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("campaign_msfp_surveyinvites", this.campaign_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("campaign_msfp_surveyresponses", this.campaign_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Opportunity>("campaign_opportunities", this.campaign_opportunities);
        writer.writeCollectionOfObjectValues<Opportunityclose>("campaign_OpportunityCloses", this.campaign_OpportunityCloses);
        writer.writeCollectionOfObjectValues<Orderclose>("campaign_OrderCloses", this.campaign_OrderCloses);
        writer.writeCollectionOfObjectValues<Salesorder>("campaign_orders", this.campaign_orders);
        writer.writeCollectionOfObjectValues<Phonecall>("campaign_Phonecalls", this.campaign_Phonecalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("campaign_principalobjectattributeaccess", this.campaign_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("campaign_ProcessSessions", this.campaign_ProcessSessions);
        writer.writeCollectionOfObjectValues<Quoteclose>("campaign_QuoteCloses", this.campaign_QuoteCloses);
        writer.writeCollectionOfObjectValues<Quote>("campaign_quotes", this.campaign_quotes);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("campaign_RecurringAppointmentMasters", this.campaign_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("campaign_ServiceAppointments", this.campaign_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("campaign_SocialActivities", this.campaign_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("campaign_SyncErrors", this.campaign_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("campaign_Tasks", this.campaign_Tasks);
        writer.writeCollectionOfObjectValues<Campaign>("campaigncampaign_association", this.campaigncampaign_association);
        writer.writeCollectionOfObjectValues<Campaign>("campaigncampaign_association_referenced", this.campaigncampaign_association_referenced);
        writer.writeStringValue("campaignid", this.campaignid);
        writer.writeCollectionOfObjectValues<List>("campaignlist_association", this.campaignlist_association);
        writer.writeCollectionOfObjectValues<Product>("campaignproduct_association", this.campaignproduct_association);
        writer.writeCollectionOfObjectValues<Salesliterature>("campaignsalesliterature_association", this.campaignsalesliterature_association);
        writer.writeStringValue("codename", this.codename);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("emailaddress", this.emailaddress);
        writer.writeStringValue("entityimage", this.entityimage);
        writer.writeNumberValue("entityimage_timestamp", this.entityimage_timestamp);
        writer.writeStringValue("entityimage_url", this.entityimage_url);
        writer.writeStringValue("entityimageid", this.entityimageid);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("expectedresponse", this.expectedresponse);
        writer.writeNumberValue("expectedrevenue", this.expectedrevenue);
        writer.writeNumberValue("expectedrevenue_base", this.expectedrevenue_base);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeBooleanValue("istemplate", this.istemplate);
        writer.writeStringValue("message", this.message);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeBooleanValue("msdyn_gdproptout", this.msdyn_gdproptout);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("objective", this.objective);
        writer.writeNumberValue("othercost", this.othercost);
        writer.writeNumberValue("othercost_base", this.othercost_base);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeObjectValue<Pricelevel>("pricelistid", this.pricelistid);
        writer.writeStringValue("processid", this.processid);
        writer.writeStringValue("promotioncodename", this.promotioncodename);
        writer.writeDateValue("proposedend", this.proposedend);
        writer.writeDateValue("proposedstart", this.proposedstart);
        writer.writeStringValue("stageid", this.stageid);
        writer.writeObjectValue<Processstage>("stageid_processstage", this.stageid_processstage);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("tmpregardingobjectid", this.tmpregardingobjectid);
        writer.writeNumberValue("totalactualcost", this.totalactualcost);
        writer.writeNumberValue("totalactualcost_base", this.totalactualcost_base);
        writer.writeNumberValue("totalcampaignactivityactualcost", this.totalcampaignactivityactualcost);
        writer.writeNumberValue("totalcampaignactivityactualcost_base", this.totalcampaignactivityactualcost_base);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("traversedpath", this.traversedpath);
        writer.writeNumberValue("typecode", this.typecode);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the stageid property value. 
     * @returns a string
     */
    public get stageid() {
        return this._stageid;
    };
    /**
     * Sets the stageid property value. 
     * @param value Value to set for the stageid property.
     */
    public set stageid(value: string | undefined) {
        this._stageid = value;
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
     * Gets the tmpregardingobjectid property value. 
     * @returns a string
     */
    public get tmpregardingobjectid() {
        return this._tmpregardingobjectid;
    };
    /**
     * Sets the tmpregardingobjectid property value. 
     * @param value Value to set for the tmpregardingobjectid property.
     */
    public set tmpregardingobjectid(value: string | undefined) {
        this._tmpregardingobjectid = value;
    };
    /**
     * Gets the totalactualcost property value. 
     * @returns a int64
     */
    public get totalactualcost() {
        return this._totalactualcost;
    };
    /**
     * Sets the totalactualcost property value. 
     * @param value Value to set for the totalactualcost property.
     */
    public set totalactualcost(value: number | undefined) {
        this._totalactualcost = value;
    };
    /**
     * Gets the totalactualcost_base property value. 
     * @returns a int64
     */
    public get totalactualcost_base() {
        return this._totalactualcost_base;
    };
    /**
     * Sets the totalactualcost_base property value. 
     * @param value Value to set for the totalactualcost_base property.
     */
    public set totalactualcost_base(value: number | undefined) {
        this._totalactualcost_base = value;
    };
    /**
     * Gets the totalcampaignactivityactualcost property value. 
     * @returns a int64
     */
    public get totalcampaignactivityactualcost() {
        return this._totalcampaignactivityactualcost;
    };
    /**
     * Sets the totalcampaignactivityactualcost property value. 
     * @param value Value to set for the totalcampaignactivityactualcost property.
     */
    public set totalcampaignactivityactualcost(value: number | undefined) {
        this._totalcampaignactivityactualcost = value;
    };
    /**
     * Gets the totalcampaignactivityactualcost_base property value. 
     * @returns a int64
     */
    public get totalcampaignactivityactualcost_base() {
        return this._totalcampaignactivityactualcost_base;
    };
    /**
     * Sets the totalcampaignactivityactualcost_base property value. 
     * @param value Value to set for the totalcampaignactivityactualcost_base property.
     */
    public set totalcampaignactivityactualcost_base(value: number | undefined) {
        this._totalcampaignactivityactualcost_base = value;
    };
    /**
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
    };
    /**
     * Gets the traversedpath property value. 
     * @returns a string
     */
    public get traversedpath() {
        return this._traversedpath;
    };
    /**
     * Sets the traversedpath property value. 
     * @param value Value to set for the traversedpath property.
     */
    public set traversedpath(value: string | undefined) {
        this._traversedpath = value;
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
