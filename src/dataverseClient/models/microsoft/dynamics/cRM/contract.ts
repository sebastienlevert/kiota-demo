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
import {createContractdetailFromDiscriminatorValue} from './createContractdetailFromDiscriminatorValue';
import {createContractFromDiscriminatorValue} from './createContractFromDiscriminatorValue';
import {createContracttemplateFromDiscriminatorValue} from './createContracttemplateFromDiscriminatorValue';
import {createCustomeraddressFromDiscriminatorValue} from './createCustomeraddressFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Activityparty, Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Contact, Contractdetail, Contracttemplate, Crmbaseentity, Customeraddress, Duplicaterecord, Email, Fax, Incident, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Recurringappointmentmaster, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Contract extends Crmbaseentity implements Parsable {
    private __accountid_value?: string | undefined;
    private __billingaccountid_value?: string | undefined;
    private __billingcontactid_value?: string | undefined;
    private __billingcustomerid_value?: string | undefined;
    private __billtoaddress_value?: string | undefined;
    private __contactid_value?: string | undefined;
    private __contracttemplateid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __customerid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __originatingcontract_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __serviceaddress_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _activeon?: Date | undefined;
    private _allotmenttypecode?: number | undefined;
    private _billingcustomerid_account?: Account | undefined;
    private _billingcustomerid_contact?: Contact | undefined;
    private _billingendon?: Date | undefined;
    private _billingfrequencycode?: number | undefined;
    private _billingstarton?: Date | undefined;
    private _billtoaddress?: Customeraddress | undefined;
    private _cancelon?: Date | undefined;
    private _contract_activity_parties?: Activityparty[] | undefined;
    private _contract_ActivityPointers?: Activitypointer[] | undefined;
    private _contract_Annotation?: Annotation[] | undefined;
    private _contract_Appointments?: Appointment[] | undefined;
    private _contract_AsyncOperations?: Asyncoperation[] | undefined;
    private _contract_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _contract_cases?: Incident[] | undefined;
    private _contract_connections1?: Connection[] | undefined;
    private _contract_connections2?: Connection[] | undefined;
    private _contract_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _contract_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _contract_Emails?: Email[] | undefined;
    private _contract_Faxes?: Fax[] | undefined;
    private _contract_Letters?: Letter[] | undefined;
    private _contract_line_items?: Contractdetail[] | undefined;
    private _contract_MailboxTrackingFolder?: Mailboxtrackingfolder[] | undefined;
    private _contract_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _contract_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _contract_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _contract_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _contract_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _contract_msfp_alerts?: Msfp_alert[] | undefined;
    private _contract_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _contract_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _contract_originating_contract?: Contract[] | undefined;
    private _contract_Phonecalls?: Phonecall[] | undefined;
    private _contract_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _contract_ProcessSessions?: Processsession[] | undefined;
    private _contract_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _contract_ServiceAppointments?: Serviceappointment[] | undefined;
    private _contract_SocialActivities?: Socialactivity[] | undefined;
    private _contract_SyncErrors?: Syncerror[] | undefined;
    private _contract_Tasks?: Task[] | undefined;
    private _contractid?: string | undefined;
    private _contractlanguage?: string | undefined;
    private _contractnumber?: string | undefined;
    private _contractservicelevelcode?: number | undefined;
    private _contracttemplateabbreviation?: string | undefined;
    private _contracttemplateid?: Contracttemplate | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _customerid_account?: Account | undefined;
    private _customerid_contact?: Contact | undefined;
    private _duration?: number | undefined;
    private _effectivitycalendar?: string | undefined;
    private _emailaddress?: string | undefined;
    private _entityimage?: string | undefined;
    private _entityimage_timestamp?: number | undefined;
    private _entityimage_url?: string | undefined;
    private _entityimageid?: string | undefined;
    private _exchangerate?: number | undefined;
    private _expireson?: Date | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _netprice?: number | undefined;
    private _netprice_base?: number | undefined;
    private _originatingcontract?: Contract | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _serviceaddress?: Customeraddress | undefined;
    private _servicecontractcontacts_association?: Contact[] | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _title?: string | undefined;
    private _totaldiscount?: number | undefined;
    private _totaldiscount_base?: number | undefined;
    private _totalprice?: number | undefined;
    private _totalprice_base?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _usediscountaspercentage?: boolean | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
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
     * Gets the _billingaccountid_value property value. 
     * @returns a string
     */
    public get _billingaccountid_value() {
        return this.__billingaccountid_value;
    };
    /**
     * Sets the _billingaccountid_value property value. 
     * @param value Value to set for the _billingaccountid_value property.
     */
    public set _billingaccountid_value(value: string | undefined) {
        this.__billingaccountid_value = value;
    };
    /**
     * Gets the _billingcontactid_value property value. 
     * @returns a string
     */
    public get _billingcontactid_value() {
        return this.__billingcontactid_value;
    };
    /**
     * Sets the _billingcontactid_value property value. 
     * @param value Value to set for the _billingcontactid_value property.
     */
    public set _billingcontactid_value(value: string | undefined) {
        this.__billingcontactid_value = value;
    };
    /**
     * Gets the _billingcustomerid_value property value. 
     * @returns a string
     */
    public get _billingcustomerid_value() {
        return this.__billingcustomerid_value;
    };
    /**
     * Sets the _billingcustomerid_value property value. 
     * @param value Value to set for the _billingcustomerid_value property.
     */
    public set _billingcustomerid_value(value: string | undefined) {
        this.__billingcustomerid_value = value;
    };
    /**
     * Gets the _billtoaddress_value property value. 
     * @returns a string
     */
    public get _billtoaddress_value() {
        return this.__billtoaddress_value;
    };
    /**
     * Sets the _billtoaddress_value property value. 
     * @param value Value to set for the _billtoaddress_value property.
     */
    public set _billtoaddress_value(value: string | undefined) {
        this.__billtoaddress_value = value;
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
     * Gets the _contracttemplateid_value property value. 
     * @returns a string
     */
    public get _contracttemplateid_value() {
        return this.__contracttemplateid_value;
    };
    /**
     * Sets the _contracttemplateid_value property value. 
     * @param value Value to set for the _contracttemplateid_value property.
     */
    public set _contracttemplateid_value(value: string | undefined) {
        this.__contracttemplateid_value = value;
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
     * Gets the _originatingcontract_value property value. 
     * @returns a string
     */
    public get _originatingcontract_value() {
        return this.__originatingcontract_value;
    };
    /**
     * Sets the _originatingcontract_value property value. 
     * @param value Value to set for the _originatingcontract_value property.
     */
    public set _originatingcontract_value(value: string | undefined) {
        this.__originatingcontract_value = value;
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
     * Gets the _serviceaddress_value property value. 
     * @returns a string
     */
    public get _serviceaddress_value() {
        return this.__serviceaddress_value;
    };
    /**
     * Sets the _serviceaddress_value property value. 
     * @param value Value to set for the _serviceaddress_value property.
     */
    public set _serviceaddress_value(value: string | undefined) {
        this.__serviceaddress_value = value;
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
     * Gets the activeon property value. 
     * @returns a Date
     */
    public get activeon() {
        return this._activeon;
    };
    /**
     * Sets the activeon property value. 
     * @param value Value to set for the activeon property.
     */
    public set activeon(value: Date | undefined) {
        this._activeon = value;
    };
    /**
     * Gets the allotmenttypecode property value. 
     * @returns a integer
     */
    public get allotmenttypecode() {
        return this._allotmenttypecode;
    };
    /**
     * Sets the allotmenttypecode property value. 
     * @param value Value to set for the allotmenttypecode property.
     */
    public set allotmenttypecode(value: number | undefined) {
        this._allotmenttypecode = value;
    };
    /**
     * Gets the billingcustomerid_account property value. 
     * @returns a account
     */
    public get billingcustomerid_account() {
        return this._billingcustomerid_account;
    };
    /**
     * Sets the billingcustomerid_account property value. 
     * @param value Value to set for the billingcustomerid_account property.
     */
    public set billingcustomerid_account(value: Account | undefined) {
        this._billingcustomerid_account = value;
    };
    /**
     * Gets the billingcustomerid_contact property value. 
     * @returns a contact
     */
    public get billingcustomerid_contact() {
        return this._billingcustomerid_contact;
    };
    /**
     * Sets the billingcustomerid_contact property value. 
     * @param value Value to set for the billingcustomerid_contact property.
     */
    public set billingcustomerid_contact(value: Contact | undefined) {
        this._billingcustomerid_contact = value;
    };
    /**
     * Gets the billingendon property value. 
     * @returns a Date
     */
    public get billingendon() {
        return this._billingendon;
    };
    /**
     * Sets the billingendon property value. 
     * @param value Value to set for the billingendon property.
     */
    public set billingendon(value: Date | undefined) {
        this._billingendon = value;
    };
    /**
     * Gets the billingfrequencycode property value. 
     * @returns a integer
     */
    public get billingfrequencycode() {
        return this._billingfrequencycode;
    };
    /**
     * Sets the billingfrequencycode property value. 
     * @param value Value to set for the billingfrequencycode property.
     */
    public set billingfrequencycode(value: number | undefined) {
        this._billingfrequencycode = value;
    };
    /**
     * Gets the billingstarton property value. 
     * @returns a Date
     */
    public get billingstarton() {
        return this._billingstarton;
    };
    /**
     * Sets the billingstarton property value. 
     * @param value Value to set for the billingstarton property.
     */
    public set billingstarton(value: Date | undefined) {
        this._billingstarton = value;
    };
    /**
     * Gets the billtoaddress property value. 
     * @returns a customeraddress
     */
    public get billtoaddress() {
        return this._billtoaddress;
    };
    /**
     * Sets the billtoaddress property value. 
     * @param value Value to set for the billtoaddress property.
     */
    public set billtoaddress(value: Customeraddress | undefined) {
        this._billtoaddress = value;
    };
    /**
     * Gets the cancelon property value. 
     * @returns a Date
     */
    public get cancelon() {
        return this._cancelon;
    };
    /**
     * Sets the cancelon property value. 
     * @param value Value to set for the cancelon property.
     */
    public set cancelon(value: Date | undefined) {
        this._cancelon = value;
    };
    /**
     * Instantiates a new contract and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contract_activity_parties property value. 
     * @returns a activityparty
     */
    public get contract_activity_parties() {
        return this._contract_activity_parties;
    };
    /**
     * Sets the contract_activity_parties property value. 
     * @param value Value to set for the contract_activity_parties property.
     */
    public set contract_activity_parties(value: Activityparty[] | undefined) {
        this._contract_activity_parties = value;
    };
    /**
     * Gets the contract_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get contract_ActivityPointers() {
        return this._contract_ActivityPointers;
    };
    /**
     * Sets the contract_ActivityPointers property value. 
     * @param value Value to set for the Contract_ActivityPointers property.
     */
    public set contract_ActivityPointers(value: Activitypointer[] | undefined) {
        this._contract_ActivityPointers = value;
    };
    /**
     * Gets the contract_Annotation property value. 
     * @returns a annotation
     */
    public get contract_Annotation() {
        return this._contract_Annotation;
    };
    /**
     * Sets the contract_Annotation property value. 
     * @param value Value to set for the Contract_Annotation property.
     */
    public set contract_Annotation(value: Annotation[] | undefined) {
        this._contract_Annotation = value;
    };
    /**
     * Gets the contract_Appointments property value. 
     * @returns a appointment
     */
    public get contract_Appointments() {
        return this._contract_Appointments;
    };
    /**
     * Sets the contract_Appointments property value. 
     * @param value Value to set for the Contract_Appointments property.
     */
    public set contract_Appointments(value: Appointment[] | undefined) {
        this._contract_Appointments = value;
    };
    /**
     * Gets the contract_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get contract_AsyncOperations() {
        return this._contract_AsyncOperations;
    };
    /**
     * Sets the contract_AsyncOperations property value. 
     * @param value Value to set for the Contract_AsyncOperations property.
     */
    public set contract_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._contract_AsyncOperations = value;
    };
    /**
     * Gets the contract_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get contract_BulkDeleteFailures() {
        return this._contract_BulkDeleteFailures;
    };
    /**
     * Sets the contract_BulkDeleteFailures property value. 
     * @param value Value to set for the Contract_BulkDeleteFailures property.
     */
    public set contract_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._contract_BulkDeleteFailures = value;
    };
    /**
     * Gets the contract_cases property value. 
     * @returns a incident
     */
    public get contract_cases() {
        return this._contract_cases;
    };
    /**
     * Sets the contract_cases property value. 
     * @param value Value to set for the contract_cases property.
     */
    public set contract_cases(value: Incident[] | undefined) {
        this._contract_cases = value;
    };
    /**
     * Gets the contract_connections1 property value. 
     * @returns a connection
     */
    public get contract_connections1() {
        return this._contract_connections1;
    };
    /**
     * Sets the contract_connections1 property value. 
     * @param value Value to set for the contract_connections1 property.
     */
    public set contract_connections1(value: Connection[] | undefined) {
        this._contract_connections1 = value;
    };
    /**
     * Gets the contract_connections2 property value. 
     * @returns a connection
     */
    public get contract_connections2() {
        return this._contract_connections2;
    };
    /**
     * Sets the contract_connections2 property value. 
     * @param value Value to set for the contract_connections2 property.
     */
    public set contract_connections2(value: Connection[] | undefined) {
        this._contract_connections2 = value;
    };
    /**
     * Gets the contract_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get contract_DuplicateBaseRecord() {
        return this._contract_DuplicateBaseRecord;
    };
    /**
     * Sets the contract_DuplicateBaseRecord property value. 
     * @param value Value to set for the Contract_DuplicateBaseRecord property.
     */
    public set contract_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._contract_DuplicateBaseRecord = value;
    };
    /**
     * Gets the contract_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get contract_DuplicateMatchingRecord() {
        return this._contract_DuplicateMatchingRecord;
    };
    /**
     * Sets the contract_DuplicateMatchingRecord property value. 
     * @param value Value to set for the Contract_DuplicateMatchingRecord property.
     */
    public set contract_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._contract_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the contract_Emails property value. 
     * @returns a email
     */
    public get contract_Emails() {
        return this._contract_Emails;
    };
    /**
     * Sets the contract_Emails property value. 
     * @param value Value to set for the Contract_Emails property.
     */
    public set contract_Emails(value: Email[] | undefined) {
        this._contract_Emails = value;
    };
    /**
     * Gets the contract_Faxes property value. 
     * @returns a fax
     */
    public get contract_Faxes() {
        return this._contract_Faxes;
    };
    /**
     * Sets the contract_Faxes property value. 
     * @param value Value to set for the Contract_Faxes property.
     */
    public set contract_Faxes(value: Fax[] | undefined) {
        this._contract_Faxes = value;
    };
    /**
     * Gets the contract_Letters property value. 
     * @returns a letter
     */
    public get contract_Letters() {
        return this._contract_Letters;
    };
    /**
     * Sets the contract_Letters property value. 
     * @param value Value to set for the Contract_Letters property.
     */
    public set contract_Letters(value: Letter[] | undefined) {
        this._contract_Letters = value;
    };
    /**
     * Gets the contract_line_items property value. 
     * @returns a contractdetail
     */
    public get contract_line_items() {
        return this._contract_line_items;
    };
    /**
     * Sets the contract_line_items property value. 
     * @param value Value to set for the contract_line_items property.
     */
    public set contract_line_items(value: Contractdetail[] | undefined) {
        this._contract_line_items = value;
    };
    /**
     * Gets the contract_MailboxTrackingFolder property value. 
     * @returns a mailboxtrackingfolder
     */
    public get contract_MailboxTrackingFolder() {
        return this._contract_MailboxTrackingFolder;
    };
    /**
     * Sets the contract_MailboxTrackingFolder property value. 
     * @param value Value to set for the Contract_MailboxTrackingFolder property.
     */
    public set contract_MailboxTrackingFolder(value: Mailboxtrackingfolder[] | undefined) {
        this._contract_MailboxTrackingFolder = value;
    };
    /**
     * Gets the contract_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get contract_msdyn_approvals() {
        return this._contract_msdyn_approvals;
    };
    /**
     * Sets the contract_msdyn_approvals property value. 
     * @param value Value to set for the contract_msdyn_approvals property.
     */
    public set contract_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._contract_msdyn_approvals = value;
    };
    /**
     * Gets the contract_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get contract_msdyn_bookingalerts() {
        return this._contract_msdyn_bookingalerts;
    };
    /**
     * Sets the contract_msdyn_bookingalerts property value. 
     * @param value Value to set for the contract_msdyn_bookingalerts property.
     */
    public set contract_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._contract_msdyn_bookingalerts = value;
    };
    /**
     * Gets the contract_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get contract_msdyn_ocliveworkitems() {
        return this._contract_msdyn_ocliveworkitems;
    };
    /**
     * Sets the contract_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the contract_msdyn_ocliveworkitems property.
     */
    public set contract_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._contract_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the contract_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get contract_msdyn_ocoutboundmessages() {
        return this._contract_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the contract_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the contract_msdyn_ocoutboundmessages property.
     */
    public set contract_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._contract_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the contract_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get contract_msdyn_ocsessions() {
        return this._contract_msdyn_ocsessions;
    };
    /**
     * Sets the contract_msdyn_ocsessions property value. 
     * @param value Value to set for the contract_msdyn_ocsessions property.
     */
    public set contract_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._contract_msdyn_ocsessions = value;
    };
    /**
     * Gets the contract_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get contract_msfp_alerts() {
        return this._contract_msfp_alerts;
    };
    /**
     * Sets the contract_msfp_alerts property value. 
     * @param value Value to set for the contract_msfp_alerts property.
     */
    public set contract_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._contract_msfp_alerts = value;
    };
    /**
     * Gets the contract_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get contract_msfp_surveyinvites() {
        return this._contract_msfp_surveyinvites;
    };
    /**
     * Sets the contract_msfp_surveyinvites property value. 
     * @param value Value to set for the contract_msfp_surveyinvites property.
     */
    public set contract_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._contract_msfp_surveyinvites = value;
    };
    /**
     * Gets the contract_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get contract_msfp_surveyresponses() {
        return this._contract_msfp_surveyresponses;
    };
    /**
     * Sets the contract_msfp_surveyresponses property value. 
     * @param value Value to set for the contract_msfp_surveyresponses property.
     */
    public set contract_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._contract_msfp_surveyresponses = value;
    };
    /**
     * Gets the contract_originating_contract property value. 
     * @returns a contract
     */
    public get contract_originating_contract() {
        return this._contract_originating_contract;
    };
    /**
     * Sets the contract_originating_contract property value. 
     * @param value Value to set for the contract_originating_contract property.
     */
    public set contract_originating_contract(value: Contract[] | undefined) {
        this._contract_originating_contract = value;
    };
    /**
     * Gets the contract_Phonecalls property value. 
     * @returns a phonecall
     */
    public get contract_Phonecalls() {
        return this._contract_Phonecalls;
    };
    /**
     * Sets the contract_Phonecalls property value. 
     * @param value Value to set for the Contract_Phonecalls property.
     */
    public set contract_Phonecalls(value: Phonecall[] | undefined) {
        this._contract_Phonecalls = value;
    };
    /**
     * Gets the contract_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get contract_principalobjectattributeaccess() {
        return this._contract_principalobjectattributeaccess;
    };
    /**
     * Sets the contract_principalobjectattributeaccess property value. 
     * @param value Value to set for the contract_principalobjectattributeaccess property.
     */
    public set contract_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._contract_principalobjectattributeaccess = value;
    };
    /**
     * Gets the contract_ProcessSessions property value. 
     * @returns a processsession
     */
    public get contract_ProcessSessions() {
        return this._contract_ProcessSessions;
    };
    /**
     * Sets the contract_ProcessSessions property value. 
     * @param value Value to set for the Contract_ProcessSessions property.
     */
    public set contract_ProcessSessions(value: Processsession[] | undefined) {
        this._contract_ProcessSessions = value;
    };
    /**
     * Gets the contract_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get contract_RecurringAppointmentMasters() {
        return this._contract_RecurringAppointmentMasters;
    };
    /**
     * Sets the contract_RecurringAppointmentMasters property value. 
     * @param value Value to set for the Contract_RecurringAppointmentMasters property.
     */
    public set contract_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._contract_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the contract_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get contract_ServiceAppointments() {
        return this._contract_ServiceAppointments;
    };
    /**
     * Sets the contract_ServiceAppointments property value. 
     * @param value Value to set for the Contract_ServiceAppointments property.
     */
    public set contract_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._contract_ServiceAppointments = value;
    };
    /**
     * Gets the contract_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get contract_SocialActivities() {
        return this._contract_SocialActivities;
    };
    /**
     * Sets the contract_SocialActivities property value. 
     * @param value Value to set for the Contract_SocialActivities property.
     */
    public set contract_SocialActivities(value: Socialactivity[] | undefined) {
        this._contract_SocialActivities = value;
    };
    /**
     * Gets the contract_SyncErrors property value. 
     * @returns a syncerror
     */
    public get contract_SyncErrors() {
        return this._contract_SyncErrors;
    };
    /**
     * Sets the contract_SyncErrors property value. 
     * @param value Value to set for the Contract_SyncErrors property.
     */
    public set contract_SyncErrors(value: Syncerror[] | undefined) {
        this._contract_SyncErrors = value;
    };
    /**
     * Gets the contract_Tasks property value. 
     * @returns a task
     */
    public get contract_Tasks() {
        return this._contract_Tasks;
    };
    /**
     * Sets the contract_Tasks property value. 
     * @param value Value to set for the Contract_Tasks property.
     */
    public set contract_Tasks(value: Task[] | undefined) {
        this._contract_Tasks = value;
    };
    /**
     * Gets the contractid property value. 
     * @returns a string
     */
    public get contractid() {
        return this._contractid;
    };
    /**
     * Sets the contractid property value. 
     * @param value Value to set for the contractid property.
     */
    public set contractid(value: string | undefined) {
        this._contractid = value;
    };
    /**
     * Gets the contractlanguage property value. 
     * @returns a string
     */
    public get contractlanguage() {
        return this._contractlanguage;
    };
    /**
     * Sets the contractlanguage property value. 
     * @param value Value to set for the contractlanguage property.
     */
    public set contractlanguage(value: string | undefined) {
        this._contractlanguage = value;
    };
    /**
     * Gets the contractnumber property value. 
     * @returns a string
     */
    public get contractnumber() {
        return this._contractnumber;
    };
    /**
     * Sets the contractnumber property value. 
     * @param value Value to set for the contractnumber property.
     */
    public set contractnumber(value: string | undefined) {
        this._contractnumber = value;
    };
    /**
     * Gets the contractservicelevelcode property value. 
     * @returns a integer
     */
    public get contractservicelevelcode() {
        return this._contractservicelevelcode;
    };
    /**
     * Sets the contractservicelevelcode property value. 
     * @param value Value to set for the contractservicelevelcode property.
     */
    public set contractservicelevelcode(value: number | undefined) {
        this._contractservicelevelcode = value;
    };
    /**
     * Gets the contracttemplateabbreviation property value. 
     * @returns a string
     */
    public get contracttemplateabbreviation() {
        return this._contracttemplateabbreviation;
    };
    /**
     * Sets the contracttemplateabbreviation property value. 
     * @param value Value to set for the contracttemplateabbreviation property.
     */
    public set contracttemplateabbreviation(value: string | undefined) {
        this._contracttemplateabbreviation = value;
    };
    /**
     * Gets the contracttemplateid property value. 
     * @returns a contracttemplate
     */
    public get contracttemplateid() {
        return this._contracttemplateid;
    };
    /**
     * Sets the contracttemplateid property value. 
     * @param value Value to set for the contracttemplateid property.
     */
    public set contracttemplateid(value: Contracttemplate | undefined) {
        this._contracttemplateid = value;
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
     * Gets the effectivitycalendar property value. 
     * @returns a string
     */
    public get effectivitycalendar() {
        return this._effectivitycalendar;
    };
    /**
     * Sets the effectivitycalendar property value. 
     * @param value Value to set for the effectivitycalendar property.
     */
    public set effectivitycalendar(value: string | undefined) {
        this._effectivitycalendar = value;
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
     * Gets the expireson property value. 
     * @returns a Date
     */
    public get expireson() {
        return this._expireson;
    };
    /**
     * Sets the expireson property value. 
     * @param value Value to set for the expireson property.
     */
    public set expireson(value: Date | undefined) {
        this._expireson = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_accountid_value": (o, n) => { (o as unknown as Contract)._accountid_value = n.getStringValue(); },
            "_billingaccountid_value": (o, n) => { (o as unknown as Contract)._billingaccountid_value = n.getStringValue(); },
            "_billingcontactid_value": (o, n) => { (o as unknown as Contract)._billingcontactid_value = n.getStringValue(); },
            "_billingcustomerid_value": (o, n) => { (o as unknown as Contract)._billingcustomerid_value = n.getStringValue(); },
            "_billtoaddress_value": (o, n) => { (o as unknown as Contract)._billtoaddress_value = n.getStringValue(); },
            "_contactid_value": (o, n) => { (o as unknown as Contract)._contactid_value = n.getStringValue(); },
            "_contracttemplateid_value": (o, n) => { (o as unknown as Contract)._contracttemplateid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Contract)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Contract)._createdonbehalfby_value = n.getStringValue(); },
            "_customerid_value": (o, n) => { (o as unknown as Contract)._customerid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Contract)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Contract)._modifiedonbehalfby_value = n.getStringValue(); },
            "_originatingcontract_value": (o, n) => { (o as unknown as Contract)._originatingcontract_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Contract)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Contract)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Contract)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Contract)._owninguser_value = n.getStringValue(); },
            "_serviceaddress_value": (o, n) => { (o as unknown as Contract)._serviceaddress_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Contract)._transactioncurrencyid_value = n.getStringValue(); },
            "activeon": (o, n) => { (o as unknown as Contract).activeon = n.getDateValue(); },
            "allotmenttypecode": (o, n) => { (o as unknown as Contract).allotmenttypecode = n.getNumberValue(); },
            "billingcustomerid_account": (o, n) => { (o as unknown as Contract).billingcustomerid_account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "billingcustomerid_contact": (o, n) => { (o as unknown as Contract).billingcustomerid_contact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "billingendon": (o, n) => { (o as unknown as Contract).billingendon = n.getDateValue(); },
            "billingfrequencycode": (o, n) => { (o as unknown as Contract).billingfrequencycode = n.getNumberValue(); },
            "billingstarton": (o, n) => { (o as unknown as Contract).billingstarton = n.getDateValue(); },
            "billtoaddress": (o, n) => { (o as unknown as Contract).billtoaddress = n.getObjectValue<Customeraddress>(createCustomeraddressFromDiscriminatorValue); },
            "cancelon": (o, n) => { (o as unknown as Contract).cancelon = n.getDateValue(); },
            "contract_activity_parties": (o, n) => { (o as unknown as Contract).contract_activity_parties = n.getCollectionOfObjectValues<Activityparty>(createActivitypartyFromDiscriminatorValue); },
            "contract_ActivityPointers": (o, n) => { (o as unknown as Contract).contract_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "contract_Annotation": (o, n) => { (o as unknown as Contract).contract_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "contract_Appointments": (o, n) => { (o as unknown as Contract).contract_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "contract_AsyncOperations": (o, n) => { (o as unknown as Contract).contract_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "contract_BulkDeleteFailures": (o, n) => { (o as unknown as Contract).contract_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "contract_cases": (o, n) => { (o as unknown as Contract).contract_cases = n.getCollectionOfObjectValues<Incident>(createIncidentFromDiscriminatorValue); },
            "contract_connections1": (o, n) => { (o as unknown as Contract).contract_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "contract_connections2": (o, n) => { (o as unknown as Contract).contract_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "contract_DuplicateBaseRecord": (o, n) => { (o as unknown as Contract).contract_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "contract_DuplicateMatchingRecord": (o, n) => { (o as unknown as Contract).contract_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "contract_Emails": (o, n) => { (o as unknown as Contract).contract_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "contract_Faxes": (o, n) => { (o as unknown as Contract).contract_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "contract_Letters": (o, n) => { (o as unknown as Contract).contract_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "contract_line_items": (o, n) => { (o as unknown as Contract).contract_line_items = n.getCollectionOfObjectValues<Contractdetail>(createContractdetailFromDiscriminatorValue); },
            "contract_MailboxTrackingFolder": (o, n) => { (o as unknown as Contract).contract_MailboxTrackingFolder = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "contract_msdyn_approvals": (o, n) => { (o as unknown as Contract).contract_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "contract_msdyn_bookingalerts": (o, n) => { (o as unknown as Contract).contract_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "contract_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Contract).contract_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "contract_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Contract).contract_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "contract_msdyn_ocsessions": (o, n) => { (o as unknown as Contract).contract_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "contract_msfp_alerts": (o, n) => { (o as unknown as Contract).contract_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "contract_msfp_surveyinvites": (o, n) => { (o as unknown as Contract).contract_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "contract_msfp_surveyresponses": (o, n) => { (o as unknown as Contract).contract_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "contract_originating_contract": (o, n) => { (o as unknown as Contract).contract_originating_contract = n.getCollectionOfObjectValues<Contract>(createContractFromDiscriminatorValue); },
            "contract_Phonecalls": (o, n) => { (o as unknown as Contract).contract_Phonecalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "contract_principalobjectattributeaccess": (o, n) => { (o as unknown as Contract).contract_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "contract_ProcessSessions": (o, n) => { (o as unknown as Contract).contract_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "contract_RecurringAppointmentMasters": (o, n) => { (o as unknown as Contract).contract_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "contract_ServiceAppointments": (o, n) => { (o as unknown as Contract).contract_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "contract_SocialActivities": (o, n) => { (o as unknown as Contract).contract_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "contract_SyncErrors": (o, n) => { (o as unknown as Contract).contract_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "contract_Tasks": (o, n) => { (o as unknown as Contract).contract_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "contractid": (o, n) => { (o as unknown as Contract).contractid = n.getStringValue(); },
            "contractlanguage": (o, n) => { (o as unknown as Contract).contractlanguage = n.getStringValue(); },
            "contractnumber": (o, n) => { (o as unknown as Contract).contractnumber = n.getStringValue(); },
            "contractservicelevelcode": (o, n) => { (o as unknown as Contract).contractservicelevelcode = n.getNumberValue(); },
            "contracttemplateabbreviation": (o, n) => { (o as unknown as Contract).contracttemplateabbreviation = n.getStringValue(); },
            "contracttemplateid": (o, n) => { (o as unknown as Contract).contracttemplateid = n.getObjectValue<Contracttemplate>(createContracttemplateFromDiscriminatorValue); },
            "createdby": (o, n) => { (o as unknown as Contract).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Contract).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Contract).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "customerid_account": (o, n) => { (o as unknown as Contract).customerid_account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "customerid_contact": (o, n) => { (o as unknown as Contract).customerid_contact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "duration": (o, n) => { (o as unknown as Contract).duration = n.getNumberValue(); },
            "effectivitycalendar": (o, n) => { (o as unknown as Contract).effectivitycalendar = n.getStringValue(); },
            "emailaddress": (o, n) => { (o as unknown as Contract).emailaddress = n.getStringValue(); },
            "entityimage": (o, n) => { (o as unknown as Contract).entityimage = n.getStringValue(); },
            "entityimage_timestamp": (o, n) => { (o as unknown as Contract).entityimage_timestamp = n.getNumberValue(); },
            "entityimage_url": (o, n) => { (o as unknown as Contract).entityimage_url = n.getStringValue(); },
            "entityimageid": (o, n) => { (o as unknown as Contract).entityimageid = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Contract).exchangerate = n.getNumberValue(); },
            "expireson": (o, n) => { (o as unknown as Contract).expireson = n.getDateValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Contract).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Contract).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Contract).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Contract).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "netprice": (o, n) => { (o as unknown as Contract).netprice = n.getNumberValue(); },
            "netprice_base": (o, n) => { (o as unknown as Contract).netprice_base = n.getNumberValue(); },
            "originatingcontract": (o, n) => { (o as unknown as Contract).originatingcontract = n.getObjectValue<Contract>(createContractFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Contract).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Contract).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Contract).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Contract).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Contract).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "serviceaddress": (o, n) => { (o as unknown as Contract).serviceaddress = n.getObjectValue<Customeraddress>(createCustomeraddressFromDiscriminatorValue); },
            "servicecontractcontacts_association": (o, n) => { (o as unknown as Contract).servicecontractcontacts_association = n.getCollectionOfObjectValues<Contact>(createContactFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Contract).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Contract).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Contract).timezoneruleversionnumber = n.getNumberValue(); },
            "title": (o, n) => { (o as unknown as Contract).title = n.getStringValue(); },
            "totaldiscount": (o, n) => { (o as unknown as Contract).totaldiscount = n.getNumberValue(); },
            "totaldiscount_base": (o, n) => { (o as unknown as Contract).totaldiscount_base = n.getNumberValue(); },
            "totalprice": (o, n) => { (o as unknown as Contract).totalprice = n.getNumberValue(); },
            "totalprice_base": (o, n) => { (o as unknown as Contract).totalprice_base = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Contract).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "usediscountaspercentage": (o, n) => { (o as unknown as Contract).usediscountaspercentage = n.getBooleanValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Contract).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Contract).versionnumber = n.getNumberValue(); },
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
     * Gets the netprice property value. 
     * @returns a int64
     */
    public get netprice() {
        return this._netprice;
    };
    /**
     * Sets the netprice property value. 
     * @param value Value to set for the netprice property.
     */
    public set netprice(value: number | undefined) {
        this._netprice = value;
    };
    /**
     * Gets the netprice_base property value. 
     * @returns a int64
     */
    public get netprice_base() {
        return this._netprice_base;
    };
    /**
     * Sets the netprice_base property value. 
     * @param value Value to set for the netprice_base property.
     */
    public set netprice_base(value: number | undefined) {
        this._netprice_base = value;
    };
    /**
     * Gets the originatingcontract property value. 
     * @returns a contract
     */
    public get originatingcontract() {
        return this._originatingcontract;
    };
    /**
     * Sets the originatingcontract property value. 
     * @param value Value to set for the originatingcontract property.
     */
    public set originatingcontract(value: Contract | undefined) {
        this._originatingcontract = value;
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
        writer.writeStringValue("_accountid_value", this._accountid_value);
        writer.writeStringValue("_billingaccountid_value", this._billingaccountid_value);
        writer.writeStringValue("_billingcontactid_value", this._billingcontactid_value);
        writer.writeStringValue("_billingcustomerid_value", this._billingcustomerid_value);
        writer.writeStringValue("_billtoaddress_value", this._billtoaddress_value);
        writer.writeStringValue("_contactid_value", this._contactid_value);
        writer.writeStringValue("_contracttemplateid_value", this._contracttemplateid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_customerid_value", this._customerid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_originatingcontract_value", this._originatingcontract_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_serviceaddress_value", this._serviceaddress_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeDateValue("activeon", this.activeon);
        writer.writeNumberValue("allotmenttypecode", this.allotmenttypecode);
        writer.writeObjectValue<Account>("billingcustomerid_account", this.billingcustomerid_account);
        writer.writeObjectValue<Contact>("billingcustomerid_contact", this.billingcustomerid_contact);
        writer.writeDateValue("billingendon", this.billingendon);
        writer.writeNumberValue("billingfrequencycode", this.billingfrequencycode);
        writer.writeDateValue("billingstarton", this.billingstarton);
        writer.writeObjectValue<Customeraddress>("billtoaddress", this.billtoaddress);
        writer.writeDateValue("cancelon", this.cancelon);
        writer.writeCollectionOfObjectValues<Activityparty>("contract_activity_parties", this.contract_activity_parties);
        writer.writeCollectionOfObjectValues<Activitypointer>("contract_ActivityPointers", this.contract_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("contract_Annotation", this.contract_Annotation);
        writer.writeCollectionOfObjectValues<Appointment>("contract_Appointments", this.contract_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("contract_AsyncOperations", this.contract_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("contract_BulkDeleteFailures", this.contract_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Incident>("contract_cases", this.contract_cases);
        writer.writeCollectionOfObjectValues<Connection>("contract_connections1", this.contract_connections1);
        writer.writeCollectionOfObjectValues<Connection>("contract_connections2", this.contract_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("contract_DuplicateBaseRecord", this.contract_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("contract_DuplicateMatchingRecord", this.contract_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("contract_Emails", this.contract_Emails);
        writer.writeCollectionOfObjectValues<Fax>("contract_Faxes", this.contract_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("contract_Letters", this.contract_Letters);
        writer.writeCollectionOfObjectValues<Contractdetail>("contract_line_items", this.contract_line_items);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("contract_MailboxTrackingFolder", this.contract_MailboxTrackingFolder);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("contract_msdyn_approvals", this.contract_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("contract_msdyn_bookingalerts", this.contract_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("contract_msdyn_ocliveworkitems", this.contract_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("contract_msdyn_ocoutboundmessages", this.contract_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("contract_msdyn_ocsessions", this.contract_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("contract_msfp_alerts", this.contract_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("contract_msfp_surveyinvites", this.contract_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("contract_msfp_surveyresponses", this.contract_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Contract>("contract_originating_contract", this.contract_originating_contract);
        writer.writeCollectionOfObjectValues<Phonecall>("contract_Phonecalls", this.contract_Phonecalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("contract_principalobjectattributeaccess", this.contract_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("contract_ProcessSessions", this.contract_ProcessSessions);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("contract_RecurringAppointmentMasters", this.contract_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("contract_ServiceAppointments", this.contract_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("contract_SocialActivities", this.contract_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("contract_SyncErrors", this.contract_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("contract_Tasks", this.contract_Tasks);
        writer.writeStringValue("contractid", this.contractid);
        writer.writeStringValue("contractlanguage", this.contractlanguage);
        writer.writeStringValue("contractnumber", this.contractnumber);
        writer.writeNumberValue("contractservicelevelcode", this.contractservicelevelcode);
        writer.writeStringValue("contracttemplateabbreviation", this.contracttemplateabbreviation);
        writer.writeObjectValue<Contracttemplate>("contracttemplateid", this.contracttemplateid);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeObjectValue<Account>("customerid_account", this.customerid_account);
        writer.writeObjectValue<Contact>("customerid_contact", this.customerid_contact);
        writer.writeNumberValue("duration", this.duration);
        writer.writeStringValue("effectivitycalendar", this.effectivitycalendar);
        writer.writeStringValue("emailaddress", this.emailaddress);
        writer.writeStringValue("entityimage", this.entityimage);
        writer.writeNumberValue("entityimage_timestamp", this.entityimage_timestamp);
        writer.writeStringValue("entityimage_url", this.entityimage_url);
        writer.writeStringValue("entityimageid", this.entityimageid);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeDateValue("expireson", this.expireson);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("netprice", this.netprice);
        writer.writeNumberValue("netprice_base", this.netprice_base);
        writer.writeObjectValue<Contract>("originatingcontract", this.originatingcontract);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeObjectValue<Customeraddress>("serviceaddress", this.serviceaddress);
        writer.writeCollectionOfObjectValues<Contact>("servicecontractcontacts_association", this.servicecontractcontacts_association);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("title", this.title);
        writer.writeNumberValue("totaldiscount", this.totaldiscount);
        writer.writeNumberValue("totaldiscount_base", this.totaldiscount_base);
        writer.writeNumberValue("totalprice", this.totalprice);
        writer.writeNumberValue("totalprice_base", this.totalprice_base);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeBooleanValue("usediscountaspercentage", this.usediscountaspercentage);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the serviceaddress property value. 
     * @returns a customeraddress
     */
    public get serviceaddress() {
        return this._serviceaddress;
    };
    /**
     * Sets the serviceaddress property value. 
     * @param value Value to set for the serviceaddress property.
     */
    public set serviceaddress(value: Customeraddress | undefined) {
        this._serviceaddress = value;
    };
    /**
     * Gets the servicecontractcontacts_association property value. 
     * @returns a contact
     */
    public get servicecontractcontacts_association() {
        return this._servicecontractcontacts_association;
    };
    /**
     * Sets the servicecontractcontacts_association property value. 
     * @param value Value to set for the servicecontractcontacts_association property.
     */
    public set servicecontractcontacts_association(value: Contact[] | undefined) {
        this._servicecontractcontacts_association = value;
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
     * Gets the title property value. 
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. 
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the totaldiscount property value. 
     * @returns a int64
     */
    public get totaldiscount() {
        return this._totaldiscount;
    };
    /**
     * Sets the totaldiscount property value. 
     * @param value Value to set for the totaldiscount property.
     */
    public set totaldiscount(value: number | undefined) {
        this._totaldiscount = value;
    };
    /**
     * Gets the totaldiscount_base property value. 
     * @returns a int64
     */
    public get totaldiscount_base() {
        return this._totaldiscount_base;
    };
    /**
     * Sets the totaldiscount_base property value. 
     * @param value Value to set for the totaldiscount_base property.
     */
    public set totaldiscount_base(value: number | undefined) {
        this._totaldiscount_base = value;
    };
    /**
     * Gets the totalprice property value. 
     * @returns a int64
     */
    public get totalprice() {
        return this._totalprice;
    };
    /**
     * Sets the totalprice property value. 
     * @param value Value to set for the totalprice property.
     */
    public set totalprice(value: number | undefined) {
        this._totalprice = value;
    };
    /**
     * Gets the totalprice_base property value. 
     * @returns a int64
     */
    public get totalprice_base() {
        return this._totalprice_base;
    };
    /**
     * Sets the totalprice_base property value. 
     * @param value Value to set for the totalprice_base property.
     */
    public set totalprice_base(value: number | undefined) {
        this._totalprice_base = value;
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
     * Gets the usediscountaspercentage property value. 
     * @returns a boolean
     */
    public get usediscountaspercentage() {
        return this._usediscountaspercentage;
    };
    /**
     * Sets the usediscountaspercentage property value. 
     * @param value Value to set for the usediscountaspercentage property.
     */
    public set usediscountaspercentage(value: boolean | undefined) {
        this._usediscountaspercentage = value;
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
