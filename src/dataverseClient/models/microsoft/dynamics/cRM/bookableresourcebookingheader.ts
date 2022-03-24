import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcebookingFromDiscriminatorValue} from './createBookableresourcebookingFromDiscriminatorValue';
import {createBookableresourcecategoryFromDiscriminatorValue} from './createBookableresourcecategoryFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBookingstatusFromDiscriminatorValue} from './createBookingstatusFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBulkoperationFromDiscriminatorValue} from './createBulkoperationFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCampaignactivityFromDiscriminatorValue} from './createCampaignactivityFromDiscriminatorValue';
import {createCampaignresponseFromDiscriminatorValue} from './createCampaignresponseFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createIncidentresolutionFromDiscriminatorValue} from './createIncidentresolutionFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createMsdyn_projectteamFromDiscriminatorValue} from './createMsdyn_projectteamFromDiscriminatorValue';
import {createMsdyn_resourcerequirementFromDiscriminatorValue} from './createMsdyn_resourcerequirementFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createOpportunitycloseFromDiscriminatorValue} from './createOpportunitycloseFromDiscriminatorValue';
import {createOrdercloseFromDiscriminatorValue} from './createOrdercloseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQuotecloseFromDiscriminatorValue} from './createQuotecloseFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bookableresource, Bookableresourcebooking, Bookableresourcecategory, Bookingstatus, Bulkdeletefailure, Bulkoperation, Businessunit, Campaignactivity, Campaignresponse, Crmbaseentity, Duplicaterecord, Email, Fax, Incidentresolution, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_project, Msdyn_projectteam, Msdyn_resourcerequirement, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Opportunityclose, Orderclose, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Quoteclose, Recurringappointmentmaster, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Bookableresourcebookingheader extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_bookableresourceid_value?: string | undefined;
    private __msdyn_bookingstatusid_value?: string | undefined;
    private __msdyn_projectid_value?: string | undefined;
    private __msdyn_projectteamid_value?: string | undefined;
    private __msdyn_resourcecategoryid_value?: string | undefined;
    private __msdyn_resourcerequirement_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _bookableresourcebookingheader_ActivityPointers?: Activitypointer[] | undefined;
    private _bookableresourcebookingheader_Annotations?: Annotation[] | undefined;
    private _bookableresourcebookingheader_Appointments?: Appointment[] | undefined;
    private _bookableresourcebookingheader_AsyncOperations?: Asyncoperation[] | undefined;
    private _bookableresourcebookingheader_bookableresourcebooking_Header?: Bookableresourcebooking[] | undefined;
    private _bookableresourcebookingheader_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _bookableresourcebookingheader_BulkOperations?: Bulkoperation[] | undefined;
    private _bookableresourcebookingheader_CampaignActivities?: Campaignactivity[] | undefined;
    private _bookableresourcebookingheader_CampaignResponses?: Campaignresponse[] | undefined;
    private _bookableresourcebookingheader_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _bookableresourcebookingheader_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _bookableresourcebookingheader_Emails?: Email[] | undefined;
    private _bookableresourcebookingheader_Faxes?: Fax[] | undefined;
    private _bookableresourcebookingheader_IncidentResolutions?: Incidentresolution[] | undefined;
    private _bookableresourcebookingheader_Letters?: Letter[] | undefined;
    private _bookableresourcebookingheader_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _bookableresourcebookingheader_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _bookableresourcebookingheader_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _bookableresourcebookingheader_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _bookableresourcebookingheader_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _bookableresourcebookingheader_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _bookableresourcebookingheader_msfp_alerts?: Msfp_alert[] | undefined;
    private _bookableresourcebookingheader_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _bookableresourcebookingheader_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _bookableresourcebookingheader_OpportunityCloses?: Opportunityclose[] | undefined;
    private _bookableresourcebookingheader_OrderCloses?: Orderclose[] | undefined;
    private _bookableresourcebookingheader_PhoneCalls?: Phonecall[] | undefined;
    private _bookableresourcebookingheader_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _bookableresourcebookingheader_ProcessSession?: Processsession[] | undefined;
    private _bookableresourcebookingheader_QuoteCloses?: Quoteclose[] | undefined;
    private _bookableresourcebookingheader_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _bookableresourcebookingheader_ServiceAppointments?: Serviceappointment[] | undefined;
    private _bookableresourcebookingheader_SocialActivities?: Socialactivity[] | undefined;
    private _bookableResourceBookingHeader_SyncErrors?: Syncerror[] | undefined;
    private _bookableresourcebookingheader_Tasks?: Task[] | undefined;
    private _bookableresourcebookingheaderid?: string | undefined;
    private _createdbyname?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfbyname?: Systemuser | undefined;
    private _duration?: number | undefined;
    private _endtime?: Date | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedbyname?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfbyname?: Systemuser | undefined;
    private _msdyn_bookableresourceid?: Bookableresource | undefined;
    private _msdyn_bookingstatusid?: Bookingstatus | undefined;
    private _msdyn_bookingtype?: number | undefined;
    private _msdyn_projectid?: Msdyn_project | undefined;
    private _msdyn_projectteamid?: Msdyn_projectteam | undefined;
    private _msdyn_resourcecategoryid?: Bookableresourcecategory | undefined;
    private _msdyn_ResourceRequirement?: Msdyn_resourcerequirement | undefined;
    private _msdyn_resourcerequirement_bookingheader?: Msdyn_resourcerequirement[] | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _processid?: string | undefined;
    private _stageid?: string | undefined;
    private _starttime?: Date | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _traversedpath?: string | undefined;
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
     * Gets the _msdyn_bookableresourceid_value property value. 
     * @returns a string
     */
    public get _msdyn_bookableresourceid_value() {
        return this.__msdyn_bookableresourceid_value;
    };
    /**
     * Sets the _msdyn_bookableresourceid_value property value. 
     * @param value Value to set for the _msdyn_bookableresourceid_value property.
     */
    public set _msdyn_bookableresourceid_value(value: string | undefined) {
        this.__msdyn_bookableresourceid_value = value;
    };
    /**
     * Gets the _msdyn_bookingstatusid_value property value. 
     * @returns a string
     */
    public get _msdyn_bookingstatusid_value() {
        return this.__msdyn_bookingstatusid_value;
    };
    /**
     * Sets the _msdyn_bookingstatusid_value property value. 
     * @param value Value to set for the _msdyn_bookingstatusid_value property.
     */
    public set _msdyn_bookingstatusid_value(value: string | undefined) {
        this.__msdyn_bookingstatusid_value = value;
    };
    /**
     * Gets the _msdyn_projectid_value property value. 
     * @returns a string
     */
    public get _msdyn_projectid_value() {
        return this.__msdyn_projectid_value;
    };
    /**
     * Sets the _msdyn_projectid_value property value. 
     * @param value Value to set for the _msdyn_projectid_value property.
     */
    public set _msdyn_projectid_value(value: string | undefined) {
        this.__msdyn_projectid_value = value;
    };
    /**
     * Gets the _msdyn_projectteamid_value property value. 
     * @returns a string
     */
    public get _msdyn_projectteamid_value() {
        return this.__msdyn_projectteamid_value;
    };
    /**
     * Sets the _msdyn_projectteamid_value property value. 
     * @param value Value to set for the _msdyn_projectteamid_value property.
     */
    public set _msdyn_projectteamid_value(value: string | undefined) {
        this.__msdyn_projectteamid_value = value;
    };
    /**
     * Gets the _msdyn_resourcecategoryid_value property value. 
     * @returns a string
     */
    public get _msdyn_resourcecategoryid_value() {
        return this.__msdyn_resourcecategoryid_value;
    };
    /**
     * Sets the _msdyn_resourcecategoryid_value property value. 
     * @param value Value to set for the _msdyn_resourcecategoryid_value property.
     */
    public set _msdyn_resourcecategoryid_value(value: string | undefined) {
        this.__msdyn_resourcecategoryid_value = value;
    };
    /**
     * Gets the _msdyn_resourcerequirement_value property value. 
     * @returns a string
     */
    public get _msdyn_resourcerequirement_value() {
        return this.__msdyn_resourcerequirement_value;
    };
    /**
     * Sets the _msdyn_resourcerequirement_value property value. 
     * @param value Value to set for the _msdyn_resourcerequirement_value property.
     */
    public set _msdyn_resourcerequirement_value(value: string | undefined) {
        this.__msdyn_resourcerequirement_value = value;
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
     * Gets the bookableresourcebookingheader_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get bookableresourcebookingheader_ActivityPointers() {
        return this._bookableresourcebookingheader_ActivityPointers;
    };
    /**
     * Sets the bookableresourcebookingheader_ActivityPointers property value. 
     * @param value Value to set for the bookableresourcebookingheader_ActivityPointers property.
     */
    public set bookableresourcebookingheader_ActivityPointers(value: Activitypointer[] | undefined) {
        this._bookableresourcebookingheader_ActivityPointers = value;
    };
    /**
     * Gets the bookableresourcebookingheader_Annotations property value. 
     * @returns a annotation
     */
    public get bookableresourcebookingheader_Annotations() {
        return this._bookableresourcebookingheader_Annotations;
    };
    /**
     * Sets the bookableresourcebookingheader_Annotations property value. 
     * @param value Value to set for the bookableresourcebookingheader_Annotations property.
     */
    public set bookableresourcebookingheader_Annotations(value: Annotation[] | undefined) {
        this._bookableresourcebookingheader_Annotations = value;
    };
    /**
     * Gets the bookableresourcebookingheader_Appointments property value. 
     * @returns a appointment
     */
    public get bookableresourcebookingheader_Appointments() {
        return this._bookableresourcebookingheader_Appointments;
    };
    /**
     * Sets the bookableresourcebookingheader_Appointments property value. 
     * @param value Value to set for the bookableresourcebookingheader_Appointments property.
     */
    public set bookableresourcebookingheader_Appointments(value: Appointment[] | undefined) {
        this._bookableresourcebookingheader_Appointments = value;
    };
    /**
     * Gets the bookableresourcebookingheader_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get bookableresourcebookingheader_AsyncOperations() {
        return this._bookableresourcebookingheader_AsyncOperations;
    };
    /**
     * Sets the bookableresourcebookingheader_AsyncOperations property value. 
     * @param value Value to set for the bookableresourcebookingheader_AsyncOperations property.
     */
    public set bookableresourcebookingheader_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._bookableresourcebookingheader_AsyncOperations = value;
    };
    /**
     * Gets the bookableresourcebookingheader_bookableresourcebooking_Header property value. 
     * @returns a bookableresourcebooking
     */
    public get bookableresourcebookingheader_bookableresourcebooking_Header() {
        return this._bookableresourcebookingheader_bookableresourcebooking_Header;
    };
    /**
     * Sets the bookableresourcebookingheader_bookableresourcebooking_Header property value. 
     * @param value Value to set for the bookableresourcebookingheader_bookableresourcebooking_Header property.
     */
    public set bookableresourcebookingheader_bookableresourcebooking_Header(value: Bookableresourcebooking[] | undefined) {
        this._bookableresourcebookingheader_bookableresourcebooking_Header = value;
    };
    /**
     * Gets the bookableresourcebookingheader_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get bookableresourcebookingheader_BulkDeleteFailures() {
        return this._bookableresourcebookingheader_BulkDeleteFailures;
    };
    /**
     * Sets the bookableresourcebookingheader_BulkDeleteFailures property value. 
     * @param value Value to set for the bookableresourcebookingheader_BulkDeleteFailures property.
     */
    public set bookableresourcebookingheader_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._bookableresourcebookingheader_BulkDeleteFailures = value;
    };
    /**
     * Gets the bookableresourcebookingheader_BulkOperations property value. 
     * @returns a bulkoperation
     */
    public get bookableresourcebookingheader_BulkOperations() {
        return this._bookableresourcebookingheader_BulkOperations;
    };
    /**
     * Sets the bookableresourcebookingheader_BulkOperations property value. 
     * @param value Value to set for the bookableresourcebookingheader_BulkOperations property.
     */
    public set bookableresourcebookingheader_BulkOperations(value: Bulkoperation[] | undefined) {
        this._bookableresourcebookingheader_BulkOperations = value;
    };
    /**
     * Gets the bookableresourcebookingheader_CampaignActivities property value. 
     * @returns a campaignactivity
     */
    public get bookableresourcebookingheader_CampaignActivities() {
        return this._bookableresourcebookingheader_CampaignActivities;
    };
    /**
     * Sets the bookableresourcebookingheader_CampaignActivities property value. 
     * @param value Value to set for the bookableresourcebookingheader_CampaignActivities property.
     */
    public set bookableresourcebookingheader_CampaignActivities(value: Campaignactivity[] | undefined) {
        this._bookableresourcebookingheader_CampaignActivities = value;
    };
    /**
     * Gets the bookableresourcebookingheader_CampaignResponses property value. 
     * @returns a campaignresponse
     */
    public get bookableresourcebookingheader_CampaignResponses() {
        return this._bookableresourcebookingheader_CampaignResponses;
    };
    /**
     * Sets the bookableresourcebookingheader_CampaignResponses property value. 
     * @param value Value to set for the bookableresourcebookingheader_CampaignResponses property.
     */
    public set bookableresourcebookingheader_CampaignResponses(value: Campaignresponse[] | undefined) {
        this._bookableresourcebookingheader_CampaignResponses = value;
    };
    /**
     * Gets the bookableresourcebookingheader_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get bookableresourcebookingheader_DuplicateBaseRecord() {
        return this._bookableresourcebookingheader_DuplicateBaseRecord;
    };
    /**
     * Sets the bookableresourcebookingheader_DuplicateBaseRecord property value. 
     * @param value Value to set for the bookableresourcebookingheader_DuplicateBaseRecord property.
     */
    public set bookableresourcebookingheader_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._bookableresourcebookingheader_DuplicateBaseRecord = value;
    };
    /**
     * Gets the bookableresourcebookingheader_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get bookableresourcebookingheader_DuplicateMatchingRecord() {
        return this._bookableresourcebookingheader_DuplicateMatchingRecord;
    };
    /**
     * Sets the bookableresourcebookingheader_DuplicateMatchingRecord property value. 
     * @param value Value to set for the bookableresourcebookingheader_DuplicateMatchingRecord property.
     */
    public set bookableresourcebookingheader_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._bookableresourcebookingheader_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the bookableresourcebookingheader_Emails property value. 
     * @returns a email
     */
    public get bookableresourcebookingheader_Emails() {
        return this._bookableresourcebookingheader_Emails;
    };
    /**
     * Sets the bookableresourcebookingheader_Emails property value. 
     * @param value Value to set for the bookableresourcebookingheader_Emails property.
     */
    public set bookableresourcebookingheader_Emails(value: Email[] | undefined) {
        this._bookableresourcebookingheader_Emails = value;
    };
    /**
     * Gets the bookableresourcebookingheader_Faxes property value. 
     * @returns a fax
     */
    public get bookableresourcebookingheader_Faxes() {
        return this._bookableresourcebookingheader_Faxes;
    };
    /**
     * Sets the bookableresourcebookingheader_Faxes property value. 
     * @param value Value to set for the bookableresourcebookingheader_Faxes property.
     */
    public set bookableresourcebookingheader_Faxes(value: Fax[] | undefined) {
        this._bookableresourcebookingheader_Faxes = value;
    };
    /**
     * Gets the bookableresourcebookingheader_IncidentResolutions property value. 
     * @returns a incidentresolution
     */
    public get bookableresourcebookingheader_IncidentResolutions() {
        return this._bookableresourcebookingheader_IncidentResolutions;
    };
    /**
     * Sets the bookableresourcebookingheader_IncidentResolutions property value. 
     * @param value Value to set for the bookableresourcebookingheader_IncidentResolutions property.
     */
    public set bookableresourcebookingheader_IncidentResolutions(value: Incidentresolution[] | undefined) {
        this._bookableresourcebookingheader_IncidentResolutions = value;
    };
    /**
     * Gets the bookableresourcebookingheader_Letters property value. 
     * @returns a letter
     */
    public get bookableresourcebookingheader_Letters() {
        return this._bookableresourcebookingheader_Letters;
    };
    /**
     * Sets the bookableresourcebookingheader_Letters property value. 
     * @param value Value to set for the bookableresourcebookingheader_Letters property.
     */
    public set bookableresourcebookingheader_Letters(value: Letter[] | undefined) {
        this._bookableresourcebookingheader_Letters = value;
    };
    /**
     * Gets the bookableresourcebookingheader_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get bookableresourcebookingheader_MailboxTrackingFolders() {
        return this._bookableresourcebookingheader_MailboxTrackingFolders;
    };
    /**
     * Sets the bookableresourcebookingheader_MailboxTrackingFolders property value. 
     * @param value Value to set for the bookableresourcebookingheader_MailboxTrackingFolders property.
     */
    public set bookableresourcebookingheader_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._bookableresourcebookingheader_MailboxTrackingFolders = value;
    };
    /**
     * Gets the bookableresourcebookingheader_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get bookableresourcebookingheader_msdyn_approvals() {
        return this._bookableresourcebookingheader_msdyn_approvals;
    };
    /**
     * Sets the bookableresourcebookingheader_msdyn_approvals property value. 
     * @param value Value to set for the bookableresourcebookingheader_msdyn_approvals property.
     */
    public set bookableresourcebookingheader_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._bookableresourcebookingheader_msdyn_approvals = value;
    };
    /**
     * Gets the bookableresourcebookingheader_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get bookableresourcebookingheader_msdyn_bookingalerts() {
        return this._bookableresourcebookingheader_msdyn_bookingalerts;
    };
    /**
     * Sets the bookableresourcebookingheader_msdyn_bookingalerts property value. 
     * @param value Value to set for the bookableresourcebookingheader_msdyn_bookingalerts property.
     */
    public set bookableresourcebookingheader_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._bookableresourcebookingheader_msdyn_bookingalerts = value;
    };
    /**
     * Gets the bookableresourcebookingheader_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get bookableresourcebookingheader_msdyn_ocliveworkitems() {
        return this._bookableresourcebookingheader_msdyn_ocliveworkitems;
    };
    /**
     * Sets the bookableresourcebookingheader_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the bookableresourcebookingheader_msdyn_ocliveworkitems property.
     */
    public set bookableresourcebookingheader_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._bookableresourcebookingheader_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the bookableresourcebookingheader_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get bookableresourcebookingheader_msdyn_ocoutboundmessages() {
        return this._bookableresourcebookingheader_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the bookableresourcebookingheader_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the bookableresourcebookingheader_msdyn_ocoutboundmessages property.
     */
    public set bookableresourcebookingheader_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._bookableresourcebookingheader_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the bookableresourcebookingheader_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get bookableresourcebookingheader_msdyn_ocsessions() {
        return this._bookableresourcebookingheader_msdyn_ocsessions;
    };
    /**
     * Sets the bookableresourcebookingheader_msdyn_ocsessions property value. 
     * @param value Value to set for the bookableresourcebookingheader_msdyn_ocsessions property.
     */
    public set bookableresourcebookingheader_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._bookableresourcebookingheader_msdyn_ocsessions = value;
    };
    /**
     * Gets the bookableresourcebookingheader_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get bookableresourcebookingheader_msfp_alerts() {
        return this._bookableresourcebookingheader_msfp_alerts;
    };
    /**
     * Sets the bookableresourcebookingheader_msfp_alerts property value. 
     * @param value Value to set for the bookableresourcebookingheader_msfp_alerts property.
     */
    public set bookableresourcebookingheader_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._bookableresourcebookingheader_msfp_alerts = value;
    };
    /**
     * Gets the bookableresourcebookingheader_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get bookableresourcebookingheader_msfp_surveyinvites() {
        return this._bookableresourcebookingheader_msfp_surveyinvites;
    };
    /**
     * Sets the bookableresourcebookingheader_msfp_surveyinvites property value. 
     * @param value Value to set for the bookableresourcebookingheader_msfp_surveyinvites property.
     */
    public set bookableresourcebookingheader_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._bookableresourcebookingheader_msfp_surveyinvites = value;
    };
    /**
     * Gets the bookableresourcebookingheader_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get bookableresourcebookingheader_msfp_surveyresponses() {
        return this._bookableresourcebookingheader_msfp_surveyresponses;
    };
    /**
     * Sets the bookableresourcebookingheader_msfp_surveyresponses property value. 
     * @param value Value to set for the bookableresourcebookingheader_msfp_surveyresponses property.
     */
    public set bookableresourcebookingheader_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._bookableresourcebookingheader_msfp_surveyresponses = value;
    };
    /**
     * Gets the bookableresourcebookingheader_OpportunityCloses property value. 
     * @returns a opportunityclose
     */
    public get bookableresourcebookingheader_OpportunityCloses() {
        return this._bookableresourcebookingheader_OpportunityCloses;
    };
    /**
     * Sets the bookableresourcebookingheader_OpportunityCloses property value. 
     * @param value Value to set for the bookableresourcebookingheader_OpportunityCloses property.
     */
    public set bookableresourcebookingheader_OpportunityCloses(value: Opportunityclose[] | undefined) {
        this._bookableresourcebookingheader_OpportunityCloses = value;
    };
    /**
     * Gets the bookableresourcebookingheader_OrderCloses property value. 
     * @returns a orderclose
     */
    public get bookableresourcebookingheader_OrderCloses() {
        return this._bookableresourcebookingheader_OrderCloses;
    };
    /**
     * Sets the bookableresourcebookingheader_OrderCloses property value. 
     * @param value Value to set for the bookableresourcebookingheader_OrderCloses property.
     */
    public set bookableresourcebookingheader_OrderCloses(value: Orderclose[] | undefined) {
        this._bookableresourcebookingheader_OrderCloses = value;
    };
    /**
     * Gets the bookableresourcebookingheader_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get bookableresourcebookingheader_PhoneCalls() {
        return this._bookableresourcebookingheader_PhoneCalls;
    };
    /**
     * Sets the bookableresourcebookingheader_PhoneCalls property value. 
     * @param value Value to set for the bookableresourcebookingheader_PhoneCalls property.
     */
    public set bookableresourcebookingheader_PhoneCalls(value: Phonecall[] | undefined) {
        this._bookableresourcebookingheader_PhoneCalls = value;
    };
    /**
     * Gets the bookableresourcebookingheader_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get bookableresourcebookingheader_PrincipalObjectAttributeAccesses() {
        return this._bookableresourcebookingheader_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the bookableresourcebookingheader_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the bookableresourcebookingheader_PrincipalObjectAttributeAccesses property.
     */
    public set bookableresourcebookingheader_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._bookableresourcebookingheader_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the bookableresourcebookingheader_ProcessSession property value. 
     * @returns a processsession
     */
    public get bookableresourcebookingheader_ProcessSession() {
        return this._bookableresourcebookingheader_ProcessSession;
    };
    /**
     * Sets the bookableresourcebookingheader_ProcessSession property value. 
     * @param value Value to set for the bookableresourcebookingheader_ProcessSession property.
     */
    public set bookableresourcebookingheader_ProcessSession(value: Processsession[] | undefined) {
        this._bookableresourcebookingheader_ProcessSession = value;
    };
    /**
     * Gets the bookableresourcebookingheader_QuoteCloses property value. 
     * @returns a quoteclose
     */
    public get bookableresourcebookingheader_QuoteCloses() {
        return this._bookableresourcebookingheader_QuoteCloses;
    };
    /**
     * Sets the bookableresourcebookingheader_QuoteCloses property value. 
     * @param value Value to set for the bookableresourcebookingheader_QuoteCloses property.
     */
    public set bookableresourcebookingheader_QuoteCloses(value: Quoteclose[] | undefined) {
        this._bookableresourcebookingheader_QuoteCloses = value;
    };
    /**
     * Gets the bookableresourcebookingheader_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get bookableresourcebookingheader_RecurringAppointmentMasters() {
        return this._bookableresourcebookingheader_RecurringAppointmentMasters;
    };
    /**
     * Sets the bookableresourcebookingheader_RecurringAppointmentMasters property value. 
     * @param value Value to set for the bookableresourcebookingheader_RecurringAppointmentMasters property.
     */
    public set bookableresourcebookingheader_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._bookableresourcebookingheader_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the bookableresourcebookingheader_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get bookableresourcebookingheader_ServiceAppointments() {
        return this._bookableresourcebookingheader_ServiceAppointments;
    };
    /**
     * Sets the bookableresourcebookingheader_ServiceAppointments property value. 
     * @param value Value to set for the bookableresourcebookingheader_ServiceAppointments property.
     */
    public set bookableresourcebookingheader_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._bookableresourcebookingheader_ServiceAppointments = value;
    };
    /**
     * Gets the bookableresourcebookingheader_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get bookableresourcebookingheader_SocialActivities() {
        return this._bookableresourcebookingheader_SocialActivities;
    };
    /**
     * Sets the bookableresourcebookingheader_SocialActivities property value. 
     * @param value Value to set for the bookableresourcebookingheader_SocialActivities property.
     */
    public set bookableresourcebookingheader_SocialActivities(value: Socialactivity[] | undefined) {
        this._bookableresourcebookingheader_SocialActivities = value;
    };
    /**
     * Gets the bookableResourceBookingHeader_SyncErrors property value. 
     * @returns a syncerror
     */
    public get bookableResourceBookingHeader_SyncErrors() {
        return this._bookableResourceBookingHeader_SyncErrors;
    };
    /**
     * Sets the bookableResourceBookingHeader_SyncErrors property value. 
     * @param value Value to set for the BookableResourceBookingHeader_SyncErrors property.
     */
    public set bookableResourceBookingHeader_SyncErrors(value: Syncerror[] | undefined) {
        this._bookableResourceBookingHeader_SyncErrors = value;
    };
    /**
     * Gets the bookableresourcebookingheader_Tasks property value. 
     * @returns a task
     */
    public get bookableresourcebookingheader_Tasks() {
        return this._bookableresourcebookingheader_Tasks;
    };
    /**
     * Sets the bookableresourcebookingheader_Tasks property value. 
     * @param value Value to set for the bookableresourcebookingheader_Tasks property.
     */
    public set bookableresourcebookingheader_Tasks(value: Task[] | undefined) {
        this._bookableresourcebookingheader_Tasks = value;
    };
    /**
     * Gets the bookableresourcebookingheaderid property value. 
     * @returns a string
     */
    public get bookableresourcebookingheaderid() {
        return this._bookableresourcebookingheaderid;
    };
    /**
     * Sets the bookableresourcebookingheaderid property value. 
     * @param value Value to set for the bookableresourcebookingheaderid property.
     */
    public set bookableresourcebookingheaderid(value: string | undefined) {
        this._bookableresourcebookingheaderid = value;
    };
    /**
     * Instantiates a new bookableresourcebookingheader and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdbyname property value. 
     * @returns a systemuser
     */
    public get createdbyname() {
        return this._createdbyname;
    };
    /**
     * Sets the createdbyname property value. 
     * @param value Value to set for the createdbyname property.
     */
    public set createdbyname(value: Systemuser | undefined) {
        this._createdbyname = value;
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
     * Gets the createdonbehalfbyname property value. 
     * @returns a systemuser
     */
    public get createdonbehalfbyname() {
        return this._createdonbehalfbyname;
    };
    /**
     * Sets the createdonbehalfbyname property value. 
     * @param value Value to set for the createdonbehalfbyname property.
     */
    public set createdonbehalfbyname(value: Systemuser | undefined) {
        this._createdonbehalfbyname = value;
    };
    /**
     * Gets the duration property value. 
     * @returns a integer
     */
    public get duration() {
        return this._duration;
    };
    /**
     * Sets the duration property value. 
     * @param value Value to set for the duration property.
     */
    public set duration(value: number | undefined) {
        this._duration = value;
    };
    /**
     * Gets the endtime property value. 
     * @returns a Date
     */
    public get endtime() {
        return this._endtime;
    };
    /**
     * Sets the endtime property value. 
     * @param value Value to set for the endtime property.
     */
    public set endtime(value: Date | undefined) {
        this._endtime = value;
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Bookableresourcebookingheader)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Bookableresourcebookingheader)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Bookableresourcebookingheader)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Bookableresourcebookingheader)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_bookableresourceid_value": (o, n) => { (o as unknown as Bookableresourcebookingheader)._msdyn_bookableresourceid_value = n.getStringValue(); },
            "_msdyn_bookingstatusid_value": (o, n) => { (o as unknown as Bookableresourcebookingheader)._msdyn_bookingstatusid_value = n.getStringValue(); },
            "_msdyn_projectid_value": (o, n) => { (o as unknown as Bookableresourcebookingheader)._msdyn_projectid_value = n.getStringValue(); },
            "_msdyn_projectteamid_value": (o, n) => { (o as unknown as Bookableresourcebookingheader)._msdyn_projectteamid_value = n.getStringValue(); },
            "_msdyn_resourcecategoryid_value": (o, n) => { (o as unknown as Bookableresourcebookingheader)._msdyn_resourcecategoryid_value = n.getStringValue(); },
            "_msdyn_resourcerequirement_value": (o, n) => { (o as unknown as Bookableresourcebookingheader)._msdyn_resourcerequirement_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Bookableresourcebookingheader)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Bookableresourcebookingheader)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Bookableresourcebookingheader)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Bookableresourcebookingheader)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Bookableresourcebookingheader)._transactioncurrencyid_value = n.getStringValue(); },
            "bookableresourcebookingheader_ActivityPointers": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "bookableresourcebookingheader_Annotations": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "bookableresourcebookingheader_Appointments": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "bookableresourcebookingheader_AsyncOperations": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "bookableresourcebookingheader_bookableresourcebooking_Header": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_bookableresourcebooking_Header = n.getCollectionOfObjectValues<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "bookableresourcebookingheader_BulkDeleteFailures": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "bookableresourcebookingheader_BulkOperations": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_BulkOperations = n.getCollectionOfObjectValues<Bulkoperation>(createBulkoperationFromDiscriminatorValue); },
            "bookableresourcebookingheader_CampaignActivities": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_CampaignActivities = n.getCollectionOfObjectValues<Campaignactivity>(createCampaignactivityFromDiscriminatorValue); },
            "bookableresourcebookingheader_CampaignResponses": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_CampaignResponses = n.getCollectionOfObjectValues<Campaignresponse>(createCampaignresponseFromDiscriminatorValue); },
            "bookableresourcebookingheader_DuplicateBaseRecord": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "bookableresourcebookingheader_DuplicateMatchingRecord": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "bookableresourcebookingheader_Emails": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "bookableresourcebookingheader_Faxes": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "bookableresourcebookingheader_IncidentResolutions": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_IncidentResolutions = n.getCollectionOfObjectValues<Incidentresolution>(createIncidentresolutionFromDiscriminatorValue); },
            "bookableresourcebookingheader_Letters": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "bookableresourcebookingheader_MailboxTrackingFolders": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "bookableresourcebookingheader_msdyn_approvals": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "bookableresourcebookingheader_msdyn_bookingalerts": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "bookableresourcebookingheader_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "bookableresourcebookingheader_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "bookableresourcebookingheader_msdyn_ocsessions": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "bookableresourcebookingheader_msfp_alerts": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "bookableresourcebookingheader_msfp_surveyinvites": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "bookableresourcebookingheader_msfp_surveyresponses": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "bookableresourcebookingheader_OpportunityCloses": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_OpportunityCloses = n.getCollectionOfObjectValues<Opportunityclose>(createOpportunitycloseFromDiscriminatorValue); },
            "bookableresourcebookingheader_OrderCloses": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_OrderCloses = n.getCollectionOfObjectValues<Orderclose>(createOrdercloseFromDiscriminatorValue); },
            "bookableresourcebookingheader_PhoneCalls": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "bookableresourcebookingheader_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "bookableresourcebookingheader_ProcessSession": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "bookableresourcebookingheader_QuoteCloses": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_QuoteCloses = n.getCollectionOfObjectValues<Quoteclose>(createQuotecloseFromDiscriminatorValue); },
            "bookableresourcebookingheader_RecurringAppointmentMasters": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "bookableresourcebookingheader_ServiceAppointments": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "bookableresourcebookingheader_SocialActivities": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "bookableResourceBookingHeader_SyncErrors": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableResourceBookingHeader_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "bookableresourcebookingheader_Tasks": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheader_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "bookableresourcebookingheaderid": (o, n) => { (o as unknown as Bookableresourcebookingheader).bookableresourcebookingheaderid = n.getStringValue(); },
            "createdbyname": (o, n) => { (o as unknown as Bookableresourcebookingheader).createdbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Bookableresourcebookingheader).createdon = n.getDateValue(); },
            "createdonbehalfbyname": (o, n) => { (o as unknown as Bookableresourcebookingheader).createdonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "duration": (o, n) => { (o as unknown as Bookableresourcebookingheader).duration = n.getNumberValue(); },
            "endtime": (o, n) => { (o as unknown as Bookableresourcebookingheader).endtime = n.getDateValue(); },
            "exchangerate": (o, n) => { (o as unknown as Bookableresourcebookingheader).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Bookableresourcebookingheader).importsequencenumber = n.getNumberValue(); },
            "modifiedbyname": (o, n) => { (o as unknown as Bookableresourcebookingheader).modifiedbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Bookableresourcebookingheader).modifiedon = n.getDateValue(); },
            "modifiedonbehalfbyname": (o, n) => { (o as unknown as Bookableresourcebookingheader).modifiedonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_bookableresourceid": (o, n) => { (o as unknown as Bookableresourcebookingheader).msdyn_bookableresourceid = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_bookingstatusid": (o, n) => { (o as unknown as Bookableresourcebookingheader).msdyn_bookingstatusid = n.getObjectValue<Bookingstatus>(createBookingstatusFromDiscriminatorValue); },
            "msdyn_bookingtype": (o, n) => { (o as unknown as Bookableresourcebookingheader).msdyn_bookingtype = n.getNumberValue(); },
            "msdyn_projectid": (o, n) => { (o as unknown as Bookableresourcebookingheader).msdyn_projectid = n.getObjectValue<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_projectteamid": (o, n) => { (o as unknown as Bookableresourcebookingheader).msdyn_projectteamid = n.getObjectValue<Msdyn_projectteam>(createMsdyn_projectteamFromDiscriminatorValue); },
            "msdyn_resourcecategoryid": (o, n) => { (o as unknown as Bookableresourcebookingheader).msdyn_resourcecategoryid = n.getObjectValue<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "msdyn_ResourceRequirement": (o, n) => { (o as unknown as Bookableresourcebookingheader).msdyn_ResourceRequirement = n.getObjectValue<Msdyn_resourcerequirement>(createMsdyn_resourcerequirementFromDiscriminatorValue); },
            "msdyn_resourcerequirement_bookingheader": (o, n) => { (o as unknown as Bookableresourcebookingheader).msdyn_resourcerequirement_bookingheader = n.getCollectionOfObjectValues<Msdyn_resourcerequirement>(createMsdyn_resourcerequirementFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Bookableresourcebookingheader).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Bookableresourcebookingheader).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Bookableresourcebookingheader).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Bookableresourcebookingheader).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Bookableresourcebookingheader).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Bookableresourcebookingheader).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "processid": (o, n) => { (o as unknown as Bookableresourcebookingheader).processid = n.getStringValue(); },
            "stageid": (o, n) => { (o as unknown as Bookableresourcebookingheader).stageid = n.getStringValue(); },
            "starttime": (o, n) => { (o as unknown as Bookableresourcebookingheader).starttime = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Bookableresourcebookingheader).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Bookableresourcebookingheader).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Bookableresourcebookingheader).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Bookableresourcebookingheader).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "traversedpath": (o, n) => { (o as unknown as Bookableresourcebookingheader).traversedpath = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Bookableresourcebookingheader).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Bookableresourcebookingheader).versionnumber = n.getNumberValue(); },
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
     * Gets the modifiedbyname property value. 
     * @returns a systemuser
     */
    public get modifiedbyname() {
        return this._modifiedbyname;
    };
    /**
     * Sets the modifiedbyname property value. 
     * @param value Value to set for the modifiedbyname property.
     */
    public set modifiedbyname(value: Systemuser | undefined) {
        this._modifiedbyname = value;
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
     * Gets the modifiedonbehalfbyname property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfbyname() {
        return this._modifiedonbehalfbyname;
    };
    /**
     * Sets the modifiedonbehalfbyname property value. 
     * @param value Value to set for the modifiedonbehalfbyname property.
     */
    public set modifiedonbehalfbyname(value: Systemuser | undefined) {
        this._modifiedonbehalfbyname = value;
    };
    /**
     * Gets the msdyn_bookableresourceid property value. 
     * @returns a bookableresource
     */
    public get msdyn_bookableresourceid() {
        return this._msdyn_bookableresourceid;
    };
    /**
     * Sets the msdyn_bookableresourceid property value. 
     * @param value Value to set for the msdyn_bookableresourceid property.
     */
    public set msdyn_bookableresourceid(value: Bookableresource | undefined) {
        this._msdyn_bookableresourceid = value;
    };
    /**
     * Gets the msdyn_bookingstatusid property value. 
     * @returns a bookingstatus
     */
    public get msdyn_bookingstatusid() {
        return this._msdyn_bookingstatusid;
    };
    /**
     * Sets the msdyn_bookingstatusid property value. 
     * @param value Value to set for the msdyn_bookingstatusid property.
     */
    public set msdyn_bookingstatusid(value: Bookingstatus | undefined) {
        this._msdyn_bookingstatusid = value;
    };
    /**
     * Gets the msdyn_bookingtype property value. 
     * @returns a integer
     */
    public get msdyn_bookingtype() {
        return this._msdyn_bookingtype;
    };
    /**
     * Sets the msdyn_bookingtype property value. 
     * @param value Value to set for the msdyn_bookingtype property.
     */
    public set msdyn_bookingtype(value: number | undefined) {
        this._msdyn_bookingtype = value;
    };
    /**
     * Gets the msdyn_projectid property value. 
     * @returns a msdyn_project
     */
    public get msdyn_projectid() {
        return this._msdyn_projectid;
    };
    /**
     * Sets the msdyn_projectid property value. 
     * @param value Value to set for the msdyn_projectid property.
     */
    public set msdyn_projectid(value: Msdyn_project | undefined) {
        this._msdyn_projectid = value;
    };
    /**
     * Gets the msdyn_projectteamid property value. 
     * @returns a msdyn_projectteam
     */
    public get msdyn_projectteamid() {
        return this._msdyn_projectteamid;
    };
    /**
     * Sets the msdyn_projectteamid property value. 
     * @param value Value to set for the msdyn_projectteamid property.
     */
    public set msdyn_projectteamid(value: Msdyn_projectteam | undefined) {
        this._msdyn_projectteamid = value;
    };
    /**
     * Gets the msdyn_resourcecategoryid property value. 
     * @returns a bookableresourcecategory
     */
    public get msdyn_resourcecategoryid() {
        return this._msdyn_resourcecategoryid;
    };
    /**
     * Sets the msdyn_resourcecategoryid property value. 
     * @param value Value to set for the msdyn_resourcecategoryid property.
     */
    public set msdyn_resourcecategoryid(value: Bookableresourcecategory | undefined) {
        this._msdyn_resourcecategoryid = value;
    };
    /**
     * Gets the msdyn_ResourceRequirement property value. 
     * @returns a msdyn_resourcerequirement
     */
    public get msdyn_ResourceRequirement() {
        return this._msdyn_ResourceRequirement;
    };
    /**
     * Sets the msdyn_ResourceRequirement property value. 
     * @param value Value to set for the msdyn_ResourceRequirement property.
     */
    public set msdyn_ResourceRequirement(value: Msdyn_resourcerequirement | undefined) {
        this._msdyn_ResourceRequirement = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_bookingheader property value. 
     * @returns a msdyn_resourcerequirement
     */
    public get msdyn_resourcerequirement_bookingheader() {
        return this._msdyn_resourcerequirement_bookingheader;
    };
    /**
     * Sets the msdyn_resourcerequirement_bookingheader property value. 
     * @param value Value to set for the msdyn_resourcerequirement_bookingheader property.
     */
    public set msdyn_resourcerequirement_bookingheader(value: Msdyn_resourcerequirement[] | undefined) {
        this._msdyn_resourcerequirement_bookingheader = value;
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
        writer.writeStringValue("_msdyn_bookableresourceid_value", this._msdyn_bookableresourceid_value);
        writer.writeStringValue("_msdyn_bookingstatusid_value", this._msdyn_bookingstatusid_value);
        writer.writeStringValue("_msdyn_projectid_value", this._msdyn_projectid_value);
        writer.writeStringValue("_msdyn_projectteamid_value", this._msdyn_projectteamid_value);
        writer.writeStringValue("_msdyn_resourcecategoryid_value", this._msdyn_resourcecategoryid_value);
        writer.writeStringValue("_msdyn_resourcerequirement_value", this._msdyn_resourcerequirement_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeCollectionOfObjectValues<Activitypointer>("bookableresourcebookingheader_ActivityPointers", this.bookableresourcebookingheader_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("bookableresourcebookingheader_Annotations", this.bookableresourcebookingheader_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("bookableresourcebookingheader_Appointments", this.bookableresourcebookingheader_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("bookableresourcebookingheader_AsyncOperations", this.bookableresourcebookingheader_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bookableresourcebooking>("bookableresourcebookingheader_bookableresourcebooking_Header", this.bookableresourcebookingheader_bookableresourcebooking_Header);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("bookableresourcebookingheader_BulkDeleteFailures", this.bookableresourcebookingheader_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Bulkoperation>("bookableresourcebookingheader_BulkOperations", this.bookableresourcebookingheader_BulkOperations);
        writer.writeCollectionOfObjectValues<Campaignactivity>("bookableresourcebookingheader_CampaignActivities", this.bookableresourcebookingheader_CampaignActivities);
        writer.writeCollectionOfObjectValues<Campaignresponse>("bookableresourcebookingheader_CampaignResponses", this.bookableresourcebookingheader_CampaignResponses);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("bookableresourcebookingheader_DuplicateBaseRecord", this.bookableresourcebookingheader_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("bookableresourcebookingheader_DuplicateMatchingRecord", this.bookableresourcebookingheader_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("bookableresourcebookingheader_Emails", this.bookableresourcebookingheader_Emails);
        writer.writeCollectionOfObjectValues<Fax>("bookableresourcebookingheader_Faxes", this.bookableresourcebookingheader_Faxes);
        writer.writeCollectionOfObjectValues<Incidentresolution>("bookableresourcebookingheader_IncidentResolutions", this.bookableresourcebookingheader_IncidentResolutions);
        writer.writeCollectionOfObjectValues<Letter>("bookableresourcebookingheader_Letters", this.bookableresourcebookingheader_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("bookableresourcebookingheader_MailboxTrackingFolders", this.bookableresourcebookingheader_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("bookableresourcebookingheader_msdyn_approvals", this.bookableresourcebookingheader_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("bookableresourcebookingheader_msdyn_bookingalerts", this.bookableresourcebookingheader_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("bookableresourcebookingheader_msdyn_ocliveworkitems", this.bookableresourcebookingheader_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("bookableresourcebookingheader_msdyn_ocoutboundmessages", this.bookableresourcebookingheader_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("bookableresourcebookingheader_msdyn_ocsessions", this.bookableresourcebookingheader_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("bookableresourcebookingheader_msfp_alerts", this.bookableresourcebookingheader_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("bookableresourcebookingheader_msfp_surveyinvites", this.bookableresourcebookingheader_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("bookableresourcebookingheader_msfp_surveyresponses", this.bookableresourcebookingheader_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Opportunityclose>("bookableresourcebookingheader_OpportunityCloses", this.bookableresourcebookingheader_OpportunityCloses);
        writer.writeCollectionOfObjectValues<Orderclose>("bookableresourcebookingheader_OrderCloses", this.bookableresourcebookingheader_OrderCloses);
        writer.writeCollectionOfObjectValues<Phonecall>("bookableresourcebookingheader_PhoneCalls", this.bookableresourcebookingheader_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("bookableresourcebookingheader_PrincipalObjectAttributeAccesses", this.bookableresourcebookingheader_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("bookableresourcebookingheader_ProcessSession", this.bookableresourcebookingheader_ProcessSession);
        writer.writeCollectionOfObjectValues<Quoteclose>("bookableresourcebookingheader_QuoteCloses", this.bookableresourcebookingheader_QuoteCloses);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("bookableresourcebookingheader_RecurringAppointmentMasters", this.bookableresourcebookingheader_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("bookableresourcebookingheader_ServiceAppointments", this.bookableresourcebookingheader_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("bookableresourcebookingheader_SocialActivities", this.bookableresourcebookingheader_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("bookableResourceBookingHeader_SyncErrors", this.bookableResourceBookingHeader_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("bookableresourcebookingheader_Tasks", this.bookableresourcebookingheader_Tasks);
        writer.writeStringValue("bookableresourcebookingheaderid", this.bookableresourcebookingheaderid);
        writer.writeObjectValue<Systemuser>("createdbyname", this.createdbyname);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfbyname", this.createdonbehalfbyname);
        writer.writeNumberValue("duration", this.duration);
        writer.writeDateValue("endtime", this.endtime);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedbyname", this.modifiedbyname);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfbyname", this.modifiedonbehalfbyname);
        writer.writeObjectValue<Bookableresource>("msdyn_bookableresourceid", this.msdyn_bookableresourceid);
        writer.writeObjectValue<Bookingstatus>("msdyn_bookingstatusid", this.msdyn_bookingstatusid);
        writer.writeNumberValue("msdyn_bookingtype", this.msdyn_bookingtype);
        writer.writeObjectValue<Msdyn_project>("msdyn_projectid", this.msdyn_projectid);
        writer.writeObjectValue<Msdyn_projectteam>("msdyn_projectteamid", this.msdyn_projectteamid);
        writer.writeObjectValue<Bookableresourcecategory>("msdyn_resourcecategoryid", this.msdyn_resourcecategoryid);
        writer.writeObjectValue<Msdyn_resourcerequirement>("msdyn_ResourceRequirement", this.msdyn_ResourceRequirement);
        writer.writeCollectionOfObjectValues<Msdyn_resourcerequirement>("msdyn_resourcerequirement_bookingheader", this.msdyn_resourcerequirement_bookingheader);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("processid", this.processid);
        writer.writeStringValue("stageid", this.stageid);
        writer.writeDateValue("starttime", this.starttime);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("traversedpath", this.traversedpath);
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
     * Gets the starttime property value. 
     * @returns a Date
     */
    public get starttime() {
        return this._starttime;
    };
    /**
     * Sets the starttime property value. 
     * @param value Value to set for the starttime property.
     */
    public set starttime(value: Date | undefined) {
        this._starttime = value;
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
