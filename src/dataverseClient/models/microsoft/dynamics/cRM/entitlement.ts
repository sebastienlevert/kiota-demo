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
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createEntitlementchannelFromDiscriminatorValue} from './createEntitlementchannelFromDiscriminatorValue';
import {createEntitlementtemplateFromDiscriminatorValue} from './createEntitlementtemplateFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createIncidentresolutionFromDiscriminatorValue} from './createIncidentresolutionFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_entitlementapplicationFromDiscriminatorValue} from './createMsdyn_entitlementapplicationFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_workorderproductFromDiscriminatorValue} from './createMsdyn_workorderproductFromDiscriminatorValue';
import {createMsdyn_workorderserviceFromDiscriminatorValue} from './createMsdyn_workorderserviceFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createOpportunitycloseFromDiscriminatorValue} from './createOpportunitycloseFromDiscriminatorValue';
import {createOrdercloseFromDiscriminatorValue} from './createOrdercloseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPricelevelFromDiscriminatorValue} from './createPricelevelFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
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
import {Account, Activityparty, Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Contact, Crmbaseentity, Duplicaterecord, Email, Entitlementchannel, Entitlementtemplate, Fax, Incident, Incidentresolution, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_entitlementapplication, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_workorderproduct, Msdyn_workorderservice, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Opportunityclose, Orderclose, Phonecall, Pricelevel, Principal, Principalobjectattributeaccess, Processsession, Product, Quoteclose, Recurringappointmentmaster, Serviceappointment, Sla, Socialactivity, Syncerror, Systemuser, Task, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Entitlement extends Crmbaseentity implements Parsable {
    private __accountid_value?: string | undefined;
    private __contactid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __customerid_value?: string | undefined;
    private __entitlementtemplateid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_pricelisttoapply_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __slaid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _accountid?: Account | undefined;
    private _allocationtypecode?: number | undefined;
    private _contactid?: Contact | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _customerid_account?: Account | undefined;
    private _customerid_contact?: Contact | undefined;
    private _decreaseremainingon?: number | undefined;
    private _description?: string | undefined;
    private _emailaddress?: string | undefined;
    private _enddate?: Date | undefined;
    private _entitlement_ActivityParties?: Activityparty[] | undefined;
    private _entitlement_ActivityPointers?: Activitypointer[] | undefined;
    private _entitlement_Annotations?: Annotation[] | undefined;
    private _entitlement_Appointments?: Appointment[] | undefined;
    private _entitlement_AsyncOperations?: Asyncoperation[] | undefined;
    private _entitlement_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _entitlement_cases?: Incident[] | undefined;
    private _entitlement_connections1?: Connection[] | undefined;
    private _entitlement_connections2?: Connection[] | undefined;
    private _entitlement_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _entitlement_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _entitlement_Emails?: Email[] | undefined;
    private _entitlement_entitlementchannel_EntitlementId?: Entitlementchannel[] | undefined;
    private _entitlement_Faxes?: Fax[] | undefined;
    private _entitlement_IncidentResolutions?: Incidentresolution[] | undefined;
    private _entitlement_Letters?: Letter[] | undefined;
    private _entitlement_MailboxTrackingFolder?: Mailboxtrackingfolder[] | undefined;
    private _entitlement_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _entitlement_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _entitlement_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _entitlement_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _entitlement_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _entitlement_msfp_alerts?: Msfp_alert[] | undefined;
    private _entitlement_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _entitlement_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _entitlement_OpportunityCloses?: Opportunityclose[] | undefined;
    private _entitlement_OrderCloses?: Orderclose[] | undefined;
    private _entitlement_PhoneCalls?: Phonecall[] | undefined;
    private _entitlement_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _entitlement_ProcessSession?: Processsession[] | undefined;
    private _entitlement_QuoteCloses?: Quoteclose[] | undefined;
    private _entitlement_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _entitlement_ServiceAppointments?: Serviceappointment[] | undefined;
    private _entitlement_SocialActivities?: Socialactivity[] | undefined;
    private _entitlement_SyncErrors?: Syncerror[] | undefined;
    private _entitlement_Tasks?: Task[] | undefined;
    private _entitlementcontacts_association?: Contact[] | undefined;
    private _entitlementid?: string | undefined;
    private _entitlementtemplateid?: Entitlementtemplate | undefined;
    private _entitytype?: number | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _isdefault?: boolean | undefined;
    private _kbaccesslevel?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_appliesto?: number | undefined;
    private _msdyn_entitlement_msdyn_entitlementapplication_entitlement?: Msdyn_entitlementapplication[] | undefined;
    private _msdyn_entitlement_msdyn_workorderproduct_Entitlement?: Msdyn_workorderproduct[] | undefined;
    private _msdyn_entitlement_msdyn_workorderservice_entitlement?: Msdyn_workorderservice[] | undefined;
    private _msdyn_entitlementprioritization?: number | undefined;
    private _msdyn_percentdiscount?: number | undefined;
    private _name?: string | undefined;
    private _new_PriceListToApply?: Pricelevel | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _processid?: string | undefined;
    private _product_entitlement_association?: Product[] | undefined;
    private _remainingterms?: number | undefined;
    private _restrictcasecreation?: boolean | undefined;
    private _slaid?: Sla | undefined;
    private _stageid?: string | undefined;
    private _startdate?: Date | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _totalterms?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _traversedpath?: string | undefined;
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
     * Gets the _entitlementtemplateid_value property value. 
     * @returns a string
     */
    public get _entitlementtemplateid_value() {
        return this.__entitlementtemplateid_value;
    };
    /**
     * Sets the _entitlementtemplateid_value property value. 
     * @param value Value to set for the _entitlementtemplateid_value property.
     */
    public set _entitlementtemplateid_value(value: string | undefined) {
        this.__entitlementtemplateid_value = value;
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
     * Gets the _msdyn_pricelisttoapply_value property value. 
     * @returns a string
     */
    public get _msdyn_pricelisttoapply_value() {
        return this.__msdyn_pricelisttoapply_value;
    };
    /**
     * Sets the _msdyn_pricelisttoapply_value property value. 
     * @param value Value to set for the _msdyn_pricelisttoapply_value property.
     */
    public set _msdyn_pricelisttoapply_value(value: string | undefined) {
        this.__msdyn_pricelisttoapply_value = value;
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
     * Gets the accountid property value. 
     * @returns a account
     */
    public get accountid() {
        return this._accountid;
    };
    /**
     * Sets the accountid property value. 
     * @param value Value to set for the accountid property.
     */
    public set accountid(value: Account | undefined) {
        this._accountid = value;
    };
    /**
     * Gets the allocationtypecode property value. 
     * @returns a integer
     */
    public get allocationtypecode() {
        return this._allocationtypecode;
    };
    /**
     * Sets the allocationtypecode property value. 
     * @param value Value to set for the allocationtypecode property.
     */
    public set allocationtypecode(value: number | undefined) {
        this._allocationtypecode = value;
    };
    /**
     * Instantiates a new entitlement and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contactid property value. 
     * @returns a contact
     */
    public get contactid() {
        return this._contactid;
    };
    /**
     * Sets the contactid property value. 
     * @param value Value to set for the contactid property.
     */
    public set contactid(value: Contact | undefined) {
        this._contactid = value;
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
     * Gets the decreaseremainingon property value. 
     * @returns a integer
     */
    public get decreaseremainingon() {
        return this._decreaseremainingon;
    };
    /**
     * Sets the decreaseremainingon property value. 
     * @param value Value to set for the decreaseremainingon property.
     */
    public set decreaseremainingon(value: number | undefined) {
        this._decreaseremainingon = value;
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
     * Gets the enddate property value. 
     * @returns a Date
     */
    public get enddate() {
        return this._enddate;
    };
    /**
     * Sets the enddate property value. 
     * @param value Value to set for the enddate property.
     */
    public set enddate(value: Date | undefined) {
        this._enddate = value;
    };
    /**
     * Gets the entitlement_ActivityParties property value. 
     * @returns a activityparty
     */
    public get entitlement_ActivityParties() {
        return this._entitlement_ActivityParties;
    };
    /**
     * Sets the entitlement_ActivityParties property value. 
     * @param value Value to set for the entitlement_ActivityParties property.
     */
    public set entitlement_ActivityParties(value: Activityparty[] | undefined) {
        this._entitlement_ActivityParties = value;
    };
    /**
     * Gets the entitlement_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get entitlement_ActivityPointers() {
        return this._entitlement_ActivityPointers;
    };
    /**
     * Sets the entitlement_ActivityPointers property value. 
     * @param value Value to set for the entitlement_ActivityPointers property.
     */
    public set entitlement_ActivityPointers(value: Activitypointer[] | undefined) {
        this._entitlement_ActivityPointers = value;
    };
    /**
     * Gets the entitlement_Annotations property value. 
     * @returns a annotation
     */
    public get entitlement_Annotations() {
        return this._entitlement_Annotations;
    };
    /**
     * Sets the entitlement_Annotations property value. 
     * @param value Value to set for the entitlement_Annotations property.
     */
    public set entitlement_Annotations(value: Annotation[] | undefined) {
        this._entitlement_Annotations = value;
    };
    /**
     * Gets the entitlement_Appointments property value. 
     * @returns a appointment
     */
    public get entitlement_Appointments() {
        return this._entitlement_Appointments;
    };
    /**
     * Sets the entitlement_Appointments property value. 
     * @param value Value to set for the entitlement_Appointments property.
     */
    public set entitlement_Appointments(value: Appointment[] | undefined) {
        this._entitlement_Appointments = value;
    };
    /**
     * Gets the entitlement_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get entitlement_AsyncOperations() {
        return this._entitlement_AsyncOperations;
    };
    /**
     * Sets the entitlement_AsyncOperations property value. 
     * @param value Value to set for the entitlement_AsyncOperations property.
     */
    public set entitlement_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._entitlement_AsyncOperations = value;
    };
    /**
     * Gets the entitlement_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get entitlement_BulkDeleteFailures() {
        return this._entitlement_BulkDeleteFailures;
    };
    /**
     * Sets the entitlement_BulkDeleteFailures property value. 
     * @param value Value to set for the entitlement_BulkDeleteFailures property.
     */
    public set entitlement_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._entitlement_BulkDeleteFailures = value;
    };
    /**
     * Gets the entitlement_cases property value. 
     * @returns a incident
     */
    public get entitlement_cases() {
        return this._entitlement_cases;
    };
    /**
     * Sets the entitlement_cases property value. 
     * @param value Value to set for the entitlement_cases property.
     */
    public set entitlement_cases(value: Incident[] | undefined) {
        this._entitlement_cases = value;
    };
    /**
     * Gets the entitlement_connections1 property value. 
     * @returns a connection
     */
    public get entitlement_connections1() {
        return this._entitlement_connections1;
    };
    /**
     * Sets the entitlement_connections1 property value. 
     * @param value Value to set for the entitlement_connections1 property.
     */
    public set entitlement_connections1(value: Connection[] | undefined) {
        this._entitlement_connections1 = value;
    };
    /**
     * Gets the entitlement_connections2 property value. 
     * @returns a connection
     */
    public get entitlement_connections2() {
        return this._entitlement_connections2;
    };
    /**
     * Sets the entitlement_connections2 property value. 
     * @param value Value to set for the entitlement_connections2 property.
     */
    public set entitlement_connections2(value: Connection[] | undefined) {
        this._entitlement_connections2 = value;
    };
    /**
     * Gets the entitlement_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get entitlement_DuplicateBaseRecord() {
        return this._entitlement_DuplicateBaseRecord;
    };
    /**
     * Sets the entitlement_DuplicateBaseRecord property value. 
     * @param value Value to set for the entitlement_DuplicateBaseRecord property.
     */
    public set entitlement_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._entitlement_DuplicateBaseRecord = value;
    };
    /**
     * Gets the entitlement_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get entitlement_DuplicateMatchingRecord() {
        return this._entitlement_DuplicateMatchingRecord;
    };
    /**
     * Sets the entitlement_DuplicateMatchingRecord property value. 
     * @param value Value to set for the entitlement_DuplicateMatchingRecord property.
     */
    public set entitlement_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._entitlement_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the entitlement_Emails property value. 
     * @returns a email
     */
    public get entitlement_Emails() {
        return this._entitlement_Emails;
    };
    /**
     * Sets the entitlement_Emails property value. 
     * @param value Value to set for the entitlement_Emails property.
     */
    public set entitlement_Emails(value: Email[] | undefined) {
        this._entitlement_Emails = value;
    };
    /**
     * Gets the entitlement_entitlementchannel_EntitlementId property value. 
     * @returns a entitlementchannel
     */
    public get entitlement_entitlementchannel_EntitlementId() {
        return this._entitlement_entitlementchannel_EntitlementId;
    };
    /**
     * Sets the entitlement_entitlementchannel_EntitlementId property value. 
     * @param value Value to set for the entitlement_entitlementchannel_EntitlementId property.
     */
    public set entitlement_entitlementchannel_EntitlementId(value: Entitlementchannel[] | undefined) {
        this._entitlement_entitlementchannel_EntitlementId = value;
    };
    /**
     * Gets the entitlement_Faxes property value. 
     * @returns a fax
     */
    public get entitlement_Faxes() {
        return this._entitlement_Faxes;
    };
    /**
     * Sets the entitlement_Faxes property value. 
     * @param value Value to set for the entitlement_Faxes property.
     */
    public set entitlement_Faxes(value: Fax[] | undefined) {
        this._entitlement_Faxes = value;
    };
    /**
     * Gets the entitlement_IncidentResolutions property value. 
     * @returns a incidentresolution
     */
    public get entitlement_IncidentResolutions() {
        return this._entitlement_IncidentResolutions;
    };
    /**
     * Sets the entitlement_IncidentResolutions property value. 
     * @param value Value to set for the entitlement_IncidentResolutions property.
     */
    public set entitlement_IncidentResolutions(value: Incidentresolution[] | undefined) {
        this._entitlement_IncidentResolutions = value;
    };
    /**
     * Gets the entitlement_Letters property value. 
     * @returns a letter
     */
    public get entitlement_Letters() {
        return this._entitlement_Letters;
    };
    /**
     * Sets the entitlement_Letters property value. 
     * @param value Value to set for the entitlement_Letters property.
     */
    public set entitlement_Letters(value: Letter[] | undefined) {
        this._entitlement_Letters = value;
    };
    /**
     * Gets the entitlement_MailboxTrackingFolder property value. 
     * @returns a mailboxtrackingfolder
     */
    public get entitlement_MailboxTrackingFolder() {
        return this._entitlement_MailboxTrackingFolder;
    };
    /**
     * Sets the entitlement_MailboxTrackingFolder property value. 
     * @param value Value to set for the Entitlement_MailboxTrackingFolder property.
     */
    public set entitlement_MailboxTrackingFolder(value: Mailboxtrackingfolder[] | undefined) {
        this._entitlement_MailboxTrackingFolder = value;
    };
    /**
     * Gets the entitlement_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get entitlement_msdyn_approvals() {
        return this._entitlement_msdyn_approvals;
    };
    /**
     * Sets the entitlement_msdyn_approvals property value. 
     * @param value Value to set for the entitlement_msdyn_approvals property.
     */
    public set entitlement_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._entitlement_msdyn_approvals = value;
    };
    /**
     * Gets the entitlement_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get entitlement_msdyn_bookingalerts() {
        return this._entitlement_msdyn_bookingalerts;
    };
    /**
     * Sets the entitlement_msdyn_bookingalerts property value. 
     * @param value Value to set for the entitlement_msdyn_bookingalerts property.
     */
    public set entitlement_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._entitlement_msdyn_bookingalerts = value;
    };
    /**
     * Gets the entitlement_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get entitlement_msdyn_ocliveworkitems() {
        return this._entitlement_msdyn_ocliveworkitems;
    };
    /**
     * Sets the entitlement_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the entitlement_msdyn_ocliveworkitems property.
     */
    public set entitlement_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._entitlement_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the entitlement_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get entitlement_msdyn_ocoutboundmessages() {
        return this._entitlement_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the entitlement_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the entitlement_msdyn_ocoutboundmessages property.
     */
    public set entitlement_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._entitlement_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the entitlement_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get entitlement_msdyn_ocsessions() {
        return this._entitlement_msdyn_ocsessions;
    };
    /**
     * Sets the entitlement_msdyn_ocsessions property value. 
     * @param value Value to set for the entitlement_msdyn_ocsessions property.
     */
    public set entitlement_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._entitlement_msdyn_ocsessions = value;
    };
    /**
     * Gets the entitlement_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get entitlement_msfp_alerts() {
        return this._entitlement_msfp_alerts;
    };
    /**
     * Sets the entitlement_msfp_alerts property value. 
     * @param value Value to set for the entitlement_msfp_alerts property.
     */
    public set entitlement_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._entitlement_msfp_alerts = value;
    };
    /**
     * Gets the entitlement_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get entitlement_msfp_surveyinvites() {
        return this._entitlement_msfp_surveyinvites;
    };
    /**
     * Sets the entitlement_msfp_surveyinvites property value. 
     * @param value Value to set for the entitlement_msfp_surveyinvites property.
     */
    public set entitlement_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._entitlement_msfp_surveyinvites = value;
    };
    /**
     * Gets the entitlement_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get entitlement_msfp_surveyresponses() {
        return this._entitlement_msfp_surveyresponses;
    };
    /**
     * Sets the entitlement_msfp_surveyresponses property value. 
     * @param value Value to set for the entitlement_msfp_surveyresponses property.
     */
    public set entitlement_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._entitlement_msfp_surveyresponses = value;
    };
    /**
     * Gets the entitlement_OpportunityCloses property value. 
     * @returns a opportunityclose
     */
    public get entitlement_OpportunityCloses() {
        return this._entitlement_OpportunityCloses;
    };
    /**
     * Sets the entitlement_OpportunityCloses property value. 
     * @param value Value to set for the entitlement_OpportunityCloses property.
     */
    public set entitlement_OpportunityCloses(value: Opportunityclose[] | undefined) {
        this._entitlement_OpportunityCloses = value;
    };
    /**
     * Gets the entitlement_OrderCloses property value. 
     * @returns a orderclose
     */
    public get entitlement_OrderCloses() {
        return this._entitlement_OrderCloses;
    };
    /**
     * Sets the entitlement_OrderCloses property value. 
     * @param value Value to set for the entitlement_OrderCloses property.
     */
    public set entitlement_OrderCloses(value: Orderclose[] | undefined) {
        this._entitlement_OrderCloses = value;
    };
    /**
     * Gets the entitlement_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get entitlement_PhoneCalls() {
        return this._entitlement_PhoneCalls;
    };
    /**
     * Sets the entitlement_PhoneCalls property value. 
     * @param value Value to set for the entitlement_PhoneCalls property.
     */
    public set entitlement_PhoneCalls(value: Phonecall[] | undefined) {
        this._entitlement_PhoneCalls = value;
    };
    /**
     * Gets the entitlement_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get entitlement_PrincipalObjectAttributeAccesses() {
        return this._entitlement_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the entitlement_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the entitlement_PrincipalObjectAttributeAccesses property.
     */
    public set entitlement_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._entitlement_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the entitlement_ProcessSession property value. 
     * @returns a processsession
     */
    public get entitlement_ProcessSession() {
        return this._entitlement_ProcessSession;
    };
    /**
     * Sets the entitlement_ProcessSession property value. 
     * @param value Value to set for the entitlement_ProcessSession property.
     */
    public set entitlement_ProcessSession(value: Processsession[] | undefined) {
        this._entitlement_ProcessSession = value;
    };
    /**
     * Gets the entitlement_QuoteCloses property value. 
     * @returns a quoteclose
     */
    public get entitlement_QuoteCloses() {
        return this._entitlement_QuoteCloses;
    };
    /**
     * Sets the entitlement_QuoteCloses property value. 
     * @param value Value to set for the entitlement_QuoteCloses property.
     */
    public set entitlement_QuoteCloses(value: Quoteclose[] | undefined) {
        this._entitlement_QuoteCloses = value;
    };
    /**
     * Gets the entitlement_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get entitlement_RecurringAppointmentMasters() {
        return this._entitlement_RecurringAppointmentMasters;
    };
    /**
     * Sets the entitlement_RecurringAppointmentMasters property value. 
     * @param value Value to set for the entitlement_RecurringAppointmentMasters property.
     */
    public set entitlement_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._entitlement_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the entitlement_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get entitlement_ServiceAppointments() {
        return this._entitlement_ServiceAppointments;
    };
    /**
     * Sets the entitlement_ServiceAppointments property value. 
     * @param value Value to set for the entitlement_ServiceAppointments property.
     */
    public set entitlement_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._entitlement_ServiceAppointments = value;
    };
    /**
     * Gets the entitlement_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get entitlement_SocialActivities() {
        return this._entitlement_SocialActivities;
    };
    /**
     * Sets the entitlement_SocialActivities property value. 
     * @param value Value to set for the entitlement_SocialActivities property.
     */
    public set entitlement_SocialActivities(value: Socialactivity[] | undefined) {
        this._entitlement_SocialActivities = value;
    };
    /**
     * Gets the entitlement_SyncErrors property value. 
     * @returns a syncerror
     */
    public get entitlement_SyncErrors() {
        return this._entitlement_SyncErrors;
    };
    /**
     * Sets the entitlement_SyncErrors property value. 
     * @param value Value to set for the Entitlement_SyncErrors property.
     */
    public set entitlement_SyncErrors(value: Syncerror[] | undefined) {
        this._entitlement_SyncErrors = value;
    };
    /**
     * Gets the entitlement_Tasks property value. 
     * @returns a task
     */
    public get entitlement_Tasks() {
        return this._entitlement_Tasks;
    };
    /**
     * Sets the entitlement_Tasks property value. 
     * @param value Value to set for the entitlement_Tasks property.
     */
    public set entitlement_Tasks(value: Task[] | undefined) {
        this._entitlement_Tasks = value;
    };
    /**
     * Gets the entitlementcontacts_association property value. 
     * @returns a contact
     */
    public get entitlementcontacts_association() {
        return this._entitlementcontacts_association;
    };
    /**
     * Sets the entitlementcontacts_association property value. 
     * @param value Value to set for the entitlementcontacts_association property.
     */
    public set entitlementcontacts_association(value: Contact[] | undefined) {
        this._entitlementcontacts_association = value;
    };
    /**
     * Gets the entitlementid property value. 
     * @returns a string
     */
    public get entitlementid() {
        return this._entitlementid;
    };
    /**
     * Sets the entitlementid property value. 
     * @param value Value to set for the entitlementid property.
     */
    public set entitlementid(value: string | undefined) {
        this._entitlementid = value;
    };
    /**
     * Gets the entitlementtemplateid property value. 
     * @returns a entitlementtemplate
     */
    public get entitlementtemplateid() {
        return this._entitlementtemplateid;
    };
    /**
     * Sets the entitlementtemplateid property value. 
     * @param value Value to set for the entitlementtemplateid property.
     */
    public set entitlementtemplateid(value: Entitlementtemplate | undefined) {
        this._entitlementtemplateid = value;
    };
    /**
     * Gets the entitytype property value. 
     * @returns a integer
     */
    public get entitytype() {
        return this._entitytype;
    };
    /**
     * Sets the entitytype property value. 
     * @param value Value to set for the entitytype property.
     */
    public set entitytype(value: number | undefined) {
        this._entitytype = value;
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
            "_accountid_value": (o, n) => { (o as unknown as Entitlement)._accountid_value = n.getStringValue(); },
            "_contactid_value": (o, n) => { (o as unknown as Entitlement)._contactid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Entitlement)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Entitlement)._createdonbehalfby_value = n.getStringValue(); },
            "_customerid_value": (o, n) => { (o as unknown as Entitlement)._customerid_value = n.getStringValue(); },
            "_entitlementtemplateid_value": (o, n) => { (o as unknown as Entitlement)._entitlementtemplateid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Entitlement)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Entitlement)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_pricelisttoapply_value": (o, n) => { (o as unknown as Entitlement)._msdyn_pricelisttoapply_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Entitlement)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Entitlement)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Entitlement)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Entitlement)._owninguser_value = n.getStringValue(); },
            "_slaid_value": (o, n) => { (o as unknown as Entitlement)._slaid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Entitlement)._transactioncurrencyid_value = n.getStringValue(); },
            "accountid": (o, n) => { (o as unknown as Entitlement).accountid = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "allocationtypecode": (o, n) => { (o as unknown as Entitlement).allocationtypecode = n.getNumberValue(); },
            "contactid": (o, n) => { (o as unknown as Entitlement).contactid = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "createdby": (o, n) => { (o as unknown as Entitlement).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Entitlement).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Entitlement).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "customerid_account": (o, n) => { (o as unknown as Entitlement).customerid_account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "customerid_contact": (o, n) => { (o as unknown as Entitlement).customerid_contact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "decreaseremainingon": (o, n) => { (o as unknown as Entitlement).decreaseremainingon = n.getNumberValue(); },
            "description": (o, n) => { (o as unknown as Entitlement).description = n.getStringValue(); },
            "emailaddress": (o, n) => { (o as unknown as Entitlement).emailaddress = n.getStringValue(); },
            "enddate": (o, n) => { (o as unknown as Entitlement).enddate = n.getDateValue(); },
            "entitlement_ActivityParties": (o, n) => { (o as unknown as Entitlement).entitlement_ActivityParties = n.getCollectionOfObjectValues<Activityparty>(createActivitypartyFromDiscriminatorValue); },
            "entitlement_ActivityPointers": (o, n) => { (o as unknown as Entitlement).entitlement_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "entitlement_Annotations": (o, n) => { (o as unknown as Entitlement).entitlement_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "entitlement_Appointments": (o, n) => { (o as unknown as Entitlement).entitlement_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "entitlement_AsyncOperations": (o, n) => { (o as unknown as Entitlement).entitlement_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "entitlement_BulkDeleteFailures": (o, n) => { (o as unknown as Entitlement).entitlement_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "entitlement_cases": (o, n) => { (o as unknown as Entitlement).entitlement_cases = n.getCollectionOfObjectValues<Incident>(createIncidentFromDiscriminatorValue); },
            "entitlement_connections1": (o, n) => { (o as unknown as Entitlement).entitlement_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "entitlement_connections2": (o, n) => { (o as unknown as Entitlement).entitlement_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "entitlement_DuplicateBaseRecord": (o, n) => { (o as unknown as Entitlement).entitlement_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "entitlement_DuplicateMatchingRecord": (o, n) => { (o as unknown as Entitlement).entitlement_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "entitlement_Emails": (o, n) => { (o as unknown as Entitlement).entitlement_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "entitlement_entitlementchannel_EntitlementId": (o, n) => { (o as unknown as Entitlement).entitlement_entitlementchannel_EntitlementId = n.getCollectionOfObjectValues<Entitlementchannel>(createEntitlementchannelFromDiscriminatorValue); },
            "entitlement_Faxes": (o, n) => { (o as unknown as Entitlement).entitlement_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "entitlement_IncidentResolutions": (o, n) => { (o as unknown as Entitlement).entitlement_IncidentResolutions = n.getCollectionOfObjectValues<Incidentresolution>(createIncidentresolutionFromDiscriminatorValue); },
            "entitlement_Letters": (o, n) => { (o as unknown as Entitlement).entitlement_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "entitlement_MailboxTrackingFolder": (o, n) => { (o as unknown as Entitlement).entitlement_MailboxTrackingFolder = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "entitlement_msdyn_approvals": (o, n) => { (o as unknown as Entitlement).entitlement_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "entitlement_msdyn_bookingalerts": (o, n) => { (o as unknown as Entitlement).entitlement_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "entitlement_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Entitlement).entitlement_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "entitlement_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Entitlement).entitlement_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "entitlement_msdyn_ocsessions": (o, n) => { (o as unknown as Entitlement).entitlement_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "entitlement_msfp_alerts": (o, n) => { (o as unknown as Entitlement).entitlement_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "entitlement_msfp_surveyinvites": (o, n) => { (o as unknown as Entitlement).entitlement_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "entitlement_msfp_surveyresponses": (o, n) => { (o as unknown as Entitlement).entitlement_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "entitlement_OpportunityCloses": (o, n) => { (o as unknown as Entitlement).entitlement_OpportunityCloses = n.getCollectionOfObjectValues<Opportunityclose>(createOpportunitycloseFromDiscriminatorValue); },
            "entitlement_OrderCloses": (o, n) => { (o as unknown as Entitlement).entitlement_OrderCloses = n.getCollectionOfObjectValues<Orderclose>(createOrdercloseFromDiscriminatorValue); },
            "entitlement_PhoneCalls": (o, n) => { (o as unknown as Entitlement).entitlement_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "entitlement_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Entitlement).entitlement_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "entitlement_ProcessSession": (o, n) => { (o as unknown as Entitlement).entitlement_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "entitlement_QuoteCloses": (o, n) => { (o as unknown as Entitlement).entitlement_QuoteCloses = n.getCollectionOfObjectValues<Quoteclose>(createQuotecloseFromDiscriminatorValue); },
            "entitlement_RecurringAppointmentMasters": (o, n) => { (o as unknown as Entitlement).entitlement_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "entitlement_ServiceAppointments": (o, n) => { (o as unknown as Entitlement).entitlement_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "entitlement_SocialActivities": (o, n) => { (o as unknown as Entitlement).entitlement_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "entitlement_SyncErrors": (o, n) => { (o as unknown as Entitlement).entitlement_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "entitlement_Tasks": (o, n) => { (o as unknown as Entitlement).entitlement_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "entitlementcontacts_association": (o, n) => { (o as unknown as Entitlement).entitlementcontacts_association = n.getCollectionOfObjectValues<Contact>(createContactFromDiscriminatorValue); },
            "entitlementid": (o, n) => { (o as unknown as Entitlement).entitlementid = n.getStringValue(); },
            "entitlementtemplateid": (o, n) => { (o as unknown as Entitlement).entitlementtemplateid = n.getObjectValue<Entitlementtemplate>(createEntitlementtemplateFromDiscriminatorValue); },
            "entitytype": (o, n) => { (o as unknown as Entitlement).entitytype = n.getNumberValue(); },
            "exchangerate": (o, n) => { (o as unknown as Entitlement).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Entitlement).importsequencenumber = n.getNumberValue(); },
            "isdefault": (o, n) => { (o as unknown as Entitlement).isdefault = n.getBooleanValue(); },
            "kbaccesslevel": (o, n) => { (o as unknown as Entitlement).kbaccesslevel = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Entitlement).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Entitlement).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Entitlement).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_appliesto": (o, n) => { (o as unknown as Entitlement).msdyn_appliesto = n.getNumberValue(); },
            "msdyn_entitlement_msdyn_entitlementapplication_entitlement": (o, n) => { (o as unknown as Entitlement).msdyn_entitlement_msdyn_entitlementapplication_entitlement = n.getCollectionOfObjectValues<Msdyn_entitlementapplication>(createMsdyn_entitlementapplicationFromDiscriminatorValue); },
            "msdyn_entitlement_msdyn_workorderproduct_Entitlement": (o, n) => { (o as unknown as Entitlement).msdyn_entitlement_msdyn_workorderproduct_Entitlement = n.getCollectionOfObjectValues<Msdyn_workorderproduct>(createMsdyn_workorderproductFromDiscriminatorValue); },
            "msdyn_entitlement_msdyn_workorderservice_entitlement": (o, n) => { (o as unknown as Entitlement).msdyn_entitlement_msdyn_workorderservice_entitlement = n.getCollectionOfObjectValues<Msdyn_workorderservice>(createMsdyn_workorderserviceFromDiscriminatorValue); },
            "msdyn_entitlementprioritization": (o, n) => { (o as unknown as Entitlement).msdyn_entitlementprioritization = n.getNumberValue(); },
            "msdyn_percentdiscount": (o, n) => { (o as unknown as Entitlement).msdyn_percentdiscount = n.getNumberValue(); },
            "name": (o, n) => { (o as unknown as Entitlement).name = n.getStringValue(); },
            "new_PriceListToApply": (o, n) => { (o as unknown as Entitlement).new_PriceListToApply = n.getObjectValue<Pricelevel>(createPricelevelFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Entitlement).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Entitlement).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Entitlement).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Entitlement).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Entitlement).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "processid": (o, n) => { (o as unknown as Entitlement).processid = n.getStringValue(); },
            "product_entitlement_association": (o, n) => { (o as unknown as Entitlement).product_entitlement_association = n.getCollectionOfObjectValues<Product>(createProductFromDiscriminatorValue); },
            "remainingterms": (o, n) => { (o as unknown as Entitlement).remainingterms = n.getNumberValue(); },
            "restrictcasecreation": (o, n) => { (o as unknown as Entitlement).restrictcasecreation = n.getBooleanValue(); },
            "slaid": (o, n) => { (o as unknown as Entitlement).slaid = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "stageid": (o, n) => { (o as unknown as Entitlement).stageid = n.getStringValue(); },
            "startdate": (o, n) => { (o as unknown as Entitlement).startdate = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Entitlement).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Entitlement).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Entitlement).timezoneruleversionnumber = n.getNumberValue(); },
            "totalterms": (o, n) => { (o as unknown as Entitlement).totalterms = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Entitlement).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "traversedpath": (o, n) => { (o as unknown as Entitlement).traversedpath = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Entitlement).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Entitlement).versionnumber = n.getNumberValue(); },
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
     * Gets the kbaccesslevel property value. 
     * @returns a integer
     */
    public get kbaccesslevel() {
        return this._kbaccesslevel;
    };
    /**
     * Sets the kbaccesslevel property value. 
     * @param value Value to set for the kbaccesslevel property.
     */
    public set kbaccesslevel(value: number | undefined) {
        this._kbaccesslevel = value;
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
     * Gets the msdyn_appliesto property value. 
     * @returns a integer
     */
    public get msdyn_appliesto() {
        return this._msdyn_appliesto;
    };
    /**
     * Sets the msdyn_appliesto property value. 
     * @param value Value to set for the msdyn_appliesto property.
     */
    public set msdyn_appliesto(value: number | undefined) {
        this._msdyn_appliesto = value;
    };
    /**
     * Gets the msdyn_entitlement_msdyn_entitlementapplication_entitlement property value. 
     * @returns a msdyn_entitlementapplication
     */
    public get msdyn_entitlement_msdyn_entitlementapplication_entitlement() {
        return this._msdyn_entitlement_msdyn_entitlementapplication_entitlement;
    };
    /**
     * Sets the msdyn_entitlement_msdyn_entitlementapplication_entitlement property value. 
     * @param value Value to set for the msdyn_entitlement_msdyn_entitlementapplication_entitlement property.
     */
    public set msdyn_entitlement_msdyn_entitlementapplication_entitlement(value: Msdyn_entitlementapplication[] | undefined) {
        this._msdyn_entitlement_msdyn_entitlementapplication_entitlement = value;
    };
    /**
     * Gets the msdyn_entitlement_msdyn_workorderproduct_Entitlement property value. 
     * @returns a msdyn_workorderproduct
     */
    public get msdyn_entitlement_msdyn_workorderproduct_Entitlement() {
        return this._msdyn_entitlement_msdyn_workorderproduct_Entitlement;
    };
    /**
     * Sets the msdyn_entitlement_msdyn_workorderproduct_Entitlement property value. 
     * @param value Value to set for the msdyn_entitlement_msdyn_workorderproduct_Entitlement property.
     */
    public set msdyn_entitlement_msdyn_workorderproduct_Entitlement(value: Msdyn_workorderproduct[] | undefined) {
        this._msdyn_entitlement_msdyn_workorderproduct_Entitlement = value;
    };
    /**
     * Gets the msdyn_entitlement_msdyn_workorderservice_entitlement property value. 
     * @returns a msdyn_workorderservice
     */
    public get msdyn_entitlement_msdyn_workorderservice_entitlement() {
        return this._msdyn_entitlement_msdyn_workorderservice_entitlement;
    };
    /**
     * Sets the msdyn_entitlement_msdyn_workorderservice_entitlement property value. 
     * @param value Value to set for the msdyn_entitlement_msdyn_workorderservice_entitlement property.
     */
    public set msdyn_entitlement_msdyn_workorderservice_entitlement(value: Msdyn_workorderservice[] | undefined) {
        this._msdyn_entitlement_msdyn_workorderservice_entitlement = value;
    };
    /**
     * Gets the msdyn_entitlementprioritization property value. 
     * @returns a integer
     */
    public get msdyn_entitlementprioritization() {
        return this._msdyn_entitlementprioritization;
    };
    /**
     * Sets the msdyn_entitlementprioritization property value. 
     * @param value Value to set for the msdyn_entitlementprioritization property.
     */
    public set msdyn_entitlementprioritization(value: number | undefined) {
        this._msdyn_entitlementprioritization = value;
    };
    /**
     * Gets the msdyn_percentdiscount property value. 
     * @returns a double
     */
    public get msdyn_percentdiscount() {
        return this._msdyn_percentdiscount;
    };
    /**
     * Sets the msdyn_percentdiscount property value. 
     * @param value Value to set for the msdyn_percentdiscount property.
     */
    public set msdyn_percentdiscount(value: number | undefined) {
        this._msdyn_percentdiscount = value;
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
     * Gets the new_PriceListToApply property value. 
     * @returns a pricelevel
     */
    public get new_PriceListToApply() {
        return this._new_PriceListToApply;
    };
    /**
     * Sets the new_PriceListToApply property value. 
     * @param value Value to set for the new_PriceListToApply property.
     */
    public set new_PriceListToApply(value: Pricelevel | undefined) {
        this._new_PriceListToApply = value;
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
     * Gets the product_entitlement_association property value. 
     * @returns a product
     */
    public get product_entitlement_association() {
        return this._product_entitlement_association;
    };
    /**
     * Sets the product_entitlement_association property value. 
     * @param value Value to set for the product_entitlement_association property.
     */
    public set product_entitlement_association(value: Product[] | undefined) {
        this._product_entitlement_association = value;
    };
    /**
     * Gets the remainingterms property value. 
     * @returns a int64
     */
    public get remainingterms() {
        return this._remainingterms;
    };
    /**
     * Sets the remainingterms property value. 
     * @param value Value to set for the remainingterms property.
     */
    public set remainingterms(value: number | undefined) {
        this._remainingterms = value;
    };
    /**
     * Gets the restrictcasecreation property value. 
     * @returns a boolean
     */
    public get restrictcasecreation() {
        return this._restrictcasecreation;
    };
    /**
     * Sets the restrictcasecreation property value. 
     * @param value Value to set for the restrictcasecreation property.
     */
    public set restrictcasecreation(value: boolean | undefined) {
        this._restrictcasecreation = value;
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
        writer.writeStringValue("_entitlementtemplateid_value", this._entitlementtemplateid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_pricelisttoapply_value", this._msdyn_pricelisttoapply_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_slaid_value", this._slaid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Account>("accountid", this.accountid);
        writer.writeNumberValue("allocationtypecode", this.allocationtypecode);
        writer.writeObjectValue<Contact>("contactid", this.contactid);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeObjectValue<Account>("customerid_account", this.customerid_account);
        writer.writeObjectValue<Contact>("customerid_contact", this.customerid_contact);
        writer.writeNumberValue("decreaseremainingon", this.decreaseremainingon);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("emailaddress", this.emailaddress);
        writer.writeDateValue("enddate", this.enddate);
        writer.writeCollectionOfObjectValues<Activityparty>("entitlement_ActivityParties", this.entitlement_ActivityParties);
        writer.writeCollectionOfObjectValues<Activitypointer>("entitlement_ActivityPointers", this.entitlement_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("entitlement_Annotations", this.entitlement_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("entitlement_Appointments", this.entitlement_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("entitlement_AsyncOperations", this.entitlement_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("entitlement_BulkDeleteFailures", this.entitlement_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Incident>("entitlement_cases", this.entitlement_cases);
        writer.writeCollectionOfObjectValues<Connection>("entitlement_connections1", this.entitlement_connections1);
        writer.writeCollectionOfObjectValues<Connection>("entitlement_connections2", this.entitlement_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("entitlement_DuplicateBaseRecord", this.entitlement_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("entitlement_DuplicateMatchingRecord", this.entitlement_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("entitlement_Emails", this.entitlement_Emails);
        writer.writeCollectionOfObjectValues<Entitlementchannel>("entitlement_entitlementchannel_EntitlementId", this.entitlement_entitlementchannel_EntitlementId);
        writer.writeCollectionOfObjectValues<Fax>("entitlement_Faxes", this.entitlement_Faxes);
        writer.writeCollectionOfObjectValues<Incidentresolution>("entitlement_IncidentResolutions", this.entitlement_IncidentResolutions);
        writer.writeCollectionOfObjectValues<Letter>("entitlement_Letters", this.entitlement_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("entitlement_MailboxTrackingFolder", this.entitlement_MailboxTrackingFolder);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("entitlement_msdyn_approvals", this.entitlement_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("entitlement_msdyn_bookingalerts", this.entitlement_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("entitlement_msdyn_ocliveworkitems", this.entitlement_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("entitlement_msdyn_ocoutboundmessages", this.entitlement_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("entitlement_msdyn_ocsessions", this.entitlement_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("entitlement_msfp_alerts", this.entitlement_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("entitlement_msfp_surveyinvites", this.entitlement_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("entitlement_msfp_surveyresponses", this.entitlement_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Opportunityclose>("entitlement_OpportunityCloses", this.entitlement_OpportunityCloses);
        writer.writeCollectionOfObjectValues<Orderclose>("entitlement_OrderCloses", this.entitlement_OrderCloses);
        writer.writeCollectionOfObjectValues<Phonecall>("entitlement_PhoneCalls", this.entitlement_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("entitlement_PrincipalObjectAttributeAccesses", this.entitlement_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("entitlement_ProcessSession", this.entitlement_ProcessSession);
        writer.writeCollectionOfObjectValues<Quoteclose>("entitlement_QuoteCloses", this.entitlement_QuoteCloses);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("entitlement_RecurringAppointmentMasters", this.entitlement_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("entitlement_ServiceAppointments", this.entitlement_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("entitlement_SocialActivities", this.entitlement_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("entitlement_SyncErrors", this.entitlement_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("entitlement_Tasks", this.entitlement_Tasks);
        writer.writeCollectionOfObjectValues<Contact>("entitlementcontacts_association", this.entitlementcontacts_association);
        writer.writeStringValue("entitlementid", this.entitlementid);
        writer.writeObjectValue<Entitlementtemplate>("entitlementtemplateid", this.entitlementtemplateid);
        writer.writeNumberValue("entitytype", this.entitytype);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeBooleanValue("isdefault", this.isdefault);
        writer.writeNumberValue("kbaccesslevel", this.kbaccesslevel);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyn_appliesto", this.msdyn_appliesto);
        writer.writeCollectionOfObjectValues<Msdyn_entitlementapplication>("msdyn_entitlement_msdyn_entitlementapplication_entitlement", this.msdyn_entitlement_msdyn_entitlementapplication_entitlement);
        writer.writeCollectionOfObjectValues<Msdyn_workorderproduct>("msdyn_entitlement_msdyn_workorderproduct_Entitlement", this.msdyn_entitlement_msdyn_workorderproduct_Entitlement);
        writer.writeCollectionOfObjectValues<Msdyn_workorderservice>("msdyn_entitlement_msdyn_workorderservice_entitlement", this.msdyn_entitlement_msdyn_workorderservice_entitlement);
        writer.writeNumberValue("msdyn_entitlementprioritization", this.msdyn_entitlementprioritization);
        writer.writeNumberValue("msdyn_percentdiscount", this.msdyn_percentdiscount);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Pricelevel>("new_PriceListToApply", this.new_PriceListToApply);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("processid", this.processid);
        writer.writeCollectionOfObjectValues<Product>("product_entitlement_association", this.product_entitlement_association);
        writer.writeNumberValue("remainingterms", this.remainingterms);
        writer.writeBooleanValue("restrictcasecreation", this.restrictcasecreation);
        writer.writeObjectValue<Sla>("slaid", this.slaid);
        writer.writeStringValue("stageid", this.stageid);
        writer.writeDateValue("startdate", this.startdate);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("totalterms", this.totalterms);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("traversedpath", this.traversedpath);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the slaid property value. 
     * @returns a sla
     */
    public get slaid() {
        return this._slaid;
    };
    /**
     * Sets the slaid property value. 
     * @param value Value to set for the slaid property.
     */
    public set slaid(value: Sla | undefined) {
        this._slaid = value;
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
     * Gets the startdate property value. 
     * @returns a Date
     */
    public get startdate() {
        return this._startdate;
    };
    /**
     * Sets the startdate property value. 
     * @param value Value to set for the startdate property.
     */
    public set startdate(value: Date | undefined) {
        this._startdate = value;
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
     * Gets the totalterms property value. 
     * @returns a int64
     */
    public get totalterms() {
        return this._totalterms;
    };
    /**
     * Sets the totalterms property value. 
     * @param value Value to set for the totalterms property.
     */
    public set totalterms(value: number | undefined) {
        this._totalterms = value;
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
