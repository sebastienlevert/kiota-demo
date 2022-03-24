import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createBulkoperationFromDiscriminatorValue} from './createBulkoperationFromDiscriminatorValue';
import {createCampaignactivityFromDiscriminatorValue} from './createCampaignactivityFromDiscriminatorValue';
import {createCampaignFromDiscriminatorValue} from './createCampaignFromDiscriminatorValue';
import {createCampaignresponseFromDiscriminatorValue} from './createCampaignresponseFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createContractFromDiscriminatorValue} from './createContractFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createEntitlementFromDiscriminatorValue} from './createEntitlementFromDiscriminatorValue';
import {createEquipmentFromDiscriminatorValue} from './createEquipmentFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createIncidentresolutionFromDiscriminatorValue} from './createIncidentresolutionFromDiscriminatorValue';
import {createInvoiceFromDiscriminatorValue} from './createInvoiceFromDiscriminatorValue';
import {createKnowledgearticleFromDiscriminatorValue} from './createKnowledgearticleFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_salessuggestionFromDiscriminatorValue} from './createMsdyn_salessuggestionFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createOpportunitycloseFromDiscriminatorValue} from './createOpportunitycloseFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createOrdercloseFromDiscriminatorValue} from './createOrdercloseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createQueueFromDiscriminatorValue} from './createQueueFromDiscriminatorValue';
import {createQuotecloseFromDiscriminatorValue} from './createQuotecloseFromDiscriminatorValue';
import {createQuoteFromDiscriminatorValue} from './createQuoteFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createResourcespecFromDiscriminatorValue} from './createResourcespecFromDiscriminatorValue';
import {createSalesorderFromDiscriminatorValue} from './createSalesorderFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {Account, Activitypointer, Appointment, Bulkoperation, Campaign, Campaignactivity, Campaignresponse, Contact, Contract, Crmbaseentity, Email, Entitlement, Equipment, Fax, Incident, Incidentresolution, Invoice, Knowledgearticle, Lead, Letter, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_salessuggestion, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Opportunity, Opportunityclose, Orderclose, Phonecall, Queue, Quote, Quoteclose, Recurringappointmentmaster, Resourcespec, Salesorder, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Activityparty extends Crmbaseentity implements Parsable {
    private __activityid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __partyid_value?: string | undefined;
    private __resourcespecid_value?: string | undefined;
    private _activityid_activitypointer?: Activitypointer | undefined;
    private _activityid_appointment?: Appointment | undefined;
    private _activityid_campaignactivity?: Campaignactivity | undefined;
    private _activityid_campaignresponse?: Campaignresponse | undefined;
    private _activityid_email?: Email | undefined;
    private _activityid_fax?: Fax | undefined;
    private _activityid_incidentresolution?: Incidentresolution | undefined;
    private _activityid_letter?: Letter | undefined;
    private _activityid_msdyn_approval_activityparty?: Msdyn_approval | undefined;
    private _activityid_msdyn_bookingalert_activityparty?: Msdyn_bookingalert | undefined;
    private _activityid_msdyn_ocliveworkitem_activityparty?: Msdyn_ocliveworkitem | undefined;
    private _activityid_msdyn_ocoutboundmessage_activityparty?: Msdyn_ocoutboundmessage | undefined;
    private _activityid_msdyn_ocsession_activityparty?: Msdyn_ocsession | undefined;
    private _activityid_msfp_alert_activityparty?: Msfp_alert | undefined;
    private _activityid_msfp_surveyinvite_activityparty?: Msfp_surveyinvite | undefined;
    private _activityid_msfp_surveyresponse_activityparty?: Msfp_surveyresponse | undefined;
    private _activityid_opportunityclose?: Opportunityclose | undefined;
    private _activityid_orderclose?: Orderclose | undefined;
    private _activityid_phonecall?: Phonecall | undefined;
    private _activityid_quoteclose?: Quoteclose | undefined;
    private _activityid_recurringappointmentmaster?: Recurringappointmentmaster | undefined;
    private _activityid_serviceappointment?: Serviceappointment | undefined;
    private _activityid_socialactivity?: Socialactivity | undefined;
    private _activityid_task?: Task | undefined;
    private _activityParty_SyncErrors?: Syncerror[] | undefined;
    private _activitypartyid?: string | undefined;
    private _addressused?: string | undefined;
    private _addressusedemailcolumnnumber?: number | undefined;
    private _donotemail?: boolean | undefined;
    private _donotfax?: boolean | undefined;
    private _donotphone?: boolean | undefined;
    private _donotpostalmail?: boolean | undefined;
    private _effort?: number | undefined;
    private _exchangeentryid?: string | undefined;
    private _instancetypecode?: number | undefined;
    private _ispartydeleted?: boolean | undefined;
    private _participationtypemask?: number | undefined;
    private _partyid_account?: Account | undefined;
    private _partyid_bulkoperation?: Bulkoperation | undefined;
    private _partyid_campaign?: Campaign | undefined;
    private _partyid_campaignactivity?: Campaignactivity | undefined;
    private _partyid_contact?: Contact | undefined;
    private _partyid_contract?: Contract | undefined;
    private _partyid_entitlement?: Entitlement | undefined;
    private _partyid_equipment?: Equipment | undefined;
    private _partyid_incident?: Incident | undefined;
    private _partyid_invoice?: Invoice | undefined;
    private _partyid_knowledgearticle?: Knowledgearticle | undefined;
    private _partyid_lead?: Lead | undefined;
    private _partyid_msdyn_salessuggestion?: Msdyn_salessuggestion | undefined;
    private _partyid_opportunity?: Opportunity | undefined;
    private _partyid_queue?: Queue | undefined;
    private _partyid_quote?: Quote | undefined;
    private _partyid_salesorder?: Salesorder | undefined;
    private _partyid_systemuser?: Systemuser | undefined;
    private _resourcespecid?: Resourcespec | undefined;
    private _scheduledend?: Date | undefined;
    private _scheduledstart?: Date | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _activityid_value property value. 
     * @returns a string
     */
    public get _activityid_value() {
        return this.__activityid_value;
    };
    /**
     * Sets the _activityid_value property value. 
     * @param value Value to set for the _activityid_value property.
     */
    public set _activityid_value(value: string | undefined) {
        this.__activityid_value = value;
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
     * Gets the _partyid_value property value. 
     * @returns a string
     */
    public get _partyid_value() {
        return this.__partyid_value;
    };
    /**
     * Sets the _partyid_value property value. 
     * @param value Value to set for the _partyid_value property.
     */
    public set _partyid_value(value: string | undefined) {
        this.__partyid_value = value;
    };
    /**
     * Gets the _resourcespecid_value property value. 
     * @returns a string
     */
    public get _resourcespecid_value() {
        return this.__resourcespecid_value;
    };
    /**
     * Sets the _resourcespecid_value property value. 
     * @param value Value to set for the _resourcespecid_value property.
     */
    public set _resourcespecid_value(value: string | undefined) {
        this.__resourcespecid_value = value;
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
     * Gets the activityid_appointment property value. 
     * @returns a appointment
     */
    public get activityid_appointment() {
        return this._activityid_appointment;
    };
    /**
     * Sets the activityid_appointment property value. 
     * @param value Value to set for the activityid_appointment property.
     */
    public set activityid_appointment(value: Appointment | undefined) {
        this._activityid_appointment = value;
    };
    /**
     * Gets the activityid_campaignactivity property value. 
     * @returns a campaignactivity
     */
    public get activityid_campaignactivity() {
        return this._activityid_campaignactivity;
    };
    /**
     * Sets the activityid_campaignactivity property value. 
     * @param value Value to set for the activityid_campaignactivity property.
     */
    public set activityid_campaignactivity(value: Campaignactivity | undefined) {
        this._activityid_campaignactivity = value;
    };
    /**
     * Gets the activityid_campaignresponse property value. 
     * @returns a campaignresponse
     */
    public get activityid_campaignresponse() {
        return this._activityid_campaignresponse;
    };
    /**
     * Sets the activityid_campaignresponse property value. 
     * @param value Value to set for the activityid_campaignresponse property.
     */
    public set activityid_campaignresponse(value: Campaignresponse | undefined) {
        this._activityid_campaignresponse = value;
    };
    /**
     * Gets the activityid_email property value. 
     * @returns a email
     */
    public get activityid_email() {
        return this._activityid_email;
    };
    /**
     * Sets the activityid_email property value. 
     * @param value Value to set for the activityid_email property.
     */
    public set activityid_email(value: Email | undefined) {
        this._activityid_email = value;
    };
    /**
     * Gets the activityid_fax property value. 
     * @returns a fax
     */
    public get activityid_fax() {
        return this._activityid_fax;
    };
    /**
     * Sets the activityid_fax property value. 
     * @param value Value to set for the activityid_fax property.
     */
    public set activityid_fax(value: Fax | undefined) {
        this._activityid_fax = value;
    };
    /**
     * Gets the activityid_incidentresolution property value. 
     * @returns a incidentresolution
     */
    public get activityid_incidentresolution() {
        return this._activityid_incidentresolution;
    };
    /**
     * Sets the activityid_incidentresolution property value. 
     * @param value Value to set for the activityid_incidentresolution property.
     */
    public set activityid_incidentresolution(value: Incidentresolution | undefined) {
        this._activityid_incidentresolution = value;
    };
    /**
     * Gets the activityid_letter property value. 
     * @returns a letter
     */
    public get activityid_letter() {
        return this._activityid_letter;
    };
    /**
     * Sets the activityid_letter property value. 
     * @param value Value to set for the activityid_letter property.
     */
    public set activityid_letter(value: Letter | undefined) {
        this._activityid_letter = value;
    };
    /**
     * Gets the activityid_msdyn_approval_activityparty property value. 
     * @returns a msdyn_approval
     */
    public get activityid_msdyn_approval_activityparty() {
        return this._activityid_msdyn_approval_activityparty;
    };
    /**
     * Sets the activityid_msdyn_approval_activityparty property value. 
     * @param value Value to set for the activityid_msdyn_approval_activityparty property.
     */
    public set activityid_msdyn_approval_activityparty(value: Msdyn_approval | undefined) {
        this._activityid_msdyn_approval_activityparty = value;
    };
    /**
     * Gets the activityid_msdyn_bookingalert_activityparty property value. 
     * @returns a msdyn_bookingalert
     */
    public get activityid_msdyn_bookingalert_activityparty() {
        return this._activityid_msdyn_bookingalert_activityparty;
    };
    /**
     * Sets the activityid_msdyn_bookingalert_activityparty property value. 
     * @param value Value to set for the activityid_msdyn_bookingalert_activityparty property.
     */
    public set activityid_msdyn_bookingalert_activityparty(value: Msdyn_bookingalert | undefined) {
        this._activityid_msdyn_bookingalert_activityparty = value;
    };
    /**
     * Gets the activityid_msdyn_ocliveworkitem_activityparty property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get activityid_msdyn_ocliveworkitem_activityparty() {
        return this._activityid_msdyn_ocliveworkitem_activityparty;
    };
    /**
     * Sets the activityid_msdyn_ocliveworkitem_activityparty property value. 
     * @param value Value to set for the activityid_msdyn_ocliveworkitem_activityparty property.
     */
    public set activityid_msdyn_ocliveworkitem_activityparty(value: Msdyn_ocliveworkitem | undefined) {
        this._activityid_msdyn_ocliveworkitem_activityparty = value;
    };
    /**
     * Gets the activityid_msdyn_ocoutboundmessage_activityparty property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get activityid_msdyn_ocoutboundmessage_activityparty() {
        return this._activityid_msdyn_ocoutboundmessage_activityparty;
    };
    /**
     * Sets the activityid_msdyn_ocoutboundmessage_activityparty property value. 
     * @param value Value to set for the activityid_msdyn_ocoutboundmessage_activityparty property.
     */
    public set activityid_msdyn_ocoutboundmessage_activityparty(value: Msdyn_ocoutboundmessage | undefined) {
        this._activityid_msdyn_ocoutboundmessage_activityparty = value;
    };
    /**
     * Gets the activityid_msdyn_ocsession_activityparty property value. 
     * @returns a msdyn_ocsession
     */
    public get activityid_msdyn_ocsession_activityparty() {
        return this._activityid_msdyn_ocsession_activityparty;
    };
    /**
     * Sets the activityid_msdyn_ocsession_activityparty property value. 
     * @param value Value to set for the activityid_msdyn_ocsession_activityparty property.
     */
    public set activityid_msdyn_ocsession_activityparty(value: Msdyn_ocsession | undefined) {
        this._activityid_msdyn_ocsession_activityparty = value;
    };
    /**
     * Gets the activityid_msfp_alert_activityparty property value. 
     * @returns a msfp_alert
     */
    public get activityid_msfp_alert_activityparty() {
        return this._activityid_msfp_alert_activityparty;
    };
    /**
     * Sets the activityid_msfp_alert_activityparty property value. 
     * @param value Value to set for the activityid_msfp_alert_activityparty property.
     */
    public set activityid_msfp_alert_activityparty(value: Msfp_alert | undefined) {
        this._activityid_msfp_alert_activityparty = value;
    };
    /**
     * Gets the activityid_msfp_surveyinvite_activityparty property value. 
     * @returns a msfp_surveyinvite
     */
    public get activityid_msfp_surveyinvite_activityparty() {
        return this._activityid_msfp_surveyinvite_activityparty;
    };
    /**
     * Sets the activityid_msfp_surveyinvite_activityparty property value. 
     * @param value Value to set for the activityid_msfp_surveyinvite_activityparty property.
     */
    public set activityid_msfp_surveyinvite_activityparty(value: Msfp_surveyinvite | undefined) {
        this._activityid_msfp_surveyinvite_activityparty = value;
    };
    /**
     * Gets the activityid_msfp_surveyresponse_activityparty property value. 
     * @returns a msfp_surveyresponse
     */
    public get activityid_msfp_surveyresponse_activityparty() {
        return this._activityid_msfp_surveyresponse_activityparty;
    };
    /**
     * Sets the activityid_msfp_surveyresponse_activityparty property value. 
     * @param value Value to set for the activityid_msfp_surveyresponse_activityparty property.
     */
    public set activityid_msfp_surveyresponse_activityparty(value: Msfp_surveyresponse | undefined) {
        this._activityid_msfp_surveyresponse_activityparty = value;
    };
    /**
     * Gets the activityid_opportunityclose property value. 
     * @returns a opportunityclose
     */
    public get activityid_opportunityclose() {
        return this._activityid_opportunityclose;
    };
    /**
     * Sets the activityid_opportunityclose property value. 
     * @param value Value to set for the activityid_opportunityclose property.
     */
    public set activityid_opportunityclose(value: Opportunityclose | undefined) {
        this._activityid_opportunityclose = value;
    };
    /**
     * Gets the activityid_orderclose property value. 
     * @returns a orderclose
     */
    public get activityid_orderclose() {
        return this._activityid_orderclose;
    };
    /**
     * Sets the activityid_orderclose property value. 
     * @param value Value to set for the activityid_orderclose property.
     */
    public set activityid_orderclose(value: Orderclose | undefined) {
        this._activityid_orderclose = value;
    };
    /**
     * Gets the activityid_phonecall property value. 
     * @returns a phonecall
     */
    public get activityid_phonecall() {
        return this._activityid_phonecall;
    };
    /**
     * Sets the activityid_phonecall property value. 
     * @param value Value to set for the activityid_phonecall property.
     */
    public set activityid_phonecall(value: Phonecall | undefined) {
        this._activityid_phonecall = value;
    };
    /**
     * Gets the activityid_quoteclose property value. 
     * @returns a quoteclose
     */
    public get activityid_quoteclose() {
        return this._activityid_quoteclose;
    };
    /**
     * Sets the activityid_quoteclose property value. 
     * @param value Value to set for the activityid_quoteclose property.
     */
    public set activityid_quoteclose(value: Quoteclose | undefined) {
        this._activityid_quoteclose = value;
    };
    /**
     * Gets the activityid_recurringappointmentmaster property value. 
     * @returns a recurringappointmentmaster
     */
    public get activityid_recurringappointmentmaster() {
        return this._activityid_recurringappointmentmaster;
    };
    /**
     * Sets the activityid_recurringappointmentmaster property value. 
     * @param value Value to set for the activityid_recurringappointmentmaster property.
     */
    public set activityid_recurringappointmentmaster(value: Recurringappointmentmaster | undefined) {
        this._activityid_recurringappointmentmaster = value;
    };
    /**
     * Gets the activityid_serviceappointment property value. 
     * @returns a serviceappointment
     */
    public get activityid_serviceappointment() {
        return this._activityid_serviceappointment;
    };
    /**
     * Sets the activityid_serviceappointment property value. 
     * @param value Value to set for the activityid_serviceappointment property.
     */
    public set activityid_serviceappointment(value: Serviceappointment | undefined) {
        this._activityid_serviceappointment = value;
    };
    /**
     * Gets the activityid_socialactivity property value. 
     * @returns a socialactivity
     */
    public get activityid_socialactivity() {
        return this._activityid_socialactivity;
    };
    /**
     * Sets the activityid_socialactivity property value. 
     * @param value Value to set for the activityid_socialactivity property.
     */
    public set activityid_socialactivity(value: Socialactivity | undefined) {
        this._activityid_socialactivity = value;
    };
    /**
     * Gets the activityid_task property value. 
     * @returns a task
     */
    public get activityid_task() {
        return this._activityid_task;
    };
    /**
     * Sets the activityid_task property value. 
     * @param value Value to set for the activityid_task property.
     */
    public set activityid_task(value: Task | undefined) {
        this._activityid_task = value;
    };
    /**
     * Gets the activityParty_SyncErrors property value. 
     * @returns a syncerror
     */
    public get activityParty_SyncErrors() {
        return this._activityParty_SyncErrors;
    };
    /**
     * Sets the activityParty_SyncErrors property value. 
     * @param value Value to set for the ActivityParty_SyncErrors property.
     */
    public set activityParty_SyncErrors(value: Syncerror[] | undefined) {
        this._activityParty_SyncErrors = value;
    };
    /**
     * Gets the activitypartyid property value. 
     * @returns a string
     */
    public get activitypartyid() {
        return this._activitypartyid;
    };
    /**
     * Sets the activitypartyid property value. 
     * @param value Value to set for the activitypartyid property.
     */
    public set activitypartyid(value: string | undefined) {
        this._activitypartyid = value;
    };
    /**
     * Gets the addressused property value. 
     * @returns a string
     */
    public get addressused() {
        return this._addressused;
    };
    /**
     * Sets the addressused property value. 
     * @param value Value to set for the addressused property.
     */
    public set addressused(value: string | undefined) {
        this._addressused = value;
    };
    /**
     * Gets the addressusedemailcolumnnumber property value. 
     * @returns a integer
     */
    public get addressusedemailcolumnnumber() {
        return this._addressusedemailcolumnnumber;
    };
    /**
     * Sets the addressusedemailcolumnnumber property value. 
     * @param value Value to set for the addressusedemailcolumnnumber property.
     */
    public set addressusedemailcolumnnumber(value: number | undefined) {
        this._addressusedemailcolumnnumber = value;
    };
    /**
     * Instantiates a new activityparty and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the donotemail property value. 
     * @returns a boolean
     */
    public get donotemail() {
        return this._donotemail;
    };
    /**
     * Sets the donotemail property value. 
     * @param value Value to set for the donotemail property.
     */
    public set donotemail(value: boolean | undefined) {
        this._donotemail = value;
    };
    /**
     * Gets the donotfax property value. 
     * @returns a boolean
     */
    public get donotfax() {
        return this._donotfax;
    };
    /**
     * Sets the donotfax property value. 
     * @param value Value to set for the donotfax property.
     */
    public set donotfax(value: boolean | undefined) {
        this._donotfax = value;
    };
    /**
     * Gets the donotphone property value. 
     * @returns a boolean
     */
    public get donotphone() {
        return this._donotphone;
    };
    /**
     * Sets the donotphone property value. 
     * @param value Value to set for the donotphone property.
     */
    public set donotphone(value: boolean | undefined) {
        this._donotphone = value;
    };
    /**
     * Gets the donotpostalmail property value. 
     * @returns a boolean
     */
    public get donotpostalmail() {
        return this._donotpostalmail;
    };
    /**
     * Sets the donotpostalmail property value. 
     * @param value Value to set for the donotpostalmail property.
     */
    public set donotpostalmail(value: boolean | undefined) {
        this._donotpostalmail = value;
    };
    /**
     * Gets the effort property value. 
     * @returns a double
     */
    public get effort() {
        return this._effort;
    };
    /**
     * Sets the effort property value. 
     * @param value Value to set for the effort property.
     */
    public set effort(value: number | undefined) {
        this._effort = value;
    };
    /**
     * Gets the exchangeentryid property value. 
     * @returns a string
     */
    public get exchangeentryid() {
        return this._exchangeentryid;
    };
    /**
     * Sets the exchangeentryid property value. 
     * @param value Value to set for the exchangeentryid property.
     */
    public set exchangeentryid(value: string | undefined) {
        this._exchangeentryid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_activityid_value": (o, n) => { (o as unknown as Activityparty)._activityid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Activityparty)._ownerid_value = n.getStringValue(); },
            "_partyid_value": (o, n) => { (o as unknown as Activityparty)._partyid_value = n.getStringValue(); },
            "_resourcespecid_value": (o, n) => { (o as unknown as Activityparty)._resourcespecid_value = n.getStringValue(); },
            "activityid_activitypointer": (o, n) => { (o as unknown as Activityparty).activityid_activitypointer = n.getObjectValue<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "activityid_appointment": (o, n) => { (o as unknown as Activityparty).activityid_appointment = n.getObjectValue<Appointment>(createAppointmentFromDiscriminatorValue); },
            "activityid_campaignactivity": (o, n) => { (o as unknown as Activityparty).activityid_campaignactivity = n.getObjectValue<Campaignactivity>(createCampaignactivityFromDiscriminatorValue); },
            "activityid_campaignresponse": (o, n) => { (o as unknown as Activityparty).activityid_campaignresponse = n.getObjectValue<Campaignresponse>(createCampaignresponseFromDiscriminatorValue); },
            "activityid_email": (o, n) => { (o as unknown as Activityparty).activityid_email = n.getObjectValue<Email>(createEmailFromDiscriminatorValue); },
            "activityid_fax": (o, n) => { (o as unknown as Activityparty).activityid_fax = n.getObjectValue<Fax>(createFaxFromDiscriminatorValue); },
            "activityid_incidentresolution": (o, n) => { (o as unknown as Activityparty).activityid_incidentresolution = n.getObjectValue<Incidentresolution>(createIncidentresolutionFromDiscriminatorValue); },
            "activityid_letter": (o, n) => { (o as unknown as Activityparty).activityid_letter = n.getObjectValue<Letter>(createLetterFromDiscriminatorValue); },
            "activityid_msdyn_approval_activityparty": (o, n) => { (o as unknown as Activityparty).activityid_msdyn_approval_activityparty = n.getObjectValue<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "activityid_msdyn_bookingalert_activityparty": (o, n) => { (o as unknown as Activityparty).activityid_msdyn_bookingalert_activityparty = n.getObjectValue<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "activityid_msdyn_ocliveworkitem_activityparty": (o, n) => { (o as unknown as Activityparty).activityid_msdyn_ocliveworkitem_activityparty = n.getObjectValue<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "activityid_msdyn_ocoutboundmessage_activityparty": (o, n) => { (o as unknown as Activityparty).activityid_msdyn_ocoutboundmessage_activityparty = n.getObjectValue<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "activityid_msdyn_ocsession_activityparty": (o, n) => { (o as unknown as Activityparty).activityid_msdyn_ocsession_activityparty = n.getObjectValue<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "activityid_msfp_alert_activityparty": (o, n) => { (o as unknown as Activityparty).activityid_msfp_alert_activityparty = n.getObjectValue<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "activityid_msfp_surveyinvite_activityparty": (o, n) => { (o as unknown as Activityparty).activityid_msfp_surveyinvite_activityparty = n.getObjectValue<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "activityid_msfp_surveyresponse_activityparty": (o, n) => { (o as unknown as Activityparty).activityid_msfp_surveyresponse_activityparty = n.getObjectValue<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "activityid_opportunityclose": (o, n) => { (o as unknown as Activityparty).activityid_opportunityclose = n.getObjectValue<Opportunityclose>(createOpportunitycloseFromDiscriminatorValue); },
            "activityid_orderclose": (o, n) => { (o as unknown as Activityparty).activityid_orderclose = n.getObjectValue<Orderclose>(createOrdercloseFromDiscriminatorValue); },
            "activityid_phonecall": (o, n) => { (o as unknown as Activityparty).activityid_phonecall = n.getObjectValue<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "activityid_quoteclose": (o, n) => { (o as unknown as Activityparty).activityid_quoteclose = n.getObjectValue<Quoteclose>(createQuotecloseFromDiscriminatorValue); },
            "activityid_recurringappointmentmaster": (o, n) => { (o as unknown as Activityparty).activityid_recurringappointmentmaster = n.getObjectValue<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "activityid_serviceappointment": (o, n) => { (o as unknown as Activityparty).activityid_serviceappointment = n.getObjectValue<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "activityid_socialactivity": (o, n) => { (o as unknown as Activityparty).activityid_socialactivity = n.getObjectValue<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "activityid_task": (o, n) => { (o as unknown as Activityparty).activityid_task = n.getObjectValue<Task>(createTaskFromDiscriminatorValue); },
            "activityParty_SyncErrors": (o, n) => { (o as unknown as Activityparty).activityParty_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "activitypartyid": (o, n) => { (o as unknown as Activityparty).activitypartyid = n.getStringValue(); },
            "addressused": (o, n) => { (o as unknown as Activityparty).addressused = n.getStringValue(); },
            "addressusedemailcolumnnumber": (o, n) => { (o as unknown as Activityparty).addressusedemailcolumnnumber = n.getNumberValue(); },
            "donotemail": (o, n) => { (o as unknown as Activityparty).donotemail = n.getBooleanValue(); },
            "donotfax": (o, n) => { (o as unknown as Activityparty).donotfax = n.getBooleanValue(); },
            "donotphone": (o, n) => { (o as unknown as Activityparty).donotphone = n.getBooleanValue(); },
            "donotpostalmail": (o, n) => { (o as unknown as Activityparty).donotpostalmail = n.getBooleanValue(); },
            "effort": (o, n) => { (o as unknown as Activityparty).effort = n.getNumberValue(); },
            "exchangeentryid": (o, n) => { (o as unknown as Activityparty).exchangeentryid = n.getStringValue(); },
            "instancetypecode": (o, n) => { (o as unknown as Activityparty).instancetypecode = n.getNumberValue(); },
            "ispartydeleted": (o, n) => { (o as unknown as Activityparty).ispartydeleted = n.getBooleanValue(); },
            "participationtypemask": (o, n) => { (o as unknown as Activityparty).participationtypemask = n.getNumberValue(); },
            "partyid_account": (o, n) => { (o as unknown as Activityparty).partyid_account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "partyid_bulkoperation": (o, n) => { (o as unknown as Activityparty).partyid_bulkoperation = n.getObjectValue<Bulkoperation>(createBulkoperationFromDiscriminatorValue); },
            "partyid_campaign": (o, n) => { (o as unknown as Activityparty).partyid_campaign = n.getObjectValue<Campaign>(createCampaignFromDiscriminatorValue); },
            "partyid_campaignactivity": (o, n) => { (o as unknown as Activityparty).partyid_campaignactivity = n.getObjectValue<Campaignactivity>(createCampaignactivityFromDiscriminatorValue); },
            "partyid_contact": (o, n) => { (o as unknown as Activityparty).partyid_contact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "partyid_contract": (o, n) => { (o as unknown as Activityparty).partyid_contract = n.getObjectValue<Contract>(createContractFromDiscriminatorValue); },
            "partyid_entitlement": (o, n) => { (o as unknown as Activityparty).partyid_entitlement = n.getObjectValue<Entitlement>(createEntitlementFromDiscriminatorValue); },
            "partyid_equipment": (o, n) => { (o as unknown as Activityparty).partyid_equipment = n.getObjectValue<Equipment>(createEquipmentFromDiscriminatorValue); },
            "partyid_incident": (o, n) => { (o as unknown as Activityparty).partyid_incident = n.getObjectValue<Incident>(createIncidentFromDiscriminatorValue); },
            "partyid_invoice": (o, n) => { (o as unknown as Activityparty).partyid_invoice = n.getObjectValue<Invoice>(createInvoiceFromDiscriminatorValue); },
            "partyid_knowledgearticle": (o, n) => { (o as unknown as Activityparty).partyid_knowledgearticle = n.getObjectValue<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "partyid_lead": (o, n) => { (o as unknown as Activityparty).partyid_lead = n.getObjectValue<Lead>(createLeadFromDiscriminatorValue); },
            "partyid_msdyn_salessuggestion": (o, n) => { (o as unknown as Activityparty).partyid_msdyn_salessuggestion = n.getObjectValue<Msdyn_salessuggestion>(createMsdyn_salessuggestionFromDiscriminatorValue); },
            "partyid_opportunity": (o, n) => { (o as unknown as Activityparty).partyid_opportunity = n.getObjectValue<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "partyid_queue": (o, n) => { (o as unknown as Activityparty).partyid_queue = n.getObjectValue<Queue>(createQueueFromDiscriminatorValue); },
            "partyid_quote": (o, n) => { (o as unknown as Activityparty).partyid_quote = n.getObjectValue<Quote>(createQuoteFromDiscriminatorValue); },
            "partyid_salesorder": (o, n) => { (o as unknown as Activityparty).partyid_salesorder = n.getObjectValue<Salesorder>(createSalesorderFromDiscriminatorValue); },
            "partyid_systemuser": (o, n) => { (o as unknown as Activityparty).partyid_systemuser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "resourcespecid": (o, n) => { (o as unknown as Activityparty).resourcespecid = n.getObjectValue<Resourcespec>(createResourcespecFromDiscriminatorValue); },
            "scheduledend": (o, n) => { (o as unknown as Activityparty).scheduledend = n.getDateValue(); },
            "scheduledstart": (o, n) => { (o as unknown as Activityparty).scheduledstart = n.getDateValue(); },
            "versionnumber": (o, n) => { (o as unknown as Activityparty).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the instancetypecode property value. 
     * @returns a integer
     */
    public get instancetypecode() {
        return this._instancetypecode;
    };
    /**
     * Sets the instancetypecode property value. 
     * @param value Value to set for the instancetypecode property.
     */
    public set instancetypecode(value: number | undefined) {
        this._instancetypecode = value;
    };
    /**
     * Gets the ispartydeleted property value. 
     * @returns a boolean
     */
    public get ispartydeleted() {
        return this._ispartydeleted;
    };
    /**
     * Sets the ispartydeleted property value. 
     * @param value Value to set for the ispartydeleted property.
     */
    public set ispartydeleted(value: boolean | undefined) {
        this._ispartydeleted = value;
    };
    /**
     * Gets the participationtypemask property value. 
     * @returns a integer
     */
    public get participationtypemask() {
        return this._participationtypemask;
    };
    /**
     * Sets the participationtypemask property value. 
     * @param value Value to set for the participationtypemask property.
     */
    public set participationtypemask(value: number | undefined) {
        this._participationtypemask = value;
    };
    /**
     * Gets the partyid_account property value. 
     * @returns a account
     */
    public get partyid_account() {
        return this._partyid_account;
    };
    /**
     * Sets the partyid_account property value. 
     * @param value Value to set for the partyid_account property.
     */
    public set partyid_account(value: Account | undefined) {
        this._partyid_account = value;
    };
    /**
     * Gets the partyid_bulkoperation property value. 
     * @returns a bulkoperation
     */
    public get partyid_bulkoperation() {
        return this._partyid_bulkoperation;
    };
    /**
     * Sets the partyid_bulkoperation property value. 
     * @param value Value to set for the partyid_bulkoperation property.
     */
    public set partyid_bulkoperation(value: Bulkoperation | undefined) {
        this._partyid_bulkoperation = value;
    };
    /**
     * Gets the partyid_campaign property value. 
     * @returns a campaign
     */
    public get partyid_campaign() {
        return this._partyid_campaign;
    };
    /**
     * Sets the partyid_campaign property value. 
     * @param value Value to set for the partyid_campaign property.
     */
    public set partyid_campaign(value: Campaign | undefined) {
        this._partyid_campaign = value;
    };
    /**
     * Gets the partyid_campaignactivity property value. 
     * @returns a campaignactivity
     */
    public get partyid_campaignactivity() {
        return this._partyid_campaignactivity;
    };
    /**
     * Sets the partyid_campaignactivity property value. 
     * @param value Value to set for the partyid_campaignactivity property.
     */
    public set partyid_campaignactivity(value: Campaignactivity | undefined) {
        this._partyid_campaignactivity = value;
    };
    /**
     * Gets the partyid_contact property value. 
     * @returns a contact
     */
    public get partyid_contact() {
        return this._partyid_contact;
    };
    /**
     * Sets the partyid_contact property value. 
     * @param value Value to set for the partyid_contact property.
     */
    public set partyid_contact(value: Contact | undefined) {
        this._partyid_contact = value;
    };
    /**
     * Gets the partyid_contract property value. 
     * @returns a contract
     */
    public get partyid_contract() {
        return this._partyid_contract;
    };
    /**
     * Sets the partyid_contract property value. 
     * @param value Value to set for the partyid_contract property.
     */
    public set partyid_contract(value: Contract | undefined) {
        this._partyid_contract = value;
    };
    /**
     * Gets the partyid_entitlement property value. 
     * @returns a entitlement
     */
    public get partyid_entitlement() {
        return this._partyid_entitlement;
    };
    /**
     * Sets the partyid_entitlement property value. 
     * @param value Value to set for the partyid_entitlement property.
     */
    public set partyid_entitlement(value: Entitlement | undefined) {
        this._partyid_entitlement = value;
    };
    /**
     * Gets the partyid_equipment property value. 
     * @returns a equipment
     */
    public get partyid_equipment() {
        return this._partyid_equipment;
    };
    /**
     * Sets the partyid_equipment property value. 
     * @param value Value to set for the partyid_equipment property.
     */
    public set partyid_equipment(value: Equipment | undefined) {
        this._partyid_equipment = value;
    };
    /**
     * Gets the partyid_incident property value. 
     * @returns a incident
     */
    public get partyid_incident() {
        return this._partyid_incident;
    };
    /**
     * Sets the partyid_incident property value. 
     * @param value Value to set for the partyid_incident property.
     */
    public set partyid_incident(value: Incident | undefined) {
        this._partyid_incident = value;
    };
    /**
     * Gets the partyid_invoice property value. 
     * @returns a invoice
     */
    public get partyid_invoice() {
        return this._partyid_invoice;
    };
    /**
     * Sets the partyid_invoice property value. 
     * @param value Value to set for the partyid_invoice property.
     */
    public set partyid_invoice(value: Invoice | undefined) {
        this._partyid_invoice = value;
    };
    /**
     * Gets the partyid_knowledgearticle property value. 
     * @returns a knowledgearticle
     */
    public get partyid_knowledgearticle() {
        return this._partyid_knowledgearticle;
    };
    /**
     * Sets the partyid_knowledgearticle property value. 
     * @param value Value to set for the partyid_knowledgearticle property.
     */
    public set partyid_knowledgearticle(value: Knowledgearticle | undefined) {
        this._partyid_knowledgearticle = value;
    };
    /**
     * Gets the partyid_lead property value. 
     * @returns a lead
     */
    public get partyid_lead() {
        return this._partyid_lead;
    };
    /**
     * Sets the partyid_lead property value. 
     * @param value Value to set for the partyid_lead property.
     */
    public set partyid_lead(value: Lead | undefined) {
        this._partyid_lead = value;
    };
    /**
     * Gets the partyid_msdyn_salessuggestion property value. 
     * @returns a msdyn_salessuggestion
     */
    public get partyid_msdyn_salessuggestion() {
        return this._partyid_msdyn_salessuggestion;
    };
    /**
     * Sets the partyid_msdyn_salessuggestion property value. 
     * @param value Value to set for the partyid_msdyn_salessuggestion property.
     */
    public set partyid_msdyn_salessuggestion(value: Msdyn_salessuggestion | undefined) {
        this._partyid_msdyn_salessuggestion = value;
    };
    /**
     * Gets the partyid_opportunity property value. 
     * @returns a opportunity
     */
    public get partyid_opportunity() {
        return this._partyid_opportunity;
    };
    /**
     * Sets the partyid_opportunity property value. 
     * @param value Value to set for the partyid_opportunity property.
     */
    public set partyid_opportunity(value: Opportunity | undefined) {
        this._partyid_opportunity = value;
    };
    /**
     * Gets the partyid_queue property value. 
     * @returns a queue
     */
    public get partyid_queue() {
        return this._partyid_queue;
    };
    /**
     * Sets the partyid_queue property value. 
     * @param value Value to set for the partyid_queue property.
     */
    public set partyid_queue(value: Queue | undefined) {
        this._partyid_queue = value;
    };
    /**
     * Gets the partyid_quote property value. 
     * @returns a quote
     */
    public get partyid_quote() {
        return this._partyid_quote;
    };
    /**
     * Sets the partyid_quote property value. 
     * @param value Value to set for the partyid_quote property.
     */
    public set partyid_quote(value: Quote | undefined) {
        this._partyid_quote = value;
    };
    /**
     * Gets the partyid_salesorder property value. 
     * @returns a salesorder
     */
    public get partyid_salesorder() {
        return this._partyid_salesorder;
    };
    /**
     * Sets the partyid_salesorder property value. 
     * @param value Value to set for the partyid_salesorder property.
     */
    public set partyid_salesorder(value: Salesorder | undefined) {
        this._partyid_salesorder = value;
    };
    /**
     * Gets the partyid_systemuser property value. 
     * @returns a systemuser
     */
    public get partyid_systemuser() {
        return this._partyid_systemuser;
    };
    /**
     * Sets the partyid_systemuser property value. 
     * @param value Value to set for the partyid_systemuser property.
     */
    public set partyid_systemuser(value: Systemuser | undefined) {
        this._partyid_systemuser = value;
    };
    /**
     * Gets the resourcespecid property value. 
     * @returns a resourcespec
     */
    public get resourcespecid() {
        return this._resourcespecid;
    };
    /**
     * Sets the resourcespecid property value. 
     * @param value Value to set for the resourcespecid property.
     */
    public set resourcespecid(value: Resourcespec | undefined) {
        this._resourcespecid = value;
    };
    /**
     * Gets the scheduledend property value. 
     * @returns a Date
     */
    public get scheduledend() {
        return this._scheduledend;
    };
    /**
     * Sets the scheduledend property value. 
     * @param value Value to set for the scheduledend property.
     */
    public set scheduledend(value: Date | undefined) {
        this._scheduledend = value;
    };
    /**
     * Gets the scheduledstart property value. 
     * @returns a Date
     */
    public get scheduledstart() {
        return this._scheduledstart;
    };
    /**
     * Sets the scheduledstart property value. 
     * @param value Value to set for the scheduledstart property.
     */
    public set scheduledstart(value: Date | undefined) {
        this._scheduledstart = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_activityid_value", this._activityid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_partyid_value", this._partyid_value);
        writer.writeStringValue("_resourcespecid_value", this._resourcespecid_value);
        writer.writeObjectValue<Activitypointer>("activityid_activitypointer", this.activityid_activitypointer);
        writer.writeObjectValue<Appointment>("activityid_appointment", this.activityid_appointment);
        writer.writeObjectValue<Campaignactivity>("activityid_campaignactivity", this.activityid_campaignactivity);
        writer.writeObjectValue<Campaignresponse>("activityid_campaignresponse", this.activityid_campaignresponse);
        writer.writeObjectValue<Email>("activityid_email", this.activityid_email);
        writer.writeObjectValue<Fax>("activityid_fax", this.activityid_fax);
        writer.writeObjectValue<Incidentresolution>("activityid_incidentresolution", this.activityid_incidentresolution);
        writer.writeObjectValue<Letter>("activityid_letter", this.activityid_letter);
        writer.writeObjectValue<Msdyn_approval>("activityid_msdyn_approval_activityparty", this.activityid_msdyn_approval_activityparty);
        writer.writeObjectValue<Msdyn_bookingalert>("activityid_msdyn_bookingalert_activityparty", this.activityid_msdyn_bookingalert_activityparty);
        writer.writeObjectValue<Msdyn_ocliveworkitem>("activityid_msdyn_ocliveworkitem_activityparty", this.activityid_msdyn_ocliveworkitem_activityparty);
        writer.writeObjectValue<Msdyn_ocoutboundmessage>("activityid_msdyn_ocoutboundmessage_activityparty", this.activityid_msdyn_ocoutboundmessage_activityparty);
        writer.writeObjectValue<Msdyn_ocsession>("activityid_msdyn_ocsession_activityparty", this.activityid_msdyn_ocsession_activityparty);
        writer.writeObjectValue<Msfp_alert>("activityid_msfp_alert_activityparty", this.activityid_msfp_alert_activityparty);
        writer.writeObjectValue<Msfp_surveyinvite>("activityid_msfp_surveyinvite_activityparty", this.activityid_msfp_surveyinvite_activityparty);
        writer.writeObjectValue<Msfp_surveyresponse>("activityid_msfp_surveyresponse_activityparty", this.activityid_msfp_surveyresponse_activityparty);
        writer.writeObjectValue<Opportunityclose>("activityid_opportunityclose", this.activityid_opportunityclose);
        writer.writeObjectValue<Orderclose>("activityid_orderclose", this.activityid_orderclose);
        writer.writeObjectValue<Phonecall>("activityid_phonecall", this.activityid_phonecall);
        writer.writeObjectValue<Quoteclose>("activityid_quoteclose", this.activityid_quoteclose);
        writer.writeObjectValue<Recurringappointmentmaster>("activityid_recurringappointmentmaster", this.activityid_recurringappointmentmaster);
        writer.writeObjectValue<Serviceappointment>("activityid_serviceappointment", this.activityid_serviceappointment);
        writer.writeObjectValue<Socialactivity>("activityid_socialactivity", this.activityid_socialactivity);
        writer.writeObjectValue<Task>("activityid_task", this.activityid_task);
        writer.writeCollectionOfObjectValues<Syncerror>("activityParty_SyncErrors", this.activityParty_SyncErrors);
        writer.writeStringValue("activitypartyid", this.activitypartyid);
        writer.writeStringValue("addressused", this.addressused);
        writer.writeNumberValue("addressusedemailcolumnnumber", this.addressusedemailcolumnnumber);
        writer.writeBooleanValue("donotemail", this.donotemail);
        writer.writeBooleanValue("donotfax", this.donotfax);
        writer.writeBooleanValue("donotphone", this.donotphone);
        writer.writeBooleanValue("donotpostalmail", this.donotpostalmail);
        writer.writeNumberValue("effort", this.effort);
        writer.writeStringValue("exchangeentryid", this.exchangeentryid);
        writer.writeNumberValue("instancetypecode", this.instancetypecode);
        writer.writeBooleanValue("ispartydeleted", this.ispartydeleted);
        writer.writeNumberValue("participationtypemask", this.participationtypemask);
        writer.writeObjectValue<Account>("partyid_account", this.partyid_account);
        writer.writeObjectValue<Bulkoperation>("partyid_bulkoperation", this.partyid_bulkoperation);
        writer.writeObjectValue<Campaign>("partyid_campaign", this.partyid_campaign);
        writer.writeObjectValue<Campaignactivity>("partyid_campaignactivity", this.partyid_campaignactivity);
        writer.writeObjectValue<Contact>("partyid_contact", this.partyid_contact);
        writer.writeObjectValue<Contract>("partyid_contract", this.partyid_contract);
        writer.writeObjectValue<Entitlement>("partyid_entitlement", this.partyid_entitlement);
        writer.writeObjectValue<Equipment>("partyid_equipment", this.partyid_equipment);
        writer.writeObjectValue<Incident>("partyid_incident", this.partyid_incident);
        writer.writeObjectValue<Invoice>("partyid_invoice", this.partyid_invoice);
        writer.writeObjectValue<Knowledgearticle>("partyid_knowledgearticle", this.partyid_knowledgearticle);
        writer.writeObjectValue<Lead>("partyid_lead", this.partyid_lead);
        writer.writeObjectValue<Msdyn_salessuggestion>("partyid_msdyn_salessuggestion", this.partyid_msdyn_salessuggestion);
        writer.writeObjectValue<Opportunity>("partyid_opportunity", this.partyid_opportunity);
        writer.writeObjectValue<Queue>("partyid_queue", this.partyid_queue);
        writer.writeObjectValue<Quote>("partyid_quote", this.partyid_quote);
        writer.writeObjectValue<Salesorder>("partyid_salesorder", this.partyid_salesorder);
        writer.writeObjectValue<Systemuser>("partyid_systemuser", this.partyid_systemuser);
        writer.writeObjectValue<Resourcespec>("resourcespecid", this.resourcespecid);
        writer.writeDateValue("scheduledend", this.scheduledend);
        writer.writeDateValue("scheduledstart", this.scheduledstart);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
