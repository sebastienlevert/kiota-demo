import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBulkoperationFromDiscriminatorValue} from './createBulkoperationFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCalendarFromDiscriminatorValue} from './createCalendarFromDiscriminatorValue';
import {createCampaignactivityFromDiscriminatorValue} from './createCampaignactivityFromDiscriminatorValue';
import {createCampaignresponseFromDiscriminatorValue} from './createCampaignresponseFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createEntitlementFromDiscriminatorValue} from './createEntitlementFromDiscriminatorValue';
import {createEntitlementtemplateFromDiscriminatorValue} from './createEntitlementtemplateFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createIncidentresolutionFromDiscriminatorValue} from './createIncidentresolutionFromDiscriminatorValue';
import {createInvoiceFromDiscriminatorValue} from './createInvoiceFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_migrationtrackerFromDiscriminatorValue} from './createMsdyn_migrationtrackerFromDiscriminatorValue';
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
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQuotecloseFromDiscriminatorValue} from './createQuotecloseFromDiscriminatorValue';
import {createQuoteFromDiscriminatorValue} from './createQuoteFromDiscriminatorValue';
import {createSalesorderFromDiscriminatorValue} from './createSalesorderFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSlaitemFromDiscriminatorValue} from './createSlaitemFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {createWorkflowFromDiscriminatorValue} from './createWorkflowFromDiscriminatorValue';
import {Account, Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Bulkoperation, Businessunit, Calendar, Campaignactivity, Campaignresponse, Contact, Crmbaseentity, Email, Entitlement, Entitlementtemplate, Fax, Incident, Incidentresolution, Invoice, Lead, Letter, Msdyn_approval, Msdyn_bookingalert, Msdyn_migrationtracker, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Opportunity, Opportunityclose, Orderclose, Phonecall, Principal, Processsession, Quote, Quoteclose, Salesorder, Serviceappointment, Slaitem, Socialactivity, Syncerror, Systemuser, Task, Team, Transactioncurrency, Workflow} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Sla extends Crmbaseentity implements Parsable {
    private __businesshoursid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private __workflowid_value?: string | undefined;
    private _allowpauseresume?: boolean | undefined;
    private _applicablefrom?: string | undefined;
    private _applicablefrompicklist?: number | undefined;
    private _bulkoperation_sla_slaid?: Bulkoperation[] | undefined;
    private _bulkoperation_sla_slainvokedid?: Bulkoperation[] | undefined;
    private _businesshoursid?: Calendar | undefined;
    private _campaignactivity_sla_slaid?: Campaignactivity[] | undefined;
    private _campaignactivity_sla_slainvokedid?: Campaignactivity[] | undefined;
    private _campaignresponse_sla_slaid?: Campaignresponse[] | undefined;
    private _campaignresponse_sla_slainvokedid?: Campaignresponse[] | undefined;
    private _changedattributelist?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _exchangerate?: number | undefined;
    private _incidentresolution_sla_slaid?: Incidentresolution[] | undefined;
    private _incidentresolution_sla_slainvokedid?: Incidentresolution[] | undefined;
    private _isdefault?: boolean | undefined;
    private _ismanaged?: boolean | undefined;
    private _manualsla_account?: Account[] | undefined;
    private _manualsla_activitypointer?: Activitypointer[] | undefined;
    private _manualsla_appointment?: Appointment[] | undefined;
    private _manualsla_cases?: Incident[] | undefined;
    private _manualsla_contact?: Contact[] | undefined;
    private _manualsla_email?: Email[] | undefined;
    private _manualsla_fax?: Fax[] | undefined;
    private _manualsla_invoice?: Invoice[] | undefined;
    private _manualsla_lead?: Lead[] | undefined;
    private _manualsla_letter?: Letter[] | undefined;
    private _manualsla_opportunity?: Opportunity[] | undefined;
    private _manualsla_phonecall?: Phonecall[] | undefined;
    private _manualsla_quote?: Quote[] | undefined;
    private _manualsla_salesorder?: Salesorder[] | undefined;
    private _manualsla_serviceappointment?: Serviceappointment[] | undefined;
    private _manualsla_socialactivity?: Socialactivity[] | undefined;
    private _manualsla_task?: Task[] | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_approval_sla_slaid?: Msdyn_approval[] | undefined;
    private _msdyn_approval_sla_slainvokedid?: Msdyn_approval[] | undefined;
    private _msdyn_bookingalert_sla_slaid?: Msdyn_bookingalert[] | undefined;
    private _msdyn_bookingalert_sla_slainvokedid?: Msdyn_bookingalert[] | undefined;
    private _msdyn_migrationtracker_LegacySLA_sla?: Msdyn_migrationtracker[] | undefined;
    private _msdyn_migrationtracker_ModernSLA_sla?: Msdyn_migrationtracker[] | undefined;
    private _msdyn_ocliveworkitem_sla_slaid?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_ocliveworkitem_sla_slainvokedid?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_ocoutboundmessage_sla_slaid?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_ocoutboundmessage_sla_slainvokedid?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_ocsession_sla_slaid?: Msdyn_ocsession[] | undefined;
    private _msdyn_ocsession_sla_slainvokedid?: Msdyn_ocsession[] | undefined;
    private _msfp_alert_sla_slaid?: Msfp_alert[] | undefined;
    private _msfp_alert_sla_slainvokedid?: Msfp_alert[] | undefined;
    private _msfp_surveyinvite_sla_slaid?: Msfp_surveyinvite[] | undefined;
    private _msfp_surveyinvite_sla_slainvokedid?: Msfp_surveyinvite[] | undefined;
    private _msfp_surveyresponse_sla_slaid?: Msfp_surveyresponse[] | undefined;
    private _msfp_surveyresponse_sla_slainvokedid?: Msfp_surveyresponse[] | undefined;
    private _name?: string | undefined;
    private _objecttypecode?: number | undefined;
    private _opportunityclose_sla_slaid?: Opportunityclose[] | undefined;
    private _opportunityclose_sla_slainvokedid?: Opportunityclose[] | undefined;
    private _orderclose_sla_slaid?: Orderclose[] | undefined;
    private _orderclose_sla_slainvokedid?: Orderclose[] | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _primaryentityotc?: number | undefined;
    private _quoteclose_sla_slaid?: Quoteclose[] | undefined;
    private _quoteclose_sla_slainvokedid?: Quoteclose[] | undefined;
    private _sla_account?: Account[] | undefined;
    private _sla_activitypointer?: Activitypointer[] | undefined;
    private _sla_Annotation?: Annotation[] | undefined;
    private _sla_appointment?: Appointment[] | undefined;
    private _sla_cases?: Incident[] | undefined;
    private _sla_contact?: Contact[] | undefined;
    private _sla_email?: Email[] | undefined;
    private _sla_entitlement?: Entitlement[] | undefined;
    private _sla_entitlementtemplate?: Entitlementtemplate[] | undefined;
    private _sla_fax?: Fax[] | undefined;
    private _sla_invoice?: Invoice[] | undefined;
    private _sla_lead?: Lead[] | undefined;
    private _sla_letter?: Letter[] | undefined;
    private _sla_opportunity?: Opportunity[] | undefined;
    private _sla_phonecall?: Phonecall[] | undefined;
    private _sla_quote?: Quote[] | undefined;
    private _sla_salesorder?: Salesorder[] | undefined;
    private _sla_serviceappointment?: Serviceappointment[] | undefined;
    private _sla_slaitem_slaId?: Slaitem[] | undefined;
    private _sla_socialactivity?: Socialactivity[] | undefined;
    private _sLA_SyncErrors?: Syncerror[] | undefined;
    private _sla_task?: Task[] | undefined;
    private _slabase_AsyncOperations?: Asyncoperation[] | undefined;
    private _slabase_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _slabase_ProcessSessions?: Processsession[] | undefined;
    private _slaid?: string | undefined;
    private _slaidunique?: string | undefined;
    private _slatype?: number | undefined;
    private _slaversion?: number | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _versionnumber?: number | undefined;
    private _workflowid?: Workflow | undefined;
    /**
     * Gets the _businesshoursid_value property value. 
     * @returns a string
     */
    public get _businesshoursid_value() {
        return this.__businesshoursid_value;
    };
    /**
     * Sets the _businesshoursid_value property value. 
     * @param value Value to set for the _businesshoursid_value property.
     */
    public set _businesshoursid_value(value: string | undefined) {
        this.__businesshoursid_value = value;
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
     * Gets the _workflowid_value property value. 
     * @returns a string
     */
    public get _workflowid_value() {
        return this.__workflowid_value;
    };
    /**
     * Sets the _workflowid_value property value. 
     * @param value Value to set for the _workflowid_value property.
     */
    public set _workflowid_value(value: string | undefined) {
        this.__workflowid_value = value;
    };
    /**
     * Gets the allowpauseresume property value. 
     * @returns a boolean
     */
    public get allowpauseresume() {
        return this._allowpauseresume;
    };
    /**
     * Sets the allowpauseresume property value. 
     * @param value Value to set for the allowpauseresume property.
     */
    public set allowpauseresume(value: boolean | undefined) {
        this._allowpauseresume = value;
    };
    /**
     * Gets the applicablefrom property value. 
     * @returns a string
     */
    public get applicablefrom() {
        return this._applicablefrom;
    };
    /**
     * Sets the applicablefrom property value. 
     * @param value Value to set for the applicablefrom property.
     */
    public set applicablefrom(value: string | undefined) {
        this._applicablefrom = value;
    };
    /**
     * Gets the applicablefrompicklist property value. 
     * @returns a integer
     */
    public get applicablefrompicklist() {
        return this._applicablefrompicklist;
    };
    /**
     * Sets the applicablefrompicklist property value. 
     * @param value Value to set for the applicablefrompicklist property.
     */
    public set applicablefrompicklist(value: number | undefined) {
        this._applicablefrompicklist = value;
    };
    /**
     * Gets the bulkoperation_sla_slaid property value. 
     * @returns a bulkoperation
     */
    public get bulkoperation_sla_slaid() {
        return this._bulkoperation_sla_slaid;
    };
    /**
     * Sets the bulkoperation_sla_slaid property value. 
     * @param value Value to set for the bulkoperation_sla_slaid property.
     */
    public set bulkoperation_sla_slaid(value: Bulkoperation[] | undefined) {
        this._bulkoperation_sla_slaid = value;
    };
    /**
     * Gets the bulkoperation_sla_slainvokedid property value. 
     * @returns a bulkoperation
     */
    public get bulkoperation_sla_slainvokedid() {
        return this._bulkoperation_sla_slainvokedid;
    };
    /**
     * Sets the bulkoperation_sla_slainvokedid property value. 
     * @param value Value to set for the bulkoperation_sla_slainvokedid property.
     */
    public set bulkoperation_sla_slainvokedid(value: Bulkoperation[] | undefined) {
        this._bulkoperation_sla_slainvokedid = value;
    };
    /**
     * Gets the businesshoursid property value. 
     * @returns a calendar
     */
    public get businesshoursid() {
        return this._businesshoursid;
    };
    /**
     * Sets the businesshoursid property value. 
     * @param value Value to set for the businesshoursid property.
     */
    public set businesshoursid(value: Calendar | undefined) {
        this._businesshoursid = value;
    };
    /**
     * Gets the campaignactivity_sla_slaid property value. 
     * @returns a campaignactivity
     */
    public get campaignactivity_sla_slaid() {
        return this._campaignactivity_sla_slaid;
    };
    /**
     * Sets the campaignactivity_sla_slaid property value. 
     * @param value Value to set for the campaignactivity_sla_slaid property.
     */
    public set campaignactivity_sla_slaid(value: Campaignactivity[] | undefined) {
        this._campaignactivity_sla_slaid = value;
    };
    /**
     * Gets the campaignactivity_sla_slainvokedid property value. 
     * @returns a campaignactivity
     */
    public get campaignactivity_sla_slainvokedid() {
        return this._campaignactivity_sla_slainvokedid;
    };
    /**
     * Sets the campaignactivity_sla_slainvokedid property value. 
     * @param value Value to set for the campaignactivity_sla_slainvokedid property.
     */
    public set campaignactivity_sla_slainvokedid(value: Campaignactivity[] | undefined) {
        this._campaignactivity_sla_slainvokedid = value;
    };
    /**
     * Gets the campaignresponse_sla_slaid property value. 
     * @returns a campaignresponse
     */
    public get campaignresponse_sla_slaid() {
        return this._campaignresponse_sla_slaid;
    };
    /**
     * Sets the campaignresponse_sla_slaid property value. 
     * @param value Value to set for the campaignresponse_sla_slaid property.
     */
    public set campaignresponse_sla_slaid(value: Campaignresponse[] | undefined) {
        this._campaignresponse_sla_slaid = value;
    };
    /**
     * Gets the campaignresponse_sla_slainvokedid property value. 
     * @returns a campaignresponse
     */
    public get campaignresponse_sla_slainvokedid() {
        return this._campaignresponse_sla_slainvokedid;
    };
    /**
     * Sets the campaignresponse_sla_slainvokedid property value. 
     * @param value Value to set for the campaignresponse_sla_slainvokedid property.
     */
    public set campaignresponse_sla_slainvokedid(value: Campaignresponse[] | undefined) {
        this._campaignresponse_sla_slainvokedid = value;
    };
    /**
     * Gets the changedattributelist property value. 
     * @returns a string
     */
    public get changedattributelist() {
        return this._changedattributelist;
    };
    /**
     * Sets the changedattributelist property value. 
     * @param value Value to set for the changedattributelist property.
     */
    public set changedattributelist(value: string | undefined) {
        this._changedattributelist = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new sla and sets the default values.
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
            "_businesshoursid_value": (o, n) => { (o as unknown as Sla)._businesshoursid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Sla)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Sla)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Sla)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Sla)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Sla)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Sla)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Sla)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Sla)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Sla)._transactioncurrencyid_value = n.getStringValue(); },
            "_workflowid_value": (o, n) => { (o as unknown as Sla)._workflowid_value = n.getStringValue(); },
            "allowpauseresume": (o, n) => { (o as unknown as Sla).allowpauseresume = n.getBooleanValue(); },
            "applicablefrom": (o, n) => { (o as unknown as Sla).applicablefrom = n.getStringValue(); },
            "applicablefrompicklist": (o, n) => { (o as unknown as Sla).applicablefrompicklist = n.getNumberValue(); },
            "bulkoperation_sla_slaid": (o, n) => { (o as unknown as Sla).bulkoperation_sla_slaid = n.getCollectionOfObjectValues<Bulkoperation>(createBulkoperationFromDiscriminatorValue); },
            "bulkoperation_sla_slainvokedid": (o, n) => { (o as unknown as Sla).bulkoperation_sla_slainvokedid = n.getCollectionOfObjectValues<Bulkoperation>(createBulkoperationFromDiscriminatorValue); },
            "businesshoursid": (o, n) => { (o as unknown as Sla).businesshoursid = n.getObjectValue<Calendar>(createCalendarFromDiscriminatorValue); },
            "campaignactivity_sla_slaid": (o, n) => { (o as unknown as Sla).campaignactivity_sla_slaid = n.getCollectionOfObjectValues<Campaignactivity>(createCampaignactivityFromDiscriminatorValue); },
            "campaignactivity_sla_slainvokedid": (o, n) => { (o as unknown as Sla).campaignactivity_sla_slainvokedid = n.getCollectionOfObjectValues<Campaignactivity>(createCampaignactivityFromDiscriminatorValue); },
            "campaignresponse_sla_slaid": (o, n) => { (o as unknown as Sla).campaignresponse_sla_slaid = n.getCollectionOfObjectValues<Campaignresponse>(createCampaignresponseFromDiscriminatorValue); },
            "campaignresponse_sla_slainvokedid": (o, n) => { (o as unknown as Sla).campaignresponse_sla_slainvokedid = n.getCollectionOfObjectValues<Campaignresponse>(createCampaignresponseFromDiscriminatorValue); },
            "changedattributelist": (o, n) => { (o as unknown as Sla).changedattributelist = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Sla).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Sla).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Sla).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Sla).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Sla).description = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Sla).exchangerate = n.getNumberValue(); },
            "incidentresolution_sla_slaid": (o, n) => { (o as unknown as Sla).incidentresolution_sla_slaid = n.getCollectionOfObjectValues<Incidentresolution>(createIncidentresolutionFromDiscriminatorValue); },
            "incidentresolution_sla_slainvokedid": (o, n) => { (o as unknown as Sla).incidentresolution_sla_slainvokedid = n.getCollectionOfObjectValues<Incidentresolution>(createIncidentresolutionFromDiscriminatorValue); },
            "isdefault": (o, n) => { (o as unknown as Sla).isdefault = n.getBooleanValue(); },
            "ismanaged": (o, n) => { (o as unknown as Sla).ismanaged = n.getBooleanValue(); },
            "manualsla_account": (o, n) => { (o as unknown as Sla).manualsla_account = n.getCollectionOfObjectValues<Account>(createAccountFromDiscriminatorValue); },
            "manualsla_activitypointer": (o, n) => { (o as unknown as Sla).manualsla_activitypointer = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "manualsla_appointment": (o, n) => { (o as unknown as Sla).manualsla_appointment = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "manualsla_cases": (o, n) => { (o as unknown as Sla).manualsla_cases = n.getCollectionOfObjectValues<Incident>(createIncidentFromDiscriminatorValue); },
            "manualsla_contact": (o, n) => { (o as unknown as Sla).manualsla_contact = n.getCollectionOfObjectValues<Contact>(createContactFromDiscriminatorValue); },
            "manualsla_email": (o, n) => { (o as unknown as Sla).manualsla_email = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "manualsla_fax": (o, n) => { (o as unknown as Sla).manualsla_fax = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "manualsla_invoice": (o, n) => { (o as unknown as Sla).manualsla_invoice = n.getCollectionOfObjectValues<Invoice>(createInvoiceFromDiscriminatorValue); },
            "manualsla_lead": (o, n) => { (o as unknown as Sla).manualsla_lead = n.getCollectionOfObjectValues<Lead>(createLeadFromDiscriminatorValue); },
            "manualsla_letter": (o, n) => { (o as unknown as Sla).manualsla_letter = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "manualsla_opportunity": (o, n) => { (o as unknown as Sla).manualsla_opportunity = n.getCollectionOfObjectValues<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "manualsla_phonecall": (o, n) => { (o as unknown as Sla).manualsla_phonecall = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "manualsla_quote": (o, n) => { (o as unknown as Sla).manualsla_quote = n.getCollectionOfObjectValues<Quote>(createQuoteFromDiscriminatorValue); },
            "manualsla_salesorder": (o, n) => { (o as unknown as Sla).manualsla_salesorder = n.getCollectionOfObjectValues<Salesorder>(createSalesorderFromDiscriminatorValue); },
            "manualsla_serviceappointment": (o, n) => { (o as unknown as Sla).manualsla_serviceappointment = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "manualsla_socialactivity": (o, n) => { (o as unknown as Sla).manualsla_socialactivity = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "manualsla_task": (o, n) => { (o as unknown as Sla).manualsla_task = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "modifiedby": (o, n) => { (o as unknown as Sla).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Sla).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Sla).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_approval_sla_slaid": (o, n) => { (o as unknown as Sla).msdyn_approval_sla_slaid = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_approval_sla_slainvokedid": (o, n) => { (o as unknown as Sla).msdyn_approval_sla_slainvokedid = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_bookingalert_sla_slaid": (o, n) => { (o as unknown as Sla).msdyn_bookingalert_sla_slaid = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_bookingalert_sla_slainvokedid": (o, n) => { (o as unknown as Sla).msdyn_bookingalert_sla_slainvokedid = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_migrationtracker_LegacySLA_sla": (o, n) => { (o as unknown as Sla).msdyn_migrationtracker_LegacySLA_sla = n.getCollectionOfObjectValues<Msdyn_migrationtracker>(createMsdyn_migrationtrackerFromDiscriminatorValue); },
            "msdyn_migrationtracker_ModernSLA_sla": (o, n) => { (o as unknown as Sla).msdyn_migrationtracker_ModernSLA_sla = n.getCollectionOfObjectValues<Msdyn_migrationtracker>(createMsdyn_migrationtrackerFromDiscriminatorValue); },
            "msdyn_ocliveworkitem_sla_slaid": (o, n) => { (o as unknown as Sla).msdyn_ocliveworkitem_sla_slaid = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_ocliveworkitem_sla_slainvokedid": (o, n) => { (o as unknown as Sla).msdyn_ocliveworkitem_sla_slainvokedid = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_ocoutboundmessage_sla_slaid": (o, n) => { (o as unknown as Sla).msdyn_ocoutboundmessage_sla_slaid = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_ocoutboundmessage_sla_slainvokedid": (o, n) => { (o as unknown as Sla).msdyn_ocoutboundmessage_sla_slainvokedid = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_ocsession_sla_slaid": (o, n) => { (o as unknown as Sla).msdyn_ocsession_sla_slaid = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_ocsession_sla_slainvokedid": (o, n) => { (o as unknown as Sla).msdyn_ocsession_sla_slainvokedid = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msfp_alert_sla_slaid": (o, n) => { (o as unknown as Sla).msfp_alert_sla_slaid = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msfp_alert_sla_slainvokedid": (o, n) => { (o as unknown as Sla).msfp_alert_sla_slainvokedid = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msfp_surveyinvite_sla_slaid": (o, n) => { (o as unknown as Sla).msfp_surveyinvite_sla_slaid = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msfp_surveyinvite_sla_slainvokedid": (o, n) => { (o as unknown as Sla).msfp_surveyinvite_sla_slainvokedid = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msfp_surveyresponse_sla_slaid": (o, n) => { (o as unknown as Sla).msfp_surveyresponse_sla_slaid = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msfp_surveyresponse_sla_slainvokedid": (o, n) => { (o as unknown as Sla).msfp_surveyresponse_sla_slainvokedid = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Sla).name = n.getStringValue(); },
            "objecttypecode": (o, n) => { (o as unknown as Sla).objecttypecode = n.getNumberValue(); },
            "opportunityclose_sla_slaid": (o, n) => { (o as unknown as Sla).opportunityclose_sla_slaid = n.getCollectionOfObjectValues<Opportunityclose>(createOpportunitycloseFromDiscriminatorValue); },
            "opportunityclose_sla_slainvokedid": (o, n) => { (o as unknown as Sla).opportunityclose_sla_slainvokedid = n.getCollectionOfObjectValues<Opportunityclose>(createOpportunitycloseFromDiscriminatorValue); },
            "orderclose_sla_slaid": (o, n) => { (o as unknown as Sla).orderclose_sla_slaid = n.getCollectionOfObjectValues<Orderclose>(createOrdercloseFromDiscriminatorValue); },
            "orderclose_sla_slainvokedid": (o, n) => { (o as unknown as Sla).orderclose_sla_slainvokedid = n.getCollectionOfObjectValues<Orderclose>(createOrdercloseFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Sla).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Sla).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Sla).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Sla).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Sla).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "primaryentityotc": (o, n) => { (o as unknown as Sla).primaryentityotc = n.getNumberValue(); },
            "quoteclose_sla_slaid": (o, n) => { (o as unknown as Sla).quoteclose_sla_slaid = n.getCollectionOfObjectValues<Quoteclose>(createQuotecloseFromDiscriminatorValue); },
            "quoteclose_sla_slainvokedid": (o, n) => { (o as unknown as Sla).quoteclose_sla_slainvokedid = n.getCollectionOfObjectValues<Quoteclose>(createQuotecloseFromDiscriminatorValue); },
            "sla_account": (o, n) => { (o as unknown as Sla).sla_account = n.getCollectionOfObjectValues<Account>(createAccountFromDiscriminatorValue); },
            "sla_activitypointer": (o, n) => { (o as unknown as Sla).sla_activitypointer = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "sla_Annotation": (o, n) => { (o as unknown as Sla).sla_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "sla_appointment": (o, n) => { (o as unknown as Sla).sla_appointment = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "sla_cases": (o, n) => { (o as unknown as Sla).sla_cases = n.getCollectionOfObjectValues<Incident>(createIncidentFromDiscriminatorValue); },
            "sla_contact": (o, n) => { (o as unknown as Sla).sla_contact = n.getCollectionOfObjectValues<Contact>(createContactFromDiscriminatorValue); },
            "sla_email": (o, n) => { (o as unknown as Sla).sla_email = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "sla_entitlement": (o, n) => { (o as unknown as Sla).sla_entitlement = n.getCollectionOfObjectValues<Entitlement>(createEntitlementFromDiscriminatorValue); },
            "sla_entitlementtemplate": (o, n) => { (o as unknown as Sla).sla_entitlementtemplate = n.getCollectionOfObjectValues<Entitlementtemplate>(createEntitlementtemplateFromDiscriminatorValue); },
            "sla_fax": (o, n) => { (o as unknown as Sla).sla_fax = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "sla_invoice": (o, n) => { (o as unknown as Sla).sla_invoice = n.getCollectionOfObjectValues<Invoice>(createInvoiceFromDiscriminatorValue); },
            "sla_lead": (o, n) => { (o as unknown as Sla).sla_lead = n.getCollectionOfObjectValues<Lead>(createLeadFromDiscriminatorValue); },
            "sla_letter": (o, n) => { (o as unknown as Sla).sla_letter = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "sla_opportunity": (o, n) => { (o as unknown as Sla).sla_opportunity = n.getCollectionOfObjectValues<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "sla_phonecall": (o, n) => { (o as unknown as Sla).sla_phonecall = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "sla_quote": (o, n) => { (o as unknown as Sla).sla_quote = n.getCollectionOfObjectValues<Quote>(createQuoteFromDiscriminatorValue); },
            "sla_salesorder": (o, n) => { (o as unknown as Sla).sla_salesorder = n.getCollectionOfObjectValues<Salesorder>(createSalesorderFromDiscriminatorValue); },
            "sla_serviceappointment": (o, n) => { (o as unknown as Sla).sla_serviceappointment = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "sla_slaitem_slaId": (o, n) => { (o as unknown as Sla).sla_slaitem_slaId = n.getCollectionOfObjectValues<Slaitem>(createSlaitemFromDiscriminatorValue); },
            "sla_socialactivity": (o, n) => { (o as unknown as Sla).sla_socialactivity = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "sLA_SyncErrors": (o, n) => { (o as unknown as Sla).sLA_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "sla_task": (o, n) => { (o as unknown as Sla).sla_task = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "slabase_AsyncOperations": (o, n) => { (o as unknown as Sla).slabase_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "slabase_BulkDeleteFailures": (o, n) => { (o as unknown as Sla).slabase_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "slabase_ProcessSessions": (o, n) => { (o as unknown as Sla).slabase_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "slaid": (o, n) => { (o as unknown as Sla).slaid = n.getStringValue(); },
            "slaidunique": (o, n) => { (o as unknown as Sla).slaidunique = n.getStringValue(); },
            "slatype": (o, n) => { (o as unknown as Sla).slatype = n.getNumberValue(); },
            "slaversion": (o, n) => { (o as unknown as Sla).slaversion = n.getNumberValue(); },
            "solutionid": (o, n) => { (o as unknown as Sla).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Sla).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Sla).statuscode = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Sla).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "versionnumber": (o, n) => { (o as unknown as Sla).versionnumber = n.getNumberValue(); },
            "workflowid": (o, n) => { (o as unknown as Sla).workflowid = n.getObjectValue<Workflow>(createWorkflowFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the incidentresolution_sla_slaid property value. 
     * @returns a incidentresolution
     */
    public get incidentresolution_sla_slaid() {
        return this._incidentresolution_sla_slaid;
    };
    /**
     * Sets the incidentresolution_sla_slaid property value. 
     * @param value Value to set for the incidentresolution_sla_slaid property.
     */
    public set incidentresolution_sla_slaid(value: Incidentresolution[] | undefined) {
        this._incidentresolution_sla_slaid = value;
    };
    /**
     * Gets the incidentresolution_sla_slainvokedid property value. 
     * @returns a incidentresolution
     */
    public get incidentresolution_sla_slainvokedid() {
        return this._incidentresolution_sla_slainvokedid;
    };
    /**
     * Sets the incidentresolution_sla_slainvokedid property value. 
     * @param value Value to set for the incidentresolution_sla_slainvokedid property.
     */
    public set incidentresolution_sla_slainvokedid(value: Incidentresolution[] | undefined) {
        this._incidentresolution_sla_slainvokedid = value;
    };
    /**
     * Gets the isdefault property value. 
     * @returns a boolean
     */
    public get isdefault() {
        return this._isdefault;
    };
    /**
     * Sets the isdefault property value. 
     * @param value Value to set for the isdefault property.
     */
    public set isdefault(value: boolean | undefined) {
        this._isdefault = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
    };
    /**
     * Gets the manualsla_account property value. 
     * @returns a account
     */
    public get manualsla_account() {
        return this._manualsla_account;
    };
    /**
     * Sets the manualsla_account property value. 
     * @param value Value to set for the manualsla_account property.
     */
    public set manualsla_account(value: Account[] | undefined) {
        this._manualsla_account = value;
    };
    /**
     * Gets the manualsla_activitypointer property value. 
     * @returns a activitypointer
     */
    public get manualsla_activitypointer() {
        return this._manualsla_activitypointer;
    };
    /**
     * Sets the manualsla_activitypointer property value. 
     * @param value Value to set for the manualsla_activitypointer property.
     */
    public set manualsla_activitypointer(value: Activitypointer[] | undefined) {
        this._manualsla_activitypointer = value;
    };
    /**
     * Gets the manualsla_appointment property value. 
     * @returns a appointment
     */
    public get manualsla_appointment() {
        return this._manualsla_appointment;
    };
    /**
     * Sets the manualsla_appointment property value. 
     * @param value Value to set for the manualsla_appointment property.
     */
    public set manualsla_appointment(value: Appointment[] | undefined) {
        this._manualsla_appointment = value;
    };
    /**
     * Gets the manualsla_cases property value. 
     * @returns a incident
     */
    public get manualsla_cases() {
        return this._manualsla_cases;
    };
    /**
     * Sets the manualsla_cases property value. 
     * @param value Value to set for the manualsla_cases property.
     */
    public set manualsla_cases(value: Incident[] | undefined) {
        this._manualsla_cases = value;
    };
    /**
     * Gets the manualsla_contact property value. 
     * @returns a contact
     */
    public get manualsla_contact() {
        return this._manualsla_contact;
    };
    /**
     * Sets the manualsla_contact property value. 
     * @param value Value to set for the manualsla_contact property.
     */
    public set manualsla_contact(value: Contact[] | undefined) {
        this._manualsla_contact = value;
    };
    /**
     * Gets the manualsla_email property value. 
     * @returns a email
     */
    public get manualsla_email() {
        return this._manualsla_email;
    };
    /**
     * Sets the manualsla_email property value. 
     * @param value Value to set for the manualsla_email property.
     */
    public set manualsla_email(value: Email[] | undefined) {
        this._manualsla_email = value;
    };
    /**
     * Gets the manualsla_fax property value. 
     * @returns a fax
     */
    public get manualsla_fax() {
        return this._manualsla_fax;
    };
    /**
     * Sets the manualsla_fax property value. 
     * @param value Value to set for the manualsla_fax property.
     */
    public set manualsla_fax(value: Fax[] | undefined) {
        this._manualsla_fax = value;
    };
    /**
     * Gets the manualsla_invoice property value. 
     * @returns a invoice
     */
    public get manualsla_invoice() {
        return this._manualsla_invoice;
    };
    /**
     * Sets the manualsla_invoice property value. 
     * @param value Value to set for the manualsla_invoice property.
     */
    public set manualsla_invoice(value: Invoice[] | undefined) {
        this._manualsla_invoice = value;
    };
    /**
     * Gets the manualsla_lead property value. 
     * @returns a lead
     */
    public get manualsla_lead() {
        return this._manualsla_lead;
    };
    /**
     * Sets the manualsla_lead property value. 
     * @param value Value to set for the manualsla_lead property.
     */
    public set manualsla_lead(value: Lead[] | undefined) {
        this._manualsla_lead = value;
    };
    /**
     * Gets the manualsla_letter property value. 
     * @returns a letter
     */
    public get manualsla_letter() {
        return this._manualsla_letter;
    };
    /**
     * Sets the manualsla_letter property value. 
     * @param value Value to set for the manualsla_letter property.
     */
    public set manualsla_letter(value: Letter[] | undefined) {
        this._manualsla_letter = value;
    };
    /**
     * Gets the manualsla_opportunity property value. 
     * @returns a opportunity
     */
    public get manualsla_opportunity() {
        return this._manualsla_opportunity;
    };
    /**
     * Sets the manualsla_opportunity property value. 
     * @param value Value to set for the manualsla_opportunity property.
     */
    public set manualsla_opportunity(value: Opportunity[] | undefined) {
        this._manualsla_opportunity = value;
    };
    /**
     * Gets the manualsla_phonecall property value. 
     * @returns a phonecall
     */
    public get manualsla_phonecall() {
        return this._manualsla_phonecall;
    };
    /**
     * Sets the manualsla_phonecall property value. 
     * @param value Value to set for the manualsla_phonecall property.
     */
    public set manualsla_phonecall(value: Phonecall[] | undefined) {
        this._manualsla_phonecall = value;
    };
    /**
     * Gets the manualsla_quote property value. 
     * @returns a quote
     */
    public get manualsla_quote() {
        return this._manualsla_quote;
    };
    /**
     * Sets the manualsla_quote property value. 
     * @param value Value to set for the manualsla_quote property.
     */
    public set manualsla_quote(value: Quote[] | undefined) {
        this._manualsla_quote = value;
    };
    /**
     * Gets the manualsla_salesorder property value. 
     * @returns a salesorder
     */
    public get manualsla_salesorder() {
        return this._manualsla_salesorder;
    };
    /**
     * Sets the manualsla_salesorder property value. 
     * @param value Value to set for the manualsla_salesorder property.
     */
    public set manualsla_salesorder(value: Salesorder[] | undefined) {
        this._manualsla_salesorder = value;
    };
    /**
     * Gets the manualsla_serviceappointment property value. 
     * @returns a serviceappointment
     */
    public get manualsla_serviceappointment() {
        return this._manualsla_serviceappointment;
    };
    /**
     * Sets the manualsla_serviceappointment property value. 
     * @param value Value to set for the manualsla_serviceappointment property.
     */
    public set manualsla_serviceappointment(value: Serviceappointment[] | undefined) {
        this._manualsla_serviceappointment = value;
    };
    /**
     * Gets the manualsla_socialactivity property value. 
     * @returns a socialactivity
     */
    public get manualsla_socialactivity() {
        return this._manualsla_socialactivity;
    };
    /**
     * Sets the manualsla_socialactivity property value. 
     * @param value Value to set for the manualsla_socialactivity property.
     */
    public set manualsla_socialactivity(value: Socialactivity[] | undefined) {
        this._manualsla_socialactivity = value;
    };
    /**
     * Gets the manualsla_task property value. 
     * @returns a task
     */
    public get manualsla_task() {
        return this._manualsla_task;
    };
    /**
     * Sets the manualsla_task property value. 
     * @param value Value to set for the manualsla_task property.
     */
    public set manualsla_task(value: Task[] | undefined) {
        this._manualsla_task = value;
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
     * Gets the msdyn_approval_sla_slaid property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_approval_sla_slaid() {
        return this._msdyn_approval_sla_slaid;
    };
    /**
     * Sets the msdyn_approval_sla_slaid property value. 
     * @param value Value to set for the msdyn_approval_sla_slaid property.
     */
    public set msdyn_approval_sla_slaid(value: Msdyn_approval[] | undefined) {
        this._msdyn_approval_sla_slaid = value;
    };
    /**
     * Gets the msdyn_approval_sla_slainvokedid property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_approval_sla_slainvokedid() {
        return this._msdyn_approval_sla_slainvokedid;
    };
    /**
     * Sets the msdyn_approval_sla_slainvokedid property value. 
     * @param value Value to set for the msdyn_approval_sla_slainvokedid property.
     */
    public set msdyn_approval_sla_slainvokedid(value: Msdyn_approval[] | undefined) {
        this._msdyn_approval_sla_slainvokedid = value;
    };
    /**
     * Gets the msdyn_bookingalert_sla_slaid property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_bookingalert_sla_slaid() {
        return this._msdyn_bookingalert_sla_slaid;
    };
    /**
     * Sets the msdyn_bookingalert_sla_slaid property value. 
     * @param value Value to set for the msdyn_bookingalert_sla_slaid property.
     */
    public set msdyn_bookingalert_sla_slaid(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_bookingalert_sla_slaid = value;
    };
    /**
     * Gets the msdyn_bookingalert_sla_slainvokedid property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_bookingalert_sla_slainvokedid() {
        return this._msdyn_bookingalert_sla_slainvokedid;
    };
    /**
     * Sets the msdyn_bookingalert_sla_slainvokedid property value. 
     * @param value Value to set for the msdyn_bookingalert_sla_slainvokedid property.
     */
    public set msdyn_bookingalert_sla_slainvokedid(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_bookingalert_sla_slainvokedid = value;
    };
    /**
     * Gets the msdyn_migrationtracker_LegacySLA_sla property value. 
     * @returns a msdyn_migrationtracker
     */
    public get msdyn_migrationtracker_LegacySLA_sla() {
        return this._msdyn_migrationtracker_LegacySLA_sla;
    };
    /**
     * Sets the msdyn_migrationtracker_LegacySLA_sla property value. 
     * @param value Value to set for the msdyn_migrationtracker_LegacySLA_sla property.
     */
    public set msdyn_migrationtracker_LegacySLA_sla(value: Msdyn_migrationtracker[] | undefined) {
        this._msdyn_migrationtracker_LegacySLA_sla = value;
    };
    /**
     * Gets the msdyn_migrationtracker_ModernSLA_sla property value. 
     * @returns a msdyn_migrationtracker
     */
    public get msdyn_migrationtracker_ModernSLA_sla() {
        return this._msdyn_migrationtracker_ModernSLA_sla;
    };
    /**
     * Sets the msdyn_migrationtracker_ModernSLA_sla property value. 
     * @param value Value to set for the msdyn_migrationtracker_ModernSLA_sla property.
     */
    public set msdyn_migrationtracker_ModernSLA_sla(value: Msdyn_migrationtracker[] | undefined) {
        this._msdyn_migrationtracker_ModernSLA_sla = value;
    };
    /**
     * Gets the msdyn_ocliveworkitem_sla_slaid property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_ocliveworkitem_sla_slaid() {
        return this._msdyn_ocliveworkitem_sla_slaid;
    };
    /**
     * Sets the msdyn_ocliveworkitem_sla_slaid property value. 
     * @param value Value to set for the msdyn_ocliveworkitem_sla_slaid property.
     */
    public set msdyn_ocliveworkitem_sla_slaid(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_ocliveworkitem_sla_slaid = value;
    };
    /**
     * Gets the msdyn_ocliveworkitem_sla_slainvokedid property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_ocliveworkitem_sla_slainvokedid() {
        return this._msdyn_ocliveworkitem_sla_slainvokedid;
    };
    /**
     * Sets the msdyn_ocliveworkitem_sla_slainvokedid property value. 
     * @param value Value to set for the msdyn_ocliveworkitem_sla_slainvokedid property.
     */
    public set msdyn_ocliveworkitem_sla_slainvokedid(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_ocliveworkitem_sla_slainvokedid = value;
    };
    /**
     * Gets the msdyn_ocoutboundmessage_sla_slaid property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_ocoutboundmessage_sla_slaid() {
        return this._msdyn_ocoutboundmessage_sla_slaid;
    };
    /**
     * Sets the msdyn_ocoutboundmessage_sla_slaid property value. 
     * @param value Value to set for the msdyn_ocoutboundmessage_sla_slaid property.
     */
    public set msdyn_ocoutboundmessage_sla_slaid(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_ocoutboundmessage_sla_slaid = value;
    };
    /**
     * Gets the msdyn_ocoutboundmessage_sla_slainvokedid property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_ocoutboundmessage_sla_slainvokedid() {
        return this._msdyn_ocoutboundmessage_sla_slainvokedid;
    };
    /**
     * Sets the msdyn_ocoutboundmessage_sla_slainvokedid property value. 
     * @param value Value to set for the msdyn_ocoutboundmessage_sla_slainvokedid property.
     */
    public set msdyn_ocoutboundmessage_sla_slainvokedid(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_ocoutboundmessage_sla_slainvokedid = value;
    };
    /**
     * Gets the msdyn_ocsession_sla_slaid property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_ocsession_sla_slaid() {
        return this._msdyn_ocsession_sla_slaid;
    };
    /**
     * Sets the msdyn_ocsession_sla_slaid property value. 
     * @param value Value to set for the msdyn_ocsession_sla_slaid property.
     */
    public set msdyn_ocsession_sla_slaid(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_ocsession_sla_slaid = value;
    };
    /**
     * Gets the msdyn_ocsession_sla_slainvokedid property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_ocsession_sla_slainvokedid() {
        return this._msdyn_ocsession_sla_slainvokedid;
    };
    /**
     * Sets the msdyn_ocsession_sla_slainvokedid property value. 
     * @param value Value to set for the msdyn_ocsession_sla_slainvokedid property.
     */
    public set msdyn_ocsession_sla_slainvokedid(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_ocsession_sla_slainvokedid = value;
    };
    /**
     * Gets the msfp_alert_sla_slaid property value. 
     * @returns a msfp_alert
     */
    public get msfp_alert_sla_slaid() {
        return this._msfp_alert_sla_slaid;
    };
    /**
     * Sets the msfp_alert_sla_slaid property value. 
     * @param value Value to set for the msfp_alert_sla_slaid property.
     */
    public set msfp_alert_sla_slaid(value: Msfp_alert[] | undefined) {
        this._msfp_alert_sla_slaid = value;
    };
    /**
     * Gets the msfp_alert_sla_slainvokedid property value. 
     * @returns a msfp_alert
     */
    public get msfp_alert_sla_slainvokedid() {
        return this._msfp_alert_sla_slainvokedid;
    };
    /**
     * Sets the msfp_alert_sla_slainvokedid property value. 
     * @param value Value to set for the msfp_alert_sla_slainvokedid property.
     */
    public set msfp_alert_sla_slainvokedid(value: Msfp_alert[] | undefined) {
        this._msfp_alert_sla_slainvokedid = value;
    };
    /**
     * Gets the msfp_surveyinvite_sla_slaid property value. 
     * @returns a msfp_surveyinvite
     */
    public get msfp_surveyinvite_sla_slaid() {
        return this._msfp_surveyinvite_sla_slaid;
    };
    /**
     * Sets the msfp_surveyinvite_sla_slaid property value. 
     * @param value Value to set for the msfp_surveyinvite_sla_slaid property.
     */
    public set msfp_surveyinvite_sla_slaid(value: Msfp_surveyinvite[] | undefined) {
        this._msfp_surveyinvite_sla_slaid = value;
    };
    /**
     * Gets the msfp_surveyinvite_sla_slainvokedid property value. 
     * @returns a msfp_surveyinvite
     */
    public get msfp_surveyinvite_sla_slainvokedid() {
        return this._msfp_surveyinvite_sla_slainvokedid;
    };
    /**
     * Sets the msfp_surveyinvite_sla_slainvokedid property value. 
     * @param value Value to set for the msfp_surveyinvite_sla_slainvokedid property.
     */
    public set msfp_surveyinvite_sla_slainvokedid(value: Msfp_surveyinvite[] | undefined) {
        this._msfp_surveyinvite_sla_slainvokedid = value;
    };
    /**
     * Gets the msfp_surveyresponse_sla_slaid property value. 
     * @returns a msfp_surveyresponse
     */
    public get msfp_surveyresponse_sla_slaid() {
        return this._msfp_surveyresponse_sla_slaid;
    };
    /**
     * Sets the msfp_surveyresponse_sla_slaid property value. 
     * @param value Value to set for the msfp_surveyresponse_sla_slaid property.
     */
    public set msfp_surveyresponse_sla_slaid(value: Msfp_surveyresponse[] | undefined) {
        this._msfp_surveyresponse_sla_slaid = value;
    };
    /**
     * Gets the msfp_surveyresponse_sla_slainvokedid property value. 
     * @returns a msfp_surveyresponse
     */
    public get msfp_surveyresponse_sla_slainvokedid() {
        return this._msfp_surveyresponse_sla_slainvokedid;
    };
    /**
     * Sets the msfp_surveyresponse_sla_slainvokedid property value. 
     * @param value Value to set for the msfp_surveyresponse_sla_slainvokedid property.
     */
    public set msfp_surveyresponse_sla_slainvokedid(value: Msfp_surveyresponse[] | undefined) {
        this._msfp_surveyresponse_sla_slainvokedid = value;
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
     * Gets the objecttypecode property value. 
     * @returns a integer
     */
    public get objecttypecode() {
        return this._objecttypecode;
    };
    /**
     * Sets the objecttypecode property value. 
     * @param value Value to set for the objecttypecode property.
     */
    public set objecttypecode(value: number | undefined) {
        this._objecttypecode = value;
    };
    /**
     * Gets the opportunityclose_sla_slaid property value. 
     * @returns a opportunityclose
     */
    public get opportunityclose_sla_slaid() {
        return this._opportunityclose_sla_slaid;
    };
    /**
     * Sets the opportunityclose_sla_slaid property value. 
     * @param value Value to set for the opportunityclose_sla_slaid property.
     */
    public set opportunityclose_sla_slaid(value: Opportunityclose[] | undefined) {
        this._opportunityclose_sla_slaid = value;
    };
    /**
     * Gets the opportunityclose_sla_slainvokedid property value. 
     * @returns a opportunityclose
     */
    public get opportunityclose_sla_slainvokedid() {
        return this._opportunityclose_sla_slainvokedid;
    };
    /**
     * Sets the opportunityclose_sla_slainvokedid property value. 
     * @param value Value to set for the opportunityclose_sla_slainvokedid property.
     */
    public set opportunityclose_sla_slainvokedid(value: Opportunityclose[] | undefined) {
        this._opportunityclose_sla_slainvokedid = value;
    };
    /**
     * Gets the orderclose_sla_slaid property value. 
     * @returns a orderclose
     */
    public get orderclose_sla_slaid() {
        return this._orderclose_sla_slaid;
    };
    /**
     * Sets the orderclose_sla_slaid property value. 
     * @param value Value to set for the orderclose_sla_slaid property.
     */
    public set orderclose_sla_slaid(value: Orderclose[] | undefined) {
        this._orderclose_sla_slaid = value;
    };
    /**
     * Gets the orderclose_sla_slainvokedid property value. 
     * @returns a orderclose
     */
    public get orderclose_sla_slainvokedid() {
        return this._orderclose_sla_slainvokedid;
    };
    /**
     * Sets the orderclose_sla_slainvokedid property value. 
     * @param value Value to set for the orderclose_sla_slainvokedid property.
     */
    public set orderclose_sla_slainvokedid(value: Orderclose[] | undefined) {
        this._orderclose_sla_slainvokedid = value;
    };
    /**
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
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
     * Gets the primaryentityotc property value. 
     * @returns a integer
     */
    public get primaryentityotc() {
        return this._primaryentityotc;
    };
    /**
     * Sets the primaryentityotc property value. 
     * @param value Value to set for the primaryentityotc property.
     */
    public set primaryentityotc(value: number | undefined) {
        this._primaryentityotc = value;
    };
    /**
     * Gets the quoteclose_sla_slaid property value. 
     * @returns a quoteclose
     */
    public get quoteclose_sla_slaid() {
        return this._quoteclose_sla_slaid;
    };
    /**
     * Sets the quoteclose_sla_slaid property value. 
     * @param value Value to set for the quoteclose_sla_slaid property.
     */
    public set quoteclose_sla_slaid(value: Quoteclose[] | undefined) {
        this._quoteclose_sla_slaid = value;
    };
    /**
     * Gets the quoteclose_sla_slainvokedid property value. 
     * @returns a quoteclose
     */
    public get quoteclose_sla_slainvokedid() {
        return this._quoteclose_sla_slainvokedid;
    };
    /**
     * Sets the quoteclose_sla_slainvokedid property value. 
     * @param value Value to set for the quoteclose_sla_slainvokedid property.
     */
    public set quoteclose_sla_slainvokedid(value: Quoteclose[] | undefined) {
        this._quoteclose_sla_slainvokedid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_businesshoursid_value", this._businesshoursid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeStringValue("_workflowid_value", this._workflowid_value);
        writer.writeBooleanValue("allowpauseresume", this.allowpauseresume);
        writer.writeStringValue("applicablefrom", this.applicablefrom);
        writer.writeNumberValue("applicablefrompicklist", this.applicablefrompicklist);
        writer.writeCollectionOfObjectValues<Bulkoperation>("bulkoperation_sla_slaid", this.bulkoperation_sla_slaid);
        writer.writeCollectionOfObjectValues<Bulkoperation>("bulkoperation_sla_slainvokedid", this.bulkoperation_sla_slainvokedid);
        writer.writeObjectValue<Calendar>("businesshoursid", this.businesshoursid);
        writer.writeCollectionOfObjectValues<Campaignactivity>("campaignactivity_sla_slaid", this.campaignactivity_sla_slaid);
        writer.writeCollectionOfObjectValues<Campaignactivity>("campaignactivity_sla_slainvokedid", this.campaignactivity_sla_slainvokedid);
        writer.writeCollectionOfObjectValues<Campaignresponse>("campaignresponse_sla_slaid", this.campaignresponse_sla_slaid);
        writer.writeCollectionOfObjectValues<Campaignresponse>("campaignresponse_sla_slainvokedid", this.campaignresponse_sla_slainvokedid);
        writer.writeStringValue("changedattributelist", this.changedattributelist);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeCollectionOfObjectValues<Incidentresolution>("incidentresolution_sla_slaid", this.incidentresolution_sla_slaid);
        writer.writeCollectionOfObjectValues<Incidentresolution>("incidentresolution_sla_slainvokedid", this.incidentresolution_sla_slainvokedid);
        writer.writeBooleanValue("isdefault", this.isdefault);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeCollectionOfObjectValues<Account>("manualsla_account", this.manualsla_account);
        writer.writeCollectionOfObjectValues<Activitypointer>("manualsla_activitypointer", this.manualsla_activitypointer);
        writer.writeCollectionOfObjectValues<Appointment>("manualsla_appointment", this.manualsla_appointment);
        writer.writeCollectionOfObjectValues<Incident>("manualsla_cases", this.manualsla_cases);
        writer.writeCollectionOfObjectValues<Contact>("manualsla_contact", this.manualsla_contact);
        writer.writeCollectionOfObjectValues<Email>("manualsla_email", this.manualsla_email);
        writer.writeCollectionOfObjectValues<Fax>("manualsla_fax", this.manualsla_fax);
        writer.writeCollectionOfObjectValues<Invoice>("manualsla_invoice", this.manualsla_invoice);
        writer.writeCollectionOfObjectValues<Lead>("manualsla_lead", this.manualsla_lead);
        writer.writeCollectionOfObjectValues<Letter>("manualsla_letter", this.manualsla_letter);
        writer.writeCollectionOfObjectValues<Opportunity>("manualsla_opportunity", this.manualsla_opportunity);
        writer.writeCollectionOfObjectValues<Phonecall>("manualsla_phonecall", this.manualsla_phonecall);
        writer.writeCollectionOfObjectValues<Quote>("manualsla_quote", this.manualsla_quote);
        writer.writeCollectionOfObjectValues<Salesorder>("manualsla_salesorder", this.manualsla_salesorder);
        writer.writeCollectionOfObjectValues<Serviceappointment>("manualsla_serviceappointment", this.manualsla_serviceappointment);
        writer.writeCollectionOfObjectValues<Socialactivity>("manualsla_socialactivity", this.manualsla_socialactivity);
        writer.writeCollectionOfObjectValues<Task>("manualsla_task", this.manualsla_task);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_approval_sla_slaid", this.msdyn_approval_sla_slaid);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_approval_sla_slainvokedid", this.msdyn_approval_sla_slainvokedid);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_bookingalert_sla_slaid", this.msdyn_bookingalert_sla_slaid);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_bookingalert_sla_slainvokedid", this.msdyn_bookingalert_sla_slainvokedid);
        writer.writeCollectionOfObjectValues<Msdyn_migrationtracker>("msdyn_migrationtracker_LegacySLA_sla", this.msdyn_migrationtracker_LegacySLA_sla);
        writer.writeCollectionOfObjectValues<Msdyn_migrationtracker>("msdyn_migrationtracker_ModernSLA_sla", this.msdyn_migrationtracker_ModernSLA_sla);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_ocliveworkitem_sla_slaid", this.msdyn_ocliveworkitem_sla_slaid);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_ocliveworkitem_sla_slainvokedid", this.msdyn_ocliveworkitem_sla_slainvokedid);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_ocoutboundmessage_sla_slaid", this.msdyn_ocoutboundmessage_sla_slaid);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_ocoutboundmessage_sla_slainvokedid", this.msdyn_ocoutboundmessage_sla_slainvokedid);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_ocsession_sla_slaid", this.msdyn_ocsession_sla_slaid);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_ocsession_sla_slainvokedid", this.msdyn_ocsession_sla_slainvokedid);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msfp_alert_sla_slaid", this.msfp_alert_sla_slaid);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msfp_alert_sla_slainvokedid", this.msfp_alert_sla_slainvokedid);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msfp_surveyinvite_sla_slaid", this.msfp_surveyinvite_sla_slaid);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msfp_surveyinvite_sla_slainvokedid", this.msfp_surveyinvite_sla_slainvokedid);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msfp_surveyresponse_sla_slaid", this.msfp_surveyresponse_sla_slaid);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msfp_surveyresponse_sla_slainvokedid", this.msfp_surveyresponse_sla_slainvokedid);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("objecttypecode", this.objecttypecode);
        writer.writeCollectionOfObjectValues<Opportunityclose>("opportunityclose_sla_slaid", this.opportunityclose_sla_slaid);
        writer.writeCollectionOfObjectValues<Opportunityclose>("opportunityclose_sla_slainvokedid", this.opportunityclose_sla_slainvokedid);
        writer.writeCollectionOfObjectValues<Orderclose>("orderclose_sla_slaid", this.orderclose_sla_slaid);
        writer.writeCollectionOfObjectValues<Orderclose>("orderclose_sla_slainvokedid", this.orderclose_sla_slainvokedid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("primaryentityotc", this.primaryentityotc);
        writer.writeCollectionOfObjectValues<Quoteclose>("quoteclose_sla_slaid", this.quoteclose_sla_slaid);
        writer.writeCollectionOfObjectValues<Quoteclose>("quoteclose_sla_slainvokedid", this.quoteclose_sla_slainvokedid);
        writer.writeCollectionOfObjectValues<Account>("sla_account", this.sla_account);
        writer.writeCollectionOfObjectValues<Activitypointer>("sla_activitypointer", this.sla_activitypointer);
        writer.writeCollectionOfObjectValues<Annotation>("sla_Annotation", this.sla_Annotation);
        writer.writeCollectionOfObjectValues<Appointment>("sla_appointment", this.sla_appointment);
        writer.writeCollectionOfObjectValues<Incident>("sla_cases", this.sla_cases);
        writer.writeCollectionOfObjectValues<Contact>("sla_contact", this.sla_contact);
        writer.writeCollectionOfObjectValues<Email>("sla_email", this.sla_email);
        writer.writeCollectionOfObjectValues<Entitlement>("sla_entitlement", this.sla_entitlement);
        writer.writeCollectionOfObjectValues<Entitlementtemplate>("sla_entitlementtemplate", this.sla_entitlementtemplate);
        writer.writeCollectionOfObjectValues<Fax>("sla_fax", this.sla_fax);
        writer.writeCollectionOfObjectValues<Invoice>("sla_invoice", this.sla_invoice);
        writer.writeCollectionOfObjectValues<Lead>("sla_lead", this.sla_lead);
        writer.writeCollectionOfObjectValues<Letter>("sla_letter", this.sla_letter);
        writer.writeCollectionOfObjectValues<Opportunity>("sla_opportunity", this.sla_opportunity);
        writer.writeCollectionOfObjectValues<Phonecall>("sla_phonecall", this.sla_phonecall);
        writer.writeCollectionOfObjectValues<Quote>("sla_quote", this.sla_quote);
        writer.writeCollectionOfObjectValues<Salesorder>("sla_salesorder", this.sla_salesorder);
        writer.writeCollectionOfObjectValues<Serviceappointment>("sla_serviceappointment", this.sla_serviceappointment);
        writer.writeCollectionOfObjectValues<Slaitem>("sla_slaitem_slaId", this.sla_slaitem_slaId);
        writer.writeCollectionOfObjectValues<Socialactivity>("sla_socialactivity", this.sla_socialactivity);
        writer.writeCollectionOfObjectValues<Syncerror>("sLA_SyncErrors", this.sLA_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("sla_task", this.sla_task);
        writer.writeCollectionOfObjectValues<Asyncoperation>("slabase_AsyncOperations", this.slabase_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("slabase_BulkDeleteFailures", this.slabase_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Processsession>("slabase_ProcessSessions", this.slabase_ProcessSessions);
        writer.writeStringValue("slaid", this.slaid);
        writer.writeStringValue("slaidunique", this.slaidunique);
        writer.writeNumberValue("slatype", this.slatype);
        writer.writeNumberValue("slaversion", this.slaversion);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeObjectValue<Workflow>("workflowid", this.workflowid);
    };
    /**
     * Gets the sla_account property value. 
     * @returns a account
     */
    public get sla_account() {
        return this._sla_account;
    };
    /**
     * Sets the sla_account property value. 
     * @param value Value to set for the sla_account property.
     */
    public set sla_account(value: Account[] | undefined) {
        this._sla_account = value;
    };
    /**
     * Gets the sla_activitypointer property value. 
     * @returns a activitypointer
     */
    public get sla_activitypointer() {
        return this._sla_activitypointer;
    };
    /**
     * Sets the sla_activitypointer property value. 
     * @param value Value to set for the sla_activitypointer property.
     */
    public set sla_activitypointer(value: Activitypointer[] | undefined) {
        this._sla_activitypointer = value;
    };
    /**
     * Gets the sla_Annotation property value. 
     * @returns a annotation
     */
    public get sla_Annotation() {
        return this._sla_Annotation;
    };
    /**
     * Sets the sla_Annotation property value. 
     * @param value Value to set for the sla_Annotation property.
     */
    public set sla_Annotation(value: Annotation[] | undefined) {
        this._sla_Annotation = value;
    };
    /**
     * Gets the sla_appointment property value. 
     * @returns a appointment
     */
    public get sla_appointment() {
        return this._sla_appointment;
    };
    /**
     * Sets the sla_appointment property value. 
     * @param value Value to set for the sla_appointment property.
     */
    public set sla_appointment(value: Appointment[] | undefined) {
        this._sla_appointment = value;
    };
    /**
     * Gets the sla_cases property value. 
     * @returns a incident
     */
    public get sla_cases() {
        return this._sla_cases;
    };
    /**
     * Sets the sla_cases property value. 
     * @param value Value to set for the sla_cases property.
     */
    public set sla_cases(value: Incident[] | undefined) {
        this._sla_cases = value;
    };
    /**
     * Gets the sla_contact property value. 
     * @returns a contact
     */
    public get sla_contact() {
        return this._sla_contact;
    };
    /**
     * Sets the sla_contact property value. 
     * @param value Value to set for the sla_contact property.
     */
    public set sla_contact(value: Contact[] | undefined) {
        this._sla_contact = value;
    };
    /**
     * Gets the sla_email property value. 
     * @returns a email
     */
    public get sla_email() {
        return this._sla_email;
    };
    /**
     * Sets the sla_email property value. 
     * @param value Value to set for the sla_email property.
     */
    public set sla_email(value: Email[] | undefined) {
        this._sla_email = value;
    };
    /**
     * Gets the sla_entitlement property value. 
     * @returns a entitlement
     */
    public get sla_entitlement() {
        return this._sla_entitlement;
    };
    /**
     * Sets the sla_entitlement property value. 
     * @param value Value to set for the sla_entitlement property.
     */
    public set sla_entitlement(value: Entitlement[] | undefined) {
        this._sla_entitlement = value;
    };
    /**
     * Gets the sla_entitlementtemplate property value. 
     * @returns a entitlementtemplate
     */
    public get sla_entitlementtemplate() {
        return this._sla_entitlementtemplate;
    };
    /**
     * Sets the sla_entitlementtemplate property value. 
     * @param value Value to set for the sla_entitlementtemplate property.
     */
    public set sla_entitlementtemplate(value: Entitlementtemplate[] | undefined) {
        this._sla_entitlementtemplate = value;
    };
    /**
     * Gets the sla_fax property value. 
     * @returns a fax
     */
    public get sla_fax() {
        return this._sla_fax;
    };
    /**
     * Sets the sla_fax property value. 
     * @param value Value to set for the sla_fax property.
     */
    public set sla_fax(value: Fax[] | undefined) {
        this._sla_fax = value;
    };
    /**
     * Gets the sla_invoice property value. 
     * @returns a invoice
     */
    public get sla_invoice() {
        return this._sla_invoice;
    };
    /**
     * Sets the sla_invoice property value. 
     * @param value Value to set for the sla_invoice property.
     */
    public set sla_invoice(value: Invoice[] | undefined) {
        this._sla_invoice = value;
    };
    /**
     * Gets the sla_lead property value. 
     * @returns a lead
     */
    public get sla_lead() {
        return this._sla_lead;
    };
    /**
     * Sets the sla_lead property value. 
     * @param value Value to set for the sla_lead property.
     */
    public set sla_lead(value: Lead[] | undefined) {
        this._sla_lead = value;
    };
    /**
     * Gets the sla_letter property value. 
     * @returns a letter
     */
    public get sla_letter() {
        return this._sla_letter;
    };
    /**
     * Sets the sla_letter property value. 
     * @param value Value to set for the sla_letter property.
     */
    public set sla_letter(value: Letter[] | undefined) {
        this._sla_letter = value;
    };
    /**
     * Gets the sla_opportunity property value. 
     * @returns a opportunity
     */
    public get sla_opportunity() {
        return this._sla_opportunity;
    };
    /**
     * Sets the sla_opportunity property value. 
     * @param value Value to set for the sla_opportunity property.
     */
    public set sla_opportunity(value: Opportunity[] | undefined) {
        this._sla_opportunity = value;
    };
    /**
     * Gets the sla_phonecall property value. 
     * @returns a phonecall
     */
    public get sla_phonecall() {
        return this._sla_phonecall;
    };
    /**
     * Sets the sla_phonecall property value. 
     * @param value Value to set for the sla_phonecall property.
     */
    public set sla_phonecall(value: Phonecall[] | undefined) {
        this._sla_phonecall = value;
    };
    /**
     * Gets the sla_quote property value. 
     * @returns a quote
     */
    public get sla_quote() {
        return this._sla_quote;
    };
    /**
     * Sets the sla_quote property value. 
     * @param value Value to set for the sla_quote property.
     */
    public set sla_quote(value: Quote[] | undefined) {
        this._sla_quote = value;
    };
    /**
     * Gets the sla_salesorder property value. 
     * @returns a salesorder
     */
    public get sla_salesorder() {
        return this._sla_salesorder;
    };
    /**
     * Sets the sla_salesorder property value. 
     * @param value Value to set for the sla_salesorder property.
     */
    public set sla_salesorder(value: Salesorder[] | undefined) {
        this._sla_salesorder = value;
    };
    /**
     * Gets the sla_serviceappointment property value. 
     * @returns a serviceappointment
     */
    public get sla_serviceappointment() {
        return this._sla_serviceappointment;
    };
    /**
     * Sets the sla_serviceappointment property value. 
     * @param value Value to set for the sla_serviceappointment property.
     */
    public set sla_serviceappointment(value: Serviceappointment[] | undefined) {
        this._sla_serviceappointment = value;
    };
    /**
     * Gets the sla_slaitem_slaId property value. 
     * @returns a slaitem
     */
    public get sla_slaitem_slaId() {
        return this._sla_slaitem_slaId;
    };
    /**
     * Sets the sla_slaitem_slaId property value. 
     * @param value Value to set for the sla_slaitem_slaId property.
     */
    public set sla_slaitem_slaId(value: Slaitem[] | undefined) {
        this._sla_slaitem_slaId = value;
    };
    /**
     * Gets the sla_socialactivity property value. 
     * @returns a socialactivity
     */
    public get sla_socialactivity() {
        return this._sla_socialactivity;
    };
    /**
     * Sets the sla_socialactivity property value. 
     * @param value Value to set for the sla_socialactivity property.
     */
    public set sla_socialactivity(value: Socialactivity[] | undefined) {
        this._sla_socialactivity = value;
    };
    /**
     * Gets the sLA_SyncErrors property value. 
     * @returns a syncerror
     */
    public get sLA_SyncErrors() {
        return this._sLA_SyncErrors;
    };
    /**
     * Sets the sLA_SyncErrors property value. 
     * @param value Value to set for the SLA_SyncErrors property.
     */
    public set sLA_SyncErrors(value: Syncerror[] | undefined) {
        this._sLA_SyncErrors = value;
    };
    /**
     * Gets the sla_task property value. 
     * @returns a task
     */
    public get sla_task() {
        return this._sla_task;
    };
    /**
     * Sets the sla_task property value. 
     * @param value Value to set for the sla_task property.
     */
    public set sla_task(value: Task[] | undefined) {
        this._sla_task = value;
    };
    /**
     * Gets the slabase_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get slabase_AsyncOperations() {
        return this._slabase_AsyncOperations;
    };
    /**
     * Sets the slabase_AsyncOperations property value. 
     * @param value Value to set for the slabase_AsyncOperations property.
     */
    public set slabase_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._slabase_AsyncOperations = value;
    };
    /**
     * Gets the slabase_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get slabase_BulkDeleteFailures() {
        return this._slabase_BulkDeleteFailures;
    };
    /**
     * Sets the slabase_BulkDeleteFailures property value. 
     * @param value Value to set for the slabase_BulkDeleteFailures property.
     */
    public set slabase_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._slabase_BulkDeleteFailures = value;
    };
    /**
     * Gets the slabase_ProcessSessions property value. 
     * @returns a processsession
     */
    public get slabase_ProcessSessions() {
        return this._slabase_ProcessSessions;
    };
    /**
     * Sets the slabase_ProcessSessions property value. 
     * @param value Value to set for the slabase_ProcessSessions property.
     */
    public set slabase_ProcessSessions(value: Processsession[] | undefined) {
        this._slabase_ProcessSessions = value;
    };
    /**
     * Gets the slaid property value. 
     * @returns a string
     */
    public get slaid() {
        return this._slaid;
    };
    /**
     * Sets the slaid property value. 
     * @param value Value to set for the slaid property.
     */
    public set slaid(value: string | undefined) {
        this._slaid = value;
    };
    /**
     * Gets the slaidunique property value. 
     * @returns a string
     */
    public get slaidunique() {
        return this._slaidunique;
    };
    /**
     * Sets the slaidunique property value. 
     * @param value Value to set for the slaidunique property.
     */
    public set slaidunique(value: string | undefined) {
        this._slaidunique = value;
    };
    /**
     * Gets the slatype property value. 
     * @returns a integer
     */
    public get slatype() {
        return this._slatype;
    };
    /**
     * Sets the slatype property value. 
     * @param value Value to set for the slatype property.
     */
    public set slatype(value: number | undefined) {
        this._slatype = value;
    };
    /**
     * Gets the slaversion property value. 
     * @returns a integer
     */
    public get slaversion() {
        return this._slaversion;
    };
    /**
     * Sets the slaversion property value. 
     * @param value Value to set for the slaversion property.
     */
    public set slaversion(value: number | undefined) {
        this._slaversion = value;
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
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
    /**
     * Gets the workflowid property value. 
     * @returns a workflow
     */
    public get workflowid() {
        return this._workflowid;
    };
    /**
     * Sets the workflowid property value. 
     * @param value Value to set for the workflowid property.
     */
    public set workflowid(value: Workflow | undefined) {
        this._workflowid = value;
    };
}
