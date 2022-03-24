import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createActivitypartyFromDiscriminatorValue} from './createActivitypartyFromDiscriminatorValue';
import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createInvoicedetailFromDiscriminatorValue} from './createInvoicedetailFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_actualFromDiscriminatorValue} from './createMsdyn_actualFromDiscriminatorValue';
import {createMsdyn_agreementinvoicedateFromDiscriminatorValue} from './createMsdyn_agreementinvoicedateFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470dFromDiscriminatorValue} from './createMsdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470dFromDiscriminatorValue';
import {createMsdyn_contractlineinvoicescheduleFromDiscriminatorValue} from './createMsdyn_contractlineinvoicescheduleFromDiscriminatorValue';
import {createMsdyn_invoicelinetransactionFromDiscriminatorValue} from './createMsdyn_invoicelinetransactionFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_orderinvoicingdateFromDiscriminatorValue} from './createMsdyn_orderinvoicingdateFromDiscriminatorValue';
import {createMsdyn_orderinvoicingsetupdateFromDiscriminatorValue} from './createMsdyn_orderinvoicingsetupdateFromDiscriminatorValue';
import {createMsdyn_paymentdetailFromDiscriminatorValue} from './createMsdyn_paymentdetailFromDiscriminatorValue';
import {createMsdyn_playbookinstanceFromDiscriminatorValue} from './createMsdyn_playbookinstanceFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPricelevelFromDiscriminatorValue} from './createPricelevelFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createSalesorderFromDiscriminatorValue} from './createSalesorderFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSlaFromDiscriminatorValue} from './createSlaFromDiscriminatorValue';
import {createSlakpiinstanceFromDiscriminatorValue} from './createSlakpiinstanceFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Activityparty, Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Contact, Crmbaseentity, Email, Fax, Invoicedetail, Letter, Mailboxtrackingfolder, Msdyn_actual, Msdyn_agreementinvoicedate, Msdyn_approval, Msdyn_bookingalert, Msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d, Msdyn_contractlineinvoiceschedule, Msdyn_invoicelinetransaction, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_orderinvoicingdate, Msdyn_orderinvoicingsetupdate, Msdyn_paymentdetail, Msdyn_playbookinstance, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Opportunity, Phonecall, Pricelevel, Principal, Principalobjectattributeaccess, Processsession, Processstage, Recurringappointmentmaster, Salesorder, Serviceappointment, Sla, Slakpiinstance, Socialactivity, Syncerror, Systemuser, Task, Team, Transactioncurrency} from './index';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Invoice extends Crmbaseentity implements Parsable {
    private __accountid_value?: string | undefined;
    private __contactid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __customerid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __opportunityid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __pricelevelid_value?: string | undefined;
    private __salesorderid_value?: string | undefined;
    private __slaid_value?: string | undefined;
    private __slainvokedid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _billto_city?: string | undefined;
    private _billto_composite?: string | undefined;
    private _billto_country?: string | undefined;
    private _billto_fax?: string | undefined;
    private _billto_line1?: string | undefined;
    private _billto_line2?: string | undefined;
    private _billto_line3?: string | undefined;
    private _billto_name?: string | undefined;
    private _billto_postalcode?: string | undefined;
    private _billto_stateorprovince?: string | undefined;
    private _billto_telephone?: string | undefined;
    private _bpf_invoice_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d?: Msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d[] | undefined;
    private _contactinvoices_association?: Contact[] | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _customerid_account?: Account | undefined;
    private _customerid_contact?: Contact | undefined;
    private _datedelivered?: Date | undefined;
    private _description?: string | undefined;
    private _discountamount?: number | undefined;
    private _discountamount_base?: number | undefined;
    private _discountpercentage?: number | undefined;
    private _duedate?: DateOnly | undefined;
    private _emailaddress?: string | undefined;
    private _entityimage?: string | undefined;
    private _entityimage_timestamp?: number | undefined;
    private _entityimage_url?: string | undefined;
    private _entityimageid?: string | undefined;
    private _exchangerate?: number | undefined;
    private _freightamount?: number | undefined;
    private _freightamount_base?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _invoice_activity_parties?: Activityparty[] | undefined;
    private _invoice_ActivityPointers?: Activitypointer[] | undefined;
    private _invoice_Annotation?: Annotation[] | undefined;
    private _invoice_Appointments?: Appointment[] | undefined;
    private _invoice_AsyncOperations?: Asyncoperation[] | undefined;
    private _invoice_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _invoice_connections1?: Connection[] | undefined;
    private _invoice_connections2?: Connection[] | undefined;
    private _invoice_details?: Invoicedetail[] | undefined;
    private _invoice_Emails?: Email[] | undefined;
    private _invoice_Faxes?: Fax[] | undefined;
    private _invoice_Letters?: Letter[] | undefined;
    private _invoice_MailboxTrackingFolder?: Mailboxtrackingfolder[] | undefined;
    private _invoice_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _invoice_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _invoice_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _invoice_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _invoice_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _invoice_msfp_alerts?: Msfp_alert[] | undefined;
    private _invoice_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _invoice_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _invoice_Phonecalls?: Phonecall[] | undefined;
    private _invoice_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _invoice_ProcessSessions?: Processsession[] | undefined;
    private _invoice_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _invoice_ServiceAppointments?: Serviceappointment[] | undefined;
    private _invoice_SocialActivities?: Socialactivity[] | undefined;
    private _invoice_SyncErrors?: Syncerror[] | undefined;
    private _invoice_Tasks?: Task[] | undefined;
    private _invoiceid?: string | undefined;
    private _invoicenumber?: string | undefined;
    private _ispricelocked?: boolean | undefined;
    private _lastbackofficesubmit?: Date | undefined;
    private _lastonholdtime?: Date | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_amountdue?: number | undefined;
    private _msdyn_amountdue_base?: number | undefined;
    private _msdyn_billtocontactname?: string | undefined;
    private _msdyn_hascorrections?: boolean | undefined;
    private _msdyn_invoice_msdyn_actual_Invoice?: Msdyn_actual[] | undefined;
    private _msdyn_invoice_msdyn_agreementinvoicedate_Invoice?: Msdyn_agreementinvoicedate[] | undefined;
    private _msdyn_invoice_msdyn_contractlineinvoiceschedule_Invoice?: Msdyn_contractlineinvoiceschedule[] | undefined;
    private _msdyn_invoice_msdyn_invoicelinetransaction_Invoice?: Msdyn_invoicelinetransaction[] | undefined;
    private _msdyn_invoice_msdyn_orderinvoicingdate_Invoice?: Msdyn_orderinvoicingdate[] | undefined;
    private _msdyn_invoice_msdyn_orderinvoicingsetupdate_Invoice?: Msdyn_orderinvoicingsetupdate[] | undefined;
    private _msdyn_invoice_msdyn_paymentdetail_Invoice?: Msdyn_paymentdetail[] | undefined;
    private _msdyn_invoicedate?: Date | undefined;
    private _msdyn_ordertype?: number | undefined;
    private _msdyn_playbookinstance_invoice?: Msdyn_playbookinstance[] | undefined;
    private _msdyn_projectinvoicestatus?: number | undefined;
    private _name?: string | undefined;
    private _onholdtime?: number | undefined;
    private _opportunityid?: Opportunity | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _paymenttermscode?: number | undefined;
    private _pricelevelid?: Pricelevel | undefined;
    private _pricingerrorcode?: number | undefined;
    private _prioritycode?: number | undefined;
    private _processid?: string | undefined;
    private _salesorderid?: Salesorder | undefined;
    private _shippingmethodcode?: number | undefined;
    private _shipto_city?: string | undefined;
    private _shipto_composite?: string | undefined;
    private _shipto_country?: string | undefined;
    private _shipto_fax?: string | undefined;
    private _shipto_freighttermscode?: number | undefined;
    private _shipto_line1?: string | undefined;
    private _shipto_line2?: string | undefined;
    private _shipto_line3?: string | undefined;
    private _shipto_name?: string | undefined;
    private _shipto_postalcode?: string | undefined;
    private _shipto_stateorprovince?: string | undefined;
    private _shipto_telephone?: string | undefined;
    private _skippricecalculation?: number | undefined;
    private _sla_invoice_sla?: Sla | undefined;
    private _slainvokedid_invoice_sla?: Sla | undefined;
    private _slakpiinstance_invoice?: Slakpiinstance[] | undefined;
    private _stageid?: string | undefined;
    private _stageid_processstage?: Processstage | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _totalamount?: number | undefined;
    private _totalamount_base?: number | undefined;
    private _totalamountlessfreight?: number | undefined;
    private _totalamountlessfreight_base?: number | undefined;
    private _totaldiscountamount?: number | undefined;
    private _totaldiscountamount_base?: number | undefined;
    private _totallineitemamount?: number | undefined;
    private _totallineitemamount_base?: number | undefined;
    private _totallineitemdiscountamount?: number | undefined;
    private _totallineitemdiscountamount_base?: number | undefined;
    private _totaltax?: number | undefined;
    private _totaltax_base?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _traversedpath?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    private _willcall?: boolean | undefined;
    /**
     * Gets the _accountid_value property value. 
     * @returns a string
     */
    public get _accountid_value() {
        return this.__accountid_value;
    };
    /**
     * Sets the _accountid_value property value. 
     * @param value Value to set for the _accountid_value property.
     */
    public set _accountid_value(value: string | undefined) {
        this.__accountid_value = value;
    };
    /**
     * Gets the _contactid_value property value. 
     * @returns a string
     */
    public get _contactid_value() {
        return this.__contactid_value;
    };
    /**
     * Sets the _contactid_value property value. 
     * @param value Value to set for the _contactid_value property.
     */
    public set _contactid_value(value: string | undefined) {
        this.__contactid_value = value;
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
     * Gets the _customerid_value property value. 
     * @returns a string
     */
    public get _customerid_value() {
        return this.__customerid_value;
    };
    /**
     * Sets the _customerid_value property value. 
     * @param value Value to set for the _customerid_value property.
     */
    public set _customerid_value(value: string | undefined) {
        this.__customerid_value = value;
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
     * Gets the _opportunityid_value property value. 
     * @returns a string
     */
    public get _opportunityid_value() {
        return this.__opportunityid_value;
    };
    /**
     * Sets the _opportunityid_value property value. 
     * @param value Value to set for the _opportunityid_value property.
     */
    public set _opportunityid_value(value: string | undefined) {
        this.__opportunityid_value = value;
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
     * Gets the _pricelevelid_value property value. 
     * @returns a string
     */
    public get _pricelevelid_value() {
        return this.__pricelevelid_value;
    };
    /**
     * Sets the _pricelevelid_value property value. 
     * @param value Value to set for the _pricelevelid_value property.
     */
    public set _pricelevelid_value(value: string | undefined) {
        this.__pricelevelid_value = value;
    };
    /**
     * Gets the _salesorderid_value property value. 
     * @returns a string
     */
    public get _salesorderid_value() {
        return this.__salesorderid_value;
    };
    /**
     * Sets the _salesorderid_value property value. 
     * @param value Value to set for the _salesorderid_value property.
     */
    public set _salesorderid_value(value: string | undefined) {
        this.__salesorderid_value = value;
    };
    /**
     * Gets the _slaid_value property value. 
     * @returns a string
     */
    public get _slaid_value() {
        return this.__slaid_value;
    };
    /**
     * Sets the _slaid_value property value. 
     * @param value Value to set for the _slaid_value property.
     */
    public set _slaid_value(value: string | undefined) {
        this.__slaid_value = value;
    };
    /**
     * Gets the _slainvokedid_value property value. 
     * @returns a string
     */
    public get _slainvokedid_value() {
        return this.__slainvokedid_value;
    };
    /**
     * Sets the _slainvokedid_value property value. 
     * @param value Value to set for the _slainvokedid_value property.
     */
    public set _slainvokedid_value(value: string | undefined) {
        this.__slainvokedid_value = value;
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
     * Gets the billto_city property value. 
     * @returns a string
     */
    public get billto_city() {
        return this._billto_city;
    };
    /**
     * Sets the billto_city property value. 
     * @param value Value to set for the billto_city property.
     */
    public set billto_city(value: string | undefined) {
        this._billto_city = value;
    };
    /**
     * Gets the billto_composite property value. 
     * @returns a string
     */
    public get billto_composite() {
        return this._billto_composite;
    };
    /**
     * Sets the billto_composite property value. 
     * @param value Value to set for the billto_composite property.
     */
    public set billto_composite(value: string | undefined) {
        this._billto_composite = value;
    };
    /**
     * Gets the billto_country property value. 
     * @returns a string
     */
    public get billto_country() {
        return this._billto_country;
    };
    /**
     * Sets the billto_country property value. 
     * @param value Value to set for the billto_country property.
     */
    public set billto_country(value: string | undefined) {
        this._billto_country = value;
    };
    /**
     * Gets the billto_fax property value. 
     * @returns a string
     */
    public get billto_fax() {
        return this._billto_fax;
    };
    /**
     * Sets the billto_fax property value. 
     * @param value Value to set for the billto_fax property.
     */
    public set billto_fax(value: string | undefined) {
        this._billto_fax = value;
    };
    /**
     * Gets the billto_line1 property value. 
     * @returns a string
     */
    public get billto_line1() {
        return this._billto_line1;
    };
    /**
     * Sets the billto_line1 property value. 
     * @param value Value to set for the billto_line1 property.
     */
    public set billto_line1(value: string | undefined) {
        this._billto_line1 = value;
    };
    /**
     * Gets the billto_line2 property value. 
     * @returns a string
     */
    public get billto_line2() {
        return this._billto_line2;
    };
    /**
     * Sets the billto_line2 property value. 
     * @param value Value to set for the billto_line2 property.
     */
    public set billto_line2(value: string | undefined) {
        this._billto_line2 = value;
    };
    /**
     * Gets the billto_line3 property value. 
     * @returns a string
     */
    public get billto_line3() {
        return this._billto_line3;
    };
    /**
     * Sets the billto_line3 property value. 
     * @param value Value to set for the billto_line3 property.
     */
    public set billto_line3(value: string | undefined) {
        this._billto_line3 = value;
    };
    /**
     * Gets the billto_name property value. 
     * @returns a string
     */
    public get billto_name() {
        return this._billto_name;
    };
    /**
     * Sets the billto_name property value. 
     * @param value Value to set for the billto_name property.
     */
    public set billto_name(value: string | undefined) {
        this._billto_name = value;
    };
    /**
     * Gets the billto_postalcode property value. 
     * @returns a string
     */
    public get billto_postalcode() {
        return this._billto_postalcode;
    };
    /**
     * Sets the billto_postalcode property value. 
     * @param value Value to set for the billto_postalcode property.
     */
    public set billto_postalcode(value: string | undefined) {
        this._billto_postalcode = value;
    };
    /**
     * Gets the billto_stateorprovince property value. 
     * @returns a string
     */
    public get billto_stateorprovince() {
        return this._billto_stateorprovince;
    };
    /**
     * Sets the billto_stateorprovince property value. 
     * @param value Value to set for the billto_stateorprovince property.
     */
    public set billto_stateorprovince(value: string | undefined) {
        this._billto_stateorprovince = value;
    };
    /**
     * Gets the billto_telephone property value. 
     * @returns a string
     */
    public get billto_telephone() {
        return this._billto_telephone;
    };
    /**
     * Sets the billto_telephone property value. 
     * @param value Value to set for the billto_telephone property.
     */
    public set billto_telephone(value: string | undefined) {
        this._billto_telephone = value;
    };
    /**
     * Gets the bpf_invoice_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d property value. 
     * @returns a msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d
     */
    public get bpf_invoice_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d() {
        return this._bpf_invoice_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d;
    };
    /**
     * Sets the bpf_invoice_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d property value. 
     * @param value Value to set for the bpf_invoice_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d property.
     */
    public set bpf_invoice_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d(value: Msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d[] | undefined) {
        this._bpf_invoice_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d = value;
    };
    /**
     * Instantiates a new invoice and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contactinvoices_association property value. 
     * @returns a contact
     */
    public get contactinvoices_association() {
        return this._contactinvoices_association;
    };
    /**
     * Sets the contactinvoices_association property value. 
     * @param value Value to set for the contactinvoices_association property.
     */
    public set contactinvoices_association(value: Contact[] | undefined) {
        this._contactinvoices_association = value;
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
     * Gets the customerid_account property value. 
     * @returns a account
     */
    public get customerid_account() {
        return this._customerid_account;
    };
    /**
     * Sets the customerid_account property value. 
     * @param value Value to set for the customerid_account property.
     */
    public set customerid_account(value: Account | undefined) {
        this._customerid_account = value;
    };
    /**
     * Gets the customerid_contact property value. 
     * @returns a contact
     */
    public get customerid_contact() {
        return this._customerid_contact;
    };
    /**
     * Sets the customerid_contact property value. 
     * @param value Value to set for the customerid_contact property.
     */
    public set customerid_contact(value: Contact | undefined) {
        this._customerid_contact = value;
    };
    /**
     * Gets the datedelivered property value. 
     * @returns a Date
     */
    public get datedelivered() {
        return this._datedelivered;
    };
    /**
     * Sets the datedelivered property value. 
     * @param value Value to set for the datedelivered property.
     */
    public set datedelivered(value: Date | undefined) {
        this._datedelivered = value;
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
     * Gets the discountamount property value. 
     * @returns a int64
     */
    public get discountamount() {
        return this._discountamount;
    };
    /**
     * Sets the discountamount property value. 
     * @param value Value to set for the discountamount property.
     */
    public set discountamount(value: number | undefined) {
        this._discountamount = value;
    };
    /**
     * Gets the discountamount_base property value. 
     * @returns a int64
     */
    public get discountamount_base() {
        return this._discountamount_base;
    };
    /**
     * Sets the discountamount_base property value. 
     * @param value Value to set for the discountamount_base property.
     */
    public set discountamount_base(value: number | undefined) {
        this._discountamount_base = value;
    };
    /**
     * Gets the discountpercentage property value. 
     * @returns a int64
     */
    public get discountpercentage() {
        return this._discountpercentage;
    };
    /**
     * Sets the discountpercentage property value. 
     * @param value Value to set for the discountpercentage property.
     */
    public set discountpercentage(value: number | undefined) {
        this._discountpercentage = value;
    };
    /**
     * Gets the duedate property value. 
     * @returns a DateOnly
     */
    public get duedate() {
        return this._duedate;
    };
    /**
     * Sets the duedate property value. 
     * @param value Value to set for the duedate property.
     */
    public set duedate(value: DateOnly | undefined) {
        this._duedate = value;
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
     * Gets the freightamount property value. 
     * @returns a int64
     */
    public get freightamount() {
        return this._freightamount;
    };
    /**
     * Sets the freightamount property value. 
     * @param value Value to set for the freightamount property.
     */
    public set freightamount(value: number | undefined) {
        this._freightamount = value;
    };
    /**
     * Gets the freightamount_base property value. 
     * @returns a int64
     */
    public get freightamount_base() {
        return this._freightamount_base;
    };
    /**
     * Sets the freightamount_base property value. 
     * @param value Value to set for the freightamount_base property.
     */
    public set freightamount_base(value: number | undefined) {
        this._freightamount_base = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_accountid_value": (o, n) => { (o as unknown as Invoice)._accountid_value = n.getStringValue(); },
            "_contactid_value": (o, n) => { (o as unknown as Invoice)._contactid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Invoice)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Invoice)._createdonbehalfby_value = n.getStringValue(); },
            "_customerid_value": (o, n) => { (o as unknown as Invoice)._customerid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Invoice)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Invoice)._modifiedonbehalfby_value = n.getStringValue(); },
            "_opportunityid_value": (o, n) => { (o as unknown as Invoice)._opportunityid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Invoice)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Invoice)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Invoice)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Invoice)._owninguser_value = n.getStringValue(); },
            "_pricelevelid_value": (o, n) => { (o as unknown as Invoice)._pricelevelid_value = n.getStringValue(); },
            "_salesorderid_value": (o, n) => { (o as unknown as Invoice)._salesorderid_value = n.getStringValue(); },
            "_slaid_value": (o, n) => { (o as unknown as Invoice)._slaid_value = n.getStringValue(); },
            "_slainvokedid_value": (o, n) => { (o as unknown as Invoice)._slainvokedid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Invoice)._transactioncurrencyid_value = n.getStringValue(); },
            "billto_city": (o, n) => { (o as unknown as Invoice).billto_city = n.getStringValue(); },
            "billto_composite": (o, n) => { (o as unknown as Invoice).billto_composite = n.getStringValue(); },
            "billto_country": (o, n) => { (o as unknown as Invoice).billto_country = n.getStringValue(); },
            "billto_fax": (o, n) => { (o as unknown as Invoice).billto_fax = n.getStringValue(); },
            "billto_line1": (o, n) => { (o as unknown as Invoice).billto_line1 = n.getStringValue(); },
            "billto_line2": (o, n) => { (o as unknown as Invoice).billto_line2 = n.getStringValue(); },
            "billto_line3": (o, n) => { (o as unknown as Invoice).billto_line3 = n.getStringValue(); },
            "billto_name": (o, n) => { (o as unknown as Invoice).billto_name = n.getStringValue(); },
            "billto_postalcode": (o, n) => { (o as unknown as Invoice).billto_postalcode = n.getStringValue(); },
            "billto_stateorprovince": (o, n) => { (o as unknown as Invoice).billto_stateorprovince = n.getStringValue(); },
            "billto_telephone": (o, n) => { (o as unknown as Invoice).billto_telephone = n.getStringValue(); },
            "bpf_invoice_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d": (o, n) => { (o as unknown as Invoice).bpf_invoice_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d = n.getCollectionOfObjectValues<Msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d>(createMsdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470dFromDiscriminatorValue); },
            "contactinvoices_association": (o, n) => { (o as unknown as Invoice).contactinvoices_association = n.getCollectionOfObjectValues<Contact>(createContactFromDiscriminatorValue); },
            "createdby": (o, n) => { (o as unknown as Invoice).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Invoice).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Invoice).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "customerid_account": (o, n) => { (o as unknown as Invoice).customerid_account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "customerid_contact": (o, n) => { (o as unknown as Invoice).customerid_contact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "datedelivered": (o, n) => { (o as unknown as Invoice).datedelivered = n.getDateValue(); },
            "description": (o, n) => { (o as unknown as Invoice).description = n.getStringValue(); },
            "discountamount": (o, n) => { (o as unknown as Invoice).discountamount = n.getNumberValue(); },
            "discountamount_base": (o, n) => { (o as unknown as Invoice).discountamount_base = n.getNumberValue(); },
            "discountpercentage": (o, n) => { (o as unknown as Invoice).discountpercentage = n.getNumberValue(); },
            "duedate": (o, n) => { (o as unknown as Invoice).duedate = n.getDateOnlyValue(); },
            "emailaddress": (o, n) => { (o as unknown as Invoice).emailaddress = n.getStringValue(); },
            "entityimage": (o, n) => { (o as unknown as Invoice).entityimage = n.getStringValue(); },
            "entityimage_timestamp": (o, n) => { (o as unknown as Invoice).entityimage_timestamp = n.getNumberValue(); },
            "entityimage_url": (o, n) => { (o as unknown as Invoice).entityimage_url = n.getStringValue(); },
            "entityimageid": (o, n) => { (o as unknown as Invoice).entityimageid = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Invoice).exchangerate = n.getNumberValue(); },
            "freightamount": (o, n) => { (o as unknown as Invoice).freightamount = n.getNumberValue(); },
            "freightamount_base": (o, n) => { (o as unknown as Invoice).freightamount_base = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Invoice).importsequencenumber = n.getNumberValue(); },
            "invoice_activity_parties": (o, n) => { (o as unknown as Invoice).invoice_activity_parties = n.getCollectionOfObjectValues<Activityparty>(createActivitypartyFromDiscriminatorValue); },
            "invoice_ActivityPointers": (o, n) => { (o as unknown as Invoice).invoice_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "invoice_Annotation": (o, n) => { (o as unknown as Invoice).invoice_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "invoice_Appointments": (o, n) => { (o as unknown as Invoice).invoice_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "invoice_AsyncOperations": (o, n) => { (o as unknown as Invoice).invoice_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "invoice_BulkDeleteFailures": (o, n) => { (o as unknown as Invoice).invoice_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "invoice_connections1": (o, n) => { (o as unknown as Invoice).invoice_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "invoice_connections2": (o, n) => { (o as unknown as Invoice).invoice_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "invoice_details": (o, n) => { (o as unknown as Invoice).invoice_details = n.getCollectionOfObjectValues<Invoicedetail>(createInvoicedetailFromDiscriminatorValue); },
            "invoice_Emails": (o, n) => { (o as unknown as Invoice).invoice_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "invoice_Faxes": (o, n) => { (o as unknown as Invoice).invoice_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "invoice_Letters": (o, n) => { (o as unknown as Invoice).invoice_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "invoice_MailboxTrackingFolder": (o, n) => { (o as unknown as Invoice).invoice_MailboxTrackingFolder = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "invoice_msdyn_approvals": (o, n) => { (o as unknown as Invoice).invoice_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "invoice_msdyn_bookingalerts": (o, n) => { (o as unknown as Invoice).invoice_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "invoice_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Invoice).invoice_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "invoice_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Invoice).invoice_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "invoice_msdyn_ocsessions": (o, n) => { (o as unknown as Invoice).invoice_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "invoice_msfp_alerts": (o, n) => { (o as unknown as Invoice).invoice_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "invoice_msfp_surveyinvites": (o, n) => { (o as unknown as Invoice).invoice_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "invoice_msfp_surveyresponses": (o, n) => { (o as unknown as Invoice).invoice_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "invoice_Phonecalls": (o, n) => { (o as unknown as Invoice).invoice_Phonecalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "invoice_principalobjectattributeaccess": (o, n) => { (o as unknown as Invoice).invoice_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "invoice_ProcessSessions": (o, n) => { (o as unknown as Invoice).invoice_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "invoice_RecurringAppointmentMasters": (o, n) => { (o as unknown as Invoice).invoice_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "invoice_ServiceAppointments": (o, n) => { (o as unknown as Invoice).invoice_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "invoice_SocialActivities": (o, n) => { (o as unknown as Invoice).invoice_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "invoice_SyncErrors": (o, n) => { (o as unknown as Invoice).invoice_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "invoice_Tasks": (o, n) => { (o as unknown as Invoice).invoice_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "invoiceid": (o, n) => { (o as unknown as Invoice).invoiceid = n.getStringValue(); },
            "invoicenumber": (o, n) => { (o as unknown as Invoice).invoicenumber = n.getStringValue(); },
            "ispricelocked": (o, n) => { (o as unknown as Invoice).ispricelocked = n.getBooleanValue(); },
            "lastbackofficesubmit": (o, n) => { (o as unknown as Invoice).lastbackofficesubmit = n.getDateValue(); },
            "lastonholdtime": (o, n) => { (o as unknown as Invoice).lastonholdtime = n.getDateValue(); },
            "modifiedby": (o, n) => { (o as unknown as Invoice).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Invoice).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Invoice).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_amountdue": (o, n) => { (o as unknown as Invoice).msdyn_amountdue = n.getNumberValue(); },
            "msdyn_amountdue_base": (o, n) => { (o as unknown as Invoice).msdyn_amountdue_base = n.getNumberValue(); },
            "msdyn_billtocontactname": (o, n) => { (o as unknown as Invoice).msdyn_billtocontactname = n.getStringValue(); },
            "msdyn_hascorrections": (o, n) => { (o as unknown as Invoice).msdyn_hascorrections = n.getBooleanValue(); },
            "msdyn_invoice_msdyn_actual_Invoice": (o, n) => { (o as unknown as Invoice).msdyn_invoice_msdyn_actual_Invoice = n.getCollectionOfObjectValues<Msdyn_actual>(createMsdyn_actualFromDiscriminatorValue); },
            "msdyn_invoice_msdyn_agreementinvoicedate_Invoice": (o, n) => { (o as unknown as Invoice).msdyn_invoice_msdyn_agreementinvoicedate_Invoice = n.getCollectionOfObjectValues<Msdyn_agreementinvoicedate>(createMsdyn_agreementinvoicedateFromDiscriminatorValue); },
            "msdyn_invoice_msdyn_contractlineinvoiceschedule_Invoice": (o, n) => { (o as unknown as Invoice).msdyn_invoice_msdyn_contractlineinvoiceschedule_Invoice = n.getCollectionOfObjectValues<Msdyn_contractlineinvoiceschedule>(createMsdyn_contractlineinvoicescheduleFromDiscriminatorValue); },
            "msdyn_invoice_msdyn_invoicelinetransaction_Invoice": (o, n) => { (o as unknown as Invoice).msdyn_invoice_msdyn_invoicelinetransaction_Invoice = n.getCollectionOfObjectValues<Msdyn_invoicelinetransaction>(createMsdyn_invoicelinetransactionFromDiscriminatorValue); },
            "msdyn_invoice_msdyn_orderinvoicingdate_Invoice": (o, n) => { (o as unknown as Invoice).msdyn_invoice_msdyn_orderinvoicingdate_Invoice = n.getCollectionOfObjectValues<Msdyn_orderinvoicingdate>(createMsdyn_orderinvoicingdateFromDiscriminatorValue); },
            "msdyn_invoice_msdyn_orderinvoicingsetupdate_Invoice": (o, n) => { (o as unknown as Invoice).msdyn_invoice_msdyn_orderinvoicingsetupdate_Invoice = n.getCollectionOfObjectValues<Msdyn_orderinvoicingsetupdate>(createMsdyn_orderinvoicingsetupdateFromDiscriminatorValue); },
            "msdyn_invoice_msdyn_paymentdetail_Invoice": (o, n) => { (o as unknown as Invoice).msdyn_invoice_msdyn_paymentdetail_Invoice = n.getCollectionOfObjectValues<Msdyn_paymentdetail>(createMsdyn_paymentdetailFromDiscriminatorValue); },
            "msdyn_invoicedate": (o, n) => { (o as unknown as Invoice).msdyn_invoicedate = n.getDateValue(); },
            "msdyn_ordertype": (o, n) => { (o as unknown as Invoice).msdyn_ordertype = n.getNumberValue(); },
            "msdyn_playbookinstance_invoice": (o, n) => { (o as unknown as Invoice).msdyn_playbookinstance_invoice = n.getCollectionOfObjectValues<Msdyn_playbookinstance>(createMsdyn_playbookinstanceFromDiscriminatorValue); },
            "msdyn_projectinvoicestatus": (o, n) => { (o as unknown as Invoice).msdyn_projectinvoicestatus = n.getNumberValue(); },
            "name": (o, n) => { (o as unknown as Invoice).name = n.getStringValue(); },
            "onholdtime": (o, n) => { (o as unknown as Invoice).onholdtime = n.getNumberValue(); },
            "opportunityid": (o, n) => { (o as unknown as Invoice).opportunityid = n.getObjectValue<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Invoice).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Invoice).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Invoice).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Invoice).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Invoice).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "paymenttermscode": (o, n) => { (o as unknown as Invoice).paymenttermscode = n.getNumberValue(); },
            "pricelevelid": (o, n) => { (o as unknown as Invoice).pricelevelid = n.getObjectValue<Pricelevel>(createPricelevelFromDiscriminatorValue); },
            "pricingerrorcode": (o, n) => { (o as unknown as Invoice).pricingerrorcode = n.getNumberValue(); },
            "prioritycode": (o, n) => { (o as unknown as Invoice).prioritycode = n.getNumberValue(); },
            "processid": (o, n) => { (o as unknown as Invoice).processid = n.getStringValue(); },
            "salesorderid": (o, n) => { (o as unknown as Invoice).salesorderid = n.getObjectValue<Salesorder>(createSalesorderFromDiscriminatorValue); },
            "shippingmethodcode": (o, n) => { (o as unknown as Invoice).shippingmethodcode = n.getNumberValue(); },
            "shipto_city": (o, n) => { (o as unknown as Invoice).shipto_city = n.getStringValue(); },
            "shipto_composite": (o, n) => { (o as unknown as Invoice).shipto_composite = n.getStringValue(); },
            "shipto_country": (o, n) => { (o as unknown as Invoice).shipto_country = n.getStringValue(); },
            "shipto_fax": (o, n) => { (o as unknown as Invoice).shipto_fax = n.getStringValue(); },
            "shipto_freighttermscode": (o, n) => { (o as unknown as Invoice).shipto_freighttermscode = n.getNumberValue(); },
            "shipto_line1": (o, n) => { (o as unknown as Invoice).shipto_line1 = n.getStringValue(); },
            "shipto_line2": (o, n) => { (o as unknown as Invoice).shipto_line2 = n.getStringValue(); },
            "shipto_line3": (o, n) => { (o as unknown as Invoice).shipto_line3 = n.getStringValue(); },
            "shipto_name": (o, n) => { (o as unknown as Invoice).shipto_name = n.getStringValue(); },
            "shipto_postalcode": (o, n) => { (o as unknown as Invoice).shipto_postalcode = n.getStringValue(); },
            "shipto_stateorprovince": (o, n) => { (o as unknown as Invoice).shipto_stateorprovince = n.getStringValue(); },
            "shipto_telephone": (o, n) => { (o as unknown as Invoice).shipto_telephone = n.getStringValue(); },
            "skippricecalculation": (o, n) => { (o as unknown as Invoice).skippricecalculation = n.getNumberValue(); },
            "sla_invoice_sla": (o, n) => { (o as unknown as Invoice).sla_invoice_sla = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "slainvokedid_invoice_sla": (o, n) => { (o as unknown as Invoice).slainvokedid_invoice_sla = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "slakpiinstance_invoice": (o, n) => { (o as unknown as Invoice).slakpiinstance_invoice = n.getCollectionOfObjectValues<Slakpiinstance>(createSlakpiinstanceFromDiscriminatorValue); },
            "stageid": (o, n) => { (o as unknown as Invoice).stageid = n.getStringValue(); },
            "stageid_processstage": (o, n) => { (o as unknown as Invoice).stageid_processstage = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Invoice).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Invoice).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Invoice).timezoneruleversionnumber = n.getNumberValue(); },
            "totalamount": (o, n) => { (o as unknown as Invoice).totalamount = n.getNumberValue(); },
            "totalamount_base": (o, n) => { (o as unknown as Invoice).totalamount_base = n.getNumberValue(); },
            "totalamountlessfreight": (o, n) => { (o as unknown as Invoice).totalamountlessfreight = n.getNumberValue(); },
            "totalamountlessfreight_base": (o, n) => { (o as unknown as Invoice).totalamountlessfreight_base = n.getNumberValue(); },
            "totaldiscountamount": (o, n) => { (o as unknown as Invoice).totaldiscountamount = n.getNumberValue(); },
            "totaldiscountamount_base": (o, n) => { (o as unknown as Invoice).totaldiscountamount_base = n.getNumberValue(); },
            "totallineitemamount": (o, n) => { (o as unknown as Invoice).totallineitemamount = n.getNumberValue(); },
            "totallineitemamount_base": (o, n) => { (o as unknown as Invoice).totallineitemamount_base = n.getNumberValue(); },
            "totallineitemdiscountamount": (o, n) => { (o as unknown as Invoice).totallineitemdiscountamount = n.getNumberValue(); },
            "totallineitemdiscountamount_base": (o, n) => { (o as unknown as Invoice).totallineitemdiscountamount_base = n.getNumberValue(); },
            "totaltax": (o, n) => { (o as unknown as Invoice).totaltax = n.getNumberValue(); },
            "totaltax_base": (o, n) => { (o as unknown as Invoice).totaltax_base = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Invoice).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "traversedpath": (o, n) => { (o as unknown as Invoice).traversedpath = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Invoice).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Invoice).versionnumber = n.getNumberValue(); },
            "willcall": (o, n) => { (o as unknown as Invoice).willcall = n.getBooleanValue(); },
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
     * Gets the invoice_activity_parties property value. 
     * @returns a activityparty
     */
    public get invoice_activity_parties() {
        return this._invoice_activity_parties;
    };
    /**
     * Sets the invoice_activity_parties property value. 
     * @param value Value to set for the invoice_activity_parties property.
     */
    public set invoice_activity_parties(value: Activityparty[] | undefined) {
        this._invoice_activity_parties = value;
    };
    /**
     * Gets the invoice_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get invoice_ActivityPointers() {
        return this._invoice_ActivityPointers;
    };
    /**
     * Sets the invoice_ActivityPointers property value. 
     * @param value Value to set for the Invoice_ActivityPointers property.
     */
    public set invoice_ActivityPointers(value: Activitypointer[] | undefined) {
        this._invoice_ActivityPointers = value;
    };
    /**
     * Gets the invoice_Annotation property value. 
     * @returns a annotation
     */
    public get invoice_Annotation() {
        return this._invoice_Annotation;
    };
    /**
     * Sets the invoice_Annotation property value. 
     * @param value Value to set for the Invoice_Annotation property.
     */
    public set invoice_Annotation(value: Annotation[] | undefined) {
        this._invoice_Annotation = value;
    };
    /**
     * Gets the invoice_Appointments property value. 
     * @returns a appointment
     */
    public get invoice_Appointments() {
        return this._invoice_Appointments;
    };
    /**
     * Sets the invoice_Appointments property value. 
     * @param value Value to set for the Invoice_Appointments property.
     */
    public set invoice_Appointments(value: Appointment[] | undefined) {
        this._invoice_Appointments = value;
    };
    /**
     * Gets the invoice_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get invoice_AsyncOperations() {
        return this._invoice_AsyncOperations;
    };
    /**
     * Sets the invoice_AsyncOperations property value. 
     * @param value Value to set for the Invoice_AsyncOperations property.
     */
    public set invoice_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._invoice_AsyncOperations = value;
    };
    /**
     * Gets the invoice_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get invoice_BulkDeleteFailures() {
        return this._invoice_BulkDeleteFailures;
    };
    /**
     * Sets the invoice_BulkDeleteFailures property value. 
     * @param value Value to set for the Invoice_BulkDeleteFailures property.
     */
    public set invoice_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._invoice_BulkDeleteFailures = value;
    };
    /**
     * Gets the invoice_connections1 property value. 
     * @returns a connection
     */
    public get invoice_connections1() {
        return this._invoice_connections1;
    };
    /**
     * Sets the invoice_connections1 property value. 
     * @param value Value to set for the invoice_connections1 property.
     */
    public set invoice_connections1(value: Connection[] | undefined) {
        this._invoice_connections1 = value;
    };
    /**
     * Gets the invoice_connections2 property value. 
     * @returns a connection
     */
    public get invoice_connections2() {
        return this._invoice_connections2;
    };
    /**
     * Sets the invoice_connections2 property value. 
     * @param value Value to set for the invoice_connections2 property.
     */
    public set invoice_connections2(value: Connection[] | undefined) {
        this._invoice_connections2 = value;
    };
    /**
     * Gets the invoice_details property value. 
     * @returns a invoicedetail
     */
    public get invoice_details() {
        return this._invoice_details;
    };
    /**
     * Sets the invoice_details property value. 
     * @param value Value to set for the invoice_details property.
     */
    public set invoice_details(value: Invoicedetail[] | undefined) {
        this._invoice_details = value;
    };
    /**
     * Gets the invoice_Emails property value. 
     * @returns a email
     */
    public get invoice_Emails() {
        return this._invoice_Emails;
    };
    /**
     * Sets the invoice_Emails property value. 
     * @param value Value to set for the Invoice_Emails property.
     */
    public set invoice_Emails(value: Email[] | undefined) {
        this._invoice_Emails = value;
    };
    /**
     * Gets the invoice_Faxes property value. 
     * @returns a fax
     */
    public get invoice_Faxes() {
        return this._invoice_Faxes;
    };
    /**
     * Sets the invoice_Faxes property value. 
     * @param value Value to set for the Invoice_Faxes property.
     */
    public set invoice_Faxes(value: Fax[] | undefined) {
        this._invoice_Faxes = value;
    };
    /**
     * Gets the invoice_Letters property value. 
     * @returns a letter
     */
    public get invoice_Letters() {
        return this._invoice_Letters;
    };
    /**
     * Sets the invoice_Letters property value. 
     * @param value Value to set for the Invoice_Letters property.
     */
    public set invoice_Letters(value: Letter[] | undefined) {
        this._invoice_Letters = value;
    };
    /**
     * Gets the invoice_MailboxTrackingFolder property value. 
     * @returns a mailboxtrackingfolder
     */
    public get invoice_MailboxTrackingFolder() {
        return this._invoice_MailboxTrackingFolder;
    };
    /**
     * Sets the invoice_MailboxTrackingFolder property value. 
     * @param value Value to set for the Invoice_MailboxTrackingFolder property.
     */
    public set invoice_MailboxTrackingFolder(value: Mailboxtrackingfolder[] | undefined) {
        this._invoice_MailboxTrackingFolder = value;
    };
    /**
     * Gets the invoice_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get invoice_msdyn_approvals() {
        return this._invoice_msdyn_approvals;
    };
    /**
     * Sets the invoice_msdyn_approvals property value. 
     * @param value Value to set for the invoice_msdyn_approvals property.
     */
    public set invoice_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._invoice_msdyn_approvals = value;
    };
    /**
     * Gets the invoice_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get invoice_msdyn_bookingalerts() {
        return this._invoice_msdyn_bookingalerts;
    };
    /**
     * Sets the invoice_msdyn_bookingalerts property value. 
     * @param value Value to set for the invoice_msdyn_bookingalerts property.
     */
    public set invoice_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._invoice_msdyn_bookingalerts = value;
    };
    /**
     * Gets the invoice_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get invoice_msdyn_ocliveworkitems() {
        return this._invoice_msdyn_ocliveworkitems;
    };
    /**
     * Sets the invoice_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the invoice_msdyn_ocliveworkitems property.
     */
    public set invoice_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._invoice_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the invoice_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get invoice_msdyn_ocoutboundmessages() {
        return this._invoice_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the invoice_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the invoice_msdyn_ocoutboundmessages property.
     */
    public set invoice_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._invoice_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the invoice_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get invoice_msdyn_ocsessions() {
        return this._invoice_msdyn_ocsessions;
    };
    /**
     * Sets the invoice_msdyn_ocsessions property value. 
     * @param value Value to set for the invoice_msdyn_ocsessions property.
     */
    public set invoice_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._invoice_msdyn_ocsessions = value;
    };
    /**
     * Gets the invoice_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get invoice_msfp_alerts() {
        return this._invoice_msfp_alerts;
    };
    /**
     * Sets the invoice_msfp_alerts property value. 
     * @param value Value to set for the invoice_msfp_alerts property.
     */
    public set invoice_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._invoice_msfp_alerts = value;
    };
    /**
     * Gets the invoice_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get invoice_msfp_surveyinvites() {
        return this._invoice_msfp_surveyinvites;
    };
    /**
     * Sets the invoice_msfp_surveyinvites property value. 
     * @param value Value to set for the invoice_msfp_surveyinvites property.
     */
    public set invoice_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._invoice_msfp_surveyinvites = value;
    };
    /**
     * Gets the invoice_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get invoice_msfp_surveyresponses() {
        return this._invoice_msfp_surveyresponses;
    };
    /**
     * Sets the invoice_msfp_surveyresponses property value. 
     * @param value Value to set for the invoice_msfp_surveyresponses property.
     */
    public set invoice_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._invoice_msfp_surveyresponses = value;
    };
    /**
     * Gets the invoice_Phonecalls property value. 
     * @returns a phonecall
     */
    public get invoice_Phonecalls() {
        return this._invoice_Phonecalls;
    };
    /**
     * Sets the invoice_Phonecalls property value. 
     * @param value Value to set for the Invoice_Phonecalls property.
     */
    public set invoice_Phonecalls(value: Phonecall[] | undefined) {
        this._invoice_Phonecalls = value;
    };
    /**
     * Gets the invoice_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get invoice_principalobjectattributeaccess() {
        return this._invoice_principalobjectattributeaccess;
    };
    /**
     * Sets the invoice_principalobjectattributeaccess property value. 
     * @param value Value to set for the invoice_principalobjectattributeaccess property.
     */
    public set invoice_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._invoice_principalobjectattributeaccess = value;
    };
    /**
     * Gets the invoice_ProcessSessions property value. 
     * @returns a processsession
     */
    public get invoice_ProcessSessions() {
        return this._invoice_ProcessSessions;
    };
    /**
     * Sets the invoice_ProcessSessions property value. 
     * @param value Value to set for the Invoice_ProcessSessions property.
     */
    public set invoice_ProcessSessions(value: Processsession[] | undefined) {
        this._invoice_ProcessSessions = value;
    };
    /**
     * Gets the invoice_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get invoice_RecurringAppointmentMasters() {
        return this._invoice_RecurringAppointmentMasters;
    };
    /**
     * Sets the invoice_RecurringAppointmentMasters property value. 
     * @param value Value to set for the Invoice_RecurringAppointmentMasters property.
     */
    public set invoice_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._invoice_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the invoice_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get invoice_ServiceAppointments() {
        return this._invoice_ServiceAppointments;
    };
    /**
     * Sets the invoice_ServiceAppointments property value. 
     * @param value Value to set for the Invoice_ServiceAppointments property.
     */
    public set invoice_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._invoice_ServiceAppointments = value;
    };
    /**
     * Gets the invoice_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get invoice_SocialActivities() {
        return this._invoice_SocialActivities;
    };
    /**
     * Sets the invoice_SocialActivities property value. 
     * @param value Value to set for the Invoice_SocialActivities property.
     */
    public set invoice_SocialActivities(value: Socialactivity[] | undefined) {
        this._invoice_SocialActivities = value;
    };
    /**
     * Gets the invoice_SyncErrors property value. 
     * @returns a syncerror
     */
    public get invoice_SyncErrors() {
        return this._invoice_SyncErrors;
    };
    /**
     * Sets the invoice_SyncErrors property value. 
     * @param value Value to set for the Invoice_SyncErrors property.
     */
    public set invoice_SyncErrors(value: Syncerror[] | undefined) {
        this._invoice_SyncErrors = value;
    };
    /**
     * Gets the invoice_Tasks property value. 
     * @returns a task
     */
    public get invoice_Tasks() {
        return this._invoice_Tasks;
    };
    /**
     * Sets the invoice_Tasks property value. 
     * @param value Value to set for the Invoice_Tasks property.
     */
    public set invoice_Tasks(value: Task[] | undefined) {
        this._invoice_Tasks = value;
    };
    /**
     * Gets the invoiceid property value. 
     * @returns a string
     */
    public get invoiceid() {
        return this._invoiceid;
    };
    /**
     * Sets the invoiceid property value. 
     * @param value Value to set for the invoiceid property.
     */
    public set invoiceid(value: string | undefined) {
        this._invoiceid = value;
    };
    /**
     * Gets the invoicenumber property value. 
     * @returns a string
     */
    public get invoicenumber() {
        return this._invoicenumber;
    };
    /**
     * Sets the invoicenumber property value. 
     * @param value Value to set for the invoicenumber property.
     */
    public set invoicenumber(value: string | undefined) {
        this._invoicenumber = value;
    };
    /**
     * Gets the ispricelocked property value. 
     * @returns a boolean
     */
    public get ispricelocked() {
        return this._ispricelocked;
    };
    /**
     * Sets the ispricelocked property value. 
     * @param value Value to set for the ispricelocked property.
     */
    public set ispricelocked(value: boolean | undefined) {
        this._ispricelocked = value;
    };
    /**
     * Gets the lastbackofficesubmit property value. 
     * @returns a Date
     */
    public get lastbackofficesubmit() {
        return this._lastbackofficesubmit;
    };
    /**
     * Sets the lastbackofficesubmit property value. 
     * @param value Value to set for the lastbackofficesubmit property.
     */
    public set lastbackofficesubmit(value: Date | undefined) {
        this._lastbackofficesubmit = value;
    };
    /**
     * Gets the lastonholdtime property value. 
     * @returns a Date
     */
    public get lastonholdtime() {
        return this._lastonholdtime;
    };
    /**
     * Sets the lastonholdtime property value. 
     * @param value Value to set for the lastonholdtime property.
     */
    public set lastonholdtime(value: Date | undefined) {
        this._lastonholdtime = value;
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
     * Gets the msdyn_amountdue property value. 
     * @returns a int64
     */
    public get msdyn_amountdue() {
        return this._msdyn_amountdue;
    };
    /**
     * Sets the msdyn_amountdue property value. 
     * @param value Value to set for the msdyn_amountdue property.
     */
    public set msdyn_amountdue(value: number | undefined) {
        this._msdyn_amountdue = value;
    };
    /**
     * Gets the msdyn_amountdue_base property value. 
     * @returns a int64
     */
    public get msdyn_amountdue_base() {
        return this._msdyn_amountdue_base;
    };
    /**
     * Sets the msdyn_amountdue_base property value. 
     * @param value Value to set for the msdyn_amountdue_base property.
     */
    public set msdyn_amountdue_base(value: number | undefined) {
        this._msdyn_amountdue_base = value;
    };
    /**
     * Gets the msdyn_billtocontactname property value. 
     * @returns a string
     */
    public get msdyn_billtocontactname() {
        return this._msdyn_billtocontactname;
    };
    /**
     * Sets the msdyn_billtocontactname property value. 
     * @param value Value to set for the msdyn_billtocontactname property.
     */
    public set msdyn_billtocontactname(value: string | undefined) {
        this._msdyn_billtocontactname = value;
    };
    /**
     * Gets the msdyn_hascorrections property value. 
     * @returns a boolean
     */
    public get msdyn_hascorrections() {
        return this._msdyn_hascorrections;
    };
    /**
     * Sets the msdyn_hascorrections property value. 
     * @param value Value to set for the msdyn_hascorrections property.
     */
    public set msdyn_hascorrections(value: boolean | undefined) {
        this._msdyn_hascorrections = value;
    };
    /**
     * Gets the msdyn_invoice_msdyn_actual_Invoice property value. 
     * @returns a msdyn_actual
     */
    public get msdyn_invoice_msdyn_actual_Invoice() {
        return this._msdyn_invoice_msdyn_actual_Invoice;
    };
    /**
     * Sets the msdyn_invoice_msdyn_actual_Invoice property value. 
     * @param value Value to set for the msdyn_invoice_msdyn_actual_Invoice property.
     */
    public set msdyn_invoice_msdyn_actual_Invoice(value: Msdyn_actual[] | undefined) {
        this._msdyn_invoice_msdyn_actual_Invoice = value;
    };
    /**
     * Gets the msdyn_invoice_msdyn_agreementinvoicedate_Invoice property value. 
     * @returns a msdyn_agreementinvoicedate
     */
    public get msdyn_invoice_msdyn_agreementinvoicedate_Invoice() {
        return this._msdyn_invoice_msdyn_agreementinvoicedate_Invoice;
    };
    /**
     * Sets the msdyn_invoice_msdyn_agreementinvoicedate_Invoice property value. 
     * @param value Value to set for the msdyn_invoice_msdyn_agreementinvoicedate_Invoice property.
     */
    public set msdyn_invoice_msdyn_agreementinvoicedate_Invoice(value: Msdyn_agreementinvoicedate[] | undefined) {
        this._msdyn_invoice_msdyn_agreementinvoicedate_Invoice = value;
    };
    /**
     * Gets the msdyn_invoice_msdyn_contractlineinvoiceschedule_Invoice property value. 
     * @returns a msdyn_contractlineinvoiceschedule
     */
    public get msdyn_invoice_msdyn_contractlineinvoiceschedule_Invoice() {
        return this._msdyn_invoice_msdyn_contractlineinvoiceschedule_Invoice;
    };
    /**
     * Sets the msdyn_invoice_msdyn_contractlineinvoiceschedule_Invoice property value. 
     * @param value Value to set for the msdyn_invoice_msdyn_contractlineinvoiceschedule_Invoice property.
     */
    public set msdyn_invoice_msdyn_contractlineinvoiceschedule_Invoice(value: Msdyn_contractlineinvoiceschedule[] | undefined) {
        this._msdyn_invoice_msdyn_contractlineinvoiceschedule_Invoice = value;
    };
    /**
     * Gets the msdyn_invoice_msdyn_invoicelinetransaction_Invoice property value. 
     * @returns a msdyn_invoicelinetransaction
     */
    public get msdyn_invoice_msdyn_invoicelinetransaction_Invoice() {
        return this._msdyn_invoice_msdyn_invoicelinetransaction_Invoice;
    };
    /**
     * Sets the msdyn_invoice_msdyn_invoicelinetransaction_Invoice property value. 
     * @param value Value to set for the msdyn_invoice_msdyn_invoicelinetransaction_Invoice property.
     */
    public set msdyn_invoice_msdyn_invoicelinetransaction_Invoice(value: Msdyn_invoicelinetransaction[] | undefined) {
        this._msdyn_invoice_msdyn_invoicelinetransaction_Invoice = value;
    };
    /**
     * Gets the msdyn_invoice_msdyn_orderinvoicingdate_Invoice property value. 
     * @returns a msdyn_orderinvoicingdate
     */
    public get msdyn_invoice_msdyn_orderinvoicingdate_Invoice() {
        return this._msdyn_invoice_msdyn_orderinvoicingdate_Invoice;
    };
    /**
     * Sets the msdyn_invoice_msdyn_orderinvoicingdate_Invoice property value. 
     * @param value Value to set for the msdyn_invoice_msdyn_orderinvoicingdate_Invoice property.
     */
    public set msdyn_invoice_msdyn_orderinvoicingdate_Invoice(value: Msdyn_orderinvoicingdate[] | undefined) {
        this._msdyn_invoice_msdyn_orderinvoicingdate_Invoice = value;
    };
    /**
     * Gets the msdyn_invoice_msdyn_orderinvoicingsetupdate_Invoice property value. 
     * @returns a msdyn_orderinvoicingsetupdate
     */
    public get msdyn_invoice_msdyn_orderinvoicingsetupdate_Invoice() {
        return this._msdyn_invoice_msdyn_orderinvoicingsetupdate_Invoice;
    };
    /**
     * Sets the msdyn_invoice_msdyn_orderinvoicingsetupdate_Invoice property value. 
     * @param value Value to set for the msdyn_invoice_msdyn_orderinvoicingsetupdate_Invoice property.
     */
    public set msdyn_invoice_msdyn_orderinvoicingsetupdate_Invoice(value: Msdyn_orderinvoicingsetupdate[] | undefined) {
        this._msdyn_invoice_msdyn_orderinvoicingsetupdate_Invoice = value;
    };
    /**
     * Gets the msdyn_invoice_msdyn_paymentdetail_Invoice property value. 
     * @returns a msdyn_paymentdetail
     */
    public get msdyn_invoice_msdyn_paymentdetail_Invoice() {
        return this._msdyn_invoice_msdyn_paymentdetail_Invoice;
    };
    /**
     * Sets the msdyn_invoice_msdyn_paymentdetail_Invoice property value. 
     * @param value Value to set for the msdyn_invoice_msdyn_paymentdetail_Invoice property.
     */
    public set msdyn_invoice_msdyn_paymentdetail_Invoice(value: Msdyn_paymentdetail[] | undefined) {
        this._msdyn_invoice_msdyn_paymentdetail_Invoice = value;
    };
    /**
     * Gets the msdyn_invoicedate property value. 
     * @returns a Date
     */
    public get msdyn_invoicedate() {
        return this._msdyn_invoicedate;
    };
    /**
     * Sets the msdyn_invoicedate property value. 
     * @param value Value to set for the msdyn_invoicedate property.
     */
    public set msdyn_invoicedate(value: Date | undefined) {
        this._msdyn_invoicedate = value;
    };
    /**
     * Gets the msdyn_ordertype property value. 
     * @returns a integer
     */
    public get msdyn_ordertype() {
        return this._msdyn_ordertype;
    };
    /**
     * Sets the msdyn_ordertype property value. 
     * @param value Value to set for the msdyn_ordertype property.
     */
    public set msdyn_ordertype(value: number | undefined) {
        this._msdyn_ordertype = value;
    };
    /**
     * Gets the msdyn_playbookinstance_invoice property value. 
     * @returns a msdyn_playbookinstance
     */
    public get msdyn_playbookinstance_invoice() {
        return this._msdyn_playbookinstance_invoice;
    };
    /**
     * Sets the msdyn_playbookinstance_invoice property value. 
     * @param value Value to set for the msdyn_playbookinstance_invoice property.
     */
    public set msdyn_playbookinstance_invoice(value: Msdyn_playbookinstance[] | undefined) {
        this._msdyn_playbookinstance_invoice = value;
    };
    /**
     * Gets the msdyn_projectinvoicestatus property value. 
     * @returns a integer
     */
    public get msdyn_projectinvoicestatus() {
        return this._msdyn_projectinvoicestatus;
    };
    /**
     * Sets the msdyn_projectinvoicestatus property value. 
     * @param value Value to set for the msdyn_projectinvoicestatus property.
     */
    public set msdyn_projectinvoicestatus(value: number | undefined) {
        this._msdyn_projectinvoicestatus = value;
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
     * Gets the onholdtime property value. 
     * @returns a integer
     */
    public get onholdtime() {
        return this._onholdtime;
    };
    /**
     * Sets the onholdtime property value. 
     * @param value Value to set for the onholdtime property.
     */
    public set onholdtime(value: number | undefined) {
        this._onholdtime = value;
    };
    /**
     * Gets the opportunityid property value. 
     * @returns a opportunity
     */
    public get opportunityid() {
        return this._opportunityid;
    };
    /**
     * Sets the opportunityid property value. 
     * @param value Value to set for the opportunityid property.
     */
    public set opportunityid(value: Opportunity | undefined) {
        this._opportunityid = value;
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
     * Gets the paymenttermscode property value. 
     * @returns a integer
     */
    public get paymenttermscode() {
        return this._paymenttermscode;
    };
    /**
     * Sets the paymenttermscode property value. 
     * @param value Value to set for the paymenttermscode property.
     */
    public set paymenttermscode(value: number | undefined) {
        this._paymenttermscode = value;
    };
    /**
     * Gets the pricelevelid property value. 
     * @returns a pricelevel
     */
    public get pricelevelid() {
        return this._pricelevelid;
    };
    /**
     * Sets the pricelevelid property value. 
     * @param value Value to set for the pricelevelid property.
     */
    public set pricelevelid(value: Pricelevel | undefined) {
        this._pricelevelid = value;
    };
    /**
     * Gets the pricingerrorcode property value. 
     * @returns a integer
     */
    public get pricingerrorcode() {
        return this._pricingerrorcode;
    };
    /**
     * Sets the pricingerrorcode property value. 
     * @param value Value to set for the pricingerrorcode property.
     */
    public set pricingerrorcode(value: number | undefined) {
        this._pricingerrorcode = value;
    };
    /**
     * Gets the prioritycode property value. 
     * @returns a integer
     */
    public get prioritycode() {
        return this._prioritycode;
    };
    /**
     * Sets the prioritycode property value. 
     * @param value Value to set for the prioritycode property.
     */
    public set prioritycode(value: number | undefined) {
        this._prioritycode = value;
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
     * Gets the salesorderid property value. 
     * @returns a salesorder
     */
    public get salesorderid() {
        return this._salesorderid;
    };
    /**
     * Sets the salesorderid property value. 
     * @param value Value to set for the salesorderid property.
     */
    public set salesorderid(value: Salesorder | undefined) {
        this._salesorderid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_accountid_value", this._accountid_value);
        writer.writeStringValue("_contactid_value", this._contactid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_customerid_value", this._customerid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_opportunityid_value", this._opportunityid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_pricelevelid_value", this._pricelevelid_value);
        writer.writeStringValue("_salesorderid_value", this._salesorderid_value);
        writer.writeStringValue("_slaid_value", this._slaid_value);
        writer.writeStringValue("_slainvokedid_value", this._slainvokedid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeStringValue("billto_city", this.billto_city);
        writer.writeStringValue("billto_composite", this.billto_composite);
        writer.writeStringValue("billto_country", this.billto_country);
        writer.writeStringValue("billto_fax", this.billto_fax);
        writer.writeStringValue("billto_line1", this.billto_line1);
        writer.writeStringValue("billto_line2", this.billto_line2);
        writer.writeStringValue("billto_line3", this.billto_line3);
        writer.writeStringValue("billto_name", this.billto_name);
        writer.writeStringValue("billto_postalcode", this.billto_postalcode);
        writer.writeStringValue("billto_stateorprovince", this.billto_stateorprovince);
        writer.writeStringValue("billto_telephone", this.billto_telephone);
        writer.writeCollectionOfObjectValues<Msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d>("bpf_invoice_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d", this.bpf_invoice_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d);
        writer.writeCollectionOfObjectValues<Contact>("contactinvoices_association", this.contactinvoices_association);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeObjectValue<Account>("customerid_account", this.customerid_account);
        writer.writeObjectValue<Contact>("customerid_contact", this.customerid_contact);
        writer.writeDateValue("datedelivered", this.datedelivered);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("discountamount", this.discountamount);
        writer.writeNumberValue("discountamount_base", this.discountamount_base);
        writer.writeNumberValue("discountpercentage", this.discountpercentage);
        writer.writeDateOnlyValue("duedate", this.duedate);
        writer.writeStringValue("emailaddress", this.emailaddress);
        writer.writeStringValue("entityimage", this.entityimage);
        writer.writeNumberValue("entityimage_timestamp", this.entityimage_timestamp);
        writer.writeStringValue("entityimage_url", this.entityimage_url);
        writer.writeStringValue("entityimageid", this.entityimageid);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("freightamount", this.freightamount);
        writer.writeNumberValue("freightamount_base", this.freightamount_base);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeCollectionOfObjectValues<Activityparty>("invoice_activity_parties", this.invoice_activity_parties);
        writer.writeCollectionOfObjectValues<Activitypointer>("invoice_ActivityPointers", this.invoice_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("invoice_Annotation", this.invoice_Annotation);
        writer.writeCollectionOfObjectValues<Appointment>("invoice_Appointments", this.invoice_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("invoice_AsyncOperations", this.invoice_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("invoice_BulkDeleteFailures", this.invoice_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("invoice_connections1", this.invoice_connections1);
        writer.writeCollectionOfObjectValues<Connection>("invoice_connections2", this.invoice_connections2);
        writer.writeCollectionOfObjectValues<Invoicedetail>("invoice_details", this.invoice_details);
        writer.writeCollectionOfObjectValues<Email>("invoice_Emails", this.invoice_Emails);
        writer.writeCollectionOfObjectValues<Fax>("invoice_Faxes", this.invoice_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("invoice_Letters", this.invoice_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("invoice_MailboxTrackingFolder", this.invoice_MailboxTrackingFolder);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("invoice_msdyn_approvals", this.invoice_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("invoice_msdyn_bookingalerts", this.invoice_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("invoice_msdyn_ocliveworkitems", this.invoice_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("invoice_msdyn_ocoutboundmessages", this.invoice_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("invoice_msdyn_ocsessions", this.invoice_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("invoice_msfp_alerts", this.invoice_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("invoice_msfp_surveyinvites", this.invoice_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("invoice_msfp_surveyresponses", this.invoice_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("invoice_Phonecalls", this.invoice_Phonecalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("invoice_principalobjectattributeaccess", this.invoice_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("invoice_ProcessSessions", this.invoice_ProcessSessions);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("invoice_RecurringAppointmentMasters", this.invoice_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("invoice_ServiceAppointments", this.invoice_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("invoice_SocialActivities", this.invoice_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("invoice_SyncErrors", this.invoice_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("invoice_Tasks", this.invoice_Tasks);
        writer.writeStringValue("invoiceid", this.invoiceid);
        writer.writeStringValue("invoicenumber", this.invoicenumber);
        writer.writeBooleanValue("ispricelocked", this.ispricelocked);
        writer.writeDateValue("lastbackofficesubmit", this.lastbackofficesubmit);
        writer.writeDateValue("lastonholdtime", this.lastonholdtime);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyn_amountdue", this.msdyn_amountdue);
        writer.writeNumberValue("msdyn_amountdue_base", this.msdyn_amountdue_base);
        writer.writeStringValue("msdyn_billtocontactname", this.msdyn_billtocontactname);
        writer.writeBooleanValue("msdyn_hascorrections", this.msdyn_hascorrections);
        writer.writeCollectionOfObjectValues<Msdyn_actual>("msdyn_invoice_msdyn_actual_Invoice", this.msdyn_invoice_msdyn_actual_Invoice);
        writer.writeCollectionOfObjectValues<Msdyn_agreementinvoicedate>("msdyn_invoice_msdyn_agreementinvoicedate_Invoice", this.msdyn_invoice_msdyn_agreementinvoicedate_Invoice);
        writer.writeCollectionOfObjectValues<Msdyn_contractlineinvoiceschedule>("msdyn_invoice_msdyn_contractlineinvoiceschedule_Invoice", this.msdyn_invoice_msdyn_contractlineinvoiceschedule_Invoice);
        writer.writeCollectionOfObjectValues<Msdyn_invoicelinetransaction>("msdyn_invoice_msdyn_invoicelinetransaction_Invoice", this.msdyn_invoice_msdyn_invoicelinetransaction_Invoice);
        writer.writeCollectionOfObjectValues<Msdyn_orderinvoicingdate>("msdyn_invoice_msdyn_orderinvoicingdate_Invoice", this.msdyn_invoice_msdyn_orderinvoicingdate_Invoice);
        writer.writeCollectionOfObjectValues<Msdyn_orderinvoicingsetupdate>("msdyn_invoice_msdyn_orderinvoicingsetupdate_Invoice", this.msdyn_invoice_msdyn_orderinvoicingsetupdate_Invoice);
        writer.writeCollectionOfObjectValues<Msdyn_paymentdetail>("msdyn_invoice_msdyn_paymentdetail_Invoice", this.msdyn_invoice_msdyn_paymentdetail_Invoice);
        writer.writeDateValue("msdyn_invoicedate", this.msdyn_invoicedate);
        writer.writeNumberValue("msdyn_ordertype", this.msdyn_ordertype);
        writer.writeCollectionOfObjectValues<Msdyn_playbookinstance>("msdyn_playbookinstance_invoice", this.msdyn_playbookinstance_invoice);
        writer.writeNumberValue("msdyn_projectinvoicestatus", this.msdyn_projectinvoicestatus);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("onholdtime", this.onholdtime);
        writer.writeObjectValue<Opportunity>("opportunityid", this.opportunityid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("paymenttermscode", this.paymenttermscode);
        writer.writeObjectValue<Pricelevel>("pricelevelid", this.pricelevelid);
        writer.writeNumberValue("pricingerrorcode", this.pricingerrorcode);
        writer.writeNumberValue("prioritycode", this.prioritycode);
        writer.writeStringValue("processid", this.processid);
        writer.writeObjectValue<Salesorder>("salesorderid", this.salesorderid);
        writer.writeNumberValue("shippingmethodcode", this.shippingmethodcode);
        writer.writeStringValue("shipto_city", this.shipto_city);
        writer.writeStringValue("shipto_composite", this.shipto_composite);
        writer.writeStringValue("shipto_country", this.shipto_country);
        writer.writeStringValue("shipto_fax", this.shipto_fax);
        writer.writeNumberValue("shipto_freighttermscode", this.shipto_freighttermscode);
        writer.writeStringValue("shipto_line1", this.shipto_line1);
        writer.writeStringValue("shipto_line2", this.shipto_line2);
        writer.writeStringValue("shipto_line3", this.shipto_line3);
        writer.writeStringValue("shipto_name", this.shipto_name);
        writer.writeStringValue("shipto_postalcode", this.shipto_postalcode);
        writer.writeStringValue("shipto_stateorprovince", this.shipto_stateorprovince);
        writer.writeStringValue("shipto_telephone", this.shipto_telephone);
        writer.writeNumberValue("skippricecalculation", this.skippricecalculation);
        writer.writeObjectValue<Sla>("sla_invoice_sla", this.sla_invoice_sla);
        writer.writeObjectValue<Sla>("slainvokedid_invoice_sla", this.slainvokedid_invoice_sla);
        writer.writeCollectionOfObjectValues<Slakpiinstance>("slakpiinstance_invoice", this.slakpiinstance_invoice);
        writer.writeStringValue("stageid", this.stageid);
        writer.writeObjectValue<Processstage>("stageid_processstage", this.stageid_processstage);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("totalamount", this.totalamount);
        writer.writeNumberValue("totalamount_base", this.totalamount_base);
        writer.writeNumberValue("totalamountlessfreight", this.totalamountlessfreight);
        writer.writeNumberValue("totalamountlessfreight_base", this.totalamountlessfreight_base);
        writer.writeNumberValue("totaldiscountamount", this.totaldiscountamount);
        writer.writeNumberValue("totaldiscountamount_base", this.totaldiscountamount_base);
        writer.writeNumberValue("totallineitemamount", this.totallineitemamount);
        writer.writeNumberValue("totallineitemamount_base", this.totallineitemamount_base);
        writer.writeNumberValue("totallineitemdiscountamount", this.totallineitemdiscountamount);
        writer.writeNumberValue("totallineitemdiscountamount_base", this.totallineitemdiscountamount_base);
        writer.writeNumberValue("totaltax", this.totaltax);
        writer.writeNumberValue("totaltax_base", this.totaltax_base);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("traversedpath", this.traversedpath);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeBooleanValue("willcall", this.willcall);
    };
    /**
     * Gets the shippingmethodcode property value. 
     * @returns a integer
     */
    public get shippingmethodcode() {
        return this._shippingmethodcode;
    };
    /**
     * Sets the shippingmethodcode property value. 
     * @param value Value to set for the shippingmethodcode property.
     */
    public set shippingmethodcode(value: number | undefined) {
        this._shippingmethodcode = value;
    };
    /**
     * Gets the shipto_city property value. 
     * @returns a string
     */
    public get shipto_city() {
        return this._shipto_city;
    };
    /**
     * Sets the shipto_city property value. 
     * @param value Value to set for the shipto_city property.
     */
    public set shipto_city(value: string | undefined) {
        this._shipto_city = value;
    };
    /**
     * Gets the shipto_composite property value. 
     * @returns a string
     */
    public get shipto_composite() {
        return this._shipto_composite;
    };
    /**
     * Sets the shipto_composite property value. 
     * @param value Value to set for the shipto_composite property.
     */
    public set shipto_composite(value: string | undefined) {
        this._shipto_composite = value;
    };
    /**
     * Gets the shipto_country property value. 
     * @returns a string
     */
    public get shipto_country() {
        return this._shipto_country;
    };
    /**
     * Sets the shipto_country property value. 
     * @param value Value to set for the shipto_country property.
     */
    public set shipto_country(value: string | undefined) {
        this._shipto_country = value;
    };
    /**
     * Gets the shipto_fax property value. 
     * @returns a string
     */
    public get shipto_fax() {
        return this._shipto_fax;
    };
    /**
     * Sets the shipto_fax property value. 
     * @param value Value to set for the shipto_fax property.
     */
    public set shipto_fax(value: string | undefined) {
        this._shipto_fax = value;
    };
    /**
     * Gets the shipto_freighttermscode property value. 
     * @returns a integer
     */
    public get shipto_freighttermscode() {
        return this._shipto_freighttermscode;
    };
    /**
     * Sets the shipto_freighttermscode property value. 
     * @param value Value to set for the shipto_freighttermscode property.
     */
    public set shipto_freighttermscode(value: number | undefined) {
        this._shipto_freighttermscode = value;
    };
    /**
     * Gets the shipto_line1 property value. 
     * @returns a string
     */
    public get shipto_line1() {
        return this._shipto_line1;
    };
    /**
     * Sets the shipto_line1 property value. 
     * @param value Value to set for the shipto_line1 property.
     */
    public set shipto_line1(value: string | undefined) {
        this._shipto_line1 = value;
    };
    /**
     * Gets the shipto_line2 property value. 
     * @returns a string
     */
    public get shipto_line2() {
        return this._shipto_line2;
    };
    /**
     * Sets the shipto_line2 property value. 
     * @param value Value to set for the shipto_line2 property.
     */
    public set shipto_line2(value: string | undefined) {
        this._shipto_line2 = value;
    };
    /**
     * Gets the shipto_line3 property value. 
     * @returns a string
     */
    public get shipto_line3() {
        return this._shipto_line3;
    };
    /**
     * Sets the shipto_line3 property value. 
     * @param value Value to set for the shipto_line3 property.
     */
    public set shipto_line3(value: string | undefined) {
        this._shipto_line3 = value;
    };
    /**
     * Gets the shipto_name property value. 
     * @returns a string
     */
    public get shipto_name() {
        return this._shipto_name;
    };
    /**
     * Sets the shipto_name property value. 
     * @param value Value to set for the shipto_name property.
     */
    public set shipto_name(value: string | undefined) {
        this._shipto_name = value;
    };
    /**
     * Gets the shipto_postalcode property value. 
     * @returns a string
     */
    public get shipto_postalcode() {
        return this._shipto_postalcode;
    };
    /**
     * Sets the shipto_postalcode property value. 
     * @param value Value to set for the shipto_postalcode property.
     */
    public set shipto_postalcode(value: string | undefined) {
        this._shipto_postalcode = value;
    };
    /**
     * Gets the shipto_stateorprovince property value. 
     * @returns a string
     */
    public get shipto_stateorprovince() {
        return this._shipto_stateorprovince;
    };
    /**
     * Sets the shipto_stateorprovince property value. 
     * @param value Value to set for the shipto_stateorprovince property.
     */
    public set shipto_stateorprovince(value: string | undefined) {
        this._shipto_stateorprovince = value;
    };
    /**
     * Gets the shipto_telephone property value. 
     * @returns a string
     */
    public get shipto_telephone() {
        return this._shipto_telephone;
    };
    /**
     * Sets the shipto_telephone property value. 
     * @param value Value to set for the shipto_telephone property.
     */
    public set shipto_telephone(value: string | undefined) {
        this._shipto_telephone = value;
    };
    /**
     * Gets the skippricecalculation property value. 
     * @returns a integer
     */
    public get skippricecalculation() {
        return this._skippricecalculation;
    };
    /**
     * Sets the skippricecalculation property value. 
     * @param value Value to set for the skippricecalculation property.
     */
    public set skippricecalculation(value: number | undefined) {
        this._skippricecalculation = value;
    };
    /**
     * Gets the sla_invoice_sla property value. 
     * @returns a sla
     */
    public get sla_invoice_sla() {
        return this._sla_invoice_sla;
    };
    /**
     * Sets the sla_invoice_sla property value. 
     * @param value Value to set for the sla_invoice_sla property.
     */
    public set sla_invoice_sla(value: Sla | undefined) {
        this._sla_invoice_sla = value;
    };
    /**
     * Gets the slainvokedid_invoice_sla property value. 
     * @returns a sla
     */
    public get slainvokedid_invoice_sla() {
        return this._slainvokedid_invoice_sla;
    };
    /**
     * Sets the slainvokedid_invoice_sla property value. 
     * @param value Value to set for the slainvokedid_invoice_sla property.
     */
    public set slainvokedid_invoice_sla(value: Sla | undefined) {
        this._slainvokedid_invoice_sla = value;
    };
    /**
     * Gets the slakpiinstance_invoice property value. 
     * @returns a slakpiinstance
     */
    public get slakpiinstance_invoice() {
        return this._slakpiinstance_invoice;
    };
    /**
     * Sets the slakpiinstance_invoice property value. 
     * @param value Value to set for the slakpiinstance_invoice property.
     */
    public set slakpiinstance_invoice(value: Slakpiinstance[] | undefined) {
        this._slakpiinstance_invoice = value;
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
     * Gets the totalamount property value. 
     * @returns a int64
     */
    public get totalamount() {
        return this._totalamount;
    };
    /**
     * Sets the totalamount property value. 
     * @param value Value to set for the totalamount property.
     */
    public set totalamount(value: number | undefined) {
        this._totalamount = value;
    };
    /**
     * Gets the totalamount_base property value. 
     * @returns a int64
     */
    public get totalamount_base() {
        return this._totalamount_base;
    };
    /**
     * Sets the totalamount_base property value. 
     * @param value Value to set for the totalamount_base property.
     */
    public set totalamount_base(value: number | undefined) {
        this._totalamount_base = value;
    };
    /**
     * Gets the totalamountlessfreight property value. 
     * @returns a int64
     */
    public get totalamountlessfreight() {
        return this._totalamountlessfreight;
    };
    /**
     * Sets the totalamountlessfreight property value. 
     * @param value Value to set for the totalamountlessfreight property.
     */
    public set totalamountlessfreight(value: number | undefined) {
        this._totalamountlessfreight = value;
    };
    /**
     * Gets the totalamountlessfreight_base property value. 
     * @returns a int64
     */
    public get totalamountlessfreight_base() {
        return this._totalamountlessfreight_base;
    };
    /**
     * Sets the totalamountlessfreight_base property value. 
     * @param value Value to set for the totalamountlessfreight_base property.
     */
    public set totalamountlessfreight_base(value: number | undefined) {
        this._totalamountlessfreight_base = value;
    };
    /**
     * Gets the totaldiscountamount property value. 
     * @returns a int64
     */
    public get totaldiscountamount() {
        return this._totaldiscountamount;
    };
    /**
     * Sets the totaldiscountamount property value. 
     * @param value Value to set for the totaldiscountamount property.
     */
    public set totaldiscountamount(value: number | undefined) {
        this._totaldiscountamount = value;
    };
    /**
     * Gets the totaldiscountamount_base property value. 
     * @returns a int64
     */
    public get totaldiscountamount_base() {
        return this._totaldiscountamount_base;
    };
    /**
     * Sets the totaldiscountamount_base property value. 
     * @param value Value to set for the totaldiscountamount_base property.
     */
    public set totaldiscountamount_base(value: number | undefined) {
        this._totaldiscountamount_base = value;
    };
    /**
     * Gets the totallineitemamount property value. 
     * @returns a int64
     */
    public get totallineitemamount() {
        return this._totallineitemamount;
    };
    /**
     * Sets the totallineitemamount property value. 
     * @param value Value to set for the totallineitemamount property.
     */
    public set totallineitemamount(value: number | undefined) {
        this._totallineitemamount = value;
    };
    /**
     * Gets the totallineitemamount_base property value. 
     * @returns a int64
     */
    public get totallineitemamount_base() {
        return this._totallineitemamount_base;
    };
    /**
     * Sets the totallineitemamount_base property value. 
     * @param value Value to set for the totallineitemamount_base property.
     */
    public set totallineitemamount_base(value: number | undefined) {
        this._totallineitemamount_base = value;
    };
    /**
     * Gets the totallineitemdiscountamount property value. 
     * @returns a int64
     */
    public get totallineitemdiscountamount() {
        return this._totallineitemdiscountamount;
    };
    /**
     * Sets the totallineitemdiscountamount property value. 
     * @param value Value to set for the totallineitemdiscountamount property.
     */
    public set totallineitemdiscountamount(value: number | undefined) {
        this._totallineitemdiscountamount = value;
    };
    /**
     * Gets the totallineitemdiscountamount_base property value. 
     * @returns a int64
     */
    public get totallineitemdiscountamount_base() {
        return this._totallineitemdiscountamount_base;
    };
    /**
     * Sets the totallineitemdiscountamount_base property value. 
     * @param value Value to set for the totallineitemdiscountamount_base property.
     */
    public set totallineitemdiscountamount_base(value: number | undefined) {
        this._totallineitemdiscountamount_base = value;
    };
    /**
     * Gets the totaltax property value. 
     * @returns a int64
     */
    public get totaltax() {
        return this._totaltax;
    };
    /**
     * Sets the totaltax property value. 
     * @param value Value to set for the totaltax property.
     */
    public set totaltax(value: number | undefined) {
        this._totaltax = value;
    };
    /**
     * Gets the totaltax_base property value. 
     * @returns a int64
     */
    public get totaltax_base() {
        return this._totaltax_base;
    };
    /**
     * Sets the totaltax_base property value. 
     * @param value Value to set for the totaltax_base property.
     */
    public set totaltax_base(value: number | undefined) {
        this._totaltax_base = value;
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
    /**
     * Gets the willcall property value. 
     * @returns a boolean
     */
    public get willcall() {
        return this._willcall;
    };
    /**
     * Sets the willcall property value. 
     * @param value Value to set for the willcall property.
     */
    public set willcall(value: boolean | undefined) {
        this._willcall = value;
    };
}
