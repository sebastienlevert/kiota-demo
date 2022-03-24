import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createCalendarFromDiscriminatorValue} from './createCalendarFromDiscriminatorValue';
import {createCalendarruleFromDiscriminatorValue} from './createCalendarruleFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
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
import {createMsdyn_requirementgroupFromDiscriminatorValue} from './createMsdyn_requirementgroupFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createOpportunitycloseFromDiscriminatorValue} from './createOpportunitycloseFromDiscriminatorValue';
import {createOrdercloseFromDiscriminatorValue} from './createOrdercloseFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPlugintypeFromDiscriminatorValue} from './createPlugintypeFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQuotecloseFromDiscriminatorValue} from './createQuotecloseFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createResourcespecFromDiscriminatorValue} from './createResourcespecFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {Account, Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Calendar, Calendarrule, Contact, Crmbaseentity, Duplicaterecord, Email, Fax, Incidentresolution, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_requirementgroup, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Opportunityclose, Orderclose, Organization, Phonecall, Plugintype, Principalobjectattributeaccess, Processsession, Quoteclose, Recurringappointmentmaster, Resourcespec, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Service extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_requirementgroupid_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __resourcespecid_value?: string | undefined;
    private __strategyid_value?: string | undefined;
    private _anchoroffset?: number | undefined;
    private _calendarid?: string | undefined;
    private _calendarid_calendar?: Calendar | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _duration?: number | undefined;
    private _granularity?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _initialstatuscode?: number | undefined;
    private _isschedulable?: boolean | undefined;
    private _isvisible?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_approval_service_serviceid?: Msdyn_approval[] | undefined;
    private _msdyn_bookingalert_service_serviceid?: Msdyn_bookingalert[] | undefined;
    private _msdyn_ocliveworkitem_service_serviceid?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_ocoutboundmessage_service_serviceid?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_ocsession_service_serviceid?: Msdyn_ocsession[] | undefined;
    private _msdyn_requirementgroupid?: Msdyn_requirementgroup | undefined;
    private _msdyn_SchedulingEngine?: number | undefined;
    private _msfp_alert_service_serviceid?: Msfp_alert[] | undefined;
    private _msfp_surveyinvite_service_serviceid?: Msfp_surveyinvite[] | undefined;
    private _msfp_surveyresponse_service_serviceid?: Msfp_surveyresponse[] | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _resourcespecid?: Resourcespec | undefined;
    private _service_accounts?: Account[] | undefined;
    private _service_activity_pointers?: Activitypointer[] | undefined;
    private _service_Annotation?: Annotation[] | undefined;
    private _service_appointments?: Appointment[] | undefined;
    private _service_AsyncOperations?: Asyncoperation[] | undefined;
    private _service_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _service_calendar_rules?: Calendarrule[] | undefined;
    private _service_contacts?: Contact[] | undefined;
    private _service_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _service_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _service_emails?: Email[] | undefined;
    private _service_faxes?: Fax[] | undefined;
    private _service_incidentresolutions?: Incidentresolution[] | undefined;
    private _service_letters?: Letter[] | undefined;
    private _service_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _service_opportunityclose?: Opportunityclose[] | undefined;
    private _service_orderclose?: Orderclose[] | undefined;
    private _service_phonecalls?: Phonecall[] | undefined;
    private _service_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _service_ProcessSessions?: Processsession[] | undefined;
    private _service_quoteclose?: Quoteclose[] | undefined;
    private _service_recurringappointmentmasters?: Recurringappointmentmaster[] | undefined;
    private _service_service_appointments?: Serviceappointment[] | undefined;
    private _service_socialactivities?: Socialactivity[] | undefined;
    private _service_SyncErrors?: Syncerror[] | undefined;
    private _service_tasks?: Task[] | undefined;
    private _serviceid?: string | undefined;
    private _showresources?: boolean | undefined;
    private _strategyid?: Plugintype | undefined;
    private _timezoneruleversionnumber?: number | undefined;
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
     * Gets the _msdyn_requirementgroupid_value property value. 
     * @returns a string
     */
    public get _msdyn_requirementgroupid_value() {
        return this.__msdyn_requirementgroupid_value;
    };
    /**
     * Sets the _msdyn_requirementgroupid_value property value. 
     * @param value Value to set for the _msdyn_requirementgroupid_value property.
     */
    public set _msdyn_requirementgroupid_value(value: string | undefined) {
        this.__msdyn_requirementgroupid_value = value;
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
     * Gets the _strategyid_value property value. 
     * @returns a string
     */
    public get _strategyid_value() {
        return this.__strategyid_value;
    };
    /**
     * Sets the _strategyid_value property value. 
     * @param value Value to set for the _strategyid_value property.
     */
    public set _strategyid_value(value: string | undefined) {
        this.__strategyid_value = value;
    };
    /**
     * Gets the anchoroffset property value. 
     * @returns a integer
     */
    public get anchoroffset() {
        return this._anchoroffset;
    };
    /**
     * Sets the anchoroffset property value. 
     * @param value Value to set for the anchoroffset property.
     */
    public set anchoroffset(value: number | undefined) {
        this._anchoroffset = value;
    };
    /**
     * Gets the calendarid property value. 
     * @returns a string
     */
    public get calendarid() {
        return this._calendarid;
    };
    /**
     * Sets the calendarid property value. 
     * @param value Value to set for the calendarid property.
     */
    public set calendarid(value: string | undefined) {
        this._calendarid = value;
    };
    /**
     * Gets the calendarid_calendar property value. 
     * @returns a calendar
     */
    public get calendarid_calendar() {
        return this._calendarid_calendar;
    };
    /**
     * Sets the calendarid_calendar property value. 
     * @param value Value to set for the calendarid_calendar property.
     */
    public set calendarid_calendar(value: Calendar | undefined) {
        this._calendarid_calendar = value;
    };
    /**
     * Instantiates a new service and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Service)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Service)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Service)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Service)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_requirementgroupid_value": (o, n) => { (o as unknown as Service)._msdyn_requirementgroupid_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Service)._organizationid_value = n.getStringValue(); },
            "_resourcespecid_value": (o, n) => { (o as unknown as Service)._resourcespecid_value = n.getStringValue(); },
            "_strategyid_value": (o, n) => { (o as unknown as Service)._strategyid_value = n.getStringValue(); },
            "anchoroffset": (o, n) => { (o as unknown as Service).anchoroffset = n.getNumberValue(); },
            "calendarid": (o, n) => { (o as unknown as Service).calendarid = n.getStringValue(); },
            "calendarid_calendar": (o, n) => { (o as unknown as Service).calendarid_calendar = n.getObjectValue<Calendar>(createCalendarFromDiscriminatorValue); },
            "createdby": (o, n) => { (o as unknown as Service).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Service).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Service).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Service).description = n.getStringValue(); },
            "duration": (o, n) => { (o as unknown as Service).duration = n.getNumberValue(); },
            "granularity": (o, n) => { (o as unknown as Service).granularity = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Service).importsequencenumber = n.getNumberValue(); },
            "initialstatuscode": (o, n) => { (o as unknown as Service).initialstatuscode = n.getNumberValue(); },
            "isschedulable": (o, n) => { (o as unknown as Service).isschedulable = n.getBooleanValue(); },
            "isvisible": (o, n) => { (o as unknown as Service).isvisible = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Service).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Service).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Service).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_approval_service_serviceid": (o, n) => { (o as unknown as Service).msdyn_approval_service_serviceid = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_bookingalert_service_serviceid": (o, n) => { (o as unknown as Service).msdyn_bookingalert_service_serviceid = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_ocliveworkitem_service_serviceid": (o, n) => { (o as unknown as Service).msdyn_ocliveworkitem_service_serviceid = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_ocoutboundmessage_service_serviceid": (o, n) => { (o as unknown as Service).msdyn_ocoutboundmessage_service_serviceid = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_ocsession_service_serviceid": (o, n) => { (o as unknown as Service).msdyn_ocsession_service_serviceid = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_requirementgroupid": (o, n) => { (o as unknown as Service).msdyn_requirementgroupid = n.getObjectValue<Msdyn_requirementgroup>(createMsdyn_requirementgroupFromDiscriminatorValue); },
            "msdyn_SchedulingEngine": (o, n) => { (o as unknown as Service).msdyn_SchedulingEngine = n.getNumberValue(); },
            "msfp_alert_service_serviceid": (o, n) => { (o as unknown as Service).msfp_alert_service_serviceid = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msfp_surveyinvite_service_serviceid": (o, n) => { (o as unknown as Service).msfp_surveyinvite_service_serviceid = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msfp_surveyresponse_service_serviceid": (o, n) => { (o as unknown as Service).msfp_surveyresponse_service_serviceid = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Service).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Service).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Service).overriddencreatedon = n.getDateValue(); },
            "resourcespecid": (o, n) => { (o as unknown as Service).resourcespecid = n.getObjectValue<Resourcespec>(createResourcespecFromDiscriminatorValue); },
            "service_accounts": (o, n) => { (o as unknown as Service).service_accounts = n.getCollectionOfObjectValues<Account>(createAccountFromDiscriminatorValue); },
            "service_activity_pointers": (o, n) => { (o as unknown as Service).service_activity_pointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "service_Annotation": (o, n) => { (o as unknown as Service).service_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "service_appointments": (o, n) => { (o as unknown as Service).service_appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "service_AsyncOperations": (o, n) => { (o as unknown as Service).service_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "service_BulkDeleteFailures": (o, n) => { (o as unknown as Service).service_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "service_calendar_rules": (o, n) => { (o as unknown as Service).service_calendar_rules = n.getCollectionOfObjectValues<Calendarrule>(createCalendarruleFromDiscriminatorValue); },
            "service_contacts": (o, n) => { (o as unknown as Service).service_contacts = n.getCollectionOfObjectValues<Contact>(createContactFromDiscriminatorValue); },
            "service_DuplicateBaseRecord": (o, n) => { (o as unknown as Service).service_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "service_DuplicateMatchingRecord": (o, n) => { (o as unknown as Service).service_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "service_emails": (o, n) => { (o as unknown as Service).service_emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "service_faxes": (o, n) => { (o as unknown as Service).service_faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "service_incidentresolutions": (o, n) => { (o as unknown as Service).service_incidentresolutions = n.getCollectionOfObjectValues<Incidentresolution>(createIncidentresolutionFromDiscriminatorValue); },
            "service_letters": (o, n) => { (o as unknown as Service).service_letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "service_MailboxTrackingFolders": (o, n) => { (o as unknown as Service).service_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "service_opportunityclose": (o, n) => { (o as unknown as Service).service_opportunityclose = n.getCollectionOfObjectValues<Opportunityclose>(createOpportunitycloseFromDiscriminatorValue); },
            "service_orderclose": (o, n) => { (o as unknown as Service).service_orderclose = n.getCollectionOfObjectValues<Orderclose>(createOrdercloseFromDiscriminatorValue); },
            "service_phonecalls": (o, n) => { (o as unknown as Service).service_phonecalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "service_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Service).service_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "service_ProcessSessions": (o, n) => { (o as unknown as Service).service_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "service_quoteclose": (o, n) => { (o as unknown as Service).service_quoteclose = n.getCollectionOfObjectValues<Quoteclose>(createQuotecloseFromDiscriminatorValue); },
            "service_recurringappointmentmasters": (o, n) => { (o as unknown as Service).service_recurringappointmentmasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "service_service_appointments": (o, n) => { (o as unknown as Service).service_service_appointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "service_socialactivities": (o, n) => { (o as unknown as Service).service_socialactivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "service_SyncErrors": (o, n) => { (o as unknown as Service).service_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "service_tasks": (o, n) => { (o as unknown as Service).service_tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "serviceid": (o, n) => { (o as unknown as Service).serviceid = n.getStringValue(); },
            "showresources": (o, n) => { (o as unknown as Service).showresources = n.getBooleanValue(); },
            "strategyid": (o, n) => { (o as unknown as Service).strategyid = n.getObjectValue<Plugintype>(createPlugintypeFromDiscriminatorValue); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Service).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Service).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Service).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the granularity property value. 
     * @returns a string
     */
    public get granularity() {
        return this._granularity;
    };
    /**
     * Sets the granularity property value. 
     * @param value Value to set for the granularity property.
     */
    public set granularity(value: string | undefined) {
        this._granularity = value;
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
     * Gets the initialstatuscode property value. 
     * @returns a integer
     */
    public get initialstatuscode() {
        return this._initialstatuscode;
    };
    /**
     * Sets the initialstatuscode property value. 
     * @param value Value to set for the initialstatuscode property.
     */
    public set initialstatuscode(value: number | undefined) {
        this._initialstatuscode = value;
    };
    /**
     * Gets the isschedulable property value. 
     * @returns a boolean
     */
    public get isschedulable() {
        return this._isschedulable;
    };
    /**
     * Sets the isschedulable property value. 
     * @param value Value to set for the isschedulable property.
     */
    public set isschedulable(value: boolean | undefined) {
        this._isschedulable = value;
    };
    /**
     * Gets the isvisible property value. 
     * @returns a boolean
     */
    public get isvisible() {
        return this._isvisible;
    };
    /**
     * Sets the isvisible property value. 
     * @param value Value to set for the isvisible property.
     */
    public set isvisible(value: boolean | undefined) {
        this._isvisible = value;
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
     * Gets the msdyn_approval_service_serviceid property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_approval_service_serviceid() {
        return this._msdyn_approval_service_serviceid;
    };
    /**
     * Sets the msdyn_approval_service_serviceid property value. 
     * @param value Value to set for the msdyn_approval_service_serviceid property.
     */
    public set msdyn_approval_service_serviceid(value: Msdyn_approval[] | undefined) {
        this._msdyn_approval_service_serviceid = value;
    };
    /**
     * Gets the msdyn_bookingalert_service_serviceid property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_bookingalert_service_serviceid() {
        return this._msdyn_bookingalert_service_serviceid;
    };
    /**
     * Sets the msdyn_bookingalert_service_serviceid property value. 
     * @param value Value to set for the msdyn_bookingalert_service_serviceid property.
     */
    public set msdyn_bookingalert_service_serviceid(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_bookingalert_service_serviceid = value;
    };
    /**
     * Gets the msdyn_ocliveworkitem_service_serviceid property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_ocliveworkitem_service_serviceid() {
        return this._msdyn_ocliveworkitem_service_serviceid;
    };
    /**
     * Sets the msdyn_ocliveworkitem_service_serviceid property value. 
     * @param value Value to set for the msdyn_ocliveworkitem_service_serviceid property.
     */
    public set msdyn_ocliveworkitem_service_serviceid(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_ocliveworkitem_service_serviceid = value;
    };
    /**
     * Gets the msdyn_ocoutboundmessage_service_serviceid property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_ocoutboundmessage_service_serviceid() {
        return this._msdyn_ocoutboundmessage_service_serviceid;
    };
    /**
     * Sets the msdyn_ocoutboundmessage_service_serviceid property value. 
     * @param value Value to set for the msdyn_ocoutboundmessage_service_serviceid property.
     */
    public set msdyn_ocoutboundmessage_service_serviceid(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_ocoutboundmessage_service_serviceid = value;
    };
    /**
     * Gets the msdyn_ocsession_service_serviceid property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_ocsession_service_serviceid() {
        return this._msdyn_ocsession_service_serviceid;
    };
    /**
     * Sets the msdyn_ocsession_service_serviceid property value. 
     * @param value Value to set for the msdyn_ocsession_service_serviceid property.
     */
    public set msdyn_ocsession_service_serviceid(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_ocsession_service_serviceid = value;
    };
    /**
     * Gets the msdyn_requirementgroupid property value. 
     * @returns a msdyn_requirementgroup
     */
    public get msdyn_requirementgroupid() {
        return this._msdyn_requirementgroupid;
    };
    /**
     * Sets the msdyn_requirementgroupid property value. 
     * @param value Value to set for the msdyn_requirementgroupid property.
     */
    public set msdyn_requirementgroupid(value: Msdyn_requirementgroup | undefined) {
        this._msdyn_requirementgroupid = value;
    };
    /**
     * Gets the msdyn_SchedulingEngine property value. 
     * @returns a integer
     */
    public get msdyn_SchedulingEngine() {
        return this._msdyn_SchedulingEngine;
    };
    /**
     * Sets the msdyn_SchedulingEngine property value. 
     * @param value Value to set for the msdyn_SchedulingEngine property.
     */
    public set msdyn_SchedulingEngine(value: number | undefined) {
        this._msdyn_SchedulingEngine = value;
    };
    /**
     * Gets the msfp_alert_service_serviceid property value. 
     * @returns a msfp_alert
     */
    public get msfp_alert_service_serviceid() {
        return this._msfp_alert_service_serviceid;
    };
    /**
     * Sets the msfp_alert_service_serviceid property value. 
     * @param value Value to set for the msfp_alert_service_serviceid property.
     */
    public set msfp_alert_service_serviceid(value: Msfp_alert[] | undefined) {
        this._msfp_alert_service_serviceid = value;
    };
    /**
     * Gets the msfp_surveyinvite_service_serviceid property value. 
     * @returns a msfp_surveyinvite
     */
    public get msfp_surveyinvite_service_serviceid() {
        return this._msfp_surveyinvite_service_serviceid;
    };
    /**
     * Sets the msfp_surveyinvite_service_serviceid property value. 
     * @param value Value to set for the msfp_surveyinvite_service_serviceid property.
     */
    public set msfp_surveyinvite_service_serviceid(value: Msfp_surveyinvite[] | undefined) {
        this._msfp_surveyinvite_service_serviceid = value;
    };
    /**
     * Gets the msfp_surveyresponse_service_serviceid property value. 
     * @returns a msfp_surveyresponse
     */
    public get msfp_surveyresponse_service_serviceid() {
        return this._msfp_surveyresponse_service_serviceid;
    };
    /**
     * Sets the msfp_surveyresponse_service_serviceid property value. 
     * @param value Value to set for the msfp_surveyresponse_service_serviceid property.
     */
    public set msfp_surveyresponse_service_serviceid(value: Msfp_surveyresponse[] | undefined) {
        this._msfp_surveyresponse_service_serviceid = value;
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
        writer.writeStringValue("_msdyn_requirementgroupid_value", this._msdyn_requirementgroupid_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_resourcespecid_value", this._resourcespecid_value);
        writer.writeStringValue("_strategyid_value", this._strategyid_value);
        writer.writeNumberValue("anchoroffset", this.anchoroffset);
        writer.writeStringValue("calendarid", this.calendarid);
        writer.writeObjectValue<Calendar>("calendarid_calendar", this.calendarid_calendar);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("duration", this.duration);
        writer.writeStringValue("granularity", this.granularity);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeNumberValue("initialstatuscode", this.initialstatuscode);
        writer.writeBooleanValue("isschedulable", this.isschedulable);
        writer.writeBooleanValue("isvisible", this.isvisible);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_approval_service_serviceid", this.msdyn_approval_service_serviceid);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_bookingalert_service_serviceid", this.msdyn_bookingalert_service_serviceid);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_ocliveworkitem_service_serviceid", this.msdyn_ocliveworkitem_service_serviceid);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_ocoutboundmessage_service_serviceid", this.msdyn_ocoutboundmessage_service_serviceid);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_ocsession_service_serviceid", this.msdyn_ocsession_service_serviceid);
        writer.writeObjectValue<Msdyn_requirementgroup>("msdyn_requirementgroupid", this.msdyn_requirementgroupid);
        writer.writeNumberValue("msdyn_SchedulingEngine", this.msdyn_SchedulingEngine);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msfp_alert_service_serviceid", this.msfp_alert_service_serviceid);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msfp_surveyinvite_service_serviceid", this.msfp_surveyinvite_service_serviceid);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msfp_surveyresponse_service_serviceid", this.msfp_surveyresponse_service_serviceid);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Resourcespec>("resourcespecid", this.resourcespecid);
        writer.writeCollectionOfObjectValues<Account>("service_accounts", this.service_accounts);
        writer.writeCollectionOfObjectValues<Activitypointer>("service_activity_pointers", this.service_activity_pointers);
        writer.writeCollectionOfObjectValues<Annotation>("service_Annotation", this.service_Annotation);
        writer.writeCollectionOfObjectValues<Appointment>("service_appointments", this.service_appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("service_AsyncOperations", this.service_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("service_BulkDeleteFailures", this.service_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Calendarrule>("service_calendar_rules", this.service_calendar_rules);
        writer.writeCollectionOfObjectValues<Contact>("service_contacts", this.service_contacts);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("service_DuplicateBaseRecord", this.service_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("service_DuplicateMatchingRecord", this.service_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("service_emails", this.service_emails);
        writer.writeCollectionOfObjectValues<Fax>("service_faxes", this.service_faxes);
        writer.writeCollectionOfObjectValues<Incidentresolution>("service_incidentresolutions", this.service_incidentresolutions);
        writer.writeCollectionOfObjectValues<Letter>("service_letters", this.service_letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("service_MailboxTrackingFolders", this.service_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Opportunityclose>("service_opportunityclose", this.service_opportunityclose);
        writer.writeCollectionOfObjectValues<Orderclose>("service_orderclose", this.service_orderclose);
        writer.writeCollectionOfObjectValues<Phonecall>("service_phonecalls", this.service_phonecalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("service_PrincipalObjectAttributeAccesses", this.service_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("service_ProcessSessions", this.service_ProcessSessions);
        writer.writeCollectionOfObjectValues<Quoteclose>("service_quoteclose", this.service_quoteclose);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("service_recurringappointmentmasters", this.service_recurringappointmentmasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("service_service_appointments", this.service_service_appointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("service_socialactivities", this.service_socialactivities);
        writer.writeCollectionOfObjectValues<Syncerror>("service_SyncErrors", this.service_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("service_tasks", this.service_tasks);
        writer.writeStringValue("serviceid", this.serviceid);
        writer.writeBooleanValue("showresources", this.showresources);
        writer.writeObjectValue<Plugintype>("strategyid", this.strategyid);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the service_accounts property value. 
     * @returns a account
     */
    public get service_accounts() {
        return this._service_accounts;
    };
    /**
     * Sets the service_accounts property value. 
     * @param value Value to set for the service_accounts property.
     */
    public set service_accounts(value: Account[] | undefined) {
        this._service_accounts = value;
    };
    /**
     * Gets the service_activity_pointers property value. 
     * @returns a activitypointer
     */
    public get service_activity_pointers() {
        return this._service_activity_pointers;
    };
    /**
     * Sets the service_activity_pointers property value. 
     * @param value Value to set for the service_activity_pointers property.
     */
    public set service_activity_pointers(value: Activitypointer[] | undefined) {
        this._service_activity_pointers = value;
    };
    /**
     * Gets the service_Annotation property value. 
     * @returns a annotation
     */
    public get service_Annotation() {
        return this._service_Annotation;
    };
    /**
     * Sets the service_Annotation property value. 
     * @param value Value to set for the Service_Annotation property.
     */
    public set service_Annotation(value: Annotation[] | undefined) {
        this._service_Annotation = value;
    };
    /**
     * Gets the service_appointments property value. 
     * @returns a appointment
     */
    public get service_appointments() {
        return this._service_appointments;
    };
    /**
     * Sets the service_appointments property value. 
     * @param value Value to set for the service_appointments property.
     */
    public set service_appointments(value: Appointment[] | undefined) {
        this._service_appointments = value;
    };
    /**
     * Gets the service_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get service_AsyncOperations() {
        return this._service_AsyncOperations;
    };
    /**
     * Sets the service_AsyncOperations property value. 
     * @param value Value to set for the Service_AsyncOperations property.
     */
    public set service_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._service_AsyncOperations = value;
    };
    /**
     * Gets the service_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get service_BulkDeleteFailures() {
        return this._service_BulkDeleteFailures;
    };
    /**
     * Sets the service_BulkDeleteFailures property value. 
     * @param value Value to set for the Service_BulkDeleteFailures property.
     */
    public set service_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._service_BulkDeleteFailures = value;
    };
    /**
     * Gets the service_calendar_rules property value. 
     * @returns a calendarrule
     */
    public get service_calendar_rules() {
        return this._service_calendar_rules;
    };
    /**
     * Sets the service_calendar_rules property value. 
     * @param value Value to set for the service_calendar_rules property.
     */
    public set service_calendar_rules(value: Calendarrule[] | undefined) {
        this._service_calendar_rules = value;
    };
    /**
     * Gets the service_contacts property value. 
     * @returns a contact
     */
    public get service_contacts() {
        return this._service_contacts;
    };
    /**
     * Sets the service_contacts property value. 
     * @param value Value to set for the service_contacts property.
     */
    public set service_contacts(value: Contact[] | undefined) {
        this._service_contacts = value;
    };
    /**
     * Gets the service_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get service_DuplicateBaseRecord() {
        return this._service_DuplicateBaseRecord;
    };
    /**
     * Sets the service_DuplicateBaseRecord property value. 
     * @param value Value to set for the Service_DuplicateBaseRecord property.
     */
    public set service_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._service_DuplicateBaseRecord = value;
    };
    /**
     * Gets the service_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get service_DuplicateMatchingRecord() {
        return this._service_DuplicateMatchingRecord;
    };
    /**
     * Sets the service_DuplicateMatchingRecord property value. 
     * @param value Value to set for the Service_DuplicateMatchingRecord property.
     */
    public set service_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._service_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the service_emails property value. 
     * @returns a email
     */
    public get service_emails() {
        return this._service_emails;
    };
    /**
     * Sets the service_emails property value. 
     * @param value Value to set for the service_emails property.
     */
    public set service_emails(value: Email[] | undefined) {
        this._service_emails = value;
    };
    /**
     * Gets the service_faxes property value. 
     * @returns a fax
     */
    public get service_faxes() {
        return this._service_faxes;
    };
    /**
     * Sets the service_faxes property value. 
     * @param value Value to set for the service_faxes property.
     */
    public set service_faxes(value: Fax[] | undefined) {
        this._service_faxes = value;
    };
    /**
     * Gets the service_incidentresolutions property value. 
     * @returns a incidentresolution
     */
    public get service_incidentresolutions() {
        return this._service_incidentresolutions;
    };
    /**
     * Sets the service_incidentresolutions property value. 
     * @param value Value to set for the service_incidentresolutions property.
     */
    public set service_incidentresolutions(value: Incidentresolution[] | undefined) {
        this._service_incidentresolutions = value;
    };
    /**
     * Gets the service_letters property value. 
     * @returns a letter
     */
    public get service_letters() {
        return this._service_letters;
    };
    /**
     * Sets the service_letters property value. 
     * @param value Value to set for the service_letters property.
     */
    public set service_letters(value: Letter[] | undefined) {
        this._service_letters = value;
    };
    /**
     * Gets the service_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get service_MailboxTrackingFolders() {
        return this._service_MailboxTrackingFolders;
    };
    /**
     * Sets the service_MailboxTrackingFolders property value. 
     * @param value Value to set for the service_MailboxTrackingFolders property.
     */
    public set service_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._service_MailboxTrackingFolders = value;
    };
    /**
     * Gets the service_opportunityclose property value. 
     * @returns a opportunityclose
     */
    public get service_opportunityclose() {
        return this._service_opportunityclose;
    };
    /**
     * Sets the service_opportunityclose property value. 
     * @param value Value to set for the service_opportunityclose property.
     */
    public set service_opportunityclose(value: Opportunityclose[] | undefined) {
        this._service_opportunityclose = value;
    };
    /**
     * Gets the service_orderclose property value. 
     * @returns a orderclose
     */
    public get service_orderclose() {
        return this._service_orderclose;
    };
    /**
     * Sets the service_orderclose property value. 
     * @param value Value to set for the service_orderclose property.
     */
    public set service_orderclose(value: Orderclose[] | undefined) {
        this._service_orderclose = value;
    };
    /**
     * Gets the service_phonecalls property value. 
     * @returns a phonecall
     */
    public get service_phonecalls() {
        return this._service_phonecalls;
    };
    /**
     * Sets the service_phonecalls property value. 
     * @param value Value to set for the service_phonecalls property.
     */
    public set service_phonecalls(value: Phonecall[] | undefined) {
        this._service_phonecalls = value;
    };
    /**
     * Gets the service_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get service_PrincipalObjectAttributeAccesses() {
        return this._service_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the service_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the service_PrincipalObjectAttributeAccesses property.
     */
    public set service_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._service_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the service_ProcessSessions property value. 
     * @returns a processsession
     */
    public get service_ProcessSessions() {
        return this._service_ProcessSessions;
    };
    /**
     * Sets the service_ProcessSessions property value. 
     * @param value Value to set for the Service_ProcessSessions property.
     */
    public set service_ProcessSessions(value: Processsession[] | undefined) {
        this._service_ProcessSessions = value;
    };
    /**
     * Gets the service_quoteclose property value. 
     * @returns a quoteclose
     */
    public get service_quoteclose() {
        return this._service_quoteclose;
    };
    /**
     * Sets the service_quoteclose property value. 
     * @param value Value to set for the service_quoteclose property.
     */
    public set service_quoteclose(value: Quoteclose[] | undefined) {
        this._service_quoteclose = value;
    };
    /**
     * Gets the service_recurringappointmentmasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get service_recurringappointmentmasters() {
        return this._service_recurringappointmentmasters;
    };
    /**
     * Sets the service_recurringappointmentmasters property value. 
     * @param value Value to set for the service_recurringappointmentmasters property.
     */
    public set service_recurringappointmentmasters(value: Recurringappointmentmaster[] | undefined) {
        this._service_recurringappointmentmasters = value;
    };
    /**
     * Gets the service_service_appointments property value. 
     * @returns a serviceappointment
     */
    public get service_service_appointments() {
        return this._service_service_appointments;
    };
    /**
     * Sets the service_service_appointments property value. 
     * @param value Value to set for the service_service_appointments property.
     */
    public set service_service_appointments(value: Serviceappointment[] | undefined) {
        this._service_service_appointments = value;
    };
    /**
     * Gets the service_socialactivities property value. 
     * @returns a socialactivity
     */
    public get service_socialactivities() {
        return this._service_socialactivities;
    };
    /**
     * Sets the service_socialactivities property value. 
     * @param value Value to set for the service_socialactivities property.
     */
    public set service_socialactivities(value: Socialactivity[] | undefined) {
        this._service_socialactivities = value;
    };
    /**
     * Gets the service_SyncErrors property value. 
     * @returns a syncerror
     */
    public get service_SyncErrors() {
        return this._service_SyncErrors;
    };
    /**
     * Sets the service_SyncErrors property value. 
     * @param value Value to set for the Service_SyncErrors property.
     */
    public set service_SyncErrors(value: Syncerror[] | undefined) {
        this._service_SyncErrors = value;
    };
    /**
     * Gets the service_tasks property value. 
     * @returns a task
     */
    public get service_tasks() {
        return this._service_tasks;
    };
    /**
     * Sets the service_tasks property value. 
     * @param value Value to set for the service_tasks property.
     */
    public set service_tasks(value: Task[] | undefined) {
        this._service_tasks = value;
    };
    /**
     * Gets the serviceid property value. 
     * @returns a string
     */
    public get serviceid() {
        return this._serviceid;
    };
    /**
     * Sets the serviceid property value. 
     * @param value Value to set for the serviceid property.
     */
    public set serviceid(value: string | undefined) {
        this._serviceid = value;
    };
    /**
     * Gets the showresources property value. 
     * @returns a boolean
     */
    public get showresources() {
        return this._showresources;
    };
    /**
     * Sets the showresources property value. 
     * @param value Value to set for the showresources property.
     */
    public set showresources(value: boolean | undefined) {
        this._showresources = value;
    };
    /**
     * Gets the strategyid property value. 
     * @returns a plugintype
     */
    public get strategyid() {
        return this._strategyid;
    };
    /**
     * Sets the strategyid property value. 
     * @param value Value to set for the strategyid property.
     */
    public set strategyid(value: Plugintype | undefined) {
        this._strategyid = value;
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
