import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createEntitlementFromDiscriminatorValue} from './createEntitlementFromDiscriminatorValue';
import {createEntitlementtemplatechannelFromDiscriminatorValue} from './createEntitlementtemplatechannelFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createIncidentresolutionFromDiscriminatorValue} from './createIncidentresolutionFromDiscriminatorValue';
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
import {createOpportunitycloseFromDiscriminatorValue} from './createOpportunitycloseFromDiscriminatorValue';
import {createOrdercloseFromDiscriminatorValue} from './createOrdercloseFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
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
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Email, Entitlement, Entitlementtemplatechannel, Fax, Incidentresolution, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Opportunityclose, Orderclose, Organization, Phonecall, Principalobjectattributeaccess, Processsession, Product, Quoteclose, Recurringappointmentmaster, Serviceappointment, Sla, Socialactivity, Syncerror, Systemuser, Task, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Entitlementtemplate extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __slaid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _allocationtypecode?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _decreaseremainingon?: number | undefined;
    private _description?: string | undefined;
    private _enddate?: Date | undefined;
    private _entitlementtemplate_ActivityPointers?: Activitypointer[] | undefined;
    private _entitlementtemplate_Annotations?: Annotation[] | undefined;
    private _entitlementtemplate_Appointments?: Appointment[] | undefined;
    private _entitlementtemplate_AsyncOperations?: Asyncoperation[] | undefined;
    private _entitlementtemplate_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _entitlementtemplate_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _entitlementtemplate_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _entitlementtemplate_Emails?: Email[] | undefined;
    private _entitlementtemplate_entitlementchannel_entitlementtemplateid?: Entitlementtemplatechannel[] | undefined;
    private _entitlementtemplate_Faxes?: Fax[] | undefined;
    private _entitlementtemplate_IncidentResolutions?: Incidentresolution[] | undefined;
    private _entitlementtemplate_Letters?: Letter[] | undefined;
    private _entitlementTemplate_MailboxTrackingFolder?: Mailboxtrackingfolder[] | undefined;
    private _entitlementtemplate_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _entitlementtemplate_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _entitlementtemplate_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _entitlementtemplate_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _entitlementtemplate_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _entitlementtemplate_msfp_alerts?: Msfp_alert[] | undefined;
    private _entitlementtemplate_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _entitlementtemplate_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _entitlementtemplate_OpportunityCloses?: Opportunityclose[] | undefined;
    private _entitlementtemplate_OrderCloses?: Orderclose[] | undefined;
    private _entitlementtemplate_PhoneCalls?: Phonecall[] | undefined;
    private _entitlementtemplate_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _entitlementtemplate_ProcessSession?: Processsession[] | undefined;
    private _entitlementtemplate_QuoteCloses?: Quoteclose[] | undefined;
    private _entitlementtemplate_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _entitlementtemplate_ServiceAppointments?: Serviceappointment[] | undefined;
    private _entitlementtemplate_SocialActivities?: Socialactivity[] | undefined;
    private _entitlementTemplate_SyncErrors?: Syncerror[] | undefined;
    private _entitlementtemplate_Tasks?: Task[] | undefined;
    private _entitlementtemplateid?: string | undefined;
    private _entitlementtemplateid_RelationShip?: Entitlement[] | undefined;
    private _entitytype?: number | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _kbaccesslevel?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _product_entitlementtemplate_association?: Product[] | undefined;
    private _restrictcasecreation?: boolean | undefined;
    private _slaid?: Sla | undefined;
    private _startdate?: Date | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _totalterms?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
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
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
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
     * Instantiates a new entitlementtemplate and sets the default values.
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
     * Gets the entitlementtemplate_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get entitlementtemplate_ActivityPointers() {
        return this._entitlementtemplate_ActivityPointers;
    };
    /**
     * Sets the entitlementtemplate_ActivityPointers property value. 
     * @param value Value to set for the entitlementtemplate_ActivityPointers property.
     */
    public set entitlementtemplate_ActivityPointers(value: Activitypointer[] | undefined) {
        this._entitlementtemplate_ActivityPointers = value;
    };
    /**
     * Gets the entitlementtemplate_Annotations property value. 
     * @returns a annotation
     */
    public get entitlementtemplate_Annotations() {
        return this._entitlementtemplate_Annotations;
    };
    /**
     * Sets the entitlementtemplate_Annotations property value. 
     * @param value Value to set for the entitlementtemplate_Annotations property.
     */
    public set entitlementtemplate_Annotations(value: Annotation[] | undefined) {
        this._entitlementtemplate_Annotations = value;
    };
    /**
     * Gets the entitlementtemplate_Appointments property value. 
     * @returns a appointment
     */
    public get entitlementtemplate_Appointments() {
        return this._entitlementtemplate_Appointments;
    };
    /**
     * Sets the entitlementtemplate_Appointments property value. 
     * @param value Value to set for the entitlementtemplate_Appointments property.
     */
    public set entitlementtemplate_Appointments(value: Appointment[] | undefined) {
        this._entitlementtemplate_Appointments = value;
    };
    /**
     * Gets the entitlementtemplate_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get entitlementtemplate_AsyncOperations() {
        return this._entitlementtemplate_AsyncOperations;
    };
    /**
     * Sets the entitlementtemplate_AsyncOperations property value. 
     * @param value Value to set for the entitlementtemplate_AsyncOperations property.
     */
    public set entitlementtemplate_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._entitlementtemplate_AsyncOperations = value;
    };
    /**
     * Gets the entitlementtemplate_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get entitlementtemplate_BulkDeleteFailures() {
        return this._entitlementtemplate_BulkDeleteFailures;
    };
    /**
     * Sets the entitlementtemplate_BulkDeleteFailures property value. 
     * @param value Value to set for the entitlementtemplate_BulkDeleteFailures property.
     */
    public set entitlementtemplate_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._entitlementtemplate_BulkDeleteFailures = value;
    };
    /**
     * Gets the entitlementtemplate_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get entitlementtemplate_DuplicateBaseRecord() {
        return this._entitlementtemplate_DuplicateBaseRecord;
    };
    /**
     * Sets the entitlementtemplate_DuplicateBaseRecord property value. 
     * @param value Value to set for the entitlementtemplate_DuplicateBaseRecord property.
     */
    public set entitlementtemplate_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._entitlementtemplate_DuplicateBaseRecord = value;
    };
    /**
     * Gets the entitlementtemplate_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get entitlementtemplate_DuplicateMatchingRecord() {
        return this._entitlementtemplate_DuplicateMatchingRecord;
    };
    /**
     * Sets the entitlementtemplate_DuplicateMatchingRecord property value. 
     * @param value Value to set for the entitlementtemplate_DuplicateMatchingRecord property.
     */
    public set entitlementtemplate_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._entitlementtemplate_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the entitlementtemplate_Emails property value. 
     * @returns a email
     */
    public get entitlementtemplate_Emails() {
        return this._entitlementtemplate_Emails;
    };
    /**
     * Sets the entitlementtemplate_Emails property value. 
     * @param value Value to set for the entitlementtemplate_Emails property.
     */
    public set entitlementtemplate_Emails(value: Email[] | undefined) {
        this._entitlementtemplate_Emails = value;
    };
    /**
     * Gets the entitlementtemplate_entitlementchannel_entitlementtemplateid property value. 
     * @returns a entitlementtemplatechannel
     */
    public get entitlementtemplate_entitlementchannel_entitlementtemplateid() {
        return this._entitlementtemplate_entitlementchannel_entitlementtemplateid;
    };
    /**
     * Sets the entitlementtemplate_entitlementchannel_entitlementtemplateid property value. 
     * @param value Value to set for the entitlementtemplate_entitlementchannel_entitlementtemplateid property.
     */
    public set entitlementtemplate_entitlementchannel_entitlementtemplateid(value: Entitlementtemplatechannel[] | undefined) {
        this._entitlementtemplate_entitlementchannel_entitlementtemplateid = value;
    };
    /**
     * Gets the entitlementtemplate_Faxes property value. 
     * @returns a fax
     */
    public get entitlementtemplate_Faxes() {
        return this._entitlementtemplate_Faxes;
    };
    /**
     * Sets the entitlementtemplate_Faxes property value. 
     * @param value Value to set for the entitlementtemplate_Faxes property.
     */
    public set entitlementtemplate_Faxes(value: Fax[] | undefined) {
        this._entitlementtemplate_Faxes = value;
    };
    /**
     * Gets the entitlementtemplate_IncidentResolutions property value. 
     * @returns a incidentresolution
     */
    public get entitlementtemplate_IncidentResolutions() {
        return this._entitlementtemplate_IncidentResolutions;
    };
    /**
     * Sets the entitlementtemplate_IncidentResolutions property value. 
     * @param value Value to set for the entitlementtemplate_IncidentResolutions property.
     */
    public set entitlementtemplate_IncidentResolutions(value: Incidentresolution[] | undefined) {
        this._entitlementtemplate_IncidentResolutions = value;
    };
    /**
     * Gets the entitlementtemplate_Letters property value. 
     * @returns a letter
     */
    public get entitlementtemplate_Letters() {
        return this._entitlementtemplate_Letters;
    };
    /**
     * Sets the entitlementtemplate_Letters property value. 
     * @param value Value to set for the entitlementtemplate_Letters property.
     */
    public set entitlementtemplate_Letters(value: Letter[] | undefined) {
        this._entitlementtemplate_Letters = value;
    };
    /**
     * Gets the entitlementTemplate_MailboxTrackingFolder property value. 
     * @returns a mailboxtrackingfolder
     */
    public get entitlementTemplate_MailboxTrackingFolder() {
        return this._entitlementTemplate_MailboxTrackingFolder;
    };
    /**
     * Sets the entitlementTemplate_MailboxTrackingFolder property value. 
     * @param value Value to set for the EntitlementTemplate_MailboxTrackingFolder property.
     */
    public set entitlementTemplate_MailboxTrackingFolder(value: Mailboxtrackingfolder[] | undefined) {
        this._entitlementTemplate_MailboxTrackingFolder = value;
    };
    /**
     * Gets the entitlementtemplate_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get entitlementtemplate_msdyn_approvals() {
        return this._entitlementtemplate_msdyn_approvals;
    };
    /**
     * Sets the entitlementtemplate_msdyn_approvals property value. 
     * @param value Value to set for the entitlementtemplate_msdyn_approvals property.
     */
    public set entitlementtemplate_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._entitlementtemplate_msdyn_approvals = value;
    };
    /**
     * Gets the entitlementtemplate_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get entitlementtemplate_msdyn_bookingalerts() {
        return this._entitlementtemplate_msdyn_bookingalerts;
    };
    /**
     * Sets the entitlementtemplate_msdyn_bookingalerts property value. 
     * @param value Value to set for the entitlementtemplate_msdyn_bookingalerts property.
     */
    public set entitlementtemplate_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._entitlementtemplate_msdyn_bookingalerts = value;
    };
    /**
     * Gets the entitlementtemplate_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get entitlementtemplate_msdyn_ocliveworkitems() {
        return this._entitlementtemplate_msdyn_ocliveworkitems;
    };
    /**
     * Sets the entitlementtemplate_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the entitlementtemplate_msdyn_ocliveworkitems property.
     */
    public set entitlementtemplate_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._entitlementtemplate_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the entitlementtemplate_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get entitlementtemplate_msdyn_ocoutboundmessages() {
        return this._entitlementtemplate_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the entitlementtemplate_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the entitlementtemplate_msdyn_ocoutboundmessages property.
     */
    public set entitlementtemplate_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._entitlementtemplate_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the entitlementtemplate_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get entitlementtemplate_msdyn_ocsessions() {
        return this._entitlementtemplate_msdyn_ocsessions;
    };
    /**
     * Sets the entitlementtemplate_msdyn_ocsessions property value. 
     * @param value Value to set for the entitlementtemplate_msdyn_ocsessions property.
     */
    public set entitlementtemplate_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._entitlementtemplate_msdyn_ocsessions = value;
    };
    /**
     * Gets the entitlementtemplate_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get entitlementtemplate_msfp_alerts() {
        return this._entitlementtemplate_msfp_alerts;
    };
    /**
     * Sets the entitlementtemplate_msfp_alerts property value. 
     * @param value Value to set for the entitlementtemplate_msfp_alerts property.
     */
    public set entitlementtemplate_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._entitlementtemplate_msfp_alerts = value;
    };
    /**
     * Gets the entitlementtemplate_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get entitlementtemplate_msfp_surveyinvites() {
        return this._entitlementtemplate_msfp_surveyinvites;
    };
    /**
     * Sets the entitlementtemplate_msfp_surveyinvites property value. 
     * @param value Value to set for the entitlementtemplate_msfp_surveyinvites property.
     */
    public set entitlementtemplate_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._entitlementtemplate_msfp_surveyinvites = value;
    };
    /**
     * Gets the entitlementtemplate_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get entitlementtemplate_msfp_surveyresponses() {
        return this._entitlementtemplate_msfp_surveyresponses;
    };
    /**
     * Sets the entitlementtemplate_msfp_surveyresponses property value. 
     * @param value Value to set for the entitlementtemplate_msfp_surveyresponses property.
     */
    public set entitlementtemplate_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._entitlementtemplate_msfp_surveyresponses = value;
    };
    /**
     * Gets the entitlementtemplate_OpportunityCloses property value. 
     * @returns a opportunityclose
     */
    public get entitlementtemplate_OpportunityCloses() {
        return this._entitlementtemplate_OpportunityCloses;
    };
    /**
     * Sets the entitlementtemplate_OpportunityCloses property value. 
     * @param value Value to set for the entitlementtemplate_OpportunityCloses property.
     */
    public set entitlementtemplate_OpportunityCloses(value: Opportunityclose[] | undefined) {
        this._entitlementtemplate_OpportunityCloses = value;
    };
    /**
     * Gets the entitlementtemplate_OrderCloses property value. 
     * @returns a orderclose
     */
    public get entitlementtemplate_OrderCloses() {
        return this._entitlementtemplate_OrderCloses;
    };
    /**
     * Sets the entitlementtemplate_OrderCloses property value. 
     * @param value Value to set for the entitlementtemplate_OrderCloses property.
     */
    public set entitlementtemplate_OrderCloses(value: Orderclose[] | undefined) {
        this._entitlementtemplate_OrderCloses = value;
    };
    /**
     * Gets the entitlementtemplate_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get entitlementtemplate_PhoneCalls() {
        return this._entitlementtemplate_PhoneCalls;
    };
    /**
     * Sets the entitlementtemplate_PhoneCalls property value. 
     * @param value Value to set for the entitlementtemplate_PhoneCalls property.
     */
    public set entitlementtemplate_PhoneCalls(value: Phonecall[] | undefined) {
        this._entitlementtemplate_PhoneCalls = value;
    };
    /**
     * Gets the entitlementtemplate_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get entitlementtemplate_PrincipalObjectAttributeAccesses() {
        return this._entitlementtemplate_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the entitlementtemplate_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the entitlementtemplate_PrincipalObjectAttributeAccesses property.
     */
    public set entitlementtemplate_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._entitlementtemplate_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the entitlementtemplate_ProcessSession property value. 
     * @returns a processsession
     */
    public get entitlementtemplate_ProcessSession() {
        return this._entitlementtemplate_ProcessSession;
    };
    /**
     * Sets the entitlementtemplate_ProcessSession property value. 
     * @param value Value to set for the entitlementtemplate_ProcessSession property.
     */
    public set entitlementtemplate_ProcessSession(value: Processsession[] | undefined) {
        this._entitlementtemplate_ProcessSession = value;
    };
    /**
     * Gets the entitlementtemplate_QuoteCloses property value. 
     * @returns a quoteclose
     */
    public get entitlementtemplate_QuoteCloses() {
        return this._entitlementtemplate_QuoteCloses;
    };
    /**
     * Sets the entitlementtemplate_QuoteCloses property value. 
     * @param value Value to set for the entitlementtemplate_QuoteCloses property.
     */
    public set entitlementtemplate_QuoteCloses(value: Quoteclose[] | undefined) {
        this._entitlementtemplate_QuoteCloses = value;
    };
    /**
     * Gets the entitlementtemplate_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get entitlementtemplate_RecurringAppointmentMasters() {
        return this._entitlementtemplate_RecurringAppointmentMasters;
    };
    /**
     * Sets the entitlementtemplate_RecurringAppointmentMasters property value. 
     * @param value Value to set for the entitlementtemplate_RecurringAppointmentMasters property.
     */
    public set entitlementtemplate_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._entitlementtemplate_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the entitlementtemplate_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get entitlementtemplate_ServiceAppointments() {
        return this._entitlementtemplate_ServiceAppointments;
    };
    /**
     * Sets the entitlementtemplate_ServiceAppointments property value. 
     * @param value Value to set for the entitlementtemplate_ServiceAppointments property.
     */
    public set entitlementtemplate_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._entitlementtemplate_ServiceAppointments = value;
    };
    /**
     * Gets the entitlementtemplate_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get entitlementtemplate_SocialActivities() {
        return this._entitlementtemplate_SocialActivities;
    };
    /**
     * Sets the entitlementtemplate_SocialActivities property value. 
     * @param value Value to set for the entitlementtemplate_SocialActivities property.
     */
    public set entitlementtemplate_SocialActivities(value: Socialactivity[] | undefined) {
        this._entitlementtemplate_SocialActivities = value;
    };
    /**
     * Gets the entitlementTemplate_SyncErrors property value. 
     * @returns a syncerror
     */
    public get entitlementTemplate_SyncErrors() {
        return this._entitlementTemplate_SyncErrors;
    };
    /**
     * Sets the entitlementTemplate_SyncErrors property value. 
     * @param value Value to set for the EntitlementTemplate_SyncErrors property.
     */
    public set entitlementTemplate_SyncErrors(value: Syncerror[] | undefined) {
        this._entitlementTemplate_SyncErrors = value;
    };
    /**
     * Gets the entitlementtemplate_Tasks property value. 
     * @returns a task
     */
    public get entitlementtemplate_Tasks() {
        return this._entitlementtemplate_Tasks;
    };
    /**
     * Sets the entitlementtemplate_Tasks property value. 
     * @param value Value to set for the entitlementtemplate_Tasks property.
     */
    public set entitlementtemplate_Tasks(value: Task[] | undefined) {
        this._entitlementtemplate_Tasks = value;
    };
    /**
     * Gets the entitlementtemplateid property value. 
     * @returns a string
     */
    public get entitlementtemplateid() {
        return this._entitlementtemplateid;
    };
    /**
     * Sets the entitlementtemplateid property value. 
     * @param value Value to set for the entitlementtemplateid property.
     */
    public set entitlementtemplateid(value: string | undefined) {
        this._entitlementtemplateid = value;
    };
    /**
     * Gets the entitlementtemplateid_RelationShip property value. 
     * @returns a entitlement
     */
    public get entitlementtemplateid_RelationShip() {
        return this._entitlementtemplateid_RelationShip;
    };
    /**
     * Sets the entitlementtemplateid_RelationShip property value. 
     * @param value Value to set for the entitlementtemplateid_RelationShip property.
     */
    public set entitlementtemplateid_RelationShip(value: Entitlement[] | undefined) {
        this._entitlementtemplateid_RelationShip = value;
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
            "_createdby_value": (o, n) => { (o as unknown as Entitlementtemplate)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Entitlementtemplate)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Entitlementtemplate)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Entitlementtemplate)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Entitlementtemplate)._organizationid_value = n.getStringValue(); },
            "_slaid_value": (o, n) => { (o as unknown as Entitlementtemplate)._slaid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Entitlementtemplate)._transactioncurrencyid_value = n.getStringValue(); },
            "allocationtypecode": (o, n) => { (o as unknown as Entitlementtemplate).allocationtypecode = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Entitlementtemplate).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Entitlementtemplate).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Entitlementtemplate).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "decreaseremainingon": (o, n) => { (o as unknown as Entitlementtemplate).decreaseremainingon = n.getNumberValue(); },
            "description": (o, n) => { (o as unknown as Entitlementtemplate).description = n.getStringValue(); },
            "enddate": (o, n) => { (o as unknown as Entitlementtemplate).enddate = n.getDateValue(); },
            "entitlementtemplate_ActivityPointers": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "entitlementtemplate_Annotations": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "entitlementtemplate_Appointments": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "entitlementtemplate_AsyncOperations": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "entitlementtemplate_BulkDeleteFailures": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "entitlementtemplate_DuplicateBaseRecord": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "entitlementtemplate_DuplicateMatchingRecord": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "entitlementtemplate_Emails": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "entitlementtemplate_entitlementchannel_entitlementtemplateid": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_entitlementchannel_entitlementtemplateid = n.getCollectionOfObjectValues<Entitlementtemplatechannel>(createEntitlementtemplatechannelFromDiscriminatorValue); },
            "entitlementtemplate_Faxes": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "entitlementtemplate_IncidentResolutions": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_IncidentResolutions = n.getCollectionOfObjectValues<Incidentresolution>(createIncidentresolutionFromDiscriminatorValue); },
            "entitlementtemplate_Letters": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "entitlementTemplate_MailboxTrackingFolder": (o, n) => { (o as unknown as Entitlementtemplate).entitlementTemplate_MailboxTrackingFolder = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "entitlementtemplate_msdyn_approvals": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "entitlementtemplate_msdyn_bookingalerts": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "entitlementtemplate_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "entitlementtemplate_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "entitlementtemplate_msdyn_ocsessions": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "entitlementtemplate_msfp_alerts": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "entitlementtemplate_msfp_surveyinvites": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "entitlementtemplate_msfp_surveyresponses": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "entitlementtemplate_OpportunityCloses": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_OpportunityCloses = n.getCollectionOfObjectValues<Opportunityclose>(createOpportunitycloseFromDiscriminatorValue); },
            "entitlementtemplate_OrderCloses": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_OrderCloses = n.getCollectionOfObjectValues<Orderclose>(createOrdercloseFromDiscriminatorValue); },
            "entitlementtemplate_PhoneCalls": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "entitlementtemplate_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "entitlementtemplate_ProcessSession": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "entitlementtemplate_QuoteCloses": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_QuoteCloses = n.getCollectionOfObjectValues<Quoteclose>(createQuotecloseFromDiscriminatorValue); },
            "entitlementtemplate_RecurringAppointmentMasters": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "entitlementtemplate_ServiceAppointments": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "entitlementtemplate_SocialActivities": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "entitlementTemplate_SyncErrors": (o, n) => { (o as unknown as Entitlementtemplate).entitlementTemplate_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "entitlementtemplate_Tasks": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplate_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "entitlementtemplateid": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplateid = n.getStringValue(); },
            "entitlementtemplateid_RelationShip": (o, n) => { (o as unknown as Entitlementtemplate).entitlementtemplateid_RelationShip = n.getCollectionOfObjectValues<Entitlement>(createEntitlementFromDiscriminatorValue); },
            "entitytype": (o, n) => { (o as unknown as Entitlementtemplate).entitytype = n.getNumberValue(); },
            "exchangerate": (o, n) => { (o as unknown as Entitlementtemplate).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Entitlementtemplate).importsequencenumber = n.getNumberValue(); },
            "kbaccesslevel": (o, n) => { (o as unknown as Entitlementtemplate).kbaccesslevel = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Entitlementtemplate).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Entitlementtemplate).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Entitlementtemplate).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Entitlementtemplate).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Entitlementtemplate).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Entitlementtemplate).overriddencreatedon = n.getDateValue(); },
            "product_entitlementtemplate_association": (o, n) => { (o as unknown as Entitlementtemplate).product_entitlementtemplate_association = n.getCollectionOfObjectValues<Product>(createProductFromDiscriminatorValue); },
            "restrictcasecreation": (o, n) => { (o as unknown as Entitlementtemplate).restrictcasecreation = n.getBooleanValue(); },
            "slaid": (o, n) => { (o as unknown as Entitlementtemplate).slaid = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "startdate": (o, n) => { (o as unknown as Entitlementtemplate).startdate = n.getDateValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Entitlementtemplate).timezoneruleversionnumber = n.getNumberValue(); },
            "totalterms": (o, n) => { (o as unknown as Entitlementtemplate).totalterms = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Entitlementtemplate).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Entitlementtemplate).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Entitlementtemplate).versionnumber = n.getNumberValue(); },
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
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
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
     * Gets the product_entitlementtemplate_association property value. 
     * @returns a product
     */
    public get product_entitlementtemplate_association() {
        return this._product_entitlementtemplate_association;
    };
    /**
     * Sets the product_entitlementtemplate_association property value. 
     * @param value Value to set for the product_entitlementtemplate_association property.
     */
    public set product_entitlementtemplate_association(value: Product[] | undefined) {
        this._product_entitlementtemplate_association = value;
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
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_slaid_value", this._slaid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeNumberValue("allocationtypecode", this.allocationtypecode);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("decreaseremainingon", this.decreaseremainingon);
        writer.writeStringValue("description", this.description);
        writer.writeDateValue("enddate", this.enddate);
        writer.writeCollectionOfObjectValues<Activitypointer>("entitlementtemplate_ActivityPointers", this.entitlementtemplate_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("entitlementtemplate_Annotations", this.entitlementtemplate_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("entitlementtemplate_Appointments", this.entitlementtemplate_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("entitlementtemplate_AsyncOperations", this.entitlementtemplate_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("entitlementtemplate_BulkDeleteFailures", this.entitlementtemplate_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("entitlementtemplate_DuplicateBaseRecord", this.entitlementtemplate_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("entitlementtemplate_DuplicateMatchingRecord", this.entitlementtemplate_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("entitlementtemplate_Emails", this.entitlementtemplate_Emails);
        writer.writeCollectionOfObjectValues<Entitlementtemplatechannel>("entitlementtemplate_entitlementchannel_entitlementtemplateid", this.entitlementtemplate_entitlementchannel_entitlementtemplateid);
        writer.writeCollectionOfObjectValues<Fax>("entitlementtemplate_Faxes", this.entitlementtemplate_Faxes);
        writer.writeCollectionOfObjectValues<Incidentresolution>("entitlementtemplate_IncidentResolutions", this.entitlementtemplate_IncidentResolutions);
        writer.writeCollectionOfObjectValues<Letter>("entitlementtemplate_Letters", this.entitlementtemplate_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("entitlementTemplate_MailboxTrackingFolder", this.entitlementTemplate_MailboxTrackingFolder);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("entitlementtemplate_msdyn_approvals", this.entitlementtemplate_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("entitlementtemplate_msdyn_bookingalerts", this.entitlementtemplate_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("entitlementtemplate_msdyn_ocliveworkitems", this.entitlementtemplate_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("entitlementtemplate_msdyn_ocoutboundmessages", this.entitlementtemplate_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("entitlementtemplate_msdyn_ocsessions", this.entitlementtemplate_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("entitlementtemplate_msfp_alerts", this.entitlementtemplate_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("entitlementtemplate_msfp_surveyinvites", this.entitlementtemplate_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("entitlementtemplate_msfp_surveyresponses", this.entitlementtemplate_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Opportunityclose>("entitlementtemplate_OpportunityCloses", this.entitlementtemplate_OpportunityCloses);
        writer.writeCollectionOfObjectValues<Orderclose>("entitlementtemplate_OrderCloses", this.entitlementtemplate_OrderCloses);
        writer.writeCollectionOfObjectValues<Phonecall>("entitlementtemplate_PhoneCalls", this.entitlementtemplate_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("entitlementtemplate_PrincipalObjectAttributeAccesses", this.entitlementtemplate_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("entitlementtemplate_ProcessSession", this.entitlementtemplate_ProcessSession);
        writer.writeCollectionOfObjectValues<Quoteclose>("entitlementtemplate_QuoteCloses", this.entitlementtemplate_QuoteCloses);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("entitlementtemplate_RecurringAppointmentMasters", this.entitlementtemplate_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("entitlementtemplate_ServiceAppointments", this.entitlementtemplate_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("entitlementtemplate_SocialActivities", this.entitlementtemplate_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("entitlementTemplate_SyncErrors", this.entitlementTemplate_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("entitlementtemplate_Tasks", this.entitlementtemplate_Tasks);
        writer.writeStringValue("entitlementtemplateid", this.entitlementtemplateid);
        writer.writeCollectionOfObjectValues<Entitlement>("entitlementtemplateid_RelationShip", this.entitlementtemplateid_RelationShip);
        writer.writeNumberValue("entitytype", this.entitytype);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeNumberValue("kbaccesslevel", this.kbaccesslevel);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeCollectionOfObjectValues<Product>("product_entitlementtemplate_association", this.product_entitlementtemplate_association);
        writer.writeBooleanValue("restrictcasecreation", this.restrictcasecreation);
        writer.writeObjectValue<Sla>("slaid", this.slaid);
        writer.writeDateValue("startdate", this.startdate);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("totalterms", this.totalterms);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
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
