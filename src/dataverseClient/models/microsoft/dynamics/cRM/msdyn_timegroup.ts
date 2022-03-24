import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_resourcerequirementFromDiscriminatorValue} from './createMsdyn_resourcerequirementFromDiscriminatorValue';
import {createMsdyn_timegroupdetailFromDiscriminatorValue} from './createMsdyn_timegroupdetailFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createQueueitemFromDiscriminatorValue} from './createQueueitemFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSharepointdocumentlocationFromDiscriminatorValue} from './createSharepointdocumentlocationFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_resourcerequirement, Msdyn_timegroupdetail, Msdyn_workorder, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Processstage, Queueitem, Recurringappointmentmaster, Serviceappointment, Sharepointdocumentlocation, Socialactivity, Syncerror, Systemuser, Task, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_timegroup extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __stageid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_displaytopxresultsinsatimegroup?: number | undefined;
    private _msdyn_hidebookingtimeonsa?: boolean | undefined;
    private _msdyn_interval?: number | undefined;
    private _msdyn_intervalsbegin?: Date | undefined;
    private _msdyn_msdyn_timegroup_msdyn_resourcerequirement_TimeGroup?: Msdyn_resourcerequirement[] | undefined;
    private _msdyn_msdyn_timegroup_msdyn_timegroupdetail?: Msdyn_timegroupdetail[] | undefined;
    private _msdyn_msdyn_timegroup_msdyn_workorder_TimeGroup?: Msdyn_workorder[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_resetpertimegroupdetail?: boolean | undefined;
    private _msdyn_resultsperinterval?: number | undefined;
    private _msdyn_timegroup_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_timegroup_Annotations?: Annotation[] | undefined;
    private _msdyn_timegroup_Appointments?: Appointment[] | undefined;
    private _msdyn_timegroup_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_timegroup_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_timegroup_connections1?: Connection[] | undefined;
    private _msdyn_timegroup_connections2?: Connection[] | undefined;
    private _msdyn_timegroup_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_timegroup_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_timegroup_Emails?: Email[] | undefined;
    private _msdyn_timegroup_Faxes?: Fax[] | undefined;
    private _msdyn_timegroup_Letters?: Letter[] | undefined;
    private _msdyn_timegroup_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_timegroup_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_timegroup_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_timegroup_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_timegroup_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_timegroup_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_timegroup_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_timegroup_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_timegroup_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_timegroup_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_timegroup_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_timegroup_ProcessSession?: Processsession[] | undefined;
    private _msdyn_timegroup_QueueItems?: Queueitem[] | undefined;
    private _msdyn_timegroup_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_timegroup_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_timegroup_SharePointDocumentLocations?: Sharepointdocumentlocation[] | undefined;
    private _msdyn_timegroup_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_timegroup_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_timegroup_Tasks?: Task[] | undefined;
    private _msdyn_timegroupid?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _processid?: string | undefined;
    private _stageid?: Processstage | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
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
     * Gets the _stageid_value property value. 
     * @returns a string
     */
    public get _stageid_value() {
        return this.__stageid_value;
    };
    /**
     * Sets the _stageid_value property value. 
     * @param value Value to set for the _stageid_value property.
     */
    public set _stageid_value(value: string | undefined) {
        this.__stageid_value = value;
    };
    /**
     * Instantiates a new msdyn_timegroup and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_timegroup)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_timegroup)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_timegroup)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_timegroup)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_timegroup)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_timegroup)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_timegroup)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_timegroup)._owninguser_value = n.getStringValue(); },
            "_stageid_value": (o, n) => { (o as unknown as Msdyn_timegroup)._stageid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_timegroup).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_timegroup).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_timegroup).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_timegroup).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_timegroup).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_timegroup).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_timegroup).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_displaytopxresultsinsatimegroup": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_displaytopxresultsinsatimegroup = n.getNumberValue(); },
            "msdyn_hidebookingtimeonsa": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_hidebookingtimeonsa = n.getBooleanValue(); },
            "msdyn_interval": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_interval = n.getNumberValue(); },
            "msdyn_intervalsbegin": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_intervalsbegin = n.getDateValue(); },
            "msdyn_msdyn_timegroup_msdyn_resourcerequirement_TimeGroup": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_msdyn_timegroup_msdyn_resourcerequirement_TimeGroup = n.getCollectionOfObjectValues<Msdyn_resourcerequirement>(createMsdyn_resourcerequirementFromDiscriminatorValue); },
            "msdyn_msdyn_timegroup_msdyn_timegroupdetail": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_msdyn_timegroup_msdyn_timegroupdetail = n.getCollectionOfObjectValues<Msdyn_timegroupdetail>(createMsdyn_timegroupdetailFromDiscriminatorValue); },
            "msdyn_msdyn_timegroup_msdyn_workorder_TimeGroup": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_msdyn_timegroup_msdyn_workorder_TimeGroup = n.getCollectionOfObjectValues<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_name = n.getStringValue(); },
            "msdyn_resetpertimegroupdetail": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_resetpertimegroupdetail = n.getBooleanValue(); },
            "msdyn_resultsperinterval": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_resultsperinterval = n.getNumberValue(); },
            "msdyn_timegroup_ActivityPointers": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_timegroup_Annotations": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_timegroup_Appointments": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_timegroup_AsyncOperations": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_timegroup_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_timegroup_connections1": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_timegroup_connections2": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_timegroup_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_timegroup_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_timegroup_Emails": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_timegroup_Faxes": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_timegroup_Letters": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_timegroup_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_timegroup_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_timegroup_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_timegroup_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_timegroup_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_timegroup_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_timegroup_msfp_alerts": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_timegroup_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_timegroup_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_timegroup_PhoneCalls": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_timegroup_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_timegroup_ProcessSession": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_timegroup_QueueItems": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_QueueItems = n.getCollectionOfObjectValues<Queueitem>(createQueueitemFromDiscriminatorValue); },
            "msdyn_timegroup_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_timegroup_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_timegroup_SharePointDocumentLocations": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_SharePointDocumentLocations = n.getCollectionOfObjectValues<Sharepointdocumentlocation>(createSharepointdocumentlocationFromDiscriminatorValue); },
            "msdyn_timegroup_SocialActivities": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_timegroup_SyncErrors": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_timegroup_Tasks": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroup_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_timegroupid": (o, n) => { (o as unknown as Msdyn_timegroup).msdyn_timegroupid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_timegroup).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_timegroup).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_timegroup).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_timegroup).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_timegroup).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "processid": (o, n) => { (o as unknown as Msdyn_timegroup).processid = n.getStringValue(); },
            "stageid": (o, n) => { (o as unknown as Msdyn_timegroup).stageid = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_timegroup).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_timegroup).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_timegroup).timezoneruleversionnumber = n.getNumberValue(); },
            "traversedpath": (o, n) => { (o as unknown as Msdyn_timegroup).traversedpath = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_timegroup).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_timegroup).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_displaytopxresultsinsatimegroup property value. 
     * @returns a integer
     */
    public get msdyn_displaytopxresultsinsatimegroup() {
        return this._msdyn_displaytopxresultsinsatimegroup;
    };
    /**
     * Sets the msdyn_displaytopxresultsinsatimegroup property value. 
     * @param value Value to set for the msdyn_displaytopxresultsinsatimegroup property.
     */
    public set msdyn_displaytopxresultsinsatimegroup(value: number | undefined) {
        this._msdyn_displaytopxresultsinsatimegroup = value;
    };
    /**
     * Gets the msdyn_hidebookingtimeonsa property value. 
     * @returns a boolean
     */
    public get msdyn_hidebookingtimeonsa() {
        return this._msdyn_hidebookingtimeonsa;
    };
    /**
     * Sets the msdyn_hidebookingtimeonsa property value. 
     * @param value Value to set for the msdyn_hidebookingtimeonsa property.
     */
    public set msdyn_hidebookingtimeonsa(value: boolean | undefined) {
        this._msdyn_hidebookingtimeonsa = value;
    };
    /**
     * Gets the msdyn_interval property value. 
     * @returns a integer
     */
    public get msdyn_interval() {
        return this._msdyn_interval;
    };
    /**
     * Sets the msdyn_interval property value. 
     * @param value Value to set for the msdyn_interval property.
     */
    public set msdyn_interval(value: number | undefined) {
        this._msdyn_interval = value;
    };
    /**
     * Gets the msdyn_intervalsbegin property value. 
     * @returns a Date
     */
    public get msdyn_intervalsbegin() {
        return this._msdyn_intervalsbegin;
    };
    /**
     * Sets the msdyn_intervalsbegin property value. 
     * @param value Value to set for the msdyn_intervalsbegin property.
     */
    public set msdyn_intervalsbegin(value: Date | undefined) {
        this._msdyn_intervalsbegin = value;
    };
    /**
     * Gets the msdyn_msdyn_timegroup_msdyn_resourcerequirement_TimeGroup property value. 
     * @returns a msdyn_resourcerequirement
     */
    public get msdyn_msdyn_timegroup_msdyn_resourcerequirement_TimeGroup() {
        return this._msdyn_msdyn_timegroup_msdyn_resourcerequirement_TimeGroup;
    };
    /**
     * Sets the msdyn_msdyn_timegroup_msdyn_resourcerequirement_TimeGroup property value. 
     * @param value Value to set for the msdyn_msdyn_timegroup_msdyn_resourcerequirement_TimeGroup property.
     */
    public set msdyn_msdyn_timegroup_msdyn_resourcerequirement_TimeGroup(value: Msdyn_resourcerequirement[] | undefined) {
        this._msdyn_msdyn_timegroup_msdyn_resourcerequirement_TimeGroup = value;
    };
    /**
     * Gets the msdyn_msdyn_timegroup_msdyn_timegroupdetail property value. 
     * @returns a msdyn_timegroupdetail
     */
    public get msdyn_msdyn_timegroup_msdyn_timegroupdetail() {
        return this._msdyn_msdyn_timegroup_msdyn_timegroupdetail;
    };
    /**
     * Sets the msdyn_msdyn_timegroup_msdyn_timegroupdetail property value. 
     * @param value Value to set for the msdyn_msdyn_timegroup_msdyn_timegroupdetail property.
     */
    public set msdyn_msdyn_timegroup_msdyn_timegroupdetail(value: Msdyn_timegroupdetail[] | undefined) {
        this._msdyn_msdyn_timegroup_msdyn_timegroupdetail = value;
    };
    /**
     * Gets the msdyn_msdyn_timegroup_msdyn_workorder_TimeGroup property value. 
     * @returns a msdyn_workorder
     */
    public get msdyn_msdyn_timegroup_msdyn_workorder_TimeGroup() {
        return this._msdyn_msdyn_timegroup_msdyn_workorder_TimeGroup;
    };
    /**
     * Sets the msdyn_msdyn_timegroup_msdyn_workorder_TimeGroup property value. 
     * @param value Value to set for the msdyn_msdyn_timegroup_msdyn_workorder_TimeGroup property.
     */
    public set msdyn_msdyn_timegroup_msdyn_workorder_TimeGroup(value: Msdyn_workorder[] | undefined) {
        this._msdyn_msdyn_timegroup_msdyn_workorder_TimeGroup = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_resetpertimegroupdetail property value. 
     * @returns a boolean
     */
    public get msdyn_resetpertimegroupdetail() {
        return this._msdyn_resetpertimegroupdetail;
    };
    /**
     * Sets the msdyn_resetpertimegroupdetail property value. 
     * @param value Value to set for the msdyn_resetpertimegroupdetail property.
     */
    public set msdyn_resetpertimegroupdetail(value: boolean | undefined) {
        this._msdyn_resetpertimegroupdetail = value;
    };
    /**
     * Gets the msdyn_resultsperinterval property value. 
     * @returns a integer
     */
    public get msdyn_resultsperinterval() {
        return this._msdyn_resultsperinterval;
    };
    /**
     * Sets the msdyn_resultsperinterval property value. 
     * @param value Value to set for the msdyn_resultsperinterval property.
     */
    public set msdyn_resultsperinterval(value: number | undefined) {
        this._msdyn_resultsperinterval = value;
    };
    /**
     * Gets the msdyn_timegroup_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_timegroup_ActivityPointers() {
        return this._msdyn_timegroup_ActivityPointers;
    };
    /**
     * Sets the msdyn_timegroup_ActivityPointers property value. 
     * @param value Value to set for the msdyn_timegroup_ActivityPointers property.
     */
    public set msdyn_timegroup_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_timegroup_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_timegroup_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_timegroup_Annotations() {
        return this._msdyn_timegroup_Annotations;
    };
    /**
     * Sets the msdyn_timegroup_Annotations property value. 
     * @param value Value to set for the msdyn_timegroup_Annotations property.
     */
    public set msdyn_timegroup_Annotations(value: Annotation[] | undefined) {
        this._msdyn_timegroup_Annotations = value;
    };
    /**
     * Gets the msdyn_timegroup_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_timegroup_Appointments() {
        return this._msdyn_timegroup_Appointments;
    };
    /**
     * Sets the msdyn_timegroup_Appointments property value. 
     * @param value Value to set for the msdyn_timegroup_Appointments property.
     */
    public set msdyn_timegroup_Appointments(value: Appointment[] | undefined) {
        this._msdyn_timegroup_Appointments = value;
    };
    /**
     * Gets the msdyn_timegroup_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_timegroup_AsyncOperations() {
        return this._msdyn_timegroup_AsyncOperations;
    };
    /**
     * Sets the msdyn_timegroup_AsyncOperations property value. 
     * @param value Value to set for the msdyn_timegroup_AsyncOperations property.
     */
    public set msdyn_timegroup_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_timegroup_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_timegroup_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_timegroup_BulkDeleteFailures() {
        return this._msdyn_timegroup_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_timegroup_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_timegroup_BulkDeleteFailures property.
     */
    public set msdyn_timegroup_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_timegroup_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_timegroup_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_timegroup_connections1() {
        return this._msdyn_timegroup_connections1;
    };
    /**
     * Sets the msdyn_timegroup_connections1 property value. 
     * @param value Value to set for the msdyn_timegroup_connections1 property.
     */
    public set msdyn_timegroup_connections1(value: Connection[] | undefined) {
        this._msdyn_timegroup_connections1 = value;
    };
    /**
     * Gets the msdyn_timegroup_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_timegroup_connections2() {
        return this._msdyn_timegroup_connections2;
    };
    /**
     * Sets the msdyn_timegroup_connections2 property value. 
     * @param value Value to set for the msdyn_timegroup_connections2 property.
     */
    public set msdyn_timegroup_connections2(value: Connection[] | undefined) {
        this._msdyn_timegroup_connections2 = value;
    };
    /**
     * Gets the msdyn_timegroup_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_timegroup_DuplicateBaseRecord() {
        return this._msdyn_timegroup_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_timegroup_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_timegroup_DuplicateBaseRecord property.
     */
    public set msdyn_timegroup_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_timegroup_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_timegroup_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_timegroup_DuplicateMatchingRecord() {
        return this._msdyn_timegroup_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_timegroup_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_timegroup_DuplicateMatchingRecord property.
     */
    public set msdyn_timegroup_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_timegroup_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_timegroup_Emails property value. 
     * @returns a email
     */
    public get msdyn_timegroup_Emails() {
        return this._msdyn_timegroup_Emails;
    };
    /**
     * Sets the msdyn_timegroup_Emails property value. 
     * @param value Value to set for the msdyn_timegroup_Emails property.
     */
    public set msdyn_timegroup_Emails(value: Email[] | undefined) {
        this._msdyn_timegroup_Emails = value;
    };
    /**
     * Gets the msdyn_timegroup_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_timegroup_Faxes() {
        return this._msdyn_timegroup_Faxes;
    };
    /**
     * Sets the msdyn_timegroup_Faxes property value. 
     * @param value Value to set for the msdyn_timegroup_Faxes property.
     */
    public set msdyn_timegroup_Faxes(value: Fax[] | undefined) {
        this._msdyn_timegroup_Faxes = value;
    };
    /**
     * Gets the msdyn_timegroup_Letters property value. 
     * @returns a letter
     */
    public get msdyn_timegroup_Letters() {
        return this._msdyn_timegroup_Letters;
    };
    /**
     * Sets the msdyn_timegroup_Letters property value. 
     * @param value Value to set for the msdyn_timegroup_Letters property.
     */
    public set msdyn_timegroup_Letters(value: Letter[] | undefined) {
        this._msdyn_timegroup_Letters = value;
    };
    /**
     * Gets the msdyn_timegroup_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_timegroup_MailboxTrackingFolders() {
        return this._msdyn_timegroup_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_timegroup_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_timegroup_MailboxTrackingFolders property.
     */
    public set msdyn_timegroup_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_timegroup_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_timegroup_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_timegroup_msdyn_approvals() {
        return this._msdyn_timegroup_msdyn_approvals;
    };
    /**
     * Sets the msdyn_timegroup_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_timegroup_msdyn_approvals property.
     */
    public set msdyn_timegroup_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_timegroup_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_timegroup_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_timegroup_msdyn_bookingalerts() {
        return this._msdyn_timegroup_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_timegroup_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_timegroup_msdyn_bookingalerts property.
     */
    public set msdyn_timegroup_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_timegroup_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_timegroup_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_timegroup_msdyn_ocliveworkitems() {
        return this._msdyn_timegroup_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_timegroup_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_timegroup_msdyn_ocliveworkitems property.
     */
    public set msdyn_timegroup_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_timegroup_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_timegroup_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_timegroup_msdyn_ocoutboundmessages() {
        return this._msdyn_timegroup_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_timegroup_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_timegroup_msdyn_ocoutboundmessages property.
     */
    public set msdyn_timegroup_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_timegroup_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_timegroup_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_timegroup_msdyn_ocsessions() {
        return this._msdyn_timegroup_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_timegroup_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_timegroup_msdyn_ocsessions property.
     */
    public set msdyn_timegroup_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_timegroup_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_timegroup_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_timegroup_msfp_alerts() {
        return this._msdyn_timegroup_msfp_alerts;
    };
    /**
     * Sets the msdyn_timegroup_msfp_alerts property value. 
     * @param value Value to set for the msdyn_timegroup_msfp_alerts property.
     */
    public set msdyn_timegroup_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_timegroup_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_timegroup_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_timegroup_msfp_surveyinvites() {
        return this._msdyn_timegroup_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_timegroup_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_timegroup_msfp_surveyinvites property.
     */
    public set msdyn_timegroup_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_timegroup_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_timegroup_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_timegroup_msfp_surveyresponses() {
        return this._msdyn_timegroup_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_timegroup_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_timegroup_msfp_surveyresponses property.
     */
    public set msdyn_timegroup_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_timegroup_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_timegroup_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_timegroup_PhoneCalls() {
        return this._msdyn_timegroup_PhoneCalls;
    };
    /**
     * Sets the msdyn_timegroup_PhoneCalls property value. 
     * @param value Value to set for the msdyn_timegroup_PhoneCalls property.
     */
    public set msdyn_timegroup_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_timegroup_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_timegroup_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_timegroup_PrincipalObjectAttributeAccesses() {
        return this._msdyn_timegroup_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_timegroup_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_timegroup_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_timegroup_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_timegroup_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_timegroup_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_timegroup_ProcessSession() {
        return this._msdyn_timegroup_ProcessSession;
    };
    /**
     * Sets the msdyn_timegroup_ProcessSession property value. 
     * @param value Value to set for the msdyn_timegroup_ProcessSession property.
     */
    public set msdyn_timegroup_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_timegroup_ProcessSession = value;
    };
    /**
     * Gets the msdyn_timegroup_QueueItems property value. 
     * @returns a queueitem
     */
    public get msdyn_timegroup_QueueItems() {
        return this._msdyn_timegroup_QueueItems;
    };
    /**
     * Sets the msdyn_timegroup_QueueItems property value. 
     * @param value Value to set for the msdyn_timegroup_QueueItems property.
     */
    public set msdyn_timegroup_QueueItems(value: Queueitem[] | undefined) {
        this._msdyn_timegroup_QueueItems = value;
    };
    /**
     * Gets the msdyn_timegroup_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_timegroup_RecurringAppointmentMasters() {
        return this._msdyn_timegroup_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_timegroup_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_timegroup_RecurringAppointmentMasters property.
     */
    public set msdyn_timegroup_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_timegroup_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_timegroup_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_timegroup_ServiceAppointments() {
        return this._msdyn_timegroup_ServiceAppointments;
    };
    /**
     * Sets the msdyn_timegroup_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_timegroup_ServiceAppointments property.
     */
    public set msdyn_timegroup_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_timegroup_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_timegroup_SharePointDocumentLocations property value. 
     * @returns a sharepointdocumentlocation
     */
    public get msdyn_timegroup_SharePointDocumentLocations() {
        return this._msdyn_timegroup_SharePointDocumentLocations;
    };
    /**
     * Sets the msdyn_timegroup_SharePointDocumentLocations property value. 
     * @param value Value to set for the msdyn_timegroup_SharePointDocumentLocations property.
     */
    public set msdyn_timegroup_SharePointDocumentLocations(value: Sharepointdocumentlocation[] | undefined) {
        this._msdyn_timegroup_SharePointDocumentLocations = value;
    };
    /**
     * Gets the msdyn_timegroup_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_timegroup_SocialActivities() {
        return this._msdyn_timegroup_SocialActivities;
    };
    /**
     * Sets the msdyn_timegroup_SocialActivities property value. 
     * @param value Value to set for the msdyn_timegroup_SocialActivities property.
     */
    public set msdyn_timegroup_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_timegroup_SocialActivities = value;
    };
    /**
     * Gets the msdyn_timegroup_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_timegroup_SyncErrors() {
        return this._msdyn_timegroup_SyncErrors;
    };
    /**
     * Sets the msdyn_timegroup_SyncErrors property value. 
     * @param value Value to set for the msdyn_timegroup_SyncErrors property.
     */
    public set msdyn_timegroup_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_timegroup_SyncErrors = value;
    };
    /**
     * Gets the msdyn_timegroup_Tasks property value. 
     * @returns a task
     */
    public get msdyn_timegroup_Tasks() {
        return this._msdyn_timegroup_Tasks;
    };
    /**
     * Sets the msdyn_timegroup_Tasks property value. 
     * @param value Value to set for the msdyn_timegroup_Tasks property.
     */
    public set msdyn_timegroup_Tasks(value: Task[] | undefined) {
        this._msdyn_timegroup_Tasks = value;
    };
    /**
     * Gets the msdyn_timegroupid property value. 
     * @returns a string
     */
    public get msdyn_timegroupid() {
        return this._msdyn_timegroupid;
    };
    /**
     * Sets the msdyn_timegroupid property value. 
     * @param value Value to set for the msdyn_timegroupid property.
     */
    public set msdyn_timegroupid(value: string | undefined) {
        this._msdyn_timegroupid = value;
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
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_stageid_value", this._stageid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyn_displaytopxresultsinsatimegroup", this.msdyn_displaytopxresultsinsatimegroup);
        writer.writeBooleanValue("msdyn_hidebookingtimeonsa", this.msdyn_hidebookingtimeonsa);
        writer.writeNumberValue("msdyn_interval", this.msdyn_interval);
        writer.writeDateValue("msdyn_intervalsbegin", this.msdyn_intervalsbegin);
        writer.writeCollectionOfObjectValues<Msdyn_resourcerequirement>("msdyn_msdyn_timegroup_msdyn_resourcerequirement_TimeGroup", this.msdyn_msdyn_timegroup_msdyn_resourcerequirement_TimeGroup);
        writer.writeCollectionOfObjectValues<Msdyn_timegroupdetail>("msdyn_msdyn_timegroup_msdyn_timegroupdetail", this.msdyn_msdyn_timegroup_msdyn_timegroupdetail);
        writer.writeCollectionOfObjectValues<Msdyn_workorder>("msdyn_msdyn_timegroup_msdyn_workorder_TimeGroup", this.msdyn_msdyn_timegroup_msdyn_workorder_TimeGroup);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeBooleanValue("msdyn_resetpertimegroupdetail", this.msdyn_resetpertimegroupdetail);
        writer.writeNumberValue("msdyn_resultsperinterval", this.msdyn_resultsperinterval);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_timegroup_ActivityPointers", this.msdyn_timegroup_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_timegroup_Annotations", this.msdyn_timegroup_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_timegroup_Appointments", this.msdyn_timegroup_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_timegroup_AsyncOperations", this.msdyn_timegroup_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_timegroup_BulkDeleteFailures", this.msdyn_timegroup_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_timegroup_connections1", this.msdyn_timegroup_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_timegroup_connections2", this.msdyn_timegroup_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_timegroup_DuplicateBaseRecord", this.msdyn_timegroup_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_timegroup_DuplicateMatchingRecord", this.msdyn_timegroup_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_timegroup_Emails", this.msdyn_timegroup_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_timegroup_Faxes", this.msdyn_timegroup_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_timegroup_Letters", this.msdyn_timegroup_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_timegroup_MailboxTrackingFolders", this.msdyn_timegroup_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_timegroup_msdyn_approvals", this.msdyn_timegroup_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_timegroup_msdyn_bookingalerts", this.msdyn_timegroup_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_timegroup_msdyn_ocliveworkitems", this.msdyn_timegroup_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_timegroup_msdyn_ocoutboundmessages", this.msdyn_timegroup_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_timegroup_msdyn_ocsessions", this.msdyn_timegroup_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_timegroup_msfp_alerts", this.msdyn_timegroup_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_timegroup_msfp_surveyinvites", this.msdyn_timegroup_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_timegroup_msfp_surveyresponses", this.msdyn_timegroup_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_timegroup_PhoneCalls", this.msdyn_timegroup_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_timegroup_PrincipalObjectAttributeAccesses", this.msdyn_timegroup_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_timegroup_ProcessSession", this.msdyn_timegroup_ProcessSession);
        writer.writeCollectionOfObjectValues<Queueitem>("msdyn_timegroup_QueueItems", this.msdyn_timegroup_QueueItems);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_timegroup_RecurringAppointmentMasters", this.msdyn_timegroup_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_timegroup_ServiceAppointments", this.msdyn_timegroup_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Sharepointdocumentlocation>("msdyn_timegroup_SharePointDocumentLocations", this.msdyn_timegroup_SharePointDocumentLocations);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_timegroup_SocialActivities", this.msdyn_timegroup_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_timegroup_SyncErrors", this.msdyn_timegroup_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_timegroup_Tasks", this.msdyn_timegroup_Tasks);
        writer.writeStringValue("msdyn_timegroupid", this.msdyn_timegroupid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("processid", this.processid);
        writer.writeObjectValue<Processstage>("stageid", this.stageid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("traversedpath", this.traversedpath);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the stageid property value. 
     * @returns a processstage
     */
    public get stageid() {
        return this._stageid;
    };
    /**
     * Sets the stageid property value. 
     * @param value Value to set for the stageid property.
     */
    public set stageid(value: Processstage | undefined) {
        this._stageid = value;
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
