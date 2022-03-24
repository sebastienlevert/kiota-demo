import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcebookingFromDiscriminatorValue} from './createBookableresourcebookingFromDiscriminatorValue';
import {createBookingstatusFromDiscriminatorValue} from './createBookingstatusFromDiscriminatorValue';
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
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSharepointdocumentlocationFromDiscriminatorValue} from './createSharepointdocumentlocationFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bookableresourcebooking, Bookingstatus, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Recurringappointmentmaster, Serviceappointment, Sharepointdocumentlocation, Socialactivity, Syncerror, Systemuser, Task, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_bookingtimestamp extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_booking_value?: string | undefined;
    private __msdyn_bookingstatus_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_booking?: Bookableresourcebooking | undefined;
    private _msdyn_BookingStatus?: Bookingstatus | undefined;
    private _msdyn_bookingtimestamp_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_bookingtimestamp_Annotations?: Annotation[] | undefined;
    private _msdyn_bookingtimestamp_Appointments?: Appointment[] | undefined;
    private _msdyn_bookingtimestamp_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_bookingtimestamp_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_bookingtimestamp_connections1?: Connection[] | undefined;
    private _msdyn_bookingtimestamp_connections2?: Connection[] | undefined;
    private _msdyn_bookingtimestamp_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_bookingtimestamp_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_bookingtimestamp_Emails?: Email[] | undefined;
    private _msdyn_bookingtimestamp_Faxes?: Fax[] | undefined;
    private _msdyn_bookingtimestamp_Letters?: Letter[] | undefined;
    private _msdyn_bookingtimestamp_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_bookingtimestamp_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_bookingtimestamp_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_bookingtimestamp_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_bookingtimestamp_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_bookingtimestamp_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_bookingtimestamp_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_bookingtimestamp_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_bookingtimestamp_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_bookingtimestamp_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_bookingtimestamp_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_bookingtimestamp_ProcessSession?: Processsession[] | undefined;
    private _msdyn_bookingtimestamp_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_bookingtimestamp_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_bookingtimestamp_SharePointDocumentLocations?: Sharepointdocumentlocation[] | undefined;
    private _msdyn_bookingtimestamp_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_bookingtimestamp_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_bookingtimestamp_Tasks?: Task[] | undefined;
    private _msdyn_bookingtimestampid?: string | undefined;
    private _msdyn_generatejournals?: boolean | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_systemstatus?: number | undefined;
    private _msdyn_timestampsource?: number | undefined;
    private _msdyn_timestamptime?: Date | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
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
     * Gets the _msdyn_booking_value property value. 
     * @returns a string
     */
    public get _msdyn_booking_value() {
        return this.__msdyn_booking_value;
    };
    /**
     * Sets the _msdyn_booking_value property value. 
     * @param value Value to set for the _msdyn_booking_value property.
     */
    public set _msdyn_booking_value(value: string | undefined) {
        this.__msdyn_booking_value = value;
    };
    /**
     * Gets the _msdyn_bookingstatus_value property value. 
     * @returns a string
     */
    public get _msdyn_bookingstatus_value() {
        return this.__msdyn_bookingstatus_value;
    };
    /**
     * Sets the _msdyn_bookingstatus_value property value. 
     * @param value Value to set for the _msdyn_bookingstatus_value property.
     */
    public set _msdyn_bookingstatus_value(value: string | undefined) {
        this.__msdyn_bookingstatus_value = value;
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
     * Instantiates a new msdyn_bookingtimestamp and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_bookingtimestamp)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_bookingtimestamp)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_bookingtimestamp)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_bookingtimestamp)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_booking_value": (o, n) => { (o as unknown as Msdyn_bookingtimestamp)._msdyn_booking_value = n.getStringValue(); },
            "_msdyn_bookingstatus_value": (o, n) => { (o as unknown as Msdyn_bookingtimestamp)._msdyn_bookingstatus_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_bookingtimestamp)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_bookingtimestamp)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_bookingtimestamp)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_bookingtimestamp)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_booking": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_booking = n.getObjectValue<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "msdyn_BookingStatus": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_BookingStatus = n.getObjectValue<Bookingstatus>(createBookingstatusFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_ActivityPointers": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_Annotations": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_Appointments": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_AsyncOperations": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_connections1": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_connections2": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_Emails": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_Faxes": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_Letters": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_msfp_alerts": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_PhoneCalls": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_ProcessSession": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_SharePointDocumentLocations": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_SharePointDocumentLocations = n.getCollectionOfObjectValues<Sharepointdocumentlocation>(createSharepointdocumentlocationFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_SocialActivities": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_SyncErrors": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_bookingtimestamp_Tasks": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestamp_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_bookingtimestampid": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_bookingtimestampid = n.getStringValue(); },
            "msdyn_generatejournals": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_generatejournals = n.getBooleanValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_name = n.getStringValue(); },
            "msdyn_systemstatus": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_systemstatus = n.getNumberValue(); },
            "msdyn_timestampsource": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_timestampsource = n.getNumberValue(); },
            "msdyn_timestamptime": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).msdyn_timestamptime = n.getDateValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_bookingtimestamp).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_booking property value. 
     * @returns a bookableresourcebooking
     */
    public get msdyn_booking() {
        return this._msdyn_booking;
    };
    /**
     * Sets the msdyn_booking property value. 
     * @param value Value to set for the msdyn_booking property.
     */
    public set msdyn_booking(value: Bookableresourcebooking | undefined) {
        this._msdyn_booking = value;
    };
    /**
     * Gets the msdyn_BookingStatus property value. 
     * @returns a bookingstatus
     */
    public get msdyn_BookingStatus() {
        return this._msdyn_BookingStatus;
    };
    /**
     * Sets the msdyn_BookingStatus property value. 
     * @param value Value to set for the msdyn_BookingStatus property.
     */
    public set msdyn_BookingStatus(value: Bookingstatus | undefined) {
        this._msdyn_BookingStatus = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_bookingtimestamp_ActivityPointers() {
        return this._msdyn_bookingtimestamp_ActivityPointers;
    };
    /**
     * Sets the msdyn_bookingtimestamp_ActivityPointers property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_ActivityPointers property.
     */
    public set msdyn_bookingtimestamp_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_bookingtimestamp_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_bookingtimestamp_Annotations() {
        return this._msdyn_bookingtimestamp_Annotations;
    };
    /**
     * Sets the msdyn_bookingtimestamp_Annotations property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_Annotations property.
     */
    public set msdyn_bookingtimestamp_Annotations(value: Annotation[] | undefined) {
        this._msdyn_bookingtimestamp_Annotations = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_bookingtimestamp_Appointments() {
        return this._msdyn_bookingtimestamp_Appointments;
    };
    /**
     * Sets the msdyn_bookingtimestamp_Appointments property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_Appointments property.
     */
    public set msdyn_bookingtimestamp_Appointments(value: Appointment[] | undefined) {
        this._msdyn_bookingtimestamp_Appointments = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_bookingtimestamp_AsyncOperations() {
        return this._msdyn_bookingtimestamp_AsyncOperations;
    };
    /**
     * Sets the msdyn_bookingtimestamp_AsyncOperations property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_AsyncOperations property.
     */
    public set msdyn_bookingtimestamp_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_bookingtimestamp_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_bookingtimestamp_BulkDeleteFailures() {
        return this._msdyn_bookingtimestamp_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_bookingtimestamp_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_BulkDeleteFailures property.
     */
    public set msdyn_bookingtimestamp_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_bookingtimestamp_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_bookingtimestamp_connections1() {
        return this._msdyn_bookingtimestamp_connections1;
    };
    /**
     * Sets the msdyn_bookingtimestamp_connections1 property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_connections1 property.
     */
    public set msdyn_bookingtimestamp_connections1(value: Connection[] | undefined) {
        this._msdyn_bookingtimestamp_connections1 = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_bookingtimestamp_connections2() {
        return this._msdyn_bookingtimestamp_connections2;
    };
    /**
     * Sets the msdyn_bookingtimestamp_connections2 property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_connections2 property.
     */
    public set msdyn_bookingtimestamp_connections2(value: Connection[] | undefined) {
        this._msdyn_bookingtimestamp_connections2 = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_bookingtimestamp_DuplicateBaseRecord() {
        return this._msdyn_bookingtimestamp_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_bookingtimestamp_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_DuplicateBaseRecord property.
     */
    public set msdyn_bookingtimestamp_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_bookingtimestamp_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_bookingtimestamp_DuplicateMatchingRecord() {
        return this._msdyn_bookingtimestamp_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_bookingtimestamp_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_DuplicateMatchingRecord property.
     */
    public set msdyn_bookingtimestamp_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_bookingtimestamp_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_Emails property value. 
     * @returns a email
     */
    public get msdyn_bookingtimestamp_Emails() {
        return this._msdyn_bookingtimestamp_Emails;
    };
    /**
     * Sets the msdyn_bookingtimestamp_Emails property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_Emails property.
     */
    public set msdyn_bookingtimestamp_Emails(value: Email[] | undefined) {
        this._msdyn_bookingtimestamp_Emails = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_bookingtimestamp_Faxes() {
        return this._msdyn_bookingtimestamp_Faxes;
    };
    /**
     * Sets the msdyn_bookingtimestamp_Faxes property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_Faxes property.
     */
    public set msdyn_bookingtimestamp_Faxes(value: Fax[] | undefined) {
        this._msdyn_bookingtimestamp_Faxes = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_Letters property value. 
     * @returns a letter
     */
    public get msdyn_bookingtimestamp_Letters() {
        return this._msdyn_bookingtimestamp_Letters;
    };
    /**
     * Sets the msdyn_bookingtimestamp_Letters property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_Letters property.
     */
    public set msdyn_bookingtimestamp_Letters(value: Letter[] | undefined) {
        this._msdyn_bookingtimestamp_Letters = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_bookingtimestamp_MailboxTrackingFolders() {
        return this._msdyn_bookingtimestamp_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_bookingtimestamp_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_MailboxTrackingFolders property.
     */
    public set msdyn_bookingtimestamp_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_bookingtimestamp_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_bookingtimestamp_msdyn_approvals() {
        return this._msdyn_bookingtimestamp_msdyn_approvals;
    };
    /**
     * Sets the msdyn_bookingtimestamp_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_msdyn_approvals property.
     */
    public set msdyn_bookingtimestamp_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_bookingtimestamp_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_bookingtimestamp_msdyn_bookingalerts() {
        return this._msdyn_bookingtimestamp_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_bookingtimestamp_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_msdyn_bookingalerts property.
     */
    public set msdyn_bookingtimestamp_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_bookingtimestamp_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_bookingtimestamp_msdyn_ocliveworkitems() {
        return this._msdyn_bookingtimestamp_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_bookingtimestamp_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_msdyn_ocliveworkitems property.
     */
    public set msdyn_bookingtimestamp_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_bookingtimestamp_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_bookingtimestamp_msdyn_ocoutboundmessages() {
        return this._msdyn_bookingtimestamp_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_bookingtimestamp_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_msdyn_ocoutboundmessages property.
     */
    public set msdyn_bookingtimestamp_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_bookingtimestamp_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_bookingtimestamp_msdyn_ocsessions() {
        return this._msdyn_bookingtimestamp_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_bookingtimestamp_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_msdyn_ocsessions property.
     */
    public set msdyn_bookingtimestamp_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_bookingtimestamp_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_bookingtimestamp_msfp_alerts() {
        return this._msdyn_bookingtimestamp_msfp_alerts;
    };
    /**
     * Sets the msdyn_bookingtimestamp_msfp_alerts property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_msfp_alerts property.
     */
    public set msdyn_bookingtimestamp_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_bookingtimestamp_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_bookingtimestamp_msfp_surveyinvites() {
        return this._msdyn_bookingtimestamp_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_bookingtimestamp_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_msfp_surveyinvites property.
     */
    public set msdyn_bookingtimestamp_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_bookingtimestamp_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_bookingtimestamp_msfp_surveyresponses() {
        return this._msdyn_bookingtimestamp_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_bookingtimestamp_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_msfp_surveyresponses property.
     */
    public set msdyn_bookingtimestamp_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_bookingtimestamp_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_bookingtimestamp_PhoneCalls() {
        return this._msdyn_bookingtimestamp_PhoneCalls;
    };
    /**
     * Sets the msdyn_bookingtimestamp_PhoneCalls property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_PhoneCalls property.
     */
    public set msdyn_bookingtimestamp_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_bookingtimestamp_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_bookingtimestamp_PrincipalObjectAttributeAccesses() {
        return this._msdyn_bookingtimestamp_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_bookingtimestamp_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_bookingtimestamp_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_bookingtimestamp_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_bookingtimestamp_ProcessSession() {
        return this._msdyn_bookingtimestamp_ProcessSession;
    };
    /**
     * Sets the msdyn_bookingtimestamp_ProcessSession property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_ProcessSession property.
     */
    public set msdyn_bookingtimestamp_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_bookingtimestamp_ProcessSession = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_bookingtimestamp_RecurringAppointmentMasters() {
        return this._msdyn_bookingtimestamp_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_bookingtimestamp_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_RecurringAppointmentMasters property.
     */
    public set msdyn_bookingtimestamp_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_bookingtimestamp_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_bookingtimestamp_ServiceAppointments() {
        return this._msdyn_bookingtimestamp_ServiceAppointments;
    };
    /**
     * Sets the msdyn_bookingtimestamp_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_ServiceAppointments property.
     */
    public set msdyn_bookingtimestamp_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_bookingtimestamp_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_SharePointDocumentLocations property value. 
     * @returns a sharepointdocumentlocation
     */
    public get msdyn_bookingtimestamp_SharePointDocumentLocations() {
        return this._msdyn_bookingtimestamp_SharePointDocumentLocations;
    };
    /**
     * Sets the msdyn_bookingtimestamp_SharePointDocumentLocations property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_SharePointDocumentLocations property.
     */
    public set msdyn_bookingtimestamp_SharePointDocumentLocations(value: Sharepointdocumentlocation[] | undefined) {
        this._msdyn_bookingtimestamp_SharePointDocumentLocations = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_bookingtimestamp_SocialActivities() {
        return this._msdyn_bookingtimestamp_SocialActivities;
    };
    /**
     * Sets the msdyn_bookingtimestamp_SocialActivities property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_SocialActivities property.
     */
    public set msdyn_bookingtimestamp_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_bookingtimestamp_SocialActivities = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_bookingtimestamp_SyncErrors() {
        return this._msdyn_bookingtimestamp_SyncErrors;
    };
    /**
     * Sets the msdyn_bookingtimestamp_SyncErrors property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_SyncErrors property.
     */
    public set msdyn_bookingtimestamp_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_bookingtimestamp_SyncErrors = value;
    };
    /**
     * Gets the msdyn_bookingtimestamp_Tasks property value. 
     * @returns a task
     */
    public get msdyn_bookingtimestamp_Tasks() {
        return this._msdyn_bookingtimestamp_Tasks;
    };
    /**
     * Sets the msdyn_bookingtimestamp_Tasks property value. 
     * @param value Value to set for the msdyn_bookingtimestamp_Tasks property.
     */
    public set msdyn_bookingtimestamp_Tasks(value: Task[] | undefined) {
        this._msdyn_bookingtimestamp_Tasks = value;
    };
    /**
     * Gets the msdyn_bookingtimestampid property value. 
     * @returns a string
     */
    public get msdyn_bookingtimestampid() {
        return this._msdyn_bookingtimestampid;
    };
    /**
     * Sets the msdyn_bookingtimestampid property value. 
     * @param value Value to set for the msdyn_bookingtimestampid property.
     */
    public set msdyn_bookingtimestampid(value: string | undefined) {
        this._msdyn_bookingtimestampid = value;
    };
    /**
     * Gets the msdyn_generatejournals property value. 
     * @returns a boolean
     */
    public get msdyn_generatejournals() {
        return this._msdyn_generatejournals;
    };
    /**
     * Sets the msdyn_generatejournals property value. 
     * @param value Value to set for the msdyn_generatejournals property.
     */
    public set msdyn_generatejournals(value: boolean | undefined) {
        this._msdyn_generatejournals = value;
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
     * Gets the msdyn_systemstatus property value. 
     * @returns a integer
     */
    public get msdyn_systemstatus() {
        return this._msdyn_systemstatus;
    };
    /**
     * Sets the msdyn_systemstatus property value. 
     * @param value Value to set for the msdyn_systemstatus property.
     */
    public set msdyn_systemstatus(value: number | undefined) {
        this._msdyn_systemstatus = value;
    };
    /**
     * Gets the msdyn_timestampsource property value. 
     * @returns a integer
     */
    public get msdyn_timestampsource() {
        return this._msdyn_timestampsource;
    };
    /**
     * Sets the msdyn_timestampsource property value. 
     * @param value Value to set for the msdyn_timestampsource property.
     */
    public set msdyn_timestampsource(value: number | undefined) {
        this._msdyn_timestampsource = value;
    };
    /**
     * Gets the msdyn_timestamptime property value. 
     * @returns a Date
     */
    public get msdyn_timestamptime() {
        return this._msdyn_timestamptime;
    };
    /**
     * Sets the msdyn_timestamptime property value. 
     * @param value Value to set for the msdyn_timestamptime property.
     */
    public set msdyn_timestamptime(value: Date | undefined) {
        this._msdyn_timestamptime = value;
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
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_booking_value", this._msdyn_booking_value);
        writer.writeStringValue("_msdyn_bookingstatus_value", this._msdyn_bookingstatus_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Bookableresourcebooking>("msdyn_booking", this.msdyn_booking);
        writer.writeObjectValue<Bookingstatus>("msdyn_BookingStatus", this.msdyn_BookingStatus);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_bookingtimestamp_ActivityPointers", this.msdyn_bookingtimestamp_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_bookingtimestamp_Annotations", this.msdyn_bookingtimestamp_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_bookingtimestamp_Appointments", this.msdyn_bookingtimestamp_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_bookingtimestamp_AsyncOperations", this.msdyn_bookingtimestamp_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_bookingtimestamp_BulkDeleteFailures", this.msdyn_bookingtimestamp_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_bookingtimestamp_connections1", this.msdyn_bookingtimestamp_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_bookingtimestamp_connections2", this.msdyn_bookingtimestamp_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_bookingtimestamp_DuplicateBaseRecord", this.msdyn_bookingtimestamp_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_bookingtimestamp_DuplicateMatchingRecord", this.msdyn_bookingtimestamp_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_bookingtimestamp_Emails", this.msdyn_bookingtimestamp_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_bookingtimestamp_Faxes", this.msdyn_bookingtimestamp_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_bookingtimestamp_Letters", this.msdyn_bookingtimestamp_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_bookingtimestamp_MailboxTrackingFolders", this.msdyn_bookingtimestamp_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_bookingtimestamp_msdyn_approvals", this.msdyn_bookingtimestamp_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_bookingtimestamp_msdyn_bookingalerts", this.msdyn_bookingtimestamp_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_bookingtimestamp_msdyn_ocliveworkitems", this.msdyn_bookingtimestamp_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_bookingtimestamp_msdyn_ocoutboundmessages", this.msdyn_bookingtimestamp_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_bookingtimestamp_msdyn_ocsessions", this.msdyn_bookingtimestamp_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_bookingtimestamp_msfp_alerts", this.msdyn_bookingtimestamp_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_bookingtimestamp_msfp_surveyinvites", this.msdyn_bookingtimestamp_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_bookingtimestamp_msfp_surveyresponses", this.msdyn_bookingtimestamp_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_bookingtimestamp_PhoneCalls", this.msdyn_bookingtimestamp_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_bookingtimestamp_PrincipalObjectAttributeAccesses", this.msdyn_bookingtimestamp_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_bookingtimestamp_ProcessSession", this.msdyn_bookingtimestamp_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_bookingtimestamp_RecurringAppointmentMasters", this.msdyn_bookingtimestamp_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_bookingtimestamp_ServiceAppointments", this.msdyn_bookingtimestamp_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Sharepointdocumentlocation>("msdyn_bookingtimestamp_SharePointDocumentLocations", this.msdyn_bookingtimestamp_SharePointDocumentLocations);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_bookingtimestamp_SocialActivities", this.msdyn_bookingtimestamp_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_bookingtimestamp_SyncErrors", this.msdyn_bookingtimestamp_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_bookingtimestamp_Tasks", this.msdyn_bookingtimestamp_Tasks);
        writer.writeStringValue("msdyn_bookingtimestampid", this.msdyn_bookingtimestampid);
        writer.writeBooleanValue("msdyn_generatejournals", this.msdyn_generatejournals);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_systemstatus", this.msdyn_systemstatus);
        writer.writeNumberValue("msdyn_timestampsource", this.msdyn_timestampsource);
        writer.writeDateValue("msdyn_timestamptime", this.msdyn_timestamptime);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
